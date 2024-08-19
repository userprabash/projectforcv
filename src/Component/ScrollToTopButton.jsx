import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        display: isVisible ? "block" : "none",
        position: "fixed",
        bottom: "20px",
        right: "30px",
        zIndex: 99,
        fontSize: "18px",
        border: "none",
        outline: "none",
        backgroundColor: "#F85606",
        color: "white",
        cursor: "pointer",
        padding: "15px",
        borderRadius: "50%",
      }}
      title="Go to top"
    >
      <i class="bi bi-caret-up"></i>
    </button>
  );
};

export default ScrollToTopButton;
