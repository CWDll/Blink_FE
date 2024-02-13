import styled, { css } from "styled-components";

interface OptionProps {
  selected: boolean;
}

export const OptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0 10px auto;
`;

export const ReportPerWeekText = styled.p`
  color: #828799;
  font-family: "Noto Sans KR";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ReportCount = styled.span`
  color: #1b2130;
  font-family: "Noto Sans KR";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const optionStyle = css`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 10px;
`;

export const DistanceOption = styled.span<OptionProps>`
  ${optionStyle}
  font-weight: bold;
  color: ${(props) => (props.selected ? "#34446D" : "#BABABA")};
`;

export const RecentOption = styled.span<OptionProps>`
  ${optionStyle}
  font-weight: bold;
  color: ${(props) => (props.selected ? "#34446D" : "#BABABA")};
`;

export const OldOption = styled.span<OptionProps>`
  ${optionStyle}
  font-weight: bold;
  color: ${(props) => (props.selected ? "#34446D" : "#BABABA")};
`;
