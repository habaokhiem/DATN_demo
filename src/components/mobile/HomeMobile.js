import { useEffect, useState } from "react";
import "./home-mobile.css";
import { listTop7Career } from "../../constants/listTop7Career";
import axios from "axios";
import { apiUrl } from "../../constants/api";
import AdminMobile from "./AdminMobile";
import UserMobile from "./UserMobile";

const HomeMobile = ({ goToLogin }) => {
  const [tab, setTab] = useState("nhomTinhCach");
  console.log("tab: ", tab);
  const [isShowSideBar, setIsShowSideBar] = useState(false);
  const [user, setUser] = useState(null);
  console.log("user: ", user);

  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user) {
      user = JSON.parse(user);
      setUser(user);
    }
  }, []);
  return user?.permission ? (
    <AdminMobile goToLogin={goToLogin} />
  ) : (
    <UserMobile goToLogin={goToLogin} />
  );
};

export default HomeMobile;
