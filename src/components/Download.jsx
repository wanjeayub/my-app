import React from "react";

const DownloadCV = () => {
  return (
    <div>
      <a href="/resume.pdf" download={"resume.pdf"}>
        Download CV
      </a>
    </div>
  );
};

export default DownloadCV;
