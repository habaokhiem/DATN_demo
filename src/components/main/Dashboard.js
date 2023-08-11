import { useEffect, useRef, useState } from "react";
import { styles } from "../../pages/TrangCh1";
import axios from "axios";
import { apiUrl } from "../../constants/api";
import { groupBy, isEmpty } from "lodash";
import moment from "moment/moment";
import socketIOClient from "socket.io-client";
export const Dashboard = ({
  goToLoginScreen,
  goToDetailUniversity,
  goToNhomTinhCach,
}) => {
  const [user, setUser] = useState([]);
  const [listUserMessage, setListUserMessage] = useState([]);
  const [listAllMessage, setListAllMessage] = useState([]);
  const [listMessage, setListMessage] = useState([]);
  const [userMessage, setUserMessage] = useState({});
  const [message, setMessage] = useState("");
  const [currentUserMessage, setCurrentUserMessage] = useState({});
  const [socketMessage, setSocketMessage] = useState({});
  const [listUser, setListUser] = useState([]);
  const [listNguyenVong, setListNguyenVong] = useState([]);

  const socketRef = useRef();
  const bottomRef = useRef(null);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
    axios
      .get(`${apiUrl}/list_user`)
      .then((res) => {
        setListUser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${apiUrl}/list_nguyen_vong`)
      .then((res) => {
        setListNguyenVong(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${apiUrl}/message/${user.id}`)
      .then((res) => {
        let groupUser = groupBy(res.data.data, "id");
        let groupUserMap = Object.values(groupUser).map((item) => {
          return {
            id: item[0].id,
            name: item[0].name,
            image: item[0].image,
          };
        });
        setListUserMessage(groupUserMap);
        setListAllMessage(groupUser);
        onChangeUserMessage(groupUserMap[0], groupUser);
      })
      .catch((err) => {
        console.log(err);
      });
    socketRef.current = socketIOClient.connect("http://127.0.0.1:7000");

    socketRef.current.on("getId", (data) => {
      console.log("data: ", data);
    });

    socketRef.current.on("sendDataServer", (dataGot) => {
      if (+dataGot.data.id_user_receive === +user.id) {
        setSocketMessage(dataGot.data);
      }
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isEmpty(socketMessage)) return;
    axios
      .get(`${apiUrl}/message/${user.id}`)
      .then((res) => {
        let groupUser = groupBy(res.data.data, "id");
        let groupUserMap = Object.values(groupUser).map((item) => {
          return {
            id: item[0].id,
            name: item[0].name,
            image: item[0].image,
          };
        });
        onChangeUserMessage({ id: currentUserMessage?.id }, groupUser);
        setListAllMessage(groupUser);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [socketMessage]);

  const fetchMessage = (currentMessage) => {
    axios
      .get(`${apiUrl}/message/${user.id}`)
      .then((res) => {
        let groupUser = groupBy(res.data.data, "id");
        let groupUserMap = Object.values(groupUser).map((item) => {
          return {
            id: item[0].id,
            name: item[0].name,
            image: item[0].image,
          };
        });
        setListUserMessage(groupUserMap);
        setListAllMessage(groupUser);
        onChangeUserMessage(currentMessage, groupUser);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChangeUserMessage = (item, listAllMessages) => {
    setCurrentUserMessage(item);
    let listMessage = listAllMessages[item.id];
    let sortMessage = listMessage
      .sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return (
          new Date(moment(a.time, "hh:mm:ss DD/MM/YYY")) -
          new Date(moment(b.time, "hh:mm:ss DD/MM/YYY"))
        );
      })
      .reverse();
    let groupSortMessage = [];
    let newGroup = [];
    for (let i = 0; i < sortMessage.length; i++) {
      if (i === 0) {
        newGroup.push(sortMessage[i]);
        if (sortMessage.length === 1) {
          groupSortMessage.push(newGroup);
        }
      } else {
        if (sortMessage[i].id_user_send === sortMessage[i - 1].id_user_send) {
          newGroup.push(sortMessage[i]);
          if (i === sortMessage.length - 1) {
            groupSortMessage.push(newGroup);
          }
        } else {
          groupSortMessage.push(newGroup);
          newGroup = [];
          newGroup.push(sortMessage[i]);
          if (i === sortMessage.length - 1) {
            groupSortMessage.push(newGroup);
          }
        }
      }
    }

    setUserMessage(sortMessage);
    let mapGroupSortMessage = groupSortMessage.map((item) => {
      return item.reverse();
    });
    setListMessage(mapGroupSortMessage);
  };

  const sendMessage = () => {
    if (message === "") {
      return;
    }
    let data = {
      id_user_send: `${user.id}`,
      id_user_receive: `${userMessage[0].id}`,
      content: message,
      time: moment().format("hh:mm:ss DD/MM/YYYY"),
    };
    axios
      .post(`${apiUrl}/message`, data)
      .then((res) => {
        setMessage("");
        fetchMessage(userMessage[0]);
        socketRef.current.emit("sendDataClient", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="frame-parent2193">
      <div className="thng-k-group">
        <div className="trang-ch6">Thống kê</div>
        <div className="iconoutlinedapplicationbell-wrapper44">
          <img
            className="iconoutlinedapplicationbell46"
            alt=""
            src="./iconoutlinedapplicationbell1.svg"
          />
        </div>
      </div>
      <div className="card-group">
        <div className="card1">
          <div className="vuesaxlinearpeople-group">
            <img
              className="vuesaxlinearpeople-icon1"
              alt=""
              src="./vuesaxlinearpeople1.svg"
            />
            <div className="frame-parent1222">
              <div className="parent17">
                <div className="div299">{listUser?.length}</div>
                <div className="div300">+1.25%</div>
              </div>
              <div className="tng-ngi-dng1">Tổng người dùng</div>
            </div>
          </div>
          <div className="vuesaxlinearpeople-group">
            <img
              className="vuesaxlinearpeople-icon1"
              alt=""
              src="./vuesaxlinearprofileadd.svg"
            />
            <div className="frame-parent1222">
              <div className="parent17">
                <div className="div299">{listUser?.length}</div>
                <div className="div300">+10%</div>
              </div>
              <div className="tng-ngi-dng1">Người dùng mới</div>
            </div>
          </div>
          <div className="vuesaxlinearpeople-group">
            <img
              className="vuesaxlinearpeople-icon1"
              alt=""
              src="./vuesaxlinearcardtick.svg"
            />
            <div className="frame-parent1222">
              <div className="parent17">
                <div className="div299">{listNguyenVong?.length}</div>
                <div className="div300">+10%</div>
              </div>
              <div className="tng-ngi-dng1">Tổng nguyện vọng</div>
            </div>
          </div>
          <div className="vuesaxlinearpeople-group">
            <img
              className="vuesaxlinearpeople-icon1"
              alt=""
              src="./vuesaxlinearcardadd.svg"
            />
            <div className="frame-parent1225">
              <div className="parent17">
                <div className="div299">{listNguyenVong?.length}</div>
                <div className="div300">+10%</div>
              </div>
              <div className="tng-ngi-dng1">Nguyện vọng mới</div>
            </div>
          </div>
        </div>
        <div className="frame-parent1226">
          <div className="kho-st-gi-group">
            <div className="kho-st-gi1">Khảo sát gợi ý</div>
            <div className="ellipse-group">
              <div className="frame-child673" />
              <div className="div299">Khảo sát mới</div>
            </div>
          </div>
          <div className="frame-parent1227">
            <div className="frame-parent1228">
              <div className="parent21">
                <div className="div307">100</div>
                <img className="frame-child674" alt="" src="./line-51.svg" />
              </div>
              <div className="parent22">
                <div className="div307">80</div>
                <img className="frame-child674" alt="" src="./line-51.svg" />
              </div>
              <div className="parent23">
                <div className="div307">40</div>
                <img className="frame-child674" alt="" src="./line-51.svg" />
              </div>
              <div className="parent24">
                <div className="div307">20</div>
                <img className="frame-child674" alt="" src="./line-51.svg" />
              </div>
              <div className="parent25">
                <div className="div307">0</div>
                <img className="frame-child674" alt="" src="./line-51.svg" />
              </div>
              <div className="frame-parent1229">
                <div className="rectangle-wrapper12">
                  <div className="frame-child679" />
                </div>
                <div className="rectangle-wrapper13">
                  <div className="frame-child680" />
                </div>
                <div className="rectangle-wrapper13">
                  <div className="frame-child681" />
                </div>
                <div className="rectangle-wrapper13">
                  <div className="frame-child682" />
                </div>
                <div className="rectangle-wrapper13">
                  <div className="frame-child683" />
                </div>
                <div className="rectangle-wrapper17">
                  <div className="frame-child683" />
                </div>
                <div className="rectangle-wrapper18">
                  <div className="frame-child685" />
                </div>
                <div className="rectangle-wrapper17">
                  <div className="frame-child686" />
                </div>
                <div className="rectangle-wrapper17">
                  <div className="frame-child687" />
                </div>
                <div className="rectangle-wrapper21">
                  <div className="frame-child688" />
                </div>
                <div className="rectangle-wrapper22">
                  <div className="frame-child689" />
                </div>
                <div className="rectangle-wrapper23">
                  <div className="frame-child690" />
                </div>
              </div>
              <img className="frame-child691" alt="" src="./group-37240.svg" />
            </div>
            <div className="thng-1-group">
              <div className="div299">Tháng 1</div>
              <div className="div299">Tháng 2</div>
              <div className="div299">Tháng 3</div>
              <div className="div299">Tháng 4</div>
              <div className="div299">Tháng 5</div>
              <div className="div299">Tháng 6</div>
              <div className="div299">Tháng 7</div>
              <div className="div299">Tháng 8</div>
              <div className="div299">Tháng 9</div>
              <div className="div299">Tháng 10</div>
              <div className="div299">Tháng 11</div>
              <div className="div299">Tháng 12</div>
            </div>
          </div>
        </div>
        <div className="frame-parent1230">
          <div className="danh-sch-admin-group">
            <div className="kho-st-gi1">Danh sách Admin</div>
            <div className="frame-parent1231">
              <div className="frame-parent1232">
                <div className="parent26">
                  <div className="div312">#</div>
                  <div className="tn-admin1">Tên Admin</div>
                </div>
                <div className="trng-thi10">Trạng thái</div>
              </div>
              <div className="frame-parent1233">
                <div className="frame-parent1234">
                  <div className="parent27">
                    <div className="div313">#1</div>
                    <div className="rectangle-parent420">
                      <img
                        className="frame-child692"
                        alt=""
                        src="./rectangle-486@2x.png"
                      />
                      <div className="admin-12">Admin 1</div>
                    </div>
                  </div>
                  <div className="online-wrapper33">
                    <div className="online35">Online</div>
                  </div>
                </div>
                <div className="frame-parent1234">
                  <div className="parent27">
                    <div className="div313">#2</div>
                    <div className="rectangle-parent420">
                      <img
                        className="frame-child692"
                        alt=""
                        src="./rectangle-486@2x.png"
                      />
                      <div className="admin-12">Admin 2</div>
                    </div>
                  </div>
                  <div className="online-wrapper33">
                    <div className="online35">Online</div>
                  </div>
                </div>
                <div className="frame-parent1234">
                  <div className="parent27">
                    <div className="div313">#3</div>
                    <div className="rectangle-parent420">
                      <img
                        className="frame-child692"
                        alt=""
                        src="./rectangle-486@2x.png"
                      />
                      <div className="admin-12">Admin 3</div>
                    </div>
                  </div>
                  <div className="online-wrapper33">
                    <div className="online35">Online</div>
                  </div>
                </div>
                <div className="frame-parent1237">
                  <div className="parent27">
                    <div className="div313">#4</div>
                    <div className="rectangle-parent420">
                      <img
                        className="frame-child692"
                        alt=""
                        src="./rectangle-486@2x.png"
                      />
                      <div className="admin-12">Admin 4</div>
                    </div>
                  </div>
                  <div className="offline-wrapper7">
                    <div className="online35">Offline</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tin-nhn-group">
            <div className="kho-st-gi1">Tin nhắn</div>
            <div className="frame-parent1238">
              <div
                className="frame-parent1239"
                style={{
                  height: "500px",
                  overflow: "auto",
                }}
              >
                {listUserMessage.map((item, index) => {
                  return (
                    <div
                      onClick={() => {
                        onChangeUserMessage(item, listAllMessage);
                      }}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 10,
                        ...styles.button,
                      }}
                      key={index}
                      className="rectangle-parent420"
                    >
                      <img
                        style={{ width: "46px", height: "46px" }}
                        className="frame-child692"
                        alt=""
                        src={item?.image || "./rectangle-486@2x.png"}
                      />
                      <div style={{ marginLeft: 10 }} className="admin-12">
                        {item.name.split(" ")[item.name.split(" ").length - 1]}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="frame-parent1240">
                <div className="frame-parent1241">
                  <div
                    className={
                      +userMessage[0]?.id_user_send === +user.id
                        ? ""
                        : "admin-2-container"
                    }
                  >
                    <div style={{ color: "#3f779b" }} className="kho-st-gi1">
                      {
                        userMessage[0]?.name.split(" ")[
                          userMessage[0]?.name.split(" ").length - 1
                        ]
                      }
                    </div>
                  </div>
                  <div
                    style={{
                      height: "400px",
                      overflow: "auto",
                      alignSelf: "stretch",
                      display: "flex",
                      //   flexDirection: "column",
                      justifyContent: "flex-start",
                      flexDirection: "column-reverse",
                    }}
                  >
                    {listMessage.map((item, index) => {
                      if (+item[0]?.id_user_send !== +user.id) {
                        return (
                          <div key={index} className="frame-parent1242">
                            <div className="rectangle-wrapper24">
                              <img
                                style={{ width: "46px", height: "46px" }}
                                className="frame-child692"
                                alt=""
                                src={item[0]?.image || "./rectangle-486@2x.png"}
                              />
                            </div>
                            <div className="frame-parent1243">
                              {item.map((item1, index1) => {
                                return (
                                  <div key={index1} className="thng-k-group">
                                    <div className="div299">
                                      {item1?.content}
                                    </div>
                                    <div className="am4">
                                      {moment(
                                        item1?.time,
                                        "hh:mm:ss DD/MM/YYYY"
                                      ).format("h:mm A")}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <div key={index} className="frame-wrapper332">
                            <div className="frame-parent1243">
                              {item.map((item1, index1) => {
                                return (
                                  <div key={index1} className="thng-k-group">
                                    <div className="div299">
                                      {item1?.content}
                                    </div>
                                    <div className="am4">
                                      {moment(
                                        item1?.time,
                                        "hh:mm:ss DD/MM/YYYY"
                                      ).format("h:mm A")}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      }
                    })}
                    <div ref={bottomRef} />
                  </div>
                </div>
                <div className="vit-g-i-container">
                  {/* <i className="online35">Viết gì đó đi...</i> */}
                  <input
                    className="online35"
                    style={{
                      border: "none",
                      width: "100%",
                      outline: "none",
                      backgroundColor: "#fff",
                      boxShadow: "none",
                      fontSize: "14px",
                    }}
                    placeholder="Viết gì đó đi..."
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        sendMessage();
                      }
                    }}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  ></input>
                  <img
                    onClick={() => {
                      sendMessage();
                    }}
                    style={styles.button}
                    className="vuesaxlinearsenddanhgia-icon"
                    alt=""
                    src="/vuesaxlinearsend1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="tin-nhn-group">
            <div className="kho-st-gi1">Tin nhắn</div>
            <div className="frame-parent1238">
              <div className="frame-parent1239">
                <div className="rectangle-parent420">
                  <img
                    className="frame-child692"
                    alt=""
                    src="./rectangle-486@2x.png"
                  />
                  <div className="admin-12">Admin 1</div>
                </div>
                <div className="rectangle-parent420">
                  <img
                    className="frame-child692"
                    alt=""
                    src="./rectangle-486@2x.png"
                  />
                  <div className="admin-12">Admin 2</div>
                </div>
                <div className="rectangle-parent420">
                  <img
                    className="frame-child692"
                    alt=""
                    src="./rectangle-486@2x.png"
                  />
                  <div className="admin-12">Admin 3</div>
                </div>
                <div className="rectangle-parent420">
                  <img
                    className="frame-child692"
                    alt=""
                    src="./rectangle-486@2x.png"
                  />
                  <div className="admin-12">Admin 4</div>
                </div>
                <div className="rectangle-parent420">
                  <img
                    className="frame-child692"
                    alt=""
                    src="./rectangle-486@2x.png"
                  />
                  <div className="admin-12">Admin 5</div>
                </div>
                <div className="rectangle-parent420">
                  <img
                    className="frame-child692"
                    alt=""
                    src="./rectangle-486@2x.png"
                  />
                  <div className="admin-12">Admin 6</div>
                </div>
              </div>
              <div className="frame-parent1240">
                <div className="frame-parent1241">
                  <div className="admin-2-container">
                    <div className="kho-st-gi1">Admin 2</div>
                  </div>
                  <div className="frame-parent1242">
                    <div className="rectangle-wrapper24">
                      <img
                        className="frame-child692"
                        alt=""
                        src="./rectangle-486@2x.png"
                      />
                    </div>
                    <div className="frame-parent1243">
                      <div className="thng-k-group">
                        <div className="div299">Hello</div>
                        <div className="am4">12:45 AM</div>
                      </div>
                      <div className="thng-k-group">
                        <div className="div299">Bạn khoẻ không?</div>
                        <div className="am4">12:45 AM</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-wrapper332">
                    <div className="frame-parent1243">
                      <div className="thng-k-group">
                        <div className="div299">Chàooo</div>
                        <div className="am4">12:45 AM</div>
                      </div>
                      <div className="thng-k-group">
                        <div className="div299">Tôi khoẻ, còn bạn?</div>
                        <div className="am4">12:45 AM</div>
                      </div>
                      <div className="frame-child703" />
                    </div>
                  </div>
                </div>
                <div className="vit-g-i-container">
                  <i className="online35">Viết gì đó đi...</i>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
