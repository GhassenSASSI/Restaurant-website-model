import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import image from "../assets/pb2-1.jpeg"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const HiddenSidebar = ({ isHidden, showAndHideTab, firstLoad, changeVisibility, visible }) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const list = useRef(null)

    const handleButtonClick = () => {
        showAndHideTab()
        changeVisibility()
    };

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth)
          if(windowWidth > 768 && !isHidden) showAndHideTab()
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, [windowWidth]);

    return(
        <Container>
            <div className={`listContainer ${firstLoad}`} onClick={showAndHideTab} style={{animationName: isHidden ? "hideAll" : "showAll"}}>
                <button className="close" onClick={handleButtonClick}><MdClose style={{fontSize: "50px", color: "white"}} /></button>
                <ul ref={list} className={visible} onClick={(e) => e.stopPropagation()} style={{background: `url(${image})`, backgroundSize: "cover", animationName: isHidden ? "hide" : "show"}}>
                    <li className="option">Welcome</li>
                    <li className="option">About Us</li>
                    <li className="option">Photo Gallery</li>
                    <li className="option">Food Menus</li>
                    <li className="option">Testimonials</li>
                    <li className="option">Food Order</li>
                    <li className="option">Contact Us</li>
                    <li className="socials">
                        <div className="social-media">
                            <button className="facebook"><FaFacebookF className="icon" style={{color: "white"}} /></button>
                            <button className="twitter"><FaTwitter className="icon" style={{color: "white"}} /></button>
                            <button className="instagram"><FaInstagram className="icon" style={{color: "white"}} /></button>
                            <button className="skype"><FaSkype className="icon" style={{color: "white"}} /></button>
                            <button className="youtube"><FaYoutube className="icon" style={{color: "white"}} /></button>
                        </div>
                        <p>© Copyright 2024</p>
                    </li>
                </ul>
            </div>
        </Container>
    );
}

const Container = styled.div`
    .firstLoad{
        display: none;
    }
    .listContainer{
        width: 100vw;
        height: 100vh;
        background-color: #000000b1;
        z-index: 9999;
        position: fixed;
        top: 0;
        left: 0;
        animation-duration: 500ms;;
        animation-fill-mode: forwards;
        @keyframes hideAll {
            0% {opacity: 1}
            100% {opacity: 0; display: none}
        }
        @keyframes showAll {
            0% {opacity: 0; display: block}
            100% {opacity: 1}
        }
        .close{
            position: fixed;
            left: calc(100vw - 400px - 60px);
            top: 5px;
            width: 50px;
            height: 50px;
            padding: 0;
            text-align: center;
            background-color: transparent;
            border: none;
            transition: transform 400ms ease-in-out;
        }
        .close:hover{
            transform: rotate(180deg);
        }
        .seen{
            animation-fill-mode: forwards;
        }
        .notSeen{
            animation-fill-mode: backwards;
        }
        ul{
            list-style: none;
            width: 400px;
            height: 100%;
            position: fixed;
            top: 0;
            right: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            animation-duration: 500ms;
            li{
                color: white;
                width: 100%;
                align-content: center;
            }
            .option{
                height: 10%;
                border-bottom: solid 1px #2b2929;
                padding-left: 15px;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                font-size: x-large;
                font-weight: 700;
                letter-spacing: 1px;
                cursor: pointer;
                opacity: 0;
                transition: all 700ms ease-in-out;
                animation-name: drop;
                animation-duration: 100ms;
                animation-fill-mode: forwards;
            }
            .option:hover{
                color: #B50000;
            }
            .socials{
                height: 30%;
                padding-top: 100px;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 15px;
                p{
                    color: #b3b1b1;
                    font-size: small;
                }
            }
            @keyframes drop {
                0% {transform: translateY(-100%); opacity: 0;}
                100% {transform: translateY(0); opacity: 1;}
            }
            .option:nth-child(1){
                animation-delay: 500ms;
            }
            .option:nth-child(2){
                animation-delay: 600ms;
            }
            .option:nth-child(3){
                animation-delay: 700ms;
            }
            .option:nth-child(4){
                animation-delay: 800ms;
            }
            .option:nth-child(5){
                animation-delay: 900ms;
            }
            .option:nth-child(6){
                animation-delay: 1000ms;
            }
            .option:nth-child(7){
                animation-delay: 1100ms;
            }
            .social-media{
                width: 50%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                button{
                    background-color: #201c1c;
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    border: none;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: all 500ms ease;
                }
                .icon{
                    z-index: 99;
                    transition: transform 500ms ease-out;
                }
                button:hover .icon{
                    transform: rotate(360deg);
                }
                .facebook:hover{
                    background-color: #3A5696;
                }
                .twitter:hover{
                    background-color: #1D9CEB;
                }
                .instagram{
                    position: relative;
                }
                .instagram:after{
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    background: linear-gradient(to bottom,#833ab4,#fd1d1d,#fcb045);
                    opacity: 0;
                    transition: all 500ms ease;
                }
                .instagram:hover:after{
                    opacity: 1;
                }
                .skype:hover{
                    background-color: #01A9EA;
                }
                .youtube:hover{
                    background-color: #ED0000;
                }
            }
            @keyframes hide {
                0% {transform: translateX(0)}
                100% {transform: translateX(400px)}
            }
            @keyframes show {
                0% {right: -400px}
                100% {transform: translateX(0)}
            }
        }
        @media (max-width: 550px) {
            ul{
                width: 300px;
                .social-media{
                    width: 70%;
                }
            }
            .close{
                left: calc(100vw - 300px - 60px);
            }
        }
    }
`

export default HiddenSidebar;