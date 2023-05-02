import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    python,
    github2,
    java,
    latex,
    msoffice,
    mysql,
    reactjs,
    tailwind,
    git,
    dalle_image,
    chatgpt,
    speech,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Skillsets",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Data Scientist",
      icon: web,
    },
    {
      title: "Python Developer",
      icon: mobile,
    },
    {
      title: "Software Developer",
      icon: backend,
    },
    {
      title: "Machine Learning",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
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
  
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
  
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "LaTeX",
      icon: latex,
    },
    {
      name: "Microsoft Office",
      icon: msoffice,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Github",
      icon: github2,
    },
  ];
  
  const projects = [
    {
      name: "Dall-E Image Generation",
      description:
        "Full Stack MERN AI Image Generation App using DALL-E Openapi which lets you generate images from text",
      tags: [
        {
          name: "JavaScript",
          color: "Gray-text-gradient",
        },
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "Node",
          color: "orange-text-gradient",
        },
      ],
      image: dalle_image,
      source_code_link: "https://github.com/Moon3567/Dall-E_Image_Generation",
    },
    {
      name: "OpenAi Codex",
      description:
        "A ChatGPT application which helps with writing, reading and providing assistance in learning how to program in various languages.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "ML",
          color: "pink-text-gradient",
        },
        {
          name: "OpenAI",
          color: "orange-text-gradient",
        },
      ],
      image: chatgpt,
      source_code_link: "https://github.com/Moon3567/OpenAi_Codex",
    },
    {
      name: "Speech Recognition",
      description:
        "Exploring a Speech Recognition library to identify how a machine can identify spoken words.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "SpeechRecognition",
          color: "green-text-gradient",
        },
      ],
      image: speech,
      source_code_link: "https://github.com/Moon3567/Speech_Recognition",
    },
  ];
  
  export { services, technologies, projects };
  