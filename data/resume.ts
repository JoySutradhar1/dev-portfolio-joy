export const profile = {
  name: "Joy Sutradhar",
  role: "Frontend Developer",
  tagline:
    "I build responsive, scalable interfaces for web and mobile — React, Next.js, and React Native, shipped with clean component architecture.",
  location: "Dhaka, Bangladesh",
  email: "sdjoy49@gmail.com",
  phone: "01684366527",
  linkedin: "https://linkedin.com/in/joy-sutradhar",
  github: "https://github.com/JoySutradhar1",
  summary:
    "Frontend Developer with 3+ years of professional experience building responsive and scalable web and mobile applications using React, Next.js, and React Native. Focused on intuitive interfaces, modern design systems, and performance across platforms — with strong footing in state management, API integration, and component-based architecture.",
};

export const stats = [
  { value: "3+", label: "years experience" },
  { value: "3", label: "shipped products" },
  { value: "10+", label: "reusable UI systems" },
];

export const experience = [
  {
    company: "Gononet Online Solution Ltd.",
    role: "Software Engineer",
    period: "March 2023 — Present",
    location: "Dhaka, Bangladesh",
    points: [
      "Developed and maintained responsive web and mobile applications using React and React Native.",
      "Enhanced performance by debugging and optimizing rendering logic across platforms.",
      "Worked on GorillaMove (instant grocery delivery) and Retailer Book (ERP), focusing on modular, scalable architecture and real-time data integration.",
      "Collaborated with cross-functional teams to keep UI/UX consistent through delivery.",
    ],
  },
];

export const projects = [
  {
    name: "GorillaMove",
    subtitle: "Instant grocery delivery — web & mobile",
    stack: ["Next.js", "React Native", "Socket.io"],
    points: [
      "Cut initial load time by optimizing bundle size and code-splitting.",
      "Improved search responsiveness by introducing debouncing, reducing redundant API calls.",
      "Built real-time chat between customers and admins with Socket.io.",
      "Designed and shipped a \"Complain Box\" feature to streamline issue reporting.",
      "Fixed critical cross-platform UI bugs and rendering performance issues.",
    ],
    href: undefined as string | undefined,
  },
  {
    name: "Retailer Book",
    subtitle: "ERP system — in active development",
    stack: ["Next.js", "TypeScript", "shadcn/ui", "React Hook Form", "Zod"],
    points: [
      "Built ERP modules: Contact Management, Purchase, Inventory Settings, WMS Settings, Demand Planning.",
      "Created reusable components — multi-select input, searchable input, modals — on shadcn/ui for consistent design.",
      "Implemented scalable, modular features with Next.js and TypeScript to reduce bugs and ease maintenance.",
      "Integrated React Hook Form with Zod validation for accurate, consistent data handling across modules.",
    ],
    href: undefined as string | undefined,
  },
  {
    name: "BD Kids Book",
    subtitle: "Interactive learning app for children",
    stack: ["React Native"],
    points: [
      "First React Native project — tap-to-sound interactive learning for kids.",
      "Designed a child-friendly interface with vibrant visuals and intuitive navigation.",
      "Added audio feedback for letters and images to reinforce learning.",
    ],
    href: "https://github.com/JoySutradhar1/BDKidsBook",
  },
];

export const skills = {
  Languages: ["JavaScript", "TypeScript"],
  Frameworks: ["React", "React Native", "Next.js"],
  "Libraries & Tools": [
    "shadcn/ui",
    "MUI",
    "Redux Toolkit",
    "RTK Query",
    "Axios",
    "React Router",
    "React Navigation",
    "Reanimated",
  ],
};

export const education = {
  school: "Daffodil International University",
  degree: "Bachelor of Science in Computer Science",
  location: "Dhaka, Bangladesh",
  year: "2021",
};
