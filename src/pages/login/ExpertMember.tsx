import React from "react";
import * as S from "./style";
import ExpertGuide from "../../components/login/signup/ExpertGuide";
import ExpertInput from "../../components/login/expertMember/ExpertInput";

const ExpertMember = () => {
  return (
    <S.RowWrapper>
      <S.SignUpWrapper>
        <S.MainTxt50>Sign up to Blink!</S.MainTxt50>
        <ExpertInput />
        <S.ExpertSignupBtn>전문가 회원가입</S.ExpertSignupBtn>
      </S.SignUpWrapper>
      <ExpertGuide />
    </S.RowWrapper>
  );
};

export default ExpertMember;
