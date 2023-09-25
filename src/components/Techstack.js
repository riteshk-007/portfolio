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

const data = [
  {
    icon: <AiFillHtml5 fontSize={70} color="#fff" />,
    tooltip: "html5",
  },
  {
    icon: <FaCss3Alt fontSize={70} color="#fff" />,
  },
  {
    icon: <BiLogoJavascript fontSize={70} color="#fff" />,
  },
  {
    icon: <SiFirebase fontSize={70} color="#fff" />,
  },
  {
    icon: <BsGit fontSize={70} color="#fff" />,
  },
  {
    icon: <AiFillGithub fontSize={70} color="#fff" />,
  },
  {
    icon: <FaReact fontSize={70} color="#fff" />,
  },
  {
    icon: <SiRedux fontSize={70} color="#fff" />,
  },
  {
    icon: <SiTailwindcss fontSize={70} color="#fff" />,
  },
  {
    icon: <FaSass fontSize={70} color="#fff" />,
  },
  {
    icon: <FaBootstrap fontSize={70} color="#fff" />,
  },
  {
    icon: <SiGreensock fontSize={70} color="#fff" />,
  },
];
function Techstack() {
  return (
    <div className="relative w-11/12 lg:w-4/5 m-auto flex items-center justify-center gap-3 flex-wrap">
      <img
        src="./star.jpg"
        alt=""
        className="h-full w-full object-cover opacity-10 absolute bottom-0"
      />
      {data.map((item, i) => (
        <div
          className="w-36 md:w-60 h-36 flex items-center justify-center m-3 border border-[#df8de2] bg-black/30  z-20 rounded-sm hover:border-[#ad50eb] hover:scale-[1.02] transition-all duration-300"
          key={i}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
}

export default Techstack;
