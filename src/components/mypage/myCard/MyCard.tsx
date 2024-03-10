import React, { useState } from "react";
import * as S from "./style";

interface MyCardProps {
  topic: string;
  borderColor: string;
}

const MyCard: React.FC<MyCardProps> = ({ topic, borderColor }) => {
  const [myList, setMyList] = useState([
    { title: "글1", date: "2023.12.10", like: 1000 },
    { title: "글2", date: "2023.12.10", like: 1000 },
    { title: "글3", date: "2023.12.10", like: 1000 },
    { title: "글4", date: "2023.12.10", like: 1000 },
    { title: "글5", date: "2023.12.10", like: 1000 },
    { title: "글6", date: "2023.12.10", like: 1000 },
  ]);

  return (
    <S.MyCardWrapper borderColor={borderColor}>
      <S.FlexSpaceBtwn>
        <S.FontSize24>{topic}</S.FontSize24>
        <S.ColorGray>더보기</S.ColorGray>
      </S.FlexSpaceBtwn>
      {myList.slice(0, 5).map((data) => (
        <S.ContentsWrapper>
          <S.TitleFont>{data.title}</S.TitleFont>
          <S.DisplayFlex>
            <S.GrayColor>{data.date}</S.GrayColor>
            <S.BlueColor>{data.like}</S.BlueColor>
          </S.DisplayFlex>
        </S.ContentsWrapper>
      ))}
    </S.MyCardWrapper>
  );
};

export default MyCard;
