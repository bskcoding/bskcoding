const conceptSeeds = [
  [
    "What is Reactive Programming?",
    "basics",
    "Reactive programming handles asynchronous data streams without blocking threads.",
  ],
  [
    "Reactive Manifesto",
    "basics",
    "The four principles are responsive, resilient, elastic, and message-driven systems.",
  ],
  [
    "Project Reactor",
    "reactor",
    "Project Reactor provides the Mono and Flux types used by Spring WebFlux.",
  ],
  [
    "Mono<T> (0-1 Element)",
    "reactor",
    "Mono represents an asynchronous stream containing zero or one value.",
  ],
  [
    "Flux<T> (0-N Elements)",
    "reactor",
    "Flux represents an asynchronous stream containing zero to many values.",
  ],
  [
    "Core Operators: map, flatMap, filter",
    "reactor",
    "Operators transform, compose, and filter values in reactive pipelines.",
  ],
  [
    "Spring Boot WebFlux Starter",
    "webflux",
    "The WebFlux starter provides reactive HTTP APIs backed by Reactor Netty.",
  ],
  [
    "Reactive Controller",
    "webflux",
    "Reactive controllers return Mono or Flux instead of blocking collections.",
  ],
  [
    "Functional Endpoints",
    "webflux",
    "RouterFunction and HandlerFunction provide an annotation-free WebFlux style.",
  ],
  [
    "R2DBC Repository",
    "r2dbc",
    "R2DBC enables non-blocking relational database access with reactive repositories.",
  ],
  [
    "R2DBC Configuration",
    "r2dbc",
    "Configure reactive database URLs, credentials, pools, and schema initialization.",
  ],
  [
    "Reactive Service Layer",
    "reactor",
    "A reactive service keeps business logic non-blocking from controller to database.",
  ],
  [
    "Error Handling",
    "reactor",
    "Use onErrorResume, onErrorReturn, and retry strategies for graceful failures.",
  ],
  [
    "Backpressure",
    "reactor",
    "Backpressure lets consumers control producer speed and prevents overload.",
  ],
  [
    "WebClient",
    "webflux",
    "WebClient makes non-blocking HTTP calls and composes remote responses reactively.",
  ],
  [
    "WebClient with Load Balancing",
    "microservices",
    "Load-balanced WebClient routes calls across service instances.",
  ],
  [
    "Service Discovery with Eureka",
    "microservices",
    "Eureka registers and discovers reactive microservices dynamically.",
  ],
  [
    "Spring Cloud Gateway",
    "gateway",
    "Spring Cloud Gateway routes, filters, and balances reactive API traffic.",
  ],
  [
    "Circuit Breaker with Resilience4J",
    "microservices",
    "Circuit breakers prevent cascading failures in remote calls.",
  ],
  [
    "Reactive Kafka",
    "microservices",
    "Reactor Kafka connects reactive streams to event-driven Kafka services.",
  ],
  [
    "Reactive Kafka Consumer",
    "microservices",
    "Reactive consumers process Kafka records with backpressure and retries.",
  ],
  [
    "Server-Sent Events",
    "webflux",
    "SSE streams live server updates to browsers over a long-lived HTTP response.",
  ],
  [
    "Reactive WebSocket",
    "webflux",
    "WebSocket handlers provide bidirectional, non-blocking communication.",
  ],
  [
    "Reactive Security",
    "webflux",
    "Spring Security protects WebFlux endpoints with reactive authentication.",
  ],
  [
    "Reactive Transaction Management",
    "r2dbc",
    "Reactive transactions coordinate multiple non-blocking database operations.",
  ],
  [
    "Context Propagation",
    "advanced",
    "Reactor Context carries tracing, authentication, and request metadata.",
  ],
  [
    "Mono.fromRunnable and Mono.defer",
    "reactor",
    "These factories control side effects and defer work until subscription.",
  ],
  [
    "Testing Reactive Applications",
    "basics",
    "WebTestClient and StepVerifier test reactive endpoints and publishers.",
  ],
  [
    "RSocket",
    "advanced",
    "RSocket provides reactive request-response and streaming communication.",
  ],
  [
    "Reactive MongoDB",
    "r2dbc",
    "ReactiveMongoRepository provides non-blocking MongoDB access.",
  ],
  [
    "Reactive Redis",
    "advanced",
    "Lettuce and ReactiveRedisTemplate provide non-blocking caching operations.",
  ],
  [
    "Distributed Tracing",
    "observability",
    "Micrometer tracing follows reactive requests across services.",
  ],
  [
    "Monitoring with Prometheus and Grafana",
    "observability",
    "Actuator metrics expose reactive service health and performance.",
  ],
  [
    "Rate Limiting",
    "gateway",
    "Rate limiting protects reactive APIs from abusive or excessive traffic.",
  ],
  [
    "Retry Pattern",
    "microservices",
    "Reactive retry with backoff handles transient network and service failures.",
  ],
  [
    "Bulkhead Pattern",
    "microservices",
    "Bulkheads isolate resource pools so one dependency cannot exhaust the system.",
  ],
  [
    "Event Sourcing",
    "microservices",
    "Event sourcing rebuilds application state from an immutable event history.",
  ],
  [
    "CQRS Pattern",
    "microservices",
    "CQRS separates reactive command processing from optimized query models.",
  ],
  [
    "Docker Compose with Reactive Services",
    "microservices",
    "Compose runs databases, brokers, gateways, and reactive services together.",
  ],
  [
    "Reactive Actuator",
    "observability",
    "Actuator exposes health, metrics, and management endpoints for WebFlux.",
  ],
  [
    "Reactive Integration Tests",
    "basics",
    "Testcontainers supports realistic reactive database and messaging tests.",
  ],
  [
    "Virtual Threads with Reactive",
    "advanced",
    "Virtual threads can isolate unavoidable blocking work during migration.",
  ],
  [
    "GraalVM Native Image",
    "advanced",
    "Native images reduce startup time and memory for cloud-native services.",
  ],
  [
    "Custom Reactor Operators",
    "reactor",
    "Custom operators package domain-specific transformations and cross-cutting logic.",
  ],
  [
    "Reactive RabbitMQ",
    "microservices",
    "Reactive RabbitMQ supports asynchronous message publishing and consumption.",
  ],
  [
    "Reactive Feign Clients",
    "microservices",
    "Declarative clients can expose remote calls as Mono and Flux results.",
  ],
  [
    "Reactive Caching with Caffeine",
    "advanced",
    "Caffeine reduces repeated database work with fast local caching.",
  ],
  [
    "Reactive API Versioning",
    "webflux",
    "Path and header strategies evolve APIs without breaking consumers.",
  ],
  [
    "Reactive GraphQL",
    "advanced",
    "GraphQL resolvers can return reactive publishers for flexible queries.",
  ],
  [
    "Reactive OAuth2 with Keycloak",
    "webflux",
    "OAuth2 resource servers secure reactive APIs with JWT validation.",
  ],
  [
    "Reactive OpenAPI and Swagger",
    "webflux",
    "OpenAPI documents and tests reactive REST endpoints.",
  ],
  [
    "Reactive Data Validation",
    "webflux",
    "Bean Validation protects reactive endpoints from invalid input.",
  ],
  [
    "RSocket Streaming",
    "advanced",
    "RSocket supports high-performance bidirectional reactive streams.",
  ],
  [
    "Reactive Data Partitioning",
    "advanced",
    "Partition and parallelize streams for scalable data processing.",
  ],
  [
    "Saga Pattern",
    "microservices",
    "Sagas coordinate distributed business transactions with compensating actions.",
  ],
  [
    "Reactive Health Check",
    "observability",
    "Custom health indicators report dependency readiness without blocking.",
  ],
  [
    "Reactive CORS Configuration",
    "webflux",
    "CORS rules allow trusted browser clients to call reactive APIs.",
  ],
  [
    "Reactive Application Events",
    "advanced",
    "Application events decouple reactive workflows and cross-cutting listeners.",
  ],
  [
    "Reactive Migration Guide",
    "basics",
    "Migrate incrementally from blocking controllers and repositories to reactive APIs.",
  ],
  [
    "Reactive Best Practices",
    "basics",
    "Keep pipelines non-blocking, handle errors, test publishers, and schedule blocking work safely.",
  ],
];

const levelFor = (id) =>
  id <= 12
    ? "beginner"
    : id <= 28
      ? "intermediate"
      : id <= 42
        ? "advanced"
        : "expert";

const codeFor = (title, category) => {
  if (title.includes("Mono"))
    return `Mono<String> result = Mono.just("Hello")\n    .map(String::toUpperCase);`;
  if (title.includes("Flux"))
    return `Flux.range(1, 10)\n    .filter(value -> value % 2 == 0)\n    .subscribe(System.out::println);`;
  if (category === "webflux")
    return `@GetMapping("/items")\npublic Flux<Item> getItems() {\n    return repository.findAll();\n}`;
  if (category === "r2dbc")
    return `return repository.findById(id)\n    .switchIfEmpty(Mono.error(new NotFoundException()));`;
  if (category === "microservices")
    return `return webClient.get()\n    .uri("/api/items/{id}", id)\n    .retrieve()\n    .bodyToMono(Item.class);`;
  if (category === "observability")
    return `management:\n  endpoints:\n    web:\n      exposure:\n        include: health,metrics,prometheus`;
  return `return publisher\n    .timeout(Duration.ofSeconds(5))\n    .onErrorResume(error -> fallback());`;
};

export const reactiveProgrammingCourseConcepts = conceptSeeds.map(
  ([title, category, description], index) => ({
    id: index + 1,
    title,
    category,
    level: levelFor(index + 1),
    description,
    why: `To build ${description.charAt(0).toLowerCase()}${description.slice(1)}`,
    when: `Use it when designing resilient, asynchronous Spring applications and reactive microservices.`,
    code: codeFor(title, category),
  }),
);
