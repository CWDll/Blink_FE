import React, { useState, useEffect } from "react";
import * as S from "./style";
import ExpertCard from "./ExpertCard";

const ExpertTypeListCard: React.FC = () => {
  const [expertListTitle, setExpertListTitle] = useState("");

  useEffect(() => {
    const storedTitle = localStorage.getItem("selectedExpertType");
    if (storedTitle) {
      setExpertListTitle(storedTitle);
    }
  }, [localStorage.getItem("selectedExpertType")]); // 로컬 스토리지의 값이 변경될 때마다 실행되도록 설정

  return (
    <S.ExpertListWrapper>
      <S.ExpertListTitleContainer>
        <S.ExpertListTitle>{expertListTitle}</S.ExpertListTitle>
        <S.ExpertListSubtitle> B:Link 전문가</S.ExpertListSubtitle>
      </S.ExpertListTitleContainer>
      <S.ExpertListCardContainer></S.ExpertListCardContainer>
    </S.ExpertListWrapper>
  );
};

export default ExpertTypeListCard;
