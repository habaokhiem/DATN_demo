import "./ForgotPassword2.css";
const ForgotPassword2 = () => {
  return (
    <div className="forgot-password-2">
      <div className="forgot-password-2-child" />
      <div className="forgot-password-2-item" />
      <img className="logo-icon16" alt="" src="./logo.svg" />
      <div className="qun-mt-khu-container">
        <div className="qun-mt-khu5">Quên mật khẩu</div>
        <div className="frame-parent1748">
          <div className="cung-cp-email-ca-ti-khon-m-group">
            <div className="cung-cp-email-container1">
              <p className="cung-cp-email1">{`Cung cấp email của tài khoản mà `}</p>
              <p className="cung-cp-email1">bạn muốn đặt lại mật khẩu.</p>
            </div>
            <div className="div377">
              <div className="email-parent7">
                <div className="email17">Email</div>
                <div className="sooyaaa334455gmailcom-wrapper5">
                  <div className="cung-cp-email-container1">
                    sooyaaa334455@gmail.com
                  </div>
                </div>
              </div>
              <div className="email-khng-hp">
                Email không hợp lệ. Vui lòng nhập email đã đăng ký của bạn.
              </div>
            </div>
          </div>
          <div className="div378">
            <div className="parent53">
              <div className="div379">
                <div className="yu-cu-lin1">
                  Yêu cầu liên kết đặt lại mật khẩu
                </div>
              </div>
              <div className="hu-b27">Huỷ bỏ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword2;
