import React from "react";
import styled from "@emotion/styled";
import { theme, font } from "config/styles";
import { ThemeProvider } from 'emotion-theming';

const Card = props => {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper 
          width={props.width} 
          height={props.height}
          dark={props.dark}>
            {props.children}
        </Wrapper>
      </ThemeProvider>
    )
}

const Wrapper = styled.div`
  ${font}
  box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.59);
  padding: 1em;
  margin: 1em;
  width: ${props => props.width ? props.width : 'inherit'};
  height: ${props => props.height ? props.height : 'inherit'};
  background: ${props => props.dark ? '#272121' : 'inherit'};
  color: ${props => props.dark ? '#FFFFFF' : 'inherit'};
  box-sizing: border-box;
`

export default Card;