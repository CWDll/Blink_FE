import styled from "styled-components";

export const BgWrapper = styled.div`
  background: linear-gradient(180deg, #f0f6ff 9.9%, #fff 23.44%);
  display: flex;
  padding: 40px;
  justify-content: space-between;
  align-items: flex-start;
  color: #333; // 텍스트 색상 설정
  flex-direction: column;
  width: 100%;
`;

export const CommunityHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const SearchContainer = styled.div`
  display: inline-flex;
  flex: 1;
  width: 100%;
  /* justify-content: center; */
  flex-direction: row;
  /* align-items: start; */
  /* gap: 20px; */
`;

export const SearchInput = styled.div`
  border-radius: 10px;
  border: 1px solid #98b5d5;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
  padding: 10px;
  height: 50px;
  /* width: 600px; */
`;

export const MyArticleButton = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 15px;
  background: #8294a3;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  color: #fff;
  width: 90px;
  height: 50px;
  margin-left: 30px;
  font-family: "Noto Sans KR";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const WriteButton = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: #1b2130;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
  width: 120px;
  height: 50px;
  margin-left: 10px;
  color: #fff;
  font-family: "Noto Sans KR";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const AdZone = styled.div`
  display: flex;
  width: 340px;
  height: 151px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #d9d9d9;
  margin: 0px 0px 0px 50px;
`;

export const HotIssue = styled.div`
  display: flex;
  justify-content: space-between;
  /* width: 150px; */
  flex-direction: column;
  margin-top: 40px;
`;

export const HotIssueTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 820px;
  flex-direction: row;
`;

export const HotIssueLeft = styled.div`
  display: flex;
  /* width: 800px; */
`;

export const HotIssueTitle = styled.div`
  display: flex;
  color: #000;
  font-family: "Noto Sans KR";
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 15px;
`;

export const HotIssueTime = styled.div`
  display: flex;
  color: #6b747e;
  font-family: "Noto Sans KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  align-items: flex-end;
  margin-left: 10px;
`;

export const HotIssueMore = styled.div`
  display: flex;
  color: #858d92;
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.2px;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 76px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
`;

export const Divider = styled.div`
  border-bottom: 4px solid #eef2f7;
  width: 820px;
  /* height: 4px; */
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const BulletinContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BulletinDirection = styled.div`
  display: flex;
  flex-direction: row;
`;
