import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import Move from "../../../assets/image/login/move_expert.png";

const MoveExpert = () => {
  const navigate = useNavigate();

  return (
    <div>
      <S.InfoWrapper>
        <S.SmallTxt>
          변호사, 손해사정사 등 전문가이신가요?
          <br />
          전문가 회원으로 전용 기능을 누려보세요.
        </S.SmallTxt>
        <S.MoveToExpert
          onClick={() => navigate("/signup/expertMember")}
          src={Move}
          alt="전문가 가입 >"
        />
      </S.InfoWrapper>
    </div>
  );
};

export default MoveExpert;
