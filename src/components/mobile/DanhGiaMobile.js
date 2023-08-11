import axios from "axios";
import { useEffect, useState } from "react";
import { apiUrl } from "../../constants/api";
import "./DanhGiaMobile.css";
const DanhGiaMobile = () => {
  const [listRating, setlistRating] = useState([]);
  const [isShowMessage, setIsShowMessage] = useState(false);
  useEffect(() => {
    axios
      .get(`${apiUrl}/rating`)
      .then((res) => {
        console.log("res.data.data: ", res.data.data);
        let sortListRatingEqual = res.data.data.sort((a, b) => {
          if (a.countUp === b.countUp) {
            return a.countDown - b.countDown;
          }
          return b.countUp - a.countUp;
        });
        console.log("sortListRatingEqual: ", sortListRatingEqual);
        setlistRating(sortListRatingEqual);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="iphone-8-1">
      <div className="DanhGiaMobile-frame-container">
        {listRating.map((item, index) => {
          return <ItemDanhGia key={index} info={item} index={index} />;
        })}
      </div>
    </div>
  );
};

const ItemDanhGia = ({ info, index }) => {
  const [listOutputAspiration, setListOutputAspiration] = useState([]);
  const [isShowMore, setIsShowMore] = useState(false);
  const [upCount, setUpCount] = useState(0);
  const [downCount, setDownCount] = useState(0);
  const [isShowComment, setIsShowComment] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useState({});
  const [typerating, setTyperating] = useState("up");
  const [comment, setComment] = useState("");
  const [listComment, setListComment] = useState([]);
  useEffect(() => {
    if (info.id_user) {
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
    getListComment(info.id);
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

  const getListPredict = async (id) => {
    try {
      let res = await axios.get(`${apiUrl}/predict/${id || 1}`);
      let data = res.data.data;
      setListOutputAspiration(data.data_output);
    } catch (error) {
      console.log(error);
    }
  };

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

  const sendComment = async () => {
    if (!comment) return alert("Vui lòng nhập bình luận");
    try {
      let res = await axios.post(`${apiUrl}/comment`, {
        id_user: user?.id,
        id_rating: info?.id,
        content: comment,
      });
      setComment("");
      getListComment(info.id);
    } catch (error) {
      console.log(error);
    }
  };

  const getListComment = async (id) => {
    try {
      let res = await axios.get(`${apiUrl}/comment/${id || 1}`);
      let data = res.data.data;
      setListComment(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="DanhGiaMobile-frame-div">
      <div className="DanhGiaMobile-DanhGiaMobile-danh-sch-nguyn-vng-1-parent">
        <div className="DanhGiaMobile-danh-sch-nguyn">
          Danh sách nguyện vọng {index + 1}
        </div>
        <div className="frame-parent1">
          <div className="frame-parent2">
            <div className="iconfilleddirectionalcaret-parent">
              <img
                onClick={() => {
                  if (!!user.id) {
                    updateUserrating("up");
                  }
                }}
                className="iconfilleddirectionalcaret-"
                alt=""
                src={
                  typerating === "up"
                    ? "/iconfilleddirectionalcaretup1.svg"
                    : "/caret-up.svg"
                }
              />
              <img
                onClick={() => {
                  if (!!user.id) {
                    updateUserrating("down");
                  }
                }}
                className="iconfilleddirectionalcaret-"
                alt=""
                src={
                  typerating === "down"
                    ? "/iconfilleddirectionalcaretdown1.svg"
                    : "/caret-down.svg"
                }
              />
            </div>
            <div className="iconfilleddirectionalcaret-parent">
              <div className="mobile-div">{upCount}</div>
              <div className="mobile-div1">{downCount}</div>
            </div>
          </div>
          <div className="frame-parent3">
            <div className="frame-parent4">
              <div className="DanhGiaMobile-female15-parent">
                <img
                  style={{ width: "40px", height: "40px" }}
                  src={userInfo?.image || "/female15@2x.png"}
                />
                <div className="mobile-div">{userInfo?.name || ""}</div>
              </div>
              <div className="DanhGiaMobile-frame-parent5">
                <div className="DanhGiaMobile-frame-group">
                  <div className="DanhGiaMobile-frame-parent7">
                    {/* <div className="DanhGiaMobile-iconstar-wrapper">
                      <img className="iconstar" alt="" src="/iconstar.svg" />
                    </div>
                    <div className="DanhGiaMobile-iconstar-wrapper">
                      <img className="iconstar" alt="" src="/iconstar.svg" />
                    </div>
                    <div className="DanhGiaMobile-iconstar-wrapper">
                      <img className="iconstar" alt="" src="/iconstar.svg" />
                    </div>
                    <div className="DanhGiaMobile-iconstar-wrapper">
                      <img className="iconstar" alt="" src="/iconstar.svg" />
                    </div>
                    <div className="DanhGiaMobile-iconstar-wrapper2">
                      <img className="iconstar" alt="" src="/iconstar.svg" />
                    </div> */}
                    {Array.from(Array(+info?.star)).map((item, index) => {
                      return (
                        <div
                          style={{ width: "12px", height: "12px" }}
                          key={index}
                          className={
                            index === +info?.star - 1
                              ? "buttonrounded13_round"
                              : "buttonrounded13"
                          }
                        >
                          <img
                            style={{ width: "12px", height: "12px" }}
                            className="iconstar13"
                            alt=""
                            src="/iconstar.svg"
                          />
                        </div>
                      );
                    })}
                    {Array.from(Array(5 - +info?.star)).map((item, index) => {
                      return (
                        <div
                          style={{ width: "12px", height: "12px" }}
                          key={index}
                          className="buttonrounded10"
                        >
                          <img
                            style={{ width: "12px", height: "12px" }}
                            className="iconstar13"
                            alt=""
                            src="/filledno.svg"
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div className="mobile-group">
                    <div className="mobile-div2">{info?.star || 0}.0</div>
                    <div className="mobile-div">/</div>
                    <div className="mobile-div">5.0</div>
                  </div>
                </div>
                <div className="mobile-div">
                  ({upCount + downCount} đánh giá)
                </div>
              </div>
            </div>
            <div className="DanhGiaMobile-xut-hp-l-wrapper">
              <div className="mobile-div">Đề xuất hợp lý.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="DanhGiaMobile-bnh-lun-parent">
        <div className="DanhGiaMobile-danh-sch-nguyn">Bình luận</div>
        <div className="DanhGiaMobile-frame-parent8">
          <div className="DanhGiaMobile-bnh-lun-parent">
            <div className="DanhGiaMobile-DanhGiaMobile-female15-group">
              <div className="DanhGiaMobile-female15" />
              <div
                style={{ display: "flex", flexDirection: "row" }}
                className="DanhGiaMobile-xut-hp-l-parent"
              >
                {/* <div className="xut-hp-l1">Đề xuất hợp lý.</div> */}
                <input
                  //   className="xut-hp-l"
                  className="xut-hp-l1"
                  style={{
                    border: "none",
                    width: "240px",
                    outline: "none",
                    backgroundColor: "#fff",
                    boxShadow: "none",
                    // color: "#271E4A",
                    // height: "25px",
                    // fontSize: "16px",
                  }}
                  placeholder="Nhập bình luận..."
                  // onFocus={() => {
                  //   setUsernamePlaceholder(true);
                  // }}
                  // onBlur={() => {
                  //   setUsernamePlaceholder(false);
                  // }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      sendComment();
                    }
                  }}
                  value={comment}
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                  //   className="sooyaaa334455gmailcom6"
                ></input>
                <img
                  style={{ width: "16px", height: "16px" }}
                  onClick={() => {
                    sendComment();
                  }}
                  className="vuesaxlinearsenddanhgia-icon"
                  alt=""
                  src="/vuesaxlinearsend1.svg"
                />
              </div>
            </div>
            {listComment.length > 0 && (
              <>
                {listComment.slice(0, 3).map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="DanhGiaMobile-DanhGiaMobile-female15-group"
                    >
                      <div className="DanhGiaMobile-female15" />
                      <img
                        style={{ width: "24px", height: "24px" }}
                        src={item?.image || "/cheems.jpg"}
                      />
                      <div className="xut-hp-l-group">
                        <div className="xut-hp-l1">{item?.content || ""}</div>
                        <img
                          className="vuesaxlinearsend-icon"
                          alt=""
                          src="/vuesaxlinearsend.svg"
                        />
                      </div>
                    </div>
                  );
                })}
              </>
            )}
            {!isShowComment && listComment.length > 3 && (
              <div
                onClick={() => {
                  setIsShowComment(true);
                }}
                className="xem-thm-bnh"
              >
                {" "}
                Xem thêm bình luận
              </div>
            )}
          </div>
          {isShowComment && listComment.length > 3 && (
            <>
              {listComment.slice(3, listComment.length).map((item, index) => {
                return (
                  <div
                    key={index}
                    className="DanhGiaMobile-DanhGiaMobile-female15-group"
                  >
                    <div className="DanhGiaMobile-female15" />
                    <img
                      style={{ width: "24px", height: "24px" }}
                      src={item?.image || "/cheems.jpg"}
                    />
                    <div className="xut-hp-l-group">
                      <div className="xut-hp-l1">{item?.content || ""}</div>
                      <img
                        className="vuesaxlinearsend-icon"
                        alt=""
                        src="/vuesaxlinearsend.svg"
                      />
                    </div>
                  </div>
                );
              })}
            </>
          )}
          {isShowComment && listComment.length > 3 && (
            <div
              onClick={() => {
                setIsShowComment(false);
              }}
              className="xem-thm-bnh"
            >
              {" "}
              Thu gọn bình luận
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DanhGiaMobile;
