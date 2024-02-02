"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Profile",
        id: "profile",
        content: (
            <ul className="list-disc pl-2">
                <li className="mb-1">이름 : 송승호</li>
                <li className="mb-1">생년월일 : 1999.11.09 (만 24세)</li>
                <li className="mb-1">Phone : 010.3784.3623</li>
                <li>E-mail : seungho3623@naver.com</li>
            </ul>
        ),
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2">
                <li className="mb-1">(주)에스엠케이 / R&D센터 개발1팀 연구원 / 2021.12 ~ 2024.01</li>
                <li>(주)라코스시스템 / 기술본부 연구전담부 연구원 / 2017.10 ~ 2018.02</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li className="mb-1">인하대학교 / 소프트웨어융합공학과 / 2022.03 ~ 재학 중</li>
                <li>인천전자마이스터고등학교 / 전자회로설계과 / 2015.03 ~ 2018.01</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li className="mb-1">1종보통운전면허 / 경찰청 / 2021.01</li>
                <li className="mb-1">전자기기기능사 / 한국산업인력공단 / 2017.06</li>
                <li className="mb-1">전기기능사 / 한국산업인력공단 / 2016.12</li>
                <li className="mb-1">전자캐드기능사 / 한국산업인력공단 / 2016.10</li>
                <li className="mb-1">정보처리기능사 / 한국산업인력공단 / 2016.09</li>
                <li>컴퓨터활용능력2급 / 대한상공회의소 / 2015.03</li>
            </ul>
        ),
    },
];

const AboutMe = () => {
    const [tab, setTab] = useState("profile");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white" id="about">
            <br />
            <br />
            <div className="flex justify-center">
                <h2 className="text-center text-4xl font-bold px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-slate-500 to-white hover:bg-slate-800 text-white mt-3">
                    <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                        About Me
                    </span>
                </h2>
            </div>
            <div className="md:flex items-center py-8 px-4 xl:gap- sm:py-8 xl:px-16">
                <div className="mt-4 md:mt-0 text-left flex flex-col md:flex-row h-full w-full">
                    <div className="mt-4 md:w-1/2">
                        <p className="text-base lg:text-lg">
                            다양한 마이크로 컨트롤러를 활용한 통신 인터페이스, 제어 시스템 구현 경험 및
                            DataSheet 분석을 통한 새로운 IC 인터페이스 개발 경험과 PM 업무를 통해
                            프로젝트 및 일정 관리 경험이 있습니다.
                        </p>
                        <p className="text-base lg:text-lg mt-8">
                            평일에는 직장인, 주말에는 대학생이 되어 소프트웨어 공부를 하고 있습니다.
                            회사와 학교 모두 다른 배움을 얻을 수 있기에 계속해서 부족한 부분을 깨닫고 있습니다.
                            지금까지에 재직 경험과 대학교에서 배운 지식을 발판 삼아 더 능력 있는 개발자로 성장할 기회를 찾고자 합니다.
                        </p>
                    </div>
                    <div className="md:w-1/2 flex flex-col items-center mt-8">
                        <div className="flex flex-row justify-start">
                            <TabButton
                                selectTab={() => handleTabChange("profile")}
                                active={tab === "profile"}
                            >
                                {" "}
                                Profile{" "}
                            </TabButton>
                            <TabButton
                                selectTab={() => handleTabChange("experience")}
                                active={tab === "experience"}
                            >
                                {" "}
                                Experience{" "}
                            </TabButton>
                            <TabButton
                                selectTab={() => handleTabChange("education")}
                                active={tab === "education"}
                            >
                                {" "}
                                Education{" "}
                            </TabButton>
                            <TabButton
                                selectTab={() => handleTabChange("certifications")}
                                active={tab === "certifications"}
                            >
                                {" "}
                                Certifications{" "}
                            </TabButton>
                        </div>
                        <div className="mt-4 ml-4">
                            {TAB_DATA.find((t) => t.id === tab).content}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AboutMe;