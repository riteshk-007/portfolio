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
            "Coindom is a cryptocurrency app that provides users with real-time information on various cryptocurrencies. With Coindom, you can view the details of any crypto, including its chart for different periods."
          }
          demo={"https://coindom-crypto-coin.vercel.app/"}
          code={"https://github.com/riteshk-007/COINDOM"}
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
          name={"Fash Cave (e commerce) 🏪"}
          image={"/project/img3.png"}
          about={
            "FASHCAVE: The Adaptive Online Clothing Store Looking for an online clothing store that anticipates your needs? Look no further than FASHCAVE! Our platform is designed with both men and women in mind, offering a vast selection of clothes and accessories. With its fully responsive system, FASHCAVE is a breeze to navigate and shop."
          }
          demo={"https://fash-cave.vercel.app/"}
          code={"https://github.com/riteshk-007/Fash-Cave"}
          note={
            "Site's Backend Built on Render. If you're experiencing slow load times on this site, consider starting the server by clicking on this link. The server launch can significantly reduce loading time since the site's backend is built on Render."
          }
        />
        <ProjectCard
          name={"ChatGPT Clone 💬"}
          image={"/project/img4.png"}
          about={
            "Similar to chatGPT, this platform is designed to assist users in addressing their queries. It's an excellent resource to tackle any code-related issue or inquiry you may have."
          }
          demo={"https://chat-gpt-theta-taupe.vercel.app/"}
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
