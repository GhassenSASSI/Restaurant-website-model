import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import image from '../assets/pb2-1.jpeg'
import menubg from '../assets/mb2-1.jpeg'
import { RxTriangleRight } from "react-icons/rx";

function Menu({ updateComponents, handleActiveButton, preventScroll }) {

    const menu = useRef(null)
    const [pos, setPos] = useState(null)

    useEffect(() => updateComponents(menu.current), [])

    useEffect(() => {
        const handlePos = () => {
            const rect = menu.current.getBoundingClientRect()
            setPos(rect.top)
        }

        window.addEventListener('scroll', () => handlePos())

        return () => {
            window.removeEventListener('scroll', () => handlePos())
        }
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if(pos > 0 && pos < 150 && !preventScroll){
                handleActiveButton(3)
            }
        }

        handleScroll()
    }, [pos])

    return (
        <Container>
            <div ref={menu} className="menuContainer" style={{background: `url(${image})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                <div className="title">
                    <em>Fresh dough made daily, on the premises!</em>
                    <span>Our Menus</span>
                </div>
                <div className="content">
                    <div className='menu' style={{background: `url(${menubg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                        <img src={menubg} alt="Menu" />
                        <ul className='menuContent'>
                            <li>
                                <span><RxTriangleRight style={{color: "#B50000", width: "30px", height: "30px"}} /><p>Combination Soup</p></span>
                                <span>$10</span>
                            </li>
                            <li className='special'>
                                <span><RxTriangleRight style={{color: "#B50000", width: "30px", height: "30px"}} /><p>Leek and Potato Soup</p></span>
                                <span>$12</span>
                            </li>
                            <li>
                                <span><RxTriangleRight style={{color: "#B50000", width: "30px", height: "30px"}} /><p>Thai crab cakes</p></span>
                                <span>$17</span>
                            </li>
                            <li>
                                <span><RxTriangleRight style={{color: "#B50000", width: "30px", height: "30px"}} /><p>Braised puy lentils</p></span>
                                <span>$15</span>
                            </li>
                            <li>
                                <span><RxTriangleRight style={{color: "#B50000", width: "30px", height: "30px"}} /><p>Goats cheese</p></span>
                                <span>$22</span>
                            </li>
                            <li>
                                <span><RxTriangleRight style={{color: "#B50000", width: "30px", height: "30px"}} /><p>Portobello burger</p></span>
                                <span>$13</span>
                            </li>
                            <li>
                                <span><RxTriangleRight style={{color: "#B50000", width: "30px", height: "30px"}} /><p>Sweetcorn and risotto</p></span>
                                <span>$18</span>
                            </li>
                            <li>
                                <span><RxTriangleRight style={{color: "#B50000", width: "30px", height: "30px"}} /><p>Venison bolognaise</p></span>
                                <span>$21</span>
                            </li>
                            <li>
                                <span><RxTriangleRight style={{color: "#B50000", width: "30px", height: "30px"}} /><p>Breaded plaice fillet</p></span>
                                <span>$13</span>
                            </li>
                            <li>
                                <span><RxTriangleRight style={{color: "#B50000", width: "30px", height: "30px"}} /><p>Fillet of sea bass</p></span>
                                <span>$14</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    .menuContainer{
        width: 100%;
        padding:100px 10px 50px 380px;
        overflow: hidden;
        @media (max-width: 768px){
            padding-left: 10px;
        }
        .title{
            width: 100%;
            height: 186px;
            display: flex;
            flex-direction: column;
            align-items: center;
            em{
                color: white;
                font-size: 18px;
            }
            span{
                color: white;
                font-size: 50px;
                font-weight: 600;
            }
        }
        .content{
            width: 100%;
            padding: 0 10px 100px 10px;
            .menu{
                width: 100%;
                height: fit-content;
                min-height: 300px;
                overflow: hidden;
                position: relative;
                img{
                    object-fit: cover;
                    visibility: hidden;
                }
                ul.menuContent{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    color: white;
                    padding: 50px 50px 50px 35px;
                    z-index: 3;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-evenly;
                    li{
                        position: relative;
                        display: table;
                        span{
                            display: table-cell;
                        }
                        span:first-child{
                            position: relative;
                            overflow: hidden;
                            p{
                                position: relative;
                                display: inline;
                                font-size: 20px;
                                font-weight: 700;
                                margin: 0;
                                @media (max-width: 1024px){
                                    font-size: 14px;
                                }
                            }
                        }
                        span:first-child:after{
                            content: "";
                            position: absolute;
                            bottom: 12px;
                            margin-left: 8px;
                            width: 100%;
                            border-bottom: 1px dashed #ffffff80;
                        }
                        span + span{
                            text-align: right;
                            width: 1%;
                            vertical-align: bottom;
                            padding-left: 8px;
                            font-size: 24px;
                            font-weight: 200;
                            letter-spacing: 1px;
                            /* white-space: nowrap; */
                            @media (max-width: 1024px){
                                font-size: 20px;
                            }
                        }
                    }
                    li:nth-child(1):after{
                        content: "Mixed spinach, samphire, wild mushroom";
                    }
                    li:nth-child(2):after{
                        content: "Smoked cheddar and leek croquettes, truffle oil";
                    }
                    li:nth-child(3):after{
                        content: "Sweet chilli, lime and coriander mayonnaise";
                    }
                    li:nth-child(4):after{
                        content: "Fried halloumi, wild mushrooms, salsa verdi";
                    }
                    li:nth-child(5):after{
                        content: "Red onion jam, mixed leaves";
                    }
                    li:nth-child(6):after{
                        content: "Red onion jam, cheddar, triple cooked chips";
                    }
                    li:nth-child(7):after{
                        content: "Honey glazed root vegetables, crispy kale";
                    }
                    li:nth-child(8):after{
                        content: "Parmesan crisp, pappardelle, green beans";
                    }
                    li:nth-child(9):after{
                        content: "Chips, peas, tartare sauce";
                    }
                    li:nth-child(10):after{
                        content: "Samphire, aubergine, chilli and garlic oil";
                    }
                    li:after{
                        position: absolute;
                        top: 100%;
                        left: 30px;
                        color: #a7a7a7;
                        font-size: 14px;
                        font-weight: 700;
                        @media (max-width: 1024px){
                            left: 0;
                            font-size: 10px;
                            font-weight: 600;
                        }
                    }
                    .special span:first-child p:before{
                        content: "Special";
                        position: absolute;
                        top: -3px;
                        left: calc(100% + 5px);
                        background-color: #b50000;
                        padding: 3px;
                        font-size: 9px;
                        @media (max-width: 1024px){
                            font-size: 6px;
                        }
                    }
                }
            }
        }
        .menu:after{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to top, #000000e1, transparent);
        }
    }
`

export default Menu