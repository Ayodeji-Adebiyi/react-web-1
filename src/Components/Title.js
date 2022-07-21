import React from 'react'
import styled from 'styled-components';

function Title({name, paragraph}) {
    return (
    <TitleStyled>
        <h3>
            {name}
        </h3>
        <p>
            {paragraph}
        </p>
    </TitleStyled>
    )
}

const TitleStyled = styled.div`
    h3{
        color: var(--color-dark);
        font-size: 1.2rem;
    }

    p{
        padding: 1rem 0;
    }
`;
export default Title