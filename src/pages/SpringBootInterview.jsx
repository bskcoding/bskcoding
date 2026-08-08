import { useState } from "react";
import { Link } from "react-router-dom";
import "prismjs";
import "prismjs/components/prism-java";
import "prismjs/components/prism-properties";
import "prismjs/components/prism-xml-doc";
import "prismjs/components/prism-groovy";
import "prismjs/themes/prism-tomorrow.css";
import "./SpringBootInterview.css";
import { springBootInterviewPart1 } from "../data/springBootInterviewPart1";
import { springBootInterviewPart2 } from "../data/springBootInterviewPart2";

// Ensure Prism is available globally
if (typeof window !== "undefined" && !window.Prism) {
  try {
    // Import Prism to window if not already available
    // This handles cases where Prism might not auto-attach to window
  } catch (e) {
    console.warn("Prism initialization warning:", e);
  }
}

// Split into two files to keep each file small and manageable.
// Part 1 = Questions 1-50, Part 2 = Questions 51-100.
// Concatenated content is identical to the original single source.
const interviewData = springBootInterviewPart1 + springBootInterviewPart2;

// Syntax highlighter using Prism.js.
// Safely accesses Prism from the global window object and falls back to plain text.
const highlightCode = (code, language) => {
  const lang = language || "java";
  try {
    // Get Prism from global scope with defensive checks
    if (typeof window === "undefined" || !window.Prism) return code;
    if (!window.Prism.languages) return code;

    const grammar = window.Prism.languages[lang] || window.Prism.languages.java;
    if (!grammar) return code;

    const highlighted = window.Prism.highlight(code, grammar, lang);
    return highlighted || code;
  } catch (err) {
    console.warn(`Prism highlighting failed for language '${language}':`, err);
    return code;
  }
};

// Parse questions from markdown with categories
const parseQuestions = (content) => {
  const categories = [];
  const lines = content.split("\n");
  let currentCategory = null;
  let currentQuestion = null;
  let inCodeBlock = false;
  let codeBlockContent = [];
  let codeBlockLanguage = "";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Detect code blocks
    const trimmedLine = line.trim();
    if (trimmedLine.startsWith("```")) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeBlockLanguage = trimmedLine.replace(/```/g, "").trim() || "java";
        codeBlockContent = [];
      } else {
        inCodeBlock = false;
        if (currentQuestion && codeBlockContent.length > 0) {
          // Remove common leading whitespace from all lines
          const lines = codeBlockContent.join("\n").split("\n");
          const minIndent = Math.min(
            ...lines
              .filter((l) => l.trim())
              .map((l) => l.match(/^\s*/)[0].length),
          );
          const trimmedContent = lines
            .map((l) => l.slice(minIndent))
            .join("\n")
            .trim();
          currentQuestion.response.push({
            type: "code",
            content: trimmedContent,
            language: codeBlockLanguage,
          });
        }
        codeBlockContent = [];
      }
      continue;
    }

    if (inCodeBlock) {
      codeBlockContent.push(line);
      continue;
    }

    // Detect category (### Category Name)
    const categoryMatch = line.match(/^###\s+(.+)/);
    if (categoryMatch) {
      currentCategory = {
        name: categoryMatch[1],
        questions: [],
      };
      categories.push(currentCategory);
      currentQuestion = null;
      continue;
    }

    // Detect question
    const questionMatch = line.match(/^(\d+)\.\s*\*\*(.+?)\*\*/);
    if (questionMatch) {
      currentQuestion = {
        id: questionMatch[1],
        question: questionMatch[2],
        response: [],
      };
      if (currentCategory) {
        currentCategory.questions.push(currentQuestion);
      }
    } else if (currentQuestion && line.trim().startsWith("- **Answer**:")) {
      const responseText = line.replace("- **Answer**:", "").trim();
      if (responseText) {
        currentQuestion.response.push({
          type: "text",
          content: responseText,
        });
      }
    } else if (currentQuestion && line.trim().startsWith("- **Example**:")) {
      const responseText = line.replace("- **Example**:", "").trim();
      if (responseText) {
        currentQuestion.response.push({
          type: "example",
          content: responseText,
        });
      }
    } else if (currentQuestion && line.trim().startsWith("- **Note**:")) {
      const responseText = line.replace("- **Note**:", "").trim();
      if (responseText) {
        currentQuestion.response.push({
          type: "note",
          content: responseText,
        });
      }
    } else if (currentQuestion && line.trim() && !line.trim().startsWith("#")) {
      const cleanLine = line.trim();
      if (
        cleanLine &&
        cleanLine.length > 1 &&
        !cleanLine.match(/^[-*]\s*$/) &&
        !cleanLine.match(/^[a-zA-Z]$/) &&
        !cleanLine.match(/^[0-9]$/)
      ) {
        const formattedText = cleanLine
          .replace(/^\s*[-*]\s+/, "")
          .replace(/\*\*(.+?)\*\*/g, "$1")
          .replace(/`([^`]+)`/g, "$1");

        currentQuestion.response.push({
          type: "text",
          content: formattedText,
        });
      }
    }
  }

  return categories;
};

const interviewCategories = parseQuestions(interviewData);
const totalQuestions = interviewCategories.reduce(
  (sum, cat) => sum + cat.questions.length,
  0,
);

function SpringBootInterview() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleQuestion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="spring-boot-interview-page">
      {/* Hero Section */}
      <section className="interview-header">
        <div className="interview-header-content">
          <Link to="/spring-boot" className="back-button">
            ← Back to Spring Boot
          </Link>
          <h1 className="interview-title">Spring Boot Interview Questions</h1>
          <p className="interview-subtitle">
            Master Spring Boot interview questions with detailed answers and
            code examples
          </p>
          <div className="interview-stats">
            <div className="interview-stat">
              <span className="stat-number">{totalQuestions}+</span>
              <span className="stat-label">Questions</span>
            </div>
            <div className="interview-stat">
              <span className="stat-number">{interviewCategories.length}</span>
              <span className="stat-label">Categories</span>
            </div>
            <div className="interview-stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Free</span>
            </div>
          </div>
        </div>
      </section>

      {/* Questions List */}
      <section className="questions-section">
        <div className="questions-container">
          <div className="questions-list">
            {interviewCategories.map((category, catIndex) => (
              <div key={catIndex} className="category-section">
                <h2 className="category-title">{category.name}</h2>
                <div className="questions-vertical">
                  {category.questions.map((q) => (
                    <div
                      key={q.id}
                      className={`question-item-vertical ${expandedId === q.id ? "active" : ""}`}
                    >
                      <div
                        className="question-item-header"
                        onClick={() => toggleQuestion(q.id)}
                      >
                        <span className="q-number">Q{q.id}</span>
                        <p className="q-text">{q.question}</p>
                        <span
                          className={`expand-arrow ${expandedId === q.id ? "expanded" : ""}`}
                        >
                          ▼
                        </span>
                      </div>
                      {expandedId === q.id && (
                        <div className="question-item-content">
                          <div className="question-card">
                            <div className="question-answer">
                              <h3 className="answer-title">Answer:</h3>
                              {q.response.map((item, idx) => {
                                if (item.type === "code") {
                                  return (
                                    <div key={idx} className="code-block">
                                      <div className="code-header">
                                        <span className="code-language">
                                          {item.language || "java"}
                                        </span>
                                      </div>
                                      <pre
                                        className={`language-${item.language || "java"}`}
                                      >
                                        <code
                                          className={`language-${item.language || "java"}`}
                                          dangerouslySetInnerHTML={{
                                            __html: highlightCode(
                                              item.content,
                                              item.language,
                                            ),
                                          }}
                                        />
                                      </pre>
                                    </div>
                                  );
                                } else if (item.type === "example") {
                                  return (
                                    <p key={idx} className="answer-text">
                                      📘 {item.content}
                                    </p>
                                  );
                                } else if (item.type === "note") {
                                  return (
                                    <p key={idx} className="answer-text">
                                      💡 {item.content}
                                    </p>
                                  );
                                } else {
                                  return (
                                    <p key={idx} className="answer-text">
                                      {item.content}
                                    </p>
                                  );
                                }
                              })}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SpringBootInterview;
