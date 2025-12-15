import React from "react";
import homeimage from "./images/home-image.png"

const Banner = () => {
    return (
        <>
            <section id="home">
                <div className="container flex flex-col items-center gap-10 md:flex-row">
                    <div className="mx-auto md:basis-1/2 lg:basis-2/5 animate-movingY">
                        <img src={homeimage} alt="home image" className="w-60 md:w-full"/>
                    </div>
                    <div className="text-center md:basis-1/2 md:text-start lg:basis-3/5">
                        <h1 className="home__title">HAPPY TUMMY WITH TASTY BURGERS.</h1>
                        <div className="separator mx-auto md:mx-0"></div>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur  adipisicing elit. Enim neque quia amet nesciunt quibusdam harum, repudiandae ipsum nostrum qui reiciendis animi, voluptate ut quos tenetur voluptatem? Laborum vitae eum harum.
                        </p>
                        <div className="text-base flex items-center justify-center gap-4 py-10 md:justify-start md:gap-20">
                            <div className="text-center"> 
                                <i className="fa-solid fa-utensils text-secondaryColor text-4xl"></i>
                                <br/>
                                Delicious
                            </div>
                            <div className="text-center"> 
                                <i class="fa-solid fa-droplet text-secondaryColor text-4xl"></i>
                                <br/>
                                Fresh
                            </div>
                            <div className="text-center"> 
                                <i class="fa-brands fa-envira text-secondaryColor text-4xl"></i>
                                <br/>
                                Organic
                            </div>
                        </div>
                        <a href="#" className="btn btn-primary">learn more</a>
                    </div>    
                </div>
            </section>
        </>
    )
}

export default Banner