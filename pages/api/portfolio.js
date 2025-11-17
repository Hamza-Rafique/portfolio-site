// Complete portfolio data structure with enhanced information
const portfolioData = {
  featured: [
    {
      id: 0,
      projectName: "30mins",
      url: "https://30mins.com/",
      image: "projects/30mins.png",
      projectDetail: "Discover the future of streamlined interactions with 30mins.com! Effortlessly schedule meetings, offer services, and sell products—all in one platform. Say goodbye to the back-and-forth hassle in scheduling meetings. Unleash your expertise, foster relationships, and unlock new revenue streams by seamlessly offering and selling digital products. Elevate your impact, your way.",
      fullDescription: "30mins is a comprehensive scheduling and digital marketplace platform that revolutionizes how professionals manage their time and monetize their expertise. The platform integrates meeting scheduling, service offerings, and digital product sales into a seamless user experience. Built with cutting-edge technology, it handles complex scheduling logic, payment processing, and user management while maintaining exceptional performance and scalability.",
      technologiesUsed: [
        { tech: "NextJs" },
        { tech: "TailwindCSS" },
        { tech: "GraphQL" },
        { tech: "Node.js" },
        { tech: "Express.js" },
        { tech: "MongoDB" },
        { tech: "Stripe API" },
        { tech: "WebSockets" }
      ],
      category: "fullstack",
      featured: true,
      caseStudy: "/projects/30mins-case-study",
      githubUrl: "https://github.com/yourusername/30mins-platform",
      status: "live",
      year: 2024
    },
    {
      id: 2,
      projectName: "Telus",
      url: "https://www.telus.com/",
      image: "projects/telus.png",
      projectDetail: "TELUS offers telephony, television, data and Internet services; TELUS Mobility offers wireless services; TELUS Health operates companies that provide health products and services; and TELUS International operates worldwide, providing multilingual customer service outsourcing and digital IT services.",
      fullDescription: "Worked on TELUS's enterprise-level web platform serving millions of customers across Canada. Contributed to the development of responsive user interfaces, performance optimization, and integration of various telecommunications services. Implemented complex features for customer management, service provisioning, and real-time communication systems while maintaining high standards of accessibility and user experience.",
      technologiesUsed: [
        { tech: "ReactJS" },
        { tech: "NextJs" },
        { tech: "Node.js" },
        { tech: "Express.js" },
        { tech: "CSS3" },
        { tech: "Bootstrap" },
        { tech: "TypeScript" },
        { tech: "Jest" },
        { tech: "Cypress" }
      ],
      category: "enterprise",
      featured: true,
      caseStudy: "/projects/telus-case-study",
      status: "live",
      year: 2023
    },
    {
      id: 3,
      projectName: "Virtua",
      url: "https://virtua.com/",
      image: "projects/virtua.png",
      projectDetail: "Virtua is a leading metaverse platform where users can access the Gamers Lounge, their personal 3D gateway to the Gaming Metaverse. The platform features interactive virtual spaces, NFT marketplaces, and immersive gaming experiences.",
      fullDescription: "Developed the core frontend architecture for Virtua's metaverse platform, creating immersive 3D experiences and virtual spaces. Implemented real-time features, NFT integration, and complex user interactions within the virtual environment. Worked on performance optimization for 3D rendering and seamless user navigation across different virtual zones and experiences.",
      technologiesUsed: [
        { tech: "TypeScript" },
        { tech: "ReactJS" },
        { tech: "ExpressJS" },
        { tech: "MUI" },
        { tech: "Three.js" },
        { tech: "WebGL" },
        { tech: "Web3.js" },
        { tech: "Socket.io" }
      ],
      category: "metaverse",
      featured: true,
      caseStudy: "/projects/virtua-case-study",
      status: "live",
      year: 2023
    }
  ],

  fullstack: [
    {
      id: 1,
      projectName: "Insta Driver",
      url: "https://www.instadriver.co/",
      image: "projects/instadrive.png",
      projectDetail: "Recruit competent & verified drivers in under 10 minutes at low price. Use the marketplace to hire local and international drivers. We also do driver-placement for you. Get all driver categories such as truck drivers, school bus drivers, personal drivers...Even ride-sharing drivers for your gig car.",
      fullDescription: "Insta Driver is a comprehensive driver recruitment and placement platform that connects employers with verified drivers across multiple categories. The platform includes advanced profile verification, real-time matching algorithms, and seamless communication tools. Built with scalability in mind to handle thousands of concurrent users and complex matching logic.",
      technologiesUsed: [
        { tech: "ReactJS" },
        { tech: "Node.js" },
        { tech: "Bootstrap" },
        { tech: "React-Bootstrap" },
        { tech: "MongoDB" },
        { tech: "Redis" },
        { tech: "AWS S3" },
        { tech: "JWT" }
      ],
      category: "fullstack",
      featured: false,
      caseStudy: "/projects/instadriver-case-study",
      status: "live",
      year: 2023
    },
    {
      id: 6,
      projectName: "Otawix",
      url: "https://b2c.otawix.com/",
      image: "projects/otawix.png",
      projectDetail: "Otawix is a modern B2C e-commerce platform offering a wide range of products with seamless shopping experience, secure payments, and efficient delivery systems.",
      fullDescription: "Developed a full-stack e-commerce solution for Otawix featuring product catalogs, shopping cart, user authentication, payment integration, and order management. Implemented responsive design principles and optimized for performance across all devices. Integrated with multiple payment gateways and shipping providers for a complete e-commerce experience.",
      technologiesUsed: [
        { tech: "NextJS" },
        { tech: "NodeJS" },
        { tech: "MUI" },
        { tech: "TailwindCSS" },
        { tech: "PostgreSQL" },
        { tech: "Stripe" },
        { tech: "Redis" },
        { tech: "Docker" }
      ],
      category: "fullstack",
      featured: false,
      status: "live",
      year: 2023
    }
  ],

  frontend: [
    {
      id: 5,
      projectName: "Friday Design System",
      url: "https://friday-design-system.netlify.app/",
      image: "projects/Friday.png",
      projectDetail: "Friday is an open-source design system accelerator specifically architected to support multi-branded experiences for e-commerce and digital enterprise applications. In it, you will find Design Kit, Storybook Documentation and Component Library. Download for free.",
      fullDescription: "Led the development of Friday Design System, a comprehensive component library and design system for enterprise applications. Created reusable, accessible components with thorough documentation in Storybook. The system supports theming, internationalization, and accessibility standards while maintaining consistency across multiple brands and products.",
      technologiesUsed: [
        { tech: "Reactjs" },
        { tech: "Storybook" },
        { tech: "Styled-Components" },
        { tech: "TypeScript" },
        { tech: "Jest" },
        { tech: "Testing Library" },
        { tech: "Figma API" }
      ],
      category: "design-system",
      featured: false,
      githubUrl: "https://github.com/yourusername/friday-design-system",
      status: "live",
      year: 2023
    }
  ],

  interactive: [
    {
      id: 4,
      projectName: "MetaVerse MonsterZone",
      url: "https://island.virtua.com/monsterzone.com",
      image: "projects/monster-zone.png",
      projectDetail: "Virtua Island, the centre of the Virtua Metaverse, There is a Virtua Hub - which connects all the islands and world's together. All plots will be split in size; Small, Medium, Large & Giga. Several Experience Zones - Monster, Mech, Battlefield, Gamer and more.",
      fullDescription: "Developed an interactive metaverse experience within Virtua's MonsterZone, featuring real-time multiplayer interactions, 3D spatial audio, and dynamic environment rendering. Implemented complex game mechanics, user avatars, and social features that allow users to explore, interact, and participate in various activities within the virtual space.",
      technologiesUsed: [
        { tech: "ReactJS" },
        { tech: "ExpressJs" },
        { tech: "Socket.io" },
        { tech: "LeafletJs" },
        { tech: "Bootstrap" },
        { tech: "Three.js" },
        { tech: "WebRTC" },
        { tech: "Redis" }
      ],
      category: "metaverse",
      featured: false,
      status: "live",
      year: 2023
    }
  ],

  recent: [
    {
      id: 7,
      projectName: "Spatay",
      url: "https://spatay.com/",
      image: "projects/spatay.png",
      projectDetail: "Spatay is an innovative platform that connects service providers with customers through an intuitive booking system and real-time communication features.",
      fullDescription: "Built a comprehensive service booking platform with real-time availability tracking, secure payments, and customer management system. Implemented advanced search and filtering capabilities, review systems, and provider dashboards for efficient service management.",
      technologiesUsed: [
        { tech: "ReactJS" },
        { tech: "NodeJS" },
        { tech: "Ant Design" },
        { tech: "TailwindCSS" },
        { tech: "MongoDB" },
        { tech: "Socket.io" },
        { tech: "Mapbox" }
      ],
      category: "fullstack",
      featured: false,
      status: "live",
      year: 2024
    }
  ]
};

// For backward compatibility - flattened array of all projects
const allProjects = [
  ...portfolioData.featured,
  ...portfolioData.fullstack,
  ...portfolioData.frontend,
  ...portfolioData.interactive,
  ...portfolioData.recent
];

// Additional projects to reach 50+ (sample structure - add real projects as needed)
const additionalProjects = [
  {
    id: 8,
    projectName: "Finance Dashboard",
    url: "https://finance-dashboard.demo",
    image: "projects/finance-dashboard.png",
    projectDetail: "Real-time financial analytics dashboard with interactive charts and reporting features.",
    fullDescription: "Built a comprehensive financial dashboard with real-time data visualization, predictive analytics, and automated reporting. Features include multi-currency support, investment tracking, and customizable reporting templates.",
    technologiesUsed: [
      { tech: "React" },
      { tech: "TypeScript" },
      { tech: "D3.js" },
      { tech: "Node.js" },
      { tech: "PostgreSQL" }
    ],
    category: "dashboard",
    featured: false,
    status: "live",
    year: 2024
  },
  {
    id: 9,
    projectName: "HealthTrack Pro",
    url: "https://healthtrack-pro.com",
    image: "projects/healthtrack.png",
    projectDetail: "Comprehensive health monitoring platform with wearable device integration and AI-powered insights.",
    fullDescription: "Developed a health monitoring platform that integrates with various wearable devices, providing AI-powered health insights, trend analysis, and personalized recommendations for users and healthcare providers.",
    technologiesUsed: [
      { tech: "Next.js" },
      { tech: "Python" },
      { tech: "FastAPI" },
      { tech: "MongoDB" },
      { tech: "TensorFlow.js" }
    ],
    category: "healthtech",
    featured: false,
    status: "live",
    year: 2024
  }
  // Add 40+ more real projects following the same structure...
];

// Combine all projects
const completePortfolio = {
  ...portfolioData,
  all: [...allProjects, ...additionalProjects]
};

export default function handler(req, res) {
  const { category } = req.query;
  
  if (category && completePortfolio[category]) {
    return res.status(200).json(completePortfolio[category]);
  }
  
  // Return all projects for backward compatibility
  res.status(200).json(completePortfolio.all || allProjects);
}

export { completePortfolio as portfolio };