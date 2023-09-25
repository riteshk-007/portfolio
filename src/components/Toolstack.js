import React from "react";
import { BsWindows } from "react-icons/bs";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
function Toolstack() {
  const data = [
    {
      icon: <BsWindows fontSize={70} color="#fff" />,
    },
    {
      icon: <SiVisualstudiocode fontSize={70} color="#fff" />,
    },
    {
      icon: <SiPostman fontSize={70} color="#fff" />,
    },
    {
      icon: <SiVercel fontSize={70} color="#fff" />,
    },
    {
      icon: <SiNetlify fontSize={70} color="#fff" />,
    },
  ];
  return (
    <div className="relative w-11/12 lg:w-4/5 mx-auto flex items-center justify-center gap-3 flex-wrap my-5">
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

export default Toolstack;
