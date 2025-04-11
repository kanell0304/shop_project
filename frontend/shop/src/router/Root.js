import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignupStep1 from "./pages/SignupStep1";
import SignupStep2 from "./pages/SignupStep2";
import SignupComplete from "../Pages/SingupComplete";
import Profile from "../MyPage/Profile";
import Wishlist from "../MyPage/WishList";
import MagazineDetail from "../Magazine/MagazineDetail";
import MagazinePage from "../Magazine/MagazinePage";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup/step1" element={<SignupStep1/>}/>
        <Route path="/signup/step2" element={<SignupStep2/>}/>
        <Route path="/signup/complete" element={<SignupComplete/>}/>
        <Route path="/mypage/profile" element={<Profile/>}/>
        <Route path="/mypage/wishlist" element={<Wishlist/>}/>
        <Route path="/magazine" element={<MagazinePage/>}/>
        <Route path="/magazine/detail" element={<MagazineDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Root;
