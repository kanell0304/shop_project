import React,{ useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import BasicLayout from '../../../layout/BasicLayout';
import MyNav from '../../../components/mypage/MyNavComponent';
import MySection from '../../../components/mypage/MySectionComponent';

import { getCookie, setCookie, removeCookie } from "../../../util/cookieUtil";


import '../../../static/css/myNav.scss'
import '../../../static/css/mypage.scss'

const AdminMainPage =()=>{
    const navigate = useNavigate();
    const loginState = useSelector(state => state.loginSlice)
    const isLoggedIn = loginState && loginState.email !== '';
    const [memberInfo, setInfo] = useState(null);

    useEffect(() => {
        if (isLoggedIn) {
          const info = getCookie("member");
          setInfo(info);
        } else {
          setInfo(null);
        }
      }, [isLoggedIn]);


    useEffect(() => {
        if (memberInfo && (!memberInfo.roleNames || !memberInfo.roleNames.includes("ADMIN"))) {
        alert("관리자만 접근할 수 있습니다.");
        navigate("/");
        }
    }, [memberInfo, navigate]);


    return(
        <BasicLayout>
            <div class="mypageWrap">
                <MyNav/>
                <MySection/>
            </div>
        </BasicLayout>
    )
}
export default AdminMainPage;