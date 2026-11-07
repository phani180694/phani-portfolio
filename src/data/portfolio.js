export const profile = {
  name: 'P C Phanindra Babu Pamdurthy', first: 'P C Phanindra Babu', last: 'Pamdurthy.',
  title: 'Senior Full Stack Developer — React.js | Node.js | JavaScript | TypeScript',
  intro: 'Full Stack Developer with 8+ years of experience building scalable, maintainable, and responsive web applications. Strong expertise in React.js, JavaScript, Redux, frontend architecture, reusable components, and REST API integration — backed by hands-on Node.js and Express.js backend development across banking, insurance, and healthcare domains.',
  location: 'Hyderabad, India', email: 'phanibabu.babu@gmail.com',
  linkedin: 'https://www.linkedin.com/in/p-c-phanindra-babu-pamudurthy-b1700b111',
  github: 'https://github.com/phani180694', githubLabel: 'github.com/phani180694', resume: '/resume.pdf'
}
export const marquee = ['React','TypeScript','Node.js','Frontend Architecture','REST APIs','React Query','Accessibility','Performance','CI/CD','AWS']
export const heroStats = [
  { k: 'Experience', v: '8+ Years', d: 'Professional Software Development' },
  { k: 'Domain', v: 'Enterprise', d: 'Application Development' },
  { k: 'Speciality', v: 'Frontend', d: 'Architecture & Design Systems' },
  { k: 'Scope', v: 'Full Stack', d: 'React.js + Node.js End to End' }
]
export const about = {
  heading: 'Engineering interfaces that enterprises rely on.',
  paragraphs: [
    "I'm a Senior Full Stack Developer based in Hyderabad with 8+ years of experience shipping enterprise software for banking, insurance, and healthcare organizations. My core strength is frontend architecture — designing reusable component systems, predictable state management with Redux and React Query, and responsive interfaces that hold up under real enterprise traffic.",
    'On the backend, I build and integrate REST APIs with Node.js and Express.js, and have worked with Java, Spring Boot, and microservices environments. I care deeply about the things that make software last: application performance, accessibility (WCAG / ADA), code quality gates, and clean CI/CD pipelines.',
    'From loan origination platforms processing high-volume transactions to HIPAA-compliant healthcare integrations, I enjoy turning complex business workflows into clear, fast, dependable products.'
  ],
  cards: [
    { t: 'Frontend Architecture', d: 'Reusable component systems, design systems, and scalable React patterns for large teams.' },
    { t: 'Performance Obsessed', d: 'Lazy loading, code splitting, and bundle optimization that cut load times by 25%+.' },
    { t: 'Accessible by Default', d: 'WCAG / ADA-aware components and cross-browser compatibility.' },
    { t: 'Production Quality', d: 'Jest, React Testing Library, SonarQube gates, and CI/CD release pipelines.' }
  ]
}
export const skills = [
  { group: 'Frontend', sub: 'Component-driven UI engineering', items: ['React.js','React 18','JavaScript (ES6+)','TypeScript','HTML5','CSS3','Bootstrap','Material UI'] },
  { group: 'State Management', sub: 'Predictable data flows', items: ['Redux','Redux Toolkit','React Context API','Zustand','React Query'] },
  { group: 'Backend', sub: 'APIs and services at scale', items: ['Node.js','Express.js','Java','Spring Boot','REST APIs','Microservices'] },
  { group: 'Database', sub: 'Relational data modeling', items: ['PostgreSQL','Oracle SQL','Database Fundamentals'] },
  { group: 'Testing', sub: 'Quality by default', items: ['Jest','Playwright','React Testing Library'] },
  { group: 'Tools', sub: 'Delivery & developer experience', items: ['Git','GitHub','Jenkins','GitHub Actions','SonarQube','ESLint','Postman','JIRA'] },
  { group: 'Other', sub: 'Engineering practices', items: ['Accessibility','WCAG','ADA','Agile','CI/CD','OpenShift'] }
]
export const experience = [
  { role: 'Software Consultant', company: 'Capgemini', place: 'Hyderabad, India', period: 'Apr 2022 — Present', current: true,
    summary: "Building enterprise web applications for global insurance and healthcare clients as part of Capgemini's engineering practice.",
    points: ['Lead frontend development of a React 18 + TypeScript claims management platform with accessible, reusable components.','Introduced React Query and Zustand for server-state workflows, simplifying complex claims search and messaging flows.','Enforced code quality with Jest, React Testing Library, SonarQube gates, and CI/CD pipelines on GitHub Actions.'],
    tech: ['React 18','TypeScript','React Query','Zustand','REST APIs'] },
  { role: 'Senior Software Engineer', company: 'ValueLabs Solutions', place: 'Hyderabad, India', period: 'Jul 2018 — Apr 2022',
    summary: 'Delivered banking and healthcare applications end to end, from UI architecture to API integration.',
    points: ['Built reusable React and Redux components for a home loans platform and a patient-doctor portal.','Improved performance with lazy loading and code splitting, and reduced system errors by 30%.','Worked on EDI 834 healthcare transaction workflows using XML and Mirth.'],
    tech: ['React.js','Redux','Node.js','Material UI','XML'] },
  { role: 'Graduate Trainee Developer', company: 'Peoplelink Unified Communications', place: 'Hyderabad, India', period: 'Sep 2017 — May 2018',
    summary: 'Started my engineering career building responsive web applications for enterprise collaboration and communication products.',
    points: ['Developed responsive UI modules for enterprise communication tools using JavaScript, HTML5, and CSS3.','Contributed to REST API integration and front-end bug resolution across the product suite.'],
    tech: ['JavaScript','HTML5','CSS3','REST APIs'] }
]
export const projects = [
  { n: '01', name: 'Banking & Home Loans Platform', cat: 'Banking / Financial Services', sub: 'High-volume loan origination workflows', tech: ['React.js','Redux','Node.js','JavaScript','Material UI','REST APIs'], points: ['Reusable component architecture shared across multiple loan products.','Redux and Context API state management.','Responsive UI development.','REST API integration with rigorous unit testing and code quality gates.'] },
  { n: '02', name: 'Insurance Claims Management Platform', cat: 'Insurance', sub: 'High-volume claims workflows for insurers', tech: ['React 18','TypeScript','React Query','Zustand','REST APIs'], points: ['Enterprise claims management UI with reusable, accessible components.','Claims search and messaging workflows.','API integration with optimistic updates and resilient error handling.','React Testing Library and Jest coverage across critical flows.'] },
  { n: '03', name: 'Healthcare Insurance Integration Platform', cat: 'Healthcare / Insurance', sub: 'HIPAA-compliant EDI transaction processing', tech: ['React','JavaScript','XML','Mirth','EDI'], points: ['EDI 834 and non-834 transaction processing at enterprise volume.','HIPAA-compliant workflows.','XML-based transaction handling through Mirth integration channels.'] },
  { n: '04', name: 'Patient & Healthcare Management Portal', cat: 'Healthcare', sub: 'Patient-doctor care coordination portal', tech: ['React.js','Redux','JavaScript','HTML5','CSS3'], points: ['Patient-doctor portal with secure, role-aware healthcare workflows.','Improved application performance by 25%.','Reduced system errors by 30%.','Reusable UI components.'] }
]
export const repos = [
  { name: 'react_code_snippets', d: 'A curated collection of reusable React code snippets covering hooks, patterns, and everyday component techniques.', tech: ['React.js','JavaScript'] },
  { name: 'HTML_CSS', d: 'Foundational HTML5 and CSS3 layouts and UI exercises — grid, flexbox, and responsive design practice.', tech: ['HTML5','CSS3'] },
  { name: 'My_React_App', d: 'Early React application exploring components, props, and state fundamentals.', tech: ['React.js','JavaScript'] }
]
export const achievements = [
  { value: '8+', label: 'Years of professional software development' },
  { value: '1,000+', label: 'Git commits across maintained codebases' },
  { value: '30%', label: 'Fewer system errors on a healthcare portal' },
  { value: '25%', label: 'Faster performance on a healthcare portal' }
]
export const achievementNotes = ['Lazy loading and code splitting','Improved accessibility and cross-browser compatibility','Production release quality and CI/CD practices']
export const certification = { name: 'AWS Certified Developer – Associate', issuer: 'Amazon Web Services', tags: ['Lambda & Serverless','S3 & DynamoDB','EC2','IAM','CloudWatch','CI/CD on AWS'] }
export const nav = ['About','Skills','Experience','Projects','Open Source','Contact']
