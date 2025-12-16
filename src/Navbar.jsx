import React, { useState } from "react";
import DarkMode from "./DarkMode";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("#home"); // Track active link

  const handleLinkClick = (link) => {
    setActiveLink(link); // Update the active link
    setMenu(false); // Close the menu if it's a mobile view
  };

  return (
    <>
      <header className="bg-primaryColor fixed left-0 top-0 w-full z-50 dark:bg-darkColor">
        <nav className="container relative h-14 flex justify-between items-center dark:bg-darkColor">
          <div>
            <a href="#" className="text-2xl uppercase font-oswald">
              Bur<span className="text-secondaryColor">ger</span>
            </a>
          </div>
          <div className="flex gap-8 max-md:hidden">
            {["#home", "#about", "#menu", "#review", "#contact"].map(
              (link, index) => (
                <a
                  key={index}
                  href={link}
                  onClick={() => handleLinkClick(link)}
                  className={`hover:text-secondaryColor ease-in duration-200 ${
                    activeLink === link ? "text-secondaryColor" : ""
                  }`}
                >
                  {link.replace("#", "").replace(/^\w/, (c) => c.toUpperCase())}{" "}
                  {/* Capitalize the link name */}
                </a>
              )
            )}
          </div>
          <div className="flex items-center gap-5">
            <DarkMode />
            <div
              className="cursor-pointer text-xl md:hidden"
              onClick={() => setMenu(!menu)}
            >
              <i className="ri-menu-2-line"></i>
            </div>
          </div>
        </nav>

        {/* Menu with Toggle Functionality */}

        {menu && (
          <div className="absolute top-0 left-0 w-full py-14 bg-primaryColor border-b border-secondaryColor flex flex-col text-center gap-5 dark:bg-darkColor">
            {["#home", "#about", "#menu", "#review", "#contact"].map(
              (link, index) => (
                <a
                  key={index}
                  href={link}
                  onClick={() => handleLinkClick(link)}
                  className={`hover:text-secondaryColor ease-in duration-200 ${
                    activeLink === link ? "text-secondaryColor" : ""
                  }`}
                >
                  {link.replace("#", "").replace(/^\w/, (c) => c.toUpperCase())}{" "}
                  {/* Capitalize the link name */}
                </a>
              )
            )}
            <div
              className="absolute top-[0.7rem] right-4 text-2xl cursor-pointer"
              onClick={() => setMenu(!menu)}
            >
              <i className="ri-close-line"></i>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
