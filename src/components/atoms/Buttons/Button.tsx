import React from "react";
import * as S from "./style";

interface ButtonProps {
  text: string;
  color: string;
}

const Button: React.FC<ButtonProps> = ({ text, color }) => {
  return <S.Button color={color}>{text}</S.Button>;
};

export default Button;
