import { useState } from "react";
import "../../pages/SIgnIn2.css";
import { Encrypt } from "../../constants/utils";
import { apiUrl } from "../../constants/api";
import axios from "axios";
const SignInMobile = ({ loginSuccess, goToXetTuyenDaiHoc, signUpScreen }) => {
  const [usernamePlaceholder, setUsernamePlaceholder] = useState(false);
  const [username, setUsername] = useState("");
  const [passwordPlaceholder, setPasswordPlaceholder] = useState(false);
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(true);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="sign-in-2"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        // className="frame-parent1701"
      >
        <div
          style={{ gap: "20px", marginBottom: "20px" }}
          className="frame-parent1702"
        >
          <div className="xin-cho-bn-tr-li-group">
            <div className="xin-cho-bn1">Xin chào bạn trở lại,</div>
            <div
              style={{ ...styles.button, width: "340px" }}
              className="google-group"
            >
              <img className="google-icon1" alt="" src="./google1.svg" />
              <div className="ng-nhp-bng1">Đăng nhập bằng Google</div>
            </div>
          </div>
          <div className="or1">
            <img className="or-inner" alt="" src="./line-1.svg" />
            <div className="ng-nhp-bng1">Hoặc</div>
            <img className="or-inner" alt="" src="./line-1.svg" />
          </div>
        </div>
        <div className="frame-parent1703">
          <div className="frame-parent1704">
            <div className="parent32">
              <div className="div320">
                <div className="tn-ng-nhp1">Tên đăng nhập hoặc Email</div>
                <div
                  //   style={{ padding: "5px 0" }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "340px",
                  }}
                  className="sooyaaa334455gmailcom-frame"
                >
                  <input
                    className="sooyaaa334455gmailcom6"
                    style={{
                      border: "none",
                      width: "100%",
                      outline: "none",
                      backgroundColor: "#fff",
                      boxShadow: "none",
                      fontSize: "14px",
                      color: "#271E4A",
                    }}
                    placeholder="sooyaaa334455@gmail.com"
                    value={username}
                    // onFocus={() => {
                    //   setUsernamePlaceholder(true);
                    // }}
                    // onBlur={() => {
                    //   setUsernamePlaceholder(false);
                    // }}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  ></input>
                  <img
                    style={{ visibility: "hidden" }}
                    onClick={() => {
                      setIsShowPassword(!isShowPassword);
                    }}
                    className="vuesaxlineareye-icon5"
                    alt=""
                    src={
                      isShowPassword
                        ? "./vuesaxlineareye4.svg"
                        : "./vuesaxlineareyeslash2.svg"
                    }
                  />
                </div>
                {/* <div className="sooyaaa334455gmailcom-frame">
                  {!usernamePlaceholder && !username && (
                    <div
                      style={{ color: "#b8b8b8" }}
                      onClick={() => {
                        setUsernamePlaceholder(true);
                      }}
                      className="email16"
                    >
                      sooyaaa334455@gmail.com
                    </div>
                  )}
                  <input
                    style={{
                      border: "none",
                      width: "150px",
                      color: "#271E4A",
                      height: "25px",
                    }}
                    value={username}
                    onFocus={() => {
                      setUsernamePlaceholder(true);
                    }}
                    onBlur={() => {
                      setUsernamePlaceholder(false);
                    }}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    className="sooyaaa334455gmailcom6"
                  ></input>
                </div> */}
              </div>
              <div className="div320">
                <div className="tn-ng-nhp1">Mật khẩu</div>
                <div
                  //   style={{ padding: "5px 0" }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "340px",
                  }}
                  className="sooyaaa334455gmailcom-frame"
                >
                  <input
                    className="sooyaaa334455gmailcom6"
                    style={{
                      border: "none",
                      width: "100%",
                      outline: "none",
                      backgroundColor: "#fff",
                      boxShadow: "none",
                      fontSize: "14px",
                      color: "#271E4A",
                    }}
                    placeholder="Mật khẩu"
                    value={password}
                    type={isShowPassword ? "text" : "password"}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  ></input>
                  <img
                    style={styles.button}
                    onClick={() => {
                      setIsShowPassword(!isShowPassword);
                    }}
                    className="vuesaxlineareye-icon5"
                    alt=""
                    src={
                      isShowPassword
                        ? "./vuesaxlineareye4.svg"
                        : "./vuesaxlineareyeslash2.svg"
                    }
                  />
                </div>
                {/* <div className="mt-khu-parent8">
                  {!passwordPlaceholder && !password && (
                    <div
                      style={{ color: "#b8b8b8" }}
                      onClick={() => {
                        setPasswordPlaceholder(true);
                      }}
                      className="email16"
                    >
                      Mật khẩu
                    </div>
                  )}
                  <input
                    style={{ border: "none", width: "150px", color: "#271E4A" }}
                    value={password}
                    type={isShowPassword ? "text" : "password"}
                    onFocus={() => {
                      setPasswordPlaceholder(true);
                    }}
                    onBlur={() => {
                      setPasswordPlaceholder(false);
                    }}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="sooyaaa334455gmailcom6"
                  ></input>
                  <img
                    style={styles.button}
                    onClick={() => {
                      setIsShowPassword(!isShowPassword);
                    }}
                    className="vuesaxlineareye-icon5"
                    alt=""
                    src={
                      isShowPassword
                        ? "./vuesaxlineareye4.svg"
                        : "./vuesaxlineareyeslash2.svg"
                    }
                  />
                </div> */}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  ...styles.button,
                  color: "#7B61FF",
                  fontWeight: 300,
                  fontSize: "14px",
                }}
                onClick={() => {
                  signUpScreen();
                }}
              >
                Bạn chưa có tài khoản?
              </div>
              <div style={styles.button} className="qun-mt-khu2">
                Quên mật khẩu?
              </div>
            </div>
          </div>
          <div
            style={{ ...styles.button, width: "340px" }}
            onClick={() => {
              // loginSuccess();
              let body = {
                username: username,
                password: Encrypt(username, password),
              };
              axios
                .post(`${apiUrl}/login`, body)
                .then((res) => {
                  if (res.data.error) {
                    alert("Email hoặc mật khẩu không chính xác");
                    return;
                  } else {
                    localStorage.setItem("user", JSON.stringify(res.data.data));
                    goToXetTuyenDaiHoc();
                  }
                })
                .catch((err) => {
                  console.log("err: ", err);
                });
              // goToXetTuyenDaiHoc();
            }}
            className="div322"
          >
            <div className="ng-nhp8">Đăng nhập</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  button: {
    cursor: "pointer",
    userSelect: "none",
  },
};

export default SignInMobile;
