const expertise = [
  {
    id: 0,
    title: "Full Stack Development (MERN & MEAN) Stack",
    desc: "I specialize in building **robust, large-scale web applications** using the MERN stack (MongoDB, Express.js, React.js, Node.js). Successfully **developed and launched 5+ full-stack projects**, including a B2B SaaS platform that handled **10,000+ daily requests** and improved data retrieval speeds by **40%** through optimized database indexing and API design.",
  },
  {
    id: 1,
    title: "Frontend development",
    desc: "Proficient in crafting **pixel-perfect, accessible user interfaces** using React.js, TypeScript, Material-UI, and Tailwind CSS (W3c AAA standards). Led the re-design of a major client dashboard, resulting in a **25% increase in user engagement** and **reducing load time** by 1.5 seconds by implementing performance-focused libraries (e.g., React-Redux Toolkit/MobX).",
  },
  {
    id: 2,
    title: "Scrum and Jira",
    desc: "Experienced in managing development cycles using **Scrum and Jira**, ensuring efficient task prioritization, progress tracking, and on-time delivery. Consistently delivered sprint goals with an average **95% completion rate** by facilitating effective daily stand-ups and sprint retrospectives, directly contributing to a **20% reduction in late-cycle bug discovery**.",
  },
  {
    id: 3,
    title: "Designing (UI/UX)",
    desc: "A passionate UI/UX designer proficient in **Figma, Adobe XD, and Illustrator**. Translated complex requirements into intuitive user flows and high-fidelity prototypes. Recognized for design contributions in **2 hackathons** and completed **10+ freelance projects**, resulting in products that achieved high user adoption rates.",
  },
  {
    id: 4,
    title: "Data Science and Machine Learning",
    desc: "Applied foundational knowledge in **Data Science, ML/Deep Learning, and TensorFlow** to solve practical problems. Successfully developed and deployed an **NLP sentiment analysis model** that achieved **92% accuracy** and automated a manual data classification process, saving an estimated **15 hours per week** in operational time.",
  },
  {
    id: 5,
    title: "Open Source Contributor",
    desc: "Dedicated to improving the developer community by regularly contributing to **Open Source projects** on weekends. Submitted **10+ accepted pull requests** across various JavaScript and Node.js repositories, demonstrating a commitment to high code quality, best practices, and collaborative development.",
  },
  {
    id: 6,
    title: "NPM Package Development (CLI Tools)",
    desc: "Architected, developed, and published the utility package **`git-commit-gen` (v3.0.0)**, a CLI tool used to enforce **Conventional Commits** standards. Demonstrates expertise in **CLI architecture (Node.js)**, **Husky/Commitlint integration**, and publishing maintainable open-source solutions with **114 weekly downloads**.",
  },
];

export default function handler(req, res) {
  res.status(200).json(expertise);
}