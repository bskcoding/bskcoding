import { useState } from "react";
import { jsPDF } from "jspdf";
import { GoogleGenAI } from "@google/genai";
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
  { id: "personal", label: "Personal Info", icon: "👤" },
  { id: "summary", label: "Summary", icon: "📝" },
  { id: "experience", label: "Experience", icon: "💼" },
  { id: "projects", label: "Projects", icon: "🚀" },
  { id: "skills", label: "Skills", icon: "🛠️" },
  { id: "education", label: "Education", icon: "🎓" },
  { id: "certificates", label: "Certificates", icon: "📜" },
  { id: "preview", label: "Preview & Download", icon: "📄" },
];

const EMPTY_RESUME = {
  name: "",
  title: "",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
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
  certificates: [""],
};

function ResumeBuilder({ onClose }) {
  const [step, setStep] = useState(0);
  const [resume, setResume] = useState(EMPTY_RESUME);
  const [showPreview, setShowPreview] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiMessage, setAiMessage] = useState("");

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
        items.push("");
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
${sectionId === "personal" ? `{"name": "", "title": "", "email": "", "phone": "", "linkedin": "", "github": "", "location": ""}` : ""}
${sectionId === "summary" ? `{"summary": "your suggested summary text"}` : ""}
${sectionId === "experience" ? `{"experience": [{"company": "", "role": "", "startDate": "", "endDate": "", "location": "", "points": ["point1", "point2"]}]}` : ""}
${sectionId === "projects" ? `{"projects": [{"name": "", "techStack": "", "points": ["point1", "point2"]}]}` : ""}
${sectionId === "skills" ? `{"skills": {"languages": "", "frameworks": "", "frontend": "", "databases": "", "devops": "", "testing": "", "cloud": "", "messaging": "", "concepts": ""}}` : ""}
${sectionId === "education" ? `{"education": [{"degree": "", "institution": "", "cgpa": "", "startYear": "", "endYear": "", "location": ""}]}` : ""}
${sectionId === "certificates" ? `{"certificates": ["cert1", "cert2"]}` : ""}

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
              updated.certificates = suggestions.certificates;
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

  const downloadPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 18;
    const contentWidth = pageWidth - margin * 2;
    let y = 20;

    // ===== HEADER =====
    doc.setFillColor(15, 23, 42);
    doc.rect(0, 0, pageWidth, 55, "F");

    // Name
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.text((resume.name || "Your Name").toUpperCase(), pageWidth / 2, 22, {
      align: "center",
    });

    // Title
    if (resume.title) {
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(147, 197, 253);
      doc.text(resume.title.toUpperCase(), pageWidth / 2, 32, {
        align: "center",
      });
    }

    // Contact line
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(226, 232, 240);
    const contactParts = [];
    if (resume.location) contactParts.push(`Location: ${resume.location}`);
    if (resume.email) contactParts.push(`Email: ${resume.email}`);
    if (resume.phone) contactParts.push(`Mobile: ${resume.phone}`);
    if (resume.linkedin) contactParts.push(`LinkedIn: ${resume.linkedin}`);
    if (resume.github) contactParts.push(`GitHub: ${resume.github}`);
    const contactLine = contactParts.join("  |  ");
    const contactLines = doc.splitTextToSize(contactLine, contentWidth);
    let contactY = 42;
    contactLines.forEach((line) => {
      doc.text(line, pageWidth / 2, contactY, { align: "center" });
      contactY += 5;
    });

    y = 70;

    // ===== HELPER FUNCTIONS =====
    const addSection = (title) => {
      if (y > pageHeight - 40) {
        doc.addPage();
        y = 20;
      }
      doc.setFillColor(37, 99, 235);
      doc.rect(margin, y - 5, 3, 8, "F");
      doc.setTextColor(37, 99, 235);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(13);
      doc.text(title.toUpperCase(), margin + 8, y);
      y += 7;
      doc.setDrawColor(37, 99, 235);
      doc.setLineWidth(0.5);
      doc.line(margin, y, pageWidth - margin, y);
      y += 8;
    };

    const addText = (
      text,
      size = 10,
      bold = false,
      indent = 0,
      color = [50, 50, 50],
    ) => {
      doc.setFont("helvetica", bold ? "bold" : "normal");
      doc.setFontSize(size);
      doc.setTextColor(color[0], color[1], color[2]);
      const lines = doc.splitTextToSize(text, contentWidth - indent);
      lines.forEach((line) => {
        if (y > pageHeight - 30) {
          doc.addPage();
          y = 20;
        }
        doc.text(line, margin + indent, y);
        y += 5.5;
      });
    };

    const addBullet = (text, size = 10) => {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(size);
      doc.setTextColor(50, 50, 50);
      const lines = doc.splitTextToSize(text, contentWidth - 12);
      lines.forEach((line, i) => {
        if (y > pageHeight - 30) {
          doc.addPage();
          y = 20;
        }
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
    const skillEntries = Object.entries(resume.skills).filter(([k, v]) => v);
    if (skillEntries.length > 0) {
      addSection("Technical Skills");
      skillEntries.forEach(([key, value]) => {
        const label = key.charAt(0).toUpperCase() + key.slice(1);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.setTextColor(30, 30, 30);
        doc.text(`${label}:`, margin + 2, y);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(50, 50, 50);
        const valueLines = doc.splitTextToSize(value, contentWidth - 80);
        valueLines.forEach((line, i) => {
          if (y > pageHeight - 30) {
            doc.addPage();
            y = 20;
          }
          if (i === 0) {
            doc.text(line, margin + 80, y);
          } else {
            doc.text(line, margin + 80, y);
          }
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
        if (y > pageHeight - 50) {
          doc.addPage();
          y = 20;
        }
        // Role - Company
        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        doc.setTextColor(20, 20, 20);
        const title = `${exp.role}${exp.company ? " - " + exp.company : ""}`;
        doc.text(title, margin, y);
        // Dates on right
        if (exp.startDate || exp.endDate) {
          doc.setFont("helvetica", "italic");
          doc.setFontSize(9);
          doc.setTextColor(100, 100, 100);
          const dates = `${exp.startDate || ""}${exp.startDate && exp.endDate ? " - " : ""}${exp.endDate || ""}`;
          doc.text(dates, pageWidth - margin, y, { align: "right" });
        }
        y += 5;
        // Location
        if (exp.location) {
          doc.setFont("helvetica", "italic");
          doc.setFontSize(9);
          doc.setTextColor(100, 100, 100);
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
        if (y > pageHeight - 50) {
          doc.addPage();
          y = 20;
        }
        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        doc.setTextColor(20, 20, 20);
        doc.text(proj.name, margin, y);
        y += 5;
        if (proj.techStack) {
          doc.setFont("helvetica", "italic");
          doc.setFontSize(9);
          doc.setTextColor(100, 100, 100);
          doc.text(proj.techStack, margin, y);
          y += 5;
        }
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
        if (y > pageHeight - 50) {
          doc.addPage();
          y = 20;
        }
        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        doc.setTextColor(20, 20, 20);
        doc.text(edu.institution || "", margin, y);
        if (edu.startYear || edu.endYear) {
          doc.setFont("helvetica", "italic");
          doc.setFontSize(9);
          doc.setTextColor(100, 100, 100);
          const years = `${edu.startYear || ""}${edu.startYear && edu.endYear ? " - " : ""}${edu.endYear || ""}`;
          doc.text(years, pageWidth - margin, y, { align: "right" });
        }
        y += 5;
        if (edu.degree) {
          doc.setFont("helvetica", "normal");
          doc.setFontSize(10);
          doc.setTextColor(50, 50, 50);
          doc.text(edu.degree, margin + 2, y);
          y += 5;
        }
        if (edu.cgpa) {
          doc.setFont("helvetica", "normal");
          doc.setFontSize(10);
          doc.setTextColor(50, 50, 50);
          doc.text(`CGPA: ${edu.cgpa}`, margin + 2, y);
          y += 5;
        }
        if (edu.location) {
          doc.setFont("helvetica", "italic");
          doc.setFontSize(9);
          doc.setTextColor(100, 100, 100);
          doc.text(edu.location, margin + 2, y);
          y += 5;
        }
        y += 3;
      });
    }

    // ===== CERTIFICATES =====
    const certs = resume.certificates.filter(Boolean);
    if (certs.length > 0) {
      addSection("Certifications");
      certs.forEach((cert) => {
        addBullet(cert, 10);
      });
    }

    doc.save(`${(resume.name || "resume").replace(/\s+/g, "_")}_Resume.pdf`);
  };

  const renderStep = () => {
    switch (STEPS[step].id) {
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
            <div className="rb-field rb-full">
              <label>Certificates</label>
              {resume.certificates.map((cert, idx) => (
                <div key={idx} className="rb-point-row">
                  <input
                    type="text"
                    value={cert}
                    onChange={(e) => {
                      const items = [...resume.certificates];
                      items[idx] = e.target.value;
                      setResume((prev) => ({ ...prev, certificates: items }));
                    }}
                    placeholder={`e.g. Oracle Certified Associate`}
                  />
                  {resume.certificates.length > 1 && (
                    <button
                      className="rb-point-remove"
                      onClick={() => removeArrayItem("certificates", idx)}
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
              <button
                className="rb-add-point"
                onClick={() => addArrayItem("certificates")}
              >
                + Add Certificate
              </button>
            </div>
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
            {showPreview && (
              <div className="rb-preview">
                <div className="rb-preview-header">
                  <h2>{(resume.name || "Your Name").toUpperCase()}</h2>
                  {resume.title && <h3>{resume.title.toUpperCase()}</h3>}
                  <p>
                    {[
                      resume.location ? `Location: ${resume.location}` : "",
                      resume.email ? `Email: ${resume.email}` : "",
                      resume.phone ? `Mobile: ${resume.phone}` : "",
                      resume.linkedin ? `LinkedIn: ${resume.linkedin}` : "",
                      resume.github ? `GitHub: ${resume.github}` : "",
                    ]
                      .filter(Boolean)
                      .join("  |  ")}
                  </p>
                </div>
                {resume.summary && (
                  <div className="rb-preview-section">
                    <h3>Professional Summary</h3>
                    <p>{resume.summary}</p>
                  </div>
                )}
                {Object.entries(resume.skills).some(([k, v]) => v) && (
                  <div className="rb-preview-section">
                    <h3>Technical Skills</h3>
                    {Object.entries(resume.skills)
                      .filter(([k, v]) => v)
                      .map(([key, value]) => (
                        <p key={key} className="rb-preview-skill">
                          <strong>
                            {key.charAt(0).toUpperCase() + key.slice(1)}:
                          </strong>{" "}
                          {value}
                        </p>
                      ))}
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
                            <p className="rb-preview-location">
                              {exp.location}
                            </p>
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
                          </div>
                          {proj.techStack && (
                            <p className="rb-preview-tech">{proj.techStack}</p>
                          )}
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
                          {edu.degree && <p>{edu.degree}</p>}
                          {edu.cgpa && <p>CGPA: {edu.cgpa}</p>}
                          {edu.location && <p>{edu.location}</p>}
                        </div>
                      ))}
                  </div>
                )}
                {resume.certificates.filter(Boolean).length > 0 && (
                  <div className="rb-preview-section">
                    <h3>Certifications</h3>
                    <ul>
                      {resume.certificates.filter(Boolean).map((cert, idx) => (
                        <li key={idx}>{cert}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="rb-overlay">
      <div className="rb-modal">
        <div className="rb-header">
          <div className="rb-header-info">
            <div className="rb-header-icon">📄</div>
            <div>
              <h2>Resume Builder</h2>
              <p>
                Fill in your details step by step to create a professional
                resume
              </p>
            </div>
          </div>
          <button className="rb-close" onClick={onClose}>
            ✕
          </button>
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
            {step < STEPS.length - 1 && (
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
            {step === STEPS.length - 1 ? "Finish ✓" : "Next →"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResumeBuilder;
