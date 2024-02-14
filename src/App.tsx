import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/layouts/nav/Nav";
import Footer from "./components/layouts/footer/Footer";
import { GlobalStyle } from "./globalStyle";
import { RecoilRoot } from "recoil";

const BackGroundColor = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  background-color: rgba(237, 241, 246, 0.95);
`;

const Wrapper = styled.div`
  position: relative; /* footer를 고정하기 위함 */
  margin: 0 auto;
  width: 100%;
  flex-grow: 1;
  font-family: NotoSansRegular; /* 기본 폰트설정 */
`;

const Layout = () => {
  const location = useLocation();

  return (
    <BackGroundColor>
      {location.pathname !== "/login" && <Nav />}
      <Wrapper>
        <Outlet />
        {/* {location.pathname !== "/signup" && <Footer />} */}
        {location.pathname !== "/login" &&
          !location.pathname.startsWith("/signup") && <Footer />}
      </Wrapper>
    </BackGroundColor>
  );
};

function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <Layout />
      </RecoilRoot>
    </>
  );
}

export default App;
