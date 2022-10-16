import { createGlobalStyle } from "styled-components";
import Poppins from "../assets/fonts/Poppins/Poppins-Regular.ttf";
import Montserrat from "../assets/fonts/Montserrat/Montserrat-Regular.ttf";
import Roboto from "../assets/fonts/Roboto/Roboto-Regular.ttf";
import OpenSans from "../assets/fonts/OpenSans/OpenSans-Regular.ttf";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Poppins";
        src: url(${Poppins});
    }//Titulos
    @font-face {
        font-family: "Roboto";
        src: url(${Roboto});
    }//Links
    @font-face {
        font-family: "Montserrat";
        src: url(${Montserrat});
    }//Textos
    @font-face {
        font-family: "Open Sans";
        src: url(${OpenSans});
    }//Botões


    :root {
        --primary-text-color: white;
        --second-text-color: #00e5ff;
        --button-color: #1cabbe;
        --background-color: #222;
        --title-font: 'Ubuntu', sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
        min-height: 100%;
    }

    body {
        background-color: #222;
        color: white;
    }

    strong {
        color: var(--second-color)
    }

`;
