import { Suspense, lazy } from "react";
const Loading = <div>Loading...."</div>
const AdminMainPage = lazy(()=> import("../../Pages/myPage/admin/AdminMainPage")) // 어드민 페이지
const OrderListComponent  = lazy(()=>import("../../components/mypage/admin/order/OrderListCompoent")); // 주문
const ProductListComponent  = lazy(()=>import("../../components/mypage/admin/product/ProductListComponent")); // 상품
const CartagoryComponent  = lazy(()=>import("../../Components/mypage/admin/category/CategoryCompoenet")); // 분류(카테고리)
const BoardListComponent  = lazy(()=>import("../../components/mypage/admin/board/BoardListCompoenet")); // 게시판
const InquiryListComponent  = lazy(()=>import("../../components/mypage/admin/inquiry/InquiryListCompoenet")); //문의


const adminRouter = () => {
  return [
    {
        path:"mypage",
        element: <Suspense fallback={Loading}><AdminMainPage/></Suspense>,
        childrenp:[
          {
            path: "order",
            element: <Suspense fallback={Loading}><OrderListComponent /></Suspense>
          },
          {
            path: "product",
            element: <Suspense fallback={Loading}><ProductListComponent /></Suspense>
          },
          {
            path: "cartagory",
            element: <Suspense fallback={Loading}><CartagoryComponent /></Suspense>
          },
          {
            path: "board",
            element: <Suspense fallback={Loading}><BoardListComponent /></Suspense>
          }
        ]
    },
  ]
}

export default adminRouter;