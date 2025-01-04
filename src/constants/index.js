import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  praveen,
  sun,
  lupin,
  elixir,
  sourcecube,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  // {
  //   id: "work",
  //   title: "Work",
  // },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ReactJs Developer",
    icon: reactjs,
  },
  {
    title: "Javascript Developer",
    icon: javascript,
  },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Tranee chemist",
    company_name: "Praveen laboratory Pvt. Ltd.",
    icon: praveen,
    iconBg: "#383E56",
    date: "Nov 2020 - May 2022",
    points: [
      "Assisted in managing pharmaceutical production operations, adhering to regulatory guidelines and quality standards",
      "Finished tasks within assigned timeframes and to desired specifications.",
      "Read and interpreted technical documentation to create items according to specifications and requirements.",
      "Worked with production engineers to update documentation in line with production techniques.",
    ],
  },
  {
    title: "Production Officer",
    company_name: "Sun Pharmaceutical Ltd",
    icon: sun,
    iconBg: "#E6DEDD",
    date: "May 2022 - Dec 2022",
    points: [
      "Collaborated with cross-functional teams to optimize manufacturing efficiency and resolve technical issues.",
      "Tracked employee productivity, performance and task completion to meet quality standards.",
      "Logged daily manufacturing activities and prepared reports for management.",
      "Planned and delegated work to meet project or production goals.",
    ],
  },
  {
    title: "Production Executive",
    company_name: "Lupin Ltd",
    icon: lupin,
    iconBg: "#383E56",
    date: "Dec 2022 - May 2023",
    points: [
      "Professional Experience:Ensured profitable operations, conducting market research and reviewing     production and sales costs.",
      "Identified staffing and capital needs, collecting relevant data to facilitate decision-making.",
      "Trained, mentored and counselled employees to develop high-performing team.",
      "Implemented Root Cause Analysis (RCA) and corrective actions to remove production constraints and improve product quality.",
    ],
  },
  {
    title: "Self Learning",
    company_name: "Open Source",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "Developing soft skills like HTML, CSS, Javascript, and ReactJs",
      "Learnt and followed department processes to help develop software according to requirements.",
      "identified and suggested opportunities for innovative platform improvements, using developed design and building skills.",
      "Developing and maintaining web applications using React.js and other related technologies.",
    ],
  },
  {
    title: "Jr Software developer Trainee",
    company_name: "3Elixir software solution",
    icon: elixir,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Oct 2023",
    points: [
      "Acquired foundational knowledge of React.js, Git workflows, and best practices for organizing and structuring project folders.",
      "Strengthened skills in HTML, CSS, and JavaScript by building interactive and visually appealing user interfaces.",
    ],
  },
  {
    title: "Jr. Software Developer",
    company_name: "Sourcecube Technology Pvt. Ltd.",
    icon: sourcecube,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Present",
    points: [
      "•Designed, developed, and maintained responsive web applications using React.js, ensuring seamless integration with RESTful APIs.",
      "•Optimized application performance, adhered to best practices, and conducted thorough testing to deliver high-quality solutions.",
      "•Collaborated within Agile teams, managed state using Redux, and actively participated in code reviews to enhance overall code quality and user experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
