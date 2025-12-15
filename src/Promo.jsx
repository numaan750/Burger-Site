import React from "react"
import promoimg1 from "./images/promo-1.png"
import promoimg2 from "./images/promo-2.png"

const Promo = () => {
    return (
        <>
        <section>
            <div className="container flex flex-col gap-5 lg:gap-10 lg:flex-row">
                {/* card 1 */}
                <div data-aos="fade-up-right" className="bg-primaryColorLight dark:bg-drakColorLight flex flex-col p-5 rounded-lg md:flex-row md:items-center lg:flex-row-reverse lg:flex-1">
                    <img src={promoimg1} alt="promo image" className="w-40 mx-auto hover:animate-movingY md:mx-5"/>
                    <div className="space-y-2 pt-5 md:pt-0">
                        <p className="text-xs text-secondaryColor">Payday promo</p>
                        <h3 className="card__title">GET A 10% DISCOUNT ON PAYDAY WEEK</h3>
                        <p className="paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <a href="#" className="text-xs text-secondaryColor">Buy online</a>
                    </div>
                </div>
                 {/* card 2 */}
                 <div data-aos="fade-up" className="bg-primaryColorLight dark:bg-drakColorLight flex flex-col p-5 rounded-lg md:flex-row md:items-center lg:flex-row-reverse lg:flex-1">
                    <img src={promoimg2} alt="promo image" className="w-40 mx-auto hover:animate-movingY md:mx-5"/>
                    <div className="space-y-2 pt-5 md:pt-0">
                        <p className="text-xs text-secondaryColor">Payday promo</p>
                        <h3 className="card__title">GET A 10% DISCOUNT ON PAYDAY WEEK</h3>
                        <p className="paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <a href="#" className="text-xs text-secondaryColor">Buy online</a>
                    </div>
                </div>
                  {/* card 3 */}
                  <div data-aos="fade-up-left" className="bg-primaryColorLight dark:bg-drakColorLight flex flex-col p-5 rounded-lg md:flex-row md:items-center lg:flex-row-reverse lg:flex-1">
                    <img src={promoimg2} alt="promo image" className="w-40 mx-auto hover:animate-movingY md:mx-5"/>
                    <div className="space-y-2 pt-5 md:pt-0">
                        <p className="text-xs text-secondaryColor">Payday promo</p>
                        <h3 className="card__title">GET A 10% DISCOUNT ON PAYDAY WEEK</h3>
                        <p className="paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <a href="#" className="text-xs text-secondaryColor">Buy online</a>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Promo