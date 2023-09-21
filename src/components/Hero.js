import React from "react";
import Type from "./Type";

function Hero() {
  return (
    <div className="bg-[url(../public/home-bg.jpg)] h-2/3 flex flex-wrap items-center justify-center flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center flex-col mt-10">
        <div className=" flex gap-5 items-center lg:items-start justify-center flex-col">
          <h3 className="flex text-white text-4xl gap-2">
            Hi There!
            <span>
              <img
                src="https://media.tenor.com/SNL9_xhZl9oAAAAi/waving-hand-joypixels.gif"
                alt="hand"
                className="h-10"
              />
            </span>
          </h3>
          <span className="flex text-white text-4xl lg:text-5xl gap-2 font-bold">
            I'M <p className="text-[#ad50eb]"> RITESH</p>
          </span>
          <span className="flex text-[#ad50eb] text-2xl lg:text-3xl gap-2 font-semibold bg-gray-800 h-20 lg:h-32 w-72 lg:w-80 items-center justify-center px-5 rounded-md shadow-xl capitalize text-center">
            <Type />
          </span>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
        <img src="home-main.svg" alt="" className="h-[70vh]" />
      </div>
    </div>
  );
}

export default Hero;
