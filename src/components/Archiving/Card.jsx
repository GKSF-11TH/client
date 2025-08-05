import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  width: 315px;
  height: 300px;
  border: 1px solid #bababa;
  background-color: transparent;
`;

const CardContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = ({ children, className }) => {
  return (
    <StyledCard className={className}>
      <CardContent>{children}</CardContent>
    </StyledCard>
  );
};

export default Card;
