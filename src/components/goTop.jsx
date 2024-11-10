import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

function GoTop({ handlePreventScroll, handleActiveButton }) {

    const goTopBtn = useRef(null)

    const scrollToTop = () => {
        handlePreventScroll(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      
        setTimeout(() => {
            handleActiveButton(0)
            handlePreventScroll(false);
        }, 1000)
    }

    useEffect(() => {
        const scrolling = () => {
            const animation = window.getComputedStyle(goTopBtn.current, null).getPropertyValue('animation-name')

            if(window.scrollY >= 695 && animation === 'hide'){
                goTopBtn.current.style.animationName = 'show'
            }else if((window.scrollY < 695 && animation === 'show')){
                goTopBtn.current.style.animationName = 'hide'
            }
        }
        window.addEventListener('scroll', scrolling)

        return () => {
            window.removeEventListener('scroll', scrolling)
        }
    }, [])

    return (
        <Container>
            <button ref={goTopBtn} onClick={() => scrollToTop()}>
                <div>
                    <MdOutlineKeyboardArrowUp style={{color: "#B50000", width: "24px", height: "24px"}} />
                </div>
            </button>
        </Container>
    )
}

const Container = styled.div`
    button{
        position: fixed;
        bottom: 100px;
        right: 30px;
        width: 40px;
        height: 40px;
        background-color: #b3b1b1;
        z-index: 1000;
        padding: 0;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-radius: 50%;
        transition: all 200ms ease;
        animation-name: show;
        animation-duration: 400ms;
        animation-fill-mode: forwards;
        div{
            width: fit-content;
            height: fit-content;
            display: flex;
            align-items: center;
            justify-content: center;
            animation-duration: 400ms;
            animation-fill-mode: forwards;
        }
    }
    button:hover{
        transform: scale(1.1);
        div{
            animation-name: anim;
        }
    }
    @keyframes anim {
        0% {transform: translateX(0) translateY(0)}
        20% {transform: translateX(0) translateY(-30px)}
        40% {transform: translateX(30px) translateY(-30px)}
        60% {transform: translateX(30px) translateY(30px)}
        80% {transform: translateX(0) translateY(30px)}
        100% {transform: translateX(0) translateY(0)}
    }
    @keyframes hide {
        0% {opacity: 1}
        100% {opacity: 0; z-index: -2}
    }
    @keyframes show {
        0% {opacity: 0; z-index: 1000}
        100% {opacity: 1}
    }
`

export default GoTop