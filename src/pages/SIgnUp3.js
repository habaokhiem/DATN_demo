import { useState } from "react";
import "./SIgnUp3.css";
const SIgnUp3 = ({ goToLoginScreen }) => {
  const [emailPlaceholder, setEmailPlaceholder] = useState(false);
  const [email, setEmail] = useState("");
  const [namePlaceholder, setNamePlaceholder] = useState(false);
  const [fullName, setFullName] = useState("");
  const [firstNamePlaceholder, setFirstNamePlaceholder] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [usernamePlaceholder, setUsernamePlaceholder] = useState(false);
  const [username, setUsername] = useState("");
  const [passwordPlaceholder, setPasswordPlaceholder] = useState(false);
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [isShowRePassword, setIsShowRePassword] = useState(true);
  const [rePasswordPlaceholder, setRePasswordPlaceholder] = useState(false);
  const [rePassword, setRePassword] = useState("");
  return (
    <div className="sign-up-3">
      <div className="sign-up-3-child" />
      <div className="sign-up-3-item" />
      {/* <img className="logo-icon6" alt="" src="./logo.svg" /> */}
      <div className="frame-parent1719">
        <div className="frame-parent1720">
          <div className="nhp-thng-tin-ng-k-no-container">
            <div className="nhp-thng-tin2">Nhập thông tin đăng ký nào,</div>
            <div style={styles.button} className="google-parent3">
              <img className="google-icon5" alt="" src="./google4.svg" />
              <div className="ng-nhp-bng5">Đăng nhập bằng Google</div>
            </div>
          </div>
          <div className="or5">
            <img className="or-child8" alt="" src="./line-11.svg" />
            <div className="ng-nhp-bng5">Hoặc</div>
            <img className="or-child8" alt="" src="./line-11.svg" />
          </div>
        </div>
        <div className="frame-parent1721">
          <div className="parent38">
            <div className="div342">
              <div className="email16">Email</div>
              <div className="sooyaaa334455gmailcom-wrapper4">
                {!emailPlaceholder && !email && (
                  <a
                    className="sooyaaa334455gmailcom6"
                    // href="mailto:sooyaa334455@gmail.com"
                    // target="_blank"
                    onClick={() => {
                      setEmailPlaceholder(true);
                    }}
                  >
                    sooyaaa334455@gmail.com
                  </a>
                )}
                <input
                  style={{ border: "none", width: "100%" }}
                  value={email}
                  onFocus={() => {
                    setEmailPlaceholder(true);
                  }}
                  onBlur={() => {
                    setEmailPlaceholder(false);
                  }}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="sooyaaa334455gmailcom6"
                ></input>
              </div>
            </div>
            <div className="div342">
              <div className="email16">Họ Tên*</div>
              <div className="frame-parent1722">
                <div className="nguyn-wrapper9">
                  {/* <div className="email16">Nguyễn</div> */}
                  {!namePlaceholder && !fullName && (
                    <div
                      onClick={() => {
                        setNamePlaceholder(true);
                      }}
                      className="email16"
                    >
                      Nguyễn
                    </div>
                  )}
                  <input
                    style={{ border: "none", width: "50px" }}
                    value={fullName}
                    onFocus={() => {
                      setNamePlaceholder(true);
                    }}
                    onBlur={() => {
                      setNamePlaceholder(false);
                    }}
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                    className="sooyaaa334455gmailcom6"
                  ></input>
                </div>
                <div className="nguyn-wrapper9">
                  {/* <div className="email16">Văn A</div> */}
                  {!firstNamePlaceholder && !firstName && (
                    <div
                      onClick={() => {
                        setFirstNamePlaceholder(true);
                      }}
                      className="email16"
                    >
                      Văn A
                    </div>
                  )}
                  <input
                    style={{ border: "none", width: "100px" }}
                    value={firstName}
                    onFocus={() => {
                      setFirstNamePlaceholder(true);
                    }}
                    onBlur={() => {
                      setFirstNamePlaceholder(false);
                    }}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    className="sooyaaa334455gmailcom6"
                  ></input>
                </div>
              </div>
            </div>
            <div className="div342">
              <div className="email16">Tên đăng nhập*</div>
              <div className="tn-ng-nhp-frame">
                {/* <div className="email16">Tên đăng nhập</div> */}
                {!usernamePlaceholder && !username && (
                  <div
                    onClick={() => {
                      setUsernamePlaceholder(true);
                    }}
                    className="email16"
                  >
                    Tên đăng nhập
                  </div>
                )}
                <input
                  style={{ border: "none", width: "100px" }}
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
            <div className="div342">
              <div className="email16">Mật khẩu*</div>
              <div className="mt-khu-parent12">
                {/* <div className="email16">Mật khẩu</div> */}
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
                  style={{ border: "none", width: "100px" }}
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
            <div className="div342">
              <div className="email16">Xác thực mật khẩu*</div>
              <div className="frame-parent1723">
                <div className="ellipse-parent2">
                  {/* <div className="frame-child954" />
                  <div className="frame-child954" />
                  <div className="frame-child954" />
                  <div className="frame-child954" />
                  <div className="frame-child954" />
                  <div className="frame-child954" />
                  <div className="frame-child954" />
                  <div className="frame-child954" />
                  <div className="frame-child954" />
                  <div className="frame-child954" /> */}
                  {!rePasswordPlaceholder && !rePassword && (
                    <div
                      onClick={() => {
                        setRePasswordPlaceholder(true);
                      }}
                      className="email16"
                    >
                      ********
                    </div>
                  )}
                  <input
                    style={{ border: "none", width: "100px" }}
                    value={rePassword}
                    type={isShowRePassword ? "text" : "password"}
                    onFocus={() => {
                      setRePasswordPlaceholder(true);
                    }}
                    onBlur={() => {
                      setRePasswordPlaceholder(false);
                    }}
                    onChange={(e) => {
                      setRePassword(e.target.value);
                    }}
                    className="sooyaaa334455gmailcom6"
                  ></input>

                  <div></div>
                </div>
                <img
                  style={styles.button}
                  className="vuesaxlineareye-icon5"
                  alt=""
                  onClick={() => {
                    setIsShowRePassword(!isShowRePassword);
                  }}
                  src={
                    isShowRePassword
                      ? "./vuesaxlineareyeslash2.svg"
                      : "./vuesaxlineareye4.svg"
                  }
                />
              </div>
            </div>
          </div>
          <div className="div347">
            <div className="ng-k-bn-container2">
              <span>{`Để đăng ký, bạn xác nhận rằng bạn đã đọc, hiểu và đồng ý với `}</span>
              <span style={styles.button} className="iu-khon2">
                Điều khoản
              </span>
              <span>{` và `}</span>
              <span
                style={styles.button}
                className="iu-khon2"
              >{`Chính sách quyền riêng tư `}</span>
              <span>của chúng tôi.</span>
            </div>
          </div>
          <div className="div348">
            <div
              style={styles.button}
              onClick={() => {
                goToLoginScreen();
              }}
              className="div349"
            >
              <div className="ng-k8">Đăng ký</div>
            </div>
            <div className="bn-c-container2">
              <span>Bạn đã có tài khoản?</span>
              <span className="span2">{` `}</span>
              <span
                style={styles.button}
                onClick={() => {
                  goToLoginScreen();
                }}
                className="ng-nhp11"
              >
                Đăng nhập
              </span>
            </div>
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

export default SIgnUp3;
