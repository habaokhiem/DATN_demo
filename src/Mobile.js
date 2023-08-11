import { useState } from "react";
import HomeMobile from "./components/mobile/HomeMobile";
import SignInMobile from "./components/mobile/SignInMobile";
import SignUpMobile from "./components/mobile/SignUpMobile";
import MobileMobileMobileModalQLNDSid from "./components/mobile/mobile-mobile-mobile-modal-q-l-n-d-sid";
import { Helmet } from "react-helmet";

const Mobile = () => {
  const [page, setPage] = useState(1);

  const goToLogin = () => {
    setPage(2);
  };
  const signUpScreen = () => {
    setPage(3);
  };
  const goToXetTuyenDaiHoc = () => {
    setPage(1);
  };
  return (
    <div>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Helmet>
      {page === 1 && <HomeMobile goToLogin={goToLogin} />}
      {/* {page === 1 && <MobileMobileMobileModalQLNDSid goToLogin={goToLogin} />} */}
      {page === 2 && (
        <SignInMobile
          loginSuccess={goToXetTuyenDaiHoc}
          goToXetTuyenDaiHoc={goToXetTuyenDaiHoc}
          signUpScreen={signUpScreen}
        />
      )}
      {page === 3 && (
        <SignUpMobile
          goToLoginScreen={goToLogin}
          goToXetTuyenDaiHoc={goToXetTuyenDaiHoc}
        />
      )}
    </div>
  );
};
export default Mobile;
