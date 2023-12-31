import type { MenuProps } from "antd";
import IndigoLogo from "./../Assets/images/work-exp/indigo.avif";
import KurageLogo from "./../Assets/images/work-exp/kurage.jpg";
import IpuLogo from "./../Assets/images/education/ipu.png";
import CbseLogo from "./../Assets/images/education/cbse.svg";

export const NavbarMenuItems: MenuProps["items"] = [
  {
    label: "About Me",
    key: "aboutme",
  },
  {
    label: "Work Experience",
    key: "experience",
  },
  {
    label: "My Projects",
    key: "projects",
  },
  {
    label: "Technical Skills",
    key: "techskills",
  },
  {
    label: "Achievements",
    key: "achievements",
  },
  {
    label: "Contact Me",
    key: "contactme",
  },
];

export const MyInformationItems = [
  {
    id: 0,
    heading: "Hi, I am Tushar Gahlaut 👋.",
  },
  {
    id: 1,
    paragraph:
      "Ever since I was young, I used to wonder how do softwares and websites work 🤔? Fast forward to today, I am a professional Software Developer but the curiosity is still there. 👨‍💻",
  },
  {
    id: 2,
    paragraph:
      "I have hands on experience with multiple technologies and stacks. 🚀",
  },
];

export const workExperienceItems = [
  {
    id: 0,
    heading: "IndiGo (Interglobe Aviation Ltd)",
    role: "Developer",
    dates: "July 2023 - Present",
    logo: IndigoLogo,
    responsibilities: [
      {
        id: 0,
        desc: "Enhanced 6Eassist, IndiGo’s GPT-4 Based Chatbot, by using React.js and implemented real-time response streaming, also implemented features such as Flight Selection and Payment Gateway Redirection.",
      },
      {
        id: 1,
        desc: "Developed multiple Microservices with Node.js, Typescript and deployed them on Openshift and ensured Continuous Integration and Continuous Deployment.",
      },
      {
        id: 2,
        desc: "Followed Test Driven Development approach and used Jest, Mocha, Chai etc libraries to implement Test Suites for our microservices.",
      },
      {
        id: 4,
        desc: "Implemented Microsoft Azure AD Authentication for IndiGo's internal applications, also worked on Azure Blob storage and SAS tokens to manage document files.",
      },
      {
        id: 3,
        desc: "Utilised MySQL as a relational database management system and used Sequelize ORM in the microservices to interact seamlessly with the database.",
      },
    ],
  },
  {
    id: 1,
    heading: "Kurage",
    role: "Frontend Tech Consultant",
    dates: "August 2022 - January 2023",
    logo: KurageLogo,
    responsibilities: [
      {
        id: 0,
        desc: "Developed new features and functionality for the client's website using Next.js and many popular frameworks and libraries such as Redux-Toolkit, ApolloClient, GSAP etc.",
      },
      {
        id: 1,
        desc: "Collaborated with the design team to ensure that the user interface was visually appealing and easy to use, Took the responsibility to ensure all pages are responsive on all devices.",
      },
      {
        id: 2,
        desc: "Worked with the backend team to integrate APIs and dynamic data into the frontend using GraphQL.",
      },
      {
        id: 3,
        desc: "Debugged and troubleshooted multiple issues, both functional and visual as needed to ensure a smooth user experience.",
      },
    ],
  },
];

export const educationItems = [
  {
    id: 0,
    school: "Guru Gobind Singh Indraprastha University, New Delhi",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    dates: "2019 - 2023",
    cgpa: "Marks: 91%",
    logo: IpuLogo,
  },
  {
    id: 1,
    school: "Central Board of Education, New Delhi",
    degree: "Class 12th (Senior Secondary)",
    dates: "2019",
    cgpa: "Marks: 83%",
    logo: CbseLogo,
  },
];

export const technicalSkillsItems = [
  {
    id: 0,
    heading: "Programming Languages",
    items: [
      {
        id: 0,
        heading: "C/C++",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png",
      },
      {
        id: 1,
        heading: "Java",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png",
      },
      {
        id: 3,
        heading: "Python",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png",
      },
      {
        id: 4,
        heading: "HTML",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png",
      },
      {
        id: 5,
        heading: "CSS",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        id: 6,
        heading: "Javascript",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/220px-Unofficial_JavaScript_logo_2.svg.png",
      },
      {
        id: 7,
        heading: "Typescript",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/800px-Typescript_logo_2020.svg.png",
      },
    ],
  },
  {
    id: 1,
    heading: "Frameworks/Libraries",
    items: [
      {
        id: 0,
        heading: "React.js",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      },
      {
        id: 1,
        heading: "Node.js",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
      },
      {
        id: 2,
        heading: "Express",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
      },
      {
        id: 3,
        heading: "Redux-Toolkit",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Redux_Logo.png/1200px-Redux_Logo.png",
      },
      {
        id: 4,
        heading: "Next.js",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/2560px-Nextjs-logo.svg.png",
      },
      {
        id: 5,
        heading: "Socket.io",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/1200px-Socket-io.svg.png",
      },
      {
        id: 6,
        heading: "Apollo GraphQL",
        url: "https://global.discourse-cdn.com/business5/uploads/apollographql/original/1X/25bd5104d61020fe4dc0777a5919cd009bca633e.png",
      },
      {
        id: 7,
        heading: "Sequelize",
        url: "https://miro.medium.com/v2/0*rwd6KeolcXgz7zpx.png",
      },
      {
        id: 8,
        heading: "Mongoose",
        url: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png",
      },
    ],
  },
  {
    id: 2,
    heading: "Databases",
    items: [
      {
        id: 0,
        heading: "MongoDB",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1280px-MongoDB_Logo.svg.png",
      },
      {
        id: 1,
        heading: "MySQL",
        url: "https://upload.wikimedia.org/wikipedia/mg/thumb/6/62/MySQL.svg/1280px-MySQL.svg.png",
      },
      {
        id: 2,
        heading: "SQLite3",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sqlite-square-icon.svg/1200px-Sqlite-square-icon.svg.png",
      },
      {
        id: 3,
        heading: "Azure Blob Storage",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png",
      },
    ],
  },
  {
    id: 3,
    heading: "DevOps and Cloud",
    items: [
      {
        id: 0,
        heading: "Microsoft Azure",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png",
      },
      {
        id: 1,
        heading: "Docker",
        url: "https://miro.medium.com/v2/resize:fit:400/1*OARpkeBkn_Tw3vk8H769OQ.png",
      },
      {
        id: 2,
        heading: "Kubernetes",
        url: "https://www.ovhcloud.com/sites/default/files/styles/text_media_horizontal/public/2021-04/K8S-logo.png",
      },
      {
        id: 3,
        heading: "CI/CD Pipelines",
        url: "https://www.mabl.com/hubfs/CICDBlog.png",
      },
      {
        id: 4,
        heading: "Tekton",
        url: "https://cd.foundation/wp-content/uploads/sites/78/2020/04/tekton-icon-color-1-1.png",
      },
      {
        id: 5,
        heading: "Red Hat Openshift",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3a/OpenShift-LogoType.svg",
      },
    ],
  },
  {
    id: 4,
    heading: "API and Development Tools",
    items: [
      {
        id: 0,
        heading: "REST",
        url: "https://cdn-icons-png.flaticon.com/512/10329/10329422.png",
      },
      {
        id: 1,
        heading: "GraphQL",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png",
      },
      {
        id: 2,
        heading: "Visual Studio Code",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
      },
      {
        id: 3,
        heading: "Postman",
        url: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png",
      },
      {
        id: 4,
        heading: "GitHub",
        url: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
      },
      {
        id: 5,
        heading: "Jira",
        url: "https://assets.project-management.com/uploads/2022/12/atlassian_jira.png",
      },
    ],
  },
  {
    id: 5,
    heading: "Core CS Subjects",
    items: [
      {
        id: 0,
        heading: "Data Structures and Algorithms",
        url: "https://e7.pngegg.com/pngimages/78/465/png-clipart-data-structures-and-algorithms-algorithms-data-structures-programs-computer-science-others-miscellaneous-computer-science-thumbnail.png",
      },
      {
        id: 1,
        heading: "Operating Systems",
        url: "https://cdn-icons-png.flaticon.com/512/2172/2172894.png",
      },
      {
        id: 2,
        heading: "Computer Networks",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Server-based-network.svg/743px-Server-based-network.svg.png",
      },
      {
        id: 3,
        heading: "Database Management Systems",
        url: "https://w7.pngwing.com/pngs/310/475/png-transparent-database-computer-icons-computer-software-information-database-miscellaneous-angle-information-technology.png",
      },
      {
        id: 4,
        heading: "Object Oriented Programming",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/OOP.svg/1200px-OOP.svg.png",
      },
    ],
  },
];
