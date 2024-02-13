import styled from "styled-components";
import myLocation from "../../../assets/button/myLocation.svg";

export const LocationBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 100px;
  padding: 16px 0 16px 0;
  padding-top: 0px;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  /* background-color: #e7e9ed; */
`;

export const MyLocationButton = styled.button`
  background: url(${myLocation}) no-repeat center;
  background-size: 116px;

  width: 121px;
  height: 26px;
  border: none;
  /* margin-left: 4px; */
`;

export const MyLocationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DefaultLocationText = styled.p`
  color: #1b2130;

  font-family: "Noto Sans KR";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SelectedLocationText = styled(DefaultLocationText)`
  font-weight: 500;
  font-size: 32px;
`;
