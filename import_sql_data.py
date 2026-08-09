from pathlib import Path

src = Path(r"c:\Users\USER\Downloads\java-fullstack-interview-kit-main\java-fullstack-interview-kit-main\SQL.md")
dst = Path("src/data/sql/sqlInterviewQuestions.js")
text = src.read_text(encoding="utf-8")
text = text.replace("`", "\\`")
dst.write_text("export const sqlInterviewQuestions = `" + text + "`;\n", encoding="utf-8")
print("wrote", dst)
