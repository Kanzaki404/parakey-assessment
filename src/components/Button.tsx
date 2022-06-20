import * as React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    border: 1px solid #3ED7CD;
    border-radius: 5px;
    color: #3ED7CD;
    min-width: 200px;
    height: 50px;
    background-color: transparent;
    font-size: 16px;
    &&:hover{
        background-color: #3ED7CD;
        color: #FFF;
    }

`;
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
//new?
export function Button(props: ButtonProps): React.ReactElement<ButtonProps> {
  const { children, ...rest } = props;
  return <StyledButton {...rest}>{children}</StyledButton>;
}
