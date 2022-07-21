import React from 'react'
import styled from 'styled-components';

function JobCard({logo, bg, name, loc, title, type, stack, salary}) {
    return (
        <JobCardStyled>
            <div className="card-container">
                <div className="card-top">
                    <img src={logo} alt="" />
                    <div className="c-top-text">
                        <h5>{name}</h5>
                        <p>{loc}</p>
                    </div>
                </div>
                <h4 className="card-title">{title}</h4>
                <p className="type" style={{color: bg}}>{type}</p>
                <p className="stack">{stack}</p>
                <div className="job-info">
                    <p>{salary} <span>/ Yearly</span></p>
                    <div className="btn">Apply Now</div>
                </div>
            </div>
        </JobCardStyled>
    )
}

const JobCardStyled = styled.div`
    background-color: var(--color-white);
    border-radius: 5px;
    transition: all 0.4s ease-in-out;
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.01);
    &:hover{
        box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.1);
        transform: translateY(-5px);
    }
    .card-container{
        padding: 1rem;
        .card-top{
            display: flex;
            align-items: center;
            padding-bottom: 1rem;
            .c-top-text{
                padding-left: 1rem;
                h5{
                    color: var(--color-dark);
                    transition: all .4s ease-in-out;
                    cursor: pointer;
                    font-size: 1rem;
                    &:hover{
                        color: var(--color-primary);
                    }
                }
                p{
                    font-size: .8rem;
                    padding-top: .3rem;
                }
            }
            img{
                padding: 1rem;
                background-color: var(--color-neutral-3);
                border-radius: 5px;
                width: 80px;
                height: 80px;
            }
        }
        .card-title{
            font-size: 1rem;
            cursor: pointer;
            color: var(--color-dark);
            transition: all .4s ease-in-out;
            padding-bottom: .5rem;
            &:hover{
                color: var(--color-primary);
            }
        }
        .type{
            padding-bottom: .5rem;
            font-weight: 600;
        }
        .stack{
            padding-bottom: .5rem;
            line-height: 1.5rem;
            width: 80%;
            font-size: .8rem;
        }
        .job-info{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 90%;
            p{
                color: var(--color-primary);
                font-size: .7rem;
                span{
                    color: #656565;
                    font-size: .8rem;
                }
            }
            .btn{
                background-color: var(--color-primary);
                font-weight: 600;
                text-align: center;
                border-radius: 5px;
                cursor: pointer;
                padding: .6rem .6rem;
                font-size: .7rem;
            }
        }
    }
    @media screen and (max-width: 600px){
        .card-top{
            img{
                width: 60px !important;
                height: 60px !important;
            }
            .c-top-text{
                h5{
                    font-size: .9rem !important;
                }
                p{
                    font-size: .7rem !important;
                }
            }
        }
        .card-title{
            font-size: .8rem !important;
        }
        .type{
            font-size: .7rem !important;
        }
        .stack{
            font-size: .7rem !important;
        }
        .job-info{
            p{
                font-size: .6rem !important;
                span{
                    font-size: .7rem !important;
                }
            }
            .btn{
                padding: .6rem .9rem;
                font-size: .7rem;
            }
        }
    }
    @media screen and (max-width: 414px){
        .card-top{
            img{
                width: 70px !important;
                height: 70px !important;
            }
            .c-top-text{
                h5{
                    font-size: 1rem !important;
                }
                p{
                    font-size: .8rem !important;
                }
            }
        }
        .card-title{
            font-size: .9rem !important;
        }
        .type{
            font-size: .8rem !important;
        }
        .stack{
            font-size: .9rem !important;
        }
        .job-info{
            p{
                font-size: .9rem !important;
                span{
                    font-size: 1rem !important;
                }
            }
            .btn{
                padding: .6rem 1rem;
                font-size: .8rem;
            }
        }
    }
`;

export default JobCard