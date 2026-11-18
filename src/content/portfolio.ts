/**
 * All editable portfolio content lives here.
 * Replace placeholder values (marked "TODO") with real details when available.
 */
import portraitAsset from "@/assets/emmanuel-portrait.jpg.asset.json";
import pattaImage from "@/assets/project-patta-ml.jpg";
import responsiveImage from "@/assets/project-responsive-web.jpg";

export const profile = {
  firstName: "Emmanuel",
  lastName: "Ebenezer",
  logo: "EMMANUEL",
  headline: "Full-Stack Developer | AI/ML Enthusiast | Aspiring Gen AI Engineer",
  intro:
    "I'm a Computer Science Engineering student passionate about building modern web applications and exploring the possibilities of Artificial Intelligence and Machine Learning. I enjoy turning ideas into practical digital solutions through development, creativity, and continuous learning.",
  rotatingFocus: ["Full-Stack Development", "AI & Machine Learning", "Generative AI"],
  /** Profile photo shown in the hero panel. Empty shows the monogram. */
  photoUrl: portraitAsset.url,
  /** TODO: set to a hosted PDF URL to enable the resume download. */
  resumeUrl: "",
  tagline: "Building for the web today, engineering with AI tomorrow.",
};

export const contact = {
  email: "emmanuel@example.com", // TODO
  phone: "+91 00000 00000", // TODO
  linkedin: "https://www.linkedin.com/in/your-profile", // TODO
  linkedinLabel: "linkedin.com/in/your-profile",
  github: "https://github.com/your-username", // TODO
  githubLabel: "github.com/your-username",
  location: "Chennai, India", // TODO: confirm
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
] as const;

export const about = {
  paragraphs: [
    "I'm Emmanuel Ebenezer, currently pursuing my Bachelor of Engineering in Computer Science and Engineering at KCG College of Technology.",
    "I have a strong interest in Full-Stack Web Development and Artificial Intelligence. I have developed multiple responsive websites and experimented with Machine Learning models to solve practical problems.",
    "I am continuously improving my technical knowledge, exploring new technologies, and working towards becoming a skilled Generative AI Engineer.",
  ],
  academics: [
    { label: "Degree", value: "B.E. Computer Science and Engineering" },
    { label: "Institution", value: "KCG College of Technology" },
    { label: "Current Year", value: "Third Year" },
    { label: "Expected Graduation", value: "2028" },
    { label: "CGPA", value: "8.2" },
  ],
  interests: ["Movies", "Gaming", "Technology", "Exploring AI innovations"],
};

export type SkillGroupIcon = "frontend" | "backend" | "database" | "ai" | "design";

export const skillGroups: { title: string; icon: SkillGroupIcon; skills: string[] }[] = [
  { title: "Frontend Development", icon: "frontend", skills: ["HTML", "CSS", "JavaScript", "React"] },
  { title: "Backend Development", icon: "backend", skills: ["Java", "Python"] },
  { title: "Database", icon: "database", skills: ["MongoDB"] },
  {
    title: "AI & Machine Learning",
    icon: "ai",
    skills: ["Machine Learning", "Python", "ML Model Development", "AI Technologies"],
  },
  { title: "Design", icon: "design", skills: ["Canva", "Poster Design", "Graphic Design"] },
];

export const experience = [
  {
    role: "Full-Stack Development Intern",
    org: "Besant Technologies",
    type: "Summer Internship",
    period: "Summer · Dates to be added", // TODO
    points: [
      "Completed a summer internship in Full-Stack Development using Java.",
      "Gained practical exposure to web development.",
      "Learned about frontend and backend development workflows.",
    ],
  },
  {
    role: "Freelance Poster Designer",
    org: "Independent",
    type: "Freelance",
    period: "Ongoing", // TODO
    points: [
      "Create creative and visually appealing poster designs.",
      "Work on graphic design requirements.",
      "Focus on visual communication and creative presentation.",
    ],
  },
];

export const projects = [
  {
    title: "Patta Document Confidence Detection",
    category: "Machine Learning",
    description:
      "Developed a Machine Learning model to detect and assess confidence in Patta documents.",
    tech: ["Machine Learning"], // TODO: add exact technologies
    image: pattaImage,
    liveUrl: "", // TODO
    githubUrl: "", // TODO
  },
  {
    title: "Responsive Website Development",
    category: "Web Development",
    description:
      "Designed and developed multiple responsive websites with layouts optimized for desktop, tablet, and mobile devices.",
    tech: ["Responsive Design"], // TODO: add exact technologies
    image: responsiveImage,
    liveUrl: "", // TODO
    githubUrl: "", // TODO
  },
];

export type ServiceIcon = "fullstack" | "frontend" | "responsive" | "ml" | "ai" | "design";

export const services: { title: string; icon: ServiceIcon; points: string[] }[] = [
  {
    title: "Full-Stack Web Development",
    icon: "fullstack",
    points: ["Development of modern web applications.", "Frontend and backend integration."],
  },
  {
    title: "Frontend Development",
    icon: "frontend",
    points: ["Responsive websites.", "Interactive user interfaces."],
  },
  {
    title: "Responsive Web Design",
    icon: "responsive",
    points: ["Mobile-friendly layouts.", "Cross-device compatibility."],
  },
  {
    title: "Machine Learning Development",
    icon: "ml",
    points: ["ML model development.", "Data-driven solutions."],
  },
  {
    title: "AI-Based Application Development",
    icon: "ai",
    points: ["AI-powered applications.", "Intelligent software solutions."],
  },
  {
    title: "Poster & Graphic Design",
    icon: "design",
    points: ["Creative poster designs.", "Promotional and digital graphics."],
  },
];

export const careerGoals = [
  {
    label: "Short-Term Goal",
    text: "To become an expert in Artificial Intelligence and continuously strengthen my knowledge of advanced AI technologies.",
  },
  {
    label: "Long-Term Goal",
    text: "To establish my career as a Generative AI Engineer and contribute to building innovative AI-powered solutions.",
  },
];
