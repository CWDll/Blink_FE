import React, { useEffect } from "react";
import * as S from "../../components/expert/style";
import { RecoilRoot } from "recoil";
import ExpertQuestion from "../../components/expert/ExpertQuestion";
import SearchComponent from "../../components/expert/SearchComponent";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { selectedExpertTypeState } from "../../recoil/expertState";
import ExpertTypeListCard from "../../components/expert/ExpertTypeListCard";

const ExpertTypeList: React.FC = () => {
  const [selectedExpertType, setSelectedExpertType] = useRecoilState(
    selectedExpertTypeState
  );

  useEffect(() => {
    const storedType = localStorage.getItem("selectedExpertType");
    if (storedType) {
      setSelectedExpertType(storedType);
    }
  }, []);

  return (
    <RecoilRoot>
      <S.ExpertWrapper>
        <SearchComponent />
        <ExpertQuestion />
        <ExpertTypeListCard />
      </S.ExpertWrapper>
    </RecoilRoot>
  );
};

export default ExpertTypeList;
