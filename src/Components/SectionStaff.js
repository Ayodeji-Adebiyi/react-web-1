import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Layout';
import StaffCard from './StaffCard';
import Title from './Title';
import avatar1 from '../img/avatar1.png'
import avatar2 from '../img/avatar2.png'
import avatar3 from '../img/avatar3.png'
import avatar4 from '../img/avatar4.png'
import bookmark from '../img/bookmark.svg'
import star from '../img/star.svg'
import star_half from '../img/star_half.svg'

function SectionStaff() {
    return (
        <SectionStaffStyled>
            <InnerLayout>
                <div className="title-container">
                    <Title name={'Our Staff'} paragraph={'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'} />
                </div>
                <div className="stf-card-container">
                    <StaffCard
                        img = {avatar1}
                        bookmark = {bookmark}
                        name = {'Huan Nguyen'}
                        title = {'Developer'}
                        rating = {star}
                        rating_half = {star_half}
                        stack = {'C++, C#, Node, Express, MongoDB, JavaScript, TypeScript'}
                    />
                    <StaffCard
                        img = {avatar2}
                        bookmark = {bookmark}
                        name = {'Benzo Milak'}
                        title = {'Software Engineer'}
                        rating = {star}
                        rating_half = {star_half}
                        stack = {'React, Node, Express, MongoDB, JavaScript, TypeScript'}
                    />
                    <StaffCard
                        img = {avatar3}
                        bookmark = {bookmark}
                        name = {'Gustavo Mikalia'}
                        title = {'Mobile Developer'}
                        rating = {star}
                        rating_half = {star}
                        stack = {'Java, Kotlin, Flutter, MongoDB, JavaScript, TypeScript'}
                    />
                    <StaffCard
                        img = {avatar4}
                        bookmark = {bookmark}
                        name = {'Sunil Patel'}
                        title = {'3d Artist'}
                        rating = {star}
                        rating_half = {star}
                        stack = {'AutoDesk, Maya, Blender, Arnold, JavaScript, Python'}
                    />
                    
                </div>

            </InnerLayout>
        </SectionStaffStyled>
    )
}

const SectionStaffStyled = styled.section`
    .stf-card-container{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
        grid-gap: 2rem;
    }
    @media screen and (max-width: 600px){
        .title{
            font-size: .7rem !important	;
            padding-bottom: .5rem !important;
        }
        .btn-profile{
            font-size: .6rem !important;
        }
        .stack{
            font-size: .6rem !important;
        }
    }

    @media screen and (max-width: 414px){
        .stf-card-container{
            grid-template-columns: repeat(1, 1fr) !important;
            grid-gap: 1rem !important;
        }
        .staff-card-container{
            .title{
                font-size: 1.2rem !important	;
                padding-bottom: .5rem !important;
            }
            .btn-profile{
                font-size: .8rem !important;
            }
            .stack{
                font-size: .8rem !important;
            }
            .bookmark{
                width: 20px !important;
            }
        }
        
    }
    
    
    
    

`;

export default SectionStaff