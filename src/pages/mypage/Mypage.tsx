import React from "react";
import MypageNav from "../../components/mypage/mypageNav/MypageNav";
import MyProfile from "../../components/mypage/myProfile/MyProfile";
import ChatList from "../../components/mypage/chatList/ChatList";

const Mypage = () => {
  return (
    <div>
      <MypageNav />
      <div>
        <MyProfile />
        <ChatList />
      </div>
    </div>
  );
};

export default Mypage;
