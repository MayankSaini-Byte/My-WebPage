/**
 * portfolioData.js
 * ----------------------------------------------------------------------------
 * SINGLE SOURCE OF TRUTH for all editable content on the portfolio.
 *
 * To add a new project, skill, or achievement, edit THIS file only — no
 * component changes required. Each entry is a plain object so it can be mapped
 * over directly in the UI.
 * ----------------------------------------------------------------------------
 */

/* Identity & hero ---------------------------------------------------------------- */
export const profile = {
  name: 'Mayank Saini',
  role: 'Python Developer & AI/ML Enthusiast',
  tagline: 'Passionate about building intelligent systems, full-stack applications, and exploring data analytics.',
  email: 'mayanksaini72a@gmail.com',
  phone: '+91 995040-1966',
  github: 'https://github.com/MayankSaini-Byte',
  githubHandle: 'github.com/MayankSaini-Byte',
  huggingface: 'https://huggingface.co/mayanksaini96/',
  linkedin: 'https://www.linkedin.com/in/mayank-saini-6666b4375/',
  institute: 'MANIT Bhopal & IIT Madras',
  year: '1st Year',
  location: 'Bhopal, India',
};

/* About — left column narrative -------------------------------------------------- */
export const about = {
  // Each paragraph renders as its own <p> for clean rhythm.
  paragraphs: [
    "I'm a first-year student pursuing a dual academic track — a Bachelor of Technology at the Maulana Azad National Institute of Technology (NIT) Bhopal and a Bachelor of Science at IIT Madras. Both programs keep me anchored between engineering rigor and research-driven thinking.",
    'My core focus is machine learning and full-stack Python development. I enjoy the full lifecycle: shaping raw data with NumPy and Pandas, modelling with Scikit-learn, and shipping a clean React interface on top of a Python backend.',
    'Beyond coursework, I build side projects to test ideas end-to-end — from NLP classifiers to recommendation systems — and I actively take part in hackathons and student teams.',
  ],
  // Quick-facts table shown in the right column of the About section.
  facts: [
    { label: 'Name', value: 'Mayank Saini' },
    { label: 'Email', value: 'mayanksaini72a@gmail.com', href: 'mailto:mayanksaini72a@gmail.com' },
    { label: 'Phone', value: '+91 995040-1966', href: 'tel:+919950401966' },
    { label: 'Institute', value: 'MANIT Bhopal & IIT Madras' },
    { label: 'Year', value: '1st Year' },
    { label: 'Location', value: 'Bhopal, India' },
  ],
};

/* Skills — bento grid categories ------------------------------------------------- */
export const skills = [
  {
    id: 'languages',
    title: 'Languages',
    items: [
      { name: 'Python', level: 90 },
      { name: 'SQL', level: 40 },
    ],
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    items: [
      { name: 'NumPy', level: 65 },
      { name: 'Pandas', level: 75 },
      { name: 'Matplotlib', level: 55 },
      { name: 'Scikit-learn', level: 60 },
    ],
  },
  {
    id: 'coursework',
    title: 'Relevant Coursework',
    items: [
      { name: 'Statistics' },
      { name: 'Mathematics' },
      { name: 'Programming Fundamentals' },
      { name: 'Claude 101' }
    ],
  },
];

/* Projects — CSS grid of cards --------------------------------------------------- */
export const projects = [
  {
    id: 'cinematch-ai',
    title: 'CineMatch AI',
    description: 'Content-based recommendation system that surfaces films a user is likely to enjoy, powered by similarity scoring over movie metadata.',
    techStack: ['Python', 'Scikit-learn', 'Pandas'],
    link: 'https://github.com/MayankSaini-Byte/Movie_recc_syy',
    live: 'https://movie-recc-syy.vercel.app/',
    icon: 'film',
  },
  {
    id: 'sms-spam-classifier',
    title: 'SMS Spam Classifier',
    description: 'Natural language processing pipeline that classifies SMS messages as spam or ham using TF-IDF features and a probabilistic model.',
    techStack: ['Python', 'Scikit-learn', 'NLP'],
    link: 'https://github.com/MayankSaini-Byte/sms',
    live: 'https://sms-mu-ruddy.vercel.app/',
    icon: 'shield',
  },
  {
    id: 'churn-predictor',
    title: 'Churn Predictor',
    description: 'Classification model that estimates customer churn risk from behavioural features, with evaluation across precision, recall, and ROC-AUC.',
    techStack: ['Python', 'Scikit-learn', 'Pandas'],
    link: 'https://github.com/MayankSaini-Byte/Churn-Model',
    live: 'https://churn-model-pi.vercel.app/',
    icon: 'trending-down',
  },
  {
    id: 'pitvision-ai',
    title: 'Pit Vision AI',
    description: 'Classification model that predicts whether a driver should pit this lap using tyre degradation, time gap, and race telemetry.',
    techStack: ["Classical ML", "Docker", "HuggingFace"],
    link: 'https://github.com/MayankSaini-Byte/F1',
    live: 'https://mayanksaini96-pitf1.hf.space/',
    icon: 'gauge',
  }
];

/* Education & achievements ------------------------------------------------------ */
export const education = [
  {
    id: 'bsc-iitm',
    degree: 'Bachelor of Science',
    institution: 'Indian Institute of Technology, Madras (IIT Madras)',
    period: '2025 — Present',
    note: 'Data Science & Applications track.',
  },
  {
    id: 'btech-manit',
    degree: 'Bachelor of Technology',
    institution: 'Maulana Azad National Institute of Technology, Bhopal (NIT Bhopal)',
    period: '2025 — Present',
    note: 'First year of undergraduate engineering.',
  },
];

export const achievements = [
  {
    id: 'DataBiz',
    title: 'Researcher at DataBiz | NIT BHOPAL',
    detail: 'Fresher',
  },
  {
    id: 'weops',
    title: 'WebOps Team, Kaziranga House',
    detail: 'IIT Madras',
  },
  {
    id: 'pr-outreach',
    title: 'PR & Outreach Team, Kaziranga House',
    detail: 'IIT Madras',
  },
];

/* Navigation links --------------------------------------------------------------- */
export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];
