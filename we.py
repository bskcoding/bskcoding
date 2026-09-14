import os

part1 = """import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import "./ElevatorLot.css";
import { JAVA1 } from "./e1";
import { JAVA2 } from "./e2";
import { JAVA3 } from "./e3";
import { SQL, UML } from "./elevatorTexts";

function CodeBlock({ code, lang }) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.removeAttribute("data-highlighted");
      hljs.highlightElement(ref.current);
    }
  }, [code]);
  return (
    <div className="el-code">
      <div className="el-code-head">
        <span className="dots"><i/><i/><i/></span>
        <span className="pl-lang">{lang}</span>
      </div>
      <pre className="el-pre"><code ref={ref} className={`language-${lang}`}>{code}</code></pre>
    </div>
  );
}

function Section({ id, children }) {
  return <section id={id} className="el-section">{children}</section>;
}

function H2({ children }) { return <h2 className="el-h2">{children}</h2>; }
function H3({ children }) { return <h3 className="el-h3">{children}</h3>; }

function Bullet({ title, children }) {
  return (
    <div className="el-bullet">
      <b>{title}</b>
      <span>{children}</span>
    </div>
  );
}

function Tip({ children }) {
  return <div className="el-tip">{children}</div>;
}
"""

with open(r'c:\Users\USER\bskcoding\src\maang\system-design\lld-elevator\ElevatorPage.jsx', 'w', encoding='utf-8') as f:
    f.write(part1)
print('Part 1 written:', len(part1), 'chars')
