import React from "react";
import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const BulletinBoard = () => {
  return (
    <>
      <S.CardContainer>
        <S.Title>자유게시판</S.Title>

        {/* 최신순으로 정렬 */}
        <S.Article>
          <S.SubTitle>커뮤니티에 글 처음써봐요 인사오지게 박습니다~</S.SubTitle>
          <S.SubDetail>
            <S.Date>2024.01.01</S.Date>
            <S.Like>
              <FontAwesomeIcon icon={faHeart} />
              1000
            </S.Like>
          </S.SubDetail>
        </S.Article>

        <S.Article>
          <S.SubTitle>커뮤니티에 글 처음써봐요 인사오지게 박습니다~</S.SubTitle>
          <S.SubDetail>
            <S.Date>2024.01.01</S.Date>
            <S.Like>
              <FontAwesomeIcon icon={faHeart} />
              1000
            </S.Like>
          </S.SubDetail>
        </S.Article>

        <S.Article>
          <S.SubTitle>커뮤니티에 글 처음써봐요 인사오지게 박습니다~</S.SubTitle>
          <S.SubDetail>
            <S.Date>2024.01.01</S.Date>
            <S.Like>
              <FontAwesomeIcon icon={faHeart} />
              1000
            </S.Like>
          </S.SubDetail>
        </S.Article>

        <S.Article>
          <S.SubTitle>커뮤니티에 글 처음써봐요 인사오지게 박습니다~</S.SubTitle>
          <S.SubDetail>
            <S.Date>2024.01.01</S.Date>
            <S.Like>
              <FontAwesomeIcon icon={faHeart} />
              1000
            </S.Like>
          </S.SubDetail>
        </S.Article>

        <S.Article>
          <S.SubTitle>커뮤니티에 글 처음써봐요 인사오지게 박습니다~</S.SubTitle>
          <S.SubDetail>
            <S.Date>2024.01.01</S.Date>
            <S.Like>
              <FontAwesomeIcon icon={faHeart} />
              1000
            </S.Like>
          </S.SubDetail>
        </S.Article>
      </S.CardContainer>
    </>
  );
};

export default BulletinBoard;
