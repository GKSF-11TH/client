import React from 'react';
import styled from 'styled-components';

const StyledSeparator = styled.div`
  background-color: transparent;
  ${props => props.orientation === 'horizontal' 
    ? 'height: 1px; width: 100%;' 
    : 'height: 100%; width: 1px;'}
`;

const Separator = ({ orientation = 'horizontal', className }) => {
  return <StyledSeparator orientation={orientation} className={className} />;
};

export default Separator;
