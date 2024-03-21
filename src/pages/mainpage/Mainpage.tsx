import React, { useState } from "react";
import * as S from "./style";
import CardContainer from "../../components/mainpage/CardContainer/CardContainer";
import Search from "../../components/mainpage/SearchContainer/Search";
import MapContainer from "../../components/mainpage/Map/MapContainer";
import PostForm from "../../components/mainpage/PostForm/PostForm";
import * as M from "../../components/mainpage/Map/style";

const Mainpage = () => {
  const [showWriteForm, setShowWriteForm] = useState<boolean>(false);
  return (
    <S.MainWrapper>
      {showWriteForm ? (
        <PostForm />
      ) : (
        <div>
          <Search />
          <CardContainer />
        </div>
      )}
      <MapContainer />
      <M.AddPostButton onClick={() => setShowWriteForm(!showWriteForm)}>
        블랙박스 기록 추가하기
      </M.AddPostButton>
    </S.MainWrapper>
  );
};

export default Mainpage;
