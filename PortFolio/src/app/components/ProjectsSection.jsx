"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "PortFolio",
    description: "포트폴리오",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    hashtag: "Web",
    gitUrl: "https://github.com/seungho3623/NodeProject/tree/main/PortFolio",
  },
  {
    id: 2,
    title: "OOTD",
    description: "지역 날씨. 스타일별 오늘의 옷차림 추천",
    image: "/images/projects/ootd.png",
    tag: ["All", "Web"],
    hashtag: "Web",
    gitUrl: "https://github.com/seungho3623/OOTD",
  },
  {
    id: 3,
    title: "인하마블",
    description: "PyGame을 사용한 인하대학교 부르마블",
    image: "/images/projects/inhamarble.png",
    tag: ["All", "Mobile"],
    hashtag: "Moblie",
    gitUrl: "https://github.com/seungho3623/InhaMarble",
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
      <br />
      <br />
      <div className="flex justify-center">
        <h2 className="text-center text-4xl font-bold px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-slate-500 to-white hover:bg-slate-800 text-white mt-3">
          <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
            Projects
          </span>
        </h2>
      </div>

      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Embedded"
          isSelected={tag === "Embedded"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
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
              hashtag={project.hashtag}
          />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
