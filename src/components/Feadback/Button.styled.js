import styled from 'styled-components';

const StyledButton = styled.button`
  font-family: inherit;
  font-size: 20px;
  cursor: pointer;

  border: 2px solid #c936c5;
  border-radius: 10px;
  background-color: #36d6d3;
  box-shadow: 3px 3px 5px 2px rgba(54, 214, 211, 0.75);

  padding: 8px 12px;

  margin-right: 20px;

  &:hover {
    color: #ce3137;
    background-color: #c5c936;
    box-shadow: 3px 3px 5px 2px rgba(201, 54, 197, 0.75);
  }

  &:last-child() {
    margin-right: 20px;
  }
`;

export { StyledButton };
