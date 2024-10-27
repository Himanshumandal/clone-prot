"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Is Done",
    description: "I developed a React-based project called 'ToDo App' to deepen my expertise in React and its hooks, focusing on implementing state management and real-time functionality. The application allows users to efficiently add, edit, and delete tasks, providing a dynamic user experience. A key feature of the app is persistent data storage, ensuring that tasks remain unchanged even after the app is closed and reopened. This enhances usability by allowing users to manage their to-do lists without losing progress. The app demonstrates a robust approach to task management, making it both practical and intuitive for daily use.",
    image: "/images/projects/todo.jpg",
    tag: ["All", "React"],
    gitUrl: "https://github.com/Himanshumandal/isdone",
    previewUrl: "https://isdone.netlify.app/",
  },
  {
    id: 2,
    title: "Expanse Management",
    description: "This application, built on the MERN stack (MongoDB, Express.js, React.js, Node.js), allows users to track their expenses and income across various categories such as Movies, Salary, Projects, and Freelancing. The backend, powered by Node.js and Express.js, handles API routes and interacts with a MongoDB database to store transaction data and user information. The React.js frontend offers a dynamic interface for users to add transactions, view data in both tabular and graphical formats, and filter results by year, providing valuable insights into spending habits and income sources.",
    image: "/images/projects/expense.png",
    tag: ["All", "React","Nodejs"],
    gitUrl: "https://github.com/Himanshumandal/Expense-App",
    previewUrl: "https://expense-app-tt98.onrender.com/login",
  },
  {
    id: 3,
    title: "Tasky App",
    description: "This application, built with Next.js, enables users to efficiently manage tasks by creating, editing, and deleting them. Key features include a 'Completed'checkbox for task tracking, a dashboard for viewing task data, and backend integration using Turso as the database and Drizzle ORM. For secure authentication, the app supports Google and GitHub login, along with email verification through magic links. This comprehensive solution enhances productivity by streamlining task organization.",
    image: "/images/projects/tasky.avif",
    tag: ["All", "Nextjs","Turso","Drizzle"],
    gitUrl: "https://github.com/Himanshumandal/task-management-app",
    previewUrl: "https://task-management-app-mu-six.vercel.app/sign-in",
  },
  {
    id: 4,
    title: "Travel Trip",
    description: "I am implementing a travel website using Next.js, featuring a fully responsive design and optimized for SEO. The platform enables users to plan trips between destinations, offering a seamless user experience across devices. By leveraging Next.js's built-in capabilities, the website ensures fast performance, server-side rendering, and enhanced discoverability, making it an ideal tool for users looking to efficiently organize their travel plans.",
    image: "/images/projects/travel.webp",
    tag: ["All", "Nextjs"],
    gitUrl: "https://github.com/Himanshumandal/Latest-protfoilo",
    previewUrl: "https://traveltript.netlify.app/",
  },
  {
    id: 5,
    title: "Desi Cryto",
    description: "I developed a React-based project named Desi Crypto to enhance my skills with React and its hooks. The website provides users with real-time data on various cryptocurrencies, displaying detailed graphs for each coin and offering relevant video content for further insights.",
    image: "/images/projects/crypto.webp",
    tag: ["All", "React"],
    gitUrl: "https://github.com/Himanshumandal/desicrypto",
    previewUrl: "https://cryptodesi.netlify.app/",
  },
  {
    id: 6,
    title: "Zepp",
    description: "We chose Node.js for its high performance, scalability, and real-time capabilities, making it ideal for managing thousands of concurrent connections efficiently. By integrating Express.js as the web framework, token-based authentication for secure user sessions, and MongoDB for scalable data storage, we ensure a seamless, responsive shopping experience. This tech stack enables rapid API handling, secure transactions, and persistent data management, providing an optimal solution for modern e-commerce platforms.",
    image: "/images/projects/shopping.png",
    tag: ["All", "Nodejs"],
    gitUrl: "https://github.com/Himanshumandal/Ecommerce",
    previewUrl: "https://github.com/Himanshumandal/Ecommerce",
  },
  {
    id: 7,
    title: "Yumm",
    description: "We chose Node.js for its high performance, scalability, and real-time capabilities, making it ideal for managing thousands of concurrent connections efficiently. By integrating Express.js as the web framework, token-based authentication for secure user sessions, and MongoDB for scalable data storage, we ensure a seamless, responsive Food experience. This tech stack enables rapid API handling, secure transactions, and persistent data management, providing an optimal solution for modern food platforms.",
    image: "/images/projects/yumm.png",
    tag: ["All", "Nodejs"],
    gitUrl: "https://github.com/Himanshumandal/Yumm",
    previewUrl: "https://github.com/Himanshumandal/Yumm",
  },
  {
    id: 8,
    title: "PassMaster",
    description: "As part of my JavaScript learning process, I developed a random password generator as a practice project. This tool generates secure and unique passwords, helping users create complex, hard-to-guess credentials to enhance security. It was designed to reinforce my understanding of core JavaScript concepts while providing practical functionality.",
    image: "/images/projects/pass.png",
    tag: ["All"],
    gitUrl: "https://hidegen.netlify.app/",
    previewUrl: "https://hidegen.netlify.app/",
  },
  {
    id: 9,
    title: "Scrapy",
    description: "This full-stack application, developed using Next.js, empowers users to create profiles and contribute to environmental sustainability by reporting waste and garbage. Users can upload images of waste along with their geographical locations to earn profit rewards. Additionally, those who collect and clean the reported garbage receive monetary incentives, which can be withdrawn from the platform. The backend utilizes Drizzle and Neon for efficient data management, while the frontend provides a responsive user experience. The application integrates the Gemini and Google APIs for waste and location verification, ensuring accurate reporting. Furthermore, it features Ethereum-based blockchain authentication for secure Web3 login, reinforcing user privacy and security.",
    image: "/images/projects/waste.jpg",
    tag: ["All","Nextjs","Neon","Drizzle","etherum"],
    gitUrl: "https://github.com/Himanshumandal/Scrapi",
    previewUrl: "https://github.com/Himanshumandal/Scrapi",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === "React"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Nextjs"
          isSelected={tag === "Nextjs"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Nodejs"
          isSelected={tag === "Nodejs"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
