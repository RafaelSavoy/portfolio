import React, { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav/Nav";
import { HeaderContent, OpenNav, StyledDiv, StyledHeader } from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    function openNav() {
        setOpen((prev) => !prev);
    }
    return (
        <StyledHeader>
            <HeaderContent>
                <StyledDiv>
                    <Logo />
                    <OpenNav onClick={openNav}>
                        <GiHamburgerMenu />
                    </OpenNav>
                </StyledDiv>
                <Nav open={isOpen} />
            </HeaderContent>
        </StyledHeader>
    );
};

export default Header;
