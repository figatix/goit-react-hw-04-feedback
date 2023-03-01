import PropTypes from 'prop-types';
import React, { Component } from "react";

import { StyledButton } from "./Button.styled";

class Feedback extends Component {
  render() {

    const { onLeaveFeedback, options } = this.props;

    return (
      <>
        {options.map(el => {
          return (<StyledButton type="button" onClick={onLeaveFeedback} key={el} id={el}>{el.toUpperCase()}</StyledButton>)
        })
        }
      </>
    )
  }
}

Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
}

export { Feedback };