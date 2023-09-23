import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  const explicitTheme = {
    light: ["#333", "#bf8fea", "#c176ff", "#9b50de", "#7d37bb"],
    dark: ["#333", "#bf8fea", "#c176ff", "#9b50de", "#7d37bb"],
  };
  return (
    <div className="mx-auto  flex items-center justify-center my-3 p-2">
      <GitHubCalendar
        username="riteshk-007"
        blockSize={15}
        blockMargin={5}
        style={{ color: "#ccc" }}
        fontSize={16}
        theme={explicitTheme}
      />
    </div>
  );
}

export default Github;
