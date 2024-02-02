"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    title: "PortFolio",
    description: "Next.js를 사용한 PortFolio 웹 사이트 만들기",
    date: "2024.01.28 ~ ",
    environment: ["Next.js", "Vercel", "Tailwind-CSS"],
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    result: ["Next.js Componets 이해"], 
    mainWork: ["Next.js 웹페이지 구성", "Vercel을 사용한 배포", "CI/CD 구성"],
    gitUrl: "https://github.com/seungho3623/NodeProject/tree/main/PortFolio",
  },
  {
    title: "PortFolio",
    description: "Next.js를 사용한 PortFolio 웹 사이트 만들기",
    date: "2024.01.28 ~ ",
    environment: ["Next.js", "Vercel", "Tailwind-CSS"],
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    result: ["Next.js Componets 이해"], 
    mainWork: ["Next.js 웹페이지 구성", "Vercel을 사용한 배포", "CI/CD 구성"],
    gitUrl: "https://github.com/seungho3623/NodeProject/tree/main/PortFolio",
  },
  {
    title: "OOTD",
    description: "지역 날씨. 스타일별 오늘의 옷차림 추천",
    date: "2023.05.15 ~ 2023.06.11",
    environment: ["Java", "Spring Boot", "MariaDB", "Crawling"],
    image: "/images/projects/ootd.png",
    tag: ["All", "Web"],
    result: ["Spring Boot 및 Crawling 방법 이해"],
    mainWork: ["웹페이지 구성", "기상청 API 사용", "MariaDB 구축"],
    gitUrl: "https://github.com/seungho3623/OOTD",
  },
  {
    title: "인하마블",
    description: "PyGame을 사용한 인하대학교 부르마블",
    date: "2022.05.23 ~ 2022.06.06",
    environment: ["Python", "PyGame"],
    image: "/images/projects/inhamarble.png",
    tag: ["All", "Mobile"],
    result: ["PyGame 이해"],
    mainWork: ["Python 코딩"],
    gitUrl: "https://github.com/seungho3623/InhaMarble",
  },
  {
    title: "게시판",
    description: "Spring Boot를 사용한 게시판 프로젝트",
    date: "2023.07.06 ~ 2022.08.16",
    environment: ["Java", "Spring Boot", "MySQL"],
    image: "/images/projects/board.png",
    tag: ["All", "Web"],
    result: ["Spring Boot 사용 방법 및 이해"],
    mainWork: ["FastCampus 교육"],
    gitUrl: "https://github.com/seungho3623/BoardProject/tree/main",
  },
  {
    title: "도어락",
    description: "방범 도어락 프로젝트",
    date: "2021.09 ~ 2021.10",
    environment: ["AVR Studio", "Atmega328p", "Raspberry Pi", "Flask"],
    image: "/images/projects/doorlock.png",
    tag: ["All", "Embedded"],
    result: ["Flask Server 및 AVR 사용법 이해"],
    mainWork: ["IOT 개발자 양성 과정 교육", "Atmeag328P F/W", "Raspberry Pi 통신"],
    gitUrl: "https://drive.google.com/file/d/1hOPg8ns7dzp9bMsKvoSxhz9EadgMVt9T/view?usp=share_linkk",
  },
  {
    title: "몰컴",
    description: "몰컴 기능이 있는 탁상용 시계",
    image: "/images/projects/clock.png",
    date: "2022.05.23 ~ 2022.06.06",
    environment: ["Arduino IDE", "ESP32"],
    tag: ["All", "Embedded"],
    result: ["Arduio 사용 방법 복기"],
    mainWork: ["ESP32 Wifi 구성", "Arduino Sensor 구현"],
    gitUrl: "https://github.com/seungho3623/HiddenComputer",
  },
  {
    title: "게시판",
    description: "Node.js를 사용한 게시판 프로젝트",
    date: "2023.10.23 ~ 2023.12.03",
    environment: ["Node.js", "FireBase", "KaKao API"],
    image: "/images/projects/inhaboard.png",
    tag: ["All", "Web"],
    result: ["Node.js 사용법 이해"],
    mainWork: ["FireBase 연동", "Login 방식 구현", "Kakao API 사용"],
    gitUrl: "https://github.com/seungho3623/NodeProject/tree/main/InhaBoard",
  },
  {
    title: "SwiftProject",
    description: "IOS APP 공부 용 저장소",
    date: "2024.01.23 ~ ",
    environment: ["XCode", "Swift"],
    image: "/images/projects/swift.png",
    tag: ["All", "Mobile"],
    result: ["Swift 사용 방법 및 App Coding 방법 이해"],
    mainWork: ["FastCampus 교육"],
    gitUrl: "https://github.com/seungho3623/SwiftProject",
  },
  {
    title: "자율주행",
    description: "RaspberryPi + AVR을 사용한 자율주행 자동차",
    date: "2021.06 ~ 2021.09",
    environment: ["AVR Studio", "Atmega328p", "Raspberry Pi", "Flask"],
    image: "/images/projects/auto_riding.png",
    tag: ["All", "Embedded"],
    result: ["Flask Server 및 AVR 사용법 이해"],
    mainWork: ["IOT 개발자 양성 과정 교육", "Atmeag328P F/W", "Raspberry Pi 통신"],
    gitUrl: "https://drive.google.com/file/d/1E0QRyzGY5XE-uqbKFNou5MB47aEfdSDc/view?usp=sharing",
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
              date={project.date}
              environment={project.environment}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              result={project.result}
              mainWork={project.mainWork}
              tag={project.tag}
          />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
