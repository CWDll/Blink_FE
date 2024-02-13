import React from "react";
import * as S from "./style";
import SelectType from "../../components/login/signup/SelectType";

const SignUp = () => {
  return (
    <S.SignUpWrapper>
      <S.MainTxt60>Sign up to Blink!</S.MainTxt60>
      <SelectType />
    </S.SignUpWrapper>
  );
};

export default SignUp;
