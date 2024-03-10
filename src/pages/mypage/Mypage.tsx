import React from "react";
import * as S from "./style";
import MypageNav from "../../components/mypage/mypageNav/MypageNav";
import MyProfile from "../../components/mypage/myProfile/MyProfile";
import ChatList from "../../components/mypage/chatList/ChatList";
import MyCard from "../../components/mypage/myCard/MyCard";
import RightBanner from "../../components/layouts/banner/RightBanner";

const Mypage = () => {
  return (
    <S.MypageWrapper>
      <div>
        <MypageNav />
        <S.DisplayFlex>
          <MyProfile />
          <ChatList />
        </S.DisplayFlex>
        <S.DisplayFlex>
          <MyCard topic="나의 찾아요" borderColor="#85e2f6" />
          <MyCard topic="나의 제보해요" borderColor="#97EF8F" />
        </S.DisplayFlex>
      </div>
      <RightBanner />
    </S.MypageWrapper>
  );
};

export default Mypage;
