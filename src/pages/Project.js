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
          name={"Condom Crypto Coins 💰"}
          image={"/project/img1.png"}
          about={
            "Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time."
          }
          demo={"https://coindom-crypto-coin.vercel.app/"}
          code={"https://github.com/riteshk-007/COINDOM"}
        />
        <ProjectCard
          name={"Imagzen 🖼️"}
          image={"/project/img2.png"}
          about={
            "IMAGZEN is an image download app that allows users to search and download images. And it is also responsive."
          }
          demo={"https://imagzen.vercel.app/"}
          code={"https://github.com/riteshk-007/imagzen"}
        />
        <ProjectCard
          name={"Fash Cave (e commerce) 🏪"}
          image={"/project/img3.png"}
          about={
            "FASHCAVE is a clothing online store app that allows users to order the clothes of their choice. And it is also responsive."
          }
          demo={"https://fash-cave.vercel.app/"}
          code={"https://github.com/riteshk-007/Fash-Cave"}
          note={
            "The backend of this site is built on Render. If this site takes time to load, then once you click on this link and start its server, it will take less time. To start the server 👉"
          }
        />
        <ProjectCard
          name={"ChatGPT Clone 💬"}
          image={"/project/img4.png"}
          about={
            "This is a clone of chatGPT which like chatGPT will help the users in answering their questions and it is useful to solve any query or code."
          }
          demo={"https://chat-gpt-theta-taupe.vercel.app/"}
          code={"https://github.com/riteshk-007/Chat-GPT-Clone"}
        />
        <ProjectCard
          name={"Fitness Club 👊"}
          image={"/project/img5.png"}
          about={
            "Welcome to Gym-Exercise, the open-source fitness platform that empowers you to take control of your health and fitness journey."
          }
          demo={"https://gym-exercise-six.vercel.app/"}
          code={"https://github.com/riteshk-007/gym-exercise"}
        />
        <ProjectCard
          name={"Youtube Clone 📹"}
          image={"/project/img6.png"}
          about={
            "It is a clone of Youtube which helps the users to watch and listen to their favorite videos and songs by searching them. It is also mobile responsive."
          }
          demo={"https://youtube-clone-by-ritesh.netlify.app/"}
          code={"https://github.com/riteshk-007/Youtube-Clone-by-Tailwind-Css"}
        />
      </div>
    </div>
  );
}

export default Project;
