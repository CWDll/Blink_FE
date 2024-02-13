import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  width: 230px;
  height: 385px;
  flex-shrink: 0;
  border-radius: 6.321px;
  background: #fff;
  box-shadow: 0px 2.528px 6.321px 0px rgba(0, 0, 0, 0.25);
  justify-content: flex-start;
  flex-direction: column;
`;

export const Thumbnail = styled.div`
  display: flex;
  width: 200px;
  height: 175px;
  flex-shrink: 0;
  border-radius: 6.321px;
  background: black;
  margin: 15px;
`;

export const Title = styled.div`
  display: flex;
  color: #000;
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.2px;
  width: 200px;
  justify-content: center;
`;

export const Contents = styled.div`
  display: flex;
  color: #6b747e;
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  letter-spacing: -0.2px;
  margin: 5px 15px 15px 15px;
  justify-content: center;
`;

export const Divider = styled.div`
  border-bottom: 1px solid #000;
  width: 820px;
  height: 4px;
`;
