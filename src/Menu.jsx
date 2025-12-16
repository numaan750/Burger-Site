import React, { useState } from "react";
import menuimg1 from "./images/burger-1.png";
import menuimg2 from "./images/burger-2.png";
import menuimg3 from "./images/burger-3.png";
import menuimg4 from "./images/burger-4.png";
import menuimg5 from "./images/burger-5.png";
import friesimg1 from "./images/snack-1.png";
import friesimg2 from "./images/snack-2.png";
import friesimg3 from "./images/snack-3.png";
import friesimg4 from "./images/snack-4.png";
import friesimg5 from "./images/snack-5.png";
import beverageimg1 from "./images/beverage-1.png";
import beverageimg2 from "./images/beverage-2.png";
import beverageimg3 from "./images/beverage-3.png";
import beverageimg4 from "./images/beverage-4.png";
import beverageimg5 from "./images/beverage-5.png";

const Menu = () => {
  // State to manage active category
  const [activeCategory, setActiveCategory] = useState("All");

  const burgermenu = [
    {
      title: "REGULAR BEEF BURGER",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "$42.00",
      image: menuimg1,
      category: "Food",
    },
    {
      title: "REGULAR BEEF BURGER",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "$40.00",
      image: menuimg2,
      category: "Food",
    },
    {
      title: "REGULAR BEEF BURGER",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "$45.00",
      image: menuimg3,
      category: "Food",
    },
    {
      title: "REGULAR BEEF BURGER",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "$48.00",
      image: menuimg4,
      category: "Food",
    },
    {
      title: "REGULAR BEEF BURGER",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "$35.00",
      image: menuimg5,
      category: "Food",
    },
    {
      title: "FRENCH FRIES",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "$35.00",
      image: friesimg1,
      category: "Snack",
    },
    {
      title: "FRENCH FRIES",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "$35.00",
      image: friesimg2,
      category: "Snack",
    },
    {
      title: "FRENCH FRIES",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "$35.00",
      image: friesimg3,
      category: "Snack",
    },
    {
      title: "FRENCH FRIES",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "$35.00",
      image: friesimg4,
      category: "Snack",
    },
    {
      title: "FRENCH FRIES",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "$35.00",
      image: friesimg5,
      category: "Snack",
    },
    {
      title: "SWEET SMOOTHIE",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "$35.00",
      image: beverageimg1,
      category: "Beverage",
    },
    {
      title: "SWEET SMOOTHIE",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "$35.00",
      image: beverageimg2,
      category: "Beverage",
    },
    {
      title: "SWEET SMOOTHIE",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "$35.00",
      image: beverageimg3,
      category: "Beverage",
    },
    {
      title: "SWEET SMOOTHIE",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "$35.00",
      image: beverageimg4,
      category: "Beverage",
    },
    {
      title: "SWEET SMOOTHIE",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "$35.00",
      image: beverageimg5,
      category: "Beverage",
    },
  ];

  // Function to filter the menu based on the active category
  const filteredMenu = burgermenu.filter((item) =>
    activeCategory === "All" ? true : item.category === activeCategory
  );

  return (
    <>
      <section id="menu">
        <div className="container">
          <div data-aos="zoom-in-up" className="max-w-md mx-auto text-center">
            <h2 className="section__title">OUR BEST MENU</h2>
            <div className="separator mx-auto"></div>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              accusantium totam dolores asperiores eaque ea architecto nostrum,
              delectus hic vitae iste. Nemo soluta, suscipit porro sit
              dignissimos libero magni in.
            </p>
            <div className="tabs_wrap">
              <ul className="flex flex-wrap justify-center gap-3 py-10">
                <li
                  className={`btn bg-primaryColorLight dark:bg-drakColorLight ${
                    activeCategory === "All" ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory("All")}
                >
                  All
                </li>
                <li
                  className={`btn bg-primaryColorLight dark:bg-drakColorLight ${
                    activeCategory === "Food" ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory("Food")}
                >
                  Food
                </li>
                <li
                  className={`btn bg-primaryColorLight dark:bg-drakColorLight ${
                    activeCategory === "Snack" ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory("Snack")}
                >
                  Snack
                </li>
                <li
                  className={`btn bg-primaryColorLight dark:bg-drakColorLight ${
                    activeCategory === "Beverage" ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory("Beverage")}
                >
                  Beverage
                </li>
              </ul>
            </div>
          </div>
          <div>
            <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
              {filteredMenu.map((data, index) => (
                <li data-aos="zoom-in" key={index}>
                  <div
                    data-aos="flip-left"
                    className="h-56 grid place-items-center bg-primaryColorLight dark:bg-drakColorLight rounded-3xl hover:bg-secondaryColor dark:hover:bg-secondaryColor ease-linear duration-200 lg:h-40"
                  >
                    <img
                      src={data.image}
                      alt={data.title}
                      className="w-40 hover:scale-110 ease-linear duration-200 md:w-40 lg:w-24"
                    />
                  </div>
                  <div className="pt-5">
                    <div className="mb-2">
                      <h4 className="card__title">{data.title}</h4>
                      <p className="paragraph">{data.des}</p>
                    </div>
                    <p className="text-secondaryColor">{data.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
