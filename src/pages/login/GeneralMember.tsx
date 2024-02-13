import React from "react";
import * as S from "./style";
import GeneralInput from "../../components/login/generalMember/GeneralInput";
import MoveExpert from "../../components/login/generalMember/MoveExpert";

const GeneralMember = () => {
  return (
    <S.SignUpWrapper>
      <S.MainTxt50>Sign up to Blink!</S.MainTxt50>
      <GeneralInput />
      <MoveExpert />
    </S.SignUpWrapper>
  );
};

export default GeneralMember;
