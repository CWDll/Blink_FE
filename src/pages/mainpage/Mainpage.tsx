import React from "react";
import CardContainer from "../../components/mainpage/CardContainer/CardContainer";
import Search from "../../components/mainpage/SearchContainer/Search";

const Mainpage = () => {
  return (
    <div>
      <Search />
      <CardContainer />
    </div>
  );
};

export default Mainpage;
