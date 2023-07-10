import { useState } from "react";
import "./SIgnIn2.css";
const SIgnIn2 = ({ loginSuccess }) => {
  const [usernamePlaceholder, setUsernamePlaceholder] = useState(false);
  const [username, setUsername] = useState("");
  const [passwordPlaceholder, setPasswordPlaceholder] = useState(false);
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(true);
  return (
    <div className="sign-in-2">
      <div className="sign-in-2-child" />
      <div className="sign-in-2-item" />
      {/* <img className="logo-icon2" alt="" src="./logo.svg" /> */}
      <div className="frame-parent1701">
        <div className="frame-parent1702">
          <div className="xin-cho-bn-tr-li-group">
            <div className="xin-cho-bn1">Xin chào bạn trở lại,</div>
            <div style={styles.button} className="google-group">
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
                <div className="sooyaaa334455gmailcom-frame">
                  {/* <div className="ng-nhp-bng1">sooyaaa334455@gmail.com</div> */}
                  {!usernamePlaceholder && !username && (
                    <div
                      onClick={() => {
                        setUsernamePlaceholder(true);
                      }}
                      className="email16"
                    >
                      sooyaaa334455gmailcom6
                    </div>
                  )}
                  <input
                    style={{ border: "none", width: "150px" }}
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
                </div>
              </div>
              <div className="div320">
                <div className="tn-ng-nhp1">Mật khẩu</div>
                <div className="mt-khu-parent8">
                  {!passwordPlaceholder && !password && (
                    <div
                      onClick={() => {
                        setPasswordPlaceholder(true);
                      }}
                      className="email16"
                    >
                      Mật khẩu
                    </div>
                  )}
                  <input
                    style={{ border: "none", width: "150px" }}
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
                </div>
              </div>
            </div>
            <div style={styles.button} className="qun-mt-khu2">
              Quên mật khẩu?
            </div>
          </div>
          <div
            style={styles.button}
            onClick={() => {
              loginSuccess();
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

export default SIgnIn2;
