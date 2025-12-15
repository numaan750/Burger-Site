import React from "react"
import "./index.css"
import Navbar from "./Navbar"
import Banner from "./Banner"
import Categories from "./Categories"
import Promo from "./Promo"
import About from "./About"
import Menu from "./Menu"
import Review from "./Review"
import Contact from "./Contact"
import Footer from "./Footer"
import AOS from "aos"
import "aos/dist/aos.css"

const App = () => {

    React.useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 800,
            easing: "ease-in-sine",
            delay: 100,
        });
        AOS.refresh();
    }, []);

    return(
        <>
            <Navbar/>
            <Banner/>
            <Categories/>
            <Promo/>
            <About/>
            <Menu/>
            <Review/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default App