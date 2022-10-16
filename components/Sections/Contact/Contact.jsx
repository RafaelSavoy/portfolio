import React from "react";
import { SocialIcon } from "react-social-icons";
import { StyledSection } from "../sectionStyles";
import {
    ContactLinks,
    ContactMethods,
    ContactTexts,
    Content,
} from "./contact_styles";
import Form from "./Form/Form";

const Contact = () => {
    return (
        <StyledSection id="contato">
            <ContactTexts>
                <h1>Está interessado no meu trabalho?</h1>
                <h2>Contate-me!</h2>
            </ContactTexts>
            <Content>
                <ContactMethods id="contact-methods">
                    <Form />
                    <p>Ou</p>
                    <ContactLinks>
                        <SocialIcon
                            url={
                                "https://www.linkedin.com/in/rafael-savoy-62b872228/"
                            }
                        />
                        <SocialIcon url={"https://discord.com/users/6628"} />
                    </ContactLinks>
                </ContactMethods>
            </Content>
        </StyledSection>
    );
};

export default Contact;
