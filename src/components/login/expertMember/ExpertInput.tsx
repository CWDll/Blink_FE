import React, { useState } from "react";
import * as S from "./style";

const ExpertInput = () => {
  const [selected, setSelected] = useState("");
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  return (
    <div>
      <S.InfoWrapper>
        <S.PersonalInfo placeholder="사용하실 아이디를 입력해주세요" />
        <S.PersonalInfo placeholder="사용하실 비밀번호를 입력해주세요" />
        <S.PersonalInfo placeholder="비밀번호를 다시 한번 입력해주세요" />
        <S.PersonalInfo placeholder="사용하실 닉네임을 작성해주세요" />
      </S.InfoWrapper>
      <S.SelectSection>
        <div>가입하게 된 경로를 알려주세요!</div>
        <select onChange={handleSelect}>
          <option value="a">유튜브, 인스타그램 등 SNS</option>
          <option value="b">지인 소개</option>
          <option value="c">인터넷 검색</option>
        </select>
      </S.SelectSection>
    </div>
  );
};

export default ExpertInput;
