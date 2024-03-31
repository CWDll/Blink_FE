import React from "react";
import * as S from "./style";
import Button from "../../atoms/Buttons/Button";

function PostForm() {
  return (
    <S.PostFormContainer>
      <S.TopConainer>
        <S.TopBar>
          <Button text="나가기" color="black" />
          <h1>글 쓰기</h1>
        </S.TopBar>
        <S.TopBar>
          <Button text="글쓰기" color="black" />
          <Button text="작성 완료" color="black" />
        </S.TopBar>
      </S.TopConainer>
      <hr />
    </S.PostFormContainer>
  );
}

export default PostForm;
