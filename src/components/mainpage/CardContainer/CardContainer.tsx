import React from "react";
import * as S from "./style";
import Card from "../Card/Card";
import ListButton from "../ListButton/ListButton";
import SortOption from "../SortOption/SortOption";
import AboutLocation from "../Location/AboutLocation";

const CardContainer = () => {
  return (
    <S.CardContainer>
      <AboutLocation />
      <ListButton />
      <SortOption />
      <Card />
    </S.CardContainer>
  );
};

export default CardContainer;
