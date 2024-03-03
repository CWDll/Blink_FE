import React, { useState } from "react";
import * as S from "./style";
import { apiClient } from "../../../api/ApiClient";

const GeneralInput = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [checkPw, setCheckPw] = useState("");
  const [nickname, setNickname] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };
  const handleCheckPWChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckPw(e.target.value);
  };
  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleSignup = async () => {
    try {
      const response = await apiClient.post("api/v1/user/signup", {
        email: email,
        password: pw,
        nickname: nickname,
      });
      console.log(response.data.token.access_token);
      console.log(response.data.token.refresh_token);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  return (
    <S.GeneralInputWrapper>
      <S.InfoWrapper>
        <S.PersonalInfo
          placeholder="사용하실 아이디를 입력해주세요"
          value={email}
          onChange={handleEmailChange}
        />
        <S.PersonalInfo
          type="password"
          placeholder="사용하실 비밀번호를 입력해주세요"
          value={pw}
          onChange={handlePwChange}
        />
        <S.PersonalInfo
          type="password"
          placeholder="비밀번호를 다시 한번 입력해주세요"
          value={checkPw}
          onChange={handleCheckPWChange}
        />
        <S.PersonalInfo
          placeholder="사용하실 닉네임을 작성해주세요"
          value={nickname}
          onChange={handleNicknameChange}
        />
      </S.InfoWrapper>
      <S.ExpertSignup onClick={handleSignup}>회원가입 완료하기</S.ExpertSignup>
    </S.GeneralInputWrapper>
  );
};

export default GeneralInput;
