import React, { useState, useEffect } from "react";

const DarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    const element = document.documentElement;

    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div>
            {theme === "light" ? (
                <i
                    className="ri-moon-line cursor-pointer ml-4 text-xl"
                    onClick={toggleTheme}
                ></i>
            ) : (
                <i
                    className="ri-sun-line cursor-pointer ml-4 text-xl"
                    onClick={toggleTheme}
                ></i>
            )}
        </div>
    );
};

export default DarkMode;
