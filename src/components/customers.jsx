import React from 'react'
import styled from 'styled-components'
import pic1 from '../assets/package3-1.jpeg'
import pic2 from '../assets/package4-1.jpeg'
import pic3 from '../assets/package5-1.jpeg'
import pic4 from '../assets/package8-1.jpeg'
import { IoSearch } from "react-icons/io5";

function Customers() {
    return (
        <Container>
            <div className="CustomersContainer">
                <div className="title">
                    <em>Faster order with discount</em>
                    <span>Online Order</span>
                </div>
                <div className="content">
                    <div className='imageContainer'>
                        <img src={pic1} alt="" />
                        <div className='overlay'>
                            <IoSearch className='icon' style={{color: "white", width: "40px", height: "40px"}} />
                        </div>
                    </div>
                    <div className='imageContainer'>
                        <img src={pic2} alt="" />
                        <div className='overlay'>
                            <IoSearch className='icon' style={{color: "white", width: "40px", height: "40px"}} />
                        </div>
                    </div>
                    <div className='imageContainer'>
                        <img src={pic3} alt="" />
                        <div className='overlay'>
                            <IoSearch className='icon' style={{color: "white", width: "40px", height: "40px"}} />
                        </div>
                    </div>
                    <div className='imageContainer'>
                        <img src={pic4} alt="" />
                        <div className='overlay'>
                            <IoSearch className='icon' style={{color: "white", width: "40px", height: "40px"}} />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    .CustomersContainer{
        width: 100%;
        padding:100px 10px 50px 380px;
        background-color: #171717;
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
                aspect-ratio: 1/1;
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
                    background-color: transparent;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background-color 400ms ease;
                    .icon{
                        transform: scale(0);
                        opacity: 0;
                        transition: all 300ms ease-in;
                    }
                }
            }
            .imageContainer:hover{
                img{
                    transform: scale(1.3) rotate(15deg);
                }
                .overlay{
                    background-color: #0000007e;
                    .icon{
                        transform: scale(1);
                        opacity: 1;
                    }
                }
            }
        }
    }
`

export default Customers