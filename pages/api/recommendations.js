// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: "Sulman Ahmed Awan",
    image: "images/sulman.jpeg",
    designation:
      "reactjs, typescript, redux, redux toolkit, redux thunk, node js",
    view: "Hamza is amazing React js developer with extensive knowledge of web app development. I have worked under his leadership and i found him helping and managing things as easy as possible. I recommend Hamza as react js lead position in your organization.",
    linkednURL: "https://www.linkedin.com/in/sulman-ahmed-awan-871962b8/",
  },
  {
    id: 1,
    name: "Zain Bashart",
    image: "images/zain.jpeg",
    designation: "Flutter App Developer",
    view: "I have had the pleasure of working with Hamza Rafique and I can confidently say that he is one of the most skilled and knowledgeable front-end developers I have met. Holding expertise in various front-end technologies like ReactJS, NextJS, TypeScript, HTML5, CSS, and Redux proves him proficient in his skills.Hamza's ability to quickly understand complex requirements and implement effective solutions is truly impressive and his attention to detail is exceptional.In addition to his technical skills, he is an excellent communicator and collaborator. And is always willing to share his expertise and work closely with the team to deliver the best possible outcomes.I highly recommend Hamza to anyone seeking a talented, seasoned and reliable front-end developer for their projects. His passion for work, combined with his impressive skill set, makes him an asset to any team..",
    linkednURL: "https://www.linkedin.com/in/zainaliflutterdeveloper/",
  },
  {
    id: 2,
    name: "Farrukh Subhani",
    image: "images/farrukh.jpeg",
    designation: "UI/UX Developer at mobileLIVE",
    view: " have worked with him, this man is very good in every way i will strongly recommend him ",
    linkednURL: "https://www.linkedin.com/in/farrukh-subhani-16852858/",
  },
  {
    id: 3,
    name: "Muhammad Subhan",
    image: "images/subhan.jpeg",
    designation: "Sr Front-end Developer",
    view: "I have spent 4 years working with Hamza, and I found him determined, enthusiastic, and keen to learn more. He is a quick learner and a good team player, a highly recommended professional. My best wishes are for his future endeavors..",
    linkednURL: "https://www.linkedin.com/in/muhammad-subhan-bb540066/",
  },
  {
    id: 4,
    name: "Muhammad Ahsan",
    image: "images/ahsan.jpeg",
    designation: "Full-Stack Developer",
    view: "I highly recommend Hamza as a skilled and experienced frontend developer with expertise in a variety of technologies. Hamza is proficient in MERN stack development and has extensive experience working with Nextjs, JavaScript, and TypeScript. In addition, Hamza has a strong understanding of design systems and is proficient in using Storybook to develop UI components. Hamza has a deep understanding of frontend development and has worked extensively with web3js, contentful CMS, and Hubspot. Hamza is also highly skilled in working with mapping technologies such as OpenLayer and Leaflet. His ability to integrate these technologies into his work makes him an asset to any team. Overall, I highly recommend Hamza for any frontend development role.",
    linkednURL: "https://www.linkedin.com/in/ahsan131/",
  },
  {
    id: 5,
    name: "Basit Amin",
    image: "images/basit.jpeg",
    designation:
      "React js Developer | Frontend Developer | JavaScript | TypeScript | Software Engineer | Web DeveloperReact js Developer | Frontend Developer | JavaScript | TypeScript | Software Engineer | Web Developer",
    view: "I am excited to recommend Hamza for any frontend team lead positions. Hamza and I worked together on a project where he was the team lead, and I was impressed with his ability to lead and guide the team to success.Hamza has exceptional technical skills and knowledge of the latest frontend technologies. He is always eager to learn and stay up-to-date with the latest trends in the field. He has a strong passion for user experience and design, which makes him an asset to any team.Furthermore, Hamza is an excellent communicator and team player. He is always willing to lend a helping hand and is committed to fostering a collaborative and supportive work environment. His leadership style is inspiring and motivating, and he is skilled at bringing out the best in his team members.Overall, I highly recommend Hamza for any frontend team lead positions. His technical expertise, leadership skills, and positive attitude make him an excellent choice for any organization looking for a talented and dedicated frontend team lead..",
    linkednURL: "https://www.linkedin.com/in/basitaminsidhu/",
  },
  {
    id: 6,
    name: "Saad Hassan",
    image: "images/saad.jpeg",
    designation:
      "React js Developer | Frontend Developer | JavaScript | TypeScript | Software Engineer | Web DeveloperReact js Developer | Frontend Developer | JavaScript | TypeScript | Software Engineer | Web Developer",
    view: "I had the pleasure of working with Team Lead's Hamza Rafique for three months yet on Front-end team, and I was continually impressed by their technical skills and leadership abilities. Hamza Rafique has a deep understanding of React and TypeScript, and was instrumental in developing complex front-end UIs that were not only visually stunning but also highly functional.As a team lead, Hamza Rafique was able to effectively communicate project goals and priorities, and provided guidance and mentorship to junior team members. They were always willing to lend a helping hand and ensured that everyone on the team had the support they needed to succeed.I highly recommend Hamza Rafique for any front-end development or team leadership role. Their technical expertise, leadership skills, and positive attitude make them a valuable asset to any organization.Of course, feel free to customize this recommendation to reflect your specific experiences working with this team lead. Remember to be specific and provide concrete examples of their strengths and contributions to the team. Good luck!.",
    linkednURL: "https://www.linkedin.com/in/saad-hassan-947277178/",
  },
  {
    id: 7,
    name: "Tanzeel Ahmed",
    image: "images/tanzeel.jpeg",
    designation:
      "JavaScript || TypeScript || React-Native || Reactjs || Nodejs || Nextjs",
    view: "I highly recommended him.He is passivated and dedicated developer.",
    linkednURL: "https://www.linkedin.com/in/saad-hassan-947277178/",
  },
  {
    id: 8,
    name: "Ameer Hamza",
    image: "images/hamza.jpeg",
    designation: "Senior Software Engineer Full Stack Developer",
    view: "This person is purely a workaholic , his devotion with his duty is the key to his success, always love to work with him,he is just not my colleague or junior , he always support me as he always support other members of team.a good team player and a pure class software engineer ",
    linkednURL: "https://www.linkedin.com/in/hamza-arshad-joshan/",
  },
  {
    id: 9,
    name: "Mohammed Usman",
    image: "images/usman.jpeg",
    designation: "Front-end Software Engineer",
    view: "Such a great personality i have ever met. The time we spent together is the asset of my life.",
    linkednURL: "https://www.linkedin.com/in/muhammad-usman-627888162/",
  },
];
export default function handler(req, res) {
  res.status(200).json(recommendationCard);
}
