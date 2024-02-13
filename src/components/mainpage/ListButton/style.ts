import styled, { css } from "styled-components";

interface ButtonProps {
  selected: boolean;
}

export const BoxContainer = styled.div`
  width: 448px;
  height: 55px;
  display: flex;
  flex-direction: row;
`;

const buttonStyle = css`
  display: inline-flex;
  padding: 14px 30px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  border: 0;
  font-size: 20px;
  font-weight: 700;
  margin-right: 20px;
`;

export const ListButton = styled.button<ButtonProps>`
  ${buttonStyle}
  background-color: ${(props) => (props.selected ? "#D4E9FF" : "#E0E5EF")};
  color: ${(props) => (props.selected ? "#007aff" : "#9BA1B4")};
`;

export const PostButton = styled.button<ButtonProps>`
  ${buttonStyle}
  background-color: ${(props) => (props.selected ? "#FFF1D7" : "#E0E5EF")};
  color: ${(props) => (props.selected ? "#FF9900" : "#9BA1B4")};
`;
