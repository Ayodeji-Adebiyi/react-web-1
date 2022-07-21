import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Layout';

function SectionSubscribe() {
    return (
        <SectionSubscribeStyled>
            <InnerLayout>
                <div className="sub-container">
                    <div className="left-side">
                        <h2>Subscribe to our newsletter <br /> for the latest news.</h2>
                    </div>
                    <div className="right-side">
                        <div className="input-control">
                            <input type="text" placeholder='Enter Your Email' />
                            <div className="s-btn">
                                Subscribe Now
                            </div>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </SectionSubscribeStyled>
    )
}


const SectionSubscribeStyled = styled.section`
    background-color: var(--color-primary);
    .sub-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 3rem;
        .left-side{
            display: flex;
            align-items: center;
            h2{
                font-size: 1.8rem;
                line-height: 3rem;
            }
        }
        .right-side{
            display: flex;
            align-items: center;
        }
        .input-control{
            width: 100%;
            font-weight: 500;
            position: relative;
            input{
                width: 100%;
                font-family: inherit;
                font-size: inherit;
                padding: 1rem 1.5rem;
                outline: none;
                border: none;
                border-radius: 5px;
            }
            .s-btn{
                position: absolute;
                top: 50%;
                right: .2rem;
                transform: translateY(-50%);
                padding: .5rem 2rem;
                cursor: pointer;
                border-radius: 5px;
                transition: all 0.4s ease-in-out;
                background-color: var(--color-dark);
                &:hover{
                    background-color: var(--color-primary);
                }
            }
        }
    }
    @media screen and (max-width: 600px){
        input{
            font-size: .7rem !important;
        }
        .left-side{
            h2{
                font-size: 1rem !important;
                line-height: 1.5rem !important;
            }
        }
        .s-btn{
            padding: .5rem .5rem !important;
            font-size: .7rem !important;
        }
    }
    @media screen and (max-width: 414px){
        .sub-container{
            grid-template-columns: repeat(1, 1fr) !important;
            grid-gap: 1rem !important;
        }
        input{
            font-size: .8rem !important;
        }
        .left-side{
            width: 100% !important;
            display: inline-block !important;
            h2{
                font-size: 1.3rem !important;
                line-height: 1.3rem !important;
                text-align: center !important;
            }
        }
        .right-side{
            width: 70% !important;
            display: inline-block !important;
            margin: 0 auto !important;
        }
        .s-btn{
            padding: .5rem .7rem !important;
            font-size: .6rem !important;
        }
    }
`;
export default SectionSubscribe