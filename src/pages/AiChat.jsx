import { useState, useRef, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from "react-markdown";
import { buildSystemPrompt } from "../data/ai/aiKnowledge";
import ResumeBuilder from "../components/ResumeBuilder";
import {
  parseResumeFile,
  buildResumeAnalysisPrompt,
} from "../utils/fileParser";
import "./AiChat.css";

// Initialize Gemini AI client
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

// Models to try in order (preview first, then stable fallbacks)
const MODELS = [
  "gemini-3-flash-preview",
  "gemini-2.0-flash",
  "gemini-flash-latest",
  "gemini-2.5-flash-preview",
];

// Suggested starter questions
const SUGGESTIONS = [
  "How should I start learning Java?",
  "Explain Spring Boot vs Spring Framework",
  "What is Apache Kafka used for?",
  "Explain SQL joins with examples",
  "How do I prepare for Java interviews?",
  "Explain microservices architecture",
];

function AiChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [parsingFile, setParsingFile] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const [showResumeBuilder, setShowResumeBuilder] = useState(false);
  const [resumeText, setResumeText] = useState("");
  const fileInputRef = useRef(null);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Auto-resize textarea
  useEffect(() => {
    const ta = textareaRef.current;
    if (ta) {
      ta.style.height = "auto";
      ta.style.height = Math.min(ta.scrollHeight, 150) + "px";
    }
  }, [input]);

  const sendMessage = async (textOverride) => {
    const question = (textOverride ?? input).trim();

    if (!question || loading) return;
    if (!ai || !apiKey) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "⚠️ **Gemini API key is not configured.**\n\nPlease add your `VITE_GEMINI_API_KEY` to the `.env` file at the project root to enable the AI assistant.",
        },
      ]);
      return;
    }

    const userMessage = { role: "user", content: question };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // Build conversation history for contextual answers
      const history = messages
        .filter((m) => m.role === "user" || m.role === "assistant")
        .map((m) => ({
          role: m.role === "user" ? "user" : "model",
          parts: [{ text: m.content }],
        }));

      history.push({
        role: "user",
        parts: [{ text: question }],
      });

      let response = null;
      let lastError = null;

      // Try each model until one works
      for (const model of MODELS) {
        try {
          response = await ai.models.generateContent({
            model,
            contents: history,
            config: {
              systemInstruction: buildSystemPrompt(),
            },
          });
          if (response?.text) break;
        } catch (err) {
          lastError = err;
          console.warn(`Model '${model}' failed:`, err?.message);
        }
      }

      if (!response?.text && lastError) {
        throw lastError;
      }

      const aiMessage = {
        role: "assistant",
        content:
          response.text ||
          "I received your message but couldn't generate a response. Please try again.",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Gemini API Error:", error);

      let errorText =
        "Sorry, I couldn't process your request. Please check your API key and try again.";

      if (error?.message?.includes("API_KEY")) {
        errorText =
          "⚠️ **Invalid or missing API key.**\n\nPlease check your `VITE_GEMINI_API_KEY` in the `.env` file. You can get a key from [Google AI Studio](https://aistudio.google.com/apikey).";
      } else if (error?.message?.includes("rate")) {
        errorText =
          "⚠️ **Rate limit reached.**\n\nPlease wait a moment and try again.";
      } else if (
        error?.message?.includes("404") ||
        error?.message?.includes("model")
      ) {
        errorText =
          "⚠️ **Model not available.**\n\nThe Gemini model may be unavailable. Please try again later or try a different question.";
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: errorText },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setParsingFile(true);

    try {
      const parsed = await parseResumeFile(file);

      setResumeText(parsed.content);

      // Add user message about upload
      setMessages((prev) => [
        ...prev,
        {
          role: "user",
          content: `📄 I've uploaded my resume: **${parsed.filename}**\n\nPlease analyze it and help me create a proper designed resume.`,
        },
      ]);

      // Build prompt with resume content
      const prompt = buildResumeAnalysisPrompt(parsed.content, parsed.filename);

      setLoading(true);

      try {
        const history = messages
          .filter((m) => m.role === "user" || m.role === "assistant")
          .map((m) => ({
            role: m.role === "user" ? "user" : "model",
            parts: [{ text: m.content }],
          }));

        history.push({ role: "user", parts: [{ text: prompt }] });

        let response = null;
        let lastError = null;

        for (const model of MODELS) {
          try {
            response = await ai.models.generateContent({
              model,
              contents: history,
              config: {
                systemInstruction: buildSystemPrompt(),
              },
            });
            if (response?.text) break;
          } catch (err) {
            lastError = err;
            console.warn(`Model '${model}' failed:`, err?.message);
          }
        }

        if (!response?.text && lastError) throw lastError;

        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              response.text ||
              "I received your resume but couldn't generate a response. Please try again.",
          },
        ]);
      } catch (error) {
        console.error("Gemini API Error:", error);
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "Sorry, I couldn't analyze your resume. Please check your API key and try again.",
          },
        ]);
      } finally {
        setLoading(false);
      }
    } catch (error) {
      console.error("File parse error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `⚠️ **${error.message || "Could not read the file."}**\n\nPlease upload a **PDF** or **TXT** file.`,
        },
      ]);
    } finally {
      setParsingFile(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const newChat = () => {
    setMessages([]);
    setInput("");
  };

  const copyMessage = async (content, id) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div className="ai-chat-page">
      {/* Header */}
      <div className="ai-chat-header">
        <div className="ai-chat-header-info">
          <div className="ai-chat-logo">
            <span>✦</span>
          </div>
          <div>
            <h1 className="ai-chat-title">BSK AI</h1>
            <p className="ai-chat-subtitle">
              Your coding mentor powered by Gemini
            </p>
          </div>
        </div>
        <div className="ai-chat-header-actions">
          <button
            className="ai-chat-resume-btn"
            onClick={() => setShowResumeBuilder(true)}
          >
            <span>📄</span> Build Resume
          </button>
          <button
            className="ai-chat-upload-btn"
            onClick={() => fileInputRef.current?.click()}
            disabled={parsingFile}
          >
            {parsingFile ? (
              <span className="ai-upload-spinner">⏳</span>
            ) : (
              <span>📎</span>
            )}
            {parsingFile ? "Reading..." : "Upload Resume"}
          </button>
          <button className="ai-chat-new-btn" onClick={newChat}>
            <span>＋</span> New Chat
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.txt,.md,.doc"
            onChange={handleFileUpload}
            style={{ display: "none" }}
          />
        </div>
      </div>

      {/* Chat area */}
      <div className="ai-chat-body">
        {messages.length === 0 ? (
          <div className="ai-chat-welcome">
            <div className="ai-chat-welcome-icon">✨</div>
            <h2>How can I help you today?</h2>
            <p>
              Ask me anything about Java, Spring Boot, Microservices, Kafka,
              SQL, DSA, System Design, or interview preparation. I'll guide you
              step by step — without revealing site internals.
            </p>
            <div className="ai-chat-suggestions">
              {SUGGESTIONS.map((text) => (
                <button
                  key={text}
                  onClick={() => sendMessage(text)}
                  disabled={loading}
                >
                  {text}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="ai-chat-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`ai-msg-row ${
                  message.role === "user" ? "ai-msg-user" : "ai-msg-bot"
                }`}
              >
                <div
                  className={`ai-avatar ${
                    message.role === "user" ? "ai-avatar-user" : "ai-avatar-bot"
                  }`}
                >
                  {message.role === "user" ? "You" : "✦"}
                </div>
                <div className="ai-msg-content">
                  <div className="ai-msg-name">
                    {message.role === "user" ? "You" : "BSK AI"}
                  </div>
                  <div className="ai-msg-text">
                    <ReactMarkdown>{message.content}</ReactMarkdown>
                  </div>
                  {message.role === "assistant" && (
                    <button
                      className={`ai-copy-btn ${copiedId === index ? "ai-copied" : ""}`}
                      onClick={() => copyMessage(message.content, index)}
                    >
                      {copiedId === index ? "✓ Copied" : "⧉ Copy"}
                    </button>
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="ai-msg-row ai-msg-bot">
                <div className="ai-avatar ai-avatar-bot">✦</div>
                <div className="ai-msg-content">
                  <div className="ai-msg-name">BSK AI</div>
                  <div className="ai-typing">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input */}
      <div className="ai-chat-input-wrap">
        <div className="ai-chat-input-box">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything about Java, Spring Boot, Kafka..."
            rows="1"
            disabled={loading}
          />
          <button
            className="ai-chat-send-btn"
            onClick={() => sendMessage()}
            disabled={!input.trim() || loading}
            aria-label="Send message"
          >
            {loading ? "⋯" : "➤"}
          </button>
        </div>
        <p className="ai-chat-disclaimer">
          BSK AI can make mistakes. Check important information.
        </p>
      </div>

      {/* Resume Builder Modal */}
      {showResumeBuilder && (
        <ResumeBuilder onClose={() => setShowResumeBuilder(false)} />
      )}
    </div>
  );
}

export default AiChat;
