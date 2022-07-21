import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Layout';
import google from '../img/googleappstore.png'
import apple from '../img/appstore.png'
import business from '../img/business.jpg'



function SectionDownloads() {
    return (
        <SectionDownloadsStyled>
            <div className="downloads-overlay"></div>
            <InnerLayout>
                <div className="downloads-container">
                    <h2>New Version Available</h2>
                    <h1>
                        Download Our Mobile App. <br />
                        It's Simple and Better Than Ever
                    </h1>
                    <div className="store-buttons">
                        <div className="store-button google">
                            <img src={google} alt="" />
                        </div>
                        <div className="store-button apple">
                            <img src={apple} alt="" />
                        </div>
                    </div>
                </div>

            </InnerLayout>
        </SectionDownloadsStyled>
    )
}

const SectionDownloadsStyled = styled.section`
    background: url(${business});
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    position: relative;
    text-align: center;
    .downloads-overlay{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%; 
        background-color: #27ae60f2;
    }

    .downloads-container{
        position: relative;
        z-index: 7;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h1{
            font-size: 3rem;
            padding-top: 2rem;
        }
        .store-buttons{
            display: flex;
            padding-top: 1.5rem;
            .google, .apple{
                border-radius: 5px;
                cursor: pointer;
                padding: 1rem 2rem;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: var(--color-white);
                img{
                    width: 80px;
                }
            }
            .apple{
                margin-left: 1rem;
            }
        }
    }
    @media screen and (max-width: 600px){
        h1{
            font-size: 1.5rem !important;
        }
        .google, .apple{
            padding: .5rem 1.5rem;
            img{
                width: 60px;
            }
        }
    }
`;
export default SectionDownloads