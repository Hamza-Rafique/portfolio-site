const portfolio = [
  {
    id: 0,
    projectName: "30mins",
    url: "https://30mins.com/",
    image: "projects/30mins.png",
    projectDetail:
      "Discover the future of streamlined interactions with 30mins.com! Effortlessly schedule meetings, offer services, and sell products—all in one platform. Say goodbye to the back-and-forth hassle in scheduling meetings. Unleash your expertise, foster relationships, and unlock new revenue streams by seamlessly offering and selling digital products. Elevate your impact, your way.",
    technologiesUsed: [
      {
        tech: "NextJs",
      },
      {
        tech: "TailwindCSS",
      },
      {
        tech: "graphql",
      },
      { tech: "nodejs" },
      { tech: "expressjs" },
    ],
  },
  {
    id: 1,
    projectName: "Insta Driver",
    url: "https://www.instadriver.co/",
    image: "projects/instadrive.png",
    projectDetail:
      "Recruit competent & verified drivers in under 10 minutes at low price.Use the marketplace to hire local and international drivers. We also do driver-placement for you. Get all driver categories such as truck drivers, school bus drivers, personal drivers...Even ride-sharing drivers for your gig car.",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },
      {
        tech: "nodejs",
      },
      {
        tech: "bootstrap",
      },
      {
        tech: "react-bootstrap",
      },
    ],
  },
  {
    id: 2,
    projectName: "Telus",
    url: "https://www.telus.com/",
    image: "projects/telus.png",
    projectDetail:
      "offers telephony, television, data and Internet services; Telus Mobility, offers wireless services; Telus Health operates companies that provide health products and services; and Telus International operates worldwide, providing multilingual customer service outsourcing and digital IT services.",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },
      {
        tech: "NextJs",
      },
      {
        tech: "nodejs express",
      },
      {
        tech: "css3",
      },
      {
        tech: "bootstrap4 and 5",
      },
    ],
  },
  {
    id: 3,
    projectName: "Virtua",
    url: "https://virtua.com/",
    image: "projects/virtua.png",
    projectDetail:
      "By signing up with Virtua, you will automatically gain access to the Gamers Lounge, your own personal 3D gateway to the Gaming Metaverse! Enter Now! dashboard ",
    technologiesUsed: [
      {
        tech: "TypeScript",
      },
      {
        tech: "ReactJS",
      },
      {
        tech: "ExpressJS",
      },
      {
        tech: "MUI",
      },
    ],
  },
  {
    id: 4,
    projectName: "MetaVerse MonsterZone",
    url: "https://island.virtua.com/monsterzone.com",
    image: "projects/monster-zone.png",
    projectDetail:
      " Virtua Island, the centre of the Virtua Metaverse, There is a Virtua Hub - which connects all the islands and world’s togetherAll plots will be split in size; Small, Medium, Large & GigaSeveral Experience Zones - Monster, Mech, Battlefield, Gamer and more.",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },
      {
        tech: "ExpressJs",
      },
      {
        tech: "Socket.io",
      },
      {
        tech: "LeafletJs",
      },
      {
        tech: "Bootstrap",
      },
    ],
  },
  {
    id: 5,
    projectName: "Friday Design System",
    url: "https://friday-design-system.netlify.app/",
    image: "projects/Friday.png",
    projectDetail:
      "Friday is an open-source design system accelerator specifically architected to support multi-branded experiences for e-commerce and digital enterprise applications. In it, you will find Design Kit, Storybook Documentation and Component Library. Download for free.",
    technologiesUsed: [
      {
        tech: "Reactjs",
      },
      {
        tech: "Storybook",
      },
      {
        tech: "Styled-Components",
      },
      {
        tech: "Design-system",
      },
    ],
  },
  {
    id: 6,
    projectName: "Otawix",
    url: "https://b2c.otawix.com/",
    image: "projects/otawix.png",
    projectDetail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
    technologiesUsed: [
      {
        tech: "NextJS",
      },
      {
        tech: "NodeJS",
      },
      {
        tech: "MUI",
      },
      {
        tech: "TailwindCSS",
      },
    ],
  },
  {
    id: 7,
    projectName: "Spatay",
    url: "https://spatay.com/",
    image: "projects/spatay.png",
    projectDetail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },
      {
        tech: "NodeJS",
      },
      {
        tech: "Ant Design",
      },
      {
        tech: "TailwindCSS",
      },
    ],
  },
  // {
  //     id: 2,
  //     projectName: "Culyte",
  //     url: "https://culyte.com",
  //     image: "projects/culyte.png",
  //     projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
  //     technologiesUsed: [
  //         {
  //             tech: "ReactJS"
  //         },
  //         {
  //             tech: "NodeJS"
  //         },
  //         {
  //             tech: "Ant Design"
  //         },
  //         {
  //             tech: "TailwindCSS"
  //         },
  //     ]
  // },
];
export default function handler(req, res) {
  res.status(200).json(portfolio);
}
