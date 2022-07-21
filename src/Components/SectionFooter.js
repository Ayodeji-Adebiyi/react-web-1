import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../Layout';
import logo from '../img/logo1.svg';
/*eslint-disable*/

function SectionFooter() {
    return (
        <SectionFooterStyled>
            <InnerLayout>
                <div className="footer-inner">
                    <ul>
                        <div className="footer-title logo">
                            <img src={logo} alt="" />
                            <h4>JobsFndr</h4>
                        </div>
                        <div className="footer-text">
                            <p>
                            Lorem ipsum dolor sit,<br />
                            amet consectetur adipisicing elit. <br />
                            Esse quis nulla reiciendis.
                            </p>
                        </div>
                    </ul>
                    <ul>
                        <h4 className="footer-title">
                            Organization
                        </h4>
                        <li className="nav-item">
                            <a href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">News</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">New App</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Email Us</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Our Products</a>
                        </li>
                    </ul>
                    <ul>
                        <h4 className="footer-title">
                            Information
                        </h4>
                        <li className="nav-item">
                            <a href="#">External</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Partners</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Quick Read</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Job Listings</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Request</a>
                        </li>
                    </ul>
                    <ul>
                        <h4 className="footer-title">
                            Marketing
                        </h4>
                        <li className="nav-item">
                            <a href="#">Affiliate</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Blogs/News</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">New App</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Platforms</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Find Us</a>
                        </li>
                    </ul>
                    <ul>
                        <h4 className="footer-title">
                            Our Products
                        </h4>
                        <li className="nav-item">
                            <a href="#">Job Finder</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Notes App</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </InnerLayout>
            <p className="footer">
                © 2022 <span>JobsFndr</span> Inc. All Rights Reserved.
            </p>
        </SectionFooterStyled>
    )
}

const SectionFooterStyled = styled.footer`
    background-color: #272A33;
    .footer-inner{
        display: flex;
        justify-content: space-between;
        p{
            color: #d8dadf;
            line-height: 1.5rem;
        }
        .logo{
            display: flex;
            img{
                width: 30px;
                margin-top: -13px;
            }
            h4{
                margin-left: 10px;
            }
        }
        .footer-title{
            padding-bottom: 1.5rem;
            font-size: 1.2rem;
            cursor: default;
        }
        li{
            margin: 1rem 0;
            a{
                transition: all .4s ease-in-out;
                font-size: .8rem;
                color: #d8dadf;
                &:hover{
                    color: var(--color-primary);
                }
            }
        }
    }
    .footer{
        width: 70%;
        margin: 0 auto;
        text-align: center;
        padding: 2rem 0;
        border-top: 1px solid #cccccc1c;
        color: #d8dadf;
        span{
            color: var(--color-primary);
        }
    }
    @media screen and (max-width: 600px){
        .logo{
            img{
                width: 15px !important;
            }
        }
        .footer-text{
            p{
                font-size: .6rem !important;
            }
        }
        .footer-title{
            font-size: .7rem !important;
            padding-bottom: .5rem !important;	
        }
        li{
            a{
                font-size: .6rem !important;
            }
        }
    }
    @media screen and (max-width: 414px){
        .footer-inner{
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            grid-gap: 1rem !important;
        }
        .logo{
            img{
                width: 25px !important;
            }
        }
        .footer-text{
            p{
                font-size: .8rem !important;
            }
        }
        .footer-title{
            font-size: .9rem !important;
            padding-bottom: .5rem !important;	
        }
        li{
            a{
                font-size: .8rem !important;
            }
        }
    }
`;
export default SectionFooter