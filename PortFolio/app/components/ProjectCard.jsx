import React, { useState, useRef } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, date, gitUrl, tag, result, mainWork }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  return (
    <div className="border border-[#ADB7BE] rounded-xl overflow-hidden">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <button onClick={openModal} className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </button>
          <Link
            href={gitUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] mb-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tag.map((tag, index) => (
            <span key={index} className="bg-gray-600 text-white px-2 py-1 rounded-md">{tag}</span>
          ))}
        </div>      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-50" onClick={handleOutsideClick}>
          <div ref={modalRef} className="text-black bg-white p-8 rounded-xl">
            <div>
              <h2 className="text-xl font-semibold mb-2">프로젝트명</h2>
              <p className="mb-4">{title}</p>
              <h3 className="text-lg font-semibold mb-2">설명</h3>
              <p className="mb-4">{description}</p>
              <h3 className="text-lg font-semibold mb-2">기간</h3>
              <p className="mb-4">{date}</p>
              <h3 className="text-lg font-semibold mb-2">주요업무</h3>
              <ul className="list-disc ml-8 mb-4">
                {mainWork.map((work, index) => (
                  <li key={index}>{work}</li>
                ))}
              </ul>
              <h3 className="text-lg font-semibold mb-2">주요성과</h3>
              <p>{result}</p>
            </div>
            <div className="flex justify-center">
              <button onClick={closeModal} className="mt-8 px-6 py-3 bg-gray-400 text-gray-800 rounded-md">종료</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
