import React, { useRef, useEffect, useState, useLayoutEffect } from 'react'
import styled from 'styled-components';
import image from '../assets/se2-1.jpeg'
import photo1 from '../assets/gallery4-1.jpeg'
import photo2 from '../assets/p4-1-1-600x600.jpeg'
import photo3 from '../assets/p3-11.jpeg'
import photo4 from '../assets/p2-11.jpeg'
import photo5 from '../assets/gallery1-1.jpeg'
import photo6 from '../assets/p1-11.jpeg'
import { IoSearch } from "react-icons/io5";

function Gallery({ updateComponents, handleActiveButton, preventScroll }) {

    const gallery = useRef(null)
    const [pos, setPos] = useState(null)

    useEffect(() => updateComponents(gallery.current), [])

    useEffect(() => {
        const handlePos = () => {
            const rect = gallery.current.getBoundingClientRect()
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
                handleActiveButton(2)
            }
        }

        handleScroll()
    }, [pos])

  return (
    <Container>
        <div ref={gallery} className="galleryContainer" style={{background: `url(${image})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
            <div className='left'>
                <div style={{width: "50%"}}>
                    <div className='overlay'><IoSearch className='icon' style={{color: "white", width: "40px", height: "40px"}} /></div>
                    <img src={photo1} style={{width: "100%"}} alt="" />
                </div>
                <div style={{width: "50%"}}>
                    <div className='overlay'><IoSearch style={{color: "white", width: "40px", height: "40px"}} /></div>
                    <img src={photo2} style={{width: "100%"}} alt="" />
                </div>
                <div style={{width: "100%", aspectRatio: "1/1"}}>
                    <div className='overlay'><IoSearch style={{color: "white", width: "40px", height: "40px"}} /></div>
                    <img src={photo4} style={{width: "100%", height: "100%", objectFit: "cover"}} alt="" />
                </div>
            </div>
            <div className='right'>
                <div style={{width: "100%"}}>
                    <div className='overlay'><IoSearch style={{color: "white", width: "40px", height: "40px"}} /></div>
                    <img src={photo3} style={{width: "100%"}} alt="" />
                </div>
                <div style={{width: "50%"}}>
                    <div className='overlay'><IoSearch style={{color: "white", width: "40px", height: "40px"}} /></div>
                    <img src={photo5} style={{width: "100%"}} alt="" />
                </div>
                <div style={{width: "50%", aspectRatio: "1/1"}}>
                    <div className='overlay'><IoSearch style={{color: "white", width: "40px", height: "40px"}} /></div>
                    <img src={photo6} style={{width: "100%", height: "100%", objectFit: "cover"}} alt="" />
                </div>
            </div>
        </div>
    </Container>
  )
}

const Container = styled.div`
    .galleryContainer{
        width: 100%;
        min-height: 200px;
        padding:100px 10px 50px 380px;
        overflow: hidden;
        display: flex;
        @media (max-width: 768px){
            padding-left: 10px;
        }
        @media (max-width: 480px){
            flex-direction: column;
        }
        .left, .right{
            width: 50%;
            height: fit-content;
            display: flex;
            flex-wrap: wrap;
            @media (max-width: 768px){
                flex-direction: column;
                div{
                    width: 100% !important;
                }
            }
            @media (max-width: 480px){
                width: 100%;
            }
            div{
                position: relative;
            }
            img{
                border-radius: 5px;
                position: relative;
                transition: backdrop-filter 500ms ease-in-out;
            }
            .overlay{
                position: absolute;
                top: 5px;
                left: 5px;
                width: calc(100% - 10px);
                height: calc(100% - 10px);
                background-color: #00000070;
                padding: 5px;
                border-radius: 5px;
                cursor: pointer;
                opacity: 0;
                z-index: 2;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: all 500ms ease-in-out;
            }
            .overlay:hover{
                backdrop-filter: blur(2px);
                opacity: 1;
            }
        }
        .left > *, .right > *{
            padding: 5px;
        }
    }
`

export default Gallery