import React from "react";
import Tilt from "react-parallax-tilt";

function Interduce() {
  return (
    <div className="flex flex-wrap items-center justify-center flex-col lg:flex-row relative overflow-hidden">
      <img
        src="./star.jpg"
        alt=""
        className="h-full w-full object-cover opacity-10 absolute bottom-0"
      />
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center flex-col my-10 lg:gap-10">
        <h1 className="flex text-white text-2xl lg:text-4xl gap-2 my-10">
          LET ME <p className="text-[#ad50eb]">INTRODUCE</p> MYSELF
        </h1>
        <div className="flex items-center m-auto justify-center w-11/12 lg:w-3/4 lg:mr-10">
          <span className="flex flex-col gap-3 text-white items-start  text-base justify-center font-semibold lg:text-lg">
            <p>
              I'm Ritesh, a Full-stack Web Developer from New Delhi with
              expertise in React, Next.js, Node.js, and Express.js. With over
              1.5 years of experience, I've built high-performing web
              applications, including blogging platforms and e-commerce
              solutions. As a Tech Lead & Web Developer Intern at MnA Studio, I
              optimized site performance using Next.js. With a passion for
              learning and attention to detail, I'm committed to delivering
              impactful digital experiences. Let's connect and create together!
            </p>
          </span>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-10">
        <Tilt>
          <img src="man.png" alt="" className="object-cover" />
        </Tilt>
      </div>
    </div>
  );
}

export default Interduce;
