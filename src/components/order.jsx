import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import image from '../assets/parallax-1.jpeg'
import pic1 from '../assets/package3-1.jpeg'
import pic2 from '../assets/package4-1.jpeg'
import pic3 from '../assets/package5-1.jpeg'
import pic4 from '../assets/package8-1.jpeg'

function Order({ updateComponents, handleActiveButton, preventScroll }) {

    const order = useRef(null)
    const [pos, setPos] = useState(null)

    useEffect(() => updateComponents(order.current), [])

    useEffect(() => {
        const handlePos = () => {
            const rect = order.current.getBoundingClientRect()
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
                handleActiveButton(5)
            }
        }

        handleScroll()
    }, [pos])

    return (
        <Container>
            <div ref={order} className="orderContainer" style={{background: `url(${image})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                <div className="title">
                    <em>Faster order with discount</em>
                    <span>Online Order</span>
                </div>
                <div className="content">
                    <div className='imageContainer'>
                        <img src={pic1} alt="" />
                        <div className='overlay'>
                            <p className='price'>$35</p>
                            <h3 className='description'>Ultimate Product</h3>
                        </div>
                    </div>
                    <div className='imageContainer'>
                        <img src={pic2} alt="" />
                        <div className='overlay'>
                            <p className='price'>$35</p>
                            <h3 className='description'>Special Pack</h3>
                        </div>
                    </div>
                    <div className='imageContainer'>
                        <img src={pic3} alt="" />
                        <div className='overlay'>
                            <p className='price'>$22</p>
                            <h3 className='description'>Product 2</h3>
                        </div>
                    </div>
                    <div className='imageContainer'>
                        <img src={pic4} alt="" />
                        <div className='overlay'>
                            <p className='price'>$31</p>
                            <h3 className='description'>Unlimited Box</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    .orderContainer{
        width: 100%;
        padding:100px 10px 50px 380px;
        overflow: hidden;
        @media (max-width: 768px){
            padding-left: 75px;
            padding-right: 75px;
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
                text-align: center;
            }
        }
        .content{
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            .imageContainer{
                position: relative;
                width: 22.5%;
                aspect-ratio: 1/1.66;
                margin-bottom: 30px;
                overflow: hidden;
                cursor: pointer;
                display: flex;
                justify-content: center;
                @media (max-width: 1024px){
                    width: 47.5%;
                }
                img{
                    width: 166%;
                    transition: all 400ms ease-in;
                }
                .overlay{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    background-color: #00000074;
                    padding-top: 70%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    transition: background-color 600ms ease-in;
                    .description{
                        color: white;
                        font-weight: 400;
                        text-align: center;
                        transition: all 300ms ease-in;
                    }
                    .price{
                        width: 60%;
                        background-color: white;
                        color: #b50000;
                        text-align: center;
                        font-size: 18px;
                        font-weight: 700;
                        border-radius: 20px;
                        padding: 8px 0;
                        transition: all 600ms ease-in;
                    }
                    @media (max-width: 480px){
                        padding-top: 40%;
                        .description{
                            font-size: medium;
                        }
                    }
                }
            }
            .imageContainer:hover{
                img{
                    transform: scale(1.3) rotate(15deg);
                }
                .overlay{
                    background-color: transparent;
                    .price{
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    .description{
                        opacity: 0;
                        transform: translateY(-60px);
                    }
                }
            }
        }
    }
`

export default Order