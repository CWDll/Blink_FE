import React from "react";
import * as S from "./style";

const GeneralInput = () => {
  return (
    <S.GeneralInputWrapper>
      <S.InfoWrapper>
        <S.PersonalInfo placeholder="사용하실 아이디를 입력해주세요" />
        <S.PersonalInfo placeholder="사용하실 비밀번호를 입력해주세요" />
        <S.PersonalInfo placeholder="비밀번호를 다시 한번 입력해주세요" />
        <S.PersonalInfo placeholder="사용하실 닉네임을 작성해주세요" />
      </S.InfoWrapper>
      <S.ExpertSignup>회원가입 완료하기</S.ExpertSignup>
    </S.GeneralInputWrapper>
  );
};

export default GeneralInput;
