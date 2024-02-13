import React from "react";
import * as S from "./style";
import testMap from "../../../assets/image/test/testMap.svg";

function CardInnerImage() {
  function Event() {
    alert("버튼 클릭 이벤트 발생");
  }
  return (
    <S.ImageContainer>
      <S.InnerImage src={testMap} />
      <S.ButtonTopLeft onClick={Event}>블박 플레이</S.ButtonTopLeft>
      <S.ButtonBottomRightFirst onClick={Event}>
        찾아요
      </S.ButtonBottomRightFirst>
      <S.ButtonBottomRightSecond onClick={Event}>
        제보해요
      </S.ButtonBottomRightSecond>
    </S.ImageContainer>
  );
}
export default CardInnerImage;
