import React from "react";
import uuid from "uuid";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";  
import { theme } from "config/styles";
import { ThemeProvider } from 'emotion-theming';

const Progress = props => {
  return (
    <ThemeProvider theme={theme}>
      <div data-testid="progress">
        {Array.from({length: props.bars ? props.bars : 4}, () => {
          return <Bar color={props.color} size={props.size} key={uuid()} data-testid="bar" />
        })}
      </div>
    </ThemeProvider>
  );
};

const loading = keyframes`
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1, 2.2);
  }
  40% {
    transform: scale(1);
  }
`;

const Bar = styled.div`
    display: inline-block;
    width: ${props => props.size === 'large' ? '8px' : props.size === 'small' ? '2px' : '4px'};
    height: ${props => props.size === 'large' ? '36px' : props.size === 'small' ? '9px' : '18px'};
    border-radius: 4px;
    background: ${props => props.color ? props.color : props.theme.colors.primary};
    margin: 0 5px;
    animation: ${loading} 1s ease-in-out infinite;
    
    &:nth-of-type(1) {
        animation-delay: 0;
    }
    &:nth-of-type(2) {
        animation-delay: 0.09s;
    }
    &:nth-of-type(3) {
        animation-delay: 0.18s;
    }
    &:nth-of-type(4) {
        animation-delay: 0.27s;
    }
    &:nth-of-type(5) {
        animation-delay: 0.36s;
    }
    &:nth-of-type(6) {
        animation-delay: 0.45s;
    }
    &:nth-of-type(7) {
        animation-delay: 0.54s;
    }
`

export default Progress;
