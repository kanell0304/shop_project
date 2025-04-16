import React from "react";
import {Routes, Route } from "react-router-dom";
import IndexPage from "../Pages/IndexPage";
import LoginPage from "../Pages/login/LoginPage";
import SignupStep1 from "../Pages/login/SignupStep1";
import SignupStep2 from "../pages/login/SignupStep2";
import SignupComplete from "../pages/login/SignupComplete";
import Profile from "../Pages/myPage/Profile";
import Wishlist from "../Pages/myPage/Wishlist";
import Order from "../Pages/myPage/Order";
import Mileage from "../Pages/myPage/Mileage";
import MagazinePage from "../Pages/magazine/MagazinePage";
import MagazineDetail from "../Pages/magazine/MagazineDetail"
import ItemListPage from "../Pages/shop/ItemListPage";
import GuidePage from "../Pages/footer/GuidePage";
import TermsPage from "../Pages/footer/TermsPage";
import PrivacyPolicyPage from "../Pages/footer/PrivacyPolicyPage";

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
        <Route path="/mypage/mileage" element={<Mileage/>}/>
        <Route path="/shop" element={<ItemListPage/>}/>
        <Route path="/magazine" element={<MagazinePage/>}/>
        <Route path="/magazine/detail" element={<MagazineDetail/>}/>
        <Route path="/terms" element={<TermsPage/>}/>
        <Route path="/guide" element={<GuidePage/>}/>
        <Route path="/privacyPolicy" element={<PrivacyPolicyPage/>}/>
      </Routes>
  )
}

export default Root;
