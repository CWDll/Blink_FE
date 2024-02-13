import styled from "styled-components";
import { ExpertSignupBtn } from "../../../pages/login/style";

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
`;
export const PersonalInfo = styled.input`
  width: 80%;
  max-width: 940px;
  height: 101px;
  padding-left: 50px;
  border-radius: 15px;
  border: 0;
  background: #ecf1f6;
  font-family: "Noto Sans KR";
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  ::placeholder {
    color: #8999ae;
  }
`;
export const SelectSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #000;
  font-family: "Noto Sans KR";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const GeneralInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ExpertSignup = styled(ExpertSignupBtn)`
  margin-top: 30px;
`;
export const SmallTxt = styled.div`
  color: #1b2130;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 150% */
`;
export const MoveToExpert = styled.img`
  width: 146px;
`;
