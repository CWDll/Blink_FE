import React from "react";
import * as S from "./style";
import General from "../../../assets/image/login/general_member.png";
import Expert from "../../../assets/image/login/expert_member.png";
import { useNavigate } from "react-router-dom";

const SelectType = () => {
  const navigate = useNavigate();

  return (
    <div>
      <S.FlexBox>
        <S.RelativeWrapper>
          <img src={General} alt="" />
          <S.SignupBtn
            onClick={() => navigate("generalMember")}
            bgcolor="#5F6977"
          >
            일반 회원가입
          </S.SignupBtn>
        </S.RelativeWrapper>
        <S.RelativeWrapper>
          <img src={Expert} alt="" />
          <S.SignupBtn
            onClick={() => navigate("expertMember")}
            bgcolor="#0773EA"
          >
            전문가 회원가입
          </S.SignupBtn>
        </S.RelativeWrapper>
      </S.FlexBox>
    </div>
  );
};

export default SelectType;
