import { useState } from "react";
import { DSNV } from "./DanhSachNguyenVong";
import { GoiYNguyenVong } from "./GoiYNguyenVong";
import { Home } from "./Home";
import { KSTC } from "./KhaoSatTinhCach";
import { NVDX } from "./NguyenVongDeXuat";
import { styles } from "../../pages/TrangCh1";
import axios from "axios";
import { apiUrl } from "../../constants/api";
import { ThongTinTuyenSinh } from "./ThongTinTuyenSinh";
import { DanhGia } from "./DanhGia";
import { ChinhSuaThongTinUser } from "./QuanLyNguoiDung";
export const User = ({
  user,
  goToLoginScreen,
  goToDetailUniversity,
  goToNhomTinhCach,
}) => {
  const [isHide, setIsHide] = useState(true);
  const [page, setPage] = useState("home");
  console.log("page: ", page);
  const [isShowLogout, setIsShowLogout] = useState(false);

  return (
    <div
      onClick={() => {
        if (isShowLogout) setIsShowLogout(false);
      }}
      style={
        {
          // overflowY: "scroll"
        }
      }
      className="trang-ch-1"
    >
      <div className="group-parent23">
        {isHide && (
          <div
            style={
              {
                // maxHeight: "1000px"
              }
            }
            className="frame-parent2179"
          >
            <div className="frame-parent2180">
              <div
                onClick={() => {
                  if (!!user) {
                    setPage("userInfo");
                  }
                }}
                style={styles.button}
                className="rectangle-parent722"
              >
                <img
                  className="frame-child1285"
                  alt=""
                  src={
                    user
                      ? user.image
                        ? user.image
                        : "./rectangle-482@2x.png"
                      : "./rectangle-482@2x.png"
                  }
                />
                <div className="text433">
                  {user
                    ? user.name.split(" ")[user.name.split(" ").length - 1]
                    : "Guest#1111"}
                </div>
              </div>
              <div className="frame-parent2181">
                <div
                  onClick={() => {
                    setPage("home");
                  }}
                  style={styles.button}
                  className={
                    page === "home"
                      ? "vuesaxlinearhome-parent23_picked"
                      : "vuesaxlinearhome-parent23"
                  }
                >
                  <img
                    className="vuesaxlinearhome-icon25"
                    alt=""
                    src="./vuesaxlinearhome211.svg"
                  />
                  <div className="text434">Trang chủ</div>
                </div>

                {!!user && (
                  <div
                    onClick={() => {
                      setPage("kstc");
                    }}
                    style={styles.button}
                    className={
                      page === "kstc"
                        ? "vuesaxlinearhome-parent23_picked"
                        : "vuesaxlinearhome-parent23"
                    }
                  >
                    <img
                      className="vuesaxlinearhome-icon25"
                      alt=""
                      src="./vuesaxlinearreceiptedit.svg"
                    />
                    <div className="text434">Khảo sát</div>
                  </div>
                )}
                {!!user && (
                  <div
                    onClick={() => {
                      setPage("nvdx");
                    }}
                    style={styles.button}
                    className={
                      page === "nvdx" ||
                      page === "dsnv" ||
                      page === "goiYNguyenVong"
                        ? "vuesaxlinearhome-parent23_picked"
                        : "vuesaxlinearhome-parent23"
                    }
                  >
                    <img
                      className="iconoutlinedapplicationbulb31"
                      alt=""
                      src="./iconoutlinedapplicationbulb.svg"
                    />
                    <div className="text434">Gợi ý nguyện vọng</div>
                  </div>
                )}
                <div
                  style={styles.button}
                  onClick={() => {
                    setPage("thongTinTuyenSinh");
                  }}
                  className={
                    page === "thongTinTuyenSinh"
                      ? "vuesaxlinearhome-parent23_picked"
                      : "vuesaxlinearhome-parent23"
                  }
                >
                  <img
                    className="vuesaxlinearhome-icon25"
                    alt=""
                    src="./vuesaxlinearinfocircle.svg"
                  />
                  <div className="text434">Thông tin tuyển sinh</div>
                </div>
                <div
                  style={styles.button}
                  onClick={() => {
                    setPage("danhGia");
                  }}
                  className={
                    page === "danhGia"
                      ? "vuesaxlinearhome-parent23_picked"
                      : "vuesaxlinearhome-parent23"
                  }
                >
                  <img
                    className="vuesaxlinearhome-icon25"
                    alt=""
                    src="/vuesaxlinearstar1.svg"
                  />
                  <div className="text434">Đánh giá</div>
                </div>
                {!!user && (
                  <div
                    onClick={() => {
                      setIsShowLogout(!isShowLogout);
                    }}
                    style={styles.button}
                    className={
                      isShowLogout
                        ? "vuesaxlinearhome-parent23_picked"
                        : "vuesaxlinearhome-parent23"
                    }
                  >
                    <img
                      className="iconoutlinedapplicationbell63"
                      alt=""
                      src="./vuesaxlinearlogout2.svg"
                    />
                    <div className="text434">Đăng xuất</div>
                  </div>
                )}
              </div>
            </div>
            <div
              style={styles.button}
              onClick={() => {
                setIsHide(!isHide);
              }}
              className="vuesaxlineararrow-right-wrapper71"
            >
              <img
                className="vuesaxlineararrow-right-icon95"
                alt=""
                src="./vuesaxlineararrowright311.svg"
              />
            </div>
          </div>
        )}
        {!isHide && (
          <div
            style={{
              zIndex: 3,
              // maxHeight: "1000px"
            }}
            className="frame-parent1266"
          >
            <div className="frame-parent1267">
              <div className="rectangle-parent722">
                <img
                  className="frame-child1285"
                  alt=""
                  src={
                    user
                      ? user.image
                        ? user.image
                        : "./rectangle-482@2x.png"
                      : "./rectangle-482@2x.png"
                  }
                />
                <div className="thng-bo35">
                  {user
                    ? user.name.split(" ")[user.name.split(" ").length - 1]
                    : "Guest#1111"}
                </div>
              </div>
              <div className="frame-parent1268">
                <div
                  onClick={() => {
                    setPage("home");
                    setIsHide(!isHide);
                  }}
                  style={styles.button}
                  className={
                    page === "home"
                      ? "vuesaxlinearhome-parent11_picked"
                      : "vuesaxlinearhome-parent11"
                  }
                >
                  <img
                    className="iconoutlinedapplicationbell47"
                    alt=""
                    src="./vuesaxlinearhome.svg"
                  />
                  <div className="thng-bo35">Trang chủ</div>
                </div>

                {!!user && (
                  <div
                    onClick={() => {
                      setPage("kstc");
                      setIsHide(!isHide);
                    }}
                    style={styles.button}
                    className={
                      page === "kstc"
                        ? "vuesaxlinearhome-parent11_picked"
                        : "vuesaxlinearhome-parent11"
                    }
                  >
                    <img
                      className="iconoutlinedapplicationbell47"
                      alt=""
                      src="./vuesaxlinearreceiptedit1.svg"
                    />
                    <div className="thng-bo35">Khảo sát tính cách</div>
                  </div>
                )}
                {!!user && (
                  <div
                    onClick={() => {
                      setPage("nvdx");
                      setIsHide(!isHide);
                    }}
                    style={styles.button}
                    className={
                      page === "nvdx" ||
                      page === "dsnv" ||
                      page === "goiYNguyenVong"
                        ? "vuesaxlinearhome-parent11_picked"
                        : "vuesaxlinearhome-parent11"
                    }
                  >
                    <img
                      className="iconoutlinedapplicationbulb13"
                      alt=""
                      src="./iconoutlinedapplicationbulb.svg"
                    />
                    <div className="thng-bo35">Gợi ý nguyện vọng</div>
                  </div>
                )}
                <div
                  style={styles.button}
                  onClick={() => {
                    setPage("thongTinTuyenSinh");
                    setIsHide(!isHide);
                  }}
                  className={
                    page === "thongTinTuyenSinh"
                      ? "vuesaxlinearhome-parent11_picked"
                      : "vuesaxlinearhome-parent11"
                  }
                >
                  <img
                    className="iconoutlinedapplicationbell47"
                    alt=""
                    src="./vuesaxlinearinfocircle1.svg"
                  />
                  <div className="thng-bo35">Thông tin tuyển sinh</div>
                </div>
                <div
                  style={styles.button}
                  onClick={() => {
                    setPage("danhGia");
                    setIsHide(!isHide);
                  }}
                  className={
                    page === "danhGia"
                      ? "vuesaxlinearhome-parent11_picked"
                      : "vuesaxlinearhome-parent11"
                  }
                >
                  <img
                    className="iconoutlinedapplicationbell47"
                    alt=""
                    src="/vuesaxlinearstar1.svg"
                  />
                  <div className="thng-bo35">Đánh giá</div>
                </div>
                {!!user && (
                  <div
                    onClick={() => {
                      setIsShowLogout(!isShowLogout);
                    }}
                    style={styles.button}
                    className={
                      isShowLogout
                        ? "vuesaxlinearhome-parent11_picked"
                        : "vuesaxlinearhome-parent11"
                    }
                  >
                    <img
                      className="iconoutlinedapplicationbell63"
                      alt=""
                      src="./vuesaxlinearlogout2.svg"
                    />
                    <div className="thng-bo47">Đăng xuất</div>
                  </div>
                )}
              </div>
            </div>
            <div className="vuesaxlineararrow-right-wrapper46">
              <img
                className="vuesaxlineararrow-right-icon65"
                alt=""
                src="./vuesaxlineararrowright.svg"
              />
            </div>
            <div
              // style={styles.button}
              style={{ zIndex: 3, ...styles.button }}
              onClick={() => {
                setIsHide(!isHide);
              }}
              className="vuesaxlineararrow-right-wrapper46"
            >
              <img
                className="vuesaxlineararrow-right-icon65"
                alt=""
                src="./arrow-right.png"
              />
            </div>
          </div>
        )}
        {isShowLogout && (
          <div className="frame-parent1072">
            <div className="frame-wrapper295">
              <div className="frame-parent1073">
                <div className="mask-group-container">
                  <img
                    className="mask-group-icon2"
                    alt=""
                    src="./mask-group.svg"
                  />
                  <div className="danh-sch-nguyn15">Thông báo</div>
                  <div className="u-nu-bn2">{`Ầu nâu bạn muốn đăng xuất à :<<`}</div>
                </div>
                <div className="frame-parent1074">
                  <div
                    onClick={() => {
                      console.log("logout user");
                      axios.post(`${apiUrl}/logout`, { user_id: user.id });
                      localStorage.removeItem("user");
                      window.location.reload(true);
                    }}
                    style={styles.button}
                    className="ng-xut-frame"
                  >
                    <div className="danh-sch-nguyn15">Đăng xuất</div>
                  </div>
                  <div
                    onClick={() => {
                      setIsShowLogout(!isShowLogout);
                    }}
                    style={styles.button}
                    className="cancel-wrapper2"
                  >
                    <div className="cancel4">Cancel</div>
                  </div>
                </div>
              </div>
            </div>
            <img
              onClick={() => {
                setIsShowLogout(!isShowLogout);
              }}
              style={styles.button}
              className="x-icon11"
              alt=""
              src="./x.svg"
            />
          </div>
        )}
        {page === "home" && (
          <Home
            user={user}
            goToDetailUniversity={goToDetailUniversity}
            goToNhomTinhCach={goToNhomTinhCach}
            goToLoginScreen={goToLoginScreen}
          />
        )}
        {page === "goiYNguyenVong" && (
          <GoiYNguyenVong setPage={setPage} setIsHide={setIsHide} user={user} />
        )}
        {page === "kstc" && <KSTC user={user} />}
        {page === "dsnv" && <DSNV setPage={setPage} />}
        {page === "nvdx" && <NVDX setPage={setPage} />}
        {page === "thongTinTuyenSinh" && <ThongTinTuyenSinh />}
        {page === "danhGia" && <DanhGia />}
        {page === "userInfo" && (
          <ChinhSuaThongTinUser
            setScreen={setPage}
            screen="home"
            currentUser={{
              ...user,
              ho: user?.name?.split(" ")[0],
              ten: user?.name.replace(user?.name?.split(" ")[0], ""),
            }}
          />
        )}
      </div>
    </div>
  );
};
