import { useState } from "react";
import TrangCh1, { styles } from "./pages/TrangCh1";
import TrangCh2 from "./pages/TrangCh2";
import TrangCh12 from "./pages/TrangCh12";
import ThngTinTuynSinh from "./pages/ThngTinTuynSinh";
import ThngTinTuynSinh11 from "./pages/ThngTinTuynSinh11";
import ThngTinTuynSinhThmTr from "./pages/ThngTinTuynSinhThmTr";
import ThngTinTuynSinhXo from "./pages/ThngTinTuynSinhXo";
import ThngTinTuynSinh2 from "./pages/ThngTinTuynSinh2";
import ThngTinTuynSinhNgNhp1 from "./pages/ThngTinTuynSinhNgNhp1";
import ThngTinTuynSinh3 from "./pages/ThngTinTuynSinh3";
import ThngTinTuynSinhNgNhp11 from "./pages/ThngTinTuynSinhNgNhp11";
import ThngTinTuynSinh21 from "./pages/ThngTinTuynSinh21";
import ThngTinTuynSinhChnhSa from "./pages/ThngTinTuynSinhChnhSa";
import ThngTinTuynSinhChnhSa1 from "./pages/ThngTinTuynSinhChnhSa1";
import ThngTinTuynSinh31 from "./pages/ThngTinTuynSinh31";
import ThngTinTuynSinh22 from "./pages/ThngTinTuynSinh22";
import ThngTinTuynSinhThmTr1 from "./pages/ThngTinTuynSinhThmTr1";
import ThngTinTuynSinh111 from "./pages/ThngTinTuynSinh111";
import ThngTinTuynSinhChnhSa2 from "./pages/ThngTinTuynSinhChnhSa2";
import ThngTinTuynSinhChnhSa3 from "./pages/ThngTinTuynSinhChnhSa3";
import GiNguynVngNgXut from "./pages/GiNguynVngNgXut";
import GiNguynVngKtQu2 from "./pages/GiNguynVngKtQu2";
import DanhSchNguynVngTrng from "./pages/DanhSchNguynVngTrng";
import DanhSchNguynVngKhi from "./pages/DanhSchNguynVngKhi";
import DanhSchNguynVngNgnh from "./pages/DanhSchNguynVngNgnh";
import DanhSchNguynVngNgnh1 from "./pages/DanhSchNguynVngNgnh1";
import DanhSchNguynVng from "./pages/DanhSchNguynVng";
import GiNguynVngKtQu1 from "./pages/GiNguynVngKtQu1";
import ForgotPassword1 from "./pages/ForgotPassword1";
import QunLNgiDngChiTitC from "./pages/QunLNgiDngChiTitC";
import QunLNgiDngChiTitXo from "./pages/QunLNgiDngChiTitXo";
import QunLNgiDngChiTitC1 from "./pages/QunLNgiDngChiTitC1";
import QunLNgiDngChiTitXo1 from "./pages/QunLNgiDngChiTitXo1";
import QunLNgiDngChiTitC2 from "./pages/QunLNgiDngChiTitC2";
import QunLNgiDngChiTitXo2 from "./pages/QunLNgiDngChiTitXo2";
import QunLNgiDngChiTit1 from "./pages/QunLNgiDngChiTit1";
import QunLNgiDngChiTit11 from "./pages/QunLNgiDngChiTit11";
import QunLNgiDngChiTit12 from "./pages/QunLNgiDngChiTit12";
import QunLNgiDng1 from "./pages/QunLNgiDng1";
import QunLNgiDng13 from "./pages/QunLNgiDng13";
import QunLNgiDng1ThngBo from "./pages/QunLNgiDng1ThngBo";
import QunLNgiDng12 from "./pages/QunLNgiDng12";
import NgXut11 from "./pages/NgXut11";
import NgXut12 from "./pages/NgXut12";
import NguynVngChnhSaSa from "./pages/NguynVngChnhSaSa";
import NguynVngChnhSaXo from "./pages/NguynVngChnhSaXo";
import NguynVng1 from "./pages/NguynVng1";
import NguynVng13 from "./pages/NguynVng13";
import NguynVng12 from "./pages/NguynVng12";
import ThngK2 from "./pages/ThngK2";
import ThngK12 from "./pages/ThngK12";
import TrangCh13 from "./pages/TrangCh13";
import TrangCh121 from "./pages/TrangCh121";
import GiNguynVngScrollDown from "./pages/GiNguynVngScrollDown";
import GiNguynVngScrollDown1 from "./pages/GiNguynVngScrollDown1";
import GiNguynVngDropDown1 from "./pages/GiNguynVngDropDown1";
import GiNguynVngLoading1 from "./pages/GiNguynVngLoading1";
import GiNguynVng2 from "./pages/GiNguynVng2";
import GiNguynVng21 from "./pages/GiNguynVng21";
import GiNguynVng1 from "./pages/GiNguynVng1";
import ThngTinTuynSinhNgNhp from "./pages/ThngTinTuynSinhNgNhp";
import ThngTinTuynSinh1 from "./pages/ThngTinTuynSinh1";
import SIgnIn3 from "./pages/SIgnIn3";
import SIgnIn2 from "./pages/SIgnIn2";
import SIgnIn1 from "./pages/SIgnIn1";
import SIgnUp42 from "./pages/SIgnUp42";
import SIgnUp41 from "./pages/SIgnUp41";
import SIgnUp3 from "./pages/SIgnUp3";
import ForgotPassword72 from "./pages/ForgotPassword72";
import ForgotPassword8 from "./pages/ForgotPassword8";
import ForgotPassword71 from "./pages/ForgotPassword71";
import ForgotPassword62 from "./pages/ForgotPassword62";
import ForgotPassword61 from "./pages/ForgotPassword61";
import ForgotPassword5 from "./pages/ForgotPassword5";
import ForgotPassword4 from "./pages/ForgotPassword4";
import ForgotPassword3 from "./pages/ForgotPassword3";
import ForgotPassword31 from "./pages/ForgotPassword31";
import ForgotPassword2 from "./pages/ForgotPassword2";
import ThngTinTuynSinh4 from "./pages/ThngTinTuynSinh4";
import ThngTinTuynSinh12 from "./pages/ThngTinTuynSinh12";
import ThngTinTuynSinhThmTr2 from "./pages/ThngTinTuynSinhThmTr2";
import ThngTinTuynSinhXo1 from "./pages/ThngTinTuynSinhXo1";
import ThngTinTuynSinh23 from "./pages/ThngTinTuynSinh23";
import ThngTinTuynSinhChnhSa4 from "./pages/ThngTinTuynSinhChnhSa4";
import ThngTinTuynSinhChnhSa11 from "./pages/ThngTinTuynSinhChnhSa11";
import ThngTinTuynSinh32 from "./pages/ThngTinTuynSinh32";
import ThngTinTuynSinh211 from "./pages/ThngTinTuynSinh211";
import ThngTinTuynSinhThmTr11 from "./pages/ThngTinTuynSinhThmTr11";
import ThngTinTuynSinh1111 from "./pages/ThngTinTuynSinh1111";
import ThngTinTuynSinhChnhSa21 from "./pages/ThngTinTuynSinhChnhSa21";
import ThngTinTuynSinhChnhSa31 from "./pages/ThngTinTuynSinhChnhSa31";
import KSTC1 from "./pages/k-s-t-c1";
import KSTC3 from "./pages/k-s-t-c3";
import KSTC4 from "./pages/k-s-t-c4";
import KSTC5 from "./pages/k-s-t-c5";
import KSTC6 from "./pages/k-s-t-c6";
import KSTC7 from "./pages/k-s-t-c7";
import KSTC8 from "./pages/k-s-t-c8";
import KSTC9 from "./pages/k-s-t-c9";
import KSTC10 from "./pages/k-s-t-c10";
import KSTC11 from "./pages/k-s-t-c11";
import KSTC12 from "./pages/k-s-t-c12";
import LogIn from "./components/main/SignIn";
import SignUp from "./components/main/SignUp";

const Main = () => {
  const [page, setPage] = useState(1);
  const goToDetailUniversity = () => {
    setPage(7);
  };
  const goToGoiYNguyenVong = () => {
    setPage(32);
  };
  const goToDanhSachKhoiThi = () => {
    setPage(33);
  };
  const goToDoPhuHop = () => {
    setPage(34);
  };
  const goToDanhSachNguyenVong = () => {
    setPage(36);
  };
  const goToDanhSachNguyenVongDeXuat = () => {
    setPage(37);
  };
  const goToLogOut = () => {
    setPage(61);
  };
  const goToPrepareLogOut = () => {
    setPage(62);
  };
  const goToGoiYnguyenVong = () => {
    setPage(63);
  };
  const goToGoiYnguyenVongList = () => {
    setPage(69);
  };
  const goToWrongPassword = () => {
    setPage(70);
  };
  const goToLoginScreen = () => {
    setPage(71);
  };
  const goToSignUpScreen = () => {
    setPage(73);
  };
  const goToSignUpNoYetPasswrord = () => {
    setPage(74);
  };
  const signUpScreen = () => {
    setPage(75);
  };
  const goToForgotPassword = () => {
    setPage(76);
  };
  const goToChangePasswordSuccess = () => {
    setPage(77);
  };
  const goToChangePassword1 = () => {
    setPage(81);
  };
  const goToChangePassword2 = () => {
    setPage(80);
  };
  const goToChangePassword3 = () => {
    setPage(79);
  };
  const goToChangePassword4 = () => {
    setPage(78);
  };
  const goToOTPTimeOut = () => {
    setPage(82);
  };
  const goToOTP = () => {
    setPage(83);
  };
  const forgotPasswordMail = () => {
    setPage(84);
  };
  const goToNhomTinhCach = () => {
    setPage(0);
  };
  const goToXetTuyenDaiHoc = () => {
    setPage(1);
  };
  const loginSuccess = () => {
    setPage(30);
  };
  return (
    <div>
      {/* <button
        style={{ backgroundColor: "#E2D6F5", border: "none" }}
        onClick={() => {
          if (page === 0) setPage(86);
          else setPage(page - 1);
        }}
      >
        Back
      </button>{" "}
      {page}{" "}
      <button
        style={{ backgroundColor: "#E2D6F5", border: "none" }}
        onClick={() => {
          if (page === 86) setPage(0);
          else setPage(page + 1);
        }}
      >
        Next
      </button> */}
      {page === 0 && <TrangCh2 goToXetTuyenDaiHoc={goToXetTuyenDaiHoc} />}
      {page === 1 && (
        <TrangCh1
          goToDetailUniversity={goToDetailUniversity}
          goToNhomTinhCach={goToNhomTinhCach}
          goToLoginScreen={goToLoginScreen}
        />
      )}
      {page === 2 && <TrangCh13 />}
      {page === 3 && <TrangCh121 />}
      {page === 4 && <TrangCh13 />}
      {page === 5 && <TrangCh121 />}
      {page === 6 && <ThngTinTuynSinh3 />}
      {page === 7 && <ThngTinTuynSinh21 signUpScreen={signUpScreen} />}
      {page === 8 && <ThngTinTuynSinhChnhSa />}
      {page === 9 && <ThngTinTuynSinhChnhSa1 />}
      {page === 10 && <ThngTinTuynSinh31 />}
      {page === 11 && <ThngTinTuynSinh22 />}
      {page === 12 && <ThngTinTuynSinhThmTr1 />}
      {page === 13 && <ThngTinTuynSinh111 />}
      {page === 14 && <ThngTinTuynSinhChnhSa2 />}
      {page === 15 && <ThngTinTuynSinhChnhSa3 />}
      {page === 16 && <ThngTinTuynSinh11 />}
      {page === 17 && <ThngTinTuynSinh2 />}
      {page === 18 && <ThngTinTuynSinh12 />}
      {page === 19 && <ThngTinTuynSinhThmTr2 />}
      {page === 20 && <ThngTinTuynSinhXo1 />}
      {page === 21 && <ThngTinTuynSinh23 />}
      {page === 22 && <ThngTinTuynSinhChnhSa4 />}
      {page === 23 && <ThngTinTuynSinhChnhSa11 />}
      {page === 24 && <ThngTinTuynSinh32 />}
      {page === 25 && <ThngTinTuynSinh211 />}
      {page === 26 && <ThngTinTuynSinhThmTr11 />}
      {page === 27 && <ThngTinTuynSinh1111 />}
      {page === 28 && <ThngTinTuynSinhChnhSa21 />}
      {page === 29 && <ThngTinTuynSinhChnhSa31 />}
      {page === 30 && (
        <ThngTinTuynSinhNgNhp goToGoiYnguyenVongList={goToGoiYnguyenVongList} />
      )}
      {page === 31 && <ThngTinTuynSinh1 />}
      {page === 32 && <DanhSchNguynVngTrng />}
      {page === 33 && <DanhSchNguynVngKhi />}
      {page === 34 && <DanhSchNguynVngNgnh />}
      {page === 35 && <DanhSchNguynVngNgnh1 />}
      {page === 36 && (
        <DanhSchNguynVng
          goToDanhSachNguyenVongDeXuat={goToDanhSachNguyenVongDeXuat}
        />
      )}
      {page === 37 && (
        <GiNguynVngKtQu1 goToDanhSachNguyenVong={goToDanhSachNguyenVong} />
      )}
      {page === 38 && <ThngTinTuynSinh4 />}
      {page === 39 && <QunLNgiDngChiTitC />}
      {page === 40 && <QunLNgiDngChiTitXo />}
      {page === 41 && <QunLNgiDngChiTitC1 />}
      {page === 42 && <QunLNgiDngChiTitXo1 />}
      {page === 43 && <QunLNgiDngChiTitC2 />}
      {page === 44 && <QunLNgiDngChiTitXo2 />}
      {page === 45 && <QunLNgiDngChiTit1 />}
      {page === 46 && <QunLNgiDngChiTit11 />}
      {page === 47 && <QunLNgiDngChiTit12 />}
      {page === 48 && <QunLNgiDng1 />}
      {page === 49 && <QunLNgiDng13 />}
      {page === 50 && <QunLNgiDng1ThngBo />}
      {page === 51 && <QunLNgiDng12 />}
      {page === 52 && <NgXut11 />}
      {page === 53 && <NgXut12 />}
      {page === 54 && <NguynVngChnhSaSa />}
      {page === 55 && <NguynVngChnhSaXo />}
      {page === 56 && <NguynVng1 />}
      {page === 57 && <NguynVng13 />}
      {page === 58 && <NguynVng12 />}
      {page === 59 && <ThngK2 />}
      {page === 60 && <ThngK12 />}
      {page === 61 && <GiNguynVngNgXut />}
      {page === 62 && <GiNguynVngKtQu2 />}
      {page === 63 && <GiNguynVngScrollDown />}
      {page === 64 && <GiNguynVngScrollDown1 />}
      {page === 65 && <GiNguynVngDropDown1 />}
      {page === 66 && <GiNguynVngLoading1 />}
      {page === 67 && <GiNguynVng2 />}
      {page === 68 && <GiNguynVng21 />}
      {page === 69 && (
        <GiNguynVng1 goToDanhSachNguyenVong={goToDanhSachNguyenVong} />
      )}
      {page === 70 && <SIgnIn3 />}
      {page === 71 && (
        <LogIn
          loginSuccess={loginSuccess}
          goToXetTuyenDaiHoc={goToXetTuyenDaiHoc}
          signUpScreen={signUpScreen}
        />
      )}
      {page === 72 && <SIgnIn1 />}
      {page === 73 && <SIgnUp42 />}
      {page === 74 && <SIgnUp41 />}
      {page === 75 && (
        <SignUp
          goToLoginScreen={goToLoginScreen}
          goToXetTuyenDaiHoc={goToXetTuyenDaiHoc}
        />
      )}
      {page === 76 && <ForgotPassword72 />}
      {page === 77 && <ForgotPassword8 />}
      {page === 78 && <ForgotPassword71 />}
      {page === 79 && <ForgotPassword62 />}
      {page === 80 && <ForgotPassword61 />}
      {page === 81 && <ForgotPassword5 />}
      {page === 82 && <ForgotPassword4 />}
      {page === 83 && <ForgotPassword3 />}
      {page === 84 && <ForgotPassword31 />}
      {page === 85 && <ForgotPassword2 />}
      {page === 86 && <ForgotPassword1 />}
      {/* {page === 87 && <KSTC1 />}
      {page === 88 && <KSTC3 />}
      {page === 89 && <KSTC4 />}
      {page === 90 && <KSTC5 />}
      {page === 91 && <KSTC6 />}
      {page === 92 && <KSTC7 />}
      {page === 93 && <KSTC8 />}
      {page === 94 && <KSTC9 />}
      {page === 95 && <KSTC10 />}
      {page === 96 && <KSTC11 />}
      {page === 97 && <KSTC12 />} */}
      {/* <div style={styles.button} className="vuesaxlinearmessage-wrapper">
        <img
          className="vuesaxlinearmessage-icon1"
          alt=""
          src="/vuesaxlinearmessage1.svg"
        />
      </div> */}
    </div>
  );
};

export default Main;
