import React from "react";
import * as S from "./style";
import LoginSignUp from "../../components/login/login/LoginSignUp";
import LoginSection from "../../components/login/login/LoginSection";
import SocialLogin from "../../components/login/login/SocialLogin";

const Login = () => {
  return (
    <S.LoginWrapper>
      <LoginSignUp />
      <S.RightWrapper>
        <LoginSection />
        <SocialLogin />
      </S.RightWrapper>
    </S.LoginWrapper>
  );
};

export default Login;
