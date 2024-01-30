"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-white">
              안녕하세요, 저는
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "F/W Developer",
                1000,
                "송승호 입니다.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            큰 임팩트는 혼자가 아닌 다양한 구성원들과 함께 만들 수 있다고 생각하는 개발자 송승호입니다.
          </p>
          <div>
              <Link
                href="/#about"
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-slate-500 to-white hover:bg-slate-800 text-white mr-3 mt-3"
              >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  About me
                </span>
              </Link>
              <Link
                href="/#projects"
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-slate-500 to-white hover:bg-slate-800 text-white mt-3"
              >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Projects
                </span>
              </Link>
          </div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
          <Image
            src="/images/ssh-image.png"
            alt="ssh image"
            layout="fill" // 이미지가 부모 요소에 꽉 차도록 설정
            objectFit="contain" // 이미지를 부모 요소에 맞게 늘리고, 가로/세로 비율을 유지하면서 잘라냄
            className="rounded-full" // 부모 요소와 이미지가 같은 모양을 유지하기 위해 둥근 테두리 적용
          />
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
