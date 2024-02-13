import styled from "styled-components";

export const NavWrapper = styled.div`
  width: 140px;
  height: 100vh;
  padding: 18px 0;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  background: #1b2130;
  cursor: default;
  z-index: 100;
`;
export const MenuWrapper = styled.div`
  /* min-height: ; */
`;

export const IconSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const NavLogoImg = styled.img`
  width: 120px;
  flex-shrink: 0;
`;
export const IconImg = styled.img`
  width: 40px;
`;
export const ProfileImg = styled.img`
  width: 60px;
  height: 60px;
  background-size: cover;
`;
export const NavTxt = styled.div`
  color: #7d8692;
  font-family: "Noto Sans KR";
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 10px;
  margin-bottom: 20px;
`;
export const SubBottom = styled.div`
  position: absolute;
  bottom: 5px;
`;
export const NavLine = styled.div`
  width: 60px;
  height: 1px;

  margin: 30px 0;
  background: #7d8692;
`;
