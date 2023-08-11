import { useEffect, useState } from "react";
import "./ThongTinUserMobile.css";
import "./mobile-mobile-modal-update-user-adm.css";
import axios from "axios";
import Select from "react-select";
import { apiUrl } from "../../constants/api";
import { list16Personality } from "../../constants/list16Personality";
import { listAcademic } from "../../constants/listAcademic";
import { listPersonality } from "../../constants/listPersonaliy";

const ModalRequestAdmin = ({ setIsShowModalRequestAdmin, requestAdmin }) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="mobileframe-4273196191"
    >
      <div className="frame-parent88">
        <div className="mobilevuesaxlineardanger-parent">
          <img
            className="mobilevuesaxlineardanger-icon"
            alt=""
            src="/mobilevuesaxlineardanger.svg"
          />
          <div className="mobilexc-nhn">Thông báo</div>
          <div className="mobilebn-mun-yu">
            Bạn muốn yêu cầu cập nhật vai trò Admin?
          </div>
        </div>
        <div className="frame-parent93">
          <div
            onClick={() => {
              requestAdmin();
              setIsShowModalRequestAdmin(false);
            }}
            className="mobilexc-nhn-wrapper"
          >
            <div className="mobilexc-nhn">Xác nhận</div>
          </div>
          <div
            onClick={() => {
              setIsShowModalRequestAdmin(false);
            }}
            className="mobilehu-b-wrapper1"
          >
            <div className="mobilehu-b3">Huỷ bỏ</div>
          </div>
        </div>
      </div>
    </div>
  );
};
const ThongTinUserMobile = ({ editUser, setPage, setUserAdmin }) => {
  console.log("editUser: ", editUser);
  let hoEditUser = editUser?.name.split(" ")[0] || "";
  let tenEditUser = editUser?.name.replace(editUser?.name?.split(" ")[0], "");
  const [user, setUser] = useState(null);
  const [permission, setPermission] = useState(editUser?.permission || 0);
  const [ho, setHo] = useState(hoEditUser?.trim() || "");
  const [ten, setTen] = useState(tenEditUser?.trim() || "");
  const [email, setEmail] = useState(editUser?.email || "");
  const [password, setPassword] = useState("");
  const [hocLuc, setHocLuc] = useState(
    editUser?.academic
      ? { value: editUser?.academic, label: editUser?.academic }
      : ""
  );
  const [tinhCach, setTinhCach] = useState(
    editUser?.personality
      ? { value: editUser?.personality, label: editUser?.personality }
      : ""
  );
  const [isFocusHo, setIsFocusHo] = useState(false);
  const [isFocusTen, setIsFocusTen] = useState(false);
  const [isFocusEmail, setIsFocusEmail] = useState(false);
  const [isFocusPassword, setIsFocusPassword] = useState(false);
  const [image, setImage] = useState(editUser?.image || "");
  const [imageName, setImageName] = useState("");
  const [isFocusHocLuc, setIsFocusHocLuc] = useState(false);
  const [isFocusTinhCach, setIsFocusTinhCach] = useState(false);
  const [isFocusImage, setIsFocusImage] = useState(false);
  const [isShowModalDeleteRole, setIsShowModalDeleteRole] = useState(false);
  const [isShowModalDeleteRoleSuccess, setIsShowModalDeleteRoleSuccess] =
    useState(false);
  const [isShowModalChangeRole, setIsShowModalChangeRole] = useState(false);
  const [isShowModalChangeRoleSuccess, setIsShowModalChangeRoleSuccess] =
    useState(false);
  const [isShowModalUpdateSuccess, setIsShowModalUpdateSuccess] =
    useState(false);
  const [personality, setPersonality] = useState(null);
  const [isShowModalRequestAdmin, setIsShowModalRequestAdmin] = useState(false);
  let first = editUser?.personality[0] || "";
  let second = editUser?.personality[1] || "";
  let third = editUser?.personality[2] || "";
  let fourth = editUser?.personality[3] || "";
  let fifth = editUser?.personality[5] || "";

  useEffect(() => {
    if (!!editUser) {
      //get personality
      axios
        .get(`${apiUrl}/personality/${editUser.id}`)
        .then((res) => {
          let userUpdate = editUser;
          if (res.data.data[0].personality) {
            userUpdate.personality = res.data.data[0]?.personality;
            // `${res.data.data[0]?.personality.slice(
            //   0,
            //   4
            // )} - ${res.data.data[0]?.personality.slice(5, 6)}` || null;
            userUpdate.percentType1 = res.data.data[0]?.percentType1 || null;
            userUpdate.percentType2 = res.data.data[0]?.percentType2 || null;
            userUpdate.percentType3 = res.data.data[0]?.percentType3 || null;
            userUpdate.percentType4 = res.data.data[0]?.percentType4 || null;
            userUpdate.percentType5 = res.data.data[0]?.percentType5 || null;
            // localStorage.setItem("user", JSON.stringify(userUpdate));
            if (userUpdate?.personality) {
              // setCurPage(9);
              setPersonality(userUpdate?.personality);
              let personality = list16Personality.find(
                (item) => item.code === userUpdate.personality.slice(0, 4)
              );
              setPersonality({
                ...personality,

                fullResult: userUpdate.personality,
                percentType1: userUpdate.percentType1,
                percentType2: userUpdate.percentType2,
                percentType3: userUpdate.percentType3,
                percentType4: userUpdate.percentType4,
                percentType5: userUpdate.percentType5,
              });
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const onChangeRole = (role) => {
    axios
      .post(`${apiUrl}/update_role`, {
        id: editUser?.id,
        permission: role,
      })
      .then((res) => {
        if (role === 1) {
          setIsShowModalChangeRoleSuccess(true);
          setIsShowModalChangeRole(false);
          setPermission(1);
        }
        if (role === 0) {
          setIsShowModalDeleteRoleSuccess(true);
          setIsShowModalDeleteRole(false);
          setPermission(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateUserInfo = () => {
    if (!ho) {
      alert("Vui lòng nhập họ");
      return;
    }
    if (!ten) {
      alert("Vui lòng nhập tên");
      return;
    }
    if (!email) {
      alert("Vui lòng nhập email");
      return;
    }
    if (!hocLuc) {
      alert("Vui lòng nhập học lực");
      return;
    }
    if (!tinhCach) {
      alert("Vui lòng nhập tính cách");
      return;
    }
    if (!image) {
      alert("Vui lòng nhập image");
      return;
    }
    const body = {
      id: editUser?.id,
      lastName: ho?.trim(),
      firstName: ten?.trim(),
      email,
      password: !!email && !!password ? Encrypt(email, password) : null,
      academic: hocLuc?.value,
      personality: tinhCach?.value,
      image,
    };
    axios
      .post(`${apiUrl}/update_user`, body)
      .then((res) => {
        setIsShowModalUpdateSuccess(true);
        axios.get(`${apiUrl}/user/${editUser?.id}`).then((res) => {
          let user = res.data.data[0];
          localStorage.setItem("user", JSON.stringify(user));
          setUser(user);
          setUserAdmin(user);
        });
        if (user?.permission) {
          setPage("thongKe");
        } else {
          setPage("home");
        }
        // setEditUser(null);
        // setScreen("listUser");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteUser = () => {
    axios
      .post(`${apiUrl}/delete_user`, { id: [editUser.id] })
      .then((res) => {
        setEditUser(null);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };
  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user) {
      user = JSON.parse(user);
      setUser(user);
    }
  }, []);

  const requestAdmin = () => {
    axios
      .post(`${apiUrl}/request_admin`, { id: user.id })
      .then((res) => {
        console.log(res.data.data);
        axios.get(`${apiUrl}/user/${user.id}`).then((res) => {
          let user = res.data.data[0];
          localStorage.setItem("user", JSON.stringify(user));
          setUser(user);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      onClick={() => {
        if (isShowModalRequestAdmin) {
          setIsShowModalRequestAdmin(false);
        }
      }}
      className="iphone-8-119"
    >
      <div className="mobileframe-4273196138">
        <div className="mobile-frame-parent273">
          <div className="mobile-frame-wrapper55">
            <div className="mobilenguyn-vn-a-parent46">
              <div className="mobilenguyn-vn-a51">
                {user?.name || "Nguyễn Văn A"}
              </div>
              <div className="mobile-frame-parent274">
                <div className="mobile-frame-wrapper56">
                  <div className="mobile-frame-wrapper57">
                    <div className="mobilehc-sinh-wrapper6">
                      <div className="mobilehc-sinh8">Học sinh</div>
                    </div>
                  </div>
                </div>
                <div
                  style={
                    user?.request_admin
                      ? { background: "#D4D4D4", border: "1px solid yellow" }
                      : null
                  }
                  onClick={() => {
                    setIsShowModalRequestAdmin(true);
                  }}
                  className="mobile-frame-wrapper58"
                >
                  <div className="mobile-frame-wrapper57">
                    <div className="mobilehc-sinh-wrapper6">
                      <div className="mobilehc-sinh8">Admin</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-frame-parent275-main">
            <div className="mobilemobilerectangle-48-group">
              <img
                className="mobilemobilerectangle-48-icon1"
                alt=""
                src={user?.image || "/mobilerectangle-48@2x.png"}
              />
              <div className="mobilemobileimage-21-container">
                <img
                  className="mobilemobileimage-21-icon2"
                  alt=""
                  src={personality?.image || "/mobileimage-21@2x.png"}
                />
                <div className="mobilevirtuoso-parent6">
                  <div className="mobilevirtuoso8">
                    {personality?.name || ""}
                  </div>
                  {personality?.fullResult && (
                    <div className="mobileistp-t7">{`${personality?.fullResult.slice(
                      0,
                      4
                    )} - ${personality?.fullResult.slice(5, 6)}`}</div>
                  )}
                </div>
              </div>
            </div>
            <div className="mobile-frame-parent276">
              <div className="mobile-frame-parent277">
                <div className="mobileh-parent6">
                  <div
                    className={isFocusHo ? "mobilevirtuoso8" : "mobilenguyn8"}
                  >
                    Họ *
                  </div>
                  <div className="mobilenguyn-wrapper6">
                    {/* <div className="mobilenguyn8">Nguyễn</div> */}
                    <input
                      className="mobilenguyn7"
                      style={{
                        border: "none",
                        width: "100%",
                        outline: "none",
                        backgroundColor: "#fff",
                        boxShadow: "none",
                        fontSize: "14px",
                      }}
                      placeholder="Nguyễn"
                      onFocus={() => {
                        setIsFocusHo(true);
                      }}
                      onBlur={() => {
                        setIsFocusHo(false);
                      }}
                      value={ho}
                      onChange={(e) => {
                        setHo(e.target.value);
                      }}
                    ></input>
                  </div>
                </div>
                <div className="mobiletn-parent6">
                  <div
                    className={isFocusTen ? "mobilevirtuoso8" : "mobilenguyn8"}
                  >
                    Tên *
                  </div>
                  <div className="mobilevn-a-wrapper6">
                    {/* <div className="mobilenguyn8">Văn A</div> */}
                    <input
                      className="mobilenguyn8"
                      style={{
                        border: "none",
                        width: "100%",
                        outline: "none",
                        backgroundColor: "#fff",
                        boxShadow: "none",
                        fontSize: "14px",
                      }}
                      placeholder="Văn A"
                      onFocus={() => {
                        setIsFocusTen(true);
                      }}
                      onBlur={() => {
                        setIsFocusTen(false);
                      }}
                      value={ten}
                      onChange={(e) => {
                        setTen(e.target.value);
                      }}
                    ></input>
                  </div>
                </div>
              </div>
              <div className="mobile-frame-parent278">
                <div className="mobileh-parent6">
                  <div
                    className={
                      isFocusEmail ? "mobilevirtuoso8" : "mobilenguyn8"
                    }
                  >
                    Email *
                  </div>
                  <div className="mobilevn-a-wrapper6">
                    {/* <div className="mobilenguyn8">a.nv123@gmail.com</div> */}
                    <input
                      className="mobilenguyn8"
                      style={{
                        border: "none",
                        width: "100%",
                        outline: "none",
                        backgroundColor: "#fff",
                        boxShadow: "none",
                        fontSize: "14px",
                      }}
                      placeholder="a.nv123@gmail.com"
                      onFocus={() => {
                        setIsFocusEmail(true);
                      }}
                      onBlur={() => {
                        setIsFocusEmail(false);
                      }}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    ></input>
                  </div>
                </div>
                <div className="mobileh-parent6">
                  <div
                    className={
                      isFocusHocLuc ? "mobilevirtuoso8" : "mobilenguyn8"
                    }
                  >
                    Học lực *
                  </div>
                  <div className="mobilevn-a-wrapper6">
                    {/* <div className="mobilenguyn8">Khá</div> */}
                    <Select
                      className="mobilenguyn7"
                      // defaultValue={4}
                      value={hocLuc}
                      onChange={(inputValue) => {
                        setHocLuc(inputValue);
                      }}
                      onFocus={() => {
                        setIsFocusHocLuc(true);
                      }}
                      onBlur={() => {
                        setIsFocusHocLuc(false);
                      }}
                      options={listAcademic.map((item) => ({
                        value: item,
                        label: item,
                      }))}
                      theme={(theme) => ({
                        ...theme,
                        borderRadius: "4px",
                        colors: {
                          ...theme.colors,
                          // primary25: "white",
                          // primary: "white",
                        },
                      })}
                      placeholder={<div className="mobilenguyn7">VD: Giỏi</div>}
                      components={{
                        IndicatorSeparator: () => null,
                        // DropdownIndicator,
                      }}
                      isSearchable
                      styles={{
                        control: (styles) => ({
                          ...styles,

                          width: "140px",
                          height: "20px",
                          backgroundColor: "#FFFFFF",
                          border: "none",
                          boxShadow: "0 !important",
                          "&:hover": {
                            border: "none !important",
                            //boxShadow: "0 0 10px #271E4A"
                          },
                        }),
                        menu: (base) => ({
                          ...base,
                          fontSize: "14px",
                          fontWeight: "400",
                          background: "rgba(203, 194, 237, 0.3)",
                          backdropFilter: `blur(7px)`,
                          borderRadius: "4px",
                          border: "1px solid #271E4A",
                          textAlign: "center",
                          hover: {
                            background: "red",
                          },
                        }),
                        menuList: (base) => ({
                          ...base,
                          // kill the white space on first and last option
                          padding: 0,
                        }),
                        dropdownIndicator: (provided) => ({
                          ...provided,
                          svg: {
                            fill: "#271E4A",
                          },
                        }),
                        option: (
                          styles,
                          { data, isDisabled, isFocused, isSelected }
                        ) => {
                          return {
                            ...styles,
                            backgroundColor: isSelected
                              ? "rgba(203, 194, 237, 0.3)"
                              : isFocused
                              ? "rgba(203, 194, 237, 0.3)"
                              : null,
                            color: "#271E4A",
                            cursor: isDisabled ? "not-allowed" : "default",
                          };
                        },

                        singleValue: (base) => ({
                          ...base,
                          // padding: "5px 10px",
                          borderRadius: 5,
                          background: "#FFFFFF",
                          color: "#271E4A",
                          display: "flex",
                          width: "fit-content",
                          fontSize: "14px",
                          fontWeight: "500",
                        }),
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="mobile-frame-parent278">
                <div className="mobileh-parent6">
                  <div
                    className={
                      isFocusTinhCach ? "mobilevirtuoso8" : "mobilenguyn8"
                    }
                  >
                    Tính cách *
                  </div>
                  <div className="mobilevn-a-wrapper6">
                    {/* <div className="mobilenguyn8">ENFP-T</div> */}
                    <Select
                      className="mobilenguyn7"
                      // defaultValue={4}
                      value={tinhCach}
                      onChange={(inputValue) => {
                        setTinhCach(inputValue);
                      }}
                      onFocus={() => {
                        setIsFocusTinhCach(true);
                      }}
                      onBlur={() => {
                        setIsFocusTinhCach(false);
                      }}
                      options={listPersonality.map((item) => ({
                        value: item,
                        label: item,
                      }))}
                      theme={(theme) => ({
                        ...theme,
                        borderRadius: "4px",
                        colors: {
                          ...theme.colors,
                          // primary25: "white",
                          // primary: "white",
                        },
                      })}
                      placeholder={
                        <div className="mobilenguyn7">VD: ENFP-T</div>
                      }
                      components={{
                        IndicatorSeparator: () => null,
                        //   DropdownIndicator,
                      }}
                      isSearchable
                      styles={{
                        control: (styles) => ({
                          ...styles,

                          width: "140px",
                          height: "20px",
                          backgroundColor: "#FFFFFF",

                          border: "none",
                          boxShadow: "0 !important",
                          "&:hover": {
                            border: "none !important",
                            //boxShadow: "0 0 10px #271E4A"
                          },
                        }),
                        menu: (base) => ({
                          ...base,
                          fontSize: "14px",
                          fontWeight: "400",
                          background: "rgba(203, 194, 237, 0.3)",
                          backdropFilter: `blur(7px)`,
                          borderRadius: "4px",
                          border: "1px solid #271E4A",
                          textAlign: "center",
                          hover: {
                            background: "red",
                          },
                        }),
                        menuList: (base) => ({
                          ...base,
                          // kill the white space on first and last option
                          padding: 0,
                        }),
                        input: (base) => ({
                          ...base,
                          color: "#271E4A",
                          fontSize: "20px",
                          fontWeight: "400",
                        }),
                        dropdownIndicator: (provided) => ({
                          ...provided,
                          svg: {
                            fill: "#271E4A",
                          },
                        }),
                        option: (
                          styles,
                          { data, isDisabled, isFocused, isSelected }
                        ) => {
                          return {
                            ...styles,
                            backgroundColor: isSelected
                              ? "rgba(203, 194, 237, 0.3)"
                              : isFocused
                              ? "rgba(203, 194, 237, 0.3)"
                              : null,
                            color: "#271E4A",
                            cursor: isDisabled ? "not-allowed" : "default",
                          };
                        },

                        singleValue: (base) => ({
                          ...base,
                          // padding: "5px 10px",
                          borderRadius: 5,
                          background: "#FFFFFF",
                          color: "#271E4A",
                          display: "flex",
                          width: "fit-content",
                          fontSize: "14px",
                          fontWeight: "500",
                        }),
                      }}
                    />
                  </div>
                </div>
                <div className="mobileh-parent6">
                  <div
                    className={
                      isFocusPassword ? "mobilevirtuoso8" : "mobilenguyn8"
                    }
                  >
                    Mật khẩu *
                  </div>
                  <div className="mobilevn-a-wrapper6">
                    {/* <div className="mobilenguyn8">abcdef</div> */}
                    <input
                      className="mobilenguyn8"
                      style={{
                        border: "none",
                        width: "100%",
                        outline: "none",
                        backgroundColor: "#fff",
                        boxShadow: "none",
                        fontSize: "14px",
                      }}
                      placeholder="abcdef"
                      onFocus={() => {
                        setIsFocusPassword(true);
                      }}
                      onBlur={() => {
                        setIsFocusPassword(false);
                      }}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-frame-parent280">
            <div
              onClick={() => {
                if (user?.permission) {
                  setPage("thongKe");
                } else {
                  setPage("home");
                }
              }}
              className="mobilehu-b-wrapper10"
            >
              <div className="mobilevirtuoso8">Huỷ bỏ</div>
            </div>
            <div
              onClick={() => {
                updateUserInfo();
              }}
              className="mobilecp-nht-wrapper10"
            >
              <div className="mobilevirtuoso8">Cập nhật</div>
            </div>
          </div>
        </div>
        {!personality ? (
          <div className="mobile-frame-parent265">
            <div style={{ fontStyle: "italic" }} className="mobilethch-cc-ni8">
              Người dùng cần làm khảo sát tính cách hoặc chọn tính cách để có
              thể xem chi tiết nhóm tính cách
            </div>
          </div>
        ) : (
          <div className="mobile-frame-parent265">
            <div className="mobile-frame-parent266">
              <div className="mobile-frame-parent267">
                <div className="mobileintroverted-parent6">
                  <div className="mobileintroverted8">
                    <span className="i9">{first}</span>
                    <span>{first === "I" ? "ntroverted" : "xtrovert"}</span>
                  </div>
                  <div className="mobileintroverted8">
                    {first === "I" ? "(Hướng nội)" : "(Hướng ngoại)"}
                  </div>
                  <div className="mobile547">
                    {personality?.percentType1 || "51"}%
                  </div>
                </div>
                <div className="mobilethch-cc-ni8">
                  {first === "I"
                    ? "Thích các nơi yên tĩnh, không thích tiếp xúc với người lạ."
                    : "Luôn giàu năng lượng và được thúc đẩy bởi đám đông."}
                </div>
              </div>
              <div className="mobile-frame-parent267">
                <div className="mobileintroverted-parent6">
                  <div className="mobileintroverted8">
                    <span className="i9">{third}</span>
                    <span>{third === "F" ? "eeling" : "hinking"}</span>
                  </div>
                  <div className="mobileintroverted8">
                    {third === "F" ? "(Cảm xúc)" : "(Lý trí)"}
                  </div>
                  <div className="mobile547">
                    {personality?.percentType3 || "51"}%
                  </div>
                </div>
                <div className="mobilethch-cc-ni8">
                  {third === "F"
                    ? "Luôn xử lý các hành động theo cảm xúc."
                    : "Luôn giữ được “cái đầu lạnh” cùng hạnh động hợp lý."}
                </div>
              </div>
            </div>
            <div className="mobile-frame-parent269">
              <div className="mobile-frame-parent267">
                <div className="mobileintroverted-parent6">
                  <div className="mobileintroverted8">
                    <span>{second === "S" ? "" : "i"}</span>
                    <span className="i9">{second}</span>
                    <span>{second === "S" ? "ensing" : "tuition"}</span>
                  </div>
                  <div className="mobileintroverted8">
                    {second === "S" ? "(Cảm nhận)" : "(Trực giác)"}
                  </div>
                  <div className="mobile547">
                    {personality?.percentType2 || "51"}%
                  </div>
                </div>
                <div className="mobilethch-cc-ni8">
                  {second === "S"
                    ? "Thường đi sâu vào chi tiết nhỏ hơn là nhìn vào bức tranh toàn cảnh."
                    : "Sử dụng trực giác và tập trung nhìn vào bức tranh toàn cảnh hơn là những chi tiết nhỏ nhặt."}
                </div>
              </div>
              <div className="mobile-frame-parent267">
                <div className="mobileintroverted-parent6">
                  <div className="mobileintroverted8">
                    <span className="i9">{fourth}</span>
                    <span>{fourth === "P" ? "erceiving" : "udgement"}</span>
                  </div>
                  <div className="mobileintroverted8">
                    {fourth === "P" ? "(Nhận thức)" : "(Nguyên tắc)"}
                  </div>
                  <div className="mobile547">
                    {personality?.percentType4 || "51"}%
                  </div>
                </div>
                <div className="mobilethch-cc-ni8">
                  {fourth === "P"
                    ? "Luôn dành thời gian quan sát, nhìn sự việc đa chiều theo từng hoàn cảnh và môi trường."
                    : "Thích lập các kế hoạch sớm và tuân thủ các nguyên tắc."}
                </div>
              </div>
              <div className="mobile-frame-parent267">
                <div className="mobileintroverted-parent6">
                  <div className="mobileintroverted8">
                    <span className="i9">{fifth}</span>
                    <span>{fifth === "A" ? "ssertive" : "urbulent"}</span>
                  </div>
                  <div className="mobileintroverted8">
                    {fifth === "A" ? "(Hỗn loạn)" : "(Quyết đoán)"}
                  </div>
                  <div className="mobile547">
                    {personality?.percentType5 || "51"}%
                  </div>
                </div>
                <div className="mobilethch-cc-ni8">
                  {fifth === "A"
                    ? "Nhận thức sâu sắc về mọi thứ, thường hay lo lắng về sự khó đoán và hay suy nghĩ về những sự thất bại."
                    : "Bình tĩnh và tự tin vào khả năng của bản thân để giải quyết vấn đề trong cuộc sống."}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {isShowModalRequestAdmin && (
        <ModalRequestAdmin
          setIsShowModalRequestAdmin={setIsShowModalRequestAdmin}
          requestAdmin={requestAdmin}
        />
      )}
    </div>
  );
};

export default ThongTinUserMobile;
