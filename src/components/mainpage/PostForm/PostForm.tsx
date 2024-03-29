import React from "react";
import * as S from "./style";
import Button from "../../atoms/Buttons/Button";

function PostForm() {
  return (
    <S.PostFormContainer>
      <Button text="1번 버튼" color="black" />
      <Button text="2번 버튼" color="red" />
      <Button text="3번 버튼" color="blue" />
      <Button text="3번 버튼" color="white" />
    </S.PostFormContainer>
  );
}

export default PostForm;
