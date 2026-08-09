// Utility to parse resume files (PDF, TXT) and extract text content
// This lets users upload their existing resume so the AI can analyze it
// and help create a properly designed resume.

import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";

// Configure pdf.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

/**
 * Extract text from a PDF file
 */
async function extractPDFText(file) {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    let fullText = "";

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const content = await page.getTextContent();
      const pageText = content.items
        .map((item) => item.str)
        .join(" ")
        .replace(/\s+/g, " ");
      fullText += pageText + "\n\n";
    }

    return fullText.trim();
  } catch (error) {
    console.error("PDF extraction error:", error);
    throw new Error(
      "Could not read the PDF file. Please try a different file or format.",
    );
  }
}

/**
 * Extract text from a TXT file
 */
async function extractTXTText(file) {
  return await file.text();
}

/**
 * Parse a resume file and return its text content
 * Supported: .pdf, .txt
 */
export async function parseResumeFile(file) {
  const fileName = file.name?.toLowerCase() || "";
  const fileType = file.type?.toLowerCase() || "";

  // Check file type
  if (fileName.endsWith(".pdf") || fileType === "application/pdf") {
    return {
      filename: file.name,
      type: "pdf",
      content: await extractPDFText(file),
    };
  }

  if (fileName.endsWith(".txt") || fileType === "text/plain") {
    return {
      filename: file.name,
      type: "txt",
      content: await extractTXTText(file),
    };
  }

  // Try to read as text if extension is unknown
  if (fileName.endsWith(".md") || fileName.endsWith(".doc")) {
    return {
      filename: file.name,
      type: "text",
      content: await extractTXTText(file),
    };
  }

  throw new Error("Unsupported file format. Please upload a PDF or TXT file.");
}

/**
 * Build a prompt to send with the uploaded resume content
 */
export function buildResumeAnalysisPrompt(resumeText, filename) {
  return `I have uploaded my resume file "${filename}". Here is the extracted text content:

=== RESUME CONTENT START ===
${resumeText}
=== RESUME CONTENT END ===

Please analyze my resume and:
1. Provide a professional summary of what my resume shows
2. Identify strengths and weaknesses
3. Suggest improvements for the resume (content, formatting, keywords)
4. Give a proper designed resume structure with my information organized professionally
5. Suggest what I should add/remove/change

Format your response as a structured markdown guide.`;
}
