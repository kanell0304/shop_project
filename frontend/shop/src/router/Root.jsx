import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import memberRouter from "./memberRouter";

const Loading = <div>Loading....</div>;
const Main = lazy(() => import("../Pages/main/MainPage"));

// 🔸 이건 라우터 설정만 담은 객체
const rootRouter = createBrowserRouter([
  {
    path: "",
    element: <Suspense><Main/></Suspense>
  },
  {
    path: "member",
    children: memberRouter()
  }
]);

// 🔸 이게 React 컴포넌트
const Root = () => {
  return <RouterProvider router={rootRouter} />;
};


export default Root;


// 레거시
// import IndexPage from "../Pages/IndexPage";
// import Profile from "../Pages/myPage/Profile";
// import Wishlist from "../Pages/myPage/Wishlist";
// import Order from "../Pages/myPage/Order";
// import Mileage from "../Pages/myPage/Mileage";
// import MagazinePage from "../Pages/magazine/MagazinePage";
// import MagazineDetail from "../Pages/magazine/MagazineDetail"
// import ItemListPage from "../Pages/shop/ItemListPage";

// const Root = () => {
//   return (
//       <Routes>
//         <Route path="/" element={<IndexPage/>} />
//         {/* <Route path="/login" element={<LoginPage/>}/> */}
//         {/* <Route path="/signup/step1" element={<SignupStep1/>}/> */}
//         {/* <Route path="/signup/step2" element={<SignupStep2/>}/> */}
//         {/* <Route path="/signup/complete" element={<SignupComplete/>}/> */}
//         <Route path="/mypage/profile" element={<Profile/>}/>
//         <Route path="/mypage/wishlist" element={<Wishlist/>}/>
//         <Route path="/mypage/order" element={<Order/>}/>
//         <Route path="/mypage/mileage" element={<Mileage/>}/>
//         <Route path="/shop" element={<ItemListPage/>}/>
//         <Route path="/magazine" element={<MagazinePage/>}/>
//         <Route path="/magazine/detail" element={<MagazineDetail/>}/>
        
//       </Routes>
//   )
// }

// export default Root;
