import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components';
import image1 from '../assets/p1-11.jpeg'
import image2 from '../assets/p2-11.jpeg'
import image3 from '../assets/p3-11.jpeg'

const Carousel = ({ updateComponents, handleActiveButton, preventScroll }) => {

    const carousel = useRef(null)
    const [pos, setPos] = useState(null)

    useEffect(() => updateComponents(carousel.current), [])

    useEffect(() => {
        const handlePos = () => {
            const rect = carousel.current.getBoundingClientRect()
            setPos(rect.top)
        }

        window.addEventListener('scroll', () => handlePos())

        return () => {
            window.removeEventListener('scroll', () => handlePos())
        }
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if(pos > -100 && pos < 150 && !preventScroll){
                handleActiveButton(0)
            }
        }

        handleScroll()
    }, [pos])

    return(
        <Container>
            <div ref={carousel} id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={image1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={image2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={image3} className="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
    min-height: 695px;
    .carousel, .carousel-inner, .carousel-item{
        height: 695px;
    }
    img{
        height: 100%;
        object-fit: cover;
    }
    .carousel-indicators{
        width: 100px;
        height: 50px;
        left: auto !important;
        margin-right: 40px !important;
        margin-bottom: 30px !important;
        align-items: center;
        justify-content: space-evenly;
    }
    .carousel-indicators button{
        width: 15px !important;
        height: 15px !important;
        border-radius: 50%;
        border: solid 0 !important;
        outline: solid 2px transparent;
        transition: all 0.3s ease-in-out;
    }
    .carousel-indicators button:hover,
    .carousel-indicators .active{
        width: 5px !important;
        height: 5px !important;
        outline: solid 2px white;
        border: solid 5px transparent !important;
        opacity: 1 !important;
    }
`

export default Carousel;