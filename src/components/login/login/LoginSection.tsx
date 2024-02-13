import React from "react";
import * as S from "./style";

const LoginSection = () => {
  return (
    <S.LoginSectionWrapper>
      <S.LoginMainTxt>B:link 로그인</S.LoginMainTxt>
      <S.LoginInput type="text" placeholder="아이디를 입력해주세요" />
      <S.LoginInput type="text" placeholder="비밀번호를 입력해주세요" />
      <S.LoginBtn>로그인</S.LoginBtn>
    </S.LoginSectionWrapper>
  );
};

export default LoginSection;
