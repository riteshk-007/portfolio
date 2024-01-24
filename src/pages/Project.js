import React from "react";
import ProjectCard from "../components/ProjectCard";

function Project() {
  return (
    <div className="flex flex-wrap items-center justify-center flex-col lg:flex-row relative overflow-hidden ">
      <img
        src="./star.jpg"
        alt=""
        className="h-full w-full object-cover opacity-20 absolute bottom-0"
      />
      <div className="z-20 flex items-center justify-center gap-3 m-2 flex-wrap">
        <ProjectCard
          name={"Blog Website"}
          image={"/project/img1.png"}
          about={
            "You can write and read blogs in it and it is built on NextJS, its backend uses mongodb. And it is also mobile responsive"
          }
          demo={"https://blog-website-riteshk-007.vercel.app/"}
          code={"https://github.com/riteshk-007/blog-website"}
        />
        <ProjectCard
          name={"Imagzen 🖼️"}
          image={"/project/img2.png"}
          about={
            "Meet IMAGZEN – the responsive image download app that lets you search and download images with ease."
          }
          demo={"https://imagzen.vercel.app/"}
          code={"https://github.com/riteshk-007/imagzen"}
        />
        <ProjectCard
          name={"NextJs E commerce 🏪"}
          image={"/project/img3.png"}
          about={
            "You can order clothes and create your own products and it is built on NextJS, its backend uses MongoDB. And it is also mobile responsive. And Test Account is = test@gmail.com and password = test4321"
          }
          demo={"https://nextjs-e-commerce-rk.vercel.app/"}
          code={"https://github.com/riteshk-007/nextjs-store"}
        />
        <ProjectCard
          name={"ChatGPT Clone 💬"}
          image={"/project/img4.png"}
          about={
            "Similar to chatGPT, this platform is designed to assist users in addressing their queries. It's an excellent resource to tackle any code-related issue or inquiry you may have."
          }
          code={"https://github.com/riteshk-007/Chat-GPT-Clone"}
        />
        <ProjectCard
          name={"Fitness Club 👊"}
          image={"/project/img5.png"}
          about={
            "We're excited to introduce Gym-Exercise, the fitness platform that's open-source and designed to help you take charge of your health and fitness journey."
          }
          demo={"https://gym-exercise-six.vercel.app/"}
          code={"https://github.com/riteshk-007/gym-exercise"}
        />
        <ProjectCard
          name={"Youtube Clone 📹"}
          image={"/project/img6.png"}
          about={
            "A YouTube clone that allows users to search and enjoy their favorite videos and songs is now available. This platform is also mobile-responsive, making it convenient for users on-the-go."
          }
          demo={"https://youtube-clone-by-ritesh.netlify.app/"}
          code={"https://github.com/riteshk-007/Youtube-Clone-by-Tailwind-Css"}
        />
      </div>
    </div>
  );
}

export default Project;
