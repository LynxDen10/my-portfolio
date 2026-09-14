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
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Visual Studio Code",
      "Android Studio",
    ],
  },
];

export const projects = [
  {
    title: "AcciAlert",
    subtitle: "Real-Time Accident Detection and Emergency Response",
    category: "Mobile Safety App",
    status: "Android + Firebase",
    impact: "Emergency response workflow",
    description:
      "AcciAlert is a mobile safety application that detects road incidents through phone sensors, shares GPS location, and notifies emergency contacts and responders in real time.",
    technologies: ["Kotlin", "Firebase", "Google Maps", "FCM"],
    preview: "image",
    github: profile.githubAcciAlert,
    images: [
      {
        src: "/images/projects/accialert/acc4.png",
        alt: "AcciAlert GPS and response screen",
      },
      {
        src: "/images/projects/accialert/acc6.png",
        alt: "AcciAlert dashboard and report screen",
      },
      {
        src: "/images/projects/accialert/acc8.png",
        alt: "AcciAlert emergency contact details",
      },
      {
        src: "/images/projects/accialert/acc10.png",
        alt: "AcciAlert incident detection flow",
      },
    ],
  },
  {
    title: "LUWAS",
    subtitle: "LGU Unified Web-based Alert System",
    category: "Web GIS Platform",
    status: "Web dashboard + GIS",
    impact: "Local risk monitoring",
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
        src: "/images/projects/luwas/forgot.jpg",
        alt: "LUWAS forgot password screen",
      },
    ],
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