import { useEffect, useRef, useState } from "react";
import "./GiNguynVng1.css";
import axios from "axios";
import { listAcademic } from "../constants/listAcademic";
import { listPersonality } from "../constants/listPersonaliy";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select, { components } from "react-select";
import { apiUrl } from "../constants/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

const DropdownIndicator = (props) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <FontAwesomeIcon
          icon={props.selectProps.menuIsOpen ? faCaretUp : faCaretDown}
          style={{ color: "#E31D93" }}
        />
      </components.DropdownIndicator>
    )
  );
};
const GiNguynVng1 = ({ goToDanhSachNguyenVong }) => {
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
    <div className="gi-nguyn-vng-1">
      <div className="group-parent17">
        <div className="frame-parent1590">
          <div className="vuesaxlineararrow-right-wrapper54">
            <img
              className="vuesaxlineararrow-right-icon73"
              alt=""
              src="./vuesaxlineararrowright61.svg"
            />
          </div>
          <div className="frame-parent1591">
            <div className="frame-parent1592">
              <div className="vuesaxlinearhome-parent19">
                <img
                  className="vuesaxlinearhome-icon21"
                  alt=""
                  src="./vuesaxlinearhome2.svg"
                />
                <div className="text335">Trang chủ</div>
              </div>
              <div className="vuesaxlinearhome-parent19">
                <img
                  className="vuesaxlinearhome-icon21"
                  alt=""
                  src="./vuesaxlinearreceiptedit1.svg"
                />
                <div className="text335">Khảo sát</div>
              </div>
              <div className="iconoutlinedapplicationbulb-parent25">
                <img
                  className="iconoutlinedapplicationbulb27"
                  alt=""
                  src="./iconoutlinedapplicationbulb.svg"
                />
                <div className="text335">Gợi ý nguyện vọng</div>
              </div>
              <div className="vuesaxlinearhome-parent19">
                <img
                  className="vuesaxlinearhome-icon21"
                  alt=""
                  src="./vuesaxlinearinfocircle11.svg"
                />
                <div className="text335">Thông tin tuyển sinh</div>
              </div>
              <div className="vuesaxlinearhome-parent19">
                <img
                  className="vuesaxlinearhome-icon21"
                  alt=""
                  src="./vuesaxlinearlogout2.svg"
                />
                <div className="text335">Sign Out</div>
              </div>
            </div>
            <div className="female15-parent51">
              <img
                className="female15-icon53"
                alt=""
                src="./female151@2x.png"
              />
              <div className="text340">User1</div>
            </div>
          </div>
        </div>
        <div className="notifications29">
          <div className="title29">
            <div className="text340">Thông báo</div>
          </div>
          <div className="frame-parent1593">
            <div className="tt-c-wrapper27">
              <div className="tt-c29">Tất cả</div>
            </div>
            <div className="cha-c-wrapper27">
              <div className="tt-c29">Chưa đọc</div>
            </div>
          </div>
          <div className="frame-parent1594">
            <div className="rectangle-parent510">
              <img
                className="frame-child872"
                alt=""
                src="./rectangle-484@2x.png"
              />
              <div className="byewind-parent286">
                <div className="byewind288">Người dùng mới đăng ký</div>
                <div className="emailgmailcom29">59 phút trước</div>
              </div>
            </div>
            <div className="frame-child873" />
          </div>
          <div className="frame-parent1595">
            <div className="rectangle-parent510">
              <img
                className="frame-child872"
                alt=""
                src="./rectangle-484@2x.png"
              />
              <div className="byewind-parent286">
                <div className="byewind288">Người dùng mới đăng ký</div>
                <div className="emailgmailcom29">1 Giờ trước</div>
              </div>
            </div>
            <div className="frame-child875" />
          </div>
          <div className="frame-parent1596">
            <div className="rectangle-parent510">
              <img
                className="frame-child872"
                alt=""
                src="./rectangle-484@2x.png"
              />
              <div className="byewind-parent286">
                <div className="byewind288">Người dùng mới đăng ký</div>
                <div className="emailgmailcom29">Hôm nay, 11:59 AM</div>
              </div>
            </div>
            <div className="frame-child873" />
          </div>
          <div className="frame-parent1597">
            <div className="rectangle-parent510">
              <img
                className="frame-child872"
                alt=""
                src="./rectangle-484@2x.png"
              />
              <div className="byewind-parent286">
                <div className="byewind288">Người dùng mới đăng ký</div>
                <div className="emailgmailcom29">Hôm nay, 11:59 AM</div>
              </div>
            </div>
            <div className="frame-child875" />
          </div>
          <div className="frame-parent1598">
            <div className="rectangle-parent510">
              <img
                className="frame-child872"
                alt=""
                src="./rectangle-484@2x.png"
              />
              <div className="byewind-parent286">
                <div className="byewind288">Người dùng mới đăng ký</div>
                <div className="emailgmailcom29">Hôm nay, 11:59 AM</div>
              </div>
            </div>
            <div className="frame-child873" />
          </div>
          <div className="frame-parent1599">
            <div className="rectangle-parent510">
              <img
                className="frame-child872"
                alt=""
                src="./rectangle-484@2x.png"
              />
              <div className="byewind-parent286">
                <div className="byewind288">Người dùng mới đăng ký</div>
                <div className="emailgmailcom29">Hôm nay, 11:59 AM</div>
              </div>
            </div>
            <div className="frame-child875" />
          </div>
          <div className="frame-parent1600">
            <div className="rectangle-parent510">
              <img
                className="frame-child872"
                alt=""
                src="./rectangle-484@2x.png"
              />
              <div className="byewind-parent286">
                <div className="byewind288">Người dùng mới đăng ký</div>
                <div className="emailgmailcom29">Hôm nay, 11:59 AM</div>
              </div>
            </div>
            <div className="frame-child875" />
          </div>
          <div className="frame-parent1601">
            <div className="rectangle-parent510">
              <img
                className="frame-child872"
                alt=""
                src="./rectangle-484@2x.png"
              />
              <div className="byewind-parent286">
                <div className="byewind288">Người dùng mới đăng ký</div>
                <div className="emailgmailcom29">Hôm nay, 11:59 AM</div>
              </div>
            </div>
            <div className="frame-child875" />
          </div>
          <div className="frame-parent1602">
            <div className="rectangle-parent510">
              <img
                className="frame-child872"
                alt=""
                src="./rectangle-484@2x.png"
              />
              <div className="byewind-parent286">
                <div className="byewind288">Người dùng mới đăng ký</div>
                <div className="emailgmailcom29">Hôm nay, 11:59 AM</div>
              </div>
            </div>
            <div className="frame-child873" />
          </div>
          <div className="frame-parent1603">
            <div className="rectangle-parent510">
              <img
                className="frame-child872"
                alt=""
                src="./rectangle-484@2x.png"
              />
              <div className="byewind-parent286">
                <div className="byewind288">Người dùng mới đăng ký</div>
                <div className="emailgmailcom29">Hôm nay, 11:59 AM</div>
              </div>
            </div>
            <div className="frame-child873" />
          </div>
          <div className="button29">
            <img
              className="dotsthreeoutlinevertical-s-icon29"
              alt=""
              src="./dotsthreeoutlineverticals.svg"
            />
          </div>
        </div>
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
                      {/* <div className="frame-parent1609">
                        <div className="vd-gii-wrapper4">
                          <i className="thuc-tnh-chung12">VD: Giỏi</i>
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
                          <div className="select-placeholder-text">
                            VD: Giỏi
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
                            backgroundColor: "#FFFAFE",
                            border: "1px solid #E31D93",
                            boxShadow: "0 !important",
                            "&:hover": {
                              border: "1px solid #E31D93 !important",
                              boxShadow: "0 0 10px #e31d93",
                            },
                          }),
                          menu: (base) => ({
                            ...base,
                            fontSize: "20px",
                            fontWeight: "400",
                            background: "rgba(255, 236, 249, 0.3)",
                            backdropFilter: `blur(7px)`,
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
                              fill: "#E31D93",
                            },
                          }),
                          option: (
                            styles,
                            { data, isDisabled, isFocused, isSelected }
                          ) => {
                            return {
                              ...styles,
                              backgroundColor: isSelected
                                ? "rgba(255, 236, 249, 0.3)"
                                : isFocused
                                ? "rgba(255, 236, 249, 0.3)"
                                : null,
                              color: "#E31D93",
                              cursor: isDisabled ? "not-allowed" : "default",
                            };
                          },

                          singleValue: (base) => ({
                            ...base,
                            // padding: "5px 10px",
                            borderRadius: 5,
                            background: "#FFFAFE",
                            color: "#E31D93",
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
                              backgroundColor: "#FFFAFE",

                              border: "1px solid #E31D93",
                              boxShadow: "0 !important",
                              "&:hover": {
                                border: "1px solid #E31D93 !important",
                                boxShadow: "0 0 10px #e31d93",
                              },
                            }),
                            menu: (base) => ({
                              ...base,
                              fontSize: "20px",
                              fontWeight: "400",
                              background: "rgba(255, 236, 249, 0.3)",
                              backdropFilter: `blur(7px)`,
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
                              color: "#e31d93",
                              fontSize: "20px",
                              fontWeight: "400",
                            }),
                            dropdownIndicator: (provided) => ({
                              ...provided,
                              svg: {
                                fill: "#E31D93",
                              },
                            }),
                            option: (
                              styles,
                              { data, isDisabled, isFocused, isSelected }
                            ) => {
                              return {
                                ...styles,
                                backgroundColor: isSelected
                                  ? "rgba(255, 236, 249, 0.3)"
                                  : isFocused
                                  ? "rgba(255, 236, 249, 0.3)"
                                  : null,
                                color: "#E31D93",
                                cursor: isDisabled ? "not-allowed" : "default",
                              };
                            },

                            singleValue: (base) => ({
                              ...base,
                              // padding: "5px 10px",
                              borderRadius: 5,
                              background: "#FFFAFE",
                              color: "#E31D93",
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
                          truy cập vào
                        </i>
                        {/* <i className="bng-nhp-thng">Khảo sát tính cách.</i> */}
                        <a
                          className="bng-nhp-thng"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.16personalities.com/free-personality-test"
                          style={{ color: "#E31D93" }}
                        >
                          khảo sát tính cách.
                        </a>
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
                  {/* <div className="thuc-tnh-chung-parent10">
                    <div className="hc-lc-parent13">
                      <div className="thuc-tnh-chung12">Nguyện vọng 1</div>
                      <div className="iconoutlinedapplicationdele-parent16">
                        <img
                          className="iconoutlinedapplicationdele29"
                          alt=""
                          src="./iconoutlinedapplicationdelete1.svg"
                        />
                        <div className="thuc-tnh-chung12">Xoá</div>
                      </div>
                    </div>
                    <div className="frame-parent1614">
                      <div className="hc-lc-parent13">
                        <div className="tt-c29">Tên trường đại học</div>
                        <div className="frame-parent1609">
                          <div className="vd-gii-wrapper4">
                            <i className="thuc-tnh-chung12">
                              VD: Đại học Bách khoa Hà Nội
                            </i>
                          </div>
                          <img
                            className="iconfilleddirectionalcaret-84"
                            alt=""
                            src="./iconfilleddirectionalcaretdown.svg"
                          />
                        </div>
                      </div>
                      <div className="hc-lc-parent13">
                        <div className="tt-c29">Tên ngành học</div>
                        <div className="frame-parent1609">
                          <div className="vd-gii-wrapper4">
                            <i className="thuc-tnh-chung12">
                              VD: CNTT: Kỹ thuật Máy tính
                            </i>
                          </div>
                          <img
                            className="iconfilleddirectionalcaret-84"
                            alt=""
                            src="./iconfilleddirectionalcaretdown.svg"
                          />
                        </div>
                      </div>
                      <div className="hc-lc-parent13">
                        <div className="khi-thi-parent16">
                          <div className="tt-c29">Khối thi</div>
                          <img
                            className="icontwo-tonesuggestedquesti18"
                            alt=""
                            src="./icontwotonesuggestedquestioncircle.svg"
                          />
                        </div>
                        <div className="frame-parent1609">
                          <div className="vd-gii-wrapper4">
                            <i className="thuc-tnh-chung12">VD: A00</i>
                          </div>
                          <img
                            className="iconfilleddirectionalcaret-84"
                            alt=""
                            src="./iconfilleddirectionalcaretdown.svg"
                          />
                        </div>
                      </div>
                      <div className="hc-lc-parent13">
                        <div className="tt-c29">Sở thích</div>
                        <div className="frame-parent1609">
                          <div className="vd-gii-wrapper4">
                            <i className="thuc-tnh-chung12">VD: Rất thích</i>
                          </div>
                          <img
                            className="iconfilleddirectionalcaret-84"
                            alt=""
                            src="./iconfilleddirectionalcaretdown.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="thuc-tnh-chung-parent10">
                    <div className="hc-lc-parent13">
                      <div className="thuc-tnh-chung12">Nguyện vọng 2</div>
                      <div className="iconoutlinedapplicationdele-parent16">
                        <img
                          className="iconoutlinedapplicationdele29"
                          alt=""
                          src="./iconoutlinedapplicationdelete1.svg"
                        />
                        <div className="thuc-tnh-chung12">Xoá</div>
                      </div>
                    </div>
                    <div className="frame-parent1614">
                      <div className="hc-lc-parent13">
                        <div className="tt-c29">Tên trường đại học</div>
                        <div className="frame-parent1609">
                          <div className="vd-gii-wrapper4">
                            <i className="thuc-tnh-chung12">
                              VD: Đại học Bách khoa Hà Nội
                            </i>
                          </div>
                          <img
                            className="iconfilleddirectionalcaret-84"
                            alt=""
                            src="./iconfilleddirectionalcaretdown.svg"
                          />
                        </div>
                      </div>
                      <div className="hc-lc-parent13">
                        <div className="tt-c29">Tên ngành học</div>
                        <div className="frame-parent1609">
                          <div className="vd-gii-wrapper4">
                            <i className="thuc-tnh-chung12">
                              VD: CNTT: Kỹ thuật Máy tính
                            </i>
                          </div>
                          <img
                            className="iconfilleddirectionalcaret-84"
                            alt=""
                            src="./iconfilleddirectionalcaretdown.svg"
                          />
                        </div>
                      </div>
                      <div className="hc-lc-parent13">
                        <div className="khi-thi-parent16">
                          <div className="tt-c29">Khối thi</div>
                          <img
                            className="icontwo-tonesuggestedquesti18"
                            alt=""
                            src="./icontwotonesuggestedquestioncircle.svg"
                          />
                        </div>
                        <div className="frame-parent1609">
                          <div className="vd-gii-wrapper4">
                            <i className="thuc-tnh-chung12">VD: A00</i>
                          </div>
                          <img
                            className="iconfilleddirectionalcaret-84"
                            alt=""
                            src="./iconfilleddirectionalcaretdown.svg"
                          />
                        </div>
                      </div>
                      <div className="hc-lc-parent13">
                        <div className="tt-c29">Sở thích</div>
                        <div className="frame-parent1609">
                          <div className="vd-gii-wrapper4">
                            <i className="thuc-tnh-chung12">VD: Rất thích</i>
                          </div>
                          <img
                            className="iconfilleddirectionalcaret-84"
                            alt=""
                            src="./iconfilleddirectionalcaretdown.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="thuc-tnh-chung-parent10">
                    <div className="hc-lc-parent13">
                      <div className="thuc-tnh-chung12">Nguyện vọng 3</div>
                      <div className="iconoutlinedapplicationdele-parent16">
                        <img
                          className="iconoutlinedapplicationdele29"
                          alt=""
                          src="./iconoutlinedapplicationdelete1.svg"
                        />
                        <div className="thuc-tnh-chung12">Xoá</div>
                      </div>
                    </div>
                    <div className="frame-parent1614">
                      <div className="hc-lc-parent13">
                        <div className="tt-c29">Tên trường đại học</div>
                        <div className="frame-parent1609">
                          <div className="vd-gii-wrapper4">
                            <i className="thuc-tnh-chung12">
                              VD: Đại học Bách khoa Hà Nội
                            </i>
                          </div>
                          <img
                            className="iconfilleddirectionalcaret-84"
                            alt=""
                            src="./iconfilleddirectionalcaretdown.svg"
                          />
                        </div>
                      </div>
                      <div className="hc-lc-parent13">
                        <div className="tt-c29">Tên ngành học</div>
                        <div className="frame-parent1609">
                          <div className="vd-gii-wrapper4">
                            <i className="thuc-tnh-chung12">
                              VD: CNTT: Kỹ thuật Máy tính
                            </i>
                          </div>
                          <img
                            className="iconfilleddirectionalcaret-84"
                            alt=""
                            src="./iconfilleddirectionalcaretdown.svg"
                          />
                        </div>
                      </div>
                      <div className="hc-lc-parent13">
                        <div className="khi-thi-parent16">
                          <div className="tt-c29">Khối thi</div>
                          <img
                            className="icontwo-tonesuggestedquesti18"
                            alt=""
                            src="./icontwotonesuggestedquestioncircle.svg"
                          />
                        </div>
                        <div className="frame-parent1609">
                          <div className="vd-gii-wrapper4">
                            <i className="thuc-tnh-chung12">VD: A00</i>
                          </div>
                          <img
                            className="iconfilleddirectionalcaret-84"
                            alt=""
                            src="./iconfilleddirectionalcaretdown.svg"
                          />
                        </div>
                      </div>
                      <div className="hc-lc-parent13">
                        <div className="tt-c29">Sở thích</div>
                        <div className="frame-parent1609">
                          <div className="vd-gii-wrapper4">
                            <i className="thuc-tnh-chung12">VD: Rất thích</i>
                          </div>
                          <img
                            className="iconfilleddirectionalcaret-84"
                            alt=""
                            src="./iconfilleddirectionalcaretdown.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div> */}
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
                            border: "1px solid #E31D93",
                            padding: "12px",
                            borderRadius: "12px",
                            backgroundColor: "#FFFAFE",
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
                                color: "#E31D93",
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
                                style={styles.button}
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
                                color: "#E31D93",
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
                                  backgroundColor: "#FFFAFE",

                                  border: "1px solid #E31D93",
                                  boxShadow: "0 !important",
                                  "&:hover": {
                                    border: "1px solid #E31D93 !important",
                                    boxShadow: "0 0 10px #e31d93",
                                  },
                                }),
                                menu: (base) => ({
                                  ...base,
                                  fontSize: "20px",
                                  fontWeight: "400",
                                  background: "rgba(255, 236, 249, 0.3)",
                                  backdropFilter: `blur(7px)`,
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
                                  color: "#e31d93",
                                  fontSize: "20px",
                                  fontWeight: "400",
                                }),
                                dropdownIndicator: (provided) => ({
                                  ...provided,
                                  svg: {
                                    fill: "#E31D93",
                                  },
                                }),
                                option: (
                                  styles,
                                  { data, isDisabled, isFocused, isSelected }
                                ) => {
                                  return {
                                    ...styles,
                                    backgroundColor: isSelected
                                      ? "rgba(255, 236, 249, 0.3)"
                                      : isFocused
                                      ? "rgba(255, 236, 249, 0.3)"
                                      : null,
                                    color: "#E31D93",
                                    cursor: isDisabled
                                      ? "not-allowed"
                                      : "default",
                                  };
                                },

                                singleValue: (base) => ({
                                  ...base,
                                  // padding: "5px 10px",
                                  borderRadius: 5,
                                  background: "#FFFAFE",
                                  color: "#E31D93",
                                  display: "flex",
                                  width: "fit-content",
                                  fontSize: "20px",
                                  fontWeight: "400",
                                }),
                              }}
                            />
                            {/* <input
                    className="input"
                    style={{
                      padding: "8px",
                      width: "514px",
                      alignItems: "center",
                      height: "32px",
                      borderRadius: "4px",
                      // fontStyle: "italic",
                      fontSize: "20px",
                      fontWeight: "400",
                      color: "#E31D93",
                    }}
                    placeholder="VD: Trường đại học Bách Khoa Hà Nội"
                    value={item.university}
                    onChange={(e) => {
                      updateAspiration(index, "university", e.target.value);
                    }}
                  /> */}
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
                                color: "#E31D93",
                                fontWeight: "600",
                              }}
                            >
                              Tên ngành
                            </div>
                            {/* <input
                    className="input"
                    style={{
                      padding: "8px",
                      width: "514px",
                      alignItems: "center",
                      height: "32px",
                      borderRadius: "4px",
                      // fontStyle: "italic",
                      fontSize: "20px",
                      fontWeight: "400",
                      color: "#E31D93",
                    }}
                    placeholder="VD: Khoa học máy tính"
                    value={item.major}
                    onChange={(e) => {
                      updateAspiration(index, "major", e.target.value);
                    }}
                  /> */}
                            <Select
                              className="select-react"
                              // defaultValue={4}
                              value={item.major}
                              onChange={(inputValue) => {
                                setCurMajor({ index, inputValue });
                                updateAspiration(index, "major", inputValue);
                              }}
                              // onChange={(inputValue) => {
                              //   onChangePersonality(inputValue);
                              // }}
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
                                  backgroundColor: "#FFFAFE",

                                  border: "1px solid #E31D93",
                                  boxShadow: "0 !important",
                                  "&:hover": {
                                    border: "1px solid #E31D93 !important",
                                    boxShadow: "0 0 10px #e31d93",
                                  },
                                }),
                                menu: (base) => ({
                                  ...base,
                                  fontSize: "20px",
                                  fontWeight: "400",
                                  background: "rgba(255, 236, 249, 0.3)",
                                  backdropFilter: `blur(7px)`,
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
                                  color: "#e31d93",
                                  fontSize: "20px",
                                  fontWeight: "400",
                                }),
                                dropdownIndicator: (provided) => ({
                                  ...provided,
                                  svg: {
                                    fill: "#E31D93",
                                  },
                                }),
                                option: (
                                  styles,
                                  { data, isDisabled, isFocused, isSelected }
                                ) => {
                                  return {
                                    ...styles,
                                    backgroundColor: isSelected
                                      ? "rgba(255, 236, 249, 0.3)"
                                      : isFocused
                                      ? "rgba(255, 236, 249, 0.3)"
                                      : null,
                                    color: "#E31D93",
                                    cursor: isDisabled
                                      ? "not-allowed"
                                      : "default",
                                  };
                                },

                                singleValue: (base) => ({
                                  ...base,
                                  // padding: "5px 10px",
                                  borderRadius: 5,
                                  background: "#FFFAFE",
                                  color: "#E31D93",
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
                                color: "#E31D93",
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
                              // onChange={(inputValue) => {
                              //   onChangePersonality(inputValue);
                              // }}
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
                                  backgroundColor: "#FFFAFE",

                                  border: "1px solid #E31D93",
                                  boxShadow: "0 !important",
                                  "&:hover": {
                                    border: "1px solid #E31D93 !important",
                                    boxShadow: "0 0 10px #e31d93",
                                  },
                                }),
                                menu: (base) => ({
                                  ...base,
                                  fontSize: "20px",
                                  fontWeight: "400",
                                  background: "rgba(255, 236, 249, 0.3)",
                                  backdropFilter: `blur(7px)`,
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
                                  color: "#e31d93",
                                  fontSize: "20px",
                                  fontWeight: "400",
                                }),
                                dropdownIndicator: (provided) => ({
                                  ...provided,
                                  svg: {
                                    fill: "#E31D93",
                                  },
                                }),
                                option: (
                                  styles,
                                  { data, isDisabled, isFocused, isSelected }
                                ) => {
                                  return {
                                    ...styles,
                                    backgroundColor: isSelected
                                      ? "rgba(255, 236, 249, 0.3)"
                                      : isFocused
                                      ? "rgba(255, 236, 249, 0.3)"
                                      : null,
                                    color: "#E31D93",
                                    cursor: isDisabled
                                      ? "not-allowed"
                                      : "default",
                                  };
                                },

                                singleValue: (base) => ({
                                  ...base,
                                  // padding: "5px 10px",
                                  borderRadius: 5,
                                  background: "#FFFAFE",
                                  color: "#E31D93",
                                  display: "flex",
                                  width: "fit-content",
                                  fontSize: "20px",
                                  fontWeight: "400",
                                }),
                              }}
                            />
                            {/* <input
                    className="input"
                    style={{
                      padding: "8px",
                      width: "514px",
                      alignItems: "center",
                      height: "32px",
                      borderRadius: "4px",
                      // fontStyle: "italic",
                      fontSize: "20px",
                      fontWeight: "400",
                      color: "#E31D93",
                    }}
                    placeholder="VD: A00"
                    value={item.block}
                    onChange={(e) => {
                      updateAspiration(index, "block", e.target.value);
                    }}
                  /> */}
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
                                color: "#E31D93",
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
                                  backgroundColor: "#FFFAFE",
                                  border: "1px solid #E31D93",
                                  boxShadow: "0 !important",
                                  "&:hover": {
                                    border: "1px solid #E31D93 !important",
                                    boxShadow: "0 0 10px #e31d93",
                                  },
                                }),
                                menu: (base) => ({
                                  ...base,
                                  fontSize: "20px",
                                  fontWeight: "400",
                                  background: "rgba(255, 236, 249, 0.3)",
                                  backdropFilter: `blur(7px)`,
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
                                    fill: "#E31D93",
                                  },
                                }),
                                option: (
                                  styles,
                                  { data, isDisabled, isFocused, isSelected }
                                ) => {
                                  return {
                                    ...styles,
                                    backgroundColor: isSelected
                                      ? "rgba(255, 236, 249, 0.3)"
                                      : isFocused
                                      ? "rgba(255, 236, 249, 0.3)"
                                      : null,
                                    color: "#E31D93",
                                    cursor: isDisabled
                                      ? "not-allowed"
                                      : "default",
                                  };
                                },

                                singleValue: (base) => ({
                                  ...base,
                                  // padding: "5px 10px",
                                  borderRadius: 5,
                                  background: "#FFFAFE",
                                  color: "#E31D93",
                                  display: "flex",
                                  width: "fit-content",
                                  fontSize: "20px",
                                  fontWeight: "400",
                                }),
                              }}
                            />
                            {/* <select
                    className="input"
                    style={{
                      padding: "8px",
                      alignItems: "center",
                      height: "49px",
                      width: "532px",
                      borderRadius: "4px",
                      fontStyle: "italic",
                      fontSize: "20px",
                      fontWeight: "400",
                      color: item.isLike
                        ? "#E31D93"
                        : "rgba(227, 29, 147, 0.6)",
                    }}
                    value={item.isLike}
                    onChange={(e) => {
                      updateAspiration(index, "isLike", e.target.value);
                    }}
                  >
                    <option
                      className="placeholderSelect"
                      value=""
                      disabled
                      // selected
                      hidden
                    >
                      VD: Rất thích
                    </option>
                    <option style={{ padding: "8px" }} value={4}>
                      Rất thích
                    </option>
                    <option style={{ padding: "8px" }} value={3}>
                      Thích
                    </option>
                    <option style={{ padding: "8px" }} value={2}>
                      Trung bình
                    </option>
                    <option style={{ padding: "8px" }} value={1}>
                      Không thích
                    </option>
                  </select> */}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* <button className="btnAdd" onClick={addAspiration}>
                    Thêm nguyện vọng <img alt="plusIcon" src={plusIcon} />{" "}
                  </button> */}
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
                goToDanhSachNguyenVong();
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
      </div>
    </div>
  );
};

const styles = {
  button: {
    cursor: "pointer",
    userSelect: "none",
  },
};

export default GiNguynVng1;
