import React, { useEffect, useState } from "react";
import {BsArrowUpCircleFill} from "react-icons/bs"
function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top flex justify-end text-white">
      {isVisible && 
        <BsArrowUpCircleFill onClick={scrollToTop}>
        </BsArrowUpCircleFill>}
    </div>
  );
}

export default BackToTop;