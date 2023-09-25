import React, { useEffect } from "react";

function Project() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-wrap items-center justify-center flex-col lg:flex-row relative overflow-hidden h-screen"></div>
  );
}

export default Project;
