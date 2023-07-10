import "./ForgotPassword4.css";
const ForgotPassword4 = () => {
  return (
    <div className="forgot-password-4">
      <div className="forgot-password-4-child" />
      <div className="forgot-password-4-item" />
      <img className="logo-icon13" alt="" src="./logo.svg" />
      <div className="m-xc-thc-parent">
        <div className="m-xc-thc">Mã xác thực</div>
        <div className="frame-parent1740">
          <div className="frame-parent1741">
            <div className="nhp-otp-one-time-password-g-wrapper">
              <div className="nhp-otp-one-container">
                <p className="nhp-otp-one">{`Nhập OTP (One time password) `}</p>
                <p className="gi-n-sooyaaa334455gmailco">
                  <span className="gi-n">{`gửi đến `}</span>
                  <span className="sooyaaa334455gmailcom7">
                    sooyaaa334455@gmail.com
                  </span>
                </p>
              </div>
            </div>
            <div className="frame-parent1742">
              <div className="frame-parent1743">
                <div className="label-wrapper">
                  <div className="label">1</div>
                </div>
                <div className="label-wrapper">
                  <div className="label">1</div>
                </div>
                <div className="label-wrapper">
                  <div className="label">1</div>
                </div>
                <div className="label-wrapper">
                  <div className="label">1</div>
                </div>
                <div className="label-wrapper">
                  <div className="label">1</div>
                </div>
                <div className="label-wrapper">
                  <div className="label">1</div>
                </div>
              </div>
              <div className="label6">
                OTP đã hết hạn. Vui lòng tạo OTP mới và thử lại!
              </div>
            </div>
          </div>
          <div className="div372">
            <div className="frame-parent1741">
              <div className="div373">
                <div className="xc-thc-m">Xác thực mã</div>
              </div>
              <div className="gi-li-m">Gửi lại mã</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword4;
