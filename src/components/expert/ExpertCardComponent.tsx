// ExpertCardComponent.tsx

import React from "react";
import * as S from "./style";

export interface ExpertListCardProps {
  expertProfile: string;
  tags: string[];
  summary: string;
  name: string;
  description: string;
}

const ExpertCardComponent: React.FC<ExpertListCardProps> = ({
  expertProfile,
  tags,
  summary,
  name,
  description,
}) => {
  return (
    <S.ExpertListCardWrapper>
      <S.ExpertListPhoto src={expertProfile}></S.ExpertListPhoto>
      <S.ExpertListTagList>
        {tags.map((tag, index) => (
          <S.ExpertListTag key={index}>{tag}</S.ExpertListTag>
        ))}
      </S.ExpertListTagList>
      <S.ExpertListSummary>{summary}</S.ExpertListSummary>
      <S.ExpertListName>{name}</S.ExpertListName>
      <S.ExpertListdescribe dangerouslySetInnerHTML={{ __html: description }} />
    </S.ExpertListCardWrapper>
  );
};

export default ExpertCardComponent;
