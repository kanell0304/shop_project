import { Suspense, lazy } from "react";
const Loading = <div>Loading...."</div>
const AdminMainPage = lazy(()=> import("../../Pages/myPage/admin/AdminMainPage"))

const adminRouter = () => {
  return [
    {
        path:"",
        element: <Suspense fallback={Loading}><AdminMainPage/></Suspense>
    },
  ]
}

export default adminRouter;