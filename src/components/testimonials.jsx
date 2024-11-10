import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import image from "../assets/se3-1.jpeg"
import student from "../assets/tes1-1.jpeg"
import designer from "../assets/ghassen.jpg"
import musician from "../assets/tes3-1.jpeg"
import business from "../assets/tes4-1.jpeg"

function Testimonials({ updateComponents, handleActiveButton, preventScroll }) {

    const testimonials = useRef(null)
    const [pos, setPos] = useState(null)

    useEffect(() => updateComponents(testimonials.current), [])

    useEffect(() => {
        const handlePos = () => {
            const rect = testimonials.current.getBoundingClientRect()
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
                handleActiveButton(4)
            }
        }

        handleScroll()
    }, [pos])

    return (
        <Container>
            <div ref={testimonials} className="testimonialsContainer" style={{background: `url(${image})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                <div className="title">
                    <em>Our happy customers</em>
                    <span>Testimonials</span>
                </div>
                <div className="content">
                    <div className='column'>
                        <div className="team">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. </p>
                            <span><h4>Maria Carey</h4> Student</span>
                            <img src={student} alt="" />
                        </div>
                        <div className="team">
                            <p>Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada.</p>
                            <span><h4>Ghassen Sassi</h4> Developer</span>
                            <img src={designer} alt="" />
                        </div>
                    </div>
                    <div className='column'>
                        <div className="team">
                            <p>Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
                            <span><h4>Adam Sands</h4> Musician</span>
                            <img src={musician} alt="" />
                        </div>
                        <div className="team">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci.</p>
                            <span><h4>Lisa Moon</h4> Businesswomen</span>
                            <img src={business} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    .testimonialsContainer{
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
            justify-content: space-evenly;
            @media (max-width: 480px){
                flex-direction: column;
                justify-content: start;
            }
            .column{
                width: 45%;
                height: fit-content;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                @media (max-width: 480px){
                    width: 100%;
                }
                .team{
                    position: relative;
                    background-color: #000000bf;
                    width: 100%;
                    height: fit-content;
                    padding: 50px 50px 60px 50px;
                    border-radius: 10px;
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 100px;
                    @media (min-width: 769px) and (max-width: 1024px){
                        padding: 10px 10px 60px 10px !important;
                    }
                    p, span{
                        text-align: center;
                    }
                    p{
                        font-size: 18px;
                        color: white;
                    }
                    span{
                        font-size: 16px;
                        color: #B50000;
                        font-weight: 700;
                    }
                    h4{
                        display: inline;
                        color: white;
                    }
                    img{
                        position: absolute;
                        top: calc(100% - 40px);
                        left: calc(50% - 40px);
                        width: 80px;
                        height: 80px;
                        border-radius: 50%;
                        outline: solid 10px #b500002d;
                    }
                }
            }
        }
    }
`

export default Testimonials