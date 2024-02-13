import React, { useState } from "react";
import * as S from "./style";

function SortOption() {
  const [selectedOption, setSelectedOption] = useState("distance");

  const handleButtonClick = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <S.OptionContainer>
      <div>
        <S.ReportPerWeekText>
          일주일 제보 수 <S.ReportCount>123</S.ReportCount>
        </S.ReportPerWeekText>
      </div>
      <div>
        <S.DistanceOption
          selected={selectedOption === "distance"}
          onClick={() => handleButtonClick("distance")}
        >
          · 거리순
        </S.DistanceOption>
        <S.RecentOption
          selected={selectedOption === "recent"}
          onClick={() => handleButtonClick("recent")}
        >
          · 최신순
        </S.RecentOption>
        <S.OldOption
          selected={selectedOption === "old"}
          onClick={() => handleButtonClick("old")}
        >
          · 오래된 순
        </S.OldOption>
      </div>
    </S.OptionContainer>
  );
}

export default SortOption;
