import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Interduce from "../components/Interduce";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <Interduce />
    </div>
  );
}

export default Home;
