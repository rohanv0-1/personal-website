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
    title: "Project Shinkansen: A Faster Way to Plan Trips",
    description:
      "Built originally for my solo trip to Japan, this app blends geospatial intelligence, agentic AI, and real-time collaboration to modernize travel planning. It auto-optimizes neighborhoods to reduce transit friction and uses an autonomous AI assistant to research and add activities. Itineraries sync seamlessly with Google Maps and calendars, and the platform supports Google-Docs-style collaboration and public sharing.<p class='muted private-note'><em>\nDemo coming soon!</em></p>",
    tech: ["Agentic AI", "NodeJS", "React", "Various Google APIs"],
    github: "",
    pdf: "",
    demo: "",
  },
  {
    title: "Course Odyssey: Personalized course planning for Penn students",
    description:
      "A Penn course-planner that generates multi-degree semester plans by enforcing all pre/co-requisites, using historical offerings and reviews, and employing a RAG interface with a SAT-solver that optimally maps courses to requirements with maximal overlap/double-counting.",
    tech: ["NodeJS", "Python", "RAG", "React", "SAT solver"],
    github: "",
    pdf: "",
    demo: "",
    collaboratorRestricted: true,
  },
  {
    title: "Extending pix2pix to Autonomous Drones",
    description:
      "Built a GAN-based image-translation model that achieved SOTA evals for geological bedding-plane detection, with a full end-to-end pipeline for data, training, and inference, and later adapting the system for thoracic surgery in collaboration with Harvard Medical School researchers.",
    tech: ["TensorFlow", "OpenCV", "GAN"],
    github: "",
    pdf: "https://drive.google.com/file/d/1sYh-skrNlkG-dOa-GWb5fG5AHJCHII2S/view?usp=sharing",
    demo: "",
  },
  {
    title: "PennOS: Unix-like terminal with process scheduling",
    description:
      "Built a full Unix-like terminal and shell with a custom FAT-style filesystem, original process scheduler, and support for job control—including pipelines, background/foreground execution, and multi-process coordination—alongside implementations of core Unix utilities.",
    tech: ["C++", "Threads", "Virtual Pages"],
    github: "",
    pdf: "",
    demo: "",
    collaboratorRestricted: true,
  },
  {
    title: "PennCloud: Distributed file storage and mail service system",
    description:
      "A fault-tolerant distributed cloud platform with a service-oriented backend, replicated tablet-based key-value storage using primary + 2PC, heartbeat-driven failure detection, checkpoint/log recovery, gRPC streaming for large-state transfer, and load-balanced frontend services for mail, file storage, and admin tools.",
    tech: ["C++", "gRPC", "Distributed Systems"],
    github: "",
    pdf: "https://drive.google.com/file/d/1SlRI3KxiiZf7ZGCwTr7UCTFO5044DZ8G/view?usp=sharing",
    demo: "",
  },
  {
    title: "PennBook: Mini-facebook with distributed pagerank",
    description:
      "A Facebook-style social platform with friending, real-time presence, a socket-based chat system, and an interest-driven news feed powered by a distributed PageRank-like ranking algorithm, backed by Java services for graph/feed computation and Node APIs for interaction-heavy flows, all deployed on scalable AWS infrastructure.",
    tech: ["Java", "AWS", "DynamoDB", "AJAX", "NodeJS"],
    github: "",
    pdf: "",
    demo: "",
    collaboratorRestricted: true,
  },
  {
    title: "A Case study in LLM Negotiations",
    description:
      "We evaluated LLM negotiation by simulating an eight-month pricing game between GPT-4, a negotiation-trained GPT-4, Claude 3 Opus, and human players. Baseline GPT-4 behaved conservatively, while the trained variant showed stronger long-term cooperation, and Claude 3 Opus displayed the most human-like, strategic behavior. Overall, the study highlights that LLM negotiation performance hinges on domain-specific training and model design.",
    tech: ["LLMs", "Prompt Engineering"],
    github: "",
    pdf: "https://drive.google.com/file/d/18S-M0DNF-DT_B86kfkhO0PQGnmqP_Oi_/view?usp=sharing",
    demo: "",
  },
  {
    title: "F1 Scheduler: Optimizing an NP-Hard problem",
    description:
      "An F1 optimizer that fuses audience scores, team-track affinity models, weather histories, and geospatial travel data into a constrained scheduling algorithm that maximizes revenue/ratings while minimizing logistical travel to produce a feasible season schedule.",
    tech: ["React", "SAT Solver"],
    github: "https://github.com/rohanv0-1/f1-scheduler",
    pdf: "",
    demo: "",
  },
  {
    title: "Dynamic Event Discovery by Non-Communicating Robot Swarms",
    description:
      "We introduce a swarm-robotics exploration algorithm that augments a Wiener-process random walk with a recency-driven visitation cost and optional short-range map sharing to achieve uniform coverage without long-range communication. Simulations show significantly faster, more robust event discovery in obstacle-rich terrains, with applications to forest-fire and ocean-debris detection.",
    tech: ["Java", "Random Walks", "Swarm Communication"],
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
