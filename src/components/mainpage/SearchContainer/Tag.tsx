import React from "react";
import * as S from "./style";

interface TagProps {
  text: string;
  onDelete: () => void;
}

const Tag: React.FC<TagProps> = ({ text, onDelete }) => {
  return (
    <S.Tag>
      {text}
      <S.XButton onClick={onDelete} />
    </S.Tag>
  );
};

export default Tag;
