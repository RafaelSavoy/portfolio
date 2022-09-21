import React from "react";
import { Name, Profession, StyledLogo } from "./styles";

const Logo = () => {
    return (
        <StyledLogo>
            <Name>
                Rafael <span>Savoy</span>
            </Name>
            <Profession>Fullstack Developer</Profession>
        </StyledLogo>
    );
};

export default Logo;
