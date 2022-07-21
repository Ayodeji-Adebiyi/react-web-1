import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }
    
    :root{
        --color-neutral-1: #f2f6ff;
        --color-neutral-2: #fafaff;
        --color-neutral-3: #f4f7f7;
        --color-primary: #27ae60;
        --color-white: #fff;
        --color-dark: #272a33;
    }

    body{
        font-family: 'Montserrat', sans-serif;
        color: var(--color-white);
        font-size: .8rem;
        font-weight: 500;
    }

    a{
        color: var(--color-white);
    }

    p{
        color: #656565;
    }

    .title-container{
        text-align: center;
    }

`;

export default GlobalStyle;