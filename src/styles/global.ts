import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
    --white: #FFF;
    --background: #F2F3F5;
    --gray-line: #DCDDE0;
    --text: #666666;
    --text-highlight: #B3B9FF;
    --title: #2E384D;
    --red: #E83F5B;
    --green: #4CD62B;
    --blue: #5965E0;
    --blue-dark: #4953B8;
    --blue-twitter: #2AA9E0;
    }

    @media (max-width: 1880px){
        html{
            font-size: 93.75%;
        }
    }

    @media (max-width: 820px){
        html{
            font-size: 87.5%;
        }
    }

    body {
        background: #F2F3F5;
        color: #666666;
    }

    body, input, textarea, button {
        font: 400 1rem "Inter", sans-serif;
    }

    button{
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;