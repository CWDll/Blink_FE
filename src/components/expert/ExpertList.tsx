// ExpertList.tsx

import React, { useState, useEffect } from "react";
import * as S from "./style";
import ExpertCard from "./ExpertCard";

const ExpertList: React.FC = () => {
  const [expertListTitle, setExpertListTitle] = useState("형사 전문");

  return (
    <S.ExpertListWrapper>
      <S.ExpertListTitleContainer>
        <S.ExpertListTitle>{expertListTitle}</S.ExpertListTitle>
        <S.ExpertListSubtitle> B:Link 전문가</S.ExpertListSubtitle>
      </S.ExpertListTitleContainer>
      <S.ExpertListCardContainer>
        <ExpertCard />
      </S.ExpertListCardContainer>
    </S.ExpertListWrapper>
  );
};

export default ExpertList;
