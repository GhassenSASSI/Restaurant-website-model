import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import image from '../assets/se6-1.jpeg'
import { GoTriangleDown } from "react-icons/go"
import GoogleMap from 'google-maps-react-markers'
import Marker from 'google-maps-react-markers'

function Contact({ updateComponents, handleActiveButton, preventScroll }) {

    const mapRef = useRef(null)
    const [mapReady, setMapReady] = useState(false)
    const contact = useRef(null)
    const [pos, setPos] = useState(null)

    const mapOptions = {
        disableDefaultUI: true, // Example option, customize as needed
        mapTypeId: 'roadmap'     // Example option, customize as needed
    }

    const coordinates = [
        { lat: 45.4046987, lng: 12.2472504, name: 'Marker 1' },
        { lat: 40.7128, lng: -74.0059, name: 'Marker 2' },
        // ... more markers
    ]

    const onGoogleApiLoaded = ({ map, maps }) => {
        mapRef.current = map
        setMapReady(true)
    }

    const onMarkerClick = (e, { markerId, lat, lng }) => {
        console.log('This is ->', markerId)
    
        mapRef.current.setCenter({ lat, lng })
    }

    useEffect(() => updateComponents(contact.current), [])

    useEffect(() => {
        const handlePos = () => {
            const rect = contact.current.getBoundingClientRect()
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
                handleActiveButton(6)
            }
        }

        handleScroll()
    }, [pos])

    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <Container>
            <div ref={contact} className="contactContainer" style={{background: `url(${image})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                <div className="contactUs">
                    <div className="title">
                        <em>Say hello ...</em>
                        <span>Contact Us</span>
                    </div>
                    <div className="content">
                        <form onSubmit={handleSubmit}>
                            <div className='name'>
                                <label htmlFor="">Your Name (required)</label>
                                <input type="text" />
                            </div>
                            <div className='email'>
                                <label htmlFor="">Your Email (required)</label>
                                <input type="email" />
                            </div>
                            <div className='subject'>
                                <label htmlFor="">Subject</label>
                                <input type="text" />
                            </div>
                            <div className='department'>
                                <label htmlFor="">Department</label>
                                <select name="" id="">
                                    <option value="">Order Pizza</option>
                                    <option value="">Request Big Order</option>
                                    <option value="">Support</option>
                                    <option value="">Other</option>
                                </select>
                                <GoTriangleDown style={{color: "#A7A7A7", width: "24px", height: "24px", position: "absolute", left: "93%", top: "42px", zIndex: "1"}}/>
                            </div>
                            <div className='message'>
                                <label htmlFor="">Your Message</label>
                                <textarea name="" id=""></textarea>
                            </div>
                            <button>Send</button>
                        </form>
                    </div>
                </div>
                <div className="findUs">
                    <div className="title">
                        <em>Our Address</em>
                        <span>Find Us</span>
                    </div>
                    <div style={{width: "100%", height: "480px", overflow: "hidden", borderRadius: "10px"}}>
                        <GoogleMap
                            apiKey=""
                            loading='async'
                            defaultCenter={{ lat: 45.4046987, lng: 12.2472504 }}
                            defaultZoom={5}
                            options={mapOptions}
                            mapMinHeight="100vh"
                            onGoogleApiLoaded={onGoogleApiLoaded}
                            //onChange={(map) => console.log('Map moved', map)}
                        >
                            {coordinates.map(({ lat, lng, name }, index) => (
                            <Marker
                                key={index}
                                lat={lat}
                                lng={lng}
                                markerId={name}
                                onClick={onMarkerClick}
                            />
                            ))}
                        </GoogleMap>
                    </div>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    .contactContainer{
        width: 100%;
        padding:100px 10px 50px 380px;
        overflow: hidden;
        display: flex;
        @media (max-width: 1024px){
                flex-direction: column;
        }
        @media (max-width: 768px){
            padding-left: 10px;
        }
        .contactUs{
            width: 70%;
            margin-bottom: 50px;
            @media (max-width: 1024px){
                width: 100%;
            }
            form{
                width: 100%;
                padding-right: 30px;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                @media (max-width: 1024px){
                    padding-right: 0;
                }
                div{
                    margin-bottom: 20px;
                    display: flex;
                    flex-direction: column;
                    label{
                        color: #ffffff69;
                        margin-bottom: 5px;
                        font-size: 16px;
                    }
                    input, select, textarea{
                        padding: 12px;
                        border-radius: 6px;
                        background-color: #fff3;
                        color: white;
                        border: none;
                        outline: solid 1px transparent;
                    }
                    textarea{
                        min-height: 160px;
                    }
                    select option{
                        color: black;
                    }
                    input:focus-visible, select:focus-visible, textarea:focus-visible{
                        outline-color: #B50000;
                    }
                    select{
                        appearance: none;
                        z-index: 2;
                    }
                }
                .name, .email{
                    width: 48%;
                }
                .subject, .department, .message{
                    width: 100%;
                }
                .department{
                    position: relative;
                }
                button{
                    width: 73px;
                    height: 43.5px;
                    font-size: 14px;
                    background-color: #B50000;
                    border: none;
                    padding: 0;
                    color: white;
                    font-weight: 400;
                    border-radius: 30px;
                    transition: all 300ms ease-in-out;
                }
                button:hover{
                    color: #B50000;
                    background-color: white;
                }
            }
        }
        .findUs{
            width: 30%;
            margin-bottom: 50px;
            @media (max-width: 1024px){
                width: 100%;
                padding: 0 50px;
            }
        }
        .contactUs .title, .findUs .title{
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
    }
`

export default Contact