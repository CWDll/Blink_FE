import React from "react";
import * as S from "./style";
import MypageNav from "../../components/mypage/mypageNav/MypageNav";
import MyProfile from "../../components/mypage/myProfile/MyProfile";
import ChatList from "../../components/mypage/chatList/ChatList";

const Mypage = () => {
  return (
    <S.MypageWrapper>
      <div>
        <MypageNav />
        <S.DisplayFlex>
          <MyProfile />
          <ChatList />
        </S.DisplayFlex>
      </div>
      <div>최근 검색어</div>
    </S.MypageWrapper>
  );
};

export default Mypage;
