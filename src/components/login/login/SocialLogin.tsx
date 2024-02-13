import React from "react";
import * as S from "./style";
import Google from "../../../assets/image/login/google_btn.png";
import Kakao from "../../../assets/image/login/kakao_btn.png";
import Naver from "../../../assets/image/login/naver_btn.png";

const SocialLogin = () => {
  return (
    <S.SocialLoginWrapper>
      <S.SmallTxt>간편로그인</S.SmallTxt>
      <S.FlexRow>
        <img src={Google} alt="구글" />
        <img src={Kakao} alt="카카오" />
        <img src={Naver} alt="네이버" />
      </S.FlexRow>
    </S.SocialLoginWrapper>
  );
};

export default SocialLogin;
