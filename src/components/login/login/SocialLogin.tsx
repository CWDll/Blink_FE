import React from "react";
import * as S from "./style";
import Google from "../../../assets/image/login/google_btn.png";
import Kakao from "../../../assets/image/login/kakao_btn.png";
import Naver from "../../../assets/image/login/naver_btn.png";
import { apiClient } from "../../../api/ApiClient";

const SocialLogin = () => {
  // 구글 로그인
  const fetchGoogleLogin = async () => {
    try {
      const response = await apiClient.get("api/v1/user/google/login"); //테스트 중
      console.log(response.data.results);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  // 카카오 로그인
  const fetchKakaoLogin = async () => {
    try {
      const response = await apiClient.get("api/v1/user/kakao/login"); //테스트 중
      console.log(response.data.results);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  // 네이버 로그인
  const fetchNaverLogin = async () => {
    try {
      const response = await apiClient.get("api/v1/user/naver/login"); //테스트 중
      console.log(response.data.results);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  return (
    <S.SocialLoginWrapper>
      <S.SmallTxt>간편로그인</S.SmallTxt>
      <S.FlexRow>
        <img src={Google} alt="구글" onClick={fetchGoogleLogin} />
        <img src={Kakao} alt="카카오" onClick={fetchKakaoLogin} />
        <img src={Naver} alt="네이버" onClick={fetchNaverLogin} />
      </S.FlexRow>
    </S.SocialLoginWrapper>
  );
};

export default SocialLogin;
