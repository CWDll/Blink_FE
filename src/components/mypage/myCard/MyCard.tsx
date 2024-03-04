import React, { useState } from "react";
import * as S from "./style";

interface MyCardProps {
  title: string;
}

const MyCard: React.FC<MyCardProps> = ({ title }) => {
  const [myList, setMyList] = useState([
    "글1",
    "글2",
    "글3",
    "글4",
    "글5",
    "글6",
  ]);

  return (
    <div>
      <div>
        <div>{title}</div>
        <div>더보기</div>
      </div>
      {myList.map((data) => (
        <div>{data}</div>
      ))}
    </div>
  );
};

export default MyCard;
