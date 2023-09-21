import React from "react";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiFillStar,
} from "react-icons/ai";
import { FiUser, FiFileText } from "react-icons/fi";
import { DiGitBranch } from "react-icons/di";

import { Link } from "react-router-dom";
function MobileNav({ showNav }) {
  return (
    <div
      className={
        showNav
          ? "fixed h-1/2 bg-gradient-to-r from-purple-900 to-violet-900  w-full top-[51px] left-0 rounded-b-md border-2 border-t-0 border-purple-700 z-20 transition-all duration-[500ms] overflow-hidden"
          : "fixed h-0 bg-gradient-to-r from-purple-900 to-violet-900  w-full top-[51px] left-0 rounded-b-md border-2 border-t-0 border-purple-700 z-20 transition-all duration-[500ms] overflow-hidden"
      }
    >
      <div className=" block items-center justify-center text-white">
        <ul className="flex gap-8 flex-col mt-10">
          <li className="relative group">
            <Link
              to={"/"}
              className="flex gap-1 items-center justify-center cursor-pointer text-base font-bold relative "
            >
              <AiOutlineHome fontSize={20} />
              <span className="">Home</span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to={"/about"}
              className="flex gap-1 items-center justify-center cursor-pointer text-base font-bold relative "
            >
              <FiUser fontSize={20} />
              <span className="">About</span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to={"/projects"}
              className="flex gap-1 items-center justify-center cursor-pointer text-base font-bold relative "
            >
              <AiOutlineFundProjectionScreen fontSize={20} />
              <span className="">Projects</span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to={"/resume"}
              className="flex gap-1 items-center justify-center cursor-pointer text-base font-bold relative "
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
          className="flex  w-24 my-5 mx-auto gap-2 justify-center items-center text-lg bg-fuchsia-900 px-3 py-[3px] border border-purple-700 rounded-sm"
        >
          <DiGitBranch fontSize={18} />
          <AiFillStar fontSize={18} />
        </a>
      </div>
    </div>
  );
}

export default MobileNav;
