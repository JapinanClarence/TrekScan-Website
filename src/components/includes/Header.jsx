import React, { useState, useEffect } from "react";
import logo from "@/assets/Logo3.png";
import { Button } from "../ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and update state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`  h-[60px] w-full top-0 left-0 fixed z-50 transition-all duration-300 px-5 lg:px-72 ${
        // isScrolled ? "bg-zinc/30 backdrop-blur-md shadow-md" : "bg-transparent"
         isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="h-full flex items-center gap-2">
        <Button variant="link" className="md:h-full md:w-60"
         onClick={() => {
          document.getElementById("home").scrollIntoView({
            behavior: "smooth",
          });
        }}>
          <img  className="h-24 w-60 md:w-full object-contain" src={logo} alt="Logo" />
        </Button>
        <div className="h-full hidden md:inline">
          <Button
            size="lg"
            variant="link"
            className="hover:no-underline h-full text-black hover:bg-deepBlue hover:text-white rounded-none"
            onClick={() => {
              document.getElementById("features").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Features
          </Button>
          <Button
            size="lg"
            variant="link"
            className="hover:no-underline h-full text-black hover:bg-deepBlue hover:text-white rounded-none"
            onClick={() => {
              document.getElementById("about").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            About
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
