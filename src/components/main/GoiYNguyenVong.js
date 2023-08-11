import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Select, { components } from "react-select";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiUrl } from "../../constants/api";
import { listAcademic } from "../../constants/listAcademic";
import { listPersonality } from "../../constants/listPersonaliy";
import { styles } from "../../pages/TrangCh1";
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

export const GoiYNguyenVong = ({ setPage, setIsHide, user }) => {
  const [part, setPart] = useState(1);
  const [partMobile, setPartMobile] = useState(1);
  const [name, setName] = useState("");
  const [academic, setAcademic] = useState("");
  const [personality, setPersonality] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [listAspiration, setListAspiration] = useState([
    {
      university: "",
      major: "",
      block: "",
      isLike: "",
      listMajor: [],
      listBlock: [],
    },
    {
      university: "",
      major: "",
      block: "",
      isLike: "",
      listMajor: [],
      listBlock: [],
    },
  ]);

  const send = () => {
    axios
      .post(`${apiUrl}/survey/add`, {
        data: {
          name: name,
          academic: academic.value,
          personality: personality.value,
          listAspiration: listAspiration.map((item) => {
            return {
              university: item.university.label,
              major: item.major.label,
              block: item.block.label,
              isLike: item.isLike.value,
            };
          }),
        },
      })
      .then((res) => {
        toast.success(
          `Cảm ơn bạn đã điền hết cái mớ khảo sát này của mình nhé ❤️`,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
        setIsDone(true);
        setName("");
        setAcademic("");
        setPersonality("");
        setListAspiration([
          {
            university: "",
            major: "",
            block: "",
            isLike: "",
            listMajor: [],
            listBlock: [],
          },
          {
            university: "",
            major: "",
            block: "",
            isLike: "",
            listMajor: [],
            listBlock: [],
          },
        ]);
      });
  };
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
  useEffect(() => {
    //scroll to bottom smooth
    if (
      !!prevListAspirationRef.current &&
      listAspiration.length > prevListAspirationRef.current.length
    )
      window.scrollTo({
        top: 500 + listAspiration.length * 200,
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
    setListUniversity(result.data.data);
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
  return (
    <>
      <div className="frame-wrapper347">
        <div className="frame-wrapper348">
          <div className="frame-parent1604">
            <div className="gi-nguyn-vng-wrapper12">
              <div className="bng-nhp-thng">Gợi ý nguyện vọng</div>
            </div>
            <div className="iconoutlinedapplicationbell-wrapper53">
              <img
                className="vuesaxlinearhome-icon21"
                alt=""
                src="./iconoutlinedapplicationbell.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent1605">
        <div className="frame-parent1606">
          <div className="bng-nhp-thng-tin-parent">
            <div className="bng-nhp-thng">Bảng nhập thông tin</div>
            <div className="frame-parent1607">
              <div className="thuc-tnh-chung-parent10">
                <div className="thuc-tnh-chung12">Thuộc tính chung</div>
                <div className="frame-parent1608">
                  <div className="hc-lc-parent13">
                    <div className="tt-c29">Học lực</div>
                    <Select
                      className="select-react"
                      // defaultValue={4}
                      value={academic}
                      onChange={(inputValue) => {
                        onChangeAcademic(inputValue);
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
                        <div className="select-placeholder-text">VD: Giỏi</div>
                      }
                      components={{
                        IndicatorSeparator: () => null,
                        DropdownIndicator,
                      }}
                      isSearchable
                      styles={{
                        control: (styles) => ({
                          ...styles,

                          width: "532px",
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
                          fontSize: "20px",
                          fontWeight: "400",
                        }),
                      }}
                    />
                  </div>
                  <div className="frame-parent1610">
                    <div className="hc-lc-parent13">
                      <div className="tt-c29">Tính cách</div>
                      {/* <div className="frame-parent1609">
                            <div className="vd-gii-wrapper4">
                              <i className="thuc-tnh-chung12">VD: ENFP - T</i>
                            </div>
                            <img
                              className="iconfilleddirectionalcaret-84"
                              alt=""
                              src="./iconfilleddirectionalcaretdown.svg"
                            />
                          </div> */}
                      <Select
                        className="select-react"
                        // defaultValue={4}
                        value={personality}
                        onChange={(inputValue) => {
                          onChangePersonality(inputValue);
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
                          DropdownIndicator,
                        }}
                        isSearchable
                        styles={{
                          control: (styles) => ({
                            ...styles,

                            width: "532px",
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
                            fontSize: "20px",
                            fontWeight: "400",
                          }),
                        }}
                      />
                    </div>
                    <div className="nu-bn-cha-bit-tnh-cch-c-parent4">
                      <i className="tt-c29">
                        Nếu bạn chưa biết tính cách của bản thân, bạn có thể
                        truy cập vào{" "}
                        <a
                          onClick={() => {
                            setPage("kstc");
                            setIsHide(true);
                          }}
                          className="bng-nhp-thng"
                          target="_blank"
                          rel="noopener noreferrer"
                          // href="https://www.16personalities.com/free-personality-test"
                          style={{ color: "#271E4A", ...styles.button }}
                        >
                          Khảo sát tính cách.
                        </a>
                      </i>
                      {/* <i className="bng-nhp-thng">Khảo sát tính cách.</i> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-parent1612">
                <div className="thuc-tnh-danh-sch-nguyn-v-parent10">
                  <div className="thuc-tnh-chung12">
                    Thuộc tính danh sách nguyện vọng
                  </div>
                  <i className="c-th-chn12">
                    *Có thể chọn 1 hoặc nhiều thuộc tính
                  </i>
                </div>
                <div
                  style={{ paddingLeft: 10 }}
                  className="thuc-tnh-chung-parent10"
                >
                  {listAspiration.map((item, index) => {
                    return (
                      <div
                        key={index}
                        style={{
                          marginBottom: "12px",
                          alignItems: "center",
                          // border: "1px solid #271E4A",
                          padding: "12px",
                          borderRadius: "12px",
                          backgroundColor: "#FFFFFF",
                          width: 900,
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "12px",
                          }}
                        >
                          <div
                            style={{
                              color: "#271E4A",
                            }}
                            className="title"
                          >
                            {index + 1}. Nguyện vọng {index + 1}
                          </div>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            {/* <div className="btnEdit">Chỉnh sửa</div> */}
                            <div
                              style={{ ...styles.button, color: "red" }}
                              className="btnDelete"
                              onClick={() => {
                                removeAspiration(index);
                              }}
                            >
                              Xoá
                            </div>
                          </div>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginBottom: "8px",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "24px",
                              color: "#271E4A",
                              fontWeight: "600",
                            }}
                          >
                            Tên trường đại học
                          </div>
                          <Select
                            className="select-react"
                            // defaultValue={4}
                            value={item.university}
                            onChange={(inputValue) => {
                              setCurUniversity({ index, inputValue });
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

                                width: "532px",
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
                                fontSize: "20px",
                                fontWeight: "400",
                              }),
                            }}
                          />
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginBottom: "8px",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "24px",
                              color: "#271E4A",
                              fontWeight: "600",
                            }}
                          >
                            Tên ngành
                          </div>
                          <Select
                            className="select-react"
                            // defaultValue={4}
                            value={item.major}
                            onChange={(inputValue) => {
                              setCurMajor({ index, inputValue });
                              updateAspiration(index, "major", inputValue);
                            }}
                            options={item.listMajor.map((item) => ({
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
                              <div className="select-placeholder-text">
                                VD: Tự động hoá
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

                                width: "532px",
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
                                fontSize: "20px",
                                fontWeight: "400",
                              }),
                            }}
                          />
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginBottom: "8px",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "24px",
                              color: "#271E4A",
                              fontWeight: "600",
                            }}
                          >
                            Khối
                          </div>
                          <Select
                            className="select-react"
                            // defaultValue={4}
                            value={item.block}
                            onChange={(inputValue) => {
                              updateAspiration(index, "block", inputValue);
                            }}
                            options={item.listBlock.map((item) => {
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

                                width: "532px",
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
                                fontSize: "20px",
                                fontWeight: "400",
                              }),
                            }}
                          />
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginBottom: "8px",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "24px",
                              color: "#271E4A",
                              fontWeight: "600",
                            }}
                          >
                            Sở thích
                          </div>
                          <Select
                            className="select-react"
                            // defaultValue={4}
                            value={item.isLike}
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
                              <div className="select-placeholder-text">
                                VD: Rất thích
                              </div>
                            }
                            components={{
                              IndicatorSeparator: () => null,
                              DropdownIndicator,
                            }}
                            isSearchable={false}
                            styles={{
                              control: (styles) => ({
                                ...styles,

                                width: "532px",
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
                                fontSize: "20px",
                                fontWeight: "400",
                              }),
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div
              style={styles.button}
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
          <div className="frame-child892" />
        </div>
        <div className="frame-parent1634">
          <div className="bng-chn-thuc-tnh-parent4">
            <div className="bng-nhp-thng">Bảng thuộc tính</div>
            <div className="frame-parent1635">
              <div className="thuc-tnh-chung-parent11">
                <div className="thuc-tnh-chung12">Thuộc tính chung</div>
                <div className="frame-parent1608">
                  <div className="checkmark-square-parent179">
                    <img
                      className="iconoutlinedapplicationdele29"
                      alt=""
                      src="./checkmark-square.svg"
                    />
                    <div className="tt-c29">Học lực</div>
                  </div>
                  <div className="checkmark-square-parent179">
                    <img
                      className="iconoutlinedapplicationdele29"
                      alt=""
                      src="./checkmark-square1.svg"
                    />
                    <div className="tt-c29">Tính cách</div>
                  </div>
                </div>
              </div>
              <div className="frame-parent1637">
                <div className="thuc-tnh-danh-sch-nguyn-v-parent11">
                  <div className="thuc-tnh-chung12">
                    Thuộc tính danh sách nguyện vọng
                  </div>
                  <i className="c-th-chn12">*Danh sách thuộc tính</i>
                </div>
                <div className="frame-parent1608">
                  <div className="checkmark-square-parent179">
                    <img
                      className="iconoutlinedapplicationdele29"
                      alt=""
                      src="./checkmark-square.svg"
                    />
                    <div className="tt-c29">Tên trường đại học</div>
                  </div>
                  <div className="checkmark-square-parent179">
                    <img
                      className="iconoutlinedapplicationdele29"
                      alt=""
                      src="./checkmark-square.svg"
                    />
                    <div className="tt-c29">Tên ngành học</div>
                  </div>
                  <div className="checkmark-square-parent179">
                    <img
                      className="iconoutlinedapplicationdele29"
                      alt=""
                      src="./checkmark-square.svg"
                    />
                    <div className="tt-c29">Khối thi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={styles.button}
            onClick={() => {
              if (!academic) {
                alert("Vui lòng chọn học lực");
                return;
              }
              if (!personality) {
                alert("Vui lòng chọn tính cách");
                return;
              }
              let percentType1 = 51;
              let percentType2 = 51;
              let percentType3 = 51;
              let percentType4 = 51;
              let percentType5 = 51;
              const body = {
                user,
                info_person: {
                  hovaten: user?.name || "test",
                  hocluc: academic?.value || "Khá",
                  tinhcach: personality?.value || "ISTJ-T",
                },
                nv: listAspiration.map((item) => {
                  return {
                    uni:
                      item?.university?.label.trim() ||
                      "Học viện Âm nhạc Quốc gia Việt Nam",
                    major: item?.major?.label.trim() || "Âm nhạc học",
                    block: item?.block?.label.trim() || "N",
                    islike: item?.isLike?.label.trim() || "Rất thích",
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
                  setPage("dsnv");
                  //scroll to top
                  window.scrollTo(0, 0);
                })
                .catch((err) => {
                  alert("Có lỗi xảy ra, vui lòng thử lại sau");
                  console.log("err: ", err);
                });
            }}
            className="iconoutlinedapplicationbulb-parent26"
          >
            <img
              className="iconoutlinedapplicationdele29"
              alt=""
              src="./iconoutlinedapplicationbulb1.svg"
            />
            <div className="bng-nhp-thng">Xác nhận</div>
          </div>
        </div>
      </div>
    </>
  );
};
