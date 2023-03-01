import React from "react";
import PropTypes from 'prop-types';
import { StyledSection } from "./Section.styled";
import { StyledTitle } from "./Title.styled";
import { StyledContainer } from "./Container.styled";

const Section = ({ title, children }) => {
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledSection>{children}</StyledSection>
    </StyledContainer>
  )
}

Section.protoTypes = {
  title: PropTypes.string.isRequired
}

export { Section }