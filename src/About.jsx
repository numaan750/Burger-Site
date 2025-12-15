import React from "react"
import about from "./images/about.jpg"

const About = () => {
    return (
        <>
        <section id="about">
            <div className="container flex flex-col gap-10 md:flex-row">
                <div data-aos="fade-right" className="flex-1">
                    <img src={about} alt="about image" className="rounded-lg"/>
                </div>
                <div data-aos="fade-left" className="flex-1">
                    <h2 className="section__title">FIND FOOD AND DRINKS, ALL-IN-ONE PLACE FOR YOUR BEST TASTE.</h2>
                    <div className="separator"></div>
                    <p className="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt cum, ullam quisquam facilis hic odit modi ipsam fuga, sed quis odio repellendus, est iste nisi nobis dignissimos accusantium? Ipsa, officia!</p>
                    <ul className="grid grid-cols-2 py-2 space-y-1">
                        <li className="text-xs text-paragraphColor"><i className="fa-solid fa-check text-secondaryColor"></i>Best Price</li>
                        <li className="text-xs text-paragraphColor"><i className="fa-solid fa-check text-secondaryColor"></i>Fresh Ingredient</li>
                        <li className="text-xs text-paragraphColor"><i className="fa-solid fa-check text-secondaryColor"></i>Best Services</li>
                        <li className="text-xs text-paragraphColor"><i className="fa-solid fa-check text-secondaryColor"></i>Health Protocol</li>
                        <a href="#" className="btn btn-primary">About Us</a>
                    </ul>
                </div>
            </div>
        </section>
        </>
    );
}

export default About