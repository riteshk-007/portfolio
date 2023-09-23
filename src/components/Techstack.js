import React from "react";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { FaCss3Alt, FaReact, FaSass, FaBootstrap } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import {
  SiFirebase,
  SiRedux,
  SiTailwindcss,
  SiGreensock,
} from "react-icons/si";
import { BsGit } from "react-icons/bs";
function Techstack() {
  return (
    <div className="relative w-11/12 lg:w-4/5 m-auto flex items-center justify-center gap-3 flex-wrap">
      <img
        src="./star.jpg"
        alt=""
        className="h-full w-full object-cover opacity-10 absolute bottom-0"
      />
      <div className="w-36 md:w-60 h-36 flex items-center justify-center m-3 border border-[#df8de2] bg-black/30  z-20 rounded-sm hover:border-[#ad50eb] hover:scale-[1.02] transition-all duration-300">
        <AiFillHtml5 fontSize={70} color="#fff" />
      </div>
      <div className="w-36 md:w-60 h-36 flex items-center justify-center m-3 border border-[#df8de2] bg-black/30  z-20 rounded-sm hover:border-[#ad50eb] hover:scale-[1.02] transition-all duration-300">
        <FaCss3Alt fontSize={70} color="#fff" />
      </div>
      <div className="w-36 md:w-60 h-36 flex items-center justify-center m-3 border border-[#df8de2] bg-black/30  z-20 rounded-sm hover:border-[#ad50eb] hover:scale-[1.02] transition-all duration-300">
        <BiLogoJavascript fontSize={70} color="#fff" />
      </div>
      <div className="w-36 md:w-60 h-36 flex items-center justify-center m-3 border border-[#df8de2] bg-black/30  z-20 rounded-sm hover:border-[#ad50eb] hover:scale-[1.02] transition-all duration-300">
        <SiFirebase fontSize={70} color="#fff" />
      </div>
      <div className="w-36 md:w-60 h-36 flex items-center justify-center m-3 border border-[#df8de2] bg-black/30  z-20 rounded-sm hover:border-[#ad50eb] hover:scale-[1.02] transition-all duration-300">
        <BsGit fontSize={70} color="#fff" />
      </div>
      <div className="w-36 md:w-60 h-36 flex items-center justify-center m-3 border border-[#df8de2] bg-black/30  z-20 rounded-sm hover:border-[#ad50eb] hover:scale-[1.02] transition-all duration-300">
        <AiFillGithub fontSize={70} color="#fff" />
      </div>
      <div className="w-36 md:w-60 h-36 flex items-center justify-center m-3 border border-[#df8de2] bg-black/30  z-20 rounded-sm hover:border-[#ad50eb] hover:scale-[1.02] transition-all duration-300">
        <FaReact fontSize={70} color="#fff" />
      </div>
      <div className="w-36 md:w-60 h-36 flex items-center justify-center m-3 border border-[#df8de2] bg-black/30  z-20 rounded-sm hover:border-[#ad50eb] hover:scale-[1.02] transition-all duration-300">
        <SiRedux fontSize={70} color="#fff" />
      </div>
      <div className="w-36 md:w-60 h-36 flex items-center justify-center m-3 border border-[#df8de2] bg-black/30  z-20 rounded-sm hover:border-[#ad50eb] hover:scale-[1.02] transition-all duration-300">
        <SiTailwindcss fontSize={70} color="#fff" />
      </div>
      <div className="w-36 md:w-60 h-36 flex items-center justify-center m-3 border border-[#df8de2] bg-black/30  z-20 rounded-sm hover:border-[#ad50eb] hover:scale-[1.02] transition-all duration-300">
        <FaSass fontSize={70} color="#fff" />
      </div>
      <div className="w-36 md:w-60 h-36 flex items-center justify-center m-3 border border-[#df8de2] bg-black/30  z-20 rounded-sm hover:border-[#ad50eb] hover:scale-[1.02] transition-all duration-300">
        <FaBootstrap fontSize={70} color="#fff" />
      </div>
      <div className="w-36 md:w-60 h-36 flex items-center justify-center m-3 border border-[#df8de2] bg-black/30  z-20 rounded-sm hover:border-[#ad50eb] hover:scale-[1.02] transition-all duration-300">
        <SiGreensock fontSize={70} color="#fff" />
      </div>
    </div>
  );
}

export default Techstack;
