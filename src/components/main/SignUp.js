import { useState } from "react";
import "../../pages/SIgnUp3.css";
import axios from "axios";
import { apiUrl } from "../../constants/api";
import { Encrypt } from "../../constants/utils";
const SignUp = ({ goToLoginScreen, goToXetTuyenDaiHoc }) => {
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
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></input>
              </div>
            </div>
            <div className="div342">
              <div className="email16">Họ Tên*</div>
              <div className="frame-parent1722">
                <div className="nguyn-wrapper9">
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
                    placeholder="Nguyễn"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="nguyn-wrapper9">
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
                    placeholder="Văn A"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  ></input>
                </div>
              </div>
            </div>
            <div className="div342">
              <div className="email16">Tên đăng nhập*</div>
              <div className="tn-ng-nhp-frame">
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
                  placeholder="Tên đăng nhập"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                ></input>
              </div>
            </div>
            <div className="div342">
              <div className="email16">Mật khẩu*</div>
              <div className="mt-khu-parent12">
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
            </div>
            <div className="div342">
              <div className="email16">Xác thực mật khẩu*</div>
              <div className="mt-khu-parent12">
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
                  placeholder="********"
                  value={rePassword}
                  type={isShowRePassword ? "text" : "password"}
                  onChange={(e) => {
                    setRePassword(e.target.value);
                  }}
                ></input>
                <img
                  style={styles.button}
                  className="vuesaxlineareye-icon5"
                  alt=""
                  onClick={() => {
                    setIsShowRePassword(!isShowRePassword);
                  }}
                  src={
                    !isShowRePassword
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
                let body = {
                  email: email,
                  username: username,
                  password: Encrypt(email, password),
                  password_username: Encrypt(username, password),
                  firstName: firstName,
                  lastName: fullName,
                };
                //signup
                axios
                  .post(`${apiUrl}/signup`, body)
                  .then((res) => {
                    let body = {
                      username: username,
                      email: email,
                      password: Encrypt(username, password),
                    };
                    //go to login screen
                    axios
                      .post(`${apiUrl}/login`, body)
                      .then((res) => {
                        if (res.data.error) {
                          alert("Email hoặc mật khẩu không chính xác");
                          return;
                        } else {
                          localStorage.setItem(
                            "user",
                            JSON.stringify(res.data.data)
                          );
                          goToXetTuyenDaiHoc();
                        }
                      })
                      .catch((err) => {
                        console.log("err: ", err);
                      });
                  })
                  .catch((err) => {
                    console.log(err);
                  });
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

export default SignUp;
