import React from "react";
import styled from 'styled-components';
import { HiHome } from "react-icons/hi2";
import { MdMenuBook } from "react-icons/md";
import { FaShoppingBasket } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const BotNavbar = ({ scrollToElement, components }) => {
    return(
        <Container>
            <ul>
                <li onClick={() => scrollToElement(components[0])}>
                    <HiHome style={{ color: "white", width: "25px", height: "25px" }} />
                    <span>Welcome</span>
                </li>
                <li onClick={() => scrollToElement(components[3])}>
                    <MdMenuBook style={{ color: "white", width: "25px", height: "25px" }} />
                    <span>Menu</span>
                </li>
                <li onClick={() => scrollToElement(components[5])}>
                    <FaShoppingBasket style={{ color: "white", width: "25px", height: "25px" }} />
                    <span>Order</span>
                </li>
                <li onClick={() => scrollToElement(components[6])}>
                    <FaPhone style={{ color: "white", width: "22px", height: "22px" }} />
                    <span>Contact</span>
                </li>
            </ul>
        </Container>
    );
}

const Container = styled.div`
    @media (min-width: 768px) {
        display: none;
    }
    ul{
        width: 100vw;
        height: 82px;
        position: fixed;
        left: 0;
        bottom: 0;
        background-color: #B50000;
        padding: 0;
        margin: 0;
        z-index: 99;
        list-style: none;
        display: flex;
        align-items: center;
        li{
            width: 25%;
            height: 100%;
            border-right: solid 1px #2b29292e;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            gap: 5px;
            transition: background-color 500ms ease-in-out;
            span{
                color: white;
                font-size: small;
            }
        }
        li:hover{
            background-color: #0a0a0a;
        }
    }
`

export default BotNavbar;