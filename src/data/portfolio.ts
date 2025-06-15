import { Project, Skill, Experience, Volunteering } from '../types';

// Projects based on your portfolio and real skills
export const projects: Project[] = [
  {
    id: 'geeya-boutique',
    title: 'Geeya Boutique E-Commerce Website',
    description: 'A fully functional boutique e-commerce website built with modern web technologies.',
    longDescription: 'Developed a responsive e-commerce platform using React, Node.js, and MongoDB. Features include product catalog, secure user authentication, cart management, and payment integration. Enhanced user experience with clean UI and smooth interactions.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'CSS', 'JavaScript'],
    image: '/assets/geeya.png',
    demoUrl: 'https://fc639da2.geeya-boutique.pages.dev',
    githubUrl: 'https://github.com/siaduggal19/django-store-website',
    featured: true
  },
  {
    id: 'data-visualization-dashboard',
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for data analytics and visualization using R and JavaScript.',
    longDescription: 'Designed and implemented a dashboard that visualizes complex datasets using R for data processing and JavaScript (D3.js) for interactive charts. Supports dynamic filtering and user-driven data exploration.',
    technologies: ['R', 'JavaScript', 'D3.js', 'Shiny', 'HTML', 'CSS'],
    image: '/assets/r.png',
    demoUrl: 'https://dataviz.example.com',
    githubUrl: 'https://github.com/siaduggal19/blink',
    featured: false
  },
  {
    id: 'distributed-systems-research',
    title: 'Distributed Systems Research',
    description: 'Research project focused on Internet of Vehicles (IoV) and distributed system protocols.',
    longDescription: 'Conducted extensive research on distributed system architectures for IoV, focusing on scalability, fault tolerance, and real-time communication. Published findings and contributed to open-source simulations.',
    technologies: ['Java', 'SimJava', 'Docker'],
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: '',
    githubUrl: '',
    featured: false
  }
];

export const skills: Skill[] = [
  // Frontend
 
  { name: 'HTML', category: 'frontend', level: 95, icon: 'Html5' },
  { name: 'CSS', category: 'frontend', level: 95, icon: 'Css3' },
   { name: 'JavaScript', category: 'frontend', level: 90, icon: 'Code' },
  { name: 'React', category: 'frontend', level: 80, icon: 'Component' },
  
  

  // Backend
  { name: 'Django', category: 'backend', level: 90, icon: 'GitPullRequest' },
  { name: 'Python', category: 'backend', level: 85, icon: 'Terminal' },
  { name: 'Node.js', category: 'backend', level: 80, icon: 'Server' },
  { name: 'MySQL', category: 'backend', level: 80, icon: 'Database' },
  { name: 'MongoDB', category: 'backend', level: 75, icon: 'HardDrive' },

  // Tools & DevOps
  { name: 'Git', category: 'tools', level: 90, icon: 'GitBranch' },
  { name: 'Docker', category: 'tools', level: 80, icon: 'Package' },
  
  // Design & Other
  
  { name: 'UI/UX Design', category: 'design', level: 80, icon: 'Layout' },
  { name: 'Data Visualization', category: 'other', level: 70, icon: 'BarChart' },
  { name: 'R Programming', category: 'other', level: 65, icon: 'Code' },
];


// Professional experience with real roles and companies
export const experiences: Experience[] = [
  {
    company: 'Bonzai Digital Engineering',
    position: 'Frontend Developer Intern',
    duration: 'January 2025 - Present',
    description: 'Managed CSS styling, bug fixing, and database connectivity tasks for product development. Collaborated in a cross-functional team to optimize UI components and improve user experience.',
    technologies: ['CSS', 'JavaScript', 'Relational Databases', 'React']
  },
  {
    company: 'Symbiosis International University',
    position: 'Placement Team Coordinator',
    duration: 'June 2024 - June 2025',
    description: 'Organized and facilitated recruitment events with major companies such as Accenture. Improved communication channels between students and recruiters, managed placement data, and enhanced campus placement processes.',
    technologies: ['Excel', 'Google Sheets', 'CRM Tools']
  }
];
export const volunteering: Volunteering[] = [
     {
    id: 'accenture',
    title: 'Accenture Event',
    description:
      'Coordinated with Accenture Leadership for a Q&A and tech talk for placement aspirants.',
    images: [
      '/assets/accenture.jpg',
      '/assets/accenture 1.jpg',
      '/assets/accenture 2.jpg',
      '/assets/accenture 3.jpg',
    ],
  },
  {
    id: 'datafest',
    title: 'Data Fest 2024 - Macquarie University',
    description:
      'Participated in a data analytics event, presenting real-world insights using visualization tools.',
    images: [
      '/assets/Datafest 1.jpg',
      '/assets/Datafest .jpg',
      '/assets/Datafest 2.jpg',
      '/assets/Datafest 3.jpg',
    ],
  },
  {
    id: 'council',
    title: 'Exchange Student Council Volunteering',
    description:
      'Assisted in event management, orientation, and student coordination for the international office.',
    images: [
      '/assets/indian council.jpg',
      '/assets/indian council 1.jpg',
      '/assets/indian council 2.jpg',
      '/assets/indian council 3.jpg',
    ],
  },
  {
    id: 'buddy',
    title: 'Symbiosis Buddy Program ',
    description:
      'Assisted in event management, orientation, and student coordination for the international office.',
    images: [
      '/assets/buddy.jpg',
      '/assets/buddy 1.jpg',
      '/assets/buddy 2.jpg',
      '/assets/buddy 3.jpg',
    ],
  },
]