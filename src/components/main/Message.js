import { useEffect, useRef, useState } from "react";
import { apiUrl } from "../../constants/api";
import axios from "axios";
import { groupBy, isEmpty, sortBy } from "lodash";
import { styles } from "../../pages/TrangCh1";
import moment from "moment/moment";
import socketIOClient from "socket.io-client";

export const Message = () => {
  const [user, setUser] = useState([]);
  const [listUserMessage, setListUserMessage] = useState([]);
  const [listAllMessage, setListAllMessage] = useState([]);
  const [listMessage, setListMessage] = useState([]);
  const [userMessage, setUserMessage] = useState({});
  const [message, setMessage] = useState("");
  const [currentUserMessage, setCurrentUserMessage] = useState({});
  const [socketMessage, setSocketMessage] = useState({});

  const socketRef = useRef();
  const bottomRef = useRef(null);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
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
    <div className="tin-nhn-parent">
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
                                <div className="div299">{item1?.content}</div>
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
                      <div
                        key={index}
                        className={index !== listMessage.length - 1 ? "frame-wrapper332" : ""}
                      >
                        <div className="frame-parent1243">
                          {item.map((item1, index1) => {
                            return (
                              <div key={index1} className="thng-k-group">
                                <div className="div299">{item1?.content}</div>
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
    </div>
  );
};
