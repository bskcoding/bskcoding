/**
 * ColoredMaangText
 *
 * Renders a string (usually "MAANG") with every character given its own
 * distinct solid colour from the MAANG palette. This matches the per-character
 * colouring already used on the featured skill card and the letter grid
 * (red, amber, green, blue, purple) so the MAANG Kit / MAANG Preparation flow
 * looks consistent everywhere.
 *
 * Props:
 *  - text     : string   (the string to colour, e.g. "MAANG")
 *  - colors   : string[] (one colour per character)
 *  - className: string   (extra class applied to each letter span)
 *  - glow     : boolean  (add a soft coloured text-shadow glow)
 *  - offset   : number   (start cycling colors at this index, so consecutive
 *                          words continue the same palette seamlessly)
 *  - fixedColor: string  (when provided, every letter uses this single colour
 *                          instead of cycling through the palette)
 *  - color    : string   (alias for fixedColor)
 */

// Same vibrant palette the MAANG brand uses across the app.
const MAANG_COLORS = ["#FF5733", "#FFBD33", "#33FF57", "#33A1FF", "#A133FF"];

function ColoredMaangText({
  text = "MAANG",
  colors,
  className = "",
  glow = true,
  offset = 0,
  fixedColor,
  color,
}) {
  const palette = Array.isArray(colors) && colors.length ? colors : MAANG_COLORS;
  const single = fixedColor || color || null;
  const letters = text.split("");

  return (
    <>
      {letters.map((letter, i) => {
        const letterColor = single || palette[(offset + i) % palette.length];
        return (
          <span
            key={i}
            className={`maang-title-letter ${className}`.trim()}
            style={{
              color: letterColor,
              textShadow: glow ? `0 0 10px ${letterColor}80` : "none",
            }}
          >
            {letter}
          </span>
        );
      })}
    </>
  );
}

export default ColoredMaangText;