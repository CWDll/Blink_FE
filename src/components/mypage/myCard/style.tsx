import styled from "styled-components";

interface MyCardType {
  borderColor: string;
}

export const MyCardWrapper = styled.div<MyCardType>`
  width: 560px;
  height: 325px;

  background-color: #fff;
  border-radius: 10px;
  border: 2px solid ${(props) => props.borderColor};
  box-shadow: 0px 5px 5px #dfdfdf;
`;
export const FlexSpaceBtwn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
export const ContentsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #e2e7eb;
  padding: 20px;
`;
export const FontSize24 = styled.div`
  font-size: 24px;
  color: #1b2130;
  margin-top: 10px;
`;
export const ColorGray = styled.div`
  color: #858d92;
  font-size: 14px;
`;
export const DisplayFlex = styled.div`
  display: flex;
  gap: 20px;
  font-size: 10px;
`;
export const GrayColor = styled.div`
  color: #71777d;
`;
export const BlueColor = styled.div`
  color: #007aff;
`;
export const TitleFont = styled.div`
  font-size: 14px;
  color: #1b2130;
`;
