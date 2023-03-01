import PropTypes from 'prop-types';
import React from "react";

import { StyledButton } from "./Button.styled";

const Feedback = ({ onLeaveFeedback, options }) => {
  return (
    <>
      {options.map(el => {
        return (<StyledButton type="button" onClick={onLeaveFeedback} key={el} id={el}>{el.toUpperCase()}</StyledButton>)
      })
      }
    </>
  )
}

Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
}

export { Feedback };