import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

const LoginSignUp = () => {
  const navigate = useNavigate();

  return (
    <S.LoginSignUpWrapper>
      <S.WhiteMainText>Hello, Friend !</S.WhiteMainText>
      <S.WhiteSubText>
        Sign up and discover
        <br />a great amount of
        <br />
        dash cam!
      </S.WhiteSubText>
      <S.WhiteBtn onClick={() => navigate("/signup")}>회원가입</S.WhiteBtn>
    </S.LoginSignUpWrapper>
  );
};

export default LoginSignUp;
