import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
`;
export const RightWrapper = styled.div`
  flex: 1;
`;
export const RowWrapper = styled.div`
  display: flex;
`;
export const SignUpWrapper = styled.div`
  flex: 1;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;
  gap: 60px;
`;
export const MainTxt60 = styled.div`
  height: 340px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #34446d;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const MainTxt50 = styled(MainTxt60)`
  font-size: 50px;
`;
export const ExpertSignupBtn = styled.button`
  width: 260px;
  height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  border: 0;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);

  background-color: #0773ea;
  color: #fff;
  font-size: 28px;
  text-align: center;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
