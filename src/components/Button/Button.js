import React from "react";
import styled from "@emotion/styled";
import { font, theme } from "config/styles";
import { ThemeProvider } from 'emotion-theming';

const Button = props => {
  return <ThemeProvider theme={theme}>
      <Wrapper 
        disabled={props.disabled}
        color={props.color}
        round={props.round}
        fullwidth={props.fullwidth}
        large={props.large}
        onClick={props.onClick}>
          {props.children}
      </Wrapper>
    </ThemeProvider>;
}

const Wrapper = styled.button`
  ${font};
  font-weight: bold;
  border: none;
  color: ${props => props.disabled ? props.theme.colors.disabledText : props.theme.colors.text};
  background: ${props => props.disabled ? props.theme.colors.disabled : 
    props.color ? props.theme.colors[props.color] : props.theme.colors.primary};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  border-radius: ${props => props.round ? '50%' : props.fullwidth ? 'none' : '10px' };
  width: ${props => props.fullwidth ? '100%' : props.round ? '100px' : 'auto'};
  height: ${props => props.round ? '100px' : 'auto'};
  padding: ${props => props.large ? '3.2vw 4.88vw' : props.round ? '0.3em' : '1em 2em'};
  font-size: ${props => props.large ? '9.375vw' : '1em'};
  margin: .5em;
  box-shadow: ${props => props.round ? '1px 1px 10px #272121' : 'none'};
  font-weight: bold;

  &:focus {
    outline: none;
  }
  &:active {
    box-shadow: none;
  }
  &:active:before {
    display: none;
  }
`;

export default Button;