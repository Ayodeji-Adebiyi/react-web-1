import React from 'react'
import styled from 'styled-components'

function StaffCard({img, bookmark, name, title, rating, rating_half, stack}) {
    return (
        <StaffCardStyled>
            <div className="staff-card-container">
                <img className='bookmark' src={bookmark} alt="" />
                <img src={img} alt="" />
                <p className="title">{title}</p>
                <div className="ratings-container">
                    <img src={rating} alt="" />
                    <img src={rating} alt="" />
                    <img src={rating} alt="" />
                    <img src={rating} alt="" />
                    <img src={rating_half} alt="" />
                </div>
                <p className="stack">{stack}</p>
                <div className="btn-profile">
                    View Profile
                </div>
            </div>

        </StaffCardStyled>
    )
}

const StaffCardStyled = styled.div`
    position: relative;
    background-color: #f7f7f7;
    border-radius: 5px;
    transition: all .4s ease-in-out;
    border: 1px solid #F7F7F7;
    .bookmark{
        position: absolute;
        top: 1.3rem;
        right: .8rem;
        width: 15px !important;
    }
    &:hover{
        border: 1px solid #F7F7F7;
        background-color: #fff;
        transition: all .4s ease-in-out;
        transform: translateY(-5px);
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    }
    .staff-card-container{
        padding: 3rem 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        img{
            width: 140px;
            border-radius: 5px;
            margin-bottom: 1rem;
        }
        h4{
            color: var(--color-dark);
            padding-bottom: .8rem;
        }
        .title{
            color: var(--color-primary);
            padding-bottom: 1rem;
            font-size: .8rem;
        }
        .ratings-container{
            display: flex;
            img{
                width: 20px;
            }
        }
        .stack{
            font-size: .7rem;
            line-height: .8rem;
            padding-bottom: 1rem;
            text-align: center;
        }
        .btn-profile{
            cursor: pointer;
            color: var(--color-primary);
            transition: all .4s ease-in-out;
            font-weight: 500;
            background-color: #fff;
            padding: .7rem 1.5rem;
            border-radius: 5px;
            border: 1px solid var(--color-primary);
            font-size: .7rem;
            &:hover{
                color: #fff;
                background-color: var(--color-primary);
            }
        }
    }
`;

export default StaffCard