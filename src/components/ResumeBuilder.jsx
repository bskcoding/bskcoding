import { useState, useRef, Fragment } from "react";
import {
  FaLocationDot,
  FaSquarePhone,
  FaSquareGithub,
  FaLinkedin,
  FaSquareEnvelope,
} from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { GoogleGenAI } from "@google/genai";
import {
  parseResumeFile,
  buildResumeDataExtractionPrompt,
} from "../utils/fileParser";
import "./ResumeBuilder.css";

// Initialize Gemini AI client for suggestions
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const AI_MODELS = [
  "gemini-3-flash-preview",
  "gemini-2.0-flash",
  "gemini-flash-latest",
  "gemini-2.5-flash-preview",
];

const STEPS = [
  { id: "upload", label: "Upload Resume", icon: "📤" },
  { id: "personal", label: "Personal Info", icon: "👤" },
  { id: "summary", label: "Summary", icon: "📝" },
  { id: "experience", label: "Experience", icon: "💼" },
  { id: "projects", label: "Projects", icon: "🚀" },
  { id: "skills", label: "Skills", icon: "🛠️" },
  { id: "education", label: "Education", icon: "🎓" },
  { id: "certificates", label: "Certificates", icon: "📜" },
  { id: "preview", label: "Preview & Download", icon: "📄" },
];

// Display labels for each skill category key — keeps consistent naming
// across the preview and the PDF text export.
const SKILL_LABELS = {
  languages: "Languages",
  frameworks: "Frameworks",
  frontend: "Frontend",
  databases: "Databases",
  devops: "DevOps",
  testing: "Testing",
  cloud: "Cloud",
  messaging: "Messaging",
  concepts: "Core Concepts",
};

const EMPTY_RESUME = {
  name: "",
  title: "",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
  website: "",
  websiteName: "",
  location: "",
  summary: "",
  experience: [
    {
      company: "",
      role: "",
      startDate: "",
      endDate: "",
      location: "",
      points: [""],
    },
  ],
  projects: [{ name: "", techStack: "", points: [""] }],
  skills: {
    languages: "",
    frameworks: "",
    frontend: "",
    databases: "",
    devops: "",
    testing: "",
    cloud: "",
    messaging: "",
    concepts: "",
  },
  education: [
    {
      degree: "",
      institution: "",
      cgpa: "",
      startYear: "",
      endYear: "",
      location: "",
    },
  ],
  certificates: [{ name: "", url: "" }],
};

function ResumeBuilder({ onClose }) {
  const isModal = typeof onClose === "function";
  const fileInputRef = useRef(null);
  const previewRef = useRef(null);
  const [step, setStep] = useState(0);
  const [resume, setResume] = useState(EMPTY_RESUME);
  const [showPreview, setShowPreview] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiMessage, setAiMessage] = useState("");
  const [uploadingResume, setUploadingResume] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [parsingComplete, setParsingComplete] = useState(false);

  // Resume upload handler - parses the file and uses AI to auto-fill all fields
  const handleResumeUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!ai || !apiKey) {
      setAiMessage(
        "⚠️ Gemini API key not configured. Add VITE_GEMINI_API_KEY to .env",
      );
      return;
    }

    setUploadingResume(true);
    setAiLoading(true);
    setAiMessage("");
    setUploadedFile(file.name);

    try {
      // Parse the resume file (PDF/TXT) to extract text
      const parsed = await parseResumeFile(file);

      // Build the structured data extraction prompt
      const prompt = buildResumeDataExtractionPrompt(
        parsed.content,
        parsed.filename,
      );

      let response = null;
      let lastError = null;

      // Try each AI model until one works
      for (const model of AI_MODELS) {
        try {
          response = await ai.models.generateContent({
            model,
            contents: [{ role: "user", parts: [{ text: prompt }] }],
          });
          if (response?.text) break;
        } catch (err) {
          lastError = err;
          console.warn(`AI parse model '${model}' failed:`, err?.message);
        }
      }

      if (!response?.text && lastError) throw lastError;

      // Parse the JSON response
      const text = response.text.trim();
      const jsonStr = text
        .replace(/^```json\s*/, "")
        .replace(/```$/, "")
        .replace(/^```\s*/, "")
        .replace(/```$/, "")
        .trim();
      const parsedData = JSON.parse(jsonStr);

      // Sanitize and merge the extracted data into the resume
      setResume((prev) => {
        const updated = { ...prev };

        // Personal info
        const personalFields = [
          "name",
          "title",
          "email",
          "phone",
          "linkedin",
          "github",
          "website",
          "websiteName",
          "location",
        ];
        personalFields.forEach((field) => {
          if (parsedData[field] && !updated[field]) {
            updated[field] = String(parsedData[field]).trim();
          }
        });

        // Summary
        if (parsedData.summary && !updated.summary) {
          updated.summary = String(parsedData.summary).trim();
        }

        // Experience
        if (
          parsedData.experience &&
          Array.isArray(parsedData.experience) &&
          parsedData.experience.length > 0
        ) {
          const validExp = parsedData.experience.filter(
            (exp) => exp.company || exp.role,
          );
          if (validExp.length > 0) {
            updated.experience = validExp.map((exp) => ({
              company: exp.company || "",
              role: exp.role || "",
              startDate: exp.startDate || "",
              endDate: exp.endDate || "",
              location: exp.location || "",
              points: Array.isArray(exp.points)
                ? exp.points.filter(Boolean)
                : [""],
            }));
          }
        }

        // Projects
        if (
          parsedData.projects &&
          Array.isArray(parsedData.projects) &&
          parsedData.projects.length > 0
        ) {
          const validProjects = parsedData.projects.filter((p) => p.name);
          if (validProjects.length > 0) {
            updated.projects = validProjects.map((proj) => ({
              name: proj.name || "",
              techStack: proj.techStack || "",
              points: Array.isArray(proj.points)
                ? proj.points.filter(Boolean)
                : [""],
            }));
          }
        }

        // Skills
        if (parsedData.skills && typeof parsedData.skills === "object") {
          Object.keys(updated.skills).forEach((key) => {
            if (parsedData.skills[key] && !updated.skills[key]) {
              updated.skills[key] = String(parsedData.skills[key]).trim();
            }
          });
        }

        // Education
        if (
          parsedData.education &&
          Array.isArray(parsedData.education) &&
          parsedData.education.length > 0
        ) {
          const validEdu = parsedData.education.filter(
            (edu) => edu.degree || edu.institution,
          );
          if (validEdu.length > 0) {
            updated.education = validEdu.map((edu) => ({
              degree: edu.degree || "",
              institution: edu.institution || "",
              cgpa: edu.cgpa || "",
              startYear: edu.startYear || "",
              endYear: edu.endYear || "",
              location: edu.location || "",
            }));
          }
        }

        // Certificates
        if (parsedData.certificates && Array.isArray(parsedData.certificates)) {
          const validCerts = parsedData.certificates
            .filter(Boolean)
            .map((cert) =>
              typeof cert === "string"
                ? { name: cert, url: "" }
                : {
                    name: cert.name || cert.certificate || "",
                    url: cert.url || cert.link || "",
                  },
            )
            .filter((c) => c.name);
          if (validCerts.length > 0) {
            updated.certificates = validCerts;
          }
        }

        return updated;
      });

      setParsingComplete(true);
      setAiMessage(
        "✨ Resume parsed successfully! All your details have been auto-filled. Review each section below.",
      );

      // Auto-advance to next step after successful parsing
      setTimeout(() => {
        setStep(1);
      }, 1200);
    } catch (error) {
      console.error("Resume parsing error:", error);
      setAiMessage(
        "⚠️ Could not parse the resume. Please try again or fill in the details manually.",
      );
    } finally {
      setUploadingResume(false);
      setAiLoading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const updateField = (section, field, value) => {
    setResume((prev) => {
      if (section === "personal") {
        return { ...prev, [field]: value };
      }
      if (section === "summary") {
        return { ...prev, summary: value };
      }
      return {
        ...prev,
        [section]: { ...prev[section], [field]: value },
      };
    });
  };

  const updateArrayItem = (section, index, field, value) => {
    setResume((prev) => {
      const items = [...prev[section]];
      items[index] = { ...items[index], [field]: value };
      return { ...prev, [section]: items };
    });
  };

  const updateArrayPoint = (section, itemIndex, pointIndex, value) => {
    setResume((prev) => {
      const items = [...prev[section]];
      const points = [...items[itemIndex].points];
      points[pointIndex] = value;
      items[itemIndex] = { ...items[itemIndex], points };
      return { ...prev, [section]: items };
    });
  };

  const addArrayItem = (section) => {
    setResume((prev) => {
      const items = [...prev[section]];
      if (section === "experience") {
        items.push({
          company: "",
          role: "",
          startDate: "",
          endDate: "",
          location: "",
          points: [""],
        });
      } else if (section === "projects") {
        items.push({ name: "", techStack: "", points: [""] });
      } else if (section === "education") {
        items.push({
          degree: "",
          institution: "",
          cgpa: "",
          startYear: "",
          endYear: "",
          location: "",
        });
      } else if (section === "certificates") {
        items.push({ name: "", url: "" });
      }
      return { ...prev, [section]: items };
    });
  };

  const removeArrayItem = (section, index) => {
    setResume((prev) => {
      const items = [...prev[section]];
      items.splice(index, 1);
      return { ...prev, [section]: items };
    });
  };

  const addPoint = (section, itemIndex) => {
    setResume((prev) => {
      const items = [...prev[section]];
      items[itemIndex] = {
        ...items[itemIndex],
        points: [...items[itemIndex].points, ""],
      };
      return { ...prev, [section]: items };
    });
  };

  const removePoint = (section, itemIndex, pointIndex) => {
    setResume((prev) => {
      const items = [...prev[section]];
      const points = [...items[itemIndex].points];
      points.splice(pointIndex, 1);
      items[itemIndex] = { ...items[itemIndex], points };
      return { ...prev, [section]: items };
    });
  };

  const nextStep = () => {
    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      setShowPreview(true);
    }
  };

  // AI suggestion helper - asks Gemini to suggest content for the current section
  const getAISuggestion = async (sectionId) => {
    if (!ai || !apiKey) {
      setAiMessage(
        "⚠️ Gemini API key not configured. Add VITE_GEMINI_API_KEY to .env",
      );
      return;
    }

    setAiLoading(true);
    setAiMessage("");

    try {
      const sectionNames = {
        personal: "Personal Information",
        summary: "Professional Summary",
        experience: "Work Experience",
        projects: "Projects",
        skills: "Technical Skills",
        education: "Education",
        certificates: "Certificates",
      };

      const sectionName = sectionNames[sectionId] || sectionId;

      const prompt = `You are a professional resume writer. Based on the following resume data the user has already provided, suggest content for the "${sectionName}" section.

CURRENT RESUME DATA:
${JSON.stringify(resume, null, 2)}

TASK: Generate professional ${sectionName} content suggestions. 
- If the user has already entered some data, improve and enhance it.
- If fields are empty, suggest realistic professional content based on their experience level and other sections.
- Return ONLY the suggested content in a structured format that can be directly used.
- For skills: suggest comprehensive skill categories (Languages, Frameworks, Frontend, Databases, DevOps, Testing, Cloud, Messaging, Core Concepts) based on their experience and projects.
- For summary: write a compelling 2-3 sentence professional summary.
- For experience: suggest bullet points with action verbs and quantified achievements.
- For projects: suggest project descriptions with tech stack and contributions.
- For education: suggest standard education entries.
- For certificates: suggest relevant certifications for a Java developer.

Format your response as JSON matching this structure:
${sectionId === "personal" ? `{"name": "", "title": "", "email": "", "phone": "", "linkedin": "", "github": "", "website": "", "websiteName": "", "location": ""}` : ""}
${sectionId === "summary" ? `{"summary": "your suggested summary text"}` : ""}
${sectionId === "experience" ? `{"experience": [{"company": "", "role": "", "startDate": "", "endDate": "", "location": "", "points": ["point1", "point2"]}]}` : ""}
${sectionId === "projects" ? `{"projects": [{"name": "", "techStack": "", "points": ["point1", "point2"]}]}` : ""}
${sectionId === "skills" ? `{"skills": {"languages": "", "frameworks": "", "frontend": "", "databases": "", "devops": "", "testing": "", "cloud": "", "messaging": "", "concepts": ""}}` : ""}
${sectionId === "education" ? `{"education": [{"degree": "", "institution": "", "cgpa": "", "startYear": "", "endYear": "", "location": ""}]}` : ""}
${sectionId === "certificates" ? `{"certificates": [{"name": "cert1", "url": "link1"}]}` : ""}

IMPORTANT: Return ONLY valid JSON. No markdown, no explanation.`;

      let response = null;
      let lastError = null;

      for (const model of AI_MODELS) {
        try {
          response = await ai.models.generateContent({
            model,
            contents: [{ role: "user", parts: [{ text: prompt }] }],
          });
          if (response?.text) break;
        } catch (err) {
          lastError = err;
          console.warn(`AI suggest model '${model}' failed:`, err?.message);
        }
      }

      if (!response?.text && lastError) throw lastError;

      // Parse the JSON response
      const text = response.text.trim();
      // Remove markdown code fences if present
      const jsonStr = text
        .replace(/^```json\s*/, "")
        .replace(/```$/, "")
        .trim();
      const suggestions = JSON.parse(jsonStr);

      // Apply suggestions to resume
      setResume((prev) => {
        const updated = { ...prev };

        if (sectionId === "personal") {
          Object.keys(suggestions).forEach((key) => {
            if (suggestions[key] && !prev[key]) {
              updated[key] = suggestions[key];
            }
          });
        } else if (sectionId === "summary") {
          if (suggestions.summary && !prev.summary) {
            updated.summary = suggestions.summary;
          }
        } else if (sectionId === "skills") {
          if (suggestions.skills) {
            Object.keys(suggestions.skills).forEach((key) => {
              if (suggestions.skills[key] && !prev.skills[key]) {
                updated.skills = {
                  ...prev.skills,
                  [key]: suggestions.skills[key],
                };
              }
            });
          }
        } else if (sectionId === "experience") {
          if (suggestions.experience && Array.isArray(suggestions.experience)) {
            const existing = prev.experience.filter((e) => e.company || e.role);
            const suggested = suggestions.experience.filter(
              (e) => e.company || e.role,
            );
            if (existing.length === 0 && suggested.length > 0) {
              updated.experience = suggested;
            }
          }
        } else if (sectionId === "projects") {
          if (suggestions.projects && Array.isArray(suggestions.projects)) {
            const existing = prev.projects.filter((p) => p.name);
            const suggested = suggestions.projects.filter((p) => p.name);
            if (existing.length === 0 && suggested.length > 0) {
              updated.projects = suggested;
            }
          }
        } else if (sectionId === "education") {
          if (suggestions.education && Array.isArray(suggestions.education)) {
            const existing = prev.education.filter(
              (e) => e.degree || e.institution,
            );
            const suggested = suggestions.education.filter(
              (e) => e.degree || e.institution,
            );
            if (existing.length === 0 && suggested.length > 0) {
              updated.education = suggested;
            }
          }
        } else if (sectionId === "certificates") {
          if (
            suggestions.certificates &&
            Array.isArray(suggestions.certificates)
          ) {
            const existing = prev.certificates.filter(Boolean);
            if (existing.length === 0 && suggestions.certificates.length > 0) {
              updated.certificates = suggestions.certificates
                .filter(Boolean)
                .map((cert) =>
                  typeof cert === "string"
                    ? { name: cert, url: "" }
                    : {
                        name: cert.name || cert.certificate || "",
                        url: cert.url || cert.link || "",
                      },
                )
                .filter((c) => c.name);
            }
          }
        }

        return updated;
      });

      setAiMessage("✨ AI suggestions applied! Review and edit as needed.");
    } catch (error) {
      console.error("AI suggestion error:", error);
      setAiMessage("⚠️ Could not generate suggestions. Please try again.");
    } finally {
      setAiLoading(false);
    }
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const downloadPDF = async () => {
    // Ensure the preview is visible so html2canvas can capture it
    if (!showPreview) {
      setShowPreview(true);
      await new Promise((resolve) => setTimeout(resolve, 200));
    }

    const element = previewRef.current;
    if (!element) return;

    const constraintSelectors =
      ".rb-modal, .rb-body, .rb-overlay, .rb-page, .rb-page-card";

    try {
      // ── Temporarily disable height/overflow constraints on the live DOM
      //    so we can (a) measure exact link positions and (b) capture the
      //    full preview content rather than just the clipped visible area. ──
      const measuredElements = [element];
      document
        .querySelectorAll(constraintSelectors)
        .forEach((p) => measuredElements.push(p));

      const originalStyles = new Map();
      measuredElements.forEach((el) => {
        if (el) {
          originalStyles.set(el, {
            maxHeight: el.style.maxHeight,
            overflow: el.style.overflow,
            overflowY: el.style.overflowY,
          });
          el.style.maxHeight = "none";
          el.style.overflow = "visible";
          el.style.overflowY = "visible";
        }
      });

      // Force a synchronous layout flush so the style changes above
      // take effect before reading element positions
      // prettier-ignore
      void element.offsetHeight;

      // Measure preview dimensions and link positions relative to the
      // preview container (in CSS pixels). These will be scaled to PDF
      // mm coordinates after the html2canvas capture.
      const previewRect = element.getBoundingClientRect();
      const previewWidthPx = previewRect.width;
      const linkElements = element.querySelectorAll(".rb-preview-link");
      const linkPositions = Array.from(linkElements)
        .map((link) => {
          const rect = link.getBoundingClientRect();
          return {
            left: rect.left - previewRect.left,
            top: rect.top - previewRect.top,
            width: rect.width,
            height: rect.height,
            url: link.href,
          };
        })
        .filter((pos) => {
          // Keep mailto and well-formed HTTP(S) URLs that have a dot
          // in the hostname — filters out entries like "https://Linkdin".
          if (!pos.url) return false;
          if (pos.url.startsWith("mailto:")) return true;
          if (pos.url.startsWith("https://") || pos.url.startsWith("http://")) {
            try {
              return new URL(pos.url).hostname.includes(".");
            } catch {
              return false;
            }
          }
          return false;
        });

      // Use html2canvas to capture the EXACT preview HTML as an image,
      // guaranteeing the downloaded PDF matches the on-screen preview
      // pixel for pixel.
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
        allowTaint: true,
        onclone: (clonedDoc) => {
          const clonedEl = clonedDoc.querySelector(".rb-preview");
          if (clonedEl) {
            clonedEl.style.maxHeight = "none";
            clonedEl.style.overflow = "visible";
            clonedEl.style.overflowY = "visible";
          }
          clonedDoc.querySelectorAll(constraintSelectors).forEach((p) => {
            p.style.maxHeight = "none";
            p.style.overflow = "visible";
            p.style.overflowY = "visible";
          });
        },
      });

      // Restore original styles on the live DOM
      measuredElements.forEach((el) => {
        if (el && originalStyles.has(el)) {
          const styles = originalStyles.get(el);
          el.style.maxHeight = styles.maxHeight;
          el.style.overflow = styles.overflow;
          el.style.overflowY = styles.overflowY;
        }
      });

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      // Compute image dimensions to preserve aspect ratio and fit to
      // PDF page width.
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const imgRatio = canvasWidth / canvasHeight;
      const imgWidth = pageWidth;
      const imgHeight = pageWidth / imgRatio;

      const totalPages = Math.ceil(imgHeight / pageHeight);
      const imgData = canvas.toDataURL("image/png");

      // Scale factor: CSS pixels -> PDF mm (uniform image scaling)
      const pixelToMm = imgWidth / previewWidthPx;

      // Split the image across multiple pages if the resume is long
      for (let i = 0; i < totalPages; i++) {
        if (i > 0) pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, -(i * pageHeight), imgWidth, imgHeight);

        // Overlay invisible clickable link annotations on top of the
        // rasterised image so that email / LinkedIn / GitHub links are
        // tappable in the downloaded PDF (html2canvas produces a flat
        // image with no interactivity on its own).
        linkPositions.forEach((link) => {
          const linkPdfY = link.top * pixelToMm;
          const linkPage = Math.floor(linkPdfY / pageHeight);
          if (linkPage === i) {
            const pdfX = link.left * pixelToMm;
            const pdfY = linkPdfY - i * pageHeight;
            const pdfW = Math.max(link.width * pixelToMm, 1);
            const pdfH = Math.max(link.height * pixelToMm, 1);
            pdf.link(pdfX, pdfY, pdfW, pdfH, { url: link.url });
          }
        });
      }

      pdf.save(`${(resume.name || "resume").replace(/\s+/g, "_")}_Resume.pdf`);
    } catch (error) {
      console.error(
        "PDF generation failed, falling back to text-based PDF:",
        error,
      );
      // Fallback to the original jsPDF text-based approach
      downloadPDFText();
    }
  };

  const downloadPDFText = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 18;
    const contentWidth = pageWidth - margin * 2;
    let y = 20;

    // ===== HEADER (white background with dark blue text - matches preview) =====
    doc.setFillColor(255, 255, 255);
    doc.rect(0, 0, pageWidth, 55, "F");

    // Name
    doc.setTextColor(0, 0, 0); // dark blue #1e3a8a
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.text((resume.name || "Your Name").toUpperCase(), pageWidth / 2, 22, {
      align: "center",
    });

    // Contact line - render as clean text (no emojis for PDF compatibility)
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(0, 0, 0); // gray #4b5563

    const contactItems = [];
    if (resume.location) {
      contactItems.push({ label: resume.location, url: null });
    }
    if (resume.email) {
      const emailUrl = resume.email.startsWith("http")
        ? resume.email
        : `mailto:${resume.email}`;
      contactItems.push({ label: resume.email, url: emailUrl });
    }
    if (resume.phone) {
      contactItems.push({ label: resume.phone, url: null });
    }
    if (resume.linkedin) {
      // Handle case where LinkedIn URL is just "LinkedIn" or incomplete
      let linkedinUrl = resume.linkedin;
      if (!linkedinUrl.startsWith("http")) {
        // If it's just "LinkedIn" or similar, we'll leave the label as-is but set url to null
        // so it doesn't show a broken link; the preview will show it as plain text
        contactItems.push({
          label: "LinkedIn",
          url: null,
        });
      } else {
        linkedinUrl = resume.linkedin.startsWith("http")
          ? resume.linkedin
          : `https://${resume.linkedin.replace(/^https?:\/\//, "")}`;
        contactItems.push({
          label: "LinkedIn",
          url: linkedinUrl,
        });
      }
    }
    if (resume.github) {
      const githubUrl = resume.github.startsWith("http")
        ? resume.github
        : `https://${resume.github.replace(/^https?:\/\//, "")}`;
      contactItems.push({
        label: "GitHub",
        url: githubUrl,
      });
    }
    if (resume.website && resume.websiteName) {
      const websiteUrl = resume.website.startsWith("http")
        ? resume.website
        : `https://${resume.website.replace(/^https?:\/\//, "")}`;
      contactItems.push({
        label: resume.websiteName,
        url: websiteUrl,
      });
    }
    const contactLine = contactItems.map((item) => item.label).join("  |  ");
    const contactLines = doc.splitTextToSize(contactLine, contentWidth);
    let contactY = 42;
    contactLines.forEach((line) => {
      doc.text(line, pageWidth / 2, contactY, { align: "center" });
      contactY += 5;
    });

    // Add clickable link annotations over contact items in PDF
    if (contactLines.length > 0) {
      const lineHeight = 5;
      contactLines.forEach((line, lineIdx) => {
        const yPos = 42 + lineIdx * lineHeight;
        const lineWidth = doc.getTextWidth(line);
        const startX = (pageWidth - lineWidth) / 2;
        let runningText = "";

        contactItems.forEach((item) => {
          if (!item.url) {
            runningText += item.label + "  |  ";
            return;
          }
          const itemWidth = doc.getTextWidth(item.label);
          const beforeWidth = doc.getTextWidth(runningText);
          // Add invisible link over the item text
          doc.link(startX + beforeWidth, yPos - 4, itemWidth, lineHeight + 2, {
            url: item.url,
          });
          runningText += item.label + "  |  ";
        });
      });
    }

    y = 70;

    // ===== HELPER FUNCTIONS =====
    // Helper to ensure content fits on current page; moves to new page if needed
    const ensureSpace = (requiredHeight) => {
      if (y + requiredHeight > pageHeight - 20) {
        doc.addPage();
        y = 20;
      }
    };

    const addSection = (title) => {
      ensureSpace(15);
      doc.setTextColor(0, 0, 0); // plain black, no blue
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.text(title.toUpperCase(), margin, y);
      y += 4;
      doc.setDrawColor(209, 213, 219); // light gray line
      doc.setLineWidth(0.3);
      doc.line(margin, y, pageWidth - margin, y);
      y += 6;
    };

    const addText = (
      text,
      size = 10,
      bold = false,
      indent = 0,
      color = [0, 0, 0],
    ) => {
      doc.setFont("helvetica", bold ? "bold" : "normal");
      doc.setFontSize(size);
      doc.setTextColor(color[0], color[1], color[2]);
      const lines = doc.splitTextToSize(text, contentWidth - indent);
      ensureSpace(lines.length * 5.5);
      lines.forEach((line) => {
        doc.text(line, margin + indent, y);
        y += 5.5;
      });
    };

    const addBullet = (text, size = 10) => {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(size);
      doc.setTextColor(0, 0, 0);
      const lines = doc.splitTextToSize(text, contentWidth - 12);
      ensureSpace(lines.length * 5.5);
      lines.forEach((line, i) => {
        if (i === 0) {
          doc.text("•", margin + 2, y);
          doc.text(line, margin + 10, y);
        } else {
          doc.text(line, margin + 10, y);
        }
        y += 5.5;
      });
    };

    // ===== SUMMARY =====
    if (resume.summary) {
      addSection("Professional Summary");
      addText(resume.summary, 10);
      y += 4;
    }

    // ===== SKILLS =====
    const skillEntries = Object.entries(resume.skills).filter(([, v]) => v);
    if (skillEntries.length > 0) {
      addSection("Technical Skills");
      const skillLabels = {
        languages: "Languages",
        frameworks: "Frameworks",
        frontend: "Frontend",
        databases: "Databases",
        devops: "DevOps",
        testing: "Testing",
        cloud: "Cloud",
        messaging: "Messaging",
        concepts: "Core Concepts",
      };
      // Calculate max label width for consistent two-column alignment
      const labelWidths = skillEntries.map(([key]) => {
        const label =
          skillLabels[key] || key.charAt(0).toUpperCase() + key.slice(1);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        return doc.getTextWidth(`${label}:`);
      });
      const maxLabelWidth = Math.max(...labelWidths);
      const valueX = margin + 2 + maxLabelWidth + 6;

      skillEntries.forEach(([key, value]) => {
        const label =
          skillLabels[key] || key.charAt(0).toUpperCase() + key.slice(1);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        doc.text(`${label}:`, margin + 2, y);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(0, 0, 0);
        const valueLines = doc.splitTextToSize(
          value,
          pageWidth - valueX - margin,
        );
        ensureSpace(valueLines.length * 5.5);
        valueLines.forEach((line) => {
          doc.text(line, valueX, y);
          y += 5.5;
        });
        y += 1;
      });
      y += 3;
    }

    // ===== EXPERIENCE =====
    if (resume.experience.some((e) => e.company || e.role)) {
      addSection("Professional Experience");
      resume.experience.forEach((exp) => {
        if (!exp.company && !exp.role) return;
        ensureSpace(30);
        // Role - Company
        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0);
        const title = `${exp.role}${exp.company ? " - " + exp.company : ""}`;
        doc.text(title, margin, y);
        // Dates on right
        if (exp.startDate || exp.endDate) {
          doc.setFont("helvetica", "italic");
          doc.setFontSize(9);
          doc.setTextColor(0, 0, 0);
          const dates = `${exp.startDate || ""}${exp.startDate && exp.endDate ? " - " : ""}${exp.endDate || ""}`;
          doc.text(dates, pageWidth - margin, y, { align: "right" });
        }
        y += 5;
        // Location
        if (exp.location) {
          doc.setFont("helvetica", "italic");
          doc.setFontSize(9);
          doc.setTextColor(0, 0, 0);
          doc.text(exp.location, margin, y);
          y += 5;
        }
        // Bullet points
        exp.points.filter(Boolean).forEach((point) => {
          addBullet(point, 10);
        });
        y += 4;
      });
    }

    // ===== PROJECTS =====
    if (resume.projects.some((p) => p.name)) {
      addSection("Technical Projects");
      resume.projects.forEach((proj) => {
        if (!proj.name) return;
        ensureSpace(30);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0);
        doc.text(proj.name, margin, y);
        if (proj.techStack) {
          doc.setFont("helvetica", "italic");
          doc.setFontSize(9);
          doc.setTextColor(0, 0, 0);
          const techWidth = doc.getTextWidth(proj.techStack);
          doc.text(proj.techStack, pageWidth - margin - techWidth, y);
        }
        y += 5;
        proj.points.filter(Boolean).forEach((point) => {
          addBullet(point, 10);
        });
        y += 4;
      });
    }

    // ===== EDUCATION =====
    if (resume.education.some((e) => e.degree || e.institution)) {
      addSection("Education");
      resume.education.forEach((edu) => {
        if (!edu.degree && !edu.institution) return;
        ensureSpace(30);

        // Line 1: Institution (left, bold) and Years (right, normal/italic)
        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0);
        doc.text(edu.institution || "", margin, y);

        if (edu.startYear || edu.endYear) {
          doc.setFont("helvetica", "normal");
          doc.setFontSize(10);
          doc.setTextColor(0, 0, 0);
          const years = `${edu.startYear || ""}${edu.startYear && edu.endYear ? " – " : ""}${edu.endYear || ""}`;
          doc.text(years, pageWidth - margin, y, { align: "right" });
        }

        y += 5;

        // Line 2: Degree + CGPA (left, degree regular, CGPA italic) and Location (right, italic)
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);

        let degreeText = edu.degree || "";
        let cgpaText = edu.cgpa ? `CGPA: ${edu.cgpa}` : "";

        if (degreeText && cgpaText) {
          doc.text(degreeText + "; ", margin, y);
          const degreeWidth = doc.getTextWidth(degreeText + "; ");
          doc.setFont("helvetica", "italic");
          doc.text(cgpaText, margin + degreeWidth, y);
        } else if (degreeText) {
          doc.text(degreeText, margin, y);
        } else if (cgpaText) {
          doc.setFont("helvetica", "italic");
          doc.text(cgpaText, margin, y);
        }

        if (edu.location) {
          doc.setFont("helvetica", "italic");
          doc.setFontSize(9);
          doc.setTextColor(0, 0, 0);
          doc.text(edu.location, pageWidth - margin, y, { align: "right" });
        }

        y += 8;
      });
    }

    // ===== CERTIFICATES =====
    const certs = resume.certificates.filter((c) =>
      typeof c === "string" ? c : c.name,
    );
    if (certs.length > 0) {
      addSection("Certifications");
      certs.forEach((cert) => {
        const certName = typeof cert === "string" ? cert : cert.name || "";
        const certUrl = typeof cert === "string" ? "" : cert.url || "";
        if (certUrl && certUrl.startsWith("http")) {
          // Draw clickable link for certificate
          doc.setFont("helvetica", "normal");
          doc.setFontSize(10);
          doc.setTextColor(30, 58, 138);
          const lines = doc.splitTextToSize(certName, contentWidth - 12);
          ensureSpace(lines.length * 5.5);
          const linkY = y;
          lines.forEach((line, i) => {
            if (i === 0) {
              doc.text("•", margin + 2, y);
              doc.text(line, margin + 10, y);
            } else {
              doc.text(line, margin + 10, y);
            }
            y += 5.5;
          });
          doc.link(margin + 8, linkY - 4, doc.getTextWidth(certName), 5, {
            url: certUrl,
          });
          doc.setTextColor(0, 0, 0);
        } else {
          addBullet(certName, 10);
        }
      });
    }

    doc.save(`${(resume.name || "resume").replace(/\s+/g, "_")}_Resume.pdf`);
  };

  const renderStep = () => {
    switch (STEPS[step].id) {
      case "upload":
        return (
          <div className="rb-upload-wrap">
            <div className="rb-upload-icon">📤</div>
            <h3>Upload Your Resume</h3>
            <p>
              Upload your existing resume (PDF, TXT) and BSK AI will
              automatically detect your name, contact info, experience,
              projects, skills, education, and more — then fill all the resume
              builder fields for you.
            </p>

            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.txt,.md,.doc"
              onChange={handleResumeUpload}
              style={{ display: "none" }}
            />

            <button
              className="rb-upload-btn"
              onClick={() => fileInputRef.current?.click()}
              disabled={uploadingResume || aiLoading}
            >
              {uploadingResume ? (
                <>
                  <span className="rb-ai-spinner">⏳</span>
                  {uploadedFile ? `Parsing ${uploadedFile}...` : "Reading..."}
                </>
              ) : (
                <>
                  <span>📄</span>
                  Choose Resume File
                </>
              )}
            </button>

            {uploadedFile && !uploadingResume && (
              <div className="rb-upload-file">
                <span>✅</span>
                <span>
                  <strong>{uploadedFile}</strong> uploaded
                </span>
                {parsingComplete && (
                  <span className="rb-upload-done">✓ Parsed</span>
                )}
              </div>
            )}

            {parsingComplete && (
              <div className="rb-upload-success">
                <span>🎉</span>
                <div>
                  <strong>Resume data extracted!</strong>
                  <p>
                    {resume.name ? `Welcome, ${resume.name}! ` : ""}All your
                    details have been auto-filled. Review each section and make
                    edits if needed, or click "Next →" to continue.
                  </p>
                </div>
              </div>
            )}

            <div className="rb-upload-or">
              <span>OR</span>
            </div>

            <button className="rb-upload-skip" onClick={() => setStep(1)}>
              Start from scratch & fill manually →
            </button>

            <p className="rb-upload-hint">
              💡 Supported formats: PDF, TXT, MD. Your file is processed locally
              and only sent to Gemini for data extraction.
            </p>
          </div>
        );

      case "personal":
        return (
          <div className="rb-form-grid">
            <div className="rb-field">
              <label>Full Name *</label>
              <input
                type="text"
                value={resume.name}
                onChange={(e) =>
                  updateField("personal", "name", e.target.value)
                }
                placeholder="e.g. Venkatesh Bharath"
              />
            </div>
            <div className="rb-field">
              <label>Professional Title *</label>
              <input
                type="text"
                value={resume.title}
                onChange={(e) =>
                  updateField("personal", "title", e.target.value)
                }
                placeholder="e.g. Full Stack Developer"
              />
            </div>
            <div className="rb-field">
              <label>Email *</label>
              <input
                type="email"
                value={resume.email}
                onChange={(e) =>
                  updateField("personal", "email", e.target.value)
                }
                placeholder="e.g. yourname@email.com"
              />
            </div>
            <div className="rb-field">
              <label>Phone</label>
              <input
                type="tel"
                value={resume.phone}
                onChange={(e) =>
                  updateField("personal", "phone", e.target.value)
                }
                placeholder="e.g. +91-XXXXXXXXXX"
              />
            </div>
            <div className="rb-field">
              <label>Location</label>
              <input
                type="text"
                value={resume.location}
                onChange={(e) =>
                  updateField("personal", "location", e.target.value)
                }
                placeholder="e.g. Bangalore, India"
              />
            </div>
            <div className="rb-field">
              <label>LinkedIn URL</label>
              <input
                type="text"
                value={resume.linkedin}
                onChange={(e) =>
                  updateField("personal", "linkedin", e.target.value)
                }
                placeholder="e.g. linkedin.com/in/yourname"
              />
            </div>
            <div className="rb-field">
              <label>GitHub URL</label>
              <input
                type="text"
                value={resume.github}
                onChange={(e) =>
                  updateField("personal", "github", e.target.value)
                }
                placeholder="e.g. github.com/yourname"
              />
            </div>
            <div className="rb-field">
              <label>Website URL</label>
              <input
                type="text"
                value={resume.website}
                onChange={(e) =>
                  updateField("personal", "website", e.target.value)
                }
                placeholder="e.g. https://yourwebsite.com"
              />
            </div>
            <div className="rb-field">
              <label>Website Name</label>
              <input
                type="text"
                value={resume.websiteName}
                onChange={(e) =>
                  updateField("personal", "websiteName", e.target.value)
                }
                placeholder="e.g. Portfolio, LeetCode, HackerRank"
              />
            </div>
          </div>
        );

      case "summary":
        return (
          <div className="rb-form-grid">
            <div className="rb-field rb-full">
              <label>Professional Summary</label>
              <textarea
                value={resume.summary}
                onChange={(e) =>
                  updateField("summary", "summary", e.target.value)
                }
                placeholder="Write 2-3 sentences about your experience, expertise, and what you bring..."
                rows="5"
              />
              <p className="rb-hint">
                Tip: Mention your years of experience, key technologies, and
                what makes you unique.
              </p>
            </div>
          </div>
        );

      case "experience":
        return (
          <div className="rb-form-grid">
            {resume.experience.map((exp, idx) => (
              <div key={idx} className="rb-card-item">
                <div className="rb-card-header">
                  <h4>Experience {idx + 1}</h4>
                  {resume.experience.length > 1 && (
                    <button
                      className="rb-remove-btn"
                      onClick={() => removeArrayItem("experience", idx)}
                    >
                      ✕ Remove
                    </button>
                  )}
                </div>
                <div className="rb-field">
                  <label>Company</label>
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) =>
                      updateArrayItem(
                        "experience",
                        idx,
                        "company",
                        e.target.value,
                      )
                    }
                    placeholder="e.g. Zensar"
                  />
                </div>
                <div className="rb-field">
                  <label>Role / Title</label>
                  <input
                    type="text"
                    value={exp.role}
                    onChange={(e) =>
                      updateArrayItem("experience", idx, "role", e.target.value)
                    }
                    placeholder="e.g. Technical Specialist"
                  />
                </div>
                <div className="rb-field-row">
                  <div className="rb-field">
                    <label>Start Date</label>
                    <input
                      type="text"
                      value={exp.startDate}
                      onChange={(e) =>
                        updateArrayItem(
                          "experience",
                          idx,
                          "startDate",
                          e.target.value,
                        )
                      }
                      placeholder="e.g. May 2026"
                    />
                  </div>
                  <div className="rb-field">
                    <label>End Date</label>
                    <input
                      type="text"
                      value={exp.endDate}
                      onChange={(e) =>
                        updateArrayItem(
                          "experience",
                          idx,
                          "endDate",
                          e.target.value,
                        )
                      }
                      placeholder="e.g. Present"
                    />
                  </div>
                </div>
                <div className="rb-field">
                  <label>Location</label>
                  <input
                    type="text"
                    value={exp.location}
                    onChange={(e) =>
                      updateArrayItem(
                        "experience",
                        idx,
                        "location",
                        e.target.value,
                      )
                    }
                    placeholder="e.g. Remote - Bangalore, KA, India"
                  />
                </div>
                <div className="rb-field">
                  <label>Achievements / Responsibilities</label>
                  {exp.points.map((point, pIdx) => (
                    <div key={pIdx} className="rb-point-row">
                      <input
                        type="text"
                        value={point}
                        onChange={(e) =>
                          updateArrayPoint(
                            "experience",
                            idx,
                            pIdx,
                            e.target.value,
                          )
                        }
                        placeholder={`e.g. Developed RESTful APIs using Java, Spring Boot...`}
                      />
                      {exp.points.length > 1 && (
                        <button
                          className="rb-point-remove"
                          onClick={() => removePoint("experience", idx, pIdx)}
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    className="rb-add-point"
                    onClick={() => addPoint("experience", idx)}
                  >
                    + Add Point
                  </button>
                </div>
              </div>
            ))}
            <button
              className="rb-add-item"
              onClick={() => addArrayItem("experience")}
            >
              + Add Another Experience
            </button>
          </div>
        );

      case "projects":
        return (
          <div className="rb-form-grid">
            {resume.projects.map((proj, idx) => (
              <div key={idx} className="rb-card-item">
                <div className="rb-card-header">
                  <h4>Project {idx + 1}</h4>
                  {resume.projects.length > 1 && (
                    <button
                      className="rb-remove-btn"
                      onClick={() => removeArrayItem("projects", idx)}
                    >
                      ✕ Remove
                    </button>
                  )}
                </div>
                <div className="rb-field">
                  <label>Project Name</label>
                  <input
                    type="text"
                    value={proj.name}
                    onChange={(e) =>
                      updateArrayItem("projects", idx, "name", e.target.value)
                    }
                    placeholder="e.g. MARS Platform"
                  />
                </div>
                <div className="rb-field">
                  <label>Tech Stack</label>
                  <input
                    type="text"
                    value={proj.techStack}
                    onChange={(e) =>
                      updateArrayItem(
                        "projects",
                        idx,
                        "techStack",
                        e.target.value,
                      )
                    }
                    placeholder="e.g. Java, Spring Boot, Kafka, Cassandra"
                  />
                </div>
                <div className="rb-field">
                  <label>Key Contributions</label>
                  {proj.points.map((point, pIdx) => (
                    <div key={pIdx} className="rb-point-row">
                      <input
                        type="text"
                        value={point}
                        onChange={(e) =>
                          updateArrayPoint(
                            "projects",
                            idx,
                            pIdx,
                            e.target.value,
                          )
                        }
                        placeholder={`e.g. Developed RESTful APIs for payment processing...`}
                      />
                      {proj.points.length > 1 && (
                        <button
                          className="rb-point-remove"
                          onClick={() => removePoint("projects", idx, pIdx)}
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    className="rb-add-point"
                    onClick={() => addPoint("projects", idx)}
                  >
                    + Add Point
                  </button>
                </div>
              </div>
            ))}
            <button
              className="rb-add-item"
              onClick={() => addArrayItem("projects")}
            >
              + Add Another Project
            </button>
          </div>
        );

      case "skills":
        return (
          <div className="rb-form-grid">
            <div className="rb-field">
              <label>Languages</label>
              <input
                type="text"
                value={resume.skills.languages}
                onChange={(e) =>
                  updateField("skills", "languages", e.target.value)
                }
                placeholder="e.g. Java, SQL, JavaScript"
              />
            </div>
            <div className="rb-field">
              <label>Frameworks</label>
              <input
                type="text"
                value={resume.skills.frameworks}
                onChange={(e) =>
                  updateField("skills", "frameworks", e.target.value)
                }
                placeholder="e.g. Spring Boot, Spring MVC, Hibernate"
              />
            </div>
            <div className="rb-field">
              <label>Frontend</label>
              <input
                type="text"
                value={resume.skills.frontend}
                onChange={(e) =>
                  updateField("skills", "frontend", e.target.value)
                }
                placeholder="e.g. React.js, Material-UI, HTML5, CSS3"
              />
            </div>
            <div className="rb-field">
              <label>Databases</label>
              <input
                type="text"
                value={resume.skills.databases}
                onChange={(e) =>
                  updateField("skills", "databases", e.target.value)
                }
                placeholder="e.g. MySQL, Oracle, PostgreSQL"
              />
            </div>
            <div className="rb-field">
              <label>DevOps</label>
              <input
                type="text"
                value={resume.skills.devops}
                onChange={(e) =>
                  updateField("skills", "devops", e.target.value)
                }
                placeholder="e.g. Git, Maven, Jenkins, Docker"
              />
            </div>
            <div className="rb-field">
              <label>Testing</label>
              <input
                type="text"
                value={resume.skills.testing}
                onChange={(e) =>
                  updateField("skills", "testing", e.target.value)
                }
                placeholder="e.g. JUnit, Mockito, Postman"
              />
            </div>
            <div className="rb-field">
              <label>Cloud</label>
              <input
                type="text"
                value={resume.skills.cloud}
                onChange={(e) => updateField("skills", "cloud", e.target.value)}
                placeholder="e.g. GCP, AWS, Azure"
              />
            </div>
            <div className="rb-field">
              <label>Messaging</label>
              <input
                type="text"
                value={resume.skills.messaging}
                onChange={(e) =>
                  updateField("skills", "messaging", e.target.value)
                }
                placeholder="e.g. Apache Kafka, JMS, RabbitMQ"
              />
            </div>
            <div className="rb-field rb-full">
              <label>Core Concepts</label>
              <input
                type="text"
                value={resume.skills.concepts}
                onChange={(e) =>
                  updateField("skills", "concepts", e.target.value)
                }
                placeholder="e.g. Microservices, System Design, DSA, Agile/Scrum"
              />
            </div>
          </div>
        );

      case "education":
        return (
          <div className="rb-form-grid">
            {resume.education.map((edu, idx) => (
              <div key={idx} className="rb-card-item">
                <div className="rb-card-header">
                  <h4>Education {idx + 1}</h4>
                  {resume.education.length > 1 && (
                    <button
                      className="rb-remove-btn"
                      onClick={() => removeArrayItem("education", idx)}
                    >
                      ✕ Remove
                    </button>
                  )}
                </div>
                <div className="rb-field">
                  <label>Degree</label>
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) =>
                      updateArrayItem(
                        "education",
                        idx,
                        "degree",
                        e.target.value,
                      )
                    }
                    placeholder="e.g. Master of Computer Applications"
                  />
                </div>
                <div className="rb-field">
                  <label>Institution</label>
                  <input
                    type="text"
                    value={edu.institution}
                    onChange={(e) =>
                      updateArrayItem(
                        "education",
                        idx,
                        "institution",
                        e.target.value,
                      )
                    }
                    placeholder="e.g. Siddharth Institute of Engineering & Technology"
                  />
                </div>
                <div className="rb-field-row">
                  <div className="rb-field">
                    <label>Start Year</label>
                    <input
                      type="text"
                      value={edu.startYear}
                      onChange={(e) =>
                        updateArrayItem(
                          "education",
                          idx,
                          "startYear",
                          e.target.value,
                        )
                      }
                      placeholder="e.g. 2019"
                    />
                  </div>
                  <div className="rb-field">
                    <label>End Year</label>
                    <input
                      type="text"
                      value={edu.endYear}
                      onChange={(e) =>
                        updateArrayItem(
                          "education",
                          idx,
                          "endYear",
                          e.target.value,
                        )
                      }
                      placeholder="e.g. 2021"
                    />
                  </div>
                </div>
                <div className="rb-field-row">
                  <div className="rb-field">
                    <label>CGPA / Percentage</label>
                    <input
                      type="text"
                      value={edu.cgpa}
                      onChange={(e) =>
                        updateArrayItem(
                          "education",
                          idx,
                          "cgpa",
                          e.target.value,
                        )
                      }
                      placeholder="e.g. 7.90"
                    />
                  </div>
                  <div className="rb-field">
                    <label>Location</label>
                    <input
                      type="text"
                      value={edu.location}
                      onChange={(e) =>
                        updateArrayItem(
                          "education",
                          idx,
                          "location",
                          e.target.value,
                        )
                      }
                      placeholder="e.g. Puttur"
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              className="rb-add-item"
              onClick={() => addArrayItem("education")}
            >
              + Add Another Education
            </button>
          </div>
        );

      case "certificates":
        return (
          <div className="rb-form-grid">
            {resume.certificates.map((cert, idx) => (
              <div key={idx} className="rb-card-item">
                <div className="rb-card-header">
                  <h4>Certificate {idx + 1}</h4>
                  {resume.certificates.length > 1 && (
                    <button
                      className="rb-remove-btn"
                      onClick={() => removeArrayItem("certificates", idx)}
                    >
                      ✕ Remove
                    </button>
                  )}
                </div>
                <div className="rb-field">
                  <label>Certificate Name</label>
                  <input
                    type="text"
                    value={cert.name || ""}
                    onChange={(e) =>
                      updateArrayItem(
                        "certificates",
                        idx,
                        "name",
                        e.target.value,
                      )
                    }
                    placeholder="e.g. Oracle Certified Associate"
                  />
                </div>
                <div className="rb-field">
                  <label>Certificate URL (optional)</label>
                  <input
                    type="text"
                    value={cert.url || ""}
                    onChange={(e) =>
                      updateArrayItem(
                        "certificates",
                        idx,
                        "url",
                        e.target.value,
                      )
                    }
                    placeholder="e.g. https://www.credly.com/badges/..."
                  />
                  <p className="rb-hint">
                    Add a link so the certificate is clickable in the preview
                    and PDF.
                  </p>
                </div>
              </div>
            ))}
            <button
              className="rb-add-item"
              onClick={() => addArrayItem("certificates")}
            >
              + Add Another Certificate
            </button>
          </div>
        );

      case "preview":
        return (
          <div className="rb-preview-wrap">
            <div className="rb-preview-actions">
              <button className="rb-download-btn" onClick={downloadPDF}>
                ⬇ Download PDF
              </button>
              <button
                className="rb-preview-toggle"
                onClick={() => setShowPreview(!showPreview)}
              >
                {showPreview ? "Hide Preview" : "Show Preview"}
              </button>
            </div>
            <div
              className="rb-preview"
              ref={previewRef}
              style={{ display: showPreview ? "block" : "none" }}
            >
              <div className="rb-preview-header">
                <h2>{(resume.name || "Your Name").toUpperCase()}</h2>
                <p className="rb-preview-contact">
                  {resume.location && (
                    <span className="rb-preview-contact-item">
                      <FaLocationDot className="rb-preview-icon" />
                      {resume.location}
                    </span>
                  )}
                  {resume.email && (
                    <a
                      href={
                        resume.email.startsWith("http")
                          ? resume.email
                          : `mailto:${resume.email}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rb-preview-contact-item rb-preview-link"
                    >
                      <FaSquareEnvelope className="rb-preview-icon" />
                      {resume.email}
                    </a>
                  )}
                  {resume.phone && (
                    <span className="rb-preview-contact-item">
                      <FaSquarePhone className="rb-preview-icon" />
                      {resume.phone}
                    </span>
                  )}
                  {resume.linkedin && (
                    <a
                      href={
                        resume.linkedin.startsWith("http")
                          ? resume.linkedin
                          : `https://${resume.linkedin.replace(/^https?:\/\//, "")}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rb-preview-contact-item rb-preview-link"
                    >
                      <FaLinkedin className="rb-preview-icon" />
                      LinkedIn
                    </a>
                  )}
                  {resume.github && (
                    <a
                      href={
                        resume.github.startsWith("http")
                          ? resume.github
                          : `https://${resume.github.replace(/^https?:\/\//, "")}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rb-preview-contact-item rb-preview-link"
                    >
                      <FaSquareGithub className="rb-preview-icon" />
                      GitHub
                    </a>
                  )}
                  {resume.website && resume.websiteName && (
                    <a
                      href={
                        resume.website.startsWith("http")
                          ? resume.website
                          : `https://${resume.website.replace(/^https?:\/\//, "")}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rb-preview-contact-item rb-preview-link"
                    >
                      <FaLaptopCode className="rb-preview-icon" />
                      {resume.websiteName}
                    </a>
                  )}
                </p>
              </div>
              {resume.summary && (
                <div className="rb-preview-section">
                  <h3>Professional Summary</h3>
                  <p>{resume.summary}</p>
                </div>
              )}
              {Object.entries(resume.skills).some(([, v]) => v) && (
                <div className="rb-preview-section">
                  <h3>Technical Skills</h3>
                  <div className="rb-preview-skills-grid">
                    {Object.entries(resume.skills)
                      .filter(([, v]) => v)
                      .map(([key, value]) => (
                        <Fragment key={key}>
                          <span className="rb-preview-skill-label">
                            {SKILL_LABELS[key] ||
                              key.charAt(0).toUpperCase() + key.slice(1)}
                          </span>
                          <span className="rb-preview-skill-colon">:</span>
                          <span className="rb-preview-skill-value">
                            {value}
                          </span>
                        </Fragment>
                      ))}
                  </div>
                </div>
              )}
              {resume.experience.some((e) => e.company || e.role) && (
                <div className="rb-preview-section">
                  <h3>Professional Experience</h3>
                  {resume.experience
                    .filter((e) => e.company || e.role)
                    .map((exp, idx) => (
                      <div key={idx} className="rb-preview-item">
                        <div className="rb-preview-item-header">
                          <strong>
                            {exp.role}
                            {exp.company ? ` - ${exp.company}` : ""}
                          </strong>
                          <span>
                            {exp.startDate}
                            {exp.startDate && exp.endDate ? " - " : ""}
                            {exp.endDate}
                          </span>
                        </div>
                        {exp.location && (
                          <p className="rb-preview-location">{exp.location}</p>
                        )}
                        <ul>
                          {exp.points.filter(Boolean).map((p, i) => (
                            <li key={i}>{p}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                </div>
              )}
              {resume.projects.some((p) => p.name) && (
                <div className="rb-preview-section">
                  <h3>Technical Projects</h3>
                  {resume.projects
                    .filter((p) => p.name)
                    .map((proj, idx) => (
                      <div key={idx} className="rb-preview-item">
                        <div className="rb-preview-item-header">
                          <strong>{proj.name}</strong>
                          {proj.techStack && (
                            <span className="rb-preview-tech">
                              {proj.techStack}
                            </span>
                          )}
                        </div>
                        <ul>
                          {proj.points.filter(Boolean).map((p, i) => (
                            <li key={i}>{p}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                </div>
              )}
              {resume.education.some((e) => e.degree || e.institution) && (
                <div className="rb-preview-section">
                  <h3>Education</h3>
                  {resume.education
                    .filter((e) => e.degree || e.institution)
                    .map((edu, idx) => (
                      <div key={idx} className="rb-preview-item">
                        <div className="rb-preview-item-header">
                          <strong>{edu.institution}</strong>
                          <span>
                            {edu.startYear}
                            {edu.startYear && edu.endYear ? " - " : ""}
                            {edu.endYear}
                          </span>
                        </div>
                        <div
                          className="rb-preview-item-header"
                          style={{
                            fontStyle: "normal",
                            color: "#000000",
                            marginTop: "2px",
                          }}
                        >
                          <span style={{ fontSize: "0.85rem" }}>
                            {edu.degree}
                            {edu.degree && edu.cgpa ? "; " : ""}
                            {edu.cgpa && (
                              <span style={{ fontStyle: "italic" }}>
                                CGPA: {edu.cgpa}
                              </span>
                            )}
                          </span>
                          <span
                            style={{
                              fontSize: "0.8rem",
                              fontStyle: "italic",
                              color: "#000000",
                            }}
                          >
                            {edu.location}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              )}
              {resume.certificates.filter((c) => c.name || c).length > 0 && (
                <div className="rb-preview-section">
                  <h3>Certifications</h3>
                  <ul>
                    {resume.certificates
                      .filter((c) => c.name || c)
                      .map((cert, idx) => {
                        const certName =
                          typeof cert === "string" ? cert : cert.name || "";
                        const certUrl =
                          typeof cert === "string" ? "" : cert.url || "";
                        return (
                          <li key={idx}>
                            {certUrl ? (
                              <a
                                href={
                                  certUrl.startsWith("http")
                                    ? certUrl
                                    : `https://${certUrl.replace(/^https?:\/\//, "")}`
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rb-preview-link"
                              >
                                {certName}
                              </a>
                            ) : (
                              certName
                            )}
                          </li>
                        );
                      })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={isModal ? "rb-overlay" : "rb-page"}>
      <div className={isModal ? "rb-modal" : "rb-page-card"}>
        <div className="rb-header">
          <div className="rb-header-info">
            <div>
              <h2>Resume Builder</h2>
              <p>
                Fill in your details step by step to create a professional
                resume
              </p>
            </div>
          </div>
          {isModal && (
            <button className="rb-close" onClick={onClose}>
              ✕
            </button>
          )}
        </div>

        <div className="rb-steps">
          {STEPS.map((s, idx) => (
            <div
              key={s.id}
              className={`rb-step ${idx === step ? "active" : ""} ${idx < step ? "done" : ""}`}
              onClick={() => idx < step && setStep(idx)}
            >
              <span className="rb-step-icon">{s.icon}</span>
              <span className="rb-step-label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="rb-body">{renderStep()}</div>

        {aiMessage && (
          <div className="rb-ai-message">
            <span>{aiMessage}</span>
          </div>
        )}

        <div className="rb-footer">
          <button
            className="rb-btn rb-btn-ghost"
            onClick={prevStep}
            disabled={step === 0}
          >
            ← Back
          </button>
          <div className="rb-footer-center">
            {step < STEPS.length - 1 && STEPS[step].id !== "upload" && (
              <button
                className="rb-btn rb-btn-ai"
                onClick={() => getAISuggestion(STEPS[step].id)}
                disabled={aiLoading}
              >
                {aiLoading ? (
                  <>
                    <span className="rb-ai-spinner">⏳</span> AI Thinking...
                  </>
                ) : (
                  <>
                    <span>✨</span> AI Suggest
                  </>
                )}
              </button>
            )}
            <div className="rb-step-indicator">
              Step {step + 1} of {STEPS.length}
            </div>
          </div>
          <button className="rb-btn rb-btn-primary" onClick={nextStep}>
            {step === STEPS.length - 1
              ? "Finish ✓"
              : STEPS[step].id === "upload"
                ? "Skip →"
                : "Next →"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResumeBuilder;
