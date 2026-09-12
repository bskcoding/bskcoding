// ===== Scalability topic data =====

import {
  svgScalabilityOverview,
  svgVerticalScaling,
  svgHorizontalScaling,
  svgLoadDistribution,
} from "./scalabilityDiagrams";

export const scalabilityTopics = [
  {
    id: "scalability-overview",
    icon: "fa-layer-group",
    title: "Scalability - The Big Picture",
    sub: "Grow with demand, not panic",
    desc: "When traffic grows, you can make one server stronger or add more servers. Horizontal scaling is usually the long-term answer for internet-scale systems.",
    definition:
      "Scalability means the system can handle more load by adding resources. Vertical scaling upgrades the same machine, while horizontal scaling adds more machines. For public web apps, horizontal scaling is usually preferred because it is cheaper, more flexible, and avoids a single hardware ceiling.",
    videoLink: "https://www.youtube.com/watch?v=yzKnTtAD1WU",
    diagram: svgScalabilityOverview,
    relation: "Vertical is quick but capped; horizontal is the standard path for high-traffic apps.",
    points: [
      "Vertical = upgrade RAM/CPU on one server",
      "Horizontal = add more identical servers",
      "Horizontal scales better for internet traffic",
      "Horizontal needs stateless services and load balancing",
      "Measure bottlenecks before choosing a strategy",
    ],
  },
  {
    id: "vertical-scaling",
    icon: "fa-server",
    title: "Vertical Scaling",
    sub: "Bigger machine, same architecture",
    desc: "Add more CPU, RAM, or storage to the existing server. It is simple and quick, but eventually you hit a hardware ceiling.",
    definition:
      "Vertical scaling means increasing the capacity of the same machine: more cores, more RAM, faster disks, or a larger cloud instance. It is easy to implement because the application topology does not change, but the server remains a single point of failure and has a finite upgrade limit.",
    videoLink: "https://www.youtube.com/watch?v=yzKnTtAD1WU",
    diagram: svgVerticalScaling,
    relation: "Good for small systems, maintenance windows, or short-term capacity boosts.",
    points: [
      "No code changes required",
      "Fast to deploy",
      "Hardware has a hard ceiling",
      "Upgrade can cause downtime",
      "Still one machine to protect",
    ],
  },
  {
    id: "horizontal-scaling",
    icon: "fa-server-stack",
    title: "Horizontal Scaling",
    sub: "More machines, more resilience",
    desc: "Add more identical servers behind a load balancer. This is the standard approach for internet-scale applications.",
    definition:
      "Horizontal scaling means adding more machines to spread the workload. Each server handles only part of the traffic, so the system can grow by adding nodes. It improves fault tolerance, but it requires the application to be stateless and the data layer to support replication or sharding.",
    videoLink: "https://www.youtube.com/watch?v=yzKnTtAD1WU",
    diagram: svgHorizontalScaling,
    relation: "Best fit for web apps with many users and stateless services.",
    points: [
      "Add or remove servers as traffic changes",
      "Improves availability with multiple nodes",
      "Requires a load balancer",
      "Application should not store session state locally",
      "Database can become the next bottleneck",
    ],
  },
  {
    id: "load-distribution",
    icon: "fa-arrows-to-dot",
    title: "Load Distribution",
    sub: "Send traffic to healthy servers",
    desc: "The load balancer monitors servers and routes requests away from unhealthy nodes.",
    definition:
      "Load distribution is the process of spreading incoming requests across multiple servers. A health check detects failed nodes, and the load balancer stops sending traffic to them. This prevents users from hitting broken servers and improves overall availability.",
    videoLink: "https://www.youtube.com/watch?v=yzKnTtAD1WU",
    diagram: svgLoadDistribution,
    relation: "A load balancer plus health checks turns many servers into one reliable service.",
    points: [
      "Balancers spread traffic across nodes",
      "Health checks detect unhealthy servers",
      "Failed nodes are removed from rotation",
      "Traffic shifts to healthy servers",
      "Avoids a single point of failure",
    ],
  },
];
