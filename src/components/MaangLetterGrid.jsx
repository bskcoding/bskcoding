import React from "react";

/**
 * MaangLetterGrid
 *
 * An attractive, colorful grid that spells "MAANG" where every character
 * gets its own distinct colour (sourced from `charColors`, which defaults to
 * the vibrant palette already stored on the MAANG skill in skills.js).
 *
 * Each letter tile is a glossy, glowing cell with an animated ring of
 * particles, a moving light glare, a pulsing coloured glow and a subtle
 * hover "lift". Together they form a bold, colorful MAANG showcase that
 * works on the dark app background.
 *
 * Props:
 *  - charColors  : string[]  (5 colours, one per letter)
 *  - className   : string    (extra wrapper class)
 *  - compact     : boolean   (smaller tiles for tight spaces, e.g. skill card)
 */

const MAANG = [
  { letter: "M" },
  { letter: "A" },
  { letter: "A" },
  { letter: "N" },
  { letter: "G" },
];

// Vibrant, distinct colours for each of the five letters.
const DEFAULT_COLORS = [
  "#FF5733", // M – coral red
  "#FFBD33", // A – amber
  "#33FF57", // A – electric green
  "#33A1FF", // N – royal blue
  "#A133FF", // G – royal purple
];

// 10 small particle dots orbit around every tile.
const PARTICLE_COUNT = 10;

function MaangLetterGrid({ charColors, className = "", compact = false }) {
  const colors =
    Array.isArray(charColors) && charColors.length
      ? charColors
      : DEFAULT_COLORS;

  return (
    <div
      className={`maang-letter-grid ${compact ? "maang-letter-grid--compact" : ""} ${className}`.trim()}
      role="img"
      aria-label="MAANG companies preparation grid"
    >
      {MAANG.map((item, index) => {
        const color = colors[index % colors.length];
        return (
          <div
            key={item.company + index}
            className="maang-letter-cell"
            style={{
              "--ml-color": color,
              "--ml-delay": `${index * 0.12}s`,
            }}
          >
            {/* Animated ring of orbiting particle dots (inside colourful design) */}
            <div className="maang-particle-ring">
              {Array.from({ length: PARTICLE_COUNT }).map((_, p) => (
                <span
                  key={p}
                  className="maang-particle"
                  style={{ "--ml-p-angle": `${(p * 360) / PARTICLE_COUNT}deg` }}
                />
              ))}
            </div>

            {/* Moving light glare for a glossy, polished look */}
            <span className="maang-glare" />

            <div className="maang-letter-inner">
              <span className="maang-letter">{item.letter}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MaangLetterGrid;
