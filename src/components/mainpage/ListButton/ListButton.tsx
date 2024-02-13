import React, { useState } from "react";
import * as S from "./style";

const ListButton = () => {
  const [selectedButton, setSelectedButton] = useState("find");

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  return (
    <S.BoxContainer>
      <S.ListButton
        selected={selectedButton === "find"}
        onClick={() => handleButtonClick("find")}
      >
        찾아요
      </S.ListButton>
      <S.PostButton
        selected={selectedButton === "report"}
        onClick={() => handleButtonClick("report")}
      >
        제보해요
      </S.PostButton>
    </S.BoxContainer>
  );
};

export default ListButton;
