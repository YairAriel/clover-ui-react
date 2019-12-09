import React from "react";
import styled from "@emotion/styled";

const Flex = props => {
  return (
    <Wrapper 
      column={props.column} 
      justify={props.justify} 
      align={props.align}
      margin={props.margin}
      padding={props.padding}>
        {props.children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  justify-content: ${props => props.justify ? props.justify : 'flex-start'};
  align-items: ${props => props.align ? props.align : 'stretch'};
  margin: ${props => props.margin ? props.margin : 'unset'};
  padding: ${props => props.padding ? props.padding : 'unset'};
  height: 100%;
  box-sizing: border-box;
`

export default Flex;