import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

const Social = () => {
  return (
    <div className="flex flex-col mx-4 overscroll-contain">
      <div className="group w-10 h-10 my-4">
        <FiGithub className=" h-6 w-6 text-gray-500 hover:text-green-400 cursor-pointer group-hover:animate-bounce" />
      </div>
      <div className="group w-10 h-10 my-4">
        <FiTwitter className=" h-6 w-6 text-gray-500 hover:text-green-400 cursor-pointer group-hover:animate-bounce" />
      </div>
      <div className="group w-10 h-10 my-4">
        <FiLinkedin className=" h-6 w-6 text-gray-500 hover:text-green-400 cursor-pointer group-hover:animate-bounce" />
      </div>
      <div className="group w-10 h-10 my-4">
        <FiInstagram className=" h-6 w-6 text-gray-500 hover:text-green-400 cursor-pointer group-hover:animate-bounce" />
      </div>
      <div className="border-l-2 h-40 border-green-400 ml-2"></div>
    </div>
  );
};

export default Social;
