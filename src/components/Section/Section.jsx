import React, { Component } from "react";
import PropTypes from 'prop-types';
import { StyledSection } from "./Section.styled";
import { StyledTitle } from "./Title.styled";
import { StyledContainer } from "./Container.styled";

class Section extends Component {
  render() {
    const { title } = this.props;

    return (
      <StyledContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledSection>{this.props.children}</StyledSection>
      </StyledContainer>
    )
  }
}

Section.protoTypes = {
  title: PropTypes.string.isRequired
}

export { Section }