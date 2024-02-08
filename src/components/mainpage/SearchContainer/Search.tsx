import React, { useState } from "react";
import * as S from "./style";
import Tag from "./Tag";
import searchIcon from "../../../assets/Icon/search.svg";

function Search() {
  // 태그 길이 길어지면 ... 으로 자를까 해서 미리 작성해둠.
  // const displayText = text.length > 6 ? `${text.slice(0, 6)}...` : text;
  const [inputText, setInputText] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && inputText) {
      setTags([...tags, inputText]);
      setInputText("");
    }
  };
  const clickSearch = (e: React.MouseEvent) => {
    if (inputText) {
      setTags([...tags, inputText]);
      setInputText("");
    } else {
      alert("검색어를 입력해주세요.");
    }
  };

  const deleteTag = (index: number) => {
    setTags(tags.filter((_, idx) => idx !== index));
  };

  return (
    <S.Container>
      <S.Input
        value={inputText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <S.SearchIcon src={searchIcon} alt="검색" onClick={clickSearch} />
      <div>
        <S.LocationText>최근 검색 지역</S.LocationText>
        <S.TagConatainer>
          {tags.map((tag, index) => (
            <Tag key={index} text={tag} onDelete={() => deleteTag(index)} />
          ))}
        </S.TagConatainer>
      </div>
    </S.Container>
  );
}

export default Search;
