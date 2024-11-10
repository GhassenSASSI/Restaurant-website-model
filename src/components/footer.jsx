import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <Container>
            <div className="ordernow">
                <h4>ORDER NOW</h4>
                <a href="#">+216 58 233 389</a>
            </div>
            <div className="copyright">
                <p>Copyright © 2024 Xtra Theme. All Rights Reserved.</p>
            </div>
        </Container>
    )
}

const Container = styled.div`
    .ordernow, .copyright{
        padding:10px 10px 10px 380px;
        overflow: hidden;
        @media (max-width: 768px){
            padding-left: 10px;
        }
    }
    .ordernow{
        width: 100%;
        min-height: 326px;
        background-color: #B50000;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h4{
            color: white;
        }
        a{
            font-size: 54px;
            text-decoration: none;
            color: white;
            text-align: center;
            transition: color 400ms ease-in-out;
        }
        a:hover{
            color: #b3b1b1;
        }
    }
    .copyright{
        width: 100%;
        min-height: 72px;
        background-color: #171717;
        display: flex;
        align-items: center;
        justify-content: center;
        p{
            width: fit-content;
            color: #b3b1b1;
            text-align: center;
            margin: 0;
        }
    }
`

export default Footer