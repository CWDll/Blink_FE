import React, { useState } from "react";
import * as S from "./style";
import CardContainer from "../../components/mainpage/CardContainer/CardContainer";
import Search from "../../components/mainpage/SearchContainer/Search";
import MapContainer from "../../components/mainpage/Map/MapContainer";
import * as M from "../../components/mainpage/Map/style";

const Mainpage = () => {
  return (
    <S.MainWrapper>
      <div>
        <Search />
        <CardContainer />
      </div>
      <MapContainer />
      <M.AddPostButton>블랙박스 기록 추가하기</M.AddPostButton>
    </S.MainWrapper>
  );
};

export default Mainpage;
