import React from "react";
import * as S from "./style";
import CardContainer from "../../components/mainpage/CardContainer/CardContainer";
import Search from "../../components/mainpage/SearchContainer/Search";
import MapContainer from "../../components/mainpage/Map/MapContainer";

const Mainpage = () => {
  return (
    <S.MainWrapper>
      <div>
        <Search />
        <CardContainer />
      </div>
      <MapContainer />
    </S.MainWrapper>
  );
};

export default Mainpage;
