import React from 'react'
import styled from 'styled-components'
import {InnerLayout} from '../Layout'
import CatBtn from './CatBtn';
import Title from './Title';

function SectionCategory() {
    return (
        <SectionCategoryStyled>
            <InnerLayout>
                <div className="title-container">
                    <Title name={'All Categories'} paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, eos!'} />
                </div>
                <div className="category-container">
                    <CatBtn name={'Game Development (600)'} />
                    <CatBtn name={'Game Design (1000+)'} />
                    <CatBtn name={'Creative Director (71)'} />
                    <CatBtn name={'Digital Artist (3400)'} />
                    <CatBtn name={'Software Engineer (2000+)'} />
                    <CatBtn name={'Software Developer (2000)'} />
                    <CatBtn name={'Product Manager (900)'} />
                    <CatBtn name={'Product Designer (108)'} />
                    <CatBtn name={'Researchers (26)'} />
                    <CatBtn name={'Web Designer (300)'} />
                    <CatBtn name={'Web Developer (1400+)'} />
                    <CatBtn name={'UI/UX (2,300)'} />
                </div>
            </InnerLayout>
        </SectionCategoryStyled>
    )
}

const SectionCategoryStyled = styled.section`
    .category-container{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        padding-top: 1.5rem;
        grid-gap: 1rem;
    }
    @media screen and (max-width: 414px){
        .category-container{
            grid-template-columns: repeat(2, 1fr) !important;
            grid-gap: .5rem !important;

        }
    }
`;

export default SectionCategory