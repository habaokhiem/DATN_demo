import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select, { components } from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { styles } from "../../pages/TrangCh1";
import axios from "axios";
import { apiUrl } from "../../constants/api";
export const DSNV = ({ setPage }) => {
  const [listInputAspiration, setListInputAspiration] = useState([]);
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) getListPredict(user);
  }, []);

  const getListPredict = async (user) => {
    try {
      let res = await axios.get(`${apiUrl}/predict/${user?.id || 1}`);
      let data = res.data.data;
      setListInputAspiration(data.data_input);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="frame-wrapper165">
        <div className="frame-wrapper166">
          <div className="frame-parent749">
            <div className="gi-nguyn-vng-wrapper4">
              <div className="gi-nguyn6">Gợi ý nguyện vọng</div>
            </div>
            <div className="iconoutlinedapplicationbell-wrapper22">
              <img
                className="vuesaxlinearhome-icon11"
                alt=""
                src="./iconoutlinedapplicationbell.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent750">
        <div className="frame-parent751">
          <div className="frame-parent752">
            <div className="frame-parent753">
              <div
                style={styles.button}
                onClick={() => {
                  // goToDanhSachNguyenVongDeXuat();
                  setPage("nvdx");
                  //scroll to top
                  window.scrollTo(0, 0);
                }}
                className="danh-sch-nguyn-vng-xut-wrapper2"
              >
                <div className="danh-sch-nguyn10">
                  Danh sách nguyện vọng đề xuất
                </div>
              </div>
              <div
                style={styles.button}
                className="danh-sch-nguyn-vng-hin-ti-wrapper2"
              >
                <div className="gi-nguyn6">Danh sách nguyện vọng hiện tại</div>
              </div>
            </div>
            <i className="y-l-phc6">
              *Đây là phục vụ cho việc tham khảo cho học sinh.
            </i>
          </div>
          <div className="frame-parent754">
            {listInputAspiration.map((item, index) => {
              return (
                <div key={index} className="i-hc-fpt-c-s-h-ni-container">
                  <div className="i-hc-bch-container2">
                    <ul className="i-hc-bch15">{item.university}</ul>
                  </div>
                  <div className="frame-parent755">
                    <div className="m-ngnh-parent56">
                      <div className="m-ngnh58">Mã ngành</div>
                      <div className="tn-ngnh61">Tên ngành</div>
                      <div className="khi-thi59">Khối thi</div>
                    </div>
                    <div className="frame-wrapper167">
                      <div className="nth01-01-parent14">
                        <div className="nth0414">{item.id_major}</div>
                        <div className="ngn-ng-anh38">{item.major}</div>
                        <div className="d0130">{item.block}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="frame-parent762">
          <div
            onClick={() => {
              setPage("goiYNguyenVong");
              //scroll to top
              window.scrollTo(0, 0);
            }}
            style={styles.button}
            className="thay-i-thuc-tnh-wrapper4"
          >
            <div className="gi-nguyn6">Thay đổi thuộc tính</div>
          </div>
          <div
            onClick={() => {
              setPage("nvdx");
              //scroll to top
              window.scrollTo(0, 0);
            }}
            style={styles.button}
            className="xem-kt-qu-xut-wrapper2"
          >
            <div className="gi-nguyn6">Xem kết quả đề xuất</div>
          </div>
        </div>
      </div>
    </div>
  );
};
