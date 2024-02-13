import React from "react";
import * as S from "./style";
import CardInnerImage from "./CardInnerImage";

const Card = () => {
  return (
    <S.CardBox>
      <CardInnerImage />
      <S.ContentTitle>인생이 힘들다</S.ContentTitle>
      <S.ContentInfoContainer>
        <S.ContentInfoText>2024.01.30 | 조회 2,000</S.ContentInfoText>
        <S.ContentInfoText>내 위치에서 2.1km</S.ContentInfoText>
      </S.ContentInfoContainer>
    </S.CardBox>
  );
};

export default Card;
