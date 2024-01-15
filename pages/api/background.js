const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "University of Gujarat",
        degree: "MSC, Computer Science",
        detail: "Master Degree in Computer Science from UOG Sialkot.",
        year: "2017-2019",
      },
      {
        id: 1,
        title: "Govt Jinnah Islamia College Sialkot",
        degree: "BSC, Computer Science",
        detail:
          "Completed BSC in Computer Science from Peshawar Model Degree College.",
        year: "2015-2017",
      },
      {
        id: 2,
        title: "Govt Degree College Zafarwal",
        degree: "ICS, Computer Science",
        detail:
          "Completed ICS part 1 and part 2 in Computer Science subjects from Govt Degree College Zafarwal",
        year: "2013-2015",
      },
    ],
  },
  {
    expCards: [
      {
        id: 1,
        title: "Rapidev (NSTP) NUST",
        role: " Senior Frontend Developer",
        url: "https://rapidev.com/",
        desc: "As a senior frontend & UI and React & Next developer at Rapidev, I had the opportunity to work closely with various teams within the organization, including management, the GIS team, the mapping library, as well as the backend and data sciences teams. Through my experiences working with these teams, I gained valuable insight into the overall functioning of the company and its strategic direction",
        year: "01/2023 - Present",
        location: "Islamabad NUST, Pakistan",
      },
      {
        id: 2,
        title: "Big Immersive",
        role: "Mid Software Engineer",
        url: "https://bigimmersive.com/",
        desc: "As a front-end developer, I have worked on multiple projects, including the Virtua product and the Virtua Island project. These projects involved creating a metaverse for selling plots and required the use of various technologies such as web3js, ReactJS, React-Native, smart-contract, and wallet-integration with MetaMask. I closely collaborated with the blockchain team to ensure seamless integration and also worked closely with project managers to deliver successful projects. My experience in using these technologies and working collaboratively with teams makes me a valuable addition to any development team.Used different styles frameworks and libraries ( Material-UI, Chakara-UI, CSS, react-bootstrap, bootstrap, Tailwind CSS,)",
        year: "02/2022 - 01/2023",
        location: "Lahore, Pakistan",
      },
      {
        id: 3,
        title: "mobile LIVE",
        role: "Software Engineer",
        url: "https://www.mobilelive.ca/",
        desc: "E-commerce platform by Freedom Mobile based in Canada where Users can select any device according to the purchased plan. Worked as a Fullstack Developer on the frontend and backend side in a Scrum team of 12 developers. Revamped the complete frontend with React.js and Redux-Saga Wrote unit tests of the container components, integrated APIs, managed the application's global state with Redux-Saga, and made technical documentation. Built feature to streamline deployment with CI/CD utilizing Azure DevOps platform. Worked on the backend within APIs by following REST architecture using Node.js with a monolithic approach. Implemented pagination, authentication, cron-job, and authorization on backend",
        year: "02/2020 - 02/2022",
        location: "Remote, Canada",
      },
      {
        id: 4,
        title: "Encoder Solution",
        role: "Junior Frontend developer",
        url: "https://www.encoder-solution.com/",
        desc: "👉Responsible for building new templates as a UI/UX Web Developer using jQuery, CSS 3.0, and HTML5.👉Delivers projects on time and on budget consistently. 👉React: designing reach UI by building react components.👉Bootstrap: designing responsive websites and web applications.",
        year: "02/2018 - 02/2020",
        location: "Sialkot, Pakistan",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
