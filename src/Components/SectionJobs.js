import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Layout';
import JobCard from './JobCard';
import Title from './Title';
import logo1 from '../img/logo1.svg';
import logo2 from '../img/logo2.svg';
import logo3 from '../img/logo3.svg';
import logo4 from '../img/logo4.svg';
import logo5 from '../img/logo5.svg';
import logo6 from '../img/logo6.svg';
import logo7 from '../img/logo7.svg';


function SectionJobs() {
    return (
        <SectionJobsStyled>
            <InnerLayout>
                <div className="title-container">
                    <Title name={'Recent Jobs'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, quaerat!'}/>
                </div>
                <div className="card-container">
                    <JobCard 
                        logo = {logo1}
                        bg = {'#27AE60'}
                        name = {'Maniac Tech'}
                        loc = {'Lagos State'}
                        title = {'Software Engineer'}
                        type = {'Full Time'}
                        stack = {'Acure, C++, Python, CSV, MySQL or PostgreSQL'}
                        salary = {'$70,000 - $90,000'}
                    />
                    <JobCard 
                        logo = {logo2}
                        bg = {'#037FFF'}
                        name = {'Screaming Frog Inc.'}
                        loc = {'Lagos State'}
                        title = {'Game Developer'}
                        type = {'Remote'}
                        stack = {'ASP Nest, NodeJs, TypeScript, Unity or Unreal Engine'}
                        salary = {'$79,000 - $150,000'}
                    />
                    <JobCard 
                        logo = {logo3}
                        bg = {'#27AE60'}
                        name = {'Cooble Inc.'}
                        loc = {'Oyo State'}
                        title = {'Web Developer'}
                        type = {'Full Time'}
                        stack = {'React, Node, Express, MongoDB, JavaScript, TypeScript'}
                        salary = {'$50,000 - $95,000'}
                    />
                    <JobCard 
                        logo = {logo4}
                        bg = {'#27AE60'}
                        name = {'Microsoft'}
                        loc = {'Lagos State'}
                        title = {'Data Scientist'}
                        type = {'Full Time'}
                        stack = {'C++, Machine Learning, Python, CSV, MySQL or PostgreSQL'}
                        salary = {'$70,000 - $90,000'}
                    />
                    <JobCard 
                        logo = {logo5}
                        bg = {'#27AE60'}
                        name = {'Stark Tech Inc.'}
                        loc = {'Lagos State'}
                        title = {'Software Engineer'}
                        type = {'Full Time'}
                        stack = {'Acure, C++, Python, CSV, MySQL or PostgreSQL'}
                        salary = {'$70,000 - $90,000'}
                    />
                    <JobCard 
                        logo = {logo6}
                        bg = {'#27AE60'}
                        name = {'The Real Tech'}
                        loc = {'Ekiti State'}
                        title = {'Web Developer'}
                        type = {'Full Time'}
                        stack = {'React, Node, Express, MongoDB, JavaScript, TypeScript'}
                        salary = {'$50,000 - $95,000'}
                    />
                    <JobCard 
                        logo = {logo7}
                        bg = {'#27AE60'}
                        name = {'Infomedia Corp.'}
                        loc = {'Ondo State'}
                        title = {'Software Engineer'}
                        type = {'Full Time'}
                        stack = {'C++, Python, CSV, MySQL or PostgreSQL, Web GL'}
                        salary = {'$70,000 - $90,000'}
                    />
                    <JobCard 
                        logo = {logo2}
                        bg = {'#037FFF'}
                        name = {'Tech Mania'}
                        loc = {'Ondo State'}
                        title = {'Web Developer'}
                        type = {'Remote'}
                        stack = {'ASP.Net, Node.js, TypeScript, C# or Python, Mania Tech'}
                        salary = {'$79,000 - $150,000'}
                    />
                    <JobCard 
                        logo = {logo1}
                        bg = {'#EB5757'}
                        name = {'Alphabet Inc.'}
                        loc = {'Ekiti State'}
                        title = {'Web Developer'}
                        type = {'Part Time'}
                        stack = {'React, Node.Js, Express, MongoDB, JavaScript, TypeScript'}
                        salary = {'$50,000 - $95,000'}
                    />
                </div>
            </InnerLayout>
        </SectionJobsStyled>
    )
}

const SectionJobsStyled = styled.section`
    background-color: var(--color-neutral-3);
    .card-container{
        padding-top: 1rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
        grid-gap: .5rem;
        
    }
    

`;

export default SectionJobs