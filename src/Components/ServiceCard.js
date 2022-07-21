import React from 'react'
import styled from 'styled-components'

function ServiceCard({icon, name, paragraph}) {
    return (
        <ServiceCardStyled>
            <div className="image">
                <img src={icon} alt="" />
            </div>
            <h4>{name}</h4>
            <p>{paragraph}</p>
        </ServiceCardStyled>
    )
}

const ServiceCardStyled = styled.div`
    text-align: center;
    &:hover{
        .image{
            border: 2px dashed var(--color-primary);
        }
    }
    .image{
        border-radius: 5px;
        border: 2px dashed #F4F7F7;
        display: flex;
        justify-content: center;
        align-items: center;
        display: inline-block;
        transition: all 0.4s ease-in-out;
        img{
            width: 75px;
            padding: 1.5rem;
            background-color: #F4F7F7;
            margin: 1rem;
            border-radius: 5px;
        }
    }
    h4{
        color: var(--color-dark);
        padding: 1rem 0;
    }
    p{
        font-size: .8rem;
        line-height: 1.5rem;
    }

    @media screen and (max-width: 600px){
        h4{
            font-size: .6rem !important;
        }
        p{
            font-size: .5rem !important;
            font-weight: 500 !important	;
        }
    }

    @media screen and (max-width: 414px){
        h4{
            font-size: 1rem !important;
        }
        p{
            font-size: .8rem !important;
            font-weight: 500 !important	;
        }
    }
`;

export default ServiceCard