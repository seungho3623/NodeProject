"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
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
    id: 2,
    title: "Cloud App Platform 개발",
    description: "개발 및 실사용 중인 제품으로 자체 플랫폼 개발 사업",
    date: "2023.09.01 ~ 2023.12.31",
    environment: ["Flutter", "AWS", "STM32"],
    image: "/images/projects/cloudApp.png",
    tag: ["All", "Web", "Mobile", "Embedded", "SMK"],
    result: ["PM 업무를 통해 커뮤니케이션 능력 및 일정 관리 능력 강화"],
    mainWork: ["요구사항정의 및 관련 커뮤니케이션 실무",
      "화면설계서를 토대로 요구사항확인",
      "외주업체(디자인, 퍼블리싱, 개발) 일정관리 : 내부용 WBS 작성",
      "디버깅 진행 후 오류사항 정리 후 전달"],
    gitUrl: "",
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
  {
    id: 11,
    title: "극지연구소 IoET 장비 배터리팩",
    description: "영하 50도 극한지에서 동작하는 배터리팩 개발",
    date: "2022.12.01 ~ 2024.01.21",
    environment: ["STM32CubeIDE", "STM32", "Nuvoton BMIC", "C/C++"],
    image: "/images/projects/kopri.png",
    tag: ["All", "Embedded", "SMK"],
    result: ["남극 현지 실증 및 정상 동작 확인"],
    mainWork: ["주변 기기와의 통신 프로토콜 설계 및 통신 기능 구현(CAN, RS232, SPI 등)",
      "전류 적산을 통한 SOC 추정 알고리즘 구현",
      "저온 환경에서 배터리 충전 방식의 대한 특허 출원",
      "저전력을 소모하기 위한 배터리 동작 방식 구현"],
    gitUrl: "",
  },
  {
    id: 12,
    title: "교환형 배터리 스테이션 개발(MOVING)",
    description: "전기 이륜차에 사용되는 배터리팩 및 충전 스테이션 개발",
    date: "2022.06 ~ 2023.06",
    environment: ["STM32CubeIDE", "STM32", "TI BMIC", "C/C++"],
    image: "/images/projects/moving.png",
    tag: ["All", "Embedded", "SMK"],
    result: ["서울, 춘천, 제주에서 100대 가량 운영 중"],
    mainWork: ["통신 기능 구현(RS485, RS232, UART, I2C 등)",
      "전류 적산을 통한 SOC 추정 알고리즘 구현",
      "주변 장치 제어 및 동작 방식 구현(솔레노이드, LED Strip, 충전기 등)"],
    gitUrl: "",
  },
  {
    id: 13,
    title: "표준화 배터리팩",
    description: "제조사 구분 없이 교환할 수 있도록 만든 표준 기반 배터리팩",
    date: "2023.06 ~ 2023.09",
    environment: ["STM32CubeIDE", "STM32", "Nuvoton BMIC", "C/C++"],
    image: "/images/projects/ks6100.png",
    tag: ["All", "Embedded", "SMK"],
    result: ["4S 부터 22S 까지 사용가능한 인터페이스 구현"],
    mainWork: ["통신 기능 구현(CAN, UART, SPI 등)",
      "KS R6100 표준에 따른 통신 프로토콜 구현",
      "전류 적산을 통한 SOC 추정 알고리즘 구현"],
    gitUrl: "",
  },
  {
    id: 14,
    title: "EQULS",
    description: "전기 이륜차에 사용되는 배터리팩 및 충전 스테이션 개발",
    date: "2021.12 ~ 2022.02",
    environment: ["STM32CubeIDE", "STM32", "TI BMIC", "C/C++"],
    image: "/images/projects/equls.png",
    tag: ["All", "Embedded", "SMK"],
    result: ["SOC 알고리즘 및 배터리팩 동작 방식에 대한 지식 습득"],
    mainWork: ["통신 기능 구현(UART, I2C, SPI 등)",
      "전류 적산을 통한 SOC 추정 알고리즘 구현"],
    gitUrl: "",
  },
  {
    id: 15,
    title: "씽씽이",
    description: "전동 킥보드에 사용되는 배터리팩 개발",
    date: "2022.03 ~ 2022.06",
    environment: ["STM32CubeIDE", "STM32", "TI BMIC", "C/C++"],
    image: "/images/projects/xing.png",
    tag: ["All", "Embedded", "SMK"],
    result: ["SOC 알고리즘 및 배터리팩 동작 방식에 대한 지식 습득"],
    mainWork: ["통신 기능 구현(UART, I2C, SPI 등)",
      "전류 적산을 통한 SOC 추정 알고리즘 구현"],
    gitUrl: "",
  },
  {
    id: 16,
    title: "방역분무기",
    description: "방역분무기에 사용되는 배터리팩 개발",
    date: "2022.06 ~ 2022.09",
    environment: ["STM32CubeIDE", "STM32", "TI BMIC", "C/C++"],
    image: "/images/projects/etlion.png",
    tag: ["All", "Embedded", "SMK"],
    result: ["SOC 알고리즘 및 배터리팩 동작 방식에 대한 지식 습득"],
    mainWork: ["통신 기능 구현(UART, I2C, SPI 등)",
      "전류 적산을 통한 SOC 추정 알고리즘 구현"],
    gitUrl: "",
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
          name="SMK"
          isSelected={tag === "SMK"}
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
