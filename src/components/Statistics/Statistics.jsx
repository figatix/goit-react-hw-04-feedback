import PropTypes from 'prop-types';
import React from "react";

import { StyledStatList } from './StatList.styled';
import { StyledStatItem } from './StatItem.styled';


const Statistics = ({ goodCount, neutralCount, badCount, total, positivePercentage }) => {
  return (
    <StyledStatList>
      <StyledStatItem>Good: {goodCount}</StyledStatItem>
      <StyledStatItem>Neutral: {neutralCount}</StyledStatItem>
      <StyledStatItem>Bad: {badCount}</StyledStatItem>
      <StyledStatItem>Total: {total}</StyledStatItem>
      <StyledStatItem>Percentage of GOOD feedbacks: {positivePercentage}%</StyledStatItem>
    </StyledStatList>
  )
}

Statistics.propTypes = {
  goodCount: PropTypes.number.isRequired,
  neutralCount: PropTypes.number.isRequired,
  badCount: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}

export { Statistics }
