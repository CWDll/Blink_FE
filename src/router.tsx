import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Mainpage from "./pages/mainpage/Mainpage";
import Community from "./pages/community/Community";
import Expert from "./pages/expert/Expert";
import Mypage from "./pages/mypage/Mypage";
import NotFound from "./pages/NotFound";
import Login from "./pages/login/Login";
import SignUp from "./pages/login/SignUp";
import GeneralMember from "./pages/login/GeneralMember";
import ExpertMember from "./pages/login/ExpertMember";
import ExpertTypeList from "./pages/expert/ExpertTypeList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Mainpage />,
      },
      {
        path: "community",
        element: <Community />,
      },
      {
        path: "expert",
        element: <Expert />,
      },
      {
        path: "expertTypeList",
        element: <ExpertTypeList />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "signup/generalMember",
        element: <GeneralMember />,
      },
      {
        path: "signup/expertMember",
        element: <ExpertMember />,
      },
      {
        path: "mypage",
        element: <Mypage />,
      },
      {
        path: "notification",
        element: <Mypage />, //알림 페이지 제작시 수정 필요
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
