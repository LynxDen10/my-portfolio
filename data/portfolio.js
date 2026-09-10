export const navigationLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const profile = {
  name: "John Lyndon R. Sanggod",
  shortName: "John Lyndon R. Sanggod",
  role: "Junior Software Developer / Application Developer",
  email: "johnlyndonsanggod27@gmail.com",
  phone: "+63 981 797 6666",
  location: "Clarin, Bohol, Philippines",

  github: "https://github.com/LynxDen10",
  githubLuwas: "https://github.com/LynxDen10/luwas",
  githubAcciAlert: "https://github.com/LynxDen10/AcciAlertV1",

  linkedin: "https://www.linkedin.com/in/johnlyndonrsanggod/",
  facebook: "https://www.facebook.com/johnlyndonrs/",
  resume: "/resume/John_Lyndon_Sanggod_Resume.pdf",
};

export const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "Python", "Java", "Kotlin"],
  },
  {
    title: "Frontend Development",
    skills: ["HTML5", "CSS3", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "RESTful APIs"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "Firebase", "Authentication & Firestore"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "Postman", "Visual Studio Code", "Android Studio"],
  },
];

export const projects = [
  {
    title: "AcciAlert",
    subtitle: "Android Road Incident Detection App",
    description:
      "Android application that detects road incidents using device sensors and sends real-time alerts to emergency contact responders.",
    technologies: ["Kotlin", "Firebase", "Google Maps", "FCM"],
    preview: "mobile",
    github: profile.githubAcciAlert,
  },
  {
    title: "LUWAS",
    subtitle: "LGU Unified Web-based Alert System",
    description:
      "A web-based platform for local government teams to manage community data, visualize hazard areas, and support faster disaster response.",
    technologies: ["React", "Node.js", "MySQL", "Leaflet"],
    preview: "image",
    github: profile.githubLuwas,
    images: [
      {
        src: "/images/projects/luwas/dashboard.jpg",
        alt: "LUWAS dashboard with resident statistics",
      },
      {
        src: "/images/projects/luwas/map.jpg",
        alt: "LUWAS hazard map with affected households",
      },
      {
        src: "/images/projects/luwas/reports.jpg",
        alt: "LUWAS reports screen",
      },
      {
        src: "/images/projects/luwas/household.jpg",
        alt: "LUWAS household management screen",
      },
    ],
  },
  {
    title: "Billing Management System",
    subtitle: "Billing and reporting platform",
    description:
      "A billing system for customer and payment management with report generation and tracking features.",
    technologies: ["PHP", "MySQL", "Bootstrap", "Chart.js"],
    preview: "billing",
  },
];

export const certifications = [
  {
    title: "Young Innovator's Award",
    image: "/images/certificates/young-innovators-award.png",
    description:
      "Recognized for developing the LGU Unified Web-Based Alert System for Risk Mapping and Accident Reporting, an innovative software solution that supports public safety and local government operations.",
    issuer: "Bohol Island State University",
    date: "June 16, 2026",
  },
  {
    title: "More Certifications Coming Soon",
    description:
      "Continuously expanding my expertise through professional certifications, technical training, and software development programs.",
  },
];