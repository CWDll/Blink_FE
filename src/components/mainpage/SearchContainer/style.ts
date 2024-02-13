import styled from "styled-components";
import search from "../../../assets/Icon/search.svg";
import xButton from "../../../assets/button/xButton.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-around;
  width: 490px;
  height: 214px;
  padding: 20px 0 10px 30px;
  flex-shrink: 0;
  background-color: #c6d4e4;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.3);
`;

export const Input = styled.input.attrs({
  type: "text",
  placeholder: "어떤 지역의 제보를 찾으시나요?",
})`
  display: block; 
  width: 384px;
  height: 24px;
  padding: 16px 20px; 
  font-size: 1rem; 
  line-height: 1.5; 
  color: #333; 
  border-radius: 10px; 
  border: 1px solid #ddedff;
  /* outline: none; // 클릭 시 외곽선 제거 */

  // 입력창 내부에 검색 아이콘을 배치하기 위한 스타일
  background: #fff url(${search}) no-repeat right 16px center;
  background-size: 20px;

  // 플레이스홀더 스타일
  &::placeholder {
    color: #a5a5a5; 

  // 입력창 포커스 시 스타일
  &:focus {
    border-color: #007aff; // 포커스 됐을 때 테두리 색상
  }
`;

export const TagConatainer = styled.div`
  padding: 8px 0px;
  gap: 10px;
  /* background-color: red; */
  overflow-x: scroll;
  white-space: nowrap;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Tag = styled.div`
  display: inline-flex;
  align-items: center;
  width: auto;
  padding: 8px 12px;
  margin: 4px;
  font-size: 14px;
  border-radius: 10px;
  border: none;
  background: #f6f9ff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; // 넘치는 텍스트를 말줄임표로 표시

  // 태그 내 'X' 버튼에 대한 스타일
  .close-icon {
    display: inline-flex; // 아이콘을 inline-flex로 설정
    justify-content: center;
    align-items: center;
    margin-left: 8px; // 아이콘과 텍스트 사이의 간격을 추가
    cursor: pointer; // 마우스 오버 시 커서 변경
  }

  // 태그 텍스트의 최대 너비를 지정하여 글자 수에 따라 말줄임표를 적용
  .text {
    max-width: 80px; // 최대 너비를 설정하여 말줄임표를 적용할 길이를 결정
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const XButton = styled.button`
  /* background: url(${xButton}); */

  background: #fff url(${xButton}) no-repeat center;
  background-size: 10px;

  width: 14px;
  height: 14px;
  background-color: #f6f9ff;
  border: none;
  margin-left: 4px;
`;

export const LocationText = styled.span`
  color: #6a728a;
  /* text-align: right; */
  font-family: "Noto Sans KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-left: 10px;
`;
