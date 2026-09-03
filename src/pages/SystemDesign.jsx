import { useState, useMemo, useEffect, useCallback } from "react";
import { systemDesignConcepts } from "../data/systemDesign/systemDesignConcepts";
import "./SystemDesign.css";

// Topic-wise section metadata (constant, outside component)
const CATEGORY_META = {
  "Core Concepts": { icon: "🧱", tagline: "Foundation building blocks" },
  "Distributed Systems": { icon: "🌐", tagline: "Scale across machines" },
  Networking: { icon: "🌍", tagline: "Communication protocols" },
  Databases: { icon: "🗄️", tagline: "Data storage & retrieval" },
  "Modern Architecture": { icon: "☁️", tagline: "Cloud-native practices" },
};

const CATEGORY_ORDER = [
  "Core Concepts",
  "Distributed Systems",
  "Networking",
  "Databases",
  "Modern Architecture",
];

function SystemDesign() {
  const [selectedConcept, setSelectedConcept] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categoriesWithCounts = useMemo(() => {
    const counts = { all: systemDesignConcepts.length };
    for (const c of systemDesignConcepts) {
      counts[c.category] = (counts[c.category] || 0) + 1;
    }
    const cats = [
      "all",
      ...new Set(systemDesignConcepts.map((c) => c.category)),
    ];
    return cats.map((cat) => ({ name: cat, count: counts[cat] }));
  }, []);

  const filteredConcepts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return systemDesignConcepts.filter((c) => {
      const matchesSearch =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.easyExplanation.toLowerCase().includes(q);
      const matchesCategory =
        activeCategory === "all" || c.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  // Group filtered concepts topic-wise (category -> its own section)
  const groupedSections = useMemo(() => {
    return CATEGORY_ORDER.map((cat) => ({
      category: cat,
      icon: CATEGORY_META[cat]?.icon || "📌",
      tagline: CATEGORY_META[cat]?.tagline || "",
      concepts: filteredConcepts.filter((c) => c.category === cat),
    })).filter((section) => section.concepts.length > 0);
  }, [filteredConcepts]);

  // Close modal on Escape key + lock background scroll
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") setSelectedConcept(null);
  }, []);

  useEffect(() => {
    if (!selectedConcept) return undefined;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedConcept, handleKeyDown]);

  // Collect whichever tag-lists a concept has (types / features / etc.)
  const getListBlocks = (concept) => {
    const blocks = [];
    if (concept.types?.length)
      blocks.push({ title: "🏷️ Types", items: concept.types, icon: "•" });
    if (concept.features?.length)
      blocks.push({ title: "⚡ Features", items: concept.features, icon: "✓" });
    if (concept.components?.length)
      blocks.push({
        title: "🧩 Components",
        items: concept.components,
        icon: "•",
      });
    if (concept.pillars?.length)
      blocks.push({ title: "🏛️ Pillars", items: concept.pillars, icon: "◆" });
    if (concept.principles?.length)
      blocks.push({
        title: "📋 Principles",
        items: concept.principles,
        icon: "▸",
      });
    if (concept.tools?.length)
      blocks.push({ title: "🛠️ Tools", items: concept.tools, icon: "⚙️" });
    return blocks;
  };

  return (
    <div className="sd-page">
      <header className="sd-header">
        <h1 className="sd-header-title">🏗️ 50 System Design Concepts</h1>
        <p className="sd-header-subtitle">
          Complete Guide for MAANG Interview Preparation — click any concept to
          open its detailed explanation with architecture diagram
        </p>
        <div className="sd-header-stats">
          <span className="sd-stat-badge">📚 50 Concepts</span>
          <span className="sd-stat-badge">📖 5 Categories</span>
          <span className="sd-stat-badge">🎯 Interview Ready</span>
        </div>
      </header>

      <div className="sd-filter-section">
        <input
          type="text"
          className="sd-search-input"
          placeholder="🔍 Search concepts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="sd-category-filter">
          {categoriesWithCounts.map((cat) => (
            <button
              key={cat.name}
              type="button"
              className={`sd-category-btn${
                activeCategory === cat.name ? " active" : ""
              }`}
              onClick={() => setActiveCategory(cat.name)}
            >
              {cat.name === "all" ? "📚 All" : cat.name}
              <span className="sd-count-badge">{cat.count}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="sd-results-count">
        Showing {filteredConcepts.length} of {systemDesignConcepts.length}{" "}
        concepts
      </div>

      {/* ===== Topic-wise sections ===== */}
      {filteredConcepts.length === 0 ? (
        <div className="sd-no-results">
          <p className="sd-no-results-title">No concepts found</p>
          <p className="sd-no-results-sub">
            Try adjusting your search or filter
          </p>
        </div>
      ) : (
        groupedSections.map((section) => (
          <section key={section.category} className="sd-topic-section">
            <div className="sd-topic-header">
              <span className="sd-topic-icon">{section.icon}</span>
              <div className="sd-topic-heading">
                <h2 className="sd-topic-title">{section.category}</h2>
                <p className="sd-topic-tagline">{section.tagline}</p>
              </div>
              <span className="sd-topic-count">
                {section.concepts.length} concepts
              </span>
            </div>

            <div className="sd-concepts-grid">
              {section.concepts.map((concept) => (
                <div
                  key={concept.id}
                  className="sd-concept-card"
                  onClick={() => setSelectedConcept(concept)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedConcept(concept);
                    }
                  }}
                >
                  <div className="sd-card-header">
                    <span className="sd-concept-id">#{concept.id}</span>
                    <span className="sd-category-tag">{concept.category}</span>
                  </div>

                  <h3 className="sd-concept-title">{concept.title}</h3>
                  <p className="sd-concept-desc">{concept.description}</p>

                  <div className="sd-easy-explain">
                    💡 <span>{concept.easyExplanation}</span>
                  </div>

                  {concept.types?.length > 0 && (
                    <div className="sd-types-wrap">
                      {concept.types.map((type) => (
                        <span key={type} className="sd-type-tag">
                          {type}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="sd-click-hint">▼ Tap to view details</div>
                </div>
              ))}
            </div>
          </section>
        ))
      )}

                  

      
      
      {/* ===== Concept Detail Popup ===== */}
      {selectedConcept && (
        <div
          className="sd-modal-overlay"
          onClick={() => setSelectedConcept(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedConcept.title}
        >
          <div
            className="sd-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="sd-modal-close"
              onClick={() => setSelectedConcept(null)}
              aria-label="Close concept details"
            >
              ✕
            </button>

            <div className="sd-modal-header">
              <span className="sd-concept-id">
                #{selectedConcept.id}
              </span>
              <span className="sd-category-tag">
                {selectedConcept.category}
              </span>
            </div>

            <h2 className="sd-modal-title">{selectedConcept.title}</h2>
            <p className="sd-modal-desc">{selectedConcept.description}</p>

            <div className="sd-modal-easy">
              <span className="sd-modal-easy-label">
                💡 EASY EXPLANATION
              </span>
              {selectedConcept.easyExplanation}
            </div>

            {getListBlocks(selectedConcept).length > 0 && (
              <div className="sd-modal-lists">
                {getListBlocks(selectedConcept).map((block) => (
                  <div
                    key={block.title}
                    className="sd-modal-list-block"
                  >
                    <div className="sd-modal-list-title">
                      {block.title}
                    </div>
                    <ul className="sd-modal-list">
                      {block.items.map((item) => (
                        <li key={item}>
                          {block.icon} {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {selectedConcept.diagram && (
              <>
                <div className="sd-modal-section-title">
                  📊 Architecture Diagram
                </div>
                <pre className="sd-modal-diagram">
                  {selectedConcept.diagram}
                </pre>
              </>
            )}

            <div className="sd-modal-video">
              <div className="sd-video-section">
                <div className="sd-video-title">🎬 Video Tutorial</div>
                {selectedConcept.videoLink ? (
                  <a
                    href={selectedConcept.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sd-video-btn"
                  >
                    ▶ Watch on YouTube
                  </a>
                ) : (
                  <span className="sd-video-coming-soon">
                    🎬 Video Coming Soon
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SystemDesign;