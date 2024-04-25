import { createGlobalStyle } from "styled-components";
export const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
body{
    padding: 0;
    margin: 0;
    box-sizing: border-box; 
    background: #C5E4E7;
    font-family: "Space Mono", monospace;
    padding: 5rem 0 3.2rem;
    @media (min-width: 90rem){
        padding: 16.3rem 26rem 23.9rem;
    }
}
html{
    font-size:62.5%;
}
`;
