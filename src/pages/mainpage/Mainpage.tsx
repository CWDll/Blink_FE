import React from "react";
import * as S from "./style";
import CardContainer from "../../components/mainpage/CardContainer/CardContainer";
import Search from "../../components/mainpage/SearchContainer/Search";

const Mainpage = () => {
  return (
    <S.MainWrapper>
      <div>
        <Search />
        <CardContainer />
      </div>
      <div>구글맵 페이지</div>
    </S.MainWrapper>
  );
};

export default Mainpage;
