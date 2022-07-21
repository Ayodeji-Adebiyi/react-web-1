import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Layout';
import ServiceCard from './ServiceCard';
import Title from './Title';
import create_account from '../img/create_account.svg';
import apply from '../img/apply2.svg';
import add from '../img/add.svg';
import search from '../img/search2.svg';

function SectionService() {
    return (
        <SectionServiceStyled>
            <InnerLayout>
                <div className="title-container">
                    <Title name = {'Services'} paragraph= {'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, placeat.'}/>
                </div>
                <div className="service-container">
                    <ServiceCard
                        icon = {create_account} name = {'Create An Account'} paragraph = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, laudantium.'}
                    />
                    <ServiceCard
                        icon = {search} name = {'Search For A Job'} paragraph = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, laudantium.'}
                    />
                    <ServiceCard
                        icon = {add} name = {'Add CV/Resume'} paragraph = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, laudantium.'}
                    />
                    <ServiceCard
                        icon = {apply} name = {'Application Complete'} paragraph = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, laudantium.'}
                    />
                </div>
            </InnerLayout>
        </SectionServiceStyled>
    )
}

const SectionServiceStyled = styled.section`
    .service-container{
        padding-top: 3rem;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1rem;
        
    }
    @media screen and (max-width: 414px){
        .service-container{
            grid-template-columns: repeat(2, 1fr) !important;
            grid-gap: .5rem !important;
        }
        
    }   
`;

export default SectionService