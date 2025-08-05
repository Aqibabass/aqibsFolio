export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "TravelMate",
    description:
      "A travel platform powered by AI to generate smart itineraries with hotel booking, maps integration, and secure user access.",
    technologies: ["React.js", "Node.js", "MongoDB", "Gemini", "Razorpay"],
    github: "https://github.com/Aqibabass",
    demo: "https://final-project-mu-nine.vercel.app/",
    image: require(".//../../public/projects/odunsi.png"),
    available: true,
  },
  {
    id: 1,
    name: "POS Onboarder",
    description:
      "A role-based banking portal built during an internship at J&K Bank, featuring merchant onboarding.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/Aqibabass",
    demo: "",
    image: require(".//../../public/projects/interlock.png"),
    available: false,
  },
  {
    id: 2,
    name: "StaffHub",
    description:
      "A desktop application to manage employee records with admin controls and a digital leave application system.",
    technologies: ["Java", "GUI", "MySQL", "JDBC"],
    github: "https://github.com/Aqibabass",
    demo: "",
    image: require(".//../../public/projects/synthetix-flip.png"),
    available: false,
  },
  {
    id: 3,
    name: "E-Commerce",
    description:
      "An e-commerce platform with user authentication, product catalog, and secure payment processing.",
    technologies: ["React.js", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/Aqibabass",
    demo: "",
    image: require(".//../../public/projects/odunsi.png"),
    available: true,
  },
];
