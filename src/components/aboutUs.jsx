import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import image from "../assets/p5-1.jpeg"
import chefImage from "../assets/chef-1.jpeg"
import { FaCheck } from "react-icons/fa6";
import { LuClock } from "react-icons/lu";
import { AiFillLike } from "react-icons/ai";

function AboutUs({ updateComponents, handleActiveButton, preventScroll }) {

    const [mousePosition, setMousePosition] = useState({ x: null, y: null })
    const [mouseOver, setMouseOver] = useState(false)
    const pic = useRef(null)
    const about = useRef(null)
    const [pos, setPos] = useState(null)

    useEffect(() => {
        const updateMousePosition = (e) => {
            if(mouseOver){
                setMousePosition({ x: e.pageX - pic.current.offsetLeft - (pic.current.offsetWidth / 2), y: e.pageY - pic.current.offsetTop - (pic.current.offsetHeight / 2) })
                const rotateX = mousePosition.y / 100
                const rotateY = mousePosition.x / -100
                pic.current.style.transform = `perspective(300px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
            }else{
                pic.current.style.transform = ""
            }
        }

        window.addEventListener('mousemove', updateMousePosition)

        return () => {
            window.removeEventListener('mousemove', updateMousePosition)
        }
    }, [mouseOver, mousePosition])

    useEffect(() => {
        const handleMouseOver = () => {
          setMouseOver(true)
        };
        const handleMouseOut = () => {
            setMouseOver(false)
        };
    
        const imgElement = pic.current;
        if (imgElement) {
          imgElement.addEventListener('mouseover', handleMouseOver);
          imgElement.addEventListener('mouseout', handleMouseOut);
        }
    
        return () => {
          if (imgElement) {
            imgElement.removeEventListener('mouseover', handleMouseOver);
            imgElement.removeEventListener('mouseout', handleMouseOut);
          }
        };
    }, []);

    useEffect(() => {
        if(!mouseOver){
            pic.current.style.transition = "200ms ease-in"
            setTimeout(() => {
                pic.current.style.transition = ""
            }, 200)
        }
    }, [mouseOver])

    useEffect(() => updateComponents(about.current), [])

    useEffect(() => {
        const handlePos = () => {
            const rect = about.current.getBoundingClientRect()
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
                handleActiveButton(1)
            }
        }

        handleScroll()
    }, [pos])

    return (
        <Container>
            <div ref={about} className="aboutContainer" style={{background: `url(${image})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                <div className="title">
                    <em>About our team</em>
                    <span>Who We Are ?</span>
                </div>
                <div className="content">
                    <div className='description'>
                        <p>Cras ultricies ligula sed magna dictum porta. Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                        <div className="bars">
                            <div className='food'>
                                <p><FaCheck style={{color: "#B50000"}} /><span>Food Quality</span></p>
                                <span className='percentage'></span>
                            </div>
                            <div className='delivery'>
                                <p><LuClock style={{color: "#B50000"}} /><span>Delivery Time</span></p>
                                <span className='percentage'></span>
                            </div>
                            <div className='client'>
                                <p><AiFillLike style={{color: "#B50000"}} /><span>Client Satisfaction</span></p>
                                <span className='percentage'></span>
                            </div>
                        </div>
                    </div>
                    <img ref={pic} src={chefImage} alt="Chef" />
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    .aboutContainer{
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
            display: flex;
            justify-content: space-around;
            @media (max-width: 1024px) {
                flex-direction: column;
                align-items: center;
                .description{
                    width: 95%;
                }
                img{
                    width: 95% !important;
                    margin-top: 50px;
                }
            }
            div{
                width: 45%;
                padding: 10px;
                p{
                    color: white;
                    font-size: 14px;
                    line-height: 35px;
                    padding-bottom: 30px;
                }
                .bars{
                    width: 100%;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 30px;
                    div{
                        width: 100%;
                        padding: 0;
                        p{
                            color: white;
                            padding: 0;
                            font-size: 16px;
                            font-weight: 700;
                            letter-spacing: 2px;
                            margin: 0 0 10px 0;
                            line-height: normal;
                            display: flex;
                            align-items: center;
                            gap: 6px;
                        }
                        .percentage{
                            position: relative;
                            display: block;
                            width: 100%;
                            height: 6px;
                            background-color: #292929;
                            border-radius: 5px;
                        }
                        .percentage:before{
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 0;
                            height: 100%;
                            background-image: linear-gradient(to right,#b500001e,#B50000);
                            border-radius: 5px;
                            animation-duration: 1s;
                            animation-delay: 500ms;
                            animation-fill-mode: forwards;
                        }
                        .percentage:after{
                            position: absolute;
                            top: -12px;
                            height: 30px;
                            width: 56px;
                            background-color: #B50000;
                            border-radius: 30px;
                            color: white;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            animation-duration: 1s;
                            animation-delay: 500ms;
                            animation-fill-mode: forwards;
                        }
                    }
                    .food .percentage:before{
                        //width: 100%;
                        width: 0;
                        animation-name: moveFood;
                    }
                    .food .percentage:after{
                        content: '100%';
                        //left: calc(100% - 28px);
                        left: -28px;
                        animation-name: moveAfterFood;
                    }
                    .delivery .percentage:before{
                        //width: 90%;
                        width: 0;
                        animation-name: moveDelivery;
                    }
                    .delivery .percentage:after{
                        content: '90%';
                        //left: calc(90% - 28px);
                        left: -28px;
                        animation-name: moveAfterDelivery;
                    }
                    .client .percentage:before{
                        //width: 96%;
                        width: 0;
                        animation-name: moveClient;
                    }
                    .client .percentage:after{
                        content: '96%';
                        //left: calc(96% - 28px);
                        left: -28px;
                        animation-name: moveAfterClient;
                    }
                    @keyframes moveFood {
                            0% {width: 0}
                            100% {width: 100%}
                    }
                    @keyframes moveDelivery {
                            0% {width: 0}
                            100% {width: 90%}
                    }
                    @keyframes moveClient {
                            0% {width: 0}
                            100% {width: 96%}
                    }
                    @keyframes moveAfterFood {
                            0% {left: -28px}
                            100% {left: calc(100% - 28px)}
                    }
                    @keyframes moveAfterDelivery {
                            0% {left: -28px}
                            100% {left: calc(90% - 28px)}
                    }
                    @keyframes moveAfterClient {
                            0% {left: -28px}
                            100% {left: calc(96% - 28px)}
                    }
                }
            }
            img{
                @media (max-width: 768px){
                    width: 80% !important;
                }
                width: 50%;
                padding: 10px;
                height: fit-content;
                border-radius: 15px;
            }
        }
    }
`

export default AboutUs