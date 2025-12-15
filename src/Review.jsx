import React from "react"
import customerimg1 from "./images/review-1.jpg"
import customerimg2 from "./images/review-2.jpg"
import customerimg3 from "./images/review-3.jpg"
import customerimg4 from "./images/review-4.jpg"
import customerimg5 from "./images/review-5.jpg"
import Slider from "react-slick"

const Review = () => {

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 10000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

    const customer_review = [
        {
            des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, necessitatibus deserunt voluptatum nobis quod sapiente fuga rem provident soluta odit, cum eius consequuntur, similique accusamus veniam voluptate consectetur ut maiores!",
            img: customerimg1,
            name: "JOHN DOE",
            profession: "Designer"
        },
        {
            des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, necessitatibus deserunt voluptatum nobis quod sapiente fuga rem provident soluta odit, cum eius consequuntur, similique accusamus veniam voluptate consectetur ut maiores!",
            img: customerimg2,
            name: "MARYAM",
            profession: "Developer"
        },
        {
            des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, necessitatibus deserunt voluptatum nobis quod sapiente fuga rem provident soluta odit, cum eius consequuntur, similique accusamus veniam voluptate consectetur ut maiores!",
            img: customerimg3,
            name: "AWAIS",
            profession: "Developer"
        },
        {
            des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, necessitatibus deserunt voluptatum nobis quod sapiente fuga rem provident soluta odit, cum eius consequuntur, similique accusamus veniam voluptate consectetur ut maiores!",
            img: customerimg4,
            name: "MAHNOR",
            profession: "Designer"
        },
        {
            des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, necessitatibus deserunt voluptatum nobis quod sapiente fuga rem provident soluta odit, cum eius consequuntur, similique accusamus veniam voluptate consectetur ut maiores!",
            img: customerimg5,
            name: "HASNAIN",
            profession: "Marketer"
        },
    ];

    return (
        <>
            <section id="review" className="dark:bg-drakColorLight">
                <div className="container">
                    <div data-aos="zoom-out-right" className="max-w-md mx-auto text-center">
                        <h2 className="section__title">CUSTOMER REVIEW</h2>
                        <div className="separator mx-auto"></div>
                        <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro accusantium totam dolores asperiores eaque ea architecto nostrum, delectus hic vitae iste. Nemo soluta, suscipit porro sit dignissimos libero magni in.</p>
                    </div>
                    <div className="py-10">
                        <ul>
                            <Slider {...settings}>
                                {   
                                customer_review.map((data, index) => (
                                    <li data-aos="zoom-in-up" key={index}>
                                        <div className="flex flex-col gap-5 bg-primaryColorLight dark:bg-darkColor rounded-lg p-6 mx-2">
                                            <p className="paragraph">{data.des}</p>
                                            <div className="flex items-center">
                                                <img src={data.img} alt="review image" className="w-12 h-12 rounded-full"/>
                                                <div className="ml-2">
                                                    <p className="font-oswald uppercase">{data.name}</p>
                                                    <p className="paragraph">{data.profession}</p>
                                                </div>
                                                <i className="fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto"></i>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                            </Slider>                          
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Review