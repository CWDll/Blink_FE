import React from "react";
import * as S from "./style";
import Info from "../../../assets/image/login/info_icon.png";

const ExpertGuide = () => {
  return (
    <S.GuideWrapper>
      <img src={Info} alt="Info" />
      전문가 인증을 위해서는
      <br />
      양식에 맞춰 내용을 작성해 <br />
      메일로 보내주셔야 합니다. <br />
      <br />
      작성하신 이메일로 양식을 <br />
      보내드리겠습니다.
      <br />
      <br />
      만약 7일 내로 메일이 가지 않거나,
      <br />
      문의사항이 있는 경우 언제든지 babylikelion@likelion.ac.kr로 <br />
      연락 주시길 바랍니다.
      <S.BottomTxt>@babylikelion@likelion.ac.kr</S.BottomTxt>
    </S.GuideWrapper>
  );
};

export default ExpertGuide;
