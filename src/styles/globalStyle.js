import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}
    :root{
            --white: #ffffff;
            --grey: #a8a8b3;
            --green: #5FE376;
            --black: #13131A;
            --gray: #41414D;
            --background: #F0F0F5;
            --transparent: transparent; 
           
        }
        
    body{
        background: var(--background);
    }
    body,input, button{
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
    }
    h1,h2,h3,h4,h5,h6{
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
    }
    button{
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
    ul,li,ol{
        list-style: none;
    }
    `;
