import axios from "axios";
import "./QuanLyNguyenVongMobile.css";
import { apiUrl } from "../../constants/api";
import { useEffect, useRef, useState } from "react";
import { groupBy, set } from "lodash";
import "./mobile-mobile-mobile-quan-ly-nguyen.css";
import Select, { components } from "react-select";
import "./mobile-mobile-mobile-modal-xoa-nguy.css";
import "./mobile-mobile-mobile-modal-update-n.css";
const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <div className="icon-glypharrow-down-wrapper20">
        <img
          className="icon-glypharrow-down23"
          alt=""
          src="/icon-glypharrow-down5.svg"
        />
      </div>
    </components.DropdownIndicator>
  );
};
const ListNguyenVongMobile = ({ setUserPicked }) => {
  const [listNguyenVong, setListNguyenVong] = useState([]);
  const [listNguyenVongSelected, setListNguyenVongSelected] = useState([]);
  const [page, setPage] = useState(1);
  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [nguyenVongDelete, setNguyenVongDelete] = useState(null);
  const [searchContent, setSearchContent] = useState("");
  const [listSearch, setListSearch] = useState([]);
  console.log("listNguyenVong: ", listNguyenVong);

  useEffect(() => {
    getListNguyenVong();
  }, []);

  const toggleModalDelete = () => {
    if (isShowModalDelete) {
      setNguyenVongDelete(null);
    }
    setIsShowModalDelete(!isShowModalDelete);
  };

  const deleteNguyenVong = () => {
    if (!!nguyenVongDelete) {
      axios
        .post(`${apiUrl}/delete_nguyen_vong`, { id: [nguyenVongDelete.id] })
        .then((res) => {
          getListNguyenVong();
          toggleModalDelete();
        })
        .catch((err) => {
          console.log("err: ", err);
          toggleModalDelete();
        });
    } else {
      if (listNguyenVongSelected.length > 0) {
        axios
          .post(`${apiUrl}/delete_nguyen_vong`, {
            id: listNguyenVongSelected,
          })
          .then((res) => {
            getListNguyenVong();
            toggleModalDelete();
          })
          .catch((err) => {
            console.log("err: ", err);
            toggleModalDelete();
          });
      }
    }
  };

  const getListNguyenVong = () => {
    axios.get(`${apiUrl}/list_nguyen_vong`).then((res) => {
      let listNguyenVong = res.data.data;
      let listNguyenVongGroup = Object.values(
        groupBy(listNguyenVong, "id_user")
      ).map((item, index) => {
        return {
          ...item[0],
          listNguyenVong: item.map((item2) => {
            return {
              ...item2,
            };
          }),
        };
      });
      console.log("listNguyenVongGroup: ", listNguyenVongGroup);
      setListNguyenVong(listNguyenVongGroup);
      setListSearch(listNguyenVong);
    });
  };
  return (
    <div className="iphone-8-113">
      <div className="mobileframe-4273196654">
        <div className="mobile-frame-parent171">
          <div className="mobile-frame-parent172">
            <div className="mobile-parent2">
              <div className="mobile17">#</div>
              <div className="mobiletn-user3">Tên User</div>
            </div>
            {/* <div className="mobileph-duyt2">Phê duyệt</div> */}
          </div>
          <i className="mobileycpd-yu-cu4">*YCPD: Yêu cầu phê duyệt</i>
        </div>
        <div className="mobile-frame-parent173">
          {listNguyenVong
            .slice((page - 1) * 10, page * 10)
            .map((item, index) => {
              return (
                <div
                  onClick={() => {
                    setUserPicked(item);
                    //scroll to top
                    window.scrollTo(0, 0);
                  }}
                  key={index}
                  className="mobile-frame-parent174"
                >
                  <div className="mobile1-parent2">
                    <div className="mobile18">
                      #{(page - 1) * 10 + index + 1}
                    </div>
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
                  {/* <div className="mobile-6">--</div> */}
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
              if (page < Math.ceil(listNguyenVong.length / 10)) {
                setPage(page + 1);
                //scroll to top
                window.scrollTo(0, 0);
              }
            }}
            className={
              page >= listNguyenVong.length / 10
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

const EditListNguyenVongMobile = ({ userPicked, setUserPicked }) => {
  const [listAspirationOrigin, setListAspirationOrigin] = useState(
    userPicked?.listNguyenVong || []
  );
  const [listAspiration, setListAspiration] = useState(
    userPicked?.listNguyenVong || []
  );
  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [isShowModalUpdate, setIsShowModalUpdate] = useState(false);
  console.log("listAspiration: ", listAspiration);

  const addAspiration = () => {
    setListAspiration([
      ...listAspiration,
      {
        university: "",
        major: "",
        block: "",
        isLike: "",
        listMajor: [],
        listBlock: [],
      },
    ]);
  };
  const removeAspiration = (index) => {
    setListAspiration(listAspiration.filter((item, i) => i !== index));
  };
  const updateAspiration = (index, key, value) => {
    const newList = [...listAspiration];
    newList[index][key] = value;
    setListAspiration(newList);
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeAcademic = (inputString) => {
    setAcademic(inputString);
  };
  const onChangePersonality = (inputString) => {
    setPersonality(inputString);
  };

  const [listUniversity, setListUniversity] = useState([]);
  const [curUniversity, setCurUniversity] = useState(null);
  const [curMajor, setCurMajor] = useState(null);
  const prevListAspirationRef = useRef();

  const [listMajor, setListMajor] = useState([]);
  useEffect(() => {
    //scroll to bottom smooth
    if (
      !!prevListAspirationRef.current &&
      listAspiration.length > prevListAspirationRef.current.length
    )
      window.scrollTo({
        top: 10 + (listAspiration.length - 1) * 330,
        left: 0,
        behavior: "smooth",
      });
    prevListAspirationRef.current = listAspiration;
  }, [listAspiration]);

  useEffect(() => {
    fetchData();
    // fetchListMajor(-1);
  }, []);
  const fetchData = async () => {
    const result = await axios(`${apiUrl}/university`);
    let listUniversityResponse = result.data.data;
    setListUniversity(listUniversityResponse);
    const listMajor = await axios(`${apiUrl}/major`);
    let listMajorResponse = listMajor.data.data;
    setListMajor(listMajorResponse);

    let newListAspiration = [...listAspiration];
    newListAspiration = newListAspiration.map((item, index) => {
      let university = listUniversityResponse.find(
        (i) => i.university === item?.university
      );
      let uniValue = {
        value: university?.id,
        label: university?.university,
      };
      let listMajorDropdown = listMajorResponse.filter(
        (i) => +i?.id_university === +university?.id
      );
      let major = listMajorResponse.find((i) => {
        return (
          +i?.id_university === +university?.id && i?.block === item?.major
        );
      });
      let majorValue = {
        value: major?.id_major,
        label: major?.block,
      };
      let blockValue = {
        id: item.block,
        label: item.block,
      };
      let listIsLike = [
        { value: 4, label: "Rất thích" },
        { value: 3, label: "Thích" },
        { value: 2, label: "Bình thường" },
        { value: 1, label: "Không thích" },
      ];
      let isLikeValue = listIsLike.find((i) => i.value === +item.isLike);
      return {
        ...item,
        university: uniValue,
        major: majorValue,
        block: blockValue,
        isLike: isLikeValue,
        listMajor: listMajorDropdown,
        listBlock: major?.id_type.split(","),
      };
    });
    console.log("newListAspiration: ", newListAspiration);
    setListAspiration(newListAspiration);
  };

  const fetchListMajor = async (universityId) => {
    const result = await axios(`${apiUrl}/major/${universityId}`);
    let index = curUniversity.index;
    updateAspiration(index, "university", curUniversity.inputValue);
    updateAspiration(index, "major", "");
    updateAspiration(index, "block", "");
    updateAspiration(index, "listMajor", result.data.data);
  };
  const fetchListBlock = async (majorId) => {
    const result = await axios(`${apiUrl}/block/${majorId}`);
    let index = curMajor.index;
    updateAspiration(index, "block", "");
    updateAspiration(
      index,
      "listBlock",
      result.data.data[0]?.id_type.split(",")
    );
  };

  useEffect(() => {
    if (curUniversity) fetchListMajor(curUniversity?.inputValue.value);
  }, [curUniversity]);

  useEffect(() => {
    if (curMajor) fetchListBlock(curMajor?.inputValue.value);
  }, [curMajor]);

  const deleteNguyenVong = () => {
    axios
      .post(`${apiUrl}/delete_nguyen_vong`, {
        id: listAspirationOrigin.map((item) => item.id),
      })
      .then((res) => {
        // getListNguyenVong();
        setUserPicked(null);
        // scroll to top
        window.scrollTo(0, 0);
        setIsShowModalDelete(false);
      })
      .catch((err) => {
        console.log("err: ", err);
        toggleModalDelete();
      });
  };

  const updateNguyenVong = () => {
    let user = userPicked?.id;
    console.log("userPicked: ", userPicked);
    let percentType1 = +userPicked?.percentType1;
    let percentType2 = +userPicked?.percentType2;
    let percentType3 = +userPicked?.percentType3;
    let percentType4 = +userPicked?.percentType4;
    let percentType5 = +userPicked?.percentType5;
    const body = {
      user: {
        ...userPicked,
        id: userPicked?.id_user,
      },
      info_person: {
        hovaten: userPicked?.name || "test",
        hocluc: userPicked?.academic || "Khá",
        tinhcach: userPicked?.personality || "ISTJ-T",
      },
      nv: listAspiration.map((item) => {
        return {
          uni: item?.university?.label || "Học viện Âm nhạc Quốc gia Việt Nam",
          major: item?.major?.label || "Âm nhạc học",
          block: item?.block?.label || "N",
          islike: item?.isLike?.label || "Rất thích",
        };
      }),
      percentType1,
      percentType2,
      percentType3,
      percentType4,
      percentType5,
    };
    axios
      .post(`${apiUrl}/predict`, {
        data: body,
      })
      .then((res) => {
        // setPersonality(res.data);
        setIsShowModalUpdate(false);
        setUserPicked(null);
        //scroll to top
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        alert("Có lỗi xảy ra, vui lòng thử lại sau");
        console.log("err: ", err);
      });
  };
  return (
    <div
      onClick={() => {
        if (isShowModalDelete) setIsShowModalDelete(false);
        if (isShowModalUpdate) setIsShowModalUpdate(false);
      }}
      className="iphone-8-110"
    >
      <div className="mobileframe-4273196383">
        <div className="mobilenguyn-vn-a25">
          {userPicked?.name || "Nguyễn Văn A"}
        </div>
        <div className="mobile-frame-parent144">
          <div className="mobiledanh-sch-nguyn-vng-frame">
            <div className="mobiledanh-sch-nguyn2">Danh sách nguyện vọng</div>
          </div>
          <div className="mobile-frame-parent145">
            {listAspiration?.map((item, index) => {
              return (
                <div key={index} className="mobile-frame-parent146">
                  <div className="mobilenguyn-vng-1-parent1">
                    <div className="mobilenguyn-vn-a25">
                      <span>Nguyện vọng</span>
                      <span className="span10">{` ${index + 1}  `}</span>
                      <span className="span11">*</span>
                    </div>
                    <div
                      onClick={() => {
                        removeAspiration(index);
                      }}
                      className="mobilexo7"
                    >
                      Xoá
                    </div>
                  </div>
                  <div className="mobile-frame-parent147">
                    <div className="mobile-frame-parent147">
                      <div className="mobiletn-trng-i4">Tên trường đại học</div>
                      <div>
                        {/* <div className="mobilebutton-text21">
                          Đại học Bách Khoa Hà Nội
                        </div> */}
                        <Select
                          // defaultValue={4}
                          value={item?.university}
                          onChange={(inputValue) => {
                            setCurUniversity({ index, inputValue });
                          }}
                          options={listUniversity.map((item) => ({
                            value: item.id,
                            label: item.university,
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
                            <div className="mobilenguyn7">
                              VD: Đại học Bách Khoa Hà Nội
                            </div>
                          }
                          components={{
                            IndicatorSeparator: () => null,
                            DropdownIndicator,
                          }}
                          isSearchable
                          styles={{
                            control: (styles) => ({
                              ...styles,

                              width: "310px",
                              height: "20px",
                              backgroundColor: "#FFFFFF",
                              border: "1px solid #d4d4d4",
                              borderRadius: "12px",
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
                    <div className="mobile-frame-parent147">
                      <div className="mobiletn-trng-i4">Tên trường ngành</div>
                      <div>
                        <div>
                          {/* <div className="mobilebutton-text21">
                          Đại học Bách Khoa Hà Nội
                        </div> */}
                          <Select
                            // defaultValue={4}
                            value={item.major}
                            onChange={(inputValue) => {
                              setCurMajor({ index, inputValue });
                              updateAspiration(index, "major", inputValue);
                            }}
                            options={item?.listMajor?.map((item) => ({
                              value: item.id_university,
                              label: item.block,
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
                              <div className="mobilenguyn7">
                                VD: Khoa học máy tính
                              </div>
                            }
                            components={{
                              IndicatorSeparator: () => null,
                              DropdownIndicator,
                            }}
                            isSearchable
                            styles={{
                              control: (styles) => ({
                                ...styles,

                                width: "310px",
                                height: "20px",
                                backgroundColor: "#FFFFFF",
                                border: "1px solid #d4d4d4",
                                borderRadius: "12px",
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
                                  cursor: isDisabled
                                    ? "not-allowed"
                                    : "default",
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
                    <div className="mobile-frame-parent147">
                      <div className="mobiletn-trng-i4">Khối thi</div>
                      <div>
                        <Select
                          // defaultValue={4}
                          value={item?.block}
                          onChange={(inputValue) => {
                            updateAspiration(index, "block", inputValue);
                          }}
                          options={item?.listBlock?.map((item) => {
                            return {
                              value: item,
                              label: item,
                            };
                          })}
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
                            <div className="mobilenguyn7">VD: A00</div>
                          }
                          components={{
                            IndicatorSeparator: () => null,
                            DropdownIndicator,
                          }}
                          isSearchable
                          styles={{
                            control: (styles) => ({
                              ...styles,

                              width: "310px",
                              height: "20px",
                              backgroundColor: "#FFFFFF",
                              border: "1px solid #d4d4d4",
                              borderRadius: "12px",
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
                    <div className="mobile-frame-parent147">
                      <div className="mobiletn-trng-i4">Sở thích</div>
                      <div>
                        <Select
                          // defaultValue={4}
                          value={item?.isLike}
                          onChange={(inputValue) => {
                            updateAspiration(index, "isLike", inputValue);
                          }}
                          options={[
                            { value: 4, label: "Rất thích" },
                            { value: 3, label: "Thích" },
                            { value: 2, label: "Bình thường" },
                            { value: 1, label: "Không thích" },
                          ]}
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
                            <div className="mobilenguyn7">VD: Rất thích</div>
                          }
                          components={{
                            IndicatorSeparator: () => null,
                            DropdownIndicator,
                          }}
                          isSearchable
                          styles={{
                            control: (styles) => ({
                              ...styles,

                              width: "310px",
                              height: "20px",
                              backgroundColor: "#FFFFFF",
                              border: "1px solid #d4d4d4",
                              borderRadius: "12px",
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
                </div>
              );
            })}
          </div>
          <div
            style={{ marginTop: "20px" }}
            onClick={addAspiration}
            className="iconoutlinedsuggestedplus-parent44"
          >
            <img
              className="iconoutlinedapplicationdele29"
              alt=""
              src="./iconoutlinedsuggestedplus.svg"
            />
            <div className="bng-nhp-thng">Thêm nguyện vọng</div>
          </div>
        </div>
        <div className="mobile-frame-parent150">
          <div
            onClick={() => {
              setUserPicked(null);
              //scroll to top
              window.scrollTo(0, 0);
            }}
            className="mobilehu-b-wrapper4"
          >
            <div className="mobilehu-b8">Huỷ bỏ</div>
          </div>
          <div
            onClick={() => {
              // updateNguyenVong();
              setIsShowModalUpdate(true);
              //scroll to top
              window.scrollTo(0, 0);
            }}
            className="mobilecp-nht-wrapper4"
          >
            <div className="mobilehu-b8">Cập nhật</div>
          </div>
          <div
            onClick={() => {
              // deleteNguyenVong();
              setIsShowModalDelete(true);
              // setUserPicked(null);
              //scroll to top
              window.scrollTo(0, 0);
            }}
            className="mobilexo-container"
          >
            <div className="mobilehu-b8">Xoá</div>
            <img
              className="mobileiconoutlinedapplicatio13"
              alt=""
              src="/mobileiconoutlinedapplicationdelete.svg"
            />
          </div>
        </div>
      </div>
      {isShowModalDelete && (
        <ModalDelete
          setIsShowModalDelete={setIsShowModalDelete}
          deleteNguyenVong={deleteNguyenVong}
        />
      )}
      {isShowModalUpdate && (
        <ModalUpdate
          setIsShowModalUpdate={setIsShowModalUpdate}
          updateNguyenVong={updateNguyenVong}
        />
      )}
    </div>
  );
};

const ModalDelete = ({ setIsShowModalDelete, deleteNguyenVong }) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="mobileframe-4273196382"
    >
      <div className="mobile-frame-parent142">
        <div className="mobilevuesaxlineardanger-container">
          <img
            className="mobilevuesaxlineardanger-icon2"
            alt=""
            src="/mobilevuesaxlineardanger2.svg"
          />
          <div className="mobilehu-b6">Thông báo</div>
          <div className="mobilebn-mun-xo-container">
            <span className="bn-mun-xo">{`Bạn muốn xoá nguyện vọng của `}</span>
            <span className="user11">@User1</span>
            <span className="bn-mun-xo">?</span>
          </div>
        </div>
        <div
          onClick={() => {
            deleteNguyenVong();
          }}
          className="frame-wrapper16"
        >
          <div className="mobilexo-wrapper">
            <div className="mobilehu-b6">Xoá</div>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          setIsShowModalDelete(false);
        }}
        className="mobilehu-b7"
      >
        Huỷ bỏ
      </div>
    </div>
  );
};

const ModalUpdate = ({ setIsShowModalUpdate, updateNguyenVong }) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="mobileframe-427319639"
    >
      <div className="frame-parent133">
        <div className="mobilevuesaxlineardanger-group">
          <img
            className="mobilevuesaxlineardanger-icon1"
            alt=""
            src="/mobilevuesaxlineardanger1.svg"
          />
          <div className="mobilehu-b4">Thông báo</div>
          <div className="mobilebn-mun-cp-container">
            <span className="bn-mun-cp">{`Bạn muốn cập nhật thông tin của `}</span>
            <span className="user1">@User1</span>
            <span className="bn-mun-cp">?</span>
          </div>
        </div>
        <div
          onClick={() => {
            updateNguyenVong();
          }}
          className="frame-wrapper15"
        >
          <div className="mobilecp-nht-wrapper2">
            <div className="mobilehu-b4">Cập nhật</div>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          setIsShowModalUpdate(false);
        }}
        className="mobilehu-b5"
      >
        Huỷ bỏ
      </div>
    </div>
  );
};

const QuanLyNguyenVongMobile = () => {
  const [userPicked, setUserPicked] = useState(null);

  return userPicked ? (
    <EditListNguyenVongMobile
      userPicked={userPicked}
      setUserPicked={setUserPicked}
    />
  ) : (
    <ListNguyenVongMobile setUserPicked={setUserPicked} />
  );
};

export default QuanLyNguyenVongMobile;
