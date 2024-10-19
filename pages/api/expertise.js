const expertise = [
  {
    id: 0,
    title: "Frontend development",
    desc: "Passionate about pixel-perfect designs, innovative solutions, and new technologies. Proficient in JavaScript, TypeScript, React.js, (React-redux redux-tool-kit, mobix,)Material-UI, chakra-UI, react-bootstrap, Tailwind CSS, UI libraries, HTML5, CSS3 Accessibility Standards W3c AAA. I am also a quick learner and always willing to learn new technologies.",
  },

  {
    id: 1,
    title: "Full Stack Development",
    desc: "I am a skilled MERN stack developer with extensive experience in building robust web applications using MongoDB, Express.js, React.js, and Node.js. I possess a strong understanding of server-side rendering, API integration, and database management. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients.",
  },
  {
    id: 2,
    title: "Scrum and Jira",
    desc: "As a developer, I'm proficient in Jira and Scrum methodologies. I use Jira to simplify project management tasks like task assignment, prioritization, and progress tracking. Scrum has improved my teamwork, utilizing daily stand-ups, sprint planning, and retrospectives. My expertise ensures high-quality software products are delivered promptly.",
  },
  {
    id: 3,
    title: "Designing (UI/UX)",
    desc: "I am proficient in using design software such as Figma, Adobe XD, and Adobe Illustrator. Through participating in hackathons and freelance work, I have gained practical experience in UI/UX design and graphic design. Designing is my passion, and it has allowed me to continue to develop my creative skills and grow in the field.",
  },
  {
    id: 4,
    title: "Data Science and Machine Learning",
    desc: "I have done some research in Data Science, Machine Learning, Deep Learning, and Tensorflow. I am interested in learning more about these technologies and their applications. I am also a quick learner and always willing to learn new technologies. I am a quick learner and always willing to learn new technologies. I am a quick learner and always willing to learn new technologies.",
  },
  {
    id: 5,
    title: "Open Source Contributor",
    desc: "Open Source is the future. I usually take some time on weekend and contribute into opensource project. It gives me opportunity to learn from best developer's practices and also gives me a chance to help others and contribute into the community for the good.",
  },
];

export default function handler(req, res) {
  res.status(200).json(expertise);
}
