import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
}
ul{
    margin: 0;
    padding: 0;
    list-style: none;
}


img {
    display: block;
    max-width: 100%;
    object-fit: cover;
}
`;
