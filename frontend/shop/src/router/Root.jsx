import React from "react";
import {Routes, Route } from "react-router-dom";
import IndexPage from "../Pages/IndexPage";
import LoginPage from "../Pages/login/LoginPage";
import SignupStep1 from "../pages/login/SignupStep1";
import SignupStep2 from "../pages/login/SignupStep2";
import SignupComplete from "../pages/login/SignupComplete";
import Profile from "../pages/myPage/Profile";
import Wishlist from "../Pages/myPage/Wishlist";
import Order from "../pages/myPage/Order";
import MagazinePage from "../pages/magazine/MagazinePage";
import MagazineDetail from "../pages/magazine/MagazineDetail"

const Root = () => {
  return (
      <Routes>
        <Route path="/" element={<IndexPage/>} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup/step1" element={<SignupStep1/>}/>
        <Route path="/signup/step2" element={<SignupStep2/>}/>
        <Route path="/signup/complete" element={<SignupComplete/>}/>
        <Route path="/mypage/profile" element={<Profile/>}/>
        <Route path="/mypage/wishlist" element={<Wishlist/>}/>
        <Route path="/mypage/order" element={<Order/>}/>
        <Route path="/magazine" element={<MagazinePage/>}/>
        <Route path="/magazine/detail" element={<MagazineDetail/>}/>
        
      </Routes>
  )
}

export default Root;
