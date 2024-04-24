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
}
html{
    font-size:62.5%;
}
`;
