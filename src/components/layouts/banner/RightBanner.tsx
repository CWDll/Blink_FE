import React, { useState } from "react";
import * as S from "./style";
import CloseBtn from "../../../assets/Icon/close.svg";

const RightBanner = () => {
  const [searchHistory, setSearchHistory] = useState([
    "뽀로로",
    "루피",
    "블링크",
    "이아코",
    "김태희",
    "카리나",
    "장원영",
    "김태리",
  ]);
  const [hotTopic, setHotTopic] = useState([
    { ranking: 1, topic: "형사 고소" },
    { ranking: 2, topic: "교통사고" },
    { ranking: 3, topic: "블랙박스" },
    { ranking: 4, topic: "민사 고소" },
    { ranking: 5, topic: "무단횡단" },
  ]);

  const handleHistoryDelete = () => {};

  return (
    <S.RightBannerWrapper>
      <S.BannerImg>
        <img src="" alt="banner" />
      </S.BannerImg>
      <S.SearchHistoryLabel>
        <S.Size24Colorgray>최근 검색어</S.Size24Colorgray>
        <S.SearchedWordLabel>
          {searchHistory.map((keyword) => (
            <S.PositionRel>
              <S.SearchedWord>{keyword}</S.SearchedWord>
              <S.CloseBtn
                src={CloseBtn}
                alt="X"
                onClick={handleHistoryDelete}
              />
            </S.PositionRel>
          ))}
        </S.SearchedWordLabel>
      </S.SearchHistoryLabel>
      <S.HotTopicLabel>
        <S.Size24ColorBlue>실시간 인기 토픽</S.Size24ColorBlue>
        {hotTopic.map((topic) => (
          <S.DisplayFlex>
            <S.BgBlue>{topic.ranking}</S.BgBlue>
            <S.FontSize20>{topic.topic}</S.FontSize20>
          </S.DisplayFlex>
        ))}
      </S.HotTopicLabel>
      <S.BannerImg>
        <img src="" alt="banner" />
      </S.BannerImg>
    </S.RightBannerWrapper>
  );
};

export default RightBanner;
