import styled, { css } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const StyledLink = styled.a`
  text-decoration: none;
  outline: none;
`;

export const ExpertWrapper = styled.div`
  width: 70%;
`;

export const TopWrapper = styled.div`
  display: flex;
  gap: 100px;
`;

//검색창

export const TopRightContainer = styled.div`
  width: 60%;
`;

export const SearchForm = styled.form`
  display: inline-flex;
  padding: 44px 0px;
  margin-left: 30px;
  align-items: center;
  gap: 70px;
  width: 100%;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  height: 30px;
  text-indent: 10px;
  font-size: 15px;
  border-radius: 10px;
  border: 1px solid #98b5d5;
  box-shadow: 0px 4px 4px 0px rgb(0, 0, 0, 0.2);
  outline: none;
`;

export const GlassIcon = styled.img`
  position: absolute;
  top: 50%;
  right: -4px;
  transform: translateY(-50%);
  width: 20px;
  cursor: pointer;
`;

//북마크 & 전문가 홈
export const TopLeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: bold;
`;

export const TopLeftBookMark = styled.div`
  background-color: #8294a3;
  padding: 18px;
  border-radius: 15px;
  color: white;
  box-shadow: 0px 4px 4px 0px rgb(0, 0, 0, 0.2);
  cursor: pointer;
`;

export const TopLeftGoToExpert = styled.div`
  background-color: #1b2130;
  padding: 18px;
  border-radius: 20px;
  color: white;
  box-shadow: 0px 4px 4px 0px rgb(0, 0, 0, 0.2);
  cursor: pointer;
`;

//ExpertList.tsx

export const ExpertListWrapper = styled.div`
  /* border: 1px solid red; */
  margin-left: 40px;
`;

export const ExpertListTitleContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const ExpertListTitle = styled.div`
  color: #007aff;
  font-size: 30px;
  font-weight: bold;
`;

export const ExpertListSubtitle = styled.div`
  color: black;
  font-size: 30px;
  font-weight: bold;
`;

//ExpertListCard.tsx

export const ExpertCardContainer = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: row;
`;

export const ExpertListCardWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 10px;
  /* width: 21%; */
  padding: 10px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  width: 90%;
  background-color: white;
`;

export const CardSlider = styled(Slider)`
  .slick-list {
  }
`;

export const CustomPrevArrow = styled.div`
  width: 50px;
  height: 50px;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const CustomNextArrow = styled.div`
  width: 50px;
  height: 50px;
  z-index: 999;
  position: absolute;
  top: 50%;
  right: -5px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const ExpertListPhoto = styled.img`
  width: 100%;
`;

export const ExpertListTagList = styled.div`
  display: flex;
  gap: 5px;
`;

export const ExpertListTag = styled.span`
  background-color: #e2e7eb;
  color: #5e6472;
  padding: 5px;
  margin-top: 10px;
  display: inline-flex;
  border-radius: 5px;
  font-size: 0.8vw;
`;

export const ExpertListSummary = styled.div`
  color: #007aff;
  font-size: 0.6vw;
  font-weight: bold;
  margin-top: 20px;
`;

export const ExpertListName = styled.div`
  margin-top: 10px;
  font-weight: bold;
`;

export const ExpertListdescribe = styled.div`
  font-size: 0.7vw;
  color: #5e6472;
  line-height: 18px;
  margin-top: 15px;
`;

export const ExpertListCardContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  flex-direction: column;
`;

//ExpertCard.tsx

export const ArrowButton = styled.div`
  /* border: 1px solid red; */
  display: flex;
  width: 100%;
`;

//ExpertQuestion.tsx

export const ExpertQuestionWrapper = styled.div`
  margin-top: 10px;
  margin-left: 40px;
`;

export const ExpertQuestionTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const ExpertQuestionContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: #f0f6ff;
  border-radius: 20px;
  margin-top: 20px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
  padding: 40px;
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const ExpertType = styled.div`
  /* width: 80px; */
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const ExpertTypeImg = styled.img`
  width: 40%;
`;

export const ExpertTypeTitle = styled.div<{ selected: boolean }>`
  font-size: 15px;
  ${({ selected }) =>
    selected &&
    css`
      color: #007aff;
    `}
`;
