import styled from 'styled-components';

import variables from '../variables';

export default styled.a`
  color: ${variables.colors.white};
  background-color: ${props => props.color === 'blue' || variables.colors.blue};
  background-color: ${props =>
    props.color === 'purple'
      ? variables.colors.purple
      : variables.colors.orange};
  font-family: ${variables.fonts.title};
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  padding: 10px 20px;
  transition: all ease 0.4s;
  color: #fff !important;
  cursor: pointer;

  &:hover {
    background-color: ${props =>
      props.color === 'blue' || variables.colors.orange};
    background-color: ${props =>
      props.color === 'purple'
        ? variables.colors.orange
        : variables.colors.blue};
    color: ${variables.colors.white};
    text-decoration: none;
  }
`;
