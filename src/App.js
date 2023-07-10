import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import TrangCh12 from "./pages/TrangCh12";
import ThngTinTuynSinh from "./pages/ThngTinTuynSinh";
import ThngTinTuynSinh11 from "./pages/ThngTinTuynSinh11";
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
import TrangCh2 from "./pages/TrangCh2";
import TrangCh1 from "./pages/TrangCh1";
import { useEffect } from "react";
import Main from "./Main";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/thongtintuyensinh":
        title = "";
        metaDescription = "";
        break;
      case "/thongtintuyensinh1":
        title = "";
        metaDescription = "";
        break;
      case "/thongtintuyensinhthemtruong1":
        title = "";
        metaDescription = "";
        break;
      case "/thongtintuyensinhxoa":
        title = "";
        metaDescription = "";
        break;
      case "/thongtintuyensinh2":
        title = "";
        metaDescription = "";
        break;
      case "/thongtintuyensinhdangnhap3":
        title = "";
        metaDescription = "";
        break;
      case "/thongtintuyensinh3":
        title = "";
        metaDescription = "";
        break;
      case "/thongtintuyensinhdangnhap2":
        title = "";
        metaDescription = "";
        break;
      case "/thongtintuyensinh4":
        title = "";
        metaDescription = "";
        break;
      case "/thongtintuyensinhchinhsua3":
        title = "";
        metaDescription = "";
        break;
      case "/thongtintuyensinhchinhsua2":
        title = "";
        metaDescription = "";
        break;
      case "/thongtintuyensinh5":
        title = "";
        metaDescription = "";
        break;
      case "/thongtintuyensinh6":
        title = "";
        metaDescription = "";
        break;
      case "/thongtintuyensinhthemtruong2":
        title = "";
        metaDescription = "";
        break;
      case "/thongtintuyensinh7":
        title = "";
        metaDescription = "";
        break;
      case "/thongtintuyensinhchinhsuaxacnhan":
        title = "";
        metaDescription = "";
        break;
      case "/thongtintuyensinhchinhsua1":
        title = "";
        metaDescription = "";
        break;
      case "/goiynguyenvongdangxuat":
        title = "";
        metaDescription = "";
        break;
      case "/goiynguyenvongketqua2":
        title = "";
        metaDescription = "";
        break;
      case "/danhsachnguyenvongtruong":
        title = "";
        metaDescription = "";
        break;
      case "/danhsachnguyenvongkhoi":
        title = "";
        metaDescription = "";
        break;
      case "/danhsachnguyenvongnganhdexuat":
        title = "";
        metaDescription = "";
        break;
      case "/danhsachnguyenvongnganh":
        title = "";
        metaDescription = "";
        break;
      case "/danhsachnguyenvong":
        title = "";
        metaDescription = "";
        break;
      case "/goiynguyenvongketqua1":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password-1":
        title = "";
        metaDescription = "";
        break;
      case "/qun-l-ngi-dng-chi-tit-cp-nht-quyn-1":
        title = "";
        metaDescription = "";
        break;
      case "/qun-l-ngi-dng-chi-tit-xo-quyn-3":
        title = "";
        metaDescription = "";
        break;
      case "/qun-l-ngi-dng-chi-tit-cp-nht-quyn-3":
        title = "";
        metaDescription = "";
        break;
      case "/qun-l-ngi-dng-chi-tit-xo-quyn-2":
        title = "";
        metaDescription = "";
        break;
      case "/qun-l-ngi-dng-chi-tit-cp-nht-quyn-2":
        title = "";
        metaDescription = "";
        break;
      case "/qun-l-ngi-dng-chi-tit-xo-quyn-1":
        title = "";
        metaDescription = "";
        break;
      case "/qun-l-ngi-dng-chi-tit-1":
        title = "";
        metaDescription = "";
        break;
      case "/qun-l-ngi-dng-chi-tit-1-3":
        title = "";
        metaDescription = "";
        break;
      case "/qun-l-ngi-dng-chi-tit-1-2":
        title = "";
        metaDescription = "";
        break;
      case "/qun-l-ngi-dng-1":
        title = "";
        metaDescription = "";
        break;
      case "/qun-l-ngi-dng-1-3":
        title = "";
        metaDescription = "";
        break;
      case "/qun-l-ngi-dng-1-thng-bo":
        title = "";
        metaDescription = "";
        break;
      case "/qun-l-ngi-dng-1-2":
        title = "";
        metaDescription = "";
        break;
      case "/ng-xut-1-1":
        title = "";
        metaDescription = "";
        break;
      case "/ng-xut-1-2":
        title = "";
        metaDescription = "";
        break;
      case "/nguyn-vng-chnh-sa-sa":
        title = "";
        metaDescription = "";
        break;
      case "/nguyn-vng-chnh-sa-xo":
        title = "";
        metaDescription = "";
        break;
      case "/nguyn-vng-1":
        title = "";
        metaDescription = "";
        break;
      case "/nguyn-vng-1-3":
        title = "";
        metaDescription = "";
        break;
      case "/nguyn-vng-1-2":
        title = "";
        metaDescription = "";
        break;
      case "/thng-k-2":
        title = "";
        metaDescription = "";
        break;
      case "/thng-k-1-2":
        title = "";
        metaDescription = "";
        break;
      case "/trang-ch-1-3":
        title = "";
        metaDescription = "";
        break;
      case "/trang-ch-1-2":
        title = "";
        metaDescription = "";
        break;
      case "/gi-nguyn-vng-scroll-down-1":
        title = "";
        metaDescription = "";
        break;
      case "/gi-nguyn-vng-scroll-down-2":
        title = "";
        metaDescription = "";
        break;
      case "/gi-nguyn-vng-drop-down-1":
        title = "";
        metaDescription = "";
        break;
      case "/gi-nguyn-vng-loading-1":
        title = "";
        metaDescription = "";
        break;
      case "/gi-nguyn-vng-2":
        title = "";
        metaDescription = "";
        break;
      case "/gi-nguyn-vng-21":
        title = "";
        metaDescription = "";
        break;
      case "/gi-nguyn-vng-1":
        title = "";
        metaDescription = "";
        break;
      case "/thng-tin-tuyn-sinh-ng-nhp-1":
        title = "";
        metaDescription = "";
        break;
      case "/thng-tin-tuyn-sinh-1":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in-3":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in-2":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in-1":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-4-2":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-4-1":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-3":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password-7-2":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password-8":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password-7-1":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password-6-2":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password-6-1":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password-5":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password-4":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password-3":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password-31":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password-2":
        title = "";
        metaDescription = "";
        break;
      case "/thng-tin-tuyn-sinh":
        title = "";
        metaDescription = "";
        break;
      case "/thng-tin-tuyn-sinh1":
        title = "";
        metaDescription = "";
        break;
      case "/thng-tin-tuyn-sinh-thm-trng-1":
        title = "";
        metaDescription = "";
        break;
      case "/thng-tin-tuyn-sinh-xo":
        title = "";
        metaDescription = "";
        break;
      case "/thng-tin-tuyn-sinh2":
        title = "";
        metaDescription = "";
        break;
      case "/thng-tin-tuyn-sinh-chnh-sa-3":
        title = "";
        metaDescription = "";
        break;
      case "/thng-tin-tuyn-sinh-chnh-sa-2":
        title = "";
        metaDescription = "";
        break;
      case "/thng-tin-tuyn-sinh-3":
        title = "";
        metaDescription = "";
        break;
      case "/thng-tin-tuyn-sinh-2":
        title = "";
        metaDescription = "";
        break;
      case "/thng-tin-tuyn-sinh-thm-trng-2":
        title = "";
        metaDescription = "";
        break;
      case "/thng-tin-tuyn-sinh-11":
        title = "";
        metaDescription = "";
        break;
      case "/thng-tin-tuyn-sinh-chnh-sa-xc-nhn":
        title = "";
        metaDescription = "";
        break;
      case "/thng-tin-tuyn-sinh-chnh-sa-1":
        title = "";
        metaDescription = "";
        break;
      case "/trang-ch-2":
        title = "";
        metaDescription = "";
        break;
      case "/trang-ch-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      {/* <Route path="/" element={<TrangCh12 />} /> */}
      {/* <Route path="/thongtintuyensinh" element={<ThngTinTuynSinh />} />
      <Route path="/thongtintuyensinh1" element={<ThngTinTuynSinh11 />} />
      <Route
        path="/thongtintuyensinhthemtruong1"
        element={<ThngTinTuynSinhThmTr />}
      />
      <Route path="/thongtintuyensinhxoa" element={<ThngTinTuynSinhXo />} />
      <Route path="/thongtintuyensinh2" element={<ThngTinTuynSinh2 />} />
      <Route
        path="/thongtintuyensinhdangnhap3"
        element={<ThngTinTuynSinhNgNhp1 />}
      />
      <Route path="/thongtintuyensinh3" element={<ThngTinTuynSinh3 />} />
      <Route
        path="/thongtintuyensinhdangnhap2"
        element={<ThngTinTuynSinhNgNhp11 />}
      />
      <Route path="/thongtintuyensinh4" element={<ThngTinTuynSinh21 />} />
      <Route
        path="/thongtintuyensinhchinhsua3"
        element={<ThngTinTuynSinhChnhSa />}
      />
      <Route
        path="/thongtintuyensinhchinhsua2"
        element={<ThngTinTuynSinhChnhSa1 />}
      />
      <Route path="/thongtintuyensinh5" element={<ThngTinTuynSinh31 />} />
      <Route path="/thongtintuyensinh6" element={<ThngTinTuynSinh22 />} />
      <Route
        path="/thongtintuyensinhthemtruong2"
        element={<ThngTinTuynSinhThmTr1 />}
      />
      <Route path="/thongtintuyensinh7" element={<ThngTinTuynSinh111 />} />
      <Route
        path="/thongtintuyensinhchinhsuaxacnhan"
        element={<ThngTinTuynSinhChnhSa2 />}
      />
      <Route
        path="/thongtintuyensinhchinhsua1"
        element={<ThngTinTuynSinhChnhSa3 />}
      />
      <Route path="/goiynguyenvongdangxuat" element={<GiNguynVngNgXut />} />
      <Route path="/goiynguyenvongketqua2" element={<GiNguynVngKtQu2 />} />
      <Route
        path="/danhsachnguyenvongtruong"
        element={<DanhSchNguynVngTrng />}
      />
      <Route path="/danhsachnguyenvongkhoi" element={<DanhSchNguynVngKhi />} />
      <Route
        path="/danhsachnguyenvongnganhdexuat"
        element={<DanhSchNguynVngNgnh />}
      />
      <Route
        path="/danhsachnguyenvongnganh"
        element={<DanhSchNguynVngNgnh1 />}
      />
      <Route path="/danhsachnguyenvong" element={<DanhSchNguynVng />} />
      <Route path="/goiynguyenvongketqua1" element={<GiNguynVngKtQu1 />} />
      <Route path="/forgot-password-1" element={<ForgotPassword1 />} />
      <Route
        path="/qun-l-ngi-dng-chi-tit-cp-nht-quyn-1"
        element={<QunLNgiDngChiTitC />}
      />
      <Route
        path="/qun-l-ngi-dng-chi-tit-xo-quyn-3"
        element={<QunLNgiDngChiTitXo />}
      />
      <Route
        path="/qun-l-ngi-dng-chi-tit-cp-nht-quyn-3"
        element={<QunLNgiDngChiTitC1 />}
      />
      <Route
        path="/qun-l-ngi-dng-chi-tit-xo-quyn-2"
        element={<QunLNgiDngChiTitXo1 />}
      />
      <Route
        path="/qun-l-ngi-dng-chi-tit-cp-nht-quyn-2"
        element={<QunLNgiDngChiTitC2 />}
      />
      <Route
        path="/qun-l-ngi-dng-chi-tit-xo-quyn-1"
        element={<QunLNgiDngChiTitXo2 />}
      />
      <Route path="/qun-l-ngi-dng-chi-tit-1" element={<QunLNgiDngChiTit1 />} />
      <Route
        path="/qun-l-ngi-dng-chi-tit-1-3"
        element={<QunLNgiDngChiTit11 />}
      />
      <Route
        path="/qun-l-ngi-dng-chi-tit-1-2"
        element={<QunLNgiDngChiTit12 />}
      />
      <Route path="/qun-l-ngi-dng-1" element={<QunLNgiDng1 />} />
      <Route path="/qun-l-ngi-dng-1-3" element={<QunLNgiDng13 />} />
      <Route path="/qun-l-ngi-dng-1-thng-bo" element={<QunLNgiDng1ThngBo />} />
      <Route path="/qun-l-ngi-dng-1-2" element={<QunLNgiDng12 />} />
      <Route path="/ng-xut-1-1" element={<NgXut11 />} />
      <Route path="/ng-xut-1-2" element={<NgXut12 />} />
      <Route path="/nguyn-vng-chnh-sa-sa" element={<NguynVngChnhSaSa />} />
      <Route path="/nguyn-vng-chnh-sa-xo" element={<NguynVngChnhSaXo />} />
      <Route path="/nguyn-vng-1" element={<NguynVng1 />} />
      <Route path="/nguyn-vng-1-3" element={<NguynVng13 />} />
      <Route path="/nguyn-vng-1-2" element={<NguynVng12 />} />
      <Route path="/thng-k-2" element={<ThngK2 />} />
      <Route path="/thng-k-1-2" element={<ThngK12 />} />
      <Route path="/trang-ch-1-3" element={<TrangCh13 />} />
      <Route path="/trang-ch-1-2" element={<TrangCh121 />} />
      <Route
        path="/gi-nguyn-vng-scroll-down-1"
        element={<GiNguynVngScrollDown />}
      />
      <Route
        path="/gi-nguyn-vng-scroll-down-2"
        element={<GiNguynVngScrollDown1 />}
      />
      <Route
        path="/gi-nguyn-vng-drop-down-1"
        element={<GiNguynVngDropDown1 />}
      />
      <Route path="/gi-nguyn-vng-loading-1" element={<GiNguynVngLoading1 />} />
      <Route path="/gi-nguyn-vng-2" element={<GiNguynVng2 />} />
      <Route path="/gi-nguyn-vng-21" element={<GiNguynVng21 />} />
      <Route path="/gi-nguyn-vng-1" element={<GiNguynVng1 />} />
      <Route
        path="/thng-tin-tuyn-sinh-ng-nhp-1"
        element={<ThngTinTuynSinhNgNhp />}
      />
      <Route path="/thng-tin-tuyn-sinh-1" element={<ThngTinTuynSinh1 />} />
      <Route path="/sign-in-3" element={<SIgnIn3 />} />
      <Route path="/sign-in-2" element={<SIgnIn2 />} />
      <Route path="/sign-in-1" element={<SIgnIn1 />} />
      <Route path="/sign-up-4-2" element={<SIgnUp42 />} />
      <Route path="/sign-up-4-1" element={<SIgnUp41 />} />
      <Route path="/sign-up-3" element={<SIgnUp3 />} />
      <Route path="/forgot-password-7-2" element={<ForgotPassword72 />} />
      <Route path="/forgot-password-8" element={<ForgotPassword8 />} />
      <Route path="/forgot-password-7-1" element={<ForgotPassword71 />} />
      <Route path="/forgot-password-6-2" element={<ForgotPassword62 />} />
      <Route path="/forgot-password-6-1" element={<ForgotPassword61 />} />
      <Route path="/forgot-password-5" element={<ForgotPassword5 />} />
      <Route path="/forgot-password-4" element={<ForgotPassword4 />} />
      <Route path="/forgot-password-3" element={<ForgotPassword3 />} />
      <Route path="/forgot-password-31" element={<ForgotPassword31 />} />
      <Route path="/forgot-password-2" element={<ForgotPassword2 />} />
      <Route path="/thng-tin-tuyn-sinh" element={<ThngTinTuynSinh4 />} />
      <Route path="/thng-tin-tuyn-sinh1" element={<ThngTinTuynSinh12 />} />
      <Route
        path="/thng-tin-tuyn-sinh-thm-trng-1"
        element={<ThngTinTuynSinhThmTr2 />}
      />
      <Route path="/thng-tin-tuyn-sinh-xo" element={<ThngTinTuynSinhXo1 />} />
      <Route path="/thng-tin-tuyn-sinh2" element={<ThngTinTuynSinh23 />} />
      <Route
        path="/thng-tin-tuyn-sinh-chnh-sa-3"
        element={<ThngTinTuynSinhChnhSa4 />}
      />
      <Route
        path="/thng-tin-tuyn-sinh-chnh-sa-2"
        element={<ThngTinTuynSinhChnhSa11 />}
      />
      <Route path="/thng-tin-tuyn-sinh-3" element={<ThngTinTuynSinh32 />} />
      <Route path="/thng-tin-tuyn-sinh-2" element={<ThngTinTuynSinh211 />} />
      <Route
        path="/thng-tin-tuyn-sinh-thm-trng-2"
        element={<ThngTinTuynSinhThmTr11 />}
      />
      <Route path="/thng-tin-tuyn-sinh-11" element={<ThngTinTuynSinh1111 />} />
      <Route
        path="/thng-tin-tuyn-sinh-chnh-sa-xc-nhn"
        element={<ThngTinTuynSinhChnhSa21 />}
      />
      <Route
        path="/thng-tin-tuyn-sinh-chnh-sa-1"
        element={<ThngTinTuynSinhChnhSa31 />}
      />
      <Route path="/trang-ch-2" element={<TrangCh2 />} />
      <Route path="/trang-ch-1" element={<TrangCh1 />} /> */}
    </Routes>
  );
}
export default App;
