import type { MenuProps } from "antd";
import IndigoLogo from "./../Assets/images/work-exp/indigo.avif";
import KurageLogo from "./../Assets/images/work-exp/kurage.jpg";

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
