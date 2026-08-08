function Roadmap90Day() {
  return (
    <div className="roadmap-page">
      <div className="container">
        <div className="hero">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <div className="main-headline" style={{ margin: 0 }}>
              3 Months Job Change Preparation
              <br />
              for Java Backend Developer
            </div>
            <a
              href="https://youtube.com/@bsktrending"
              target="_blank"
              rel="noopener noreferrer"
              className="yt-round"
              aria-label="YouTube Channel"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.376.505A3.016 3.016 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.376-.505a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="roadmap-grid">
          {/* WEEK 1 */}
          <div className="card">
            <div className="week-header">
              <span className="week-badge">WEEK 1</span>
              <span className="week-title">DSA Fundamentals</span>
            </div>
            <div className="card-content">
              <div className="topic-section">
                <div className="topic-head">📌 TOPICS</div>
                <div className="topic-list">
                  <span className="topic-item">Arrays</span>
                  <span className="topic-item">Strings</span>
                  <span className="topic-item">HashMap</span>
                  <span className="topic-item">Sliding Window</span>
                  <span className="topic-item">Two Pointer</span>
                  <span className="topic-item">Prefix Sum</span>
                </div>
              </div>
              <div className="topic-section">
                <div className="topic-head">🧩 PROBLEMS</div>
                <div className="sub-list">
                  <div className="sub-item">
                    <span className="sub-bullet">•</span> Two Sum
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">•</span> 3 Sum
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">•</span> Longest Substring
                    Without Repeating Characters
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">•</span> Product of Array
                    Except Self
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">•</span> Container With Most
                    Water
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">•</span> Subarray Sum Equals K
                  </div>
                </div>
              </div>
              <div className="topic-section">
                <div className="topic-head">🎯 GOAL</div>
                <div className="goal-highlight">
                  2-3 problems daily · focus on pattern recognition
                </div>
              </div>
            </div>
          </div>

          {/* WEEK 2 */}
          <div className="card">
            <div className="week-header">
              <span className="week-badge">WEEK 2</span>
              <span className="week-title">Java Core</span>
            </div>
            <div className="card-content">
              <div className="topic-section">
                <div className="topic-head">☕ TOPICS</div>
                <div className="topic-list">
                  <span className="topic-item">OOP Concepts</span>
                  <span className="topic-item">Collections Framework</span>
                  <span className="topic-item">Generics</span>
                  <span className="topic-item">Comparable/Comparator</span>
                  <span className="topic-item">Streams API</span>
                  <span className="topic-item">Optional</span>
                  <span className="topic-item">Exception Handling</span>
                  <span className="topic-item">Concurrency Basics</span>
                </div>
              </div>
              <div className="topic-section">
                <div className="topic-head">❓ FREQUENT Q&A</div>
                <div className="sub-list">
                  <div className="sub-item">
                    <span className="sub-bullet">▶</span> HashMap internal
                    working
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">▶</span> ConcurrentHashMap
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">▶</span> ArrayList vs
                    LinkedList
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">▶</span> HashSet vs TreeSet
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">▶</span> equals() vs hashCode()
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">▶</span> String vs
                    StringBuilder
                  </div>
                </div>
              </div>
              <div className="topic-section">
                <div className="topic-head">🎯 GOAL</div>
                <div className="goal-highlight">
                  Master Java internals & concurrency fundamentals
                </div>
              </div>
            </div>
          </div>

          {/* WEEK 3 */}
          <div className="card">
            <div className="week-header">
              <span className="week-badge">WEEK 3</span>
              <span className="week-title">Spring Boot Deep Dive</span>
            </div>
            <div className="card-content">
              <div className="topic-section">
                <div className="topic-head">🍃 TOPICS</div>
                <div className="topic-list">
                  <span className="topic-item">Spring IOC</span>
                  <span className="topic-item">Dependency Injection</span>
                  <span className="topic-item">Bean Lifecycle</span>
                  <span className="topic-item">Spring MVC</span>
                  <span className="topic-item">REST APIs</span>
                  <span className="topic-item">Validation</span>
                  <span className="topic-item">Global Exception Handling</span>
                  <span className="topic-item">Profiles & Config</span>
                  <span className="topic-item">Swagger / OpenAPI</span>
                  <span className="topic-item">Spring Data JPA</span>
                </div>
              </div>
              <div className="topic-section">
                <div className="topic-head">⚙️ PRACTICE</div>
                <div className="sub-list">
                  <div className="sub-item">
                    <span className="sub-bullet">✓</span> Build RESTful API with
                    validation
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">✓</span> Global Exception
                    Handling (@ControllerAdvice)
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">✓</span> Swagger / OpenAPI
                    documentation
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">✓</span> Build CRUD with JPA
                    Repository
                  </div>
                </div>
              </div>
              <div className="topic-section">
                <div className="topic-head">🎯 GOAL</div>
                <div className="goal-highlight">
                  Production-ready endpoints + configurable profiles
                </div>
              </div>
            </div>
          </div>

          {/* WEEK 4 */}
          <div className="card">
            <div className="week-header">
              <span className="week-badge">WEEK 4</span>
              <span className="week-title">Database + SQL</span>
            </div>
            <div className="card-content">
              <div className="topic-section">
                <div className="topic-head">🗄️ TOPICS</div>
                <div className="topic-list">
                  <span className="topic-item">Joins (INNER, LEFT, RIGHT)</span>
                  <span className="topic-item">Indexes & Performance</span>
                  <span className="topic-item">Query Optimization</span>
                  <span className="topic-item">
                    Normalization & Denormalization
                  </span>
                  <span className="topic-item">Transactions (ACID)</span>
                  <span className="topic-item">Isolation Levels</span>
                  <span className="topic-item">Stored Procedures</span>
                </div>
              </div>
              <div className="topic-section">
                <div className="topic-head">📝 PRACTICE QUERIES</div>
                <div className="sub-list">
                  <div className="sub-item">
                    <span className="sub-bullet">✧</span> Top N records per
                    group
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">✧</span> Find duplicate records
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">✧</span> Window Functions
                    (ROW_NUMBER, RANK)
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">✧</span> Advanced GROUP BY &
                    HAVING
                  </div>
                </div>
              </div>
              <div className="topic-section">
                <div className="topic-head">🎯 GOAL</div>
                <div className="goal-highlight">
                  Write complex SQL + explain transaction isolation
                </div>
              </div>
            </div>
          </div>

          {/* WEEK 5 */}
          <div className="card">
            <div className="week-header">
              <span className="week-badge">WEEK 5</span>
              <span className="week-title">Low Level Design</span>
            </div>
            <div className="card-content">
              <div className="topic-section">
                <div className="topic-head">🏗️ SOLID + PATTERNS</div>
                <div className="topic-list">
                  <span className="topic-item">SOLID Principles</span>
                  <span className="topic-item">Factory Pattern</span>
                  <span className="topic-item">Strategy Pattern</span>
                  <span className="topic-item">Builder Pattern</span>
                  <span className="topic-item">Observer Pattern</span>
                  <span className="topic-item">Singleton Pattern</span>
                  <span className="topic-item">Decorator Pattern</span>
                </div>
              </div>
              <div className="topic-section">
                <div className="topic-head">🅻🅻🅳 PRACTICE</div>
                <div className="sub-list">
                  <div className="sub-item">
                    <span className="sub-bullet">🚗</span> Parking Lot System
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">🛗</span> Elevator Control
                    System
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">📚</span> Library Management
                    System
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">🏦</span> ATM / Banking System
                  </div>
                </div>
              </div>
              <div className="topic-section">
                <div className="topic-head">🎯 GOAL</div>
                <div className="goal-highlight">
                  Class diagrams + design patterns implementation
                </div>
              </div>
            </div>
          </div>

          {/* WEEK 6 */}
          <div className="card">
            <div className="week-header">
              <span className="week-badge">WEEK 6</span>
              <span className="week-title">Microservices</span>
            </div>
            <div className="card-content">
              <div className="topic-section">
                <div className="topic-head">☁️ CORE CONCEPTS</div>
                <div className="topic-list">
                  <span className="topic-item">Service Discovery</span>
                  <span className="topic-item">API Gateway</span>
                  <span className="topic-item">Circuit Breaker</span>
                  <span className="topic-item">Config Server</span>
                  <span className="topic-item">Feign Client</span>
                  <span className="topic-item">Distributed Tracing</span>
                </div>
              </div>
              <div className="topic-section">
                <div className="topic-head">🔧 TOOLS & PROJECT</div>
                <div className="sub-list">
                  <div className="sub-item">
                    <span className="sub-bullet">✨</span> Spring Cloud · Eureka
                    · OpenFeign · Resilience4j
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">📦</span> Build: User Service,
                    Order Service, Notification Service
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">🐳</span> Docker Compose setup
                  </div>
                </div>
              </div>
              <div className="topic-section">
                <div className="topic-head">🎯 GOAL</div>
                <div className="goal-highlight">
                  Inter-service communication + fault tolerance
                </div>
              </div>
            </div>
          </div>

          {/* WEEK 7 */}
          <div className="card">
            <div className="week-header">
              <span className="week-badge">WEEK 7</span>
              <span className="week-title">High Level Design</span>
            </div>
            <div className="card-content">
              <div className="topic-section">
                <div className="topic-head">🌐 ARCHITECTURE</div>
                <div className="topic-list">
                  <span className="topic-item">Load Balancer</span>
                  <span className="topic-item">Caching Strategies</span>
                  <span className="topic-item">Database Scaling</span>
                  <span className="topic-item">Message Queue</span>
                  <span className="topic-item">CAP Theorem</span>
                  <span className="topic-item">Consistent Hashing</span>
                </div>
              </div>
              <div className="topic-section">
                <div className="topic-head">📐 DESIGN PROBLEMS</div>
                <div className="sub-list">
                  <div className="sub-item">
                    <span className="sub-bullet">🔗</span> URL Shortener
                    (TinyURL)
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">💬</span> WhatsApp / Chat
                    system
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">🔔</span> Notification Service
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">🍔</span> Food Delivery App
                    (UberEats style)
                  </div>
                </div>
              </div>
              <div className="topic-section">
                <div className="topic-head">🎯 GOAL</div>
                <div className="goal-highlight">
                  Trade-off analysis, throughput, consistency patterns
                </div>
              </div>
            </div>
          </div>

          {/* WEEK 8 */}
          <div className="card">
            <div className="week-header">
              <span className="week-badge">WEEK 8</span>
              <span className="week-title">Messaging & Caching</span>
            </div>
            <div className="card-content">
              <div className="topic-section">
                <div className="topic-head">⚡ TECH STACK</div>
                <div className="topic-list">
                  <span className="topic-item">Redis</span>
                  <span className="topic-item">Apache Kafka</span>
                  <span className="topic-item">RabbitMQ</span>
                  <span className="topic-item">Producer/Consumer</span>
                  <span className="topic-item">Partitions</span>
                  <span className="topic-item">Consumer Groups</span>
                  <span className="topic-item">Cache Eviction Policies</span>
                </div>
              </div>
              <div className="topic-section">
                <div className="topic-head">🚀 PROJECT ENHANCEMENT</div>
                <div className="sub-list">
                  <div className="sub-item">
                    <span className="sub-bullet">📀</span> Add Redis caching
                    layer
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">📡</span> Kafka event
                    publishing (order events)
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">🔄</span> Event-driven
                    architecture
                  </div>
                </div>
              </div>
              <div className="topic-section">
                <div className="topic-head">🎯 GOAL</div>
                <div className="goal-highlight">
                  Implement cache invalidation & async messaging
                </div>
              </div>
            </div>
          </div>

          {/* WEEK 9 */}
          <div className="card">
            <div className="week-header">
              <span className="week-badge">WEEK 9</span>
              <span className="week-title">Build Main Project</span>
            </div>
            <div className="card-content">
              <div className="topic-section">
                <div className="topic-head">🛒 E-Commerce Backend</div>
                <div className="topic-list">
                  <span className="topic-item">Authentication/JWT</span>
                  <span className="topic-item">Product Service</span>
                  <span className="topic-item">Cart Service</span>
                  <span className="topic-item">Order Service</span>
                  <span className="topic-item">Payment Mock</span>
                  <span className="topic-item">Kafka Events</span>
                  <span className="topic-item">Redis Cache</span>
                  <span className="topic-item">API Gateway</span>
                </div>
              </div>
              <div className="topic-section">
                <div className="topic-head">🐳 DEVOPS TOUCH</div>
                <div className="sub-list">
                  <div className="sub-item">
                    <span className="sub-bullet">🐙</span> Dockerize all
                    services
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">📝</span> GitHub README with
                    architecture diagram
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">☁️</span> Deploy to cloud
                    (render/heroku)
                  </div>
                </div>
              </div>
              <div className="topic-section">
                <div className="topic-head">🎯 GOAL</div>
                <div className="goal-highlight">
                  Complete deployable microservices project
                </div>
              </div>
            </div>
          </div>

          {/* WEEK 10 */}
          <div className="card">
            <div className="week-header">
              <span className="week-badge">WEEK 10</span>
              <span className="week-title">Mock Interviews</span>
            </div>
            <div className="card-content">
              <div className="topic-section">
                <div className="topic-head">🎤 INTENSIVE PREP</div>
                <div className="sub-list">
                  <div className="sub-item">
                    <span className="sub-bullet">📐</span> 1 Medium DSA problem
                    daily
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">📚</span> 30 common Spring Boot
                    Questions
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">🏛️</span> 1 System Design
                    question daily
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">🗣️</span> Java + concurrency +
                    microservices mocks
                  </div>
                </div>
              </div>
              <div className="topic-section">
                <div className="topic-head">📋 MOCK SCHEDULE</div>
                <div className="sub-list">
                  <div className="sub-item">
                    <span className="sub-bullet">🅰️</span> 2 DSA coding rounds
                    (LeetCode medium)
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">🅱️</span> 1 System Design round
                    (HLD + LLD)
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">🅲</span> 1 Hiring Manager
                    behavioral round
                  </div>
                </div>
              </div>
              <div className="topic-section">
                <div className="topic-head">🎯 GOAL</div>
                <div className="goal-highlight">
                  Simulate real interview pressure & feedback
                </div>
              </div>
            </div>
          </div>

          {/* WEEK 11 */}
          <div className="card">
            <div className="week-header">
              <span className="week-badge">WEEK 11</span>
              <span className="week-title">Resume & Applications</span>
            </div>
            <div className="card-content">
              <div className="topic-section">
                <div className="topic-head">📄 RESUME FOCUS</div>
                <div className="sub-list">
                  <div className="sub-item">
                    <span className="sub-bullet">✅</span> 1-2 pages, concise
                    metrics
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">⚡</span> Show performance
                    improvements, scalability work
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">💰</span> Cost optimization /
                    production issues solved
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">⭐</span> Highlight
                    microservices & system design projects
                  </div>
                </div>
              </div>
              <div className="topic-section">
                <div className="topic-head">📬 JOB PORTALS</div>
                <div className="topic-list">
                  <span className="topic-item">LinkedIn</span>
                  <span className="topic-item">Naukri</span>
                  <span className="topic-item">InstaHire</span>
                  <span className="topic-item">Foundit</span>
                  <span className="topic-item">Wellfound</span>
                </div>
              </div>
              <div className="topic-section">
                <div className="topic-head">🎯 GOAL</div>
                <div className="goal-highlight">
                  Target 10-15 applications daily · tailor resumes
                </div>
              </div>
            </div>
          </div>

          {/* WEEK 12 */}
          <div className="card">
            <div className="week-header">
              <span className="week-badge">WEEK 12</span>
              <span className="week-title">Interview Sprint</span>
            </div>
            <div className="card-content">
              <div className="topic-section">
                <div className="topic-head">⚡ DAILY ROUTINE</div>
                <div className="sub-list">
                  <div className="sub-item">
                    <span className="sub-bullet">1h</span> DSA (patterns &
                    medium/hard)
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">1h</span> Java + Spring Boot
                    (internals + boot)
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">1h</span> System Design (HLD +
                    tradeoffs)
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">1h</span> Behavioral stories &
                    STAR practice
                  </div>
                </div>
              </div>
              <div className="topic-section">
                <div className="topic-head">🗣️ BEHAVIORAL</div>
                <div className="sub-list">
                  <div className="sub-item">
                    <span className="sub-bullet">👤</span> Tell me about
                    yourself
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">🔥</span> Biggest challenge &
                    production issue
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">🚀</span> Why job change?
                    leadership examples
                  </div>
                  <div className="sub-item">
                    <span className="sub-bullet">🤝</span> Team conflict &
                    collaboration stories
                  </div>
                </div>
              </div>
              <div className="topic-section">
                <div className="topic-head">🎯 GOAL</div>
                <div className="goal-highlight">
                  Final polish & offer negotiations mindset
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          ✦ 3-Month Job Change Roadmap — Java Backend Developer ✦
        </div>
      </div>
    </div>
  );
}

export default Roadmap90Day;
