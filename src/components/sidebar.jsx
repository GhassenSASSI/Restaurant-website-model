import React, { useEffect } from "react";
import styled from 'styled-components';
import logo from '../assets/logo-rest2.png'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Sidebar = ({ scrollToElement, components, handleActiveButton, activeButton }) => {

    const handleMenuClick = (index) => {
        handleActiveButton(index)
        scrollToElement(components[index])
    }

    return(
        <Container>
            <div className="sidebar">
                <img src={logo} alt="logo" />
                <ul>
                    <li><a onClick={() => handleMenuClick(0)} className={`link ${activeButton === 0 ? 'active' : ''}`}>Welcome</a></li>
                    <li><a onClick={() => handleMenuClick(1)} className={`link ${activeButton === 1 ? 'active' : ''}`}>About Us</a></li>
                    <li><a onClick={() => handleMenuClick(2)} className={`link ${activeButton === 2 ? 'active' : ''}`}>Photo Gallery</a></li>
                    <li><a onClick={() => handleMenuClick(3)} className={`link ${activeButton === 3 ? 'active' : ''}`}>Food Menus</a></li>
                    <li><a onClick={() => handleMenuClick(4)} className={`link ${activeButton === 4 ? 'active' : ''}`}>Testimonials</a></li>
                    <li><a onClick={() => handleMenuClick(5)} className={`link ${activeButton === 5 ? 'active' : ''}`}>Food Order</a></li>
                    <li><a onClick={() => handleMenuClick(6)} className={`link ${activeButton === 6 ? 'active' : ''}`}>Contact Us</a></li>
                </ul>
                <div className="contact-infos">
                    <div className="socials">
                        <button className="facebook"><FaFacebookF className="icon" style={{color: "white"}} /></button>
                        <button className="twitter"><FaTwitter className="icon" style={{color: "white"}} /></button>
                        <button className="instagram"><FaInstagram className="icon" style={{color: "white"}} /></button>
                        <button className="skype"><FaSkype className="icon" style={{color: "white"}} /></button>
                        <button className="youtube"><FaYoutube className="icon" style={{color: "white"}} /></button>
                    </div>
                    <p>Call us: +216 58 233 389</p>
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
    .sidebar{
        width: 360px;
        height: 100vh;
        color: white;
        padding: 30px 0;
        background-color: #191919e0;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 999;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    img{
        width: 150px;
    }
    ul{
        margin: 0;
        height: 50%;
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: larger;
        font-weight: 600;
        letter-spacing: 2px;
        li{
            height: fit-content;
            a{
                position: relative;
                text-decoration: none;
                cursor: pointer;
                color: #b3b1b1;
                transition: color 500ms ease-in-out;
            }
            .active, a:hover{
                color: white;
            }
            .active:after, a:hover:after{
                content: "";
                position: absolute;
                z-index: -1;
                left: -10%;
                top: 13px;
                background:#B50000;
                width: 120%;
                height:10px;
                border-radius: 10px;
                animation-name: mymove;
                animation-duration: 500ms;
            }
            a:after{
                content: "";
                position: absolute;
                z-index: -1;
                left: -10%;
                top: 13px;
                background:#B50000;
                height:10px;
                border-radius: 10px;
                transform-origin: 100% 0;
                animation-name: reversemove;
                animation-duration: 500ms;
            }
            @keyframes mymove {
                0% {width: 0%;}
                100% {width: 120%;}
            }
            @keyframes reversemove {
                0% {width: 120%; scale: 100% 100%;}
                100% {width: 120%; scale: 0% 100%;}
            }
        }
    }
    .contact-infos{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        p{
            cursor: pointer;
            color: #b3b1b1;
            border-bottom: solid 2px transparent;
            padding-bottom: 2px;
            transition: all 500ms ease-in-out;
        }
        p:hover{
            border-bottom: solid 2px #B50000;
        }
    }
    .socials{
        width: 60%;
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
`

export default Sidebar;