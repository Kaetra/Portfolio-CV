export interface PersonalInfo {
  photo: string;
  name: string;
  title: string;
  subtitle: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  gpa?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
  level: number; // 1-100
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  description: string;
  skills: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
  featured: boolean;
}

// Data dummy - nanti bisa Anda sesuaikan
export const personalInfo: PersonalInfo = {
  name: "Berlian Eka Marsa Putera",
  title: "Full Stack Developer",
  subtitle: "Passionate about creating amazing digital experiences",
  location: "Semarang, Indonesia",
  email: "kakaputraeka@gmail.com",
  phone: "+62 822-2001-2481",
  github: "https://github.com/Kaetra",
  linkedin: "https://www.linkedin.com/in/berlianekamarsaputera/",
  photo: "/profile.png",
};

export const education: Education[] = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Soegijapranata Catholic University",
    year: "2023-2027",
    gpa: "3.8/4.0"
  },
  {
    degree: "Vocational High School - Computer and Network Engineering Major",
    institution: "SMK Negeri 7 Semarang",
    year: "2019-2023"
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", level: 90 },
  { name: "TypeScript", category: "frontend", level: 85 },
  { name: "Next.js", category: "frontend", level: 80 },
  { name: "Tailwind CSS", category: "frontend", level: 88 },
  { name: "Bootstrap", category: "frontend", level: 95 },
  { name: "HTML/CSS", category: "frontend", level: 95 },
  
  // Backend
  { name: "Node.js", category: "backend", level: 85 },
  { name: "Express.js", category: "backend", level: 82 },
  { name: "Python", category: "backend", level: 75 },
  { name: "PHP", category: "backend", level: 90 },
  
  // Database
  { name: "PostgreSQL", category: "database", level: 80 },
  { name: "MongoDB", category: "database", level: 75 },
  { name: "MySQL", category: "database", level: 78 },
  
  // Tools
  { name: "Git", category: "tools", level: 90 },
  { name: "VS Code", category: "tools", level: 95 },
  { name: "Figma", category: "tools", level: 65 }
];

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Cisco Networking Academy - IT Essentials",
    issuer: "Cisco Networking Academy",
    date: "May 2020",
    credentialId: "",
    credentialUrl: "https://drive.google.com/file/d/1e0PzKomlK1bGwFhf3-gMOh6SX_m35aM9/view?usp=sharing", 
    description: "Comprehensive course covering the fundamentals of networking, including network architecture, routing, security, and troubleshooting.",
    skills: ["Networking", "Routing", "Switching", "Firewalls", "Security"]
  },
  {
    id: 2,
    title: " Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
    issuer: "Amazon Web Services",
    date: "July 2021", 
    credentialId: "L4PQ3R0YVPO1",
    credentialUrl: "https://drive.google.com/file/d/1epqLFBRzVNMMY_2qQSQngOpsSYS9O3TK/view?usp=sharing",
    description: "Hands-on experience with AWS services and concepts, including EC2, S3, Lambda, and IAM.",
    skills: ["AWS EC2", "AWS S3", "AWS Lambda", "AWS IAM"]
  },
  {
    id: 3,
    title: "Exploratory Data Analysis with Python for Beginner",
    issuer: "DQ Lab",
    date: "July 2021", 
    credentialId: "#DQLABINTP1JCPRJV",
    credentialUrl: "https://drive.google.com/file/d/1Un0AqmzUThEAxR5VTZyMszoNE4EBh3dN/view?usp=sharing",
    description: "Introduction to exploratory data analysis using Python, covering data inspection, summary statistics, and identifying data patterns.",
    skills: ["Python", "Pandas", "Data Cleaning", "EDA", "Statistical Summary"]
  },
  {
    id: 4,
    title: "Python for Data Professional Beginner",
    issuer: "DQ Lab",
    date: "July 2021", 
    credentialId: "#DQLABINTP1HLDGRB",
    credentialUrl: "https://drive.google.com/file/d/1kC0H1pv5j01IndvrXIMPT8uuGQp0jWRT/view?usp=sharing",
    description: "Beginner-level course on Python programming focused on data manipulation and basic programming logic.",
    skills: ["Python", "Variables", "Control Flow", "Loops", "Functions"]
  },
  {
    id: 5,
    title: "Data Visualization with Python Matplotlib for Beginner",
    issuer: "DQ Lab",
    date: "July 2021", 
    credentialId: "#DQLABDTWP1WJJNTS",
    credentialUrl: "https://drive.google.com/file/d/1EOoZRBjBjzz8FJ8oK6fAHzp8SppvoewN/view?usp=sharing",
    description: "Learn how to create basic visualizations using Matplotlib, including line charts, bar charts, and histograms.",
    skills: ["Python", "Matplotlib", "Data Visualization", "Charting", "Plotting"]
  },
  {
    id: 6,
    title: "Data Science Training: Data Exploration and Visualization Using Python",
    issuer: "Forum Mahasiswa APIC",
    date: "August 2021", 
    credentialId: "#DQLABDTWP1WJJNTS",
    credentialUrl: "https://drive.google.com/file/d/1AzxlU11nSVMrJZijRHYoG8RApDheJtIz/view?usp=sharing",
    description: "Workshop on exploring datasets and visualizing data using Python libraries such as Pandas and Matplotlib.",
    skills: ["Python", "Pandas", "Matplotlib", "Data Exploration", "Data Visualization"]
  },
  {
    id: 7,
    title: "Architecting on AWS (Membangun Arsitektur Cloud di AWS)",
    issuer: "Amazon Web Services",
    date: "September 2021", 
    credentialId: "N9ZOEM850XG5",
    credentialUrl: "https://drive.google.com/file/d/1chNnDn9yFnkhHqjAGqugbN8X_qJ9Bf5e/view?usp=sharing",
    description: "Training on designing scalable, secure, and cost-efficient architectures using AWS services.",
    skills: ["AWS Architecture", "Scalability", "Security", "Cloud Design", "Cost Optimization"]
  },
  {
    id: 8,
    title: "Java Fundamental",
    issuer: "Oracle Academy",
    date: "October 2021", 
    credentialId: "",
    credentialUrl: "https://drive.google.com/file/d/1qa-eAvpz6vVGKXRsP6snfAaP3ZQsnTnk/view?usp=sharing",
    description: "Foundation course in Java programming, covering object-oriented principles, control structures, and basic data structures.",
    skills: ["Java", "OOP", "Variables", "Control Flow", "Data Structures"]
  },
  {
    id: 9,
    title: "CCNAv7: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    date: "October 2022", 
    credentialId: "",
    credentialUrl: "https://drive.google.com/file/d/1OLdFGWLJtKX60Ey5ElZlLqSsoV1I_Dne/view?usp=sharing",
    description: "Focused course on switching, routing protocols, wireless configuration, and network troubleshooting in modern enterprise environments.",
    skills: ["Switching", "Routing", "Wireless Networking", "Cisco Devices", "Troubleshooting"]
  },
];


export const projects: Project[] = [
  {
    id: 1,
    title: "AI Voice Assistant",
    description: "Offline AI assistant with voice, typing animation, and system commands.",
    longDescription: "An intelligent offline AI voice assistant built using Flask and Ollama, featuring real-time typing animation and voice responses. It is capable of processing natural language queries, executing local system commands, and responding using speech synthesis. The assistant runs entirely offline and supports interactive chat with smooth UI experience. Voice and text outputs are synchronized for a more immersive user interaction.",
    technologies: ["Flask", "JavaScript", "HTML", "CSS", "Ollama", "pyttsx3", "Subprocess", "Web APIs"],
    // githubUrl: "",
    // liveUrl: "http://127.0.0.1:5000",
    imageUrl: "/ai-assistant.png",
    featured: true
  },
  {
    id: 2,
    title: "Bookstore Management System",
    description: "Web-based system for managing bookstore operations with task coordination and team collaboration features.",
    longDescription: "An integrated web application designed to manage various operations in a bookstore environment, including inventory tracking, sales monitoring, and team task coordination. This full-stack solution supports collaborative workflows with drag-and-drop task boards, role-based user management, and real-time updates. Built using Laravel and MySQL on the backend, and Bootstrap with Vanilla JS on the frontend, the system ensures a responsive and user-friendly experience. It is ideal for small to medium-sized teams aiming to streamline bookstore operations efficiently.",
    technologies: ["Vannila JS", "Bootstrap", "HTML", "PHP", "Laravel", "MySQL"],
    // githubUrl: "",
    // liveUrl: "",
    imageUrl: "/bookstore.png",
    featured: true
  }
];