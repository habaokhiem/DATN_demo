import { useState } from "react";
import { Dashboard } from "./Dashboard";
import { GoiYNguyenVong } from "./GoiYNguyenVong";
import { KSTC } from "./KhaoSatTinhCach";
import { DSNV } from "./DanhSachNguyenVong";
import { NVDX } from "./NguyenVongDeXuat";
import { styles } from "../../pages/TrangCh1";
import axios from "axios";
import { apiUrl } from "../../constants/api";
import { QLNV } from "./QuanLyNguyenVong";
import { ChinhSuaThongTinUser, QLND } from "./QuanLyNguoiDung";
import { QLTS } from "./QuanLyTuyenSinh";
export const Admin = ({
  user,
  goToLoginScreen,
  goToDetailUniversity,
  goToNhomTinhCach,
}) => {
  const [isHide, setIsHide] = useState(true);
  const [page, setPage] = useState("home");
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
                  setPage("userInfo");
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
                    : "Admin"}
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
                  <div className="dashboard-icon24">
                    <div className="dashboard-icon-child93" />
                    <div className="dashboard-icon-child94" />
                    <div className="dashboard-icon-child95" />
                    <div className="dashboard-icon-child96" />
                  </div>
                  <div className="text434">Dashboard</div>
                </div>
                {!!user && (
                  <>
                    <div
                      onClick={() => {
                        setPage("qlnd");
                      }}
                      style={styles.button}
                      className={
                        page === "qlnd"
                          ? "vuesaxlinearhome-parent23_picked"
                          : "vuesaxlinearhome-parent23"
                      }
                    >
                      <img
                        className="dashboard-icon24"
                        alt=""
                        src="./vuesaxlinearprofile2user1.svg"
                      />
                      <div className="text222">User Management</div>
                    </div>
                    <div
                      onClick={() => {
                        setPage("qlnv");
                      }}
                      style={styles.button}
                      className={
                        page === "qlnv"
                          ? "vuesaxlinearhome-parent23_picked"
                          : "vuesaxlinearhome-parent23"
                      }
                    >
                      <img
                        className="dashboard-icon24"
                        alt=""
                        src="./vuesaxlinearcardedit2.svg"
                      />
                      <div className="text222">Aspiration</div>
                    </div>
                    <div
                      onClick={() => {
                        setPage("qlts");
                      }}
                      style={styles.button}
                      className={
                        page === "qlts"
                          ? "vuesaxlinearhome-parent23_picked"
                          : "vuesaxlinearhome-parent23"
                      }
                    >
                      <img
                        className="dashboard-icon24"
                        alt=""
                        src="./vuesaxlinearinfocircle11.svg"
                      />
                      <div className="text222">Thông tin tuyển sinh</div>
                    </div>
                    <div
                      onClick={() => {
                        setIsShowLogout(!isShowLogout);
                      }}
                      style={styles.button}
                      className="dashboard-icon-parent38"
                    >
                      <img
                        className="iconoutlinedapplicationbell63"
                        alt=""
                        src="./vuesaxlinearlogout2.svg"
                      />
                      <div className="text434">Đăng xuất</div>
                    </div>
                  </>
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
                    : "Admin"}
                </div>
              </div>
              <div className="frame-parent1268">
                <div
                  onClick={() => {
                    setPage("home");
                    setIsHide(!isHide);
                  }}
                  style={styles.button}
                  className="vuesaxlinearhome-parent11"
                >
                  <div className="dashboard-icon24">
                    <div className="dashboard-icon-child93" />
                    <div className="dashboard-icon-child94" />
                    <div className="dashboard-icon-child95" />
                    <div className="dashboard-icon-child96" />
                  </div>
                  <div className="thng-bo35">Thống kê</div>
                </div>
                <div
                  onClick={() => {
                    setPage("qlnd");
                    setIsHide(!isHide);
                  }}
                  style={styles.button}
                  className="vuesaxlinearreceipt-edit-parent11"
                >
                  <img
                    className="dashboard-icon24"
                    alt=""
                    src="./vuesaxlinearprofile2user1.svg"
                  />
                  <div className="thng-bo35">Quản lý người dùng</div>
                </div>
                <div
                  onClick={() => {
                    setPage("qlnv");
                    setIsHide(!isHide);
                  }}
                  style={styles.button}
                  className="vuesaxlinearreceipt-edit-parent11"
                >
                  <img
                    className="dashboard-icon24"
                    alt=""
                    src="./vuesaxlinearcardedit2.svg"
                  />
                  <div className="thng-bo35">Quản lý nguyện vọng</div>
                </div>
                <div
                  onClick={() => {
                    setPage("qlts");
                    setIsHide(!isHide);
                  }}
                  style={styles.button}
                  className="vuesaxlinearreceipt-edit-parent11"
                >
                  <img
                    className="dashboard-icon24"
                    alt=""
                    src="./vuesaxlinearinfocircle11.svg"
                  />
                  <div className="thng-bo35">Quản lý tuyển sinh</div>
                </div>
                <div
                  onClick={() => {
                    setIsShowLogout(!isShowLogout);
                  }}
                  style={styles.button}
                  className="dashboard-icon-parent38"
                >
                  <img
                    className="iconoutlinedapplicationbell63"
                    alt=""
                    src="./vuesaxlinearlogout2.svg"
                  />
                  <div className="thng-bo47">Đăng xuất</div>
                </div>
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
                      console.log("logout admin");
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
          <Dashboard
            user={user}
            goToDetailUniversity={goToDetailUniversity}
            goToNhomTinhCach={goToNhomTinhCach}
            goToLoginScreen={goToLoginScreen}
          />
        )}
        {page === "qlnv" && <QLNV setPage={setPage} />}
        {page === "qlnd" && <QLND setPage={setPage} />}
        {page === "qlts" && <QLTS setPage={setPage} />}
        {page === "goiYNguyenVong" && (
          <GoiYNguyenVong setPage={setPage} setIsHide={setIsHide} user={user} />
        )}
        {page === "kstc" && <KSTC />}
        {page === "dsnv" && <DSNV setPage={setPage} />}
        {page === "nvdx" && <NVDX setPage={setPage} />}
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
