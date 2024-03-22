import styled from "styled-components";

interface ButtonProps {
  color: string;
}

export const Button = styled.button<ButtonProps>`
  width: 154px;
  height: 67px;
  border-radius: 20px;
  color: ${(props) => props.color};
`;
