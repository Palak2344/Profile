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

// Opens Gmail's compose window (new tab), pre-addressed to Palak with a subject.
export const mailtoHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  profile.email
)}&su=${encodeURIComponent('Hello Palak — reaching out from your portfolio')}`

export const about = {
  chips: ['Clean Code', 'API Integration', 'Responsive Design', 'Problem Solving'],
}

export const skills = [
  {
    icon: 'code',
    title: 'Languages',
    items: [
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'SQL', level: 78 },
    ],
  },
  {
    icon: 'window',
    title: 'Frontend',
    items: [
      { name: 'React.js', level: 90 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Bootstrap', level: 80 },
    ],
  },
  {
    icon: 'server',
    title: 'Backend',
    items: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 87 },
      { name: 'REST APIs', level: 88 },
      { name: 'JWT Auth', level: 82 },
    ],
  },
  {
    icon: 'database',
    title: 'Databases',
    items: [
      { name: 'MongoDB', level: 88 },
      { name: 'MySQL', level: 80 },
    ],
  },
  {
    icon: 'tools',
    title: 'Tools & Cloud',
    items: [
      { name: 'Git', level: 88 },
      { name: 'GitHub', level: 90 },
      { name: 'Docker', level: 72 },
      { name: 'AWS', level: 70 },
      { name: 'Vercel', level: 85 },
      { name: 'CI/CD', level: 72 },
      { name: 'Postman', level: 85 },
    ],
  },
  {
    icon: 'concepts',
    title: 'Concepts',
    items: [
      { name: 'MERN Stack', level: 90 },
      { name: 'MVC', level: 82 },
      { name: 'CRUD', level: 92 },
      { name: 'Agile', level: 80 },
      { name: 'API Integration', level: 88 },
    ],
  },
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

export const services = [
  {
    icon: 'window',
    title: 'Frontend Development',
    desc: 'Responsive, accessible interfaces built with React.js, Tailwind CSS, and a clean, reusable component architecture.',
  },
  {
    icon: 'server',
    title: 'Backend & APIs',
    desc: 'RESTful APIs, CRUD workflows, and JWT authentication powered by Node.js, Express, and MongoDB.',
  },
  {
    icon: 'database',
    title: 'Full-Stack MERN',
    desc: 'End-to-end applications — from MongoDB data models and Express APIs to deployed React frontends on Vercel.',
  },
]

export const stats = [
  { value: 3, suffix: '', label: 'Internships' },
  { value: 4, suffix: '+', label: 'Apps Shipped' },
  { value: 5, suffix: '', label: 'Featured Projects' },
  { value: 9, suffix: '.0', label: 'MCA SGPA' },
]

export const marquee = [
  'React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'TypeScript',
  'Tailwind CSS', 'REST APIs', 'JWT Auth', 'Docker', 'AWS', 'Git', 'CI/CD',
  'MySQL', 'Python', 'MVC', 'Agile',
]

export const heroSnippets = [
  { text: "const dev = 'Palak';", top: '14%', left: '6%', delay: '0s' },
  { text: '<Portfolio />', top: '24%', right: '7%', delay: '1.2s' },
  { text: '{ mern: true }', top: '62%', left: '5%', delay: '0.6s' },
  { text: 'npm run build', top: '70%', right: '8%', delay: '1.8s' },
  { text: 'git push origin', top: '42%', left: '10%', delay: '2.4s' },
  { text: 'await fetch(api)', top: '48%', right: '11%', delay: '0.9s' },
]
