import React, { useState } from "react";
import * as S from "./style";
import glassIcon from "../../assets/image/expert/glassIcon.png";

// 검색 컴포넌트
const SearchComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  const handleGlassIconClick = () => {
    // const form = document.getElementById(
    //   "searchForm"
    // ) as HTMLFormElement | null;
    // if (form) {
    //   form.submit();
    // }
    console.log("Searching for:", searchTerm);
  };

  return (
    <S.TopWrapper>
      <S.TopRightContainer>
        <S.SearchForm id="searchForm" onSubmit={handleSearchSubmit}>
          <S.InputWrapper>
            <S.SearchInput
              type="text"
              placeholder="블링크 전문가를 검색하세요"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <S.GlassIcon
              src={glassIcon}
              alt="search"
              onClick={handleGlassIconClick}
            />
          </S.InputWrapper>
        </S.SearchForm>
      </S.TopRightContainer>
      <S.TopLeftContainer>
        <S.TopLeftBookMark>북마크</S.TopLeftBookMark>
        <S.TopLeftGoToExpert>전문가 홈</S.TopLeftGoToExpert>
      </S.TopLeftContainer>
    </S.TopWrapper>
  );
};

export default SearchComponent;
