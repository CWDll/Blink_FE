import React from "react";
import * as S from "./style";

const AboutLocation: React.FC = () => {
  return (
    <S.LocationBox>
      <S.MyLocationContainer>
        <S.DefaultLocationText>기본 지역</S.DefaultLocationText>
        {/* 버튼의 색깔은 설정위치 === 현재 위치 일 때만  색을 바꾸도록 해야 함.*/}
        <S.MyLocationButton />
      </S.MyLocationContainer>
      <S.SelectedLocationText>은평구 응암1동</S.SelectedLocationText>
    </S.LocationBox>
  );
};

export default AboutLocation;
