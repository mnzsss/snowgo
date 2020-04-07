import styled from 'styled-components';

import variables from '~/styles/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: ${props =>
    props.align === 'top' ? 'column-reverse' : 'row'};
  align-items: center;
  margin: 20px 0;
`;

export const BucketIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
   ${props =>
     props.size === 'small'
       ? 'height: 95px; width: 95px;'
       : 'height: 118px; width: 118px;'}
  background-color: ${variables.colors.orange};
  border-radius: 50%;
  transition: all ease 0.3s;
  ${props => (props.align === 'top' ? 'margin: 0;' : 'margin: 0 20px 0 0;')}

  &:hover {
    background-color: ${variables.colors.blue};
  }

  img{
    width: 47px;
    height: 100%;
  }
`;

export const Label = styled.div`
${props =>
  props.align === 'top'
    ? 'position: absolute; height: auto; bottom: 7.5em; left: 8em; padding: 5px 10px;@media (min-width:414px){left:9.3em} @media (min-width:768px){left:22em}'
    : 'position: unset; height: 100%; padding: 15px 15px 15px 5px;'}
  background-color: ${variables.colors.blue};
  color: ${variables.colors.white};
  display: flex;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  max-width: 159px;
  

  &:before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    ${props =>
      props.align === 'top'
        ? `position: absolute;left: 4.3em;right: auto; bottom: -0.6em; border-right: 15px solid #0000;border-left: 15px solid #0000; border-top: 15px solid #27BDBE;`
        : `position: relative;left: -1.4em;border-top: 15px solid transparent;border-bottom: 15px solid transparent;border-right: 15px solid #27BDBE`}
  }
`;

export const Text = styled.p`
  font-family: ${variables.fonts.title};
  font-size: 14px;
  line-height: 20px;
`;
