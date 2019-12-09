import React from 'react';
import styled from "@emotion/styled";
import { theme, font } from "config/styles";
import { ThemeProvider } from 'emotion-theming';

const TextField = props => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Label color={props.labelColor} data-testid="label">{props.labelText}</Label>
        <Input
          type="text" 
          placeholder={props.placeholder}
          disabled={props.disabled}
          textColor={props.textColor}
          rounded={props.rounded}
          value={props.value}
          autocomplete={props.autoComplete}
          tabindex={props.tabindex}
          onChange={props.onChange}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          isNotValid={props.isNotValid}
          data-testid="input"
        />
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
    ${font}
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    font-size: 1.5em;
    color: ${props => props.color ? props.color : 'inherit'};
`

const Input = styled.input`
    line-height: 1.15;
    font-size: 24px;
    color: ${props => props.textColor ? props.textColor : '#000000'};
    border-radius: ${props => props.rounded ? '3px' : '0'};
    border: ${props => props.isNotValid ? '1px solid #ff3860' : '1px solid #A9A9A9'};
    padding: 1px;
    &:hover {
        cursor: ${props => props.disabled ? 'not-allowed' : 'inherit'};
    }
    &::placeholder {
        color: ${props => props.disabled ? '#CBCBCC' : '#757579'};
    }
`

export default TextField;