// ExpertCard.tsx

import React, { useState, useEffect } from "react";
import * as S from "./style";
import ExpertCardComponent from "./ExpertCardComponent";
import expertprofile from "../../assets/image/expert/ExpertPhoto.png";
import { ExpertListCardProps } from "./ExpertCardComponent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardSlider, CustomPrevArrow, CustomNextArrow } from "./style";

const ExpertCard: React.FC = () => {
  const [expertListTitle, setExpertListTitle] = useState("형사 전문");
  const [expertListData, setExpertListData] = useState<ExpertListCardProps[]>(
    []
  );

  useEffect(() => {
    // API 호출
    const fetchExpertListData = async () => {
      try {
        const response = await fetch("API 작성하는 곳");
        const data = await response.json();

        const title = data.expertListTitle;
        const expertDataList = data.expertList || [];

        setExpertListTitle(title);
        setExpertListData(expertDataList);
      } catch (error) {
        console.error("Error fetching expert list data:", error);

        // 실패 시 기본 값
        const defaultData: ExpertListCardProps = {
          expertProfile: expertprofile,
          tags: ["형사 전문", "교통사고", "운전"],
          summary: "마약 분야 공인전문검사 블루밸트 이런식으로",
          name: "변호사 보노보노",
          description:
            "부장검사출신의 노하우<br />강력부, 형사부, 특수부 경력을 통해<br />항상 최적의 솔루션을 드리겠습니다~..",
        };

        setExpertListTitle("형사 전문");
        setExpertListData([
          defaultData,
          defaultData,
          defaultData,
          defaultData,
          defaultData,
        ]);
      }
    };

    fetchExpertListData();
  }, []);

  const sliderSettings = {
    rows: 1,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    vertical: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <CardSlider {...sliderSettings} className="slick-container">
      {expertListData.map((expertData, index) => (
        <ExpertCardComponent key={index} {...expertData} />
      ))}
    </CardSlider>
  );
};

export default ExpertCard;
