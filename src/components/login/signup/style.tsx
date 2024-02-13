import styled from "styled-components";

interface bgColorProps {
  bgcolor: string;
}

// ExpertGuide.tsx
export const GuideWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 368px;
  height: 100vh;

  background-color: #1b2130;
  color: #fff;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;

  gap: 70px;
  img {
    width: 70px;
  }
`;
export const BottomTxt = styled.div`
  position: absolute;
  bottom: 20px;

  color: rgba(255, 255, 255, 0.4);
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

// SelectType.tsx
export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  img {
    width: 490px;
    height: 631px;
    flex-shrink: 0;
  }
`;
export const RelativeWrapper = styled.div`
  position: relative;
`;
export const SignupBtn = styled.button<bgColorProps>`
  width: 200px;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 50px;
  left: 160px;

  border-radius: 12px;
  border: 0;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);

  background-color: ${(props) => props.bgcolor};
  color: #fff;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
