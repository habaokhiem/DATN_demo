import { useEffect, useRef, useState } from "react";
import "./Tab1.css";
import "./Tab2.css";
import "./Tab3.css";
import "./dsnv.css";
import "./dsdx.css";
import { apiUrl } from "../../constants/api";
import "./m-gi-nguyn-vng1.css";
import axios from "axios";

import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

import Select, { components } from "react-select";
import { listAcademic } from "../../constants/listAcademic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DropdownIndicator = (props) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <div className="icon-glypharrow-down-frame">
          <img
            className="icon-glypharrow-down3"
            alt=""
            src="/icon-glypharrow-down3.svg"
          />
        </div>
      </components.DropdownIndicator>
    )
  );
};

const Tab1 = ({ setTab, name, academic, onChangeName, onChangeAcademic }) => {
  return (
    <div className="iphone-8-11">
      <div className="mobilehome-bar1">
        <div className="mobilemobilehome-indicator1" />
      </div>

      <div className="mobileframe-48095508">
        <div className="mobilemobilerectangle-4136-group">
          <div className="mobilemobilerectangle-41361" />
          <div className="mobilemobilerectangle-41371" />
          <div className="mobilemobilerectangle-41371" />
        </div>
        <div className="mobilethng-tin-chung-parent">
          <div className="mobilethng-tin-chung">Thông tin chung</div>
          <div className="mobileframe-wrapper">
            <div className="mobilethng-tin-chung-parent">
              <div className="mobilethng-tin-chung-parent">
                <div className="mobileh-tn">Họ tên</div>
                <div className="mobilemobiletext-field1">
                  {/* <div className="mobilebutton-text1">Nguyễn Văn A</div> */}
                  <input
                    className="mobilebutton-text1"
                    style={{
                      border: "none",
                      width: "100%",
                      outline: "none",
                      backgroundColor: "#fff",
                      boxShadow: "none",
                      fontSize: "14px",
                      color: "#271E4A",
                    }}
                    placeholder="Nguyễn Văn A"
                    value={name}
                    onChange={(e) => {
                      onChangeName(e);
                    }}
                  ></input>
                </div>
              </div>
              <div className="mobilethng-tin-chung-parent">
                <div className="mobileh-tn">Học lực</div>
                <div className="mobilemobiletext-field1">
                  {/* <div className="mobilebutton-text1">Giỏi</div> */}
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

                        width: "100%",
                        height: "20px",
                        backgroundColor: "#FFFFFF",
                        border: "none",
                        borderRadius: "20px",
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
                        fontWeight: "400",
                      }),
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={!name || !academic ? { backgroundColor: "#D4D4D4" } : {}}
          onClick={() => {
            if (!name || !academic) return;
            setTab(2);
            //scrollToTop
            window.scrollTo(0, 0);
          }}
          className="mobilebutton1"
        >
          <div className="mobilelabel1">Tiếp theo</div>
        </div>
      </div>
    </div>
  );
};

const Tab2 = ({ setTab, personality, onChangePersonality, setPage }) => {
  const [isShow, setIsShow] = useState(true);
  return (
    <>
      <div className="iphone-8-1">
        <div className="mobilehome-bar">
          <div className="mobilemobilehome-indicator" />
        </div>
      </div>
      <div className="mobileframe-427319673">
        <div className="mobilemobilerectangle-4136-parent">
          <div className="mobilemobilerectangle-4136" />
          <div className="mobilemobilerectangle-4136" />
          <div className="mobilemobilerectangle-4138" />
        </div>
        <div className="mobile-frame-group">
          <div className="mobile-frame-container">
            <div className="mobiletnh-cch-parent">
              <div className="mobiletnh-cch">Tính cách</div>
              <div className="mobilebn-c-th-tm-hiu-qua-parent">
                <div className="mobilebn-c-th">Bạn có thể tìm hiểu qua</div>
                {/* <a
                  className="mobiley"
                  href="https://www.16personalities.com/free-personality-test"
                  target="_blank"
                >
                  đây
                </a> */}
                <div
                  className="mobiley"
                  onClick={() => {
                    setPage("khaoSat");
                  }}
                >
                  đây
                </div>
              </div>
            </div>
            <div className="mobilemobiletext-field">
              {/* <div className="mobilebutton-text">ENFP-T</div> */}
              <Select
                className="select-react"
                // defaultValue={4}
                value={personality}
                onChange={(inputValue) => {
                  onChangePersonality(inputValue);
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
                  <div className="select-placeholder-text"> VD: ENFP-T</div>
                }
                components={{
                  IndicatorSeparator: () => null,
                  DropdownIndicator,
                }}
                isSearchable
                styles={{
                  control: (styles) => ({
                    ...styles,

                    width: "100%",
                    height: "20px",
                    backgroundColor: "#FFFFFF",
                    border: "none",
                    borderRadius: "20px",
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
                    fontWeight: "400",
                  }),
                }}
              />
              <div className="icon-glypharrow-down-container">
                <img
                  className="icon-glypharrow-down2"
                  alt=""
                  src="/icon-glypharrow-down2.svg"
                />
              </div>
            </div>
          </div>
          <div className="mobile-frame-container">
            <div className="mobilech-thch-nhm-tnh-cch-parent">
              <div className="mobiletnh-cch">Chú thích nhóm tính cách</div>
              <div
                onClick={() => {
                  setIsShow(!isShow);
                }}
                className="mobilethu-gn"
              >
                {isShow ? "Thu gọn" : "Chi tiết"}
              </div>
            </div>
            {isShow && (
              <div className="mobile-frame-parent1">
                <div className="mobile-frame-parent2">
                  <div className="mobile-frame-parent3">
                    <div className="mobile-frame-parent4">
                      <div className="mobileintroverted-parent">
                        <div className="mobileintroverted">
                          <span className="i">I</span>
                          <span className="ntroverted">ntroverted</span>
                        </div>
                        <div className="mobilei">(I)</div>
                      </div>
                      <div className="mobilehng-ni">Hướng nội</div>
                    </div>
                    <div className="mobilethch-cc-ni">
                      Thích các nơi yên tĩnh, không thích tiếp xúc với người lạ
                    </div>
                  </div>
                  <div className="mobilevs-parent">
                    <div className="mobilevs">vs</div>
                    <img
                      className="mobilemobileline-58-icon"
                      alt=""
                      src="/mobilemobileline-58.svg"
                    />
                  </div>
                  <div className="mobile-frame-parent3">
                    <div className="mobile-frame-parent4">
                      <div className="mobileintroverted-parent">
                        <div className="mobileintroverted">
                          <span className="i">E</span>
                          <span className="ntroverted">xtraverted</span>
                        </div>
                        <div className="mobilei">(E)</div>
                      </div>
                      <div className="mobilehng-ni">Hướng ngoại</div>
                    </div>
                    <div className="mobilethch-cc-ni">
                      Luôn giàu năng lượng và được thúc đẩy bởi đám đông.
                    </div>
                  </div>
                </div>
                <div className="mobile-frame-parent2">
                  <div className="mobile-frame-parent3">
                    <div className="mobile-frame-parent4">
                      <div className="mobileintroverted-parent">
                        <div className="mobileintroverted">
                          <span className="i">S</span>
                          <span className="ntroverted">ensing</span>
                        </div>
                        <div className="mobilei">(S)</div>
                      </div>
                      <div className="mobilehng-ni">Cảm nhận</div>
                    </div>
                    <div className="mobilethch-cc-ni">
                      Thường đi sâu vào các chi tiết nhỏ hơn là nhìn vào bức
                      tranh toàn cảnh.
                    </div>
                  </div>
                  <div className="mobilevs-parent">
                    <div className="mobilevs">vs</div>
                    <img
                      className="mobilemobileline-58-icon"
                      alt=""
                      src="/mobilemobileline-581.svg"
                    />
                  </div>
                  <div className="mobile-frame-parent3">
                    <div className="mobile-frame-parent4">
                      <div className="mobileintroverted-parent">
                        <div className="mobileintroverted">
                          <span className="ntroverted">i</span>
                          <span className="i">N</span>
                          <span className="ntroverted">tuition</span>
                        </div>
                        <div className="mobilei">(N)</div>
                      </div>
                      <div className="mobilehng-ni">Trực giác</div>
                    </div>
                    <div className="mobilethch-cc-ni">
                      Sử dụng trực giác và tập trung nhìn vào bức tranh toàn
                      cảnh hơn là những chi tiết nhỏ.
                    </div>
                  </div>
                </div>
                <div className="mobile-frame-parent2">
                  <div className="mobile-frame-parent3">
                    <div className="mobile-frame-parent4">
                      <div className="mobileintroverted-parent">
                        <div className="mobileintroverted">
                          <span className="i">F</span>
                          <span className="ntroverted">eeling</span>
                        </div>
                        <div className="mobilei">(F)</div>
                      </div>
                      <div className="mobilehng-ni">Cảm xúc</div>
                    </div>
                    <div className="mobilethch-cc-ni">
                      Luôn xử lý các hành động theo cảm xúc.
                    </div>
                  </div>
                  <div className="mobilevs-parent">
                    <div className="mobilevs">vs</div>
                    <img
                      className="mobilemobileline-58-icon"
                      alt=""
                      src="/mobilemobileline-58.svg"
                    />
                  </div>
                  <div className="mobile-frame-parent3">
                    <div className="mobile-frame-parent4">
                      <div className="mobileintroverted-parent">
                        <div className="mobileintroverted">
                          <span className="i">T</span>
                          <span className="ntroverted">hinking</span>
                        </div>
                        <div className="mobilei">(T)</div>
                      </div>
                      <div className="mobilehng-ni">Lý trí</div>
                    </div>
                    <div className="mobilethch-cc-ni">
                      Luôn giữ được “cái đầu lạnh” cùng hành động hợp lý.
                    </div>
                  </div>
                </div>
                <div className="mobile-frame-parent2">
                  <div className="mobile-frame-parent3">
                    <div className="mobile-frame-parent4">
                      <div className="mobileintroverted-parent">
                        <div className="mobileintroverted">
                          <span className="i">F</span>
                          <span className="ntroverted">eeling</span>
                        </div>
                        <div className="mobilei">(F)</div>
                      </div>
                      <div className="mobilehng-ni">Cảm xúc</div>
                    </div>
                    <div className="mobilethch-cc-ni">
                      Luôn xử lý các hành động theo cảm xúc.
                    </div>
                  </div>
                  <div className="mobilevs-parent">
                    <div className="mobilevs">vs</div>
                    <img
                      className="mobilemobileline-58-icon"
                      alt=""
                      src="/mobilemobileline-58.svg"
                    />
                  </div>
                  <div className="mobile-frame-parent3">
                    <div className="mobile-frame-parent4">
                      <div className="mobileintroverted-parent">
                        <div className="mobileintroverted">
                          <span className="i">T</span>
                          <span className="ntroverted">hinking</span>
                        </div>
                        <div className="mobilei">(T)</div>
                      </div>
                      <div className="mobilehng-ni">Lý trí</div>
                    </div>
                    <div className="mobilethch-cc-ni">
                      Luôn giữ được “cái đầu lạnh” cùng hành động hợp lý.
                    </div>
                  </div>
                </div>
                <div className="mobile-frame-parent2">
                  <div className="mobile-frame-parent3">
                    <div className="mobiletnh-cch-parent">
                      <div className="mobileperceiving-parent">
                        <div className="mobileintroverted">
                          <span className="i">P</span>
                          <span className="ntroverted">erceiving</span>
                        </div>
                        <div className="mobilei">(P)</div>
                      </div>
                      <div className="mobilenhn-thc">Nhận thức</div>
                    </div>
                    <div className="mobilethch-cc-ni">
                      Luôn dành thời gian quan sát, nhìn sự việc đa chiều theo
                      từng hoàn cảnh và môi trường.
                    </div>
                  </div>
                  <div className="mobilevs-parent">
                    <div className="mobilevs">vs</div>
                    <img
                      className="mobilemobileline-58-icon"
                      alt=""
                      src="/mobilemobileline-581.svg"
                    />
                  </div>
                  <div className="mobile-frame-parent3">
                    <div className="mobiletnh-cch-parent">
                      <div className="mobileperceiving-parent">
                        <div className="mobileintroverted">
                          <span className="i">J</span>
                          <span className="ntroverted">udgement</span>
                        </div>
                        <div className="mobilei">(J)</div>
                      </div>
                      <div className="mobilenhn-thc">Nguyên tắc</div>
                    </div>
                    <div className="mobilethch-cc-ni">
                      Thích lập các kế hoạch và tuân thủ các nguyên tắc.
                    </div>
                  </div>
                </div>
                <div className="mobile-frame-parent2">
                  <div className="mobile-frame-parent3">
                    <div className="mobiletnh-cch-parent">
                      <div className="mobileturbulent-parent">
                        <div className="mobileintroverted">
                          <span className="i">T</span>
                          <span className="ntroverted">urbulent</span>
                        </div>
                        <div className="mobilei">(T)</div>
                      </div>
                      <div className="mobilenhn-thc">Hỗn loạn</div>
                    </div>
                    <div className="mobilethch-cc-ni">
                      Nhận thức sâu sắc về mọi thứ, thường hay lo lắng về sự khó
                      đoán và hay suy nghĩ về những sự thất bại.
                    </div>
                  </div>
                  <div className="mobilevs-parent">
                    <div className="mobilevs">vs</div>
                    <img
                      className="mobilemobileline-58-icon"
                      alt=""
                      src="/mobilemobileline-582.svg"
                    />
                  </div>
                  <div className="mobile-frame-parent3">
                    <div className="mobiletnh-cch-parent">
                      <div className="mobileturbulent-parent">
                        <div className="mobileintroverted">
                          <span className="i">A</span>
                          <span className="ntroverted">ssertive</span>
                        </div>
                        <div className="mobilei">(A)</div>
                      </div>
                      <div className="mobilenhn-thc">Quyết đoán</div>
                    </div>
                    <div className="mobilethch-cc-ni">
                      Bình tĩnh và tự tin vào khả năng của bản thân để giải
                      quyết vấn đề trong cuộc sống.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          style={!!personality ? { backgroundColor: "#c2b8ff" } : {}}
          onClick={() => {
            setTab(3);
            //scrollToTop
            window.scrollTo(0, 0);
          }}
          className="mobilebutton"
        >
          <div className="mobilelabel">Tiếp theo</div>
        </div>
      </div>
    </>
  );
};

const Tab3 = ({
  setTab,
  listAspiration,
  addAspiration,
  removeAspiration,
  updateAspiration,
  listUniversity,
  setCurUniversity,
  setCurMajor,
  curUniversity,
  curMajor,
  send,
  isDone,
}) => {
  return (
    <div className="iphone-8-114">
      <div className="mobileframe-4273196761">
        <div className="mobilemobilerectangle-4136-group">
          <div className="mobilemobilerectangle-41361" />
          <div className="mobilemobilerectangle-41361" />
          <div className="mobilemobilerectangle-41361" />
        </div>
        <div className="mobiletn-trng-i-hc-container">
          <div className="mobiledanh-sch-nguyn-vng-container">
            <div className="mobiledanh-sch-nguyn1">Danh sách nguyện vọng</div>
          </div>
          <div className="mobile-frame-parent270">
            {listAspiration.map((item, index) => {
              return (
                <div key={index} className="mobile-frame-parent271">
                  <div className="mobilenguyn-vng-1-group">
                    <div className="mobilenguyn-vng-1-container1">
                      <span>{index + 1}. Nguyện vọng</span>
                      <span className="span4">{` ${index + 1} `}</span>
                      <span className="span5">*</span>
                    </div>
                    <div
                      onClick={() => {
                        removeAspiration(index);
                      }}
                      className="mobilexo9"
                    >
                      Xoá
                    </div>
                  </div>
                  <div className="mobiletn-trng-i-hc-container">
                    <div className="mobiletn-trng-i-hc-container">
                      <div className="mobiletn-trng-i2">Tên trường đại học</div>
                      <div className="mobilemobiletext-field26">
                        <Select
                          className="select-react"
                          // defaultValue={4}
                          value={item.university}
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
                            <div className="select-placeholder-text">
                              {" "}
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

                              width: "100%",
                              height: "20px",
                              backgroundColor: "#FFFFFF",
                              border: "none",
                              borderRadius: "20px",
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
                              fontWeight: "400",
                            }),
                          }}
                        />
                        {/* <div className="mobilebutton-text26">
                      Đại học Bách Khoa Hà Nội
                    </div>
                    <div className="mobile-icon-glypharrow-down-wrapper25">
                      <img
                        className="mobile-icon-glypharrow-down28"
                        alt=""
                        src="/icon-glypharrow-down7.svg"
                      />
                    </div> */}
                      </div>
                    </div>
                    <div className="mobiletn-trng-i-hc-container">
                      <div className="mobiletn-trng-i2">Tên trường ngành</div>
                      <div className="mobilemobiletext-field26">
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
                              {" "}
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

                              width: "100%",
                              height: "20px",
                              backgroundColor: "#FFFFFF",
                              border: "none",
                              borderRadius: "20px",
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
                              fontWeight: "400",
                            }),
                          }}
                        />
                        {/* <div className="mobilebutton-text26">Khoa học máy tính</div>
                    <div className="mobile-icon-glypharrow-down-wrapper25">
                      <img
                        className="mobile-icon-glypharrow-down28"
                        alt=""
                        src="/icon-glypharrow-down7.svg"
                      />
                    </div> */}
                      </div>
                    </div>
                    <div className="mobiletn-trng-i-hc-container">
                      <div className="mobiletn-trng-i2">Khối thi</div>
                      <div className="mobilemobiletext-field26">
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
                              {" "}
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

                              width: "100%",
                              height: "20px",
                              backgroundColor: "#FFFFFF",
                              border: "none",
                              borderRadius: "20px",
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
                              fontWeight: "400",
                            }),
                          }}
                        />
                        {/* <div className="mobilebutton-text26">A00</div>
                        <div className="mobile-icon-glypharrow-down-wrapper25">
                          <img
                            className="mobile-icon-glypharrow-down28"
                            alt=""
                            src="/icon-glypharrow-down7.svg"
                          />
                        </div> */}
                      </div>
                    </div>
                    <div className="mobiletn-trng-i-hc-container">
                      <div className="mobiletn-trng-i2">Sở thích</div>
                      <div className="mobilemobiletext-field26">
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
                              {" "}
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

                              width: "100%",
                              height: "20px",
                              backgroundColor: "#FFFFFF",
                              border: "none",
                              borderRadius: "20px",
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
                              fontWeight: "400",
                            }),
                          }}
                        />
                        {/* <div className="mobilebutton-text26">Có</div>
                        <div className="mobile-icon-glypharrow-down-wrapper25">
                          <img
                            className="mobile-icon-glypharrow-down28"
                            alt=""
                            src="/icon-glypharrow-down7.svg"
                          />
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mobilebutton-parent2">
          <div className="mobilebutton12">
            <div
              onClick={addAspiration}
              className="mobile-iconoutlinedsuggestedplus-parent4"
            >
              <img
                className="mobile-iconoutlinedsuggestedplus6"
                alt=""
                src="/iconoutlinedsuggestedplus1.svg"
              />
              <div className="mobilenguyn-vng-1-container1">
                Thêm nguyện vọng
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              setTab(4);
              //scrollToTop
              window.scrollTo(0, 0);
            }}
            className="mobilebutton13"
          >
            <div className="mobilelabel19">Xác nhận</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DSNV = ({ setTab }) => {
  const [listInputAspiration, setListInputAspiration] = useState([]);
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) getListPredict(user);
  }, []);

  const getListPredict = async (user) => {
    try {
      let res = await axios.get(`${apiUrl}/predict/${user?.id || 1}`);
      let data = res.data.data;
      setListInputAspiration(data.data_input);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="iphone-8-112">
      <div className="mobileframe-4273196351">
        <div className="mobilemobile-danh-sch-hin-ti-parent">
          <div className="mobilemobile-danh-sch-hin">Danh sách hiện tại</div>
          {/* <div className="mobilethu-gn33">Thu gọn</div> */}
        </div>
        <div
          style={{ overflowY: "scroll", height: "400px" }}
          className="mobileframe-427319635-child"
        >
          <div className="mobile-frame-parent255">
            {listInputAspiration.map((item, index) => {
              return (
                <div key={index} className="mobilei-hc-kinh-t-quc-dn-parent">
                  <div className="mobilei-hc-kinh-container">
                    <ul className="i-hc-kinh">
                      {item?.university || "Đại học Bách khoa Hà Nội"}
                    </ul>
                  </div>
                  <div className="mobile-frame-parent256">
                    <div className="mobilem-ngnh-parent15">
                      <div className="mobilem-ngnh17">Mã ngành</div>
                      <div className="mobiletn-ngnh17">Tên ngành</div>
                      <div className="mobilekhi-thi17">Khối thi</div>
                    </div>
                    <div className="mobile-frame-wrapper31">
                      <div className="mobilenth04-parent5">
                        <div className="mobilenth047">
                          {item?.id_major || "NTH04"}
                        </div>
                        <div className="mobilengn-ng-anh7">
                          {item?.major || "Ngôn ngữ Anh"}
                        </div>
                        <div className="mobiled019">{item?.block || "D01"}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          onClick={() => {
            setTab(1);
            //scrollToTop
            window.scrollTo(0, 0);
          }}
          className="mobilebutton8"
        >
          <div className="iconoutlinedsuggestedplus-parent2">
            <img
              className="iconoutlinedsuggestedplus4"
              alt=""
              src="/iconoutlinedsuggestedplus.svg"
            />
            <div className="mobilemobile-danh-sch-hin">Thay đổi thuộc tính</div>
          </div>
        </div>
        <div
          onClick={() => {
            setTab(5);
            //scrollToTop
            window.scrollTo(0, 0);
          }}
          className="mobilebutton9"
        >
          <div className="mobilelabel15">Xem danh sách đề xuất</div>
        </div>
      </div>
    </div>
  );
};

const NVDX = ({ setTab }) => {
  const [listOutputAspiration, setListOutputAspiration] = useState([]);
  const [info, setInfo] = useState({});
  console.log("info: ", info);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      getListPredict(user?.id);
      axios
        .get(`${apiUrl}/rating`)
        .then((res) => {
          let listRating = res.data.data;
          console.log("listRating: ", listRating);
          let info = listRating.find((item) => item.id_user == user.id);
          setInfo(info);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const getInfo = () => {
    axios
      .get(`${apiUrl}/rating`)
      .then((res) => {
        let listRating = res.data.data;
        console.log("listRating: ", listRating);
        let info = listRating.find((item) => item.id_user == user.id);
        setInfo(info);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getListPredict = async (id) => {
    try {
      let res = await axios.get(`${apiUrl}/predict/${id || 1}`);
      let data = res.data.data;
      console.log("data.data_output.length: ", data.data_output.length);
      if (data.data_output.length === 0) {
        setTab(1);
        //scroll to top
        window.scrollTo(0, 0);
      }
      setListOutputAspiration(data.data_output);
    } catch (error) {
      console.log(error);
    }
  };

  const [isShowMore, setIsShowMore] = useState(false);
  const [upCount, setUpCount] = useState(0);
  const [downCount, setDownCount] = useState(0);
  const [isShowComment, setIsShowComment] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useState({});
  const [typerating, setTyperating] = useState("up");
  const [currating, setCurrating] = useState({});

  useEffect(() => {
    console.log("info: ", info);
    if (info?.id_user) {
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
        setCurrating(userrating[0]);
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

  // const getListPredict = async (id) => {
  //   try {
  //     let res = await axios.get(`${apiUrl}/predict/${id || 1}`);
  //     let data = res.data.data;
  //     setListOutputAspiration(data.data_output);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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

  const updateStar = async (star) => {
    try {
      let res = await axios.post(`${apiUrl}/rating`, {
        star: star,
        id_user: user?.id,
      });
      getInfo();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="iphone-8-111">
      <div className="mobileframe-427319635">
        <div className="mobiledanh-sch-xut-parent">
          <div className="mobiledanh-sch">Danh sách đề xuất</div>
          <div className="mobilethu-gn32">Thu gọn</div>
        </div>
        <div
          style={{ overflow: "scroll", width: "290px" }}
          className="mobileframe-427319635-inner"
        >
          <div className="mobile-frame-parent248">
            {listOutputAspiration.map((item, index) => {
              return (
                <div key={index} className="mobilei-hc-bch-khoa-h-ni-parent3">
                  <div className="mobilei-hc-bch-container">
                    <ul className="mobile-i-hc-bch">
                      {index + 1}.{" "}
                      {item?.university || "Đại học Bách khoa Hà Nội"}
                    </ul>
                  </div>
                  <div className="mobile-frame-parent249">
                    <div className="mobilem-ngnh-parent10">
                      <div className="mobilem-ngnh12">Mã ngành</div>
                      <div className="mobiletn-ngnh12">Tên ngành</div>
                      <div className="mobilekhi-thi12">Khối thi</div>
                      <div className="mobile-ph-hp">Độ phù hợp</div>
                    </div>
                    <div className="mobile-frame-wrapper26">
                      <div className="mobilenth04-container">
                        <div className="mobilenth042">
                          {item?.id_major || "NTH04"}
                        </div>
                        <div className="mobilengn-ng-anh2">
                          {item?.major || "Ngôn ngữ Anh"}
                        </div>
                        <div className="mobiled014">{item?.block || "D01"}</div>
                        <div className="mobile806">{item?.score}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          onClick={() => {
            setTab(1);
            //scroll to top
            window.scrollTo(0, 0);
          }}
          className="mobilebutton6"
        >
          <div className="iconoutlinedsuggestedplus-parent1">
            <img
              className="iconoutlinedsuggestedplus3"
              alt=""
              src="/iconoutlinedsuggestedplus.svg"
            />
            <div className="mobiledanh-sch">Thay đổi thuộc tính</div>
          </div>
        </div>
        <div
          onClick={() => {
            setTab(4);
            //scroll to top
            window.scrollTo(0, 0);
          }}
          className="mobilebutton7"
        >
          <div className="mobilelabel13">Xem danh sách hiện tại</div>
        </div>
        <div className="mobile-frame-parent30">
          <div className="mobile-mobile-frame-parent30">
            <div className="mobile-danh-sch-hin">Đánh giá</div>
            <div className="mobile-frame-parent31">
              <div className="mobile-frame-parent32">
                <div className="mobile-iconfilleddirectionalcaret-container">
                  <img
                    onClick={() => {
                      updateUserrating("up");
                    }}
                    className="mobile-iconfilleddirectionalcaret-4"
                    alt=""
                    src={
                      typerating === "up"
                        ? "/iconfilleddirectionalcaretup1.svg"
                        : "/caret-up.svg"
                    }
                  />
                  <img
                    onClick={() => {
                      updateUserrating("down");
                    }}
                    className="mobile-iconfilleddirectionalcaret-4"
                    alt=""
                    src={
                      typerating === "down"
                        ? "/iconfilleddirectionalcaretdown1.svg"
                        : "/caret-down.svg"
                    }
                  />
                </div>
                <div className="mobile-iconfilleddirectionalcaret-container">
                  <div className="mobile-div10">{upCount}</div>
                  <div className="mobile-div11">{downCount}</div>
                </div>
              </div>
              <div className="mobile-frame-parent33-main">
                <div className="mobile-frame-parent34-main">
                  <div className="mobile-female15-parent4">
                    <img
                      style={{ width: "40px", height: "40px" }}
                      src={userInfo?.image || "/female15@2x.png"}
                    />
                    <div className="mobile-div10">User1</div>
                  </div>
                  <div className="mobile-frame-parent35-main">
                    <div className="mobile-frame-parent21">
                      <div className="mobile-frame-parent21">
                        {/* <div className="mobile-iconstar-wrapper8">
                          <img
                            className="iconstar10"
                            alt=""
                            src="/iconstar.svg"
                          />
                        </div>
                        <div className="mobile-iconstar-wrapper8">
                          <img
                            className="iconstar10"
                            alt=""
                            src="/iconstar.svg"
                          />
                        </div>
                        <div className="mobile-iconstar-wrapper8">
                          <img
                            className="iconstar10"
                            alt=""
                            src="/iconstar.svg"
                          />
                        </div>
                        <div className="mobile-iconstar-wrapper8">
                          <img
                            className="iconstar10"
                            alt=""
                            src="/iconstar.svg"
                          />
                        </div>
                        <div className="mobile-iconstar-wrapper12">
                          <img
                            className="iconstar10"
                            alt=""
                            src="/iconstar.svg"
                          />
                        </div> */}
                        {Array.from(Array(+info?.star || 0)).map(
                          (item, index) => {
                            return (
                              <div
                                onClick={() => {
                                  updateStar(index + 1);
                                }}
                                style={{ width: "12px", height: "12px" }}
                                key={index}
                                className={
                                  index === +info?.star - 1
                                    ? "buttonrounded13_round"
                                    : "buttonrounded13"
                                }
                              >
                                <img
                                  style={{ width: "12px", height: "12px" }}
                                  className="iconstar13"
                                  alt=""
                                  src="/iconstar.svg"
                                />
                              </div>
                            );
                          }
                        )}
                        {Array.from(Array(5 - +info?.star || 0)).map(
                          (item, index) => {
                            return (
                              <div
                                onClick={() => {
                                  updateStar(+info?.star + index + 1);
                                }}
                                style={{ width: "12px", height: "12px" }}
                                key={index}
                                className="buttonrounded10"
                              >
                                <img
                                  style={{ width: "12px", height: "12px" }}
                                  className="iconstar13"
                                  alt=""
                                  src="/filledno.svg"
                                />
                              </div>
                            );
                          }
                        )}
                      </div>
                      <div className="parent3">
                        <div className="mobile-div12">{info?.star || 0}.0</div>
                        <div className="mobile-div10">/</div>
                        <div className="mobile-div10">5.0</div>
                      </div>
                    </div>
                    <div className="mobile-div10">
                      ({upCount + downCount} đánh giá)
                    </div>
                  </div>
                </div>
                <div className="mobile-xut-hp-l-frame">
                  <div className="mobile-div10">Đề xuất hợp lý.</div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="mobile-bnh-lun-container">
            <div className="mobile-danh-sch-hin">Bình luận</div>
            <div className="mobile-frame-parent38">
              <div className="mobile-bnh-lun-container">
                <div className="mobile-female15-parent5">
                  <div className="mobile-female156" />
                  <div className="mobile-xut-hp-l-parent3">
                    <div className="mobile-xut-hp-l7">Đề xuất hợp lý.</div>
                    <img
                      className="mobile-vuesaxlinearsend-icon4"
                      alt=""
                      src="/vuesaxlinearsend1.svg"
                    />
                  </div>
                </div>
                <div className="mobile-female15-parent5">
                  <div className="mobile-female156" />
                  <div className="mobile-xut-hp-l-parent4">
                    <div className="mobile-xut-hp-l7">Đề xuất hợp lý.</div>
                    <img
                      className="mobile-vuesaxlinearsend-icon4"
                      alt=""
                      src="/vuesaxlinearsend1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="mobile-xem-thm-bnh2">Xem thêm bình luận</div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

const GoiYNguyenVongMobile = ({ setPage }) => {
  const [tab, setTab] = useState(5);
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
        top: 200 + listAspiration.length * 200,
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
    <div>
      {tab === 1 && (
        <Tab1
          setTab={setTab}
          academic={academic}
          name={name}
          onChangeName={onChangeName}
          onChangeAcademic={onChangeAcademic}
        />
      )}
      {tab === 2 && (
        <Tab2
          setTab={setTab}
          personality={personality}
          onChangePersonality={onChangePersonality}
          setPage={setPage}
        />
      )}
      {tab === 3 && (
        <Tab3
          setTab={setTab}
          listAspiration={listAspiration}
          addAspiration={addAspiration}
          removeAspiration={removeAspiration}
          updateAspiration={updateAspiration}
          listUniversity={listUniversity}
          setCurUniversity={setCurUniversity}
          setCurMajor={setCurMajor}
          curUniversity={curUniversity}
          curMajor={curMajor}
          send={send}
          isDone={isDone}
        />
      )}
      {tab === 4 && <DSNV setTab={setTab} />}
      {tab === 5 && <NVDX setTab={setTab} />}
    </div>
  );
};

export default GoiYNguyenVongMobile;
