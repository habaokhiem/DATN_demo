import axios from "axios";
import { useEffect, useState } from "react";
import { apiUrl } from "../../constants/api";
import { styles } from "../../pages/TrangCh1";
import { set } from "lodash";
import Select from "react-select";
import { makeUploadImage } from "../../utils/upload";
import { listAcademic } from "../../constants/listAcademic";
import { listPersonality } from "../../constants/listPersonaliy";
import { Encrypt } from "../../constants/utils";

export const QLND = () => {
  const [screen, setScreen] = useState("listUser");
  const [listUserSelected, setListUserSelected] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <>
      {screen === "listUser" && (
        <DanhSachUser
          setScreen={setScreen}
          listUserSelected={listUserSelected}
          setListUserSelected={setListUserSelected}
          setCurrentUser={setCurrentUser}
        />
      )}
      {screen === "editUser" && (
        <ChinhSuaThongTinUser
          setScreen={setScreen}
          screen="listUser"
          currentUser={{
            ...currentUser,
            ho: currentUser?.name?.split(" ")[0],
            ten: currentUser?.name.replace(
              currentUser?.name?.split(" ")[0],
              ""
            ),
          }}
        />
      )}
    </>
  );
};

const DanhSachUser = ({
  setScreen,
  listUserSelected,
  setListUserSelected,
  setCurrentUser,
}) => {
  const [listUser, setListUser] = useState([]);
  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [userDelete, setUserDelete] = useState(null);

  const [page, setPage] = useState(1);

  useEffect(() => {
    getListUser();
  }, []);

  const getListUser = () => {
    axios.get(`${apiUrl}/list_user`).then((res) => {
      let listActiveUser = res.data.data.filter((item) => item.status === 1);
      setListUser(listActiveUser);
    });
  };

  const toggleModalDelete = () => {
    if (isShowModalDelete) {
      setUserDelete(null);
    }
    setIsShowModalDelete(!isShowModalDelete);
  };

  const deleteUser = () => {
    if (!!userDelete) {
      axios
        .post(`${apiUrl}/delete_user`, { id: [userDelete.id] })
        .then((res) => {
          getListUser();
          toggleModalDelete();
        })
        .catch((err) => {
          console.log("err: ", err);
          toggleModalDelete();
        });
    } else {
      if (listUserSelected.length > 0) {
        axios
          .post(`${apiUrl}/delete_user`, {
            id: listUserSelected,
          })
          .then((res) => {
            getListUser();
            toggleModalDelete();
          })
          .catch((err) => {
            console.log("err: ", err);
            toggleModalDelete();
          });
      }
    }
  };
  return (
    <div className="frame-parent1007">
      <div className="danh-sch-user-parent1">
        {/* <div className="danh-sch-user3">Danh sách User</div> */}
        <div className="danh-sch-nguyn20_title">Danh sách User</div>
        <div className="iconoutlinedapplicationbell-wrapper35">
          <img
            className="iconoutlinedapplicationbell37"
            alt=""
            src="./iconoutlinedapplicationbell1.svg"
          />
        </div>
      </div>
      <div className="frame-parent1008">
        <div className="frame-parent1009">
          <div className="frame-parent1010">
            <div className="parent2">
              <div className="div145">#</div>
              <div className="tn-user3">Tên User</div>
            </div>
            <div className="email13">Email</div>
            <div className="trng-thi8">Trạng thái</div>
            <div className="ph-duyt-vai3">Phê duyệt vai trò</div>
            <div className="trng-thi8">Hành động</div>
          </div>
          <div className="frame-parent1011">
            <div className="hng-c-chn-parent6">
              <div className="hng-c-chn8">
                *{listUserSelected.length} hàng được chọn
              </div>
              <div
                onClick={() => {
                  if (listUserSelected.length > 0) {
                    toggleModalDelete();
                  }
                }}
                style={styles.button}
                className="xo-parent1"
              >
                <div className="xo5">Xoá</div>
                <img
                  className="iconoutlinedapplicationdele3"
                  alt=""
                  src="./iconoutlinedapplicationdelete.svg"
                />
              </div>
            </div>
            <div className="frame-parent1012">
              {listUser.slice((page - 1) * 10, page * 10).map((item, index) => {
                return (
                  <div key={index} className="frame-parent1013">
                    <div className="checkmark-square-parent73">
                      <img
                        onClick={() => {
                          if (listUserSelected.includes(item.id)) {
                            setListUserSelected(
                              listUserSelected.filter((i) => i !== item.id)
                            );
                          } else {
                            setListUserSelected([...listUserSelected, item.id]);
                          }
                        }}
                        style={styles.button}
                        className="checkmark-square-icon75"
                        alt=""
                        src={
                          listUserSelected.includes(item.id)
                            ? "./checkmark-square2.svg"
                            : "./checkmark-square11.svg"
                        }
                      />
                      <div className="div146">
                        #{(page - 1) * 10 + index + 1}
                      </div>
                      <div
                        onClick={() => {
                          setCurrentUser(item);
                          setScreen("editUser");
                        }}
                        style={styles.button}
                        className="rectangle-parent340"
                      >
                        <img
                          style={{ width: 50, height: 50, borderRadius: "50%" }}
                          className="frame-child574"
                          alt=""
                          src={item?.image || "./rectangle-483@2x.png"}
                        />
                        <div className="nguyn-vn-a84">{item?.name || ""}</div>
                      </div>
                    </div>
                    <div className="anv123gmailcom39">{item?.email || ""}</div>
                    {item?.online === 1 ? (
                      <div className="online-wrapper22">
                        <div className="hng-c-chn8">Online</div>
                      </div>
                    ) : (
                      <div className="offline-wrapper4">
                        <div className="hng-c-chn8">Offline</div>
                      </div>
                    )}

                    <div className="div147">
                      {item?.request_admin ? `Yêu cầu phê duyệt ` : "--"}
                    </div>
                    <div className="frame-wrapper266">
                      <div
                        onClick={() => {
                          setUserDelete(item);
                          toggleModalDelete();
                        }}
                        style={styles.button}
                        className="iconoutlinededitordelete-wrapper73"
                      >
                        <img
                          className="iconoutlinededitordelete75"
                          alt=""
                          src="./iconoutlinededitordelete.svg"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="frame-parent1023">
          <div
            onClick={() => {
              if (page > 1) {
                setPage(page - 1);
                //scroll to top
                window.scrollTo(0, 0);
              }
            }}
            style={styles.button}
            // className="vuesaxlineararrow-left-parent7"
            className={
              page === 1 ? "vuesaxlineararrow-left-parent7" : "tip-tc-parent16"
            }
          >
            <img
              className="vuesaxlineararrow-left-icon9"
              alt=""
              src="./vuesaxlineararrowleft2.svg"
            />
            <div className="hng-c-chn8">Quay lại</div>
          </div>
          <div className="email13">
            Trang {page} trên {Math.ceil(listUser.length / 10)}
          </div>
          <div
            onClick={() => {
              if (page < listUser.length / 10) {
                setPage(page + 1);
                //scroll to top
                window.scrollTo(0, 0);
              }
            }}
            style={styles.button}
            className={
              page >= listUser.length / 10
                ? "vuesaxlineararrow-left-parent7"
                : "tip-tc-parent16"
            }
          >
            <div className="hng-c-chn8">Tiếp tục</div>
            <img
              className="vuesaxlineararrow-left-icon9"
              alt=""
              src="./vuesaxlineararrowright3.svg"
            />
          </div>
        </div>
      </div>
      {isShowModalDelete && (
        <ModalDelete
          toggleModalDelete={toggleModalDelete}
          deleteUser={deleteUser}
        />
      )}
    </div>
  );
};

const ModalDelete = ({ toggleModalDelete, deleteUser }) => {
  return (
    <div className="frame-parent1003">
      <div className="frame-wrapper265">
        <div className="frame-parent1004">
          <div className="vuesaxlineardanger-parent2">
            <img
              className="vuesaxlineardanger-icon4"
              alt=""
              src="./vuesaxlineardanger1.svg"
            />
            <div className="danh-sch-user2">Thông báo</div>
            <div className="bn-c-chc1">Bạn có chắc chắn muốn xoá mục này?</div>
          </div>
          <div className="frame-parent1005">
            <div
              onClick={() => {
                deleteUser();
              }}
              style={styles.button}
              className="xo-frame"
            >
              <div className="danh-sch-user2">Xoá</div>
            </div>
            <div
              onClick={() => {
                toggleModalDelete();
              }}
              style={styles.button}
              className="hu-b-wrapper18"
            >
              <div className="hu-b21">Huỷ bỏ</div>
            </div>
          </div>
        </div>
      </div>
      <img
        onClick={() => {
          toggleModalDelete();
        }}
        style={styles.button}
        className="x-icon9"
        alt=""
        src="./x.svg"
      />
    </div>
  );
};

export const ChinhSuaThongTinUser = ({ currentUser, setScreen, screen }) => {
  console.log("currentUser: ", currentUser);
  const [permission, setPermission] = useState(currentUser?.permission || 0);
  const [ho, setHo] = useState(currentUser?.ho || "");
  const [ten, setTen] = useState(currentUser?.ten || "");
  const [email, setEmail] = useState(currentUser?.email || "");
  const [password, setPassword] = useState("");
  const [hocLuc, setHocLuc] = useState(
    { value: currentUser?.academic, label: currentUser?.academic } || ""
  );
  console.log("hocLuc: ", hocLuc);
  const [tinhCach, setTinhCach] = useState(
    { value: currentUser?.personality, label: currentUser?.personality } || ""
  );
  console.log("tinhCach: ", tinhCach);
  const [isFocusHo, setIsFocusHo] = useState(false);
  const [isFocusTen, setIsFocusTen] = useState(false);
  const [isFocusEmail, setIsFocusEmail] = useState(false);
  const [isFocusPassword, setIsFocusPassword] = useState(false);
  const [image, setImage] = useState(currentUser?.image || "");
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

  const onChangeRole = (role) => {
    axios
      .post(`${apiUrl}/update_role`, {
        id: currentUser?.id,
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
      id: currentUser?.id,
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
        // setScreen("listUser");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="frame-parent905">
      <div className="chnh-sa-thng-tin-user-parent5">
        <div className="danh-sch-nguyn20_title">Chỉnh sửa thông tin User</div>
        <div className="iconoutlinedapplicationbell-wrapper31">
          <img
            className="iconoutlinedapplicationbell33"
            alt=""
            src="./iconoutlinedapplicationbell1.svg"
          />
        </div>
      </div>
      <div className="frame-wrapper233">
        <div className="frame-parent906">
          <div className="chnh-sa-thng-tin-user-parent5">
            <div className="nguyn-vn-a-parent5">
              <div className="nguyn-vn-a52">{currentUser?.name}</div>
              {permission === 0 ? (
                <div
                  onClick={() => {
                    setIsShowModalChangeRole(!isShowModalChangeRole);
                  }}
                  style={styles.button}
                  className="frame-wrapper234"
                >
                  <div className="frame-wrapper235">
                    <div className="hc-sinh-wrapper5">
                      <div className="hc-sinh7">Học sinh</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => {
                    setIsShowModalDeleteRole(!isShowModalDeleteRole);
                  }}
                  style={styles.button}
                  className="frame-wrapper240"
                >
                  <div className="frame-wrapper241">
                    <div className="hc-sinh-wrapper6">
                      <div className="hc-sinh8">Học sinh</div>
                    </div>
                  </div>
                </div>
              )}
              {permission === 1 ? (
                <div className="frame-wrapper236">
                  <div
                    onClick={() => {
                      setIsShowModalDeleteRole(!isShowModalDeleteRole);
                    }}
                    style={styles.button}
                    className="frame-wrapper235"
                  >
                    <div className="hc-sinh-wrapper5">
                      <div className="hc-sinh7">Admin</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => {
                    setIsShowModalChangeRole(!isShowModalChangeRole);
                  }}
                  style={styles.button}
                  className="frame-wrapper192"
                >
                  <div className="frame-wrapper191">
                    <div className="hc-sinh-container">
                      <div className="hc-sinh1">Admin</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* <div className="frame-parent908">
              <div className="ios-chevron-right-parent5">
                <img
                  className="ios-chevron-right14"
                  alt=""
                  src="./ios-chevron-right.svg"
                />
                <div className="quay-li13">Quay lại</div>
              </div>
              <div className="div95">2 / 20</div>
              <div className="tip-tc-parent11">
                <div className="quay-li13">Tiếp tục</div>
                <img
                  className="ios-chevron-right14"
                  alt=""
                  src="./ios-chevron-right1.svg"
                />
              </div>
            </div> */}
          </div>
          <div className="rectangle-parent308">
            <img
              className="frame-child542"
              alt=""
              src={image || "./rectangle-48@2x.png"}
            />
            <div className="frame-parent909">
              <div className="frame-parent910">
                <div className="frame-parent911">
                  <div className="h-parent5">
                    <div className={isFocusHo ? "chnh-sa-thng7" : "quay-li13"}>
                      Họ *
                    </div>
                    <div className="nguyn-wrapper5">
                      {/* <div className="quay-li13">Nguyễn</div> */}
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
                  <div className="tn-parent5">
                    <div className={isFocusTen ? "chnh-sa-thng7" : "quay-li13"}>
                      Tên *
                    </div>
                    <div className="vn-a-wrapper5">
                      {/* <div className="quay-li13">Văn A</div> */}
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
                <div className="frame-parent912">
                  <div className="h-parent5">
                    <div
                      className={isFocusEmail ? "chnh-sa-thng7" : "quay-li13"}
                    >
                      Email *
                    </div>
                    <div className="vn-a-wrapper5">
                      {/* <div className="quay-li13">a.nv123@gmail.com</div> */}
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
                  <div className="h-parent5">
                    <div
                      className={isFocusHocLuc ? "chnh-sa-thng7" : "quay-li13"}
                    >
                      Học lực *
                    </div>
                    <div className="vn-a-wrapper5">
                      {/* <div className="quay-li13">Khá</div> */}
                      <Select
                        className="select-react"
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
                        placeholder={
                          <div className="select-placeholder-text">
                            VD: Giỏi
                          </div>
                        }
                        components={{
                          IndicatorSeparator: () => null,
                          // DropdownIndicator,
                        }}
                        isSearchable
                        styles={{
                          control: (styles) => ({
                            ...styles,

                            width: "532px",
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
                            fontSize: "20px",
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
                <div className="frame-parent912">
                  <div className="h-parent5">
                    <div
                      className={
                        isFocusTinhCach ? "chnh-sa-thng7" : "quay-li13"
                      }
                    >
                      Tính cách *
                    </div>
                    <div className="vn-a-wrapper5">
                      {/* <div className="quay-li13">ENFP-T</div> */}
                      <Select
                        className="select-react"
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
                          <div className="select-placeholder-text">
                            VD: ENFP-T
                          </div>
                        }
                        components={{
                          IndicatorSeparator: () => null,
                          //   DropdownIndicator,
                        }}
                        isSearchable
                        styles={{
                          control: (styles) => ({
                            ...styles,

                            width: "532px",
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
                            fontSize: "20px",
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
                  <div className="ti-nh-parent5">
                    <div
                      className={isFocusImage ? "chnh-sa-thng7" : "quay-li13"}
                    >
                      Tải ảnh *
                    </div>
                    <div className="frame-wrapper238">
                      <div className="abcdefjpeg-parent5">
                        <div className="quay-li13">
                          {imageName || "abcdef.jpeg"}
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
                            setImageName(response?.original_filename);
                            setIsFocusImage(false);
                          }}
                        />
                        <label htmlFor="contained-button-file">
                          <div
                            style={styles.button}
                            className="browe-image-wrapper5"
                          >
                            <div className="quay-li13">Browe Image</div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-khu-parent5">
                <div
                  className={isFocusPassword ? "chnh-sa-thng7" : "quay-li13"}
                >
                  Mật khẩu *
                </div>
                <div className="vn-a-wrapper5">
                  {/* <div className="quay-li13">abcdef</div> */}
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
              <div className="frame-parent914">
                <div
                  onClick={() => {
                    setScreen(screen);
                  }}
                  style={styles.button}
                  className="hu-b-wrapper16"
                >
                  <div className="chnh-sa-thng7">Huỷ bỏ</div>
                </div>
                <div
                  onClick={() => {
                    updateUserInfo();
                  }}
                  style={styles.button}
                  className="xc-nhn-wrapper21"
                >
                  <div className="chnh-sa-thng7">Xác nhận</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isShowModalChangeRole && (
        <ModalChangeAdminRole
          onChangeRole={onChangeRole}
          name={currentUser?.name}
          setIsShowModalChangeRole={setIsShowModalChangeRole}
        />
      )}
      {isShowModalChangeRoleSuccess && (
        <ModalChangeRoleSuccess
          setIsShowModalChangeRoleSuccess={setIsShowModalChangeRoleSuccess}
          name={currentUser?.name}
        />
      )}
      {isShowModalDeleteRole && (
        <ModalDeleteAdminRole
          onChangeRole={onChangeRole}
          name={currentUser?.name}
          setIsShowModalDeleteRole={setIsShowModalDeleteRole}
        />
      )}
      {isShowModalDeleteRoleSuccess && (
        <ModalDeleteRoleSuccess
          setIsShowModalDeleteRoleSuccess={setIsShowModalDeleteRoleSuccess}
          name={currentUser?.name}
        />
      )}
      {isShowModalUpdateSuccess && (
        <ModalUpdateSuccess
          setIsShowModalUpdateSuccess={setIsShowModalUpdateSuccess}
          name={currentUser?.name}
          setScreen={setScreen}
          screen={screen}
        />
      )}
    </div>
  );
};

const ModalChangeAdminRole = ({
  onChangeRole,
  name,
  setIsShowModalChangeRole,
}) => {
  return (
    <div className="frame-parent870">
      <div className="frame-wrapper219">
        <div className="frame-parent871">
          <div className="vuesaxlineardanger-container">
            <img
              className="vuesaxlineardanger-icon2"
              alt=""
              src="./vuesaxlineardanger.svg"
            />
            <div className="chnh-sa-thng4">Thông báo</div>
            <div className="bn-mun-cp-container">
              <span className="bn-mun-cp-container1">
                <span className="bn-mun-cp">{`Bạn muốn cập nhật quyền Admin của `}</span>
                <span className="user122">{name}?</span>
              </span>
            </div>
          </div>
          <div className="frame-parent872">
            <div
              onClick={() => {
                onChangeRole(1);
              }}
              style={styles.button}
              className="xc-nhn-wrapper17"
            >
              <div className="chnh-sa-thng4">Xác nhận</div>
            </div>
            <div
              onClick={() => {
                setIsShowModalChangeRole(false);
              }}
              style={styles.button}
              className="hu-b-wrapper12"
            >
              <div className="hu-b15">Huỷ bỏ</div>
            </div>
          </div>
        </div>
      </div>
      <img
        onClick={() => {
          setIsShowModalChangeRole(false);
        }}
        style={styles.button}
        className="x-icon7"
        alt=""
        src="./x.svg"
      />
    </div>
  );
};

const ModalChangeRoleSuccess = ({ setIsShowModalChangeRoleSuccess, name }) => {
  return (
    <div className="frame-parent838">
      <div className="frame-wrapper203">
        <div className="frame-parent839">
          <div className="vuesaxlineartick-circle-container">
            <img
              className="vuesaxlineartick-circle-icon2"
              alt=""
              src="./vuesaxlineartickcircle1.svg"
            />
            <div className="chnh-sa-thng2">Thông báo</div>
            <div className="bn-cp-container">
              <span className="bn-cp-container1">
                <span className="bn-cp">{`Bạn đã cập nhật quyền Admin của `}</span>
                <span className="user120">{name}.</span>
              </span>
            </div>
          </div>
          <div className="frame-wrapper204">
            <div
              onClick={() => {
                setIsShowModalChangeRoleSuccess(false);
              }}
              style={styles.button}
              className="ok-frame"
            >
              <div className="chnh-sa-thng2">OK</div>
            </div>
          </div>
        </div>
      </div>
      <img
        onClick={() => {
          setIsShowModalChangeRoleSuccess(false);
        }}
        style={styles.button}
        className="x-icon5"
        alt=""
        src="./x.svg"
      />
    </div>
  );
};
const ModalUpdateSuccess = ({
  setScreen,
  setIsShowModalUpdateSuccess,
  name,
  screen
}) => {
  return (
    <div className="frame-parent838">
      <div className="frame-wrapper203">
        <div className="frame-parent839">
          <div className="vuesaxlineartick-circle-container">
            <img
              className="vuesaxlineartick-circle-icon2"
              alt=""
              src="./vuesaxlineartickcircle1.svg"
            />
            <div className="chnh-sa-thng2">Thông báo</div>
            <div className="bn-cp-container">
              <span className="bn-cp-container1">
                <span className="bn-cp">{`Bạn đã cập nhật thông tin của `}</span>
                <span className="user120">{name}.</span>
              </span>
            </div>
          </div>
          <div className="frame-wrapper204">
            <div
              onClick={() => {
                setIsShowModalUpdateSuccess(false);
                setScreen(screen);
              }}
              style={styles.button}
              className="ok-frame"
            >
              <div className="chnh-sa-thng2">OK</div>
            </div>
          </div>
        </div>
      </div>
      <img
        onClick={() => {
          setIsShowModalUpdateSuccess(false);
        }}
        style={styles.button}
        className="x-icon5"
        alt=""
        src="./x.svg"
      />
    </div>
  );
};

const ModalDeleteAdminRole = ({
  onChangeRole,
  name,
  setIsShowModalDeleteRole,
}) => {
  return (
    <div className="frame-parent887">
      <div className="frame-wrapper226">
        <div className="frame-parent888">
          <div className="vuesaxlineardanger-parent1">
            <img
              className="vuesaxlineardanger-icon3"
              alt=""
              src="./vuesaxlineardanger1.svg"
            />
            <div className="chnh-sa-thng5">Thông báo</div>
            <div className="bn-mun-tt-container">
              <span className="bn-mun-tt-container1">
                <span className="bn-mun-tt">{`Bạn muốn tắt quyền Admin của `}</span>
                <span className="user123">{name}?</span>
              </span>
            </div>
          </div>
          <div className="frame-parent889">
            <div
              onClick={() => {
                onChangeRole(0);
              }}
              style={styles.button}
              className="xc-nhn-wrapper19"
            >
              <div className="chnh-sa-thng5">Xác nhận</div>
            </div>
            <div
              onClick={() => {
                setIsShowModalDeleteRole(false);
              }}
              style={styles.button}
              className="hu-b-wrapper14"
            >
              <div className="hu-b17">Huỷ bỏ</div>
            </div>
          </div>
        </div>
      </div>
      <img
        onClick={() => {
          setIsShowModalDeleteRole(false);
        }}
        style={styles.button}
        className="x-icon8"
        alt=""
        src="./x.svg"
      />
    </div>
  );
};

const ModalDeleteRoleSuccess = ({ name, setIsShowModalDeleteRoleSuccess }) => {
  return (
    <div className="frame-parent854">
      <div className="frame-wrapper211">
        <div className="frame-parent855">
          <div className="vuesaxlineartick-circle-parent1">
            <img
              className="vuesaxlineartick-circle-icon3"
              alt=""
              src="./vuesaxlineartickcircle1.svg"
            />
            <div className="chnh-sa-thng3">Thông báo</div>
            <div className="bn-tt-container4">
              <span className="bn-tt-container5">
                <span className="bn-tt2">{`Bạn đã tắt quyền Admin của `}</span>
                <span className="user121">{name}.</span>
              </span>
            </div>
          </div>
          <div className="frame-wrapper212">
            <div
              onClick={() => {
                setIsShowModalDeleteRoleSuccess(false);
              }}
              style={styles.button}
              className="ok-wrapper1"
            >
              <div className="chnh-sa-thng3">OK</div>
            </div>
          </div>
        </div>
      </div>
      <img
        onClick={() => {
          setIsShowModalDeleteRoleSuccess(false);
        }}
        style={styles.button}
        className="x-icon6"
        alt=""
        src="./x.svg"
      />
    </div>
  );
};
