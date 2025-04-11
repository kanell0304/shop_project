import React from "react";
import {Routes, Route } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import LoginPage from "../Pages/LoginPage";
import SignupStep1 from "../Pages/SignupStep1";
import SignupStep2 from "../Pages/SignupStep2";
import SignupComplete from "../Pages/SignupComplete";
import Profile from "../MyPage/Profile";
import Wishlist from "../MyPage/Wishlist";
import MagazinePage from "../Magazine/MagazinePage";
import MagazineDetail from "../Magazine/MagazineDetail"

const Root = () => {
  return (
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
  )
}

export default Root;
