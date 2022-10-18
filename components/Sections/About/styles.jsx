import { BiCodeAlt } from "react-icons/bi";
import styled, { keyframes } from "styled-components";

export const Content = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: auto !important;
    @media (max-width: 580px) {
        flex-direction: column;
    }
`;

const flyAnimation = keyframes`
	0%{
		transform: translateY(0px);	
	}
	50%{
		transform: translateY(15px);
		filter: drop-shadow(0 0 5px var(--second-text-color));
	}
	0%{
		transform: translateY(0);
	}
`;
export const DevIcon = styled(BiCodeAlt)`
    font-size: clamp(5rem, 25vw + 1rem, 30rem);
    display: block;
    width: 30%;
    color: var(--second-text-color);
    animation: ${flyAnimation} 5s infinite;
    @media (max-width: 580px) {
        display: none;
    }
`;
export const Presentation = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    @media (max-width: 580px) {
        width: 100%;
    }
`;
export const Text = styled.p`
    color: var(--primary-text-color);
    font-size: clamp(2rem, 2.5vw + 1rem, 2.8rem);
    line-height: 1.3;
    font-family: "Montserrat", sans-serif;
    font-weight: normal;
    line-height: 1.5;
`;

const upAnimation = keyframes`
    0%{
        transform: translateY(0px);
        opacity: 0.3;
    }
    50%{
        opacity: 1;
    }
    100%{
        transform: translateY(-30px);
        opacity: 0;
    }
`;

export const ToDownIcon = styled.span`
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    bottom: 5px;
    border-radius: 100%;
    background-color: var(--second-text-color);
    animation: ${upAnimation} 1.5s infinite ease;
`;
