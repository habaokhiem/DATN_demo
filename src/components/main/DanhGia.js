import { useEffect, useState } from "react";
import { styles } from "../../pages/TrangCh1";
import "./DanhGia.css";
import axios from "axios";
import { apiUrl } from "../../constants/api";
import { Message } from "./Message";
export const DanhGia = () => {
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
    <>
      <div
        onClick={() => {
          if (isShowMessage) {
            setIsShowMessage(false);
          }
        }}
        className="frame-wrapper347"
      >
        <div className="frame-wrapper348">
          <div className="frame-parent1604">
            <div className="gi-nguyn-vng-wrapper12">
              <div className="bng-nhp-thng">Đánh giá</div>
            </div>
            <div
              style={{
                display: "flex",
                width: 150,
                justifyContent: "space-around",
              }}
            >
              <div
                onClick={() => {
                  setIsShowMessage(!isShowMessage);
                }}
                style={styles.button}
                className="iconoutlinedapplicationmess-wrapper"
              >
                <img
                  className="iconoutlinedapplicationmess"
                  alt=""
                  src="/iconoutlinedapplicationmessage.svg"
                />
              </div>
              <div
                style={styles.button}
                className="iconoutlinedapplicationbell-wrapper53"
              >
                <img
                  className="vuesaxlinearhome-icon21"
                  alt=""
                  src="./iconoutlinedapplicationbell.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-427319686danhgia-parent">
        {listRating.map((item, index) => {
          return <ItemDanhGia info={item} key={index} />;
        })}
      </div>
      {isShowMessage && <Message />}
    </>
  );
};

const ItemDanhGia = ({ info }) => {
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
    <div className="frame-427319686danhgia">
      <div className="frame-427319698danhgia">
        <div className="gi-nguyn">Đánh giá</div>
        <div className="frame-427319695danhgia">
          <div className="frame-427319692danhgia">
            <div className="frame-427319690danhgia">
              <img
                onClick={() => {
                  if (!!user.id) {
                    updateUserrating("up");
                  }
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
                  if (!!user.id) {
                    updateUserrating("down");
                  }
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
              <img
                className="female15-icon"
                alt=""
                src={userInfo?.image || "/female15@2x.png"}
              />
              <div className="xut-hp-l">{userInfo?.name || ""}</div>
              <div className="frame-427319699danhgia">
                <div className="rectangle-wrapper">
                  <div className="star-rating">
                    <div className="star-group2">
                      {Array.from(Array(+info?.star)).map((item, index) => {
                        return (
                          <div
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
                      })}
                      {Array.from(Array(5 - +info?.star)).map((item, index) => {
                        return (
                          <div key={index} className="buttonrounded10">
                            <img
                              className="iconstar13"
                              alt=""
                              src="/filledno.svg"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="frame-427319687danhgia">
                    <div className="gi-nguyn">{info?.star || 0}.0</div>
                    <div className="xut-hp-l">/</div>
                    <div className="xut-hp-l">5.0</div>
                    <div style={{ width: "200px" }} className="nh-gi1">
                      ({upCount + downCount} đánh giá)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-427319682danhgia">
              <div className="xut-hp-l">Đề xuất hợp lý.</div>
              {/* <img
                className="vuesaxlinearsenddanhgia-icon"
                alt=""
                src="/vuesaxlinearsenddanhgia.svg"
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="frame-427319526danhgia">
        <div className="frame-427319696danhgia">
          <div className="gi-nguyn">Danh sách đề xuất</div>
          <div
            onClick={() => {
              setIsShowMore(!isShowMore);
            }}
            style={styles.button}
            className="xem-thm"
          >
            {isShowMore ? "Thu gọn" : "Xem thêm"}
          </div>
        </div>
        {isShowMore && (
          <div className="frame-parent779">
            <div className="frame-parent782">
              {listOutputAspiration?.map((item, index) => {
                return (
                  <div key={index} className="i-hc-bch-khoa-h-ni-parent2">
                    <div className="i-hc-bch-container3">
                      <ul className="i-hc-bch16">{`${index + 1}. ${
                        item.university
                      }`}</ul>
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
        )}
      </div>
      <div className="frame-427319697danhgia">
        <div className="gi-nguyn">Bình luận</div>
        <div className="frame-427319700danhgia">
          <div style={{ width: "48px", height: "48px" }} className="female15">
            <img
              className="female15-icon"
              alt=""
              src={user?.image || "cheems.jpg"}
            />
          </div>
          <div className="xut-hp-l-parent">
            {/* <div className="xut-hp-l">Đề xuất hợp lý.</div> */}
            <input
              //   className="xut-hp-l"
              className="xut-hp-l-parent"
              style={{
                border: "none",
                width: "100%",
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
              onClick={() => {
                sendComment();
              }}
              style={styles.button}
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
                <div key={index} className="frame-427319700danhgia">
                  <div className="female15">
                    <img
                      className="female15-icon"
                      alt=""
                      src={item?.image || "/cheems.jpg"}
                    />
                  </div>
                  <div className="xut-hp-l-group">
                    <div className="xut-hp-l">{item?.content || ""}</div>
                    <img
                      className="vuesaxlinearsenddanhgia-icon1"
                      alt=""
                      src="/vuesaxlinearsend1.svg"
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
            style={styles.button}
            className="gi-nguyn"
          >
            Xem thêm bình luận
          </div>
        )}
        {isShowComment && listComment.length > 3 && (
          <>
            {listComment.slice(3, listComment.length).map((item, index) => {
              return (
                <div key={index} className="frame-427319700danhgia">
                  <div className="female15">
                    <img
                      className="female15-icon"
                      alt=""
                      src={item?.image || "/cheems.jpg"}
                    />
                  </div>
                  <div className="xut-hp-l-group">
                    <div className="xut-hp-l">{item?.content || ""}</div>
                    <img
                      className="vuesaxlinearsenddanhgia-icon1"
                      alt=""
                      src="/vuesaxlinearsenddanhgia.svg"
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
            style={styles.button}
            className="gi-nguyn"
          >
            Thu gọn bình luận
          </div>
        )}
      </div>
    </div>
  );
};

export default DanhGia;
