export const experienceContent = `
<h2>Experience</h2>
<div>
  <h3>AI Infra · <a href="https://ai.meta.com/" target="_blank" rel="noopener noreferrer">Meta</a></h3>
  <p class="exp-meta">Nov 2025 - Present · Menlo Park, CA</p>Creating agentic frameworks that are part of the daily developer lifecycle
</div>
<hr class="exp-sep" />
<div>
  <h3>Software Engineer · <a href="https://www.whatsapp.com/meta-ai?lang=en" target="_blank" rel="noopener noreferrer">WhatsApp</a></h3>
  <p class="exp-meta">Jul 2024 - Nov 2025 · Menlo Park, CA</p>Helped bring voice and image models to billions of people
</div>
<hr class="exp-sep" />
<div>
  <h3>Software Engineer Intern · <a href="https://www.microsoft.com/en-us/edge/features/bing-chat" target="_blank" rel="noopener noreferrer">Microsoft</a></h3>
  <p class="exp-meta">2022, 2023 · Redmond, WA</p>Built ML infra and Bing Chat (Copilot) features for Edge
</div>
<hr class="exp-sep" />
<div>
  <h3>Vision Researcher · <a href="https://www.grasp.upenn.edu/" target="_blank" rel="noopener noreferrer">GRASP Lab</a></h3>
  <p class="exp-meta">May 2021 - May 2022 · Philadelphia, PA</p>Played around with GANs to help geologists and thoracic surgeons
</div>
<hr class="exp-sep" />
<div>
  <h3>Robotics · <a href="https://wro-association.org/" target="_blank" rel="noopener noreferrer">World Robot Olympiad</a></h3>
  <p class="exp-meta">2014 - 2019 · Russia, Qatar, India</p>Competed in autonomous robo-soccer tournaments and won some international awards along the way
</div>


<br />
<h2>Education</h2>
<div>
  <h3>University of Pennsylvania, <a href="https://www.cis.upenn.edu/" target="_blank" rel="noopener noreferrer">B.S.E Computer Science</a></h3>
    <p class="exp-meta">Sep 2020 - May 2024 · Philadelphia, PA</p>Did some cool projects, met some cool people
</div>
<hr class="exp-sep" />
<div>
  <h3>The Wharton School, <a href="https://undergrad.wharton.upenn.edu/" target="_blank" rel="noopener noreferrer">B.S. Economics</a></h3>
      <p class="exp-meta">Sep 2020 - May 2024 · Philadelphia, PA</p>Learned how to create shareholder value
</div>
`;

export const aboutContent = `
<h2>Hi, I'm Rohan</h2>
<p>I build AI infrastructure at Meta and design frameworks for AI agents that accelerate developer productivity while ensuring a high quality bar through strong AI governance. I've also worked on product features at WhatsApp with a focus on integrating voice and image models and tackling various mobile infra optimizations along the way.

I graduated from the University of Pennsylvania with a dual-degree in computer science and finance. During college, I did research at the <a href="https://www.grasp.upenn.edu/" target="_blank" rel="noopener noreferrer">GRASP lab</a> and I was a graduate teaching assistant for machine learning, operating systems, algorithms, cloud computing and discrete mathematics.

Lately, I’ve been diving deeper into robotics, AI infrastructure, and the consumer AI space. If you’re working on something exciting in these areas, I'd love to connect.
`;

export const posts = [];

export const projects = [
  {
    title: "Project Shinkansen: A Better Way to Plan Trips",
    description:
      "Originally created to help with planning my solo trip to Japan (October 2025), this app combines geospatial intelligence, agentic AI, and real-time collaboration to modernize travel planning. Users can build mapped itineraries, while a location-optimization engine recommends neighborhoods that minimize travel friction across walking and public transport. An autonomous AI assistant researches activities, processes search results, and adds suggestions directly to the plan. Itineraries sync seamlessly with Google Maps and calendar services. The platform also supports Google-Docs-style collaboration with presence indicators and public itinerary sharing for fellow travelers.",
    tech: [
      "MCP Server",
      "Agentic AI",
      "NodeJS",
      "React",
      "Maps API",
      "+ Partially Agent Coded",
    ],
    github: "",
    pdf: "",
    demo: "Demo",
  },
  {
    title: "Course Odyssey: Personalized course planning for Penn students",
    description:
      "We built a course-planning system for Penn students that automatically generates a semester-by-semester degree path satisfying all graduation requirements across multiple majors, minors, and degree programs. The planner respects the full prerequisite and corequisite graph, incorporates historical course-offering data to determine which classes run in fall vs. spring, and integrates course-review metadata. A semantic-search RAG interface allows students to find courses of interest and automatically map them to applicable requirements, optimizing for double-counting where possible. The backend uses an SAT-solver-driven objective function—minimizing workload or difficulty, or maximizing professor ratings—to produce an optimized and feasible academic schedule.",
    tech: ["NodeJS", "Python", "RAG", "React", "SAT solver"],
    github: "",
    pdf: "",
    demo: "",
  },
  {
    title: "Pix-2-pix in Gelogy",
    description:
      "I worked as a Computer Vision Researcher in Penn’s GRASP Autonomous Robotics Lab, where I built a GAN-based image-translation model to automatically detect bedding planes in geological datasets, achieving state-of-the-art performance. I developed the complete end-to-end pipeline—from data acquisition and curation to model training, evaluation, and on-demand inference—and later extended a variant of the system for thoracic surgical applications in collaboration with Harvard Medical School.",
    tech: [""],
    github: "",
    pdf: "",
    demo: "",
  },
  {
    title: "PennOS: Unix-like terminal with process scheduling",
    description:
      "Developed a complete Unix-like terminal and shell backed by a custom FAT-inspired filesystem and an original process-scheduling subsystem. The project implemented canonical Unix utilities (e.g., ls, cat, cp, rm, etc.) and supported job-control semantics such as background/foreground execution, pipelines, and multi-process orchestration. The system included our own file-allocation structures, directory management, command interpreter, and a scheduler capable of handling concurrent processes and pipe-based I/O streams.",
    tech: ["C++", "Threads", "Virtual Pages"],
    github: "",
    pdf: "",
    demo: "",
  },
  {
    title: "PennCloud: Distributed file storage and mail service system",
    description:
      "We built PennCloud, a distributed cloud platform featuring a service-oriented backend architecture with a replicated key-value store, fault detection, remote recovery, and dynamic load balancing. The system partitions data into tablets replicated across storage nodes, using a primary-based protocol combined with two-phase commit to guarantee consistency. We implemented health monitoring via heartbeat services, checkpointing and log-based recovery, and gRPC-based streaming for efficient transfer of large state files. The frontend included a mail client, file-storage system, and admin console, all backed by gRPC calls, with load-balanced frontend servers handling concurrent HTTP requests. The result was a fault-tolerant, multi-service cloud environment supporting email, storage, and administration workflows end-to-end. ",
    tech: ["C++", "gRPC", "Distributed Systems"],
    github: "",
    pdf: "https://drive.google.com/file/d/1SlRI3KxiiZf7ZGCwTr7UCTFO5044DZ8G/view?usp=sharing",
    demo: "",
  },
  {
    title: "PennBook: Mini-facebook with distributed pagerank",
    description:
      "We built a mini–Facebook-style social platform implementing core features such as user friending, real-time online presence indicators, a dynamic interest-driven news feed powered by a distributed PageRank-like ranking algorithm, and full support for posts, comments, and reactions. The backend combined Java services for core social-graph and feed computation with Node-based APIs for interaction-heavy endpoints, all deployed on AWS with scalable storage, compute, and messaging components.",
    tech: ["Java", "AWS", "DynamoDB", "AJAX", "NodeJS"],
    github: "",
    pdf: "",
    demo: "",
  },
  {
    title: "A Case study in LLM Negotiations",
    description:
      "This project evaluates how LLMs negotiate by simulating an eight-month pricing game between GPT-4, a negotiation-trained custom GPT-4, Claude 3 Opus, and human players. We find that baseline GPT-4 behaves conservatively and fails to reach the optimal cooperative equilibrium, while the custom GPT-4—augmented with negotiation principles—shows stronger long-term reasoning and cooperation. Claude 3 Opus demonstrates the most human-like strategy, sustaining cooperation and even exploiting final-round incentives. Overall, the study shows that LLMs can exhibit strategic, adaptive negotiation behavior, but their effectiveness depends heavily on domain-specific training and model design.",
    tech: ["LLMs", "Prompt Engineering"],
    github: "",
    pdf: "https://drive.google.com/file/d/18S-M0DNF-DT_B86kfkhO0PQGnmqP_Oi_/view?usp=sharing",
    demo: "",
  },
  {
    title: "F1 Scheduler: Optimizing an NP-Hard problem",
    description:
      "We developed an optimization system that generates an optimal Formula 1 race calendar by integrating audience preferences, team track preferences, historical weather patterns, and track-to-track travel constraints. Using geospatial data (lat/long), temperature histories, and randomized audience scores for 75+ global circuits, the system models revenue and TV-rating drivers such as ideal weather proximity, distance from audience clusters, and team-specific track affinity. We additionally minimize logistical overhead by reducing sequential travel distances and allow organizers to configure season parameters such as start week and total race count. The pipeline unifies multiple datasets—from historical circuits, global weather archives, and team information—to compute a high-value, feasible tournament schedule under real-world constraints.",
    tech: ["React", "SAT Solver"],
    github: "https://github.com/rohanv0-1/f1-scheduler",
    pdf: "",
    demo: "",
  },
  {
    title: "Dynamic Event Discovery by Non-Communicating Robot Swarms",
    description:
      "This project introduces an improved swarm-robotics exploration algorithm for discovering dynamic events in unknown, obstacle-filled terrains without long-range communication.Building on a Wiener-process motion model, we augment the traditional Gaussian Random Walk with a recency-based cost estimator that guides robots toward less-visited regions while preserving stochastic exploration. Each robot maintains a local visitation map, with an extended variant enabling opportunistic short-range map sharing. Simulations across terrains of varying obstacle density show significantly faster and more consistent event-discovery times compared to standard random walks, demonstrating more uniform coverage, robustness to robot failures, and suitability for applications like forest-fire detection or ocean debris monitoring.",
    tech: ["Java", "Robotics"],
    github: "",
    pdf: "https://drive.google.com/file/d/1xl0IyNGMEYPiUVTowqTExveSomm1OPh4/view?usp=sharing",
    demo: "",
  },
];

export const socials = [
  { label: "Email", href: "mailto:roverma@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rohanver" },
  { label: "GitHub", href: "https://github.com/rohanv0-1" },
  { label: "X", href: "https://x.com/rohan_v1" },
];
