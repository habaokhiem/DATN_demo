import { useEffect, useRef, useState } from "react";
import "./ThongKe.css";
import axios from "axios";
import { groupBy, isEmpty } from "lodash";
import moment from "moment/moment";
import { apiUrl } from "../../constants/api";
import socketIOClient from "socket.io-client";

const ThongKe = ({ isShowModalChat }) => {
  let [isShowMore, setIsShowMore] = useState(true);
  const [user, setUser] = useState([]);
  const [listUserMessage, setListUserMessage] = useState([]);
  const [listAllMessage, setListAllMessage] = useState([]);
  const [listMessage, setListMessage] = useState([]);
  const [userMessage, setUserMessage] = useState({});
  const [message, setMessage] = useState("");
  const [currentUserMessage, setCurrentUserMessage] = useState({});
  const [socketMessage, setSocketMessage] = useState({});
  const [listUser, setListUser] = useState([]);
  const [isShowListAdmin, setIsShowListAdmin] = useState(true);
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
    <div className="iphone-8-16">
      <div className="mobileframe-4273196335">
        <div className="mobile-frame-parent160">
          <div className="mobilevuesaxlinearpeople-parent3">
            <img
              className="mobilevuesaxlinearpeople-icon5"
              alt=""
              src="/mobilevuesaxlinearpeople.svg"
            />
            <div className="frame-parent161">
              <div className="mobile250-parent3">
                <div className="mobile2505">{listUser?.length}</div>
                <div className="mobile1255">+1.25%</div>
              </div>
              <div className="mobiletng-ngi-dng5">Tổng người dùng</div>
            </div>
          </div>
          <div className="mobilevuesaxlinearpeople-parent3">
            <img
              className="mobilevuesaxlinearpeople-icon5"
              alt=""
              src="/mobilevuesaxlinearprofileadd.svg"
            />
            <div className="frame-parent161">
              <div className="mobile250-parent3">
                <div className="mobile2505">{listUser?.length}</div>
                <div className="mobile1255">+10%</div>
              </div>
              <div className="mobiletng-ngi-dng5">Người dùng mới</div>
            </div>
          </div>
          {isShowMore && (
            <div className="mobilevuesaxlinearpeople-parent3">
              <img
                className="mobilevuesaxlinearpeople-icon5"
                alt=""
                src="/mobilevuesaxlinearcardtick.svg"
              />
              <div className="frame-parent161">
                <div className="mobile250-parent3">
                  <div className="mobile2505">{listNguyenVong?.length}</div>
                  <div className="mobile1255">+10%</div>
                </div>
                <div className="mobiletng-ngi-dng5">Tổng nguyện vọng</div>
              </div>
            </div>
          )}
          {isShowMore && (
            <div className="mobilevuesaxlinearpeople-parent3">
              <img
                className="mobilevuesaxlinearpeople-icon5"
                alt=""
                src="/mobilevuesaxlinearcardadd.svg"
              />
              <div className="frame-parent161">
                <div className="mobile250-parent3">
                  <div className="mobile2505">{listNguyenVong?.length}</div>
                  <div className="mobile1255">+10%</div>
                </div>
                <div className="mobiletng-ngi-dng5">Nguyện vọng mới</div>
              </div>
            </div>
          )}
          <div
            onClick={() => {
              setIsShowMore(!isShowMore);
            }}
            className="time6"
          >
            <img
              className="mobileiconoutlinedapplicatio7"
              alt=""
              src={isShowMore ? "/mobileicons2.svg" : "/mobileicons.svg"}
            />
            <div className="mobilesee-less">
              {isShowMore ? "See Less" : "See More"}
            </div>
          </div>
        </div>
        <div className="mobile-frame-parent165">
          <div className="mobilekho-st-gi-parent3">
            <div className="mobilekho-st-gi5">Khảo sát gợi ý</div>
            <div className="mobilemobileellipse-3-parent3">
              <div className="mobilemobileellipse-36" />
              <div className="mobilext-tuyn-i6">Khảo sát mới</div>
            </div>
          </div>
          <div className="mobile-frame-parent166">
            <div className="mobile-frame-parent167">
              <div className="mobile-frame-parent168">
                <div className="mobile100-parent3">
                  <div className="mobile1005">100</div>
                  <img
                    className="mobilemobileline-6-icon25"
                    alt=""
                    src="/mobilemobileline-6.svg"
                  />
                </div>
                <div className="mobile100-parent3">
                  <div className="mobile1005">80</div>
                  <img
                    className="mobilemobileline-6-icon25"
                    alt=""
                    src="/mobilemobileline-61.svg"
                  />
                </div>
                <div className="mobile100-parent3">
                  <div className="mobile1005">40</div>
                  <img
                    className="mobilemobileline-6-icon25"
                    alt=""
                    src="/mobilemobileline-61.svg"
                  />
                </div>
                <div className="mobile100-parent3">
                  <div className="mobile1005">20</div>
                  <img
                    className="mobilemobileline-6-icon25"
                    alt=""
                    src="/mobilemobileline-61.svg"
                  />
                </div>
                <div className="mobile100-parent3">
                  <div className="mobile1005">0</div>
                  <img
                    className="mobilemobileline-6-icon25"
                    alt=""
                    src="/mobilemobileline-61.svg"
                  />
                </div>
              </div>
              <img
                className="mobilevector-1-icon5"
                alt=""
                src="/mobilevector-1.svg"
              />
            </div>
            <div className="mobilet1-parent3">
              <div className="mobilext-tuyn-i6">T1</div>
              <div className="mobilext-tuyn-i6">T2</div>
              <div className="mobilext-tuyn-i6">T3</div>
              <div className="mobilext-tuyn-i6">T4</div>
              <div className="mobilext-tuyn-i6">T5</div>
              <div className="mobilext-tuyn-i6">T6</div>
              <div className="mobilext-tuyn-i6">T7</div>
              <div className="mobilext-tuyn-i6">T8</div>
              <div className="mobilext-tuyn-i6">T9</div>
              <div className="mobilext-tuyn-i6">T10</div>
              <div className="mobilext-tuyn-i6">T11</div>
              <div className="mobilext-tuyn-i6">T12</div>
            </div>
          </div>
        </div>
        <div className="mobile-frame-parent169-main">
          <div className="mobilekho-st-gi-parent3">
            <div className="mobilekho-st-gi5">Danh sách Admin</div>
            <div
              onClick={() => {
                setIsShowListAdmin(!isShowListAdmin);
              }}
              className="mobilethu-gn8"
            >
              {isShowListAdmin ? "Thu gọn" : "Chi tiết"}
            </div>
          </div>
          {isShowListAdmin && (
            <div className="mobile-frame-parent170-main">
              <div className="mobile-frame-parent171-main">
                <div className="mobile-parent3-main">
                  <div className="mobile9">#</div>
                  <div className="mobiletn-admin5">Tên Admin</div>
                </div>
                <div className="mobiletrng-thi5">Trạng thái</div>
              </div>
              <div className="mobile-frame-parent172-main">
                {listUser
                  ?.filter((item) => item.permission === 1)
                  .map((item, index) => {
                    return (
                      <div key={index} className="mobile-frame-parent173-main">
                        <div className="mobile1-parent3-main">
                          <div className="mobile15">#{index + 1}</div>
                          <div className="mobile-frame-parent159-main">
                            <img
                              className="mobilerectangle-48-icon24"
                              alt=""
                              src={item?.image || "/mobilerectangle-48@2x.png"}
                            />
                            <div className="mobileadmin-15">
                              {item?.name.split(" ")[
                                item?.name.split(" ").length - 1
                              ] || `Admin ${index + 1}`}
                            </div>
                          </div>
                        </div>
                        {item?.online ? (
                          <div className="mobileonline-wrapper13">
                            <div className="mobileonline15">Online</div>
                          </div>
                        ) : (
                          <div className="mobileoffline-wrapper3-main">
                            <div className="mobileonline15">Offline</div>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThongKe;
