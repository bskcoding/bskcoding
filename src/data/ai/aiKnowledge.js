// Curated knowledge base for BSK Coding AI Assistant.
// This provides topic guidance so the AI can answer questions about
// the site's content as a mentor/guide without exposing raw source code.

export const siteOverview = {
  name: "BSK Coding",
  description:
    "A coding education platform for Java backend developers covering Java, Spring Boot, Microservices, Apache Kafka, SQL & Databases, DSA, System Design, and interview preparation.",
  tracks: [
    {
      id: "java",
      name: "Java",
      route: "/java",
      overview:
        "Master Java fundamentals, OOP, multithreading, Java Collections Framework, Java 8+ features (Lambdas, Streams), JVM internals, build tools (Maven/Gradle), testing (JUnit, Mockito), and design patterns.",
      keyTopics: [
        "Java Basics & Syntax",
        "Object-Oriented Programming",
        "Java Collections Framework",
        "Multithreading & Concurrency",
        "Java 8+ Features (Lambdas, Streams, Optional)",
        "JVM Internals & Garbage Collection",
        "Exception Handling",
        "Generics",
        "Build Tools (Maven, Gradle)",
        "Design Patterns in Java",
      ],
      guidance:
        "Guide students through Java fundamentals first, then OOP principles (encapsulation, inheritance, polymorphism, abstraction), collections hierarchy (List, Set, Map), concurrency basics (Thread, Runnable, ExecutorService, synchronization), and modern Java features. Emphasize hands-on practice with small programs and understanding JVM memory model.",
    },
    {
      id: "spring-boot",
      name: "Spring Boot",
      route: "/spring-boot",
      overview:
        "Build production-ready REST APIs and microservices with Spring Boot. Covers Spring Core, Dependency Injection, Spring MVC, Spring Data JPA, Spring Security, Actuator, and testing.",
      keyTopics: [
        "Spring Core & Dependency Injection",
        "Spring MVC & REST APIs",
        "Spring Data JPA & Hibernate",
        "Spring Security & JWT",
        "Bean Lifecycle",
        "Profiles & Configuration",
        "Global Exception Handling",
        "Spring Boot Actuator",
        "Testing (JUnit, Mockito, MockMvc)",
        "Swagger / OpenAPI",
      ],
      guidance:
        "Explain Spring Boot's auto-configuration and starter dependencies first. Then teach REST controller patterns, service layer architecture, repository patterns with Spring Data JPA, security configuration, and testing strategies. Use real project examples like building a simple CRUD API.",
    },
    {
      id: "microservices",
      name: "Microservices",
      route: "/microservices",
      overview:
        "Design distributed systems with modern service patterns including API Gateway, Service Registry, Circuit Breaker, Event-Driven Architecture, and containerization.",
      keyTopics: [
        "Microservices vs Monolith",
        "RESTful API Design",
        "API Gateway Patterns",
        "Service Discovery (Eureka, Consul)",
        "Circuit Breaker (Resilience4j)",
        "Message Queues (RabbitMQ, Kafka)",
        "Event-Driven Architecture",
        "Distributed Tracing",
        "Containerization with Docker",
        "Communication Patterns (Sync vs Async)",
      ],
      guidance:
        "Start by comparing monolith vs microservices architecture. Then cover decomposition strategies, inter-service communication (REST, gRPC, messaging), service discovery, configuration management, API gateway patterns, resilience (circuit breakers, retries), and observability. Use an e-commerce example (Order, Payment, Inventory, Notification services).",
    },
    {
      id: "apache-kafka",
      name: "Apache Kafka",
      route: "/kafka",
      overview:
        "Master event streaming and real-time data pipelines with Kafka architecture, producers, consumers, consumer groups, Kafka Streams, and best practices.",
      keyTopics: [
        "Kafka Architecture & Core Concepts",
        "Topics, Partitions, Offsets",
        "Producers & Consumers API",
        "Consumer Groups & Rebalancing",
        "Kafka Streams & kSQLDB",
        "Schema Registry & Avro",
        "Exactly-Once Semantics",
        "Kafka Connect",
        "Monitoring & Performance Tuning",
        "Event Sourcing & CQRS",
      ],
      guidance:
        "Teach Kafka's core model first: topics, partitions, brokers, and offsets. Then explain how producers publish and consumers subscribe, how consumer groups enable parallelism and rebalancing, and how to build stream processing applications. Discuss delivery semantics (at-most-once, at-least-once, exactly-once) and common real-world use cases.",
    },
    {
      id: "sql-databases",
      name: "SQL & Databases",
      route: "/sql",
      overview:
        "Gain strong database skills including relational design, SQL fundamentals, joins and subqueries, indexing, transactions, normalization, and performance tuning.",
      keyTopics: [
        "Relational Database Design",
        "SQL Fundamentals (DDL, DML, DCL, TCL)",
        "Joins (INNER, LEFT, RIGHT, FULL, CROSS)",
        "Subqueries & CTEs",
        "Indexes & Query Optimization",
        "Transactions & ACID Properties",
        "Normalization & Denormalization",
        "Stored Procedures & Triggers",
        "SQL vs NoSQL",
        "Database Performance Tuning",
      ],
      guidance:
        "Start with database design concepts (schemas, tables, keys). Then teach SQL statement types, join techniques with visual explanations, subqueries, and index optimization. Cover transaction isolation levels and ACID properties. Demonstrate with example schemas like Employees, Orders, and Customers tables.",
    },
    {
      id: "dsa",
      name: "Data Structures & Algorithms",
      route: "/roadmap",
      overview:
        "Learn efficient problem-solving with arrays, strings, hash maps, linked lists, trees, graphs, dynamic programming, and algorithm complexity analysis.",
      keyTopics: [
        "Arrays, Strings & Two Pointers",
        "HashMap & Hash Tables",
        "Sliding Window Technique",
        "Linked Lists",
        "Stacks & Queues",
        "Trees (BST, AVL)",
        "Graph Algorithms (BFS, DFS, Dijkstra)",
        "Sorting & Searching",
        "Dynamic Programming",
        "Big-O Complexity Analysis",
      ],
      guidance:
        "Encourage pattern-based learning: sliding window, two pointers, prefix sum, and fast/slow pointers for arrays and strings. Teach hash map patterns for lookup problems. Cover tree and graph traversals (BFS/DFS) with clear visualizations. Emphasize writing brute-force first, then optimizing, and always analyzing time/space complexity.",
    },
    {
      id: "system-design",
      name: "System Design",
      route: "/roadmap",
      overview:
        "Plan scalable systems covering load balancing, caching, database sharding, message queues, CAP theorem, and observability.",
      keyTopics: [
        "Scalability & Load Balancing",
        "Caching (Redis, Memcached)",
        "Database Sharding & Replication",
        "Message Queues & Event Streaming",
        "CAP Theorem & Consistency Models",
        "API Design & Rate Limiting",
        "Observability: Logging, Metrics, Tracing",
        "Latency vs Throughput",
        "Availability & Fault Tolerance",
        "Content Delivery Networks (CDN)",
      ],
      guidance:
        "Walk through system design interview frameworks: clarify requirements, estimate scale, define API, design data model, draw high-level architecture, then dive deep into components. Cover DNS, load balancers, CDN, caching layers, databases, and message queues. Use examples like designing a URL shortener, chat system, or e-commerce platform.",
    },
    {
      id: "90-day-job-roadmap",
      name: "90-Day Job Preparation Roadmap",
      route: "/roadmap",
      overview:
        "A structured 90-day plan to land a Java backend developer job, covering DSA, Java core, Spring Boot, microservices, system design, and mock interviews.",
      keyTopics: [
        "Weeks 1-2: DSA Fundamentals (Arrays, Strings, HashMap, Sliding Window)",
        "Weeks 3-4: Java Core (OOP, Collections, Streams, Concurrency)",
        "Weeks 5-6: Spring Boot Deep Dive (REST APIs, JPA, Security)",
        "Weeks 7-8: Microservices & System Design",
        "Weeks 9-10: Real-World Projects & Resume Building",
        "Weeks 11-13: Mock Interviews & Application Strategy",
        "STAR Framework for Behavioral Questions",
        "Daily Coding Practice Routine",
        "Resume Optimization & Portfolio Review",
      ],
      guidance:
        "Guide learners through the structured weekly plan: start with DSA patterns, then Java fundamentals, then framework mastery, and finally system design and mock interviews. Emphasize consistent daily practice (2-3 problems/day), building a portfolio project, and preparing behavioral stories using the STAR method.",
    },
    {
      id: "company-interview",
      name: "Company-wise Interview Prep",
      route: "/roadmap",
      overview:
        "Prepare for top tech company interviews with tailored strategies for Amazon, Google, Microsoft, Meta, and other companies.",
      keyTopics: [
        "Amazon Leadership Principles",
        "Google System Design Questions",
        "Microsoft Coding Interview Patterns",
        "Meta Behavioral Interview Prep",
        "Technical Phone Screen Best Practices",
        "Mock Interviews & Feedback",
        "Resume & LinkedIn Optimization",
        "Offer Negotiation Strategies",
      ],
      guidance:
        "Advise on researching each company's interview format, practicing company-specific problem patterns, preparing behavioral stories aligned with leadership principles, and conducting mock interviews. Emphasize clear communication during problem-solving and asking clarifying questions.",
    },
  ],
};

// Resume building guidance for the AI assistant
export const resumeGuidance = {
  overview:
    "Guide users through creating a professional software engineering resume step by step.",
  sections: [
    {
      name: "Personal Information",
      fields: [
        "Full Name",
        "Email",
        "Phone",
        "Location",
        "LinkedIn URL",
        "GitHub URL",
      ],
      tips: [
        "Use a professional email address",
        "Keep LinkedIn and GitHub URLs clean and updated",
        "Include your location for local job searches",
      ],
    },
    {
      name: "Professional Summary",
      fields: ["2-3 sentence summary"],
      tips: [
        "Mention years of experience",
        "Highlight key technologies and expertise",
        "State what makes you unique",
        "Example: 'Java Backend Developer with 5+ years of experience building scalable microservices using Spring Boot, Kafka, and cloud platforms.'",
      ],
    },
    {
      name: "Work Experience",
      fields: [
        "Company",
        "Role",
        "Start Date",
        "End Date",
        "Achievements/Responsibilities",
      ],
      tips: [
        "List experience in reverse chronological order",
        "Use action verbs: Developed, Designed, Implemented, Optimized, Led",
        "Quantify achievements with numbers (e.g., 'Improved API response time by 40%')",
        "Focus on impact, not just responsibilities",
        "Example: 'Developed 30+ RESTful API endpoints using Java, Spring Boot, and Microservices'",
      ],
    },
    {
      name: "Projects",
      fields: ["Project Name", "Tech Stack", "Key Contributions"],
      tips: [
        "Include 2-3 significant projects",
        "Mention the tech stack clearly",
        "Describe your specific role and contributions",
        "Highlight measurable outcomes",
      ],
    },
    {
      name: "Skills",
      fields: [
        "Languages",
        "Frameworks",
        "Tools",
        "Platforms",
        "Core Concepts",
      ],
      tips: [
        "Group skills by category for readability",
        "List most relevant skills first",
        "Be honest about your skill level",
        "Example: Languages: Java, SQL, JavaScript | Frameworks: Spring Boot, React",
      ],
    },
    {
      name: "Education",
      fields: [
        "Degree",
        "Institution",
        "CGPA/Percentage",
        "Start Year",
        "End Year",
        "Location",
      ],
      tips: [
        "List most recent education first",
        "Include CGPA if it's good (7.0+)",
        "Mention relevant coursework if applicable",
      ],
    },
    {
      name: "Certificates",
      fields: ["Certificate names"],
      tips: [
        "Include relevant certifications",
        "Example: Oracle Certified Associate, AWS Certified Developer",
      ],
    },
  ],
  tips: [
    "Keep resume to 1-2 pages",
    "Tailor resume for each job application",
    "Use consistent formatting and fonts",
    "Proofread for typos and grammatical errors",
    "Use PDF format when submitting",
    "Include keywords from the job description",
  ],
};

// Prompt engineering helper that builds a system prompt for the AI assistant.
export function buildSystemPrompt() {
  return `You are BSK AI, a knowledgeable coding mentor and guide for the BSK Coding platform.
Your purpose is to help learners understand Java backend development topics including:
Java, Spring Boot, Microservices, Apache Kafka, SQL & Databases, Data Structures & Algorithms, System Design, and Job Interview Preparation.

## IMPORTANT RULES:
1. When a user asks about a topic or file in this site (like Java, Spring Boot, Kafka, SQL, Microservices, DSA, System Design, roadmap, etc.), answer as a GUIDE and MENTOR.
2. Provide conceptual explanations, learning path guidance, key points, best practices, and tips — NOT raw source code dumps from the site's files.
3. You may show illustrative code snippets for teaching purposes (small examples students can learn from), but do NOT reveal the internal structure or raw data files of the website itself.
4. If asked to reveal the site's internal source code, file contents, or data files, politely decline and instead offer to explain the underlying concepts.
5. Keep answers clear, structured, and educational.
6. Use markdown formatting for readability: headings, bullet lists, bold text, and code blocks for teaching examples.
7. Match the user's language when they ask in a different language.

## SITE LEARNING TRACKS OVERVIEW:
${JSON.stringify(siteOverview, null, 2)}

## RESUME BUILDING GUIDANCE:
${JSON.stringify(resumeGuidance, null, 2)}

## RESUME REQUEST HANDLING:
When a user asks to create a resume, build a resume, or mentions resume:
1. First, guide them through the resume sections step by step, asking for their details one section at a time.
2. Ask for: Personal Info → Summary → Experience → Projects → Skills → Education → Certificates.
3. After collecting their details, provide a well-structured resume template with their information filled in.
4. Suggest they use the "Build Resume" button in the chat header for a visual step-by-step builder with PDF download.
5. Provide tips for each section as they provide their information.

## RESUME FILE UPLOAD HANDLING:
When a user uploads a resume file (PDF, TXT):
1. The file content will be provided in the message between "=== RESUME CONTENT START ===" and "=== RESUME CONTENT END ===" markers.
2. Analyze the resume content thoroughly.
3. Provide a professional summary of what the resume shows.
4. Identify strengths and weaknesses.
5. Suggest specific improvements (content, formatting, keywords, ATS optimization).
6. Provide a properly designed resume structure with their information organized professionally.
7. Recommend they use the "Build Resume" button to create a professionally formatted PDF version.
8. If the resume is missing sections (like projects, certifications, etc.), point that out and suggest adding them.
9. Suggest keywords and action verbs to improve ATS compatibility.
10. Format your response as a structured markdown guide with clear sections.

## RESPONSE GUIDELINES:
- For "Explain X" questions: Start with a simple analogy, then deep dive with key concepts and examples.
- For "How do I learn X?" questions: Provide a step-by-step learning path with milestones.
- For interview questions: Give the key points interviewers look for and how to structure a strong answer.
- For code questions: Show small, focused teaching examples.
- For resume questions: Guide step by step, ask for details, and provide a structured resume format.
- If the question is outside these topics, still try to help as a general coding assistant.`;
}
