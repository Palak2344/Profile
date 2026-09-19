// All portfolio content lives here — edit this file to update the site.

export const profile = {
  firstName: 'Palak',
  lastName: 'Choudhary',
  roles: [
    'Full-Stack MERN Developer',
    'React.js Developer',
    'Node.js & Express Engineer',
    'MongoDB Enthusiast',
  ],
  lede: 'Building responsive, production-ready web applications with clean architecture — from React interfaces to Node.js APIs and MongoDB data models.',
  location: 'Bhopal, Madhya Pradesh, India',
  email: 'palakchoudhary0906@gmail.com',
  phone: '+91-7000459854',
  github: 'https://github.com/Palak2344/Profile',
  linkedin: 'https://www.linkedin.com/in/palak-choudhary-ab5236237/',
  // Resume PDF served from /public — opens in a new tab or downloads
  resumeFile: '/Palak_Choudhary_Resume.pdf',
  badges: [
    { icon: '💼', label: '3 Internships' },
    { icon: '⚡', label: 'Full-Stack MERN Developer' },
    { icon: '🚀', label: '4+ Apps Shipped' },
  ],
}

// Pre-addressed mail link (opens the visitor's mail app to send Palak an email).
export const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
  'Hello Palak — reaching out from your portfolio'
)}`

export const about = {
  chips: ['Clean Code', 'API Integration', 'Responsive Design', 'Problem Solving'],
}

export const skills = [
  { icon: 'code', title: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'SQL'] },
  { icon: 'window', title: 'Frontend', items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'] },
  { icon: 'server', title: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth'] },
  { icon: 'database', title: 'Databases', items: ['MongoDB', 'MySQL'] },
  { icon: 'tools', title: 'Tools & Cloud', items: ['Git', 'GitHub', 'Docker', 'AWS', 'Vercel', 'CI/CD', 'Postman'] },
  { icon: 'concepts', title: 'Concepts', items: ['MERN Stack', 'MVC', 'CRUD', 'Agile', 'API Integration'] },
]

export const experience = [
  {
    role: 'Full Stack Developer Intern',
    when: 'Feb 2026 — Present',
    org: 'IIFETECH Pvt. Ltd.',
    orgMeta: 'Bhopal, MP',
    points: [
      'Building and shipping <b>4+ responsive MERN stack applications</b> end-to-end, from React.js UI to Node.js/Express.js APIs and MongoDB data models.',
      'Implemented full CRUD workflows and <b>JWT-based authentication</b> for a CRM system supporting <b>500+ user records</b> across 10 client accounts.',
      'Integrated a REST-API-driven <b>AI chatbot</b> into a client-facing product; collaborating with a 5-member team using Git/GitHub and CI/CD under Agile sprints.',
    ],
  },
  {
    role: 'AI with Python Intern',
    when: 'Jul — Aug 2025',
    org: 'SkillForge E-Learning Solutions',
    note: 'Completed a 2-month internship building practical AI and Python fundamentals, including data handling and applied problem-solving exercises.',
  },
  {
    role: 'Full Stack Web Dev Intern',
    when: 'Mar — Jun 2024',
    org: 'Pantech.ai',
    orgMeta: 'Warriors Way',
    note: 'Completed a 3-month full-stack web development internship, building foundational MERN stack skills through guided project work.',
  },
]

export const projects = [
  {
    icon: 'users',
    title: 'CRM Application',
    desc: 'Customer management system with full CRUD, JWT authentication, and role-based dashboards; REST API backend on Express/MongoDB.',
    stack: ['MongoDB', 'Express', 'React', 'Node'],
  },
  {
    icon: 'chat',
    title: 'AI Chatbot',
    desc: 'Dynamic chatbot UI with persistent chat history, connected to a Node/Express backend for session and message handling.',
    stack: ['React.js', 'Node.js', 'MongoDB'],
  },
  {
    icon: 'chart',
    title: 'Company Analytics Dashboard',
    desc: 'Data visualization dashboard consuming REST APIs to display live business metrics with filterable views.',
    stack: ['React.js', 'Node.js', 'REST'],
  },
  {
    icon: 'globe',
    title: 'Rise with Shashank',
    desc: 'Multi-page wellness coaching site with a custom typography system, an animated "Horizon" divider, and a snap-scroll testimonials carousel; deployed on Vercel.',
    stack: ['React', 'Vite', 'Tailwind', 'Router'],
  },
  {
    icon: 'cart',
    title: 'Fashion E-Commerce Website',
    desc: 'Product catalog, cart, and authentication modules with persistent cart state and protected checkout routes.',
    stack: ['MongoDB', 'Express', 'React', 'Node'],
  },
]

export const education = [
  {
    deg: 'Master of Computer Applications (MCA)',
    school: 'Lakshmi Narain College of Technology, Bhopal',
    meta: '2024 — 2026 · SGPA 9.0 · CGPA 8.0',
  },
  {
    deg: 'Bachelor of Computer Applications (BCA)',
    school: 'Rabindranath Tagore University, Bhopal',
    meta: '2021 — 2024 · CGPA 7.61',
  },
]

export const certifications = [
  { star: '★', name: 'Python with AWS Cloud Training', meta: 'LinuxWorld · Jul 2026' },
  { star: '★', name: 'Web Development Course', meta: 'SkillForge · May 2025' },
  { star: '★', name: 'ReactJS Bootcamp', meta: 'Techpaathshala · Oct 2023' },
  { star: '★', name: 'AWS Training Program', meta: 'LinuxWorld · Apr 2022' },
  { star: '🏆', name: 'Round 2 Participant — ECLearnix Quick Solvathon', meta: 'Sep 2025' },
]
