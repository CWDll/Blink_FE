import React from "react";
import * as S from "./style";

const MyProfile = () => {
  return (
    <S.MyprofileWrapper>
      <S.LeftContents>
        <img src="" alt="프로필 사진" />
        <div>기본 정보 수정</div>
      </S.LeftContents>
      <div>
        <div>보노보노</div>
        <div>일반 회원</div>
        <div>이메일</div>
        <div>bonobono@gmail.combo</div>
        <div>nobono@gmail.com</div>
        <div>상담한 전문가 수</div>
        <div>3명</div>
        <div>로그아웃</div>
      </div>
    </S.MyprofileWrapper>
  );
};

export default MyProfile;
