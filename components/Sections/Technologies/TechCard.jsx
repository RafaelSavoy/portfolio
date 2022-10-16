import React from "react";
import { TechImage, TechListItem, TechText } from "./technologies_styles";

const TechCard = ({ techicon, description }) => {
    return (
        <TechListItem>
            <TechImage src={techicon.url} alt={"ícone technologia"} />
            <TechText>{description}</TechText>
        </TechListItem>
    );
};
export default TechCard;
