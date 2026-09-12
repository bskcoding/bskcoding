// ===== Load Balancing — topic data =====

import {
  svgLoadBalancer,
  svgRoundRobin,
  svgLeastConnections,
} from "./loadBalancingDiagrams";

export const loadBalancingTopics = [
  {
    id: "load-balancer",
    icon: "fa-network-wired",
    title: "Load Balancer",
    sub: "Traffic cop for your servers",
    desc: "A load balancer sits in front of many backend servers. It can balance by request count, active connections, response time, or other signals. It also provides health checks and can hide server failures from clients.",
    definition:
      "A load balancer receives incoming requests and distributes them across multiple backend servers. It prevents any single server from becoming a bottleneck and can remove unhealthy servers from rotation automatically.",
    videoLink: "https://www.youtube.com/watch?v=yzKnTtAD1WU",
    diagram: svgLoadBalancer,
    relation: "Use a load balancer whenever you run multiple application servers.",
    points: [
      "Sits in front of multiple app servers",
      "Routes requests using a chosen algorithm",
      "Can remove unhealthy servers automatically",
      "Common tools: NGINX, HAProxy, cloud LBs",
      "Works best with stateless app servers",
    ],
  },
  {
    id: "round-robin",
    icon: "fa-repeat",
    title: "Round Robin",
    sub: "Simple equal rotation",
    desc: "Requests are sent to servers in order: A, B, C, then back to A.",
    definition:
      "Round robin is the simplest load-balancing algorithm. It sends the next request to the next server in a fixed list. It is easy to understand and works well when all servers have similar capacity and request cost.",
    videoLink: "https://www.youtube.com/watch?v=yzKnTtAD1WU",
    diagram: svgRoundRobin,
    relation: "Good default when backend servers are identical and requests have similar cost.",
    points: [
      "Deterministic rotation through server list",
      "Very easy to implement",
      "Good for equal-sized servers",
      "Does not consider current load",
      "Can overload a slower server",
    ],
  },
  {
    id: "least-connections",
    icon: "fa-chart-line",
    title: "Least Connections",
    sub: "Send work to the least busy server",
    desc: "The next request goes to the server with the fewest active connections.",
    definition:
      "Least connections sends a new request to the backend with the lowest active connection count. It works better than round robin when requests vary in duration, such as long polling, streaming, or heavy database queries.",
    videoLink: "https://www.youtube.com/watch?v=yzKnTtAD1WU",
    diagram: svgLeastConnections,
    relation: "Use least connections when requests take different amounts of time.",
    points: [
      "Tracks active connections per server",
      "Better for uneven request durations",
      "Avoids piling work onto slow nodes",
      "Still needs health checks",
      "Common default in many production LBs",
    ],
  },
];
