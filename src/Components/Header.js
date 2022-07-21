import React from 'react'
import styled from 'styled-components';
import logo from '../img/logo1.svg';
import hero from '../img/hero.jpg';
import search from '../img/search.svg';
/*eslint-disable*/
function Header() {
    return (
        <HeaderStyled>
            <nav className="navigation">
                <div className="nav-wrapper">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <ul className="nav-items">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">New Jobs</a>
                        </li>
                        <li>
                            <a href="#">Find Jobs</a>
                        </li>
                        <li>
                            <a href="#">News</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                    <a href="#" className="cta-btn">+ Create Account</a>
                </div>
            </nav>
            <div className="header-content">
                <h1>
                    Over <span>10 000</span> jobs available <br />
                    You can choose your dream job
                </h1>
                <p className="main-paragraph">
                    Find great jobs to build your future career. Join us and gain access to all jobs on this platform
                </p>
                <div className="input-control">
                    <input type="text" placeholder="Job Title or Keywords" name="" id="" />
                    <select name="Location" id="Location">
                        <option value="">Lagos</option>
                        <option value="">Oyo</option>
                        <option value="">Abuja</option>
                        <option value="">Ondo</option>
                        <option value="">Ekiti</option>
                    </select>
                    <select name="jobs" id="jobs">
                        <option value="dev">Game Development</option>
                        <option value="dev">Game Design</option>
                        <option value="dev">Web Design</option>
                        <option value="dev">Web Development</option>
                        <option value="dev">UI/UX</option>
                    </select>
                    <button className="search-btn">
                        <img src={search} alt="" />
                    </button>
                </div>
            </div>
        </HeaderStyled>
    )
}


const HeaderStyled = styled.header`
    min-height: 90vh;
    position: relative;
    background: linear-gradient(to top, rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(${hero}) no-repeat;
    background-size: cover;
    .navigation{
        border-bottom: 1px solid #f4f7f773;
        .nav-wrapper{
            margin: 0 10rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            min-height: 10vh;
        }
    .logo{
        img{
            width: 30px;
        }
    }
    ul{
        display: flex;
        align-items: center;
        li{
            margin: 0 1rem;
        }
    }
    .cta-btn{
        display: inline-block;
        background-color: var(--color-primary);
        padding: .5rem 1.2rem;
        border-radius: 7px;
        text-align: center;
    }
    }

    .header-content{
        position: absolute;
        top: 50%;
        left: 50%;
        text-align: center;
        transform: translate(-50%, -50%);
        width: 60%;
        h1{
            font-size: 2rem;
            span{
                font-size: 2.5rem;
                color: var(--color-primary);
            }
        }
        .main-paragraph{
            padding: .8rem;
            color: var(--color-white);
        }
        .input-control{
            display: flex;
            justify-content: center;
            width: 100%;
            input, select{
                background-color: var(--color-white);
                padding: .7rem;
                border: none;
                outline: none;
                margin-right: .5rem;
                border-radius: 5px;
                font-size: inherit;
                width: 40%;
                color: #a1a1a1;
                font-weight: 500;
            }
            input[type="text"]::placeholder{
                color: #a1a1a1;
            }
            .search-btn{
                background-color: var(--color-primary);
                outline: none;
                border: none;
                padding: 0.5rem 1.5rem;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 5px;
                cursor: pointer;
            }
        }
    }
    @media screen and (max-width: 600px) { 
        .nav-wrapper{
            margin: 0 3rem !important;
        }
        .logo{
            img{
                width: 20px !important;
            }
        }
        .header-content{
            width: 85% !important;
            input, select{
                font-size: .65rem !important;
            }
            h1{
                font-size: 1.5rem !important;
                span{
                    font-size: 2rem !important;
                }
            }
            p{
                font-size: .8rem !important;
            }
        }
        .nav-items{
            li{
                font-size: .7rem !important;
                margin: 0 .5rem !important;
            }
        }
        .cta-btn{
            padding: .5rem 1rem !important;
            font-size: .7rem !important;
        }
    }
    @media screen and (max-width: 414px) {
        .nav-wrapper{
            margin: 0 .5rem !important;
        }
        .logo{
            img{
                width: 25px !important;
            }
        }
        .header-content{
            width: 90% !important;
            input, select{
                font-size: .6rem !important;
                width: 70% !important;
            }
            h1{
                font-size: 1.5rem !important;
                span{
                    font-size: 2rem !important;
                }
            }
            p{
                font-size: .8rem !important;
            }
        }
        .nav-items{
            li{
                font-size: .6rem !important;
                margin: 0 .5rem !important;
            }
        }
        .cta-btn{
            padding: .5rem .5rem !important;
            font-size: .6rem !important;
        }
    }

`;
export default Header;