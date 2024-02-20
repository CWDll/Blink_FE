import React from "react";
import * as S from "./style";
import Mypage from "../mypage/Mypage";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Hotissue from "../../components/communitypage/Hotissue/Hotissue";
import BulletinBoard from "../../components/communitypage/BulletinBoard/BulletinBoard";

const Community = () => {
  const navigate = useNavigate();

  const handleMyPageButtonClick = () => {
    navigate("/mypage");
  };
  return (
    <>
      <S.BgWrapper>
        <S.CommunityHeader>
          <S.SearchContainer>
            <S.SearchInput>
              <input
                type="text"
                placeholder="블링크 소식을 검색하세요"
                style={{ width: "550px", border: "none", outline: "none" }}
              />
            </S.SearchInput>
            <S.MyArticleButton onClick={handleMyPageButtonClick}>
              나의 글
            </S.MyArticleButton>
            <S.WriteButton>글 작성하기</S.WriteButton>
            <S.AdZone />
          </S.SearchContainer>
        </S.CommunityHeader>

        <S.HotIssue>
          <S.HotIssueTop>
            <S.HotIssueLeft>
              <S.HotIssueTitle>실시간 B:LINK 핫이슈 !</S.HotIssueTitle>
              <S.HotIssueTime>2023-12-10 기준 · 좋아요 수 10위</S.HotIssueTime>
            </S.HotIssueLeft>
            <S.HotIssueMore>
              더보기
              <FontAwesomeIcon icon={faChevronRight} />
            </S.HotIssueMore>
          </S.HotIssueTop>
          <S.CardContainer>
            <Hotissue />
            <Hotissue />
            <Hotissue />
            <Hotissue />
          </S.CardContainer>
        </S.HotIssue>
        <S.Divider />
        <S.BulletinContainer>
          <BulletinBoard />
          <BulletinBoard />
        </S.BulletinContainer>
      </S.BgWrapper>
    </>
  );
};

export default Community;
