import React from "react"
import burger1 from "./images/burger-1.png"

const Categories = () => {
    return (
        <>
            <section id="category">
                <div className="container flex flex-col gap-5 md:flex-row"> 
                    {/* card 1 */}
                    <div data-aos="fade-down-right" className="bg-secondaryColor flex gap-x-10 py-3 rounded-lg overflow-hidden md:flex-1">
                        <div className="basis-1/3 relative">
                            <img src={burger1} alt="category image" className="absolute w-28 -button-4 left-4"/>
                        </div>
                        <div className="mb-2">
                            <h1 className="card__title">Food</h1>
                            <p className="text-xs">Lorem ipsum dolor sit.</p>
                            <a href="#" className="text-blackColor cursor-pointer">Buy online</a>
                        </div>
                    </div>
                     {/* card 2 */}
                     <div data-aos="fade-up" className="bg-redColor flex gap-x-10 py-3 rounded-lg overflow-hidden md:flex-1">
                        <div className="basis-1/3 relative">
                            <img src={burger1} alt="category image" className="absolute w-28 -button-4 left-4"/>
                        </div>
                        <div className="mb-2">
                            <h1 className="card__title">Food</h1>
                            <p className="text-xs">Lorem ipsum dolor sit.</p>
                            <a href="#" className="text-secondaryColor cursor-pointer">Buy online</a>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div data-aos="fade-down-left" className="bg-greenColor flex gap-x-10 py-3 rounded-lg overflow-hidden md:flex-1">
                        <div className="basis-1/3 relative">
                            <img src={burger1} alt="category image" className="absolute w-28 -button-4 left-4"/>
                        </div>
                        <div className="mb-2">
                            <h1 className="card__title">Food</h1>
                            <p className="text-xs">Lorem ipsum dolor sit.</p>
                            <a href="#" className="text-secondaryColor cursor-pointer">Buy online</a>
                        </div>
                    </div> 
                </div>
            </section>
        </>
    );
}

export default Categories