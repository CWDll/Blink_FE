import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  font-family: "Noto Sans KR";
  font-size: 20px;
  /* border: 1px solid red; */
  border-radius: 30px;
  width: 400px;
  height: 300px;
  flex-direction: column;
  margin-top: 5px;
  margin-right: 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  font-family: "Noto Sans KR";
  font-size: 18px;
  border-radius: 16px;
  width: 400px;
  height: 50px;

  background-color: #f0f6ff;

  padding: 22px;
  font-weight: 500;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid red; */
`;

export const Title = styled.div`
  display: flex;
  font-family: "Noto Sans KR";
  font-size: 18px;
  border-radius: 16px;
  /* width: 400px;
  height: 50px; */
  align-items: center;

  font-weight: 500;
`;

export const More = styled.div`
  display: flex;
  font-family: "Noto Sans KR";
  font-size: 12px;
  border-radius: 16px;
  /* width: 400px;
  height: 50px; */
  font-weight: 500;
  gap: 3px;
  color: #71777d;
`;

export const Article = styled.div`
  display: flex;
  font-family: "Noto Sans KR";
  font-size: 12px;
  width: 400px;
  height: 45px;
  justify-content: space-between;
  align-items: center;
  padding: 10px 22px;
  font-weight: 400;
  border-bottom: 0.7px solid lightgray;
`;

export const SubTitle = styled.div`
  display: flex;
  font-family: "Noto Sans KR";
  font-size: 12px;
  justify-content: flex-start;
  align-items: center;
  font-weight: 400;
`;

export const SubDetail = styled.div`
  display: flex;
  gap: 10px;
`;

export const Date = styled.div`
  display: flex;
  font-family: "Noto Sans KR";
  font-size: 10px;
  font-weight: 400;
  color: #71777d;
`;

export const Like = styled.div`
  display: flex;
  font-family: "Noto Sans KR";
  font-size: 10px;
  font-weight: 400;
  color: #007aff;
  gap: 2px;
`;
