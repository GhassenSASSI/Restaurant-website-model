import React, { useState } from "react";
import styled from 'styled-components';
import Sidebar from "../components/sidebar";
import Carousel from "../components/carousel";
import TopNavbar from "../components/topNavbar";
import HiddenSidebar from "../components/hiddenSideBar";
import BotNavbar from "../components/botNavbar";
import AboutUs from "../components/aboutUs";
import Gallery from "../components/gallery";
import Menu from "../components/menu";
import Testimonials from "../components/testimonials";
import Order from "../components/order";
import Contact from "../components/contact";
import Customers from "../components/customers";
import Footer from "../components/footer";
import GoTop from "../components/goTop";

const Home = () => {

    const [isHidden, setIsHidden] = useState(true)
    const [firstLoad, setFirstLoad] = useState("firstLoad")
    const [visible, setVisible] = useState("notSeen")
    const [components, setComponents] = useState([])
    const [activeButton, setActiveButton] = useState(0)
    const [preventScroll, setPreventScroll] = useState(false)

    const showAndHideTab = () => {
        setIsHidden(!isHidden)
    }

    const changeFirstLoad = () => {
        setFirstLoad("")
    }

    const changeVisibility = () => {
        if(isHidden){
            setVisible("seen")
        }else{
            setVisible("notSeen")
        }
    }

    const updateComponents = (component) => {
        setComponents(c => [...c, component])
    }

    const scrollToElement = (element) => {
        handlePreventScroll(true)
        element?.scrollIntoView({ behavior: 'smooth' })

        setTimeout(() => {
            handlePreventScroll(false)
        }, 1000);
    }

    const handleActiveButton = (index) => {
        setActiveButton(index)
    }

    const handlePreventScroll = (value) => {
        setPreventScroll(value)
    }

    return(
        <Container>
            <TopNavbar showAndHideTab={showAndHideTab} changeFirstLoad={changeFirstLoad} changeVisibility={changeVisibility}></TopNavbar>
            <Sidebar scrollToElement={scrollToElement} components={components} handleActiveButton={handleActiveButton} activeButton={activeButton}></Sidebar>
            <Carousel updateComponents={updateComponents} handleActiveButton={handleActiveButton} preventScroll={preventScroll}></Carousel>
            <AboutUs updateComponents={updateComponents} handleActiveButton={handleActiveButton} preventScroll={preventScroll}></AboutUs>
            <Gallery updateComponents={updateComponents} handleActiveButton={handleActiveButton} preventScroll={preventScroll}></Gallery>
            <Menu updateComponents={updateComponents} handleActiveButton={handleActiveButton} preventScroll={preventScroll}></Menu>
            <Testimonials updateComponents={updateComponents} handleActiveButton={handleActiveButton} preventScroll={preventScroll}></Testimonials>
            <Order updateComponents={updateComponents} handleActiveButton={handleActiveButton} preventScroll={preventScroll}></Order>
            <Contact updateComponents={updateComponents} handleActiveButton={handleActiveButton} preventScroll={preventScroll}></Contact>
            <Customers></Customers>
            <Footer></Footer>
            <HiddenSidebar isHidden={isHidden} showAndHideTab={showAndHideTab} firstLoad={firstLoad} changeVisibility={changeVisibility} visible={visible}></HiddenSidebar>
            <BotNavbar scrollToElement={scrollToElement} components={components}></BotNavbar>
            <GoTop handlePreventScroll={handlePreventScroll} handleActiveButton={handleActiveButton}></GoTop>
        </Container>
    );
}

const Container = styled.div``

export default Home;