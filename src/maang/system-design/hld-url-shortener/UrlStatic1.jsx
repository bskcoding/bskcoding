import "./UrlShortener.css";

export function SecHead({ num, title, sub }) {
  return (
    <div className="usd-sec-head">
      <h2><span className="usd-num">{num}</span> {title}</h2>
      <p>{sub}</p>
    </div>
  );
}

export function List({ items }) {
  return (
    <ul className="usd-list">
      {items.map(([b, html], i) => (
        <li key={i}><span className="usd-bullet">{b}</span><span dangerouslySetInnerHTML={{ __html: html }} /></li>
      ))}
    </ul>
  );
}

export function QuestionSection() {
  return (
    <div className="usd-section">
      <SecHead num="1" title="Question" sub="The problem we are solving, and the scale we are solving it at." />
      <div className="usd-card">
        <h3>🎯 Design a URL Shortener (like bit.ly)</h3>
        <p>Design a service that accepts a long URL like <code>https://www.example.com/very/long/path/article?id=12345</code> and returns a short, shareable URL like <code>short.ly/3nZK8xQ1mN2</code>. When anyone visits the short URL, they get redirected to the original long URL.</p>
        <p>The system also needs to track clicks for analytics, expire URLs after a configurable time, and remain available at massive scale.</p>
      </div>
      <div className="usd-grid2">
        <div className="usd-card">
          <h3>📊 Scale Expectations</h3>
          <List items={[
            ["›", "<strong>100 million</strong> total URLs stored"],
            ["›", "<strong>10,000</strong> redirects per second (read-heavy)"],
            ["›", "<strong>1,000</strong> new URLs per second (write-light)"],
            ["›", "Read : Write ratio of roughly <strong>10 : 1</strong>"],
          ]} />
        </div>
        <div className="usd-card">
          <h3>⚠️ Core Challenges</h3>
          <List items={[
            ["›", "Generate <strong>globally unique</strong> short codes without collisions"],
            ["›", "Keep redirects <strong>under 50 ms</strong> at p99 latency"],
            ["›", "Absorb <strong>10K reads/sec</strong> without overwhelming the database"],
            ["›", "Store analytics without blocking redirects"],
            ["›", "Clean up expired URLs automatically"],
          ]} />
        </div>
      </div>
    </div>
  );
}
