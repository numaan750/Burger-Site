import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="container">
          <ul className="grid grid-cols-1 items-start gap-5 pb-5 md:grid-cols-2 lg:grid-cols-4">
            <li data-aos="fade-right">
              <div className="space-y-3">
                <a href="" className="text-4xl font-oswald uppercase">
                  Bur<span className="text-secondaryColor">ger</span>
                </a>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Saepe, iusto, impedit accusantium mollitia consequatur vel
                  laudantium architecto soluta assumenda repellendus unde
                  facilis velit vero aut! Doloremque, expedita quam. Deserunt,
                  debitis!
                </p>
              </div>
            </li>
            <li data-aos="fade-right">
              <div className="flex flex-col gap-3">
                <h3 className="text-lg uppercase font-oswald">SUPPORT</h3>
                <a href="" className="text-xs hover:text-secondaryColor">
                  FAQ's
                </a>
                <a href="" className="text-xs hover:text-secondaryColor">
                  Privacy Policy
                </a>
                <a href="" className="text-xs hover:text-secondaryColor">
                  Term & Condition
                </a>
                <a href="" className="text-xs hover:text-secondaryColor">
                  Contact
                </a>
              </div>
            </li>
            <li data-aos="fade-right" className="space-y-8">
              <div className="space-y-2">
                <h3 className="text-lg uppercase font-oswald">phone</h3>
                <p className="flex items-center gap-2 text-xs">
                  <i className="fa-solid fa-phone text-lg text-secondaryColor"></i>
                  +1 000 000 0000
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg uppercase font-oswald">email</h3>
                <p className="flex items-center gap-2 text-xs">
                  <i className="fa-solid fa-envelope text-lg text-secondaryColor"></i>
                  burger.infor@email.com
                </p>
              </div>
            </li>
            <li data-aos="fade-right" className="space-y-8">
              <div className="space-y-2">
                <h3 className="text-lg uppercase font-oswald">address</h3>
                <p className="flex items-center gap-2 text-xs">
                  <i className="fa-solid fa-location-dot text-lg text-secondaryColor"></i>
                  address goes here
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg uppercase font-oswald">follow us</h3>
                <div className="space-x-3">
                  <a href="">
                    <i className="fa-brands fa-facebook-f text-lg cursor-pointer text-secondaryColor hover:-translate-y-1 ease-in duration-200"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-twitter text-lg cursor-pointer text-secondaryColor hover:-translate-y-1 ease-in duration-200"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-square-instagram text-lg cursor-pointer text-secondaryColor hover:-translate-y-1 ease-in duration-200"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-facebook-f text-lg cursor-pointer text-secondaryColor hover:-translate-y-1 ease-in duration-200"></i>
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <div className="flex flex-col items-center border-t border-primaryColorLight dark:border-darkColorLight py-5 md:flex-row justify-between">
            <p className="paragraph">Burger Template Kit by Usman</p>
            <p className="paragraph">Copyright @ 2024. All rights reserved.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
