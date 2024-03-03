import React, { useState } from "react";
import * as S from "./style";
import { apiClient } from "../../../api/ApiClient";

const LoginSection = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const handleSignin = async () => {
    try {
      const response = await apiClient.post("api/v1/user/login", {
        email: email,
        password: pw,
      });
      console.log(response.data.token.access);
      console.log(response.data.token.refresh);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  return (
    <S.LoginSectionWrapper>
      <S.LoginMainTxt>B:link 로그인</S.LoginMainTxt>
      <S.LoginInput
        type="text"
        placeholder="아이디를 입력해주세요"
        value={email}
        onChange={handleEmailChange}
      />
      <S.LoginInput
        type="password"
        placeholder="비밀번호를 입력해주세요"
        value={pw}
        onChange={handlePwChange}
      />
      <S.LoginBtn onClick={handleSignin}>로그인</S.LoginBtn>
    </S.LoginSectionWrapper>
  );
};

export default LoginSection;
