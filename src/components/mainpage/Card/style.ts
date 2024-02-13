import styled, { css } from "styled-components";
import xButton from "../../../assets/button/xButton.svg";
import camera from "../../../assets/Icon/camera.svg";

export const CardBox = styled.div`
  display: flex;
  width: 416px;
  height: 310px;
  flex-shrink: 0;
  padding-bottom: 6px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  background-color: #e7e9ed;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;

export const ButtonPrimary = styled(Button)`
  background-color: #007aff; // Replace with the exact blue from your screenshot
  color: white;
  border: none;
`;

export const ButtonSecondary = styled(Button)`
  background-color: transparent;
  color: #007aff;
  border: 1px solid #007aff;
`;
export const ContentTitle = styled.p`
  color: #1e2025;

  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.4px;
  padding-left: 10px;
`;

export const ContentInfoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ContentInfoText = styled.p`
  color: #7f8082;

  font-family: "Noto Sans KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.28px;
  padding-left: 10px;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 416px;
  height: 310px;
`;

export const InnerImage = styled.img`
  width: 100%;
  height: auto;
`;

export const DefaultButtonStyle = css`
  position: absolute;
  padding: 8px 20px;
  gap: 10px;
  border-radius: 50px;
  border: 0;
  margin-bottom: 4px;
`;

export const ButtonTopLeft = styled.button`
  ${DefaultButtonStyle}
  top: 10px;
  left: 10px;
  /* background: black; */
  color: white;
  padding-left: 36px;
  margin-top: 4px;

  background: black url(${camera}) no-repeat left 14px center;
  background-size: 14px;
`;

export const ButtonBottomRightFirst = styled.button`
  ${DefaultButtonStyle}
  bottom: 10px;
  right: 110px;
`;

export const ButtonBottomRightSecond = styled.button`
  ${DefaultButtonStyle}
  bottom: 10px;
  right: 10px;
  background: #f9fcff;
`;
