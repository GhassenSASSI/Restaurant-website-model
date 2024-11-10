import React from "react";
import styled from 'styled-components';
import logo from '../assets/logo-rest2.png'
import { RxDoubleArrowLeft } from "react-icons/rx";
import { FaPhoneAlt } from "react-icons/fa";


const TopNavbar = ({ showAndHideTab, changeFirstLoad, changeVisibility }) => {

    const handleButtonClick = () => {
        showAndHideTab()
        changeFirstLoad()
        changeVisibility()
    };

    return(
        <Container>
            <div className="menu">
                <img src={logo} alt="logo" />
                <div>
                    <button><FaPhoneAlt style={{color: "#B50000", width: "25px", height: "25px"}} /></button>
                    <button onClick={ handleButtonClick }><RxDoubleArrowLeft style={{color: "#B50000", width: "35px", height: "35px"}} /></button>
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
    @media (min-width: 768px) {
        display: none;
    }
    width: 100vw;
    height: 110px;
    background-color: #191919e0;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    .menu{
        width: 100%;
        height: 100%;
        padding: 0 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img{
            width: 70px;
        }
        div{
            width: 120px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            button{
                padding: 0;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-color: white;
            }
        }
    }
`

export default TopNavbar;