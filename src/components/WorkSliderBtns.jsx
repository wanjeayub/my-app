"use client";

import { useSwiper } from "swiper/react";
import { PiCaretRightBold, PiCaretLeftBold } from "react-icons/pi";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles}>
        <PiCaretLeftBold />
      </button>
      <button className={btnStyles}>
        <PiCaretRightBold />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
