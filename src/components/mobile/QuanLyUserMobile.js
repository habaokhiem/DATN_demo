import { useEffect, useState } from "react";
import "./QuanLyUserMobile.css";
import axios from "axios";
import Select from "react-select";
import { apiUrl } from "../../constants/api";
import "./mobile-mobile-mobile-quan-ly-nguoi-d1.css";
import { listAcademic } from "../../constants/listAcademic";
import { listPersonality } from "../../constants/listPersonaliy";
import { Encrypt } from "../../constants/utils";
import { list16Personality } from "../../constants/list16Personality";
import { makeUploadImage } from "../../utils/upload";
import "./mobile-mobile-mobile-modal-update-a.css";

const ListUser = ({ listUser, page, setPage, setEditUser }) => {
  return (
    <div className="iphone-8-113">
      <div className="mobileframe-4273196654">
        <div className="mobile-frame-parent171">
          <div className="mobile-frame-parent172">
            <div className="mobile-parent2">
              <div className="mobile17">#</div>
              <div className="mobiletn-user3">Tên User</div>
            </div>
            <div className="mobileph-duyt2">Phê duyệt</div>
          </div>
          <i className="mobileycpd-yu-cu4">*YCPD: Yêu cầu phê duyệt</i>
        </div>
        <div className="mobile-frame-parent173">
          {listUser.slice((page - 1) * 10, page * 10).map((item, index) => {
            return (
              <div
                onClick={() => {
                  setEditUser(item);
                  //scroll to top
                  window.scrollTo(0, 0);
                }}
                key={index}
                className="mobile-frame-parent174"
              >
                <div className="mobile1-parent2">
                  <div className="mobile18">#{(page - 1) * 10 + index + 1}</div>
                  <div className="mobile-frame-parent170">
                    <img
                      className="mobilerectangle-48-icon33"
                      alt=""
                      src={item?.image || "/mobilerectangle-481@2x.png"}
                    />
                    <div className="mobile-frame-parent171">
                      <div className="mobilenguyn-vn-a36">
                        {item?.name || "Nguyễn Văn A"}
                      </div>
                      {item?.online ? (
                        <div className="mobileonline-parent24">
                          <div className="mobileonline26">Online</div>
                          <div className="mobilemobileellipse-3440" />
                        </div>
                      ) : (
                        <div className="mobileofline-parent2">
                          <div className="mobileofline4">Offline</div>
                          <div className="mobilemobileellipse-3444" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {item?.request_admin ? (
                  <div className="mobile-6">YCPD</div>
                ) : (
                  <div className="mobile-6">--</div>
                )}
              </div>
            );
          })}
        </div>
        <div className="mobile-frame-parent184">
          <div
            onClick={() => {
              if (page > 1) {
                setPage(page - 1);
                //scroll to top
                window.scrollTo(0, 0);
              }
            }}
            className={
              page === 1
                ? "mobilevuesaxlineararrow-left-parent2"
                : "mobiletip-tc-parent2"
            }
          >
            <img
              className="mobileiconoutlinedapplicatio16"
              alt=""
              src="/mobilevuesaxlineararrowleft1.svg"
            />
            <div className="mobilequay-li4">Quay lại</div>
          </div>
          <div className="mobile1104">{page}/10</div>
          <div
            onClick={() => {
              if (page < Math.ceil(listUser.length / 10)) {
                setPage(page + 1);
                //scroll to top
                window.scrollTo(0, 0);
              }
            }}
            className={
              page >= listUser.length / 10
                ? "mobilevuesaxlineararrow-left-parent2"
                : "mobiletip-tc-parent2"
            }
          >
            <div className="mobilequay-li4">Tiếp tục</div>
            <img
              className="mobileiconoutlinedapplicatio16"
              alt=""
              src="/mobilevuesaxlineararrowright1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const EditUserMobile = ({ editUser, setEditUser }) => {
  const [permission, setPermission] = useState(editUser?.permission || 0);
  const [ho, setHo] = useState(editUser?.ho || "");
  const [ten, setTen] = useState(editUser?.ten || "");
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
  let first = personality?.fullResult[0] || "";
  let second = personality?.fullResult[1] || "";
  let third = personality?.fullResult[2] || "";
  let fourth = personality?.fullResult[3] || "";
  let fifth = personality?.fullResult[5] || "";
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
  return (
    <div
      onClick={() => {
        if (isShowModalUpdateSuccess) {
          setIsShowModalUpdateSuccess(false);
        }
      }}
      className="iphone-8-118"
    >
      <div className="mobileframe-4273196137">
        <div className="mobile-frame-parent257">
          <div className="mobile-frame-wrapper50">
            <div className="mobilenguyn-vn-a-parent45">
              <div className="mobilenguyn-vn-a50">
                {editUser?.name || "Nguyễn Văn A"}
              </div>
              <div className="mobile-frame-parent258">
                {permission ? (
                  <div
                    onClick={() => {
                      onChangeRole(0);
                    }}
                    className="mobile-frame-wrapper51"
                  >
                    <div className="mobile-frame-wrapper52">
                      <div className="mobilehc-sinh-wrapper5">
                        <div className="mobilehc-sinh7">Học sinh</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      onChangeRole(1);
                    }}
                    className="mobile-frame-wrapper53"
                  >
                    <div className="mobile-frame-wrapper52">
                      <div className="mobilehc-sinh-wrapper5">
                        <div className="mobilehc-sinh7">Học sinh</div>
                      </div>
                    </div>
                  </div>
                )}
                {permission ? (
                  <div
                    onClick={() => {
                      onChangeRole(0);
                    }}
                    className="mobile-frame-wrapper53"
                  >
                    <div className="mobile-frame-wrapper52">
                      <div className="mobilehc-sinh-wrapper5">
                        <div className="mobilehc-sinh7">Admin</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      onChangeRole(1);
                    }}
                    className="mobile-frame-wrapper51"
                  >
                    <div className="mobile-frame-wrapper52">
                      <div className="mobilehc-sinh-wrapper5">
                        <div className="mobilehc-sinh7">Admin</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="mobile-frame-parent259">
            <div className="mobilerectangle-48-parent44">
              <div className="mobilerectangle-48-icon46">
                <label htmlFor="contained-button-file">
                  <img
                    className="mobilerectangle-48-icon46"
                    alt=""
                    src={image || "/mobilerectangle-48@2x.png"}
                  />
                </label>
              </div>
              <input
                id="contained-button-file"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={async (e) => {
                  const file = e.target.files[0];
                  let response = await makeUploadImage(file);
                  setImage(response?.secure_url);
                }}
              />
              <div className="mobilemobileimage-21-group">
                {!!personality && (
                  <img
                    className="mobilemobileimage-21-icon1"
                    alt=""
                    src={personality?.image || "/mobileimage-21@2x.png"}
                  />
                )}
                <div className="mobilevirtuoso-parent5">
                  <div className="mobilevirtuoso7">
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

            <div className="mobile-frame-parent260">
              <div className="mobile-frame-parent261">
                <div className="mobileh-parent5">
                  <div
                    className={isFocusHo ? "mobilevirtuoso7" : "mobilenguyn7"}
                  >
                    Họ *
                  </div>
                  <div className="mobilenguyn-wrapper5">
                    {/* <div className="mobilenguyn7">Nguyễn</div> */}
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
                <div className="mobiletn-parent5">
                  <div
                    className={isFocusTen ? "mobilevirtuoso7" : "mobilenguyn7"}
                  >
                    Tên *
                  </div>
                  <div className="mobilevn-a-wrapper5">
                    {/* <div className="mobilenguyn7">Văn A</div> */}
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
              <div className="mobile-frame-parent262">
                <div className="mobileh-parent5">
                  <div
                    className={
                      isFocusEmail ? "mobilevirtuoso7" : "mobilenguyn7"
                    }
                  >
                    Email *
                  </div>
                  <div className="mobilevn-a-wrapper5">
                    {/* <div className="mobilenguyn7">a.nv123@gmail.com</div> */}
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
                <div className="mobileh-parent5">
                  <div
                    className={
                      isFocusHocLuc ? "mobilevirtuoso7" : "mobilenguyn7"
                    }
                  >
                    Học lực *
                  </div>
                  <div className="mobilevn-a-wrapper5">
                    {/* <div className="mobilenguyn7">Khá</div> */}
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
              <div className="mobile-frame-parent262">
                <div className="mobileh-parent5">
                  <div
                    className={
                      isFocusTinhCach ? "mobilevirtuoso7" : "mobilenguyn7"
                    }
                  >
                    Tính cách *
                  </div>
                  <div className="mobilevn-a-wrapper5">
                    {/* <div className="mobilenguyn7">ENFP-T</div> */}
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
                <div className="mobileh-parent5">
                  <div
                    className={
                      isFocusPassword ? "mobilevirtuoso7" : "mobilenguyn7"
                    }
                  >
                    Mật khẩu *
                  </div>
                  <div className="mobilevn-a-wrapper5">
                    {/* <div className="mobilenguyn7">abcdef</div> */}
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
          <div className="mobile-frame-parent264">
            <div
              onClick={() => {
                setEditUser(null);
              }}
              className="mobilehu-b-wrapper9"
            >
              <div className="mobilevirtuoso7">Huỷ bỏ</div>
            </div>
            <div
              onClick={() => {
                updateUserInfo();
              }}
              className="mobilecp-nht-wrapper9"
            >
              <div className="mobilevirtuoso7">Cập nhật</div>
            </div>
            <div
              onClick={() => {
                deleteUser();
              }}
              className="mobilexo-parent5"
            >
              <div className="mobilevirtuoso7">Xoá</div>
              <img
                className="mobilemobileiconoutlinedappl3"
                alt=""
                src="/mobileiconoutlinedapplicationdelete1.svg"
              />
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
      {isShowModalUpdateSuccess && (
        <ModalUpdateSuccess
          setIsShowModalUpdateSuccess={setIsShowModalUpdateSuccess}
        />
      )}
    </div>
  );
};

const ModalUpdateSuccess = ({ setIsShowModalUpdateSuccess }) => {
  return (
    <div className="mobileframe-4273196361">
      <div className="frame-parent218">
        <div className="mobilevuesaxlineartick-circl-group">
          <img
            className="mobilevuesaxlineartick-circl-icon1"
            alt=""
            src="/mobilevuesaxlineartickcircle1.svg"
          />
          <div className="mobilevirtuoso4">Thông báo</div>
          <div className="mobilebn-mun-cp-container1">
            <span className="mobilebn-mun-cp-container2">
              <span className="bn-mun-cp1">{`Cập nhật thông tin thành công`}</span>
              {/* <span className="user13">@User1</span>
                  <span className="bn-mun-cp1">?</span> */}
            </span>
          </div>
        </div>
        <div
          onClick={() => {
            setIsShowModalUpdateSuccess(false);
          }}
          className="frame-wrapper37"
        >
          <div className="mobileok-container">
            <div className="mobilevirtuoso4">OK</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const QuanLyUserMobile = () => {
  const [listUser, setListUser] = useState([]);
  const [page, setPage] = useState(1);
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    getListUser();
  }, []);
  useEffect(() => {
    getListUser();
  }, [editUser]);

  const getListUser = async () => {
    axios
      .get(`${apiUrl}/list_user`)
      .then((res) => {
        let listActiveUser = res.data.data?.filter((item) => item.status === 1);
        setListUser(listActiveUser);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return editUser ? (
    <EditUserMobile
      setEditUser={setEditUser}
      editUser={{
        ...editUser,
        ho: editUser?.name?.split(" ")[0],
        ten: editUser?.name.replace(editUser?.name?.split(" ")[0], ""),
      }}
    />
  ) : (
    <ListUser
      listUser={listUser}
      page={page}
      setPage={setPage}
      setEditUser={setEditUser}
    />
  );
};

export default QuanLyUserMobile;
