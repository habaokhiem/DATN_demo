import { useEffect, useState } from "react";
import "./ThongTinTuyenSinhMobile.css";
import axios from "axios";
import { apiUrl } from "../../constants/api";

const DetailUniversity = ({ uni, setUni }) => {
  console.log("uni: ", uni);
  const [isShowDetail, setIsShowDetail] = useState(true);
  const [isShowDaotao, setIsShowDaotao] = useState(true);
  return (
    <div className="iphone-8-110">
      <div className="mobileframe-4273195492-main">
        <div className="mobile-frame-parent231">
          <div className="mobilethng-tin-cc-trng-i-parent2">
            <div
              onClick={() => {
                setUni(null);
              }}
              className="mobilethng-tin-cc4"
            >
              Thông tin các trường Đại học
            </div>
            <div className="mobilethu-gn24">Thu gọn</div>
          </div>
          {/* <div className="mobilevuesaxlinearsearch-nor-parent2">
            <img
              className="mobilevuesaxlinearsearch-nor-icon4"
              alt=""
              src="/mobilevuesaxlinearsearchnormal3.svg"
            />
            <i className="mobiletm-kim4">Tìm kiếm...</i>
          </div> */}
          <div className="mobile-frame-parent232">
            <div className="mobileimage-25-wrapper2">
              <img
                className="mobileimage-25-icon4"
                alt=""
                src={uni?.image || "/mobileimage-25@2x.png"}
              />
            </div>
            <div className="mobilei-hc-bch-khoa-h-ni-parent2">
              <div className="mobilei-hc-bch4">{uni?.universityName}</div>
              <div className="mobile-frame-parent233">
                <div className="mobilevuesaxlineartimer-parent2">
                  <img
                    className="mobilevuesaxlineartimer-icon4"
                    alt=""
                    src="/mobilevuesaxlineartimer3.svg"
                  />
                  <div className="mobile91220224">9/12/2022</div>
                </div>
                <div className="mobileby-parent2">
                  <div className="mobile91220224">by</div>
                  <div className="mobilevuesaxlinearprofile-parent2">
                    <img
                      className="mobilevuesaxlineartimer-icon4"
                      alt=""
                      src="/mobilevuesaxlinearprofile2.svg"
                    />
                    <div className="mobileuser14">User1</div>
                  </div>
                </div>
              </div>
              <div className="mobiletng-quan-i4">
                TỔNG QUAN{" "}
                {uni?.universityName.length > 18
                  ? uni?.universityName.slice(0, 18) + " [...]"
                  : uni?.universityName}
              </div>
            </div>
          </div>
          <div className="mobile-frame-wrapper21">
            <div className="mobile-frame-parent231">
              <div className="mobilenth04-group">
                <div className="mobiletng-quan4">{"Tổng quan"}</div>

                <div
                  onClick={() => {
                    setIsShowDetail(!isShowDetail);
                  }}
                  className="mobilethu-gn25"
                >
                  {isShowDetail ? "Thu gọn" : "Chi tiết"}
                </div>
              </div>
              {isShowDetail &&
                uni?.content.slice(0, -1).map((item, index) => {
                  return (
                    <div key={index}>
                      <div className="mobilenth04-group">
                        <div className="mobiletng-quan4">
                          {index !== 0 ? item?.title : ""}
                        </div>
                      </div>
                      <div className="mobiletrng-i-hc-ngoi-th-wrapper2">
                        <div className="mobiletrng-i-hc-container4">
                          {item?.content.map((item2, index2) => {
                            return (
                              <p key={index2} className="tn-ting-anh4">
                                {item2}
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="mobile-frame-wrapper21">
            <div className="mobile-frame-parent231">
              <div className="mobilenth04-group">
                <div className="mobiletng-quan4">Đào tạo</div>
                <div
                  onClick={() => {
                    setIsShowDaotao(!isShowDaotao);
                  }}
                  className="mobilethu-gn25"
                >
                  {isShowDaotao ? "Thu gọn" : "Chi tiết"}
                </div>
              </div>
              {isShowDaotao && (
                <div
                  style={{ overflow: "scroll", width: "270px" }}
                  className="mobile-frame-parent241"
                >
                  <div className="mobilengnh-ngn-ng-vn-ho-parent2">
                    <div className="mobiletrng-i-hc-container4">
                      Ngành Ngôn ngữ - Vặn hoá - Tôn giáo:
                    </div>
                    <div className="mobile-frame-parent242">
                      <div className="mobilem-ngnh-parent7">
                        <div className="mobilem-ngnh9">Mã ngành</div>
                        <div className="mobiletn-ngnh9">Tên ngành</div>
                        <div className="mobilekhi-thi9">Khối thi</div>
                      </div>
                      <div className="mobile-frame-parent243">
                        <div className="mobilenth04-group">
                          <div className="mobilenth041">NTH04</div>
                          <div className="mobilengn-ng-anh1">Ngôn ngữ Anh</div>
                          <div className="mobiled012">D01</div>
                        </div>
                        <div className="mobilenth04-group">
                          <div className="mobilenth041">NTH05</div>
                          <div className="mobilengn-ng-anh1">Ngôn ngữ Pháp</div>
                          <div className="mobiled012">D01, D03</div>
                        </div>
                        <div className="mobilenth06-group">
                          <div className="mobilenth041">NTH06</div>
                          <div className="mobilengn-ng-anh1">
                            Ngôn ngữ Trung Quốc
                          </div>
                          <div className="mobiled012">D01, D04</div>
                        </div>
                        <div className="mobilenth04-group">
                          <div className="mobilenth041">NTH07</div>
                          <div className="mobilengn-ng-anh1">Ngôn ngữ Nhật</div>
                          <div className="mobiled012">D01, D06</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{ marginTop: "10px" }}
                    className="mobilenhm-ngnh-lut-parent2"
                  >
                    <div className="mobiletrng-i-hc-container4">
                      Nhóm ngành Luật:
                    </div>
                    <div className="mobile-frame-parent242">
                      <div className="mobilem-ngnh-parent7">
                        <div className="mobilem-ngnh9">Mã ngành</div>
                        <div className="mobiletn-ngnh9">Tên ngành</div>
                        <div className="mobilekhi-thi9">Khối thi</div>
                      </div>
                      <div className="mobile-frame-wrapper24">
                        <div className="mobilenth04-group">
                          <div className="mobilenth041">NTH01-01</div>
                          <div className="mobilengn-ng-anh1">Luật</div>
                          <div className="mobiled012">D01</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mobilenhm-ngnh-du-lch-group">
                    <div className="mobiletrng-i-hc-container4">
                      Nhóm ngành Du lịch
                    </div>
                    <div className="mobile-frame-parent242">
                      <div className="mobilem-ngnh-parent7">
                        <div className="mobilem-ngnh9">Mã ngành</div>
                        <div className="mobiletn-ngnh9">Tên ngành</div>
                        <div className="mobilekhi-thi9">Khối thi</div>
                      </div>
                      <div className="mobile-frame-wrapper24">
                        <div className="mobilenth04-group">
                          <div className="mobilenth041">NTH02</div>
                          <div className="mobilengn-ng-anh1">
                            Quản trị khách sạn
                          </div>
                          <div className="mobiled012">
                            A00, A01, D01, D03, D05, D06, D07
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ListUniversity = ({ setUni }) => {
  const [isShowDinhHuong, setIsShowDinhHuong] = useState(false);
  const [isShowTopNganh, setIsShowTopNganh] = useState(false);
  const [isShowThongTinDaiHoc, setIsShowThongTinDaiHoc] = useState(true);
  const [listUni, setListUni] = useState([]);
  const [listUniOrigin, setListUniOrigin] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    getListUni();
  }, []);

  const getListUni = () => {
    axios.get(`${apiUrl}/list_uni`).then((res) => {
      let listUni = res.data.data;
      setListUni(listUni);
      setListUniOrigin(listUni);
    });
  };

  const onSearchUni = (e) => {
    setSearchText(e.target.value);
    let listUni = listUniOrigin.filter((item) => {
      return item.universityName
        ?.toLowerCase()
        .includes(e.target.value?.toLowerCase());
    });
    setListUni(listUni);
  };
  return (
    <div style={{ overflow: "visible" }} className="mobileiphone-8-1">
      <div className="mobilemobileframe-4273195572-main">
        <div className="mobileframe-4273195499">
          <div className="mobileframe-4273192856">
            <div className="mobileframe-42731954910">
              <div className="mobilemobilenh-hng-ngh">
                Thông tin các trường Đại học
              </div>
              <div
                onClick={() => {
                  setIsShowThongTinDaiHoc(!isShowThongTinDaiHoc);
                }}
                className="mobilemobilethu-gn"
              >
                {isShowThongTinDaiHoc ? "Thu gọn" : "Chi tiết"}
              </div>
            </div>
            {isShowThongTinDaiHoc && (
              <div>
                <div
                  style={{ marginBottom: "10px" }}
                  className="mobileframe-427319460"
                >
                  <img
                    className="mobilemobilevuesaxlinearsear-icon"
                    alt=""
                    src="/mobilemobilevuesaxlinearsearchnormal.svg"
                  />
                  {/* <i className="mobilemobiletm-kim">Tìm kiếm...</i> */}
                  <input
                    className="mobilemobiletm-kim"
                    style={{
                      border: "none",
                      width: "100%",
                      outline: "none",
                      backgroundColor: "#fff",
                      boxShadow: "none",
                      fontSize: "14px",
                      color: "#271E4A",
                    }}
                    placeholder="Tìm kiếm..."
                    value={searchText}
                    onChange={(e) => {
                      onSearchUni(e);
                    }}
                  ></input>
                </div>
                {listUni?.slice(0, 30).map((item, index) => {
                  return (
                    <div
                      onClick={() => {
                        setUni(item);
                      }}
                      key={index}
                      className="mobileframe-4273195634"
                    >
                      <div className="mobileimage-25-wrapper">
                        <img
                          className="mobileimage-25-icon"
                          alt=""
                          src={item?.image}
                        />
                      </div>
                      <div className="mobilemobilei-hc-bch-khoa-parent">
                        <div className="mobilemobilei-hc-bch">
                          {item?.universityName.length > 28
                            ? item?.universityName.slice(0, 28) + "..."
                            : item?.universityName}
                        </div>
                        <div className="mobileframe-4273195486">
                          <div className="mobilevuesaxlineartimer-parent">
                            <img
                              className="mobilevuesaxlineartimer-icon"
                              alt=""
                              src="/mobilevuesaxlineartimer.svg"
                            />
                            <div className="mobile9122022">9/12/2022</div>
                          </div>
                          <div className="mobileby-parent">
                            <div className="mobile9122022">by</div>
                            <div className="mobilevuesaxlinearprofile-parent">
                              <img
                                className="mobilevuesaxlineartimer-icon"
                                alt=""
                                src="/mobilevuesaxlinearprofile.svg"
                              />
                              <div className="mobilemobilext-tuyn-i">User1</div>
                            </div>
                          </div>
                        </div>
                        <div className="mobilemobiletuy-nhin-nu">
                          TỔNG QUAN{" "}
                          {item?.universityName.length > 18
                            ? item?.universityName.slice(0, 18) + " [...]"
                            : item?.universityName}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ThongTinTuyenSinhMobile = () => {
  const [uni, setUni] = useState(null);
  return uni ? (
    <DetailUniversity uni={uni} setUni={setUni} />
  ) : (
    <ListUniversity setUni={setUni} />
  );
};

export default ThongTinTuyenSinhMobile;
