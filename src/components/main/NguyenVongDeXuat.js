import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select, { components } from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { styles } from "../../pages/TrangCh1";
import axios from "axios";
import { apiUrl } from "../../constants/api";
import "./NguyenVongDeXuat.css";
export const NVDX = ({ setPage }) => {
  const [listOutputAspiration, setListOutputAspiration] = useState([]);
  const [info, setInfo] = useState({});
  console.log("info: ", info);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      getListPredict(user?.id);
      axios
        .get(`${apiUrl}/rating`)
        .then((res) => {
          let listRating = res.data.data;
          console.log("listRating: ", listRating);
          let info = listRating.find((item) => item.id_user == user.id);
          setInfo(info);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const getInfo = () => {
    axios
      .get(`${apiUrl}/rating`)
      .then((res) => {
        let listRating = res.data.data;
        console.log("listRating: ", listRating);
        let info = listRating.find((item) => item.id_user == user.id);
        setInfo(info);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getListPredict = async (id) => {
    try {
      let res = await axios.get(`${apiUrl}/predict/${id || 1}`);
      let data = res.data.data;
      console.log("data.data_output.length: ", data.data_output.length);
      if (data.data_output.length === 0) {
        setPage("goiYNguyenVong");
        //scroll to top
        window.scrollTo(0, 0);
      }
      setListOutputAspiration(data.data_output);
    } catch (error) {
      console.log(error);
    }
  };

  const [isShowMore, setIsShowMore] = useState(false);
  const [upCount, setUpCount] = useState(0);
  const [downCount, setDownCount] = useState(0);
  const [isShowComment, setIsShowComment] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useState({});
  const [typerating, setTyperating] = useState("up");
  const [currating, setCurrating] = useState({});

  useEffect(() => {
    console.log("info: ", info);
    if (info?.id_user) {
      getListPredict(info.id_user);
      getUserInfo(info.id_user);
      getListUserrating(info.id);
    }
  }, [info]);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
    }
  }, []);

  const getListUserrating = async (id) => {
    try {
      let res = await axios.get(`${apiUrl}/user_rating/${id || 1}`);
      let data = res.data.data;
      if (data.length > 0) {
        let upCount = data.filter((item) => item.type == "up").length;
        let downCount = data.filter((item) => item.type == "down").length;
        setUpCount(upCount);
        setDownCount(downCount);
      }
      let userrating = data.filter((item) => item.id_user == user?.id);
      if (userrating.length > 0) {
        setTyperating(userrating[0].type);
        setCurrating(userrating[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUserInfo = async (id) => {
    try {
      let res = await axios.get(`${apiUrl}/user/${id || 1}`);
      let data = res.data.data[0];
      setUserInfo(data);
    } catch (error) {
      console.log(error);
    }
  };

  // const getListPredict = async (id) => {
  //   try {
  //     let res = await axios.get(`${apiUrl}/predict/${id || 1}`);
  //     let data = res.data.data;
  //     setListOutputAspiration(data.data_output);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const updateUserrating = async (type) => {
    try {
      let res = await axios.post(`${apiUrl}/user_rating`, {
        id_user: user?.id,
        id_rating: info?.id,
        type: type,
      });
      getListUserrating(info.id);
    } catch (error) {
      console.log(error);
    }
  };

  const updateStar = async (star) => {
    try {
      let res = await axios.post(`${apiUrl}/rating`, {
        star: star,
        id_user: user?.id,
      });
      getInfo();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="frame-wrapper173">
        <div className="frame-wrapper174">
          <div className="frame-parent777">
            <div className="gi-nguyn-vng-wrapper5">
              <div className="gi-nguyn7">Gợi ý nguyện vọng</div>
            </div>
            <div className="iconoutlinedapplicationbell-wrapper23">
              <img
                className="vuesaxlinearhome-icon12"
                alt=""
                src="./iconoutlinedapplicationbell.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent778">
        <div className="frame-parent779">
          <div className="frame-parent780">
            <div className="frame-parent781">
              <div
                style={styles.button}
                className="danh-sch-nguyn-vng-xut-wrapper3"
              >
                <div className="gi-nguyn7">Danh sách nguyện vọng đề xuất</div>
              </div>
              <div
                style={styles.button}
                onClick={() => {
                  // goToDanhSachNguyenVong();
                  setPage("dsnv");
                  //scroll to top
                  window.scrollTo(0, 0);
                }}
                className="danh-sch-nguyn-vng-hin-ti-wrapper3"
              >
                <div className="danh-sch-nguyn13">
                  Danh sách nguyện vọng hiện tại
                </div>
              </div>
            </div>
            <i className="y-l-phc7">
              *Đây là phục vụ cho việc tham khảo cho học sinh.
            </i>
          </div>
          <div className="frame-parent782">
            {listOutputAspiration?.map((item, index) => {
              return (
                <div key={index} className="i-hc-bch-khoa-h-ni-parent2">
                  <div className="i-hc-bch-container3">
                    <ul className="i-hc-bch16">{item.university}</ul>
                  </div>
                  <div className="frame-parent783">
                    <div className="m-ngnh-parent61">
                      <div className="m-ngnh63">Mã ngành</div>
                      <div className="tn-ngnh66">Tên ngành</div>
                      <div className="khi-thi64">Khối thi</div>
                      <div className="khi-thi64">Độ phù hợp</div>
                    </div>
                    <div className="frame-parent784">
                      <div className="frame-parent777">
                        <div className="nth0415">{item.id_major}</div>
                        <div className="ngn-ng-anh39">{item.major}</div>
                        <div className="d0133">{item.block}</div>
                        <div className="d0133">{item.score}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="frame-parent790">
          <div
            onClick={() => {
              setPage("goiYNguyenVong");
              //scroll to top
              window.scrollTo(0, 0);
            }}
            style={styles.button}
            className="thay-i-thuc-tnh-wrapper5"
          >
            <div className="gi-nguyn7">Thay đổi thuộc tính</div>
          </div>
          <div
            onClick={() => {
              setPage("dsnv");
              //scroll to top
              window.scrollTo(0, 0);
            }}
            style={styles.button}
            className="cp-nht-kt-qu-frame"
          >
            <div className="gi-nguyn7">Xem nguyện vọng hiện tại</div>
          </div>
        </div>
        <div className="frame-427319698danhgia">
          <div className="gi-nguyn">Đánh giá</div>
          <div className="frame-427319695danhgia">
            <div className="frame-427319692danhgia">
              <div className="frame-427319690danhgia">
                <img
                  onClick={() => {
                    updateUserrating("up");
                  }}
                  style={styles.button}
                  className="iconfilleddirectionalcaret-2"
                  alt=""
                  // src="/iconfilleddirectionalcaretup1.svg"
                  // src="/caret-up.svg"
                  src={
                    typerating === "up"
                      ? "/iconfilleddirectionalcaretup1.svg"
                      : "/caret-up.svg"
                  }
                />
                <div className="div1">{upCount}</div>
              </div>
              <div className="frame-427319691danhgia">
                <img
                  onClick={() => {
                    updateUserrating("down");
                  }}
                  style={styles.button}
                  className="iconfilleddirectionalcaret-2"
                  alt=""
                  // src="/iconfilleddirectionalcaretdown1.svg"
                  src={
                    typerating === "down"
                      ? "/iconfilleddirectionalcaretdown1.svg"
                      : "/caret-down.svg"
                  }
                />
                <div className="div1">{downCount}</div>
              </div>
            </div>
            <div className="frame-427319693danhgia">
              <div className="frame-427319685danhgia">
                {/* <img
                  className="female15-icon"
                  alt=""
                  src={userInfo?.image || "/female15@2x.png"}
                /> */}
                <div className="xut-hp-l">Đánh giá</div>
                <div className="frame-427319699danhgia">
                  <div className="rectangle-wrapper">
                    <div className="star-rating">
                      <div className="star-group2">
                        {Array.from(Array(+info?.star || 0)).map(
                          (item, index) => {
                            return (
                              <div
                                style={styles.button}
                                onClick={() => {
                                  updateStar(index + 1);
                                }}
                                key={index}
                                className={
                                  index === +info?.star - 1
                                    ? "buttonrounded13_round"
                                    : "buttonrounded13"
                                }
                              >
                                <img
                                  className="iconstar13"
                                  alt=""
                                  src="/iconstar.svg"
                                />
                              </div>
                            );
                          }
                        )}
                        {Array.from(Array(5 - +info?.star || 0)).map(
                          (item, index) => {
                            return (
                              <div
                                style={styles.button}
                                onClick={() => {
                                  updateStar(+info?.star + index + 1);
                                }}
                                key={index}
                                className="buttonrounded10"
                              >
                                <img
                                  className="iconstar13"
                                  alt=""
                                  src="/filledno.svg"
                                />
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    <div className="frame-427319687danhgia">
                      <div className="gi-nguyn">{info?.star || 0}.0</div>
                      <div className="xut-hp-l">/</div>
                      <div className="xut-hp-l">5.0</div>
                      {/* <div style={{ width: "200px" }} className="nh-gi1">
                        ({upCount + downCount} đánh giá)
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-427319682danhgia">
                <div className="xut-hp-l">Đề xuất hợp lý.</div>
                <img
                  className="vuesaxlinearsenddanhgia-icon"
                  alt=""
                  src="/vuesaxlinearsenddanhgia.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
