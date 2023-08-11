import axios from "axios";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { apiUrl } from "../../constants/api";
import { styles } from "../../pages/TrangCh1";
import Select, { components } from "react-select";

const DropdownIndicator = (props) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <FontAwesomeIcon
          icon={props.selectProps.menuIsOpen ? faCaretUp : faCaretDown}
          style={{ color: "#271E4A" }}
        />
      </components.DropdownIndicator>
    )
  );
};

export const QLNV = () => {
  const [listNguyenVong, setListNguyenVong] = useState([]);
  const [listNguyenVongSelected, setListNguyenVongSelected] = useState([]);
  const [page, setPage] = useState(1);
  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [nguyenVongDelete, setNguyenVongDelete] = useState(null);
  const [searchContent, setSearchContent] = useState("");
  const [listSearch, setListSearch] = useState([]);
  const [listUniversity, setListUniversity] = useState([]);
  const [curUniversity, setCurUniversity] = useState(null);
  const [curMajor, setCurMajor] = useState(null);

  useEffect(() => {
    getListNguyenVong();
    fetchData();
  }, []);

  useEffect(() => {
    if (curUniversity) fetchListMajor(curUniversity?.inputValue.value);
  }, [curUniversity]);

  useEffect(() => {
    if (curMajor) fetchListBlock(curMajor?.inputValue.value);
  }, [curMajor]);

  const fetchListMajor = async (universityId) => {
    const result = await axios(`${apiUrl}/major/${universityId}`);
    let index = curUniversity.index;
    let listNguyenVongMap = [...listNguyenVong];
    listNguyenVongMap[index].listMajor = result.data.data;
    console.log("listNguyenVongMap: ", listNguyenVongMap);
    setListNguyenVong([...listNguyenVongMap]);
  };
  const fetchListBlock = async (majorId) => {
    const result = await axios(`${apiUrl}/block/${majorId}`);
    let index = curMajor.index;
    let listNguyenVongMap = [...listNguyenVong];
    listNguyenVongMap[index].listBlock =
      result.data.data[0]?.id_type.split(",");
    console.log("listNguyenVongMap: ", listNguyenVongMap);
    setListNguyenVong([...listNguyenVongMap]);
  };

  const fetchData = async () => {
    const result = await axios(`${apiUrl}/university`);
    setListUniversity(result.data.data);
  };

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
      let listNguyenVongRes = res.data.data;
      let listNguyenVongMap = listNguyenVongRes.map((item) => {
        return {
          ...item,
          isEditing: false,
          listMajor: [],
          listBlock: [],
        };
      });
      let listNguyenVongSearch = listNguyenVongRes.map((item) => {
        return {
          ...item,
          isEditing: false,
          listMajor: [],
          listBlock: [],
        };
      });
      setListNguyenVong([...listNguyenVongMap]);
      setListSearch(listNguyenVongSearch);
    });
  };

  useEffect(() => {
    console.log("changeeeeeeeeeeee listSearch");
  }, [listSearch]);

  const updateNguyenVong = (item) => {
    console.log("item: ", item);
    let body = {
      id: item.id,
      aspiration_input: {
        university: item.university?.label || item.university,
        major: item.major?.label || item.major,
        block: item.block?.label || item.block,
        isLike: item.isLike?.value || item.isLike,
        id_major: item.major?.id_major,
      },
    };
    axios.post(`${apiUrl}/update_aspiration_input`, body).then((res) => {
      getListNguyenVong();
    });
  };

  return (
    // <div className="frame-parent1172">
    <div className="frame-parent1173">
      <div className="frame-parent1174">
        <div className="danh-sch-nguyn-vng-parent4">
          <div className="danh-sch-nguyn20_title">Danh sách nguyện vọng</div>
          <div className="iconoutlinedapplicationbell-wrapper42">
            <img
              className="iconoutlinedapplicationbell44"
              alt=""
              src="./iconoutlinedapplicationbell1.svg"
            />
          </div>
        </div>
        <div className="frame-parent1175">
          <div className="frame-parent1176">
            <div className="frame-parent1177">
              <div className="id-user-parent9">
                <div className="id-user11">#ID User</div>
                <div className="tn-user10">Tên User</div>
              </div>
              <div className="tn-trng-i12">Tên trường Đại học</div>
              <div className="tn-ngnh77">Tên ngành</div>
              <div className="khi-thi75">Khối thi</div>
              <div className="khi-thi75">Sở thích</div>
              <div style={{ width: "120px" }} className="khi-thi75">
                Hành động
              </div>
            </div>
            <div className="vuesaxlinearsearch-normal-parent13">
              <img
                className="vuesaxlinearsearch-normal-icon17"
                alt=""
                src="./vuesaxlinearsearchnormal.svg"
              />
              {/* <i className="tm-kim16">Tìm kiếm...</i> */}
              <input
                className="tm-kim16"
                style={{
                  border: "none",
                  width: "100%",
                  outline: "none",
                  backgroundColor: "#fff",
                  boxShadow: "none",
                  fontSize: "14px",
                }}
                placeholder="Tìm kiếm..."
                value={searchContent}
                onChange={(e) => {
                  setSearchContent(e.target.value);
                  setListNguyenVong(
                    listSearch.filter((item) => {
                      let university =
                        item.university?.label || item.university;
                      return (
                        item.name
                          .toLowerCase()
                          .includes(e.target.value.toLowerCase()) ||
                        university
                          .toLowerCase()
                          .includes(e.target.value.toLowerCase()) ||
                        item.major
                          .toLowerCase()
                          .includes(e.target.value.toLowerCase()) ||
                        item.block
                          .toLowerCase()
                          .includes(e.target.value.toLowerCase()) ||
                        item.isLike
                          .toLowerCase()
                          .includes(e.target.value.toLowerCase())
                      );
                    })
                  );
                }}
              ></input>
            </div>
            <div className="frame-parent1178">
              <div className="hng-c-chn-parent13">
                <div className="hng-c-chn15">
                  *{listNguyenVongSelected.length} hàng được chọn
                </div>
                <div
                  onClick={() => {
                    if (listNguyenVongSelected.length > 0) {
                      toggleModalDelete();
                    }
                  }}
                  style={{ ...styles.button, width: "120px" }}
                  className="xo-parent8"
                >
                  <div className="xo13">Xoá</div>
                  <img
                    className="iconoutlinedapplicationdele10"
                    alt=""
                    src="./iconoutlinedapplicationdelete.svg"
                  />
                </div>
              </div>
              <div className="frame-parent1179">
                {listNguyenVong
                  .slice((page - 1) * 10, page * 10)
                  .map((item, index) => {
                    return (
                      <div key={index} className="frame-parent1180">
                        <div className="checkmark-square-parent135">
                          <img
                            onClick={() => {
                              if (listNguyenVongSelected.includes(item.id)) {
                                setListNguyenVongSelected(
                                  listNguyenVongSelected.filter(
                                    (i) => i !== item.id
                                  )
                                );
                              } else {
                                setListNguyenVongSelected([
                                  ...listNguyenVongSelected,
                                  item.id,
                                ]);
                              }
                            }}
                            style={styles.button}
                            className="checkmark-square-icon137"
                            alt=""
                            src={
                              listNguyenVongSelected.includes(item.id)
                                ? "./checkmark-square2.svg"
                                : "./checkmark-square11.svg"
                            }
                          />
                          <div className="div265">
                            {" "}
                            #{(page - 1) * 10 + index + 1}
                          </div>
                          <div className="rectangle-parent402">
                            <img
                              style={{
                                width: 50,
                                height: 50,
                                borderRadius: "50%",
                              }}
                              className="frame-child636"
                              alt=""
                              src={item?.image || "./rectangle-483@2x.png"}
                            />
                            <div className="nguyn-vn-a146">
                              {item?.name || ""}
                            </div>
                          </div>
                        </div>
                        {item?.isEditing ? (
                          <div>
                            <Select
                              // className="select-react"
                              // defaultValue={4}
                              value={item.university}
                              onChange={(inputValue) => {
                                setCurUniversity({ index, inputValue });
                                let list = [...listNguyenVong];
                                list[index].university = inputValue;
                                setListNguyenVong(list);
                              }}
                              // onChange={(inputValue) => {
                              //   onChangePersonality(inputValue);
                              // }}
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
                                <div className="select-placeholder-text">
                                  VD: Học viện Ngân hàng
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

                                  width: "220px",
                                  height: "50px",
                                  backgroundColor: "#FFFFFF",

                                  border: "1px solid #271E4A",
                                  boxShadow: "0 !important",
                                  "&:hover": {
                                    border: "1px solid #271E4A !important",
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
                                  fontSize: "14px",
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
                                  fontWeight: "400",
                                }),
                              }}
                            />
                          </div>
                        ) : (
                          <div className="trng-i-hc64">
                            {item?.university?.label || item?.university}
                          </div>
                        )}
                        {item?.isEditing ? (
                          <div>
                            <Select
                              // className="select-react"
                              // defaultValue={4}
                              value={item.major}
                              onChange={(inputValue) => {
                                setCurMajor({ index, inputValue });
                                let list = [...listNguyenVong];
                                list[index].major = inputValue;
                                setListNguyenVong(list);
                              }}
                              // onChange={(inputValue) => {
                              //   onChangePersonality(inputValue);
                              // }}
                              options={item?.listMajor.map((item) => ({
                                value: item.id_major,
                                label: item.block,
                                id_major: item.major,
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

                                  width: "220px",
                                  height: "50px",
                                  backgroundColor: "#FFFFFF",

                                  border: "1px solid #271E4A",
                                  boxShadow: "0 !important",
                                  "&:hover": {
                                    border: "1px solid #271E4A !important",
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
                                  fontSize: "14px",
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
                                  fontWeight: "400",
                                }),
                              }}
                            />
                          </div>
                        ) : (
                          <div className="tn-ngnh77">
                            {" "}
                            {item?.major?.label || item?.major}
                          </div>
                        )}
                        {item?.isEditing ? (
                          <div>
                            <Select
                              // className="select-react"
                              // defaultValue={4}
                              value={item?.block}
                              onChange={(inputValue) => {
                                let list = [...listNguyenVong];
                                list[index].block = inputValue;
                                setListNguyenVong(list);
                              }}
                              // onChange={(inputValue) => {
                              //   onChangePersonality(inputValue);
                              // }}
                              options={item?.listBlock.map((item) => ({
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
                                  VD: A00
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

                                  width: "100px",
                                  height: "50px",
                                  backgroundColor: "#FFFFFF",

                                  border: "1px solid #271E4A",
                                  boxShadow: "0 !important",
                                  "&:hover": {
                                    border: "1px solid #271E4A !important",
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
                                  fontSize: "14px",
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
                                  fontWeight: "400",
                                }),
                              }}
                            />
                          </div>
                        ) : (
                          <div className="khi-thi75">
                            {" "}
                            {item?.block?.label || item?.block}
                          </div>
                        )}
                        {item?.isEditing ? (
                          <div>
                            <Select
                              // className="select-react"
                              // defaultValue={4}
                              value={item?.isLike}
                              onChange={(inputValue) => {
                                let list = [...listNguyenVong];
                                list[index].isLike = inputValue;
                                setListNguyenVong(list);
                              }}
                              // onChange={(inputValue) => {
                              //   onChangePersonality(inputValue);
                              // }}
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
                                <div className="select-placeholder-text">
                                  VD: Rất thích
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

                                  width: "100px",
                                  height: "50px",
                                  backgroundColor: "#FFFFFF",

                                  border: "1px solid #271E4A",
                                  boxShadow: "0 !important",
                                  "&:hover": {
                                    border: "1px solid #271E4A !important",
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
                                  fontSize: "14px",
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
                                  fontWeight: "400",
                                }),
                              }}
                            />
                          </div>
                        ) : (
                          <div className="khi-thi75">
                            {item?.isLike?.label || item?.isLike}
                          </div>
                        )}
                        <div
                          style={{
                            justifyContent: "space-around",
                            width: "120px",
                          }}
                          className="frame-wrapper323"
                        >
                          <div
                            onClick={() => {
                              let list = [...listNguyenVong];
                              list[index].isEditing = false;
                              setListNguyenVong(list);
                              updateNguyenVong(item);
                            }}
                            style={{
                              ...styles.button,
                              visibility: !item?.isEditing
                                ? "hidden"
                                : "visible",
                            }}
                            className="iconoutlinededitordelete-wrapper135"
                          >
                            <img
                              className="iconoutlinededitordelete137"
                              alt=""
                              src="./iconoutlinedsuggestedcheck.svg"
                            />
                          </div>
                          {!item?.isEditing ? (
                            <div
                              onClick={() => {
                                let listMap = listSearch.map(
                                  (item1, index1) => {
                                    if (index1 === index) {
                                      return {
                                        ...item1,
                                        isEditing: true,
                                      };
                                    } else {
                                      return {
                                        ...item1,
                                        isEditing: false,
                                      };
                                    }
                                  }
                                );
                                console.log("litSearchhhhh", listSearch);
                                setListNguyenVong(listMap);
                              }}
                              style={styles.button}
                              className="iconoutlinededitordelete-wrapper135"
                            >
                              <img
                                className="iconoutlinededitordelete137"
                                alt=""
                                src="./edit.svg"
                              />
                            </div>
                          ) : (
                            <div
                              onClick={() => {
                                let list = [...listNguyenVong];
                                list[index].isEditing = false;
                                console.log("litSearch--------", listSearch);
                                let listSearchTemp = listSearch.map((item) => {
                                  return {
                                    ...item,
                                  };
                                });
                                setListNguyenVong(listSearchTemp);
                              }}
                              style={styles.button}
                              className="iconoutlinededitordelete-wrapper135"
                            >
                              <img
                                className="iconoutlinededitordelete137"
                                alt=""
                                src="./iconoutlinedsuggestedclose.svg"
                              />
                            </div>
                          )}
                          <div
                            onClick={() => {
                              setNguyenVongDelete(item);
                              toggleModalDelete();
                            }}
                            style={styles.button}
                            className="iconoutlinededitordelete-wrapper135"
                          >
                            <img
                              className="iconoutlinededitordelete137"
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
          <div className="frame-parent1188">
            <div
              onClick={() => {
                if (page > 1) {
                  setPage(page - 1);
                  //scroll to top
                  window.scrollTo(0, 0);
                }
              }}
              style={styles.button}
              className={
                page === 1
                  ? "vuesaxlineararrow-left-parent14"
                  : "tip-tc-parent23"
              }
              //  className="vuesaxlineararrow-left-parent14"
            >
              <img
                className="vuesaxlineararrow-left-icon16"
                alt=""
                src="./vuesaxlineararrowleft2.svg"
              />
              <div className="hng-c-chn15">Quay lại</div>
            </div>
            <div className="trang-1-trn16">
              Trang {page} trên {Math.ceil(listNguyenVong.length / 10)}
            </div>
            <div
              onClick={() => {
                if (page < Math.ceil(listNguyenVong.length / 10)) {
                  setPage(page + 1);
                  //scroll to top
                  window.scrollTo(0, 0);
                }
              }}
              style={styles.button}
              className={
                page >= listNguyenVong.length / 10
                  ? "vuesaxlineararrow-left-parent14"
                  : "tip-tc-parent23"
              }
              // className="tip-tc-parent23"
            >
              <div className="hng-c-chn15">Tiếp tục</div>
              <img
                className="vuesaxlineararrow-left-icon16"
                alt=""
                src="./vuesaxlineararrowright4.svg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="cp-nht-wrapper1">
        <div className="danh-sch-nguyn20">Cập nhật</div>
      </div> */}
      {isShowModalDelete && (
        <ModalDelete
          toggleModalDelete={toggleModalDelete}
          deleteNguyenVong={deleteNguyenVong}
        />
      )}
    </div>
    // </div>
  );
};

const ModalDelete = ({ toggleModalDelete, deleteNguyenVong }) => {
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
                deleteNguyenVong();
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
