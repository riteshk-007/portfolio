import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UseAnimations from "react-useanimations";
import menu3 from "react-useanimations/lib/menu3";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiFillStar,
} from "react-icons/ai";
import { FiUser, FiFileText } from "react-icons/fi";
import { DiGitBranch } from "react-icons/di";
import MobileNav from "./MobileNav";

function Header() {
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);
  const name = ["{ Ritesh }"];
  return (
    <div className="flex items-center justify-between px-4 relative bg-purple-950 lg:bg-transparent">
      <span className="capitalize md:w-1/3 lg:w-1/2 flex items-center justify-center py-3 px-2">
        <h1
          className="cursor-pointer text-xl lg:text-3xl font-bold bg-gradient-to-r from-gray-50 to-blue-100 bg-clip-text text-transparent uppercase"
          onClick={() => navigate("/")}
        >
          {name}
        </h1>
      </span>
      <div className="w-1/2 hidden lg:flex items-center justify-start text-white">
        <ul className="flex gap-10">
          <li className="relative group">
            <Link
              to={"/"}
              className="flex gap-1 items-center justify-center cursor-pointer text-base font-bold relative before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[4px] before:bg-purple-500 group-hover:before:w-full"
            >
              <AiOutlineHome fontSize={20} />
              <span className="">Home</span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to={"/about"}
              className="flex gap-1 items-center justify-center cursor-pointer text-base font-bold relative before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[4px] before:bg-purple-500 group-hover:before:w-full"
            >
              <FiUser fontSize={20} />
              <span className="">About</span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to={"/projects"}
              className="flex gap-1 items-center justify-center cursor-pointer text-base font-bold relative before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[4px] before:bg-purple-500 group-hover:before:w-full"
            >
              <AiOutlineFundProjectionScreen fontSize={20} />
              <span className="">Projects</span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to={"/resume"}
              className="flex gap-1 items-center justify-center cursor-pointer text-base font-bold relative before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[4px] before:bg-purple-500 group-hover:before:w-full"
            >
              <FiFileText fontSize={20} />
              <span className="">Resume</span>
            </Link>
          </li>
        </ul>

        <a
          href="https://github.com/riteshk-007/portfolio"
          target="_blank"
          rel="noreferrer"
          className="flex mx-10 gap-2 text-lg bg-purple-900 px-5 py-[5px] border border-purple-700 rounded-sm hover:bg-purple-800 transition-all duration-200 hover:-translate-y-[2px]"
        >
          <DiGitBranch fontSize={20} />
          <AiFillStar fontSize={20} />
        </a>
      </div>
      <span>
        <div className="h-full lg:hidden flex items-center justify-center cursor-pointer relative">
          <UseAnimations
            animation={menu3}
            size={40}
            strokeColor={"#be50f4"}
            speed={2}
            onClick={() => setShowNav(!showNav)}
          />
          <MobileNav showNav={showNav} />
        </div>
      </span>
    </div>
  );
}

export default Header;
