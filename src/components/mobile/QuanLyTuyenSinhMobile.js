import { useEffect, useState } from "react";
import "./QuanLyTuyenSinhMobile.css";
import axios from "axios";
import { apiUrl } from "../../constants/api";
import "./DetailUniversity.css";

const DetailUniversity = ({ uni, setUni }) => {
  console.log("uni: ", uni);
  const [isEditable, setIsEditable] = useState(false);

  const onChangeTitle = (index, key, value) => {
    const newUni = { ...uni };
    newUni.content[index][key] = value;
    setUni(newUni);
  };

  const onChangeContent = (index, index2, key, value) => {
    const newUni = { ...uni };
    newUni.content[index][key][index2] = value;
    setUni(newUni);
  };

  const onChangeDaoTao = (index, index2, key, value) => {
    const newUni = { ...uni };
    newUni.daoTao[index].listNganh[index2][key] = value;
    setUni(newUni);
  };

  const onChangeNhomNganh = (index, key, value) => {
    const newUni = { ...uni };
    newUni.daoTao[index][key] = value;
    setUni(newUni);
  };

  const onDeleteNhomNganh = (index) => {
    const newUni = { ...uni };
    newUni.daoTao.splice(index, 1);
    setUni(newUni);
  };

  const onDeleteNganh = (index, index2) => {
    const newUni = { ...uni };
    newUni.daoTao[index].listNganh.splice(index2, 1);
    setUni(newUni);
  };

  const onAddNganh = (index) => {
    const newUni = { ...uni };
    newUni.daoTao[index].listNganh.push({
      tenNganh: "",
      maNganh: "",
      khoiThi: "",
    });
    setUni(newUni);
  };

  const onAddNhomNganh = () => {
    const newUni = { ...uni };
    newUni.daoTao.push({
      nhomNganh: "",
      listNganh: [
        {
          tenNganh: "",
          maNganh: "",
          khoiThi: "",
        },
      ],
    });
    setUni(newUni);
  };
  return (
    <div className="iphone-8-19">
      <div className="mobileframe-4273195491">
        <div className="mobile-frame-parent215">
          <div className="mobilethng-tin-cc-trng-i-parent1">
            <div
              onClick={() => {
                setUni(null);
              }}
              className="mobilethng-tin-cc3"
            >
              Thông tin các trường Đại học
            </div>
            <div className="mobilethu-gn19">Thu gọn</div>
          </div>
          {/* <div className="mobilevuesaxlinearsearch-nor-parent1">
            <img
              className="mobilevuesaxlinearsearch-nor-icon3"
              alt=""
              src="/mobilevuesaxlinearsearchnormal2.svg"
            />
            <i className="mobiletm-kim3">Tìm kiếm...</i>
          </div> */}
          <div className="mobile-frame-parent216">
            <div className="mobileimage-25-wrapper1">
              <img
                className="mobileimage-25-icon3"
                alt=""
                src={uni?.image || "/mobileimage-25@2x.png"}
              />
            </div>
            <div className="mobilei-hc-bch-khoa-h-ni-parent1">
              <div className="mobilei-hc-bch3">
                {uni?.universityName || "Đại học Bách Khoa Hà Nội"}
              </div>
              <div className="mobile-frame-parent217">
                <div className="mobilevuesaxlineartimer-parent1">
                  <img
                    className="mobilevuesaxlineartimer-icon3"
                    alt=""
                    src="/mobilevuesaxlineartimer2.svg"
                  />
                  <div className="mobile91220223">9/12/2022</div>
                </div>
                <div className="mobileby-parent1">
                  <div className="mobile91220223">by</div>
                  <div className="mobilevuesaxlinearprofile-parent1">
                    <img
                      className="mobilevuesaxlineartimer-icon3"
                      alt=""
                      src="/mobilevuesaxlinearprofile2.svg"
                    />
                    <div className="mobileuser13">User1</div>
                  </div>
                </div>
              </div>
              <div className="mobiletng-quan-i3">
                TỔNG QUAN{" "}
                {uni?.universityName.length > 18
                  ? uni?.universityName.slice(0, 18) + " [...]"
                  : uni?.universityName}
              </div>
            </div>
          </div>
          <div className="mobile-frame-wrapper18">
            <div className="mobile-frame-parent215">
              <div className="mobiletng-quan-parent1">
                <div className="mobiletng-quan3">Tổng quan</div>
                <div
                  onClick={() => {
                    setIsEditable(!isEditable);
                  }}
                  className="mobilechnh-sa6"
                >
                  {isEditable ? "Xong" : "Chỉnh sửa"}
                </div>
              </div>
              {uni?.content.slice(0, -1).map((item, index) => {
                return (
                  <div key={index} className="mobile-frame-parent219">
                    <div className="mobilethng-tin-cc-trng-i-parent1">
                      {isEditable ? (
                        index !== 0 ? (
                          <input
                            key={index}
                            className="mobilethng-tin-cc3"
                            style={{
                              border: "none",
                              width: "100%",
                              outline: "none",
                              backgroundColor: "#fff",
                              boxShadow: "none",
                              fontSize: "14px",
                              color: "#271E4A",
                            }}
                            placeholder="Nhập đề mục"
                            value={item?.title}
                            onChange={(e) => {
                              onChangeTitle(index, "title", e.target.value);
                            }}
                          ></input>
                        ) : null
                      ) : (
                        <div className="mobilethng-tin-cc3">
                          {index !== 0 ? item?.title : ""}
                        </div>
                      )}
                    </div>
                    <div className="mobiletrng-i-hc-ngoi-th-wrapper1">
                      {item?.content.map((item2, index2) => {
                        return isEditable ? (
                          <input
                            key={index2}
                            className="mobiletng-quan-i3"
                            style={{
                              border: "none",
                              width: "100%",
                              outline: "none",
                              backgroundColor: "#fff",
                              boxShadow: "none",
                              fontSize: "14px",
                              color: "#271E4A",
                            }}
                            placeholder="Nhập nội dung"
                            value={item2}
                            onChange={(e) => {
                              onChangeContent(
                                index,
                                index2,
                                "content",
                                e.target.value
                              );
                            }}
                          ></input>
                        ) : (
                          <div key={index2} className="mobiletng-quan-i3">
                            {item2}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mobile-frame-wrapper18">
            <div className="mobile-frame-parent215">
              <div className="mobiletng-quan-parent1">
                <div className="mobiletng-quan3">Đào tạo</div>
                {/* <div className="mobilechnh-sa6">Chỉnh sửa</div> */}
              </div>
              <div className="mobile-frame-parent225">
                {uni?.daoTao?.map((item, index) => {
                  return (
                    <div className="mobile-frame-parent226">
                      <div className="mobiletng-quan-parent1">
                        {/* <div className="mobilengnh-ngn-ng3">
                          Ngành Ngôn ngữ - Vặn hoá - Tôn giáo:
                        </div> */}
                        <input
                          className="mobilengnh-ngn-ng3"
                          style={{
                            border: "none",
                            width: "100%",
                            outline: "none",
                            backgroundColor: "#fff",
                            boxShadow: "none",
                            fontSize: "14px",
                            color: "#271E4A",
                          }}
                          placeholder="Tên nhóm ngành"
                          value={item?.nhomNganh}
                          onChange={(e) => {
                            onChangeNhomNganh(
                              index,
                              "nhomNganh",
                              e.target.value
                            );
                          }}
                        ></input>
                        <div
                          onClick={() => {
                            onDeleteNhomNganh(index);
                          }}
                          className="mobilexo5"
                        >
                          Xoá
                        </div>
                      </div>
                      {item?.listNganh.map((item2, index2) => {
                        return (
                          <div key={index2} className="mobile-frame-parent227">
                            <div className="mobile-frame-parent219">
                              <div
                                style={{
                                  display: "flex",
                                  flex: 1,
                                  width: "100%",
                                  flexDirection: "row",
                                  justifyContent: "space-between",
                                }}
                              >
                                <div className="mobilem-ngnh7">Mã ngành</div>
                                <div
                                  onClick={() => {
                                    onDeleteNganh(index, index2);
                                  }}
                                  style={{ fontSize: "12px" }}
                                  className="mobilexo5"
                                >
                                  Xoá
                                </div>
                              </div>
                              <div className="mobilemobiletext-field12">
                                {/* <div className="mobilebutton-text12">NTH04</div> */}
                                <input
                                  style={{
                                    border: "none",
                                    width: "100%",
                                    outline: "none",
                                    backgroundColor: "#fff",
                                    boxShadow: "none",
                                    fontSize: "14px",
                                    color: "#271E4A",
                                    marginTop: "10px",
                                    marginLeft: "10px",
                                  }}
                                  placeholder="NTH04"
                                  value={item2?.maNganh}
                                  onChange={(e) => {
                                    onChangeDaoTao(
                                      index,
                                      index2,
                                      "maNganh",
                                      e.target.value
                                    );
                                  }}
                                ></input>
                                <div className="icon-glypharrow-down-wrapper11">
                                  <img
                                    className="icon-glypharrow-down14"
                                    alt=""
                                    src="/icon-glypharrow-down3.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="mobile-frame-parent219">
                              <div className="mobilem-ngnh7">Tên ngành</div>
                              <div className="mobilemobiletext-field12">
                                {/* <div className="mobilebutton-text12">
                                  Ngôn ngữ Anh
                                </div> */}
                                <input
                                  style={{
                                    border: "none",
                                    width: "100%",
                                    outline: "none",
                                    backgroundColor: "#fff",
                                    boxShadow: "none",
                                    fontSize: "14px",
                                    color: "#271E4A",
                                    marginTop: "10px",
                                    marginLeft: "10px",
                                  }}
                                  placeholder="Ngôn ngữ Anh"
                                  value={item2?.tenNganh}
                                  onChange={(e) => {
                                    onChangeDaoTao(
                                      index,
                                      index2,
                                      "tenNganh",
                                      e.target.value
                                    );
                                  }}
                                ></input>
                                <div className="icon-glypharrow-down-wrapper11">
                                  <img
                                    className="icon-glypharrow-down14"
                                    alt=""
                                    src="/icon-glypharrow-down3.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="mobile-frame-parent219">
                              <div className="mobilem-ngnh7">Khối thi</div>
                              <div className="mobilemobiletext-field12">
                                {/* <div className="mobilebutton-text14">A00</div> */}
                                <input
                                  style={{
                                    border: "none",
                                    width: "100%",
                                    outline: "none",
                                    backgroundColor: "#fff",
                                    boxShadow: "none",
                                    fontSize: "14px",
                                    color: "#271E4A",
                                    marginTop: "10px",
                                    marginLeft: "10px",
                                  }}
                                  placeholder="A00"
                                  value={item2?.khoiThi}
                                  onChange={(e) => {
                                    onChangeDaoTao(
                                      index,
                                      index2,
                                      "khoiThi",
                                      e.target.value
                                    );
                                  }}
                                ></input>
                                <div className="icon-glypharrow-down-wrapper11">
                                  <img
                                    className="icon-glypharrow-down14"
                                    alt=""
                                    src="/icon-glypharrow-down4.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            {index2 !== item?.listNganh?.length - 1 && (
                              <div
                                style={{
                                  height: "1px",
                                  width: "100%",
                                  backgroundColor: "grey",
                                  marginTop: "20px",
                                }}
                              ></div>
                            )}
                            {/* {index2 === item?.listNganh?.length - 1 && (
                              <div
                                onClick={() => {
                                  onAddNganh(index);
                                }}
                                className="mobileiconoutlinedsuggested-parent2"
                              >
                                <img
                                  className="mobileiconoutlinedsuggested4"
                                  alt=""
                                  src="/mobileiconoutlinedsuggestedplus.svg"
                                />
                                <div className="mobilengnh-ngn-ng3">
                                  Thêm ngành
                                </div>
                              </div>
                            )} */}
                          </div>
                        );
                      })}
                      <div
                        style={{ alignSelf: "center" }}
                        onClick={() => {
                          onAddNganh(index);
                        }}
                        className="mobileiconoutlinedsuggested-parent2"
                      >
                        <img
                          className="mobileiconoutlinedsuggested4"
                          alt=""
                          src="/mobileiconoutlinedsuggestedplus.svg"
                        />
                        <div className="mobilengnh-ngn-ng3">Thêm ngành</div>
                      </div>
                    </div>
                  );
                })}

                <div className="mobilebutton-container">
                  <div
                    onClick={() => {
                      onAddNhomNganh();
                    }}
                    className="mobilebutton4"
                  >
                    <div className="iconoutlinedsuggestedplus-container">
                      <img
                        className="iconoutlinedsuggestedplus2"
                        alt=""
                        src="/iconoutlinedsuggestedplus.svg"
                      />
                      <div className="mobilengnh-ngn-ng3">Thêm nhóm ngành</div>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      axios.post(`${apiUrl}/update_uni`, {
                        id: uni?.id,
                        universityName: uni?.universityName,
                        image: uni?.image,
                        content: uni?.content,
                        daoTao: uni?.daoTao,
                      });
                    }}
                    className="mobilebutton5"
                  >
                    <div className="mobilelabel11">Cập nhật</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ListUniversity = ({ setUni }) => {
  const [listUni, setListUni] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getListUni();
  }, []);

  const getListUni = () => {
    axios.get(`${apiUrl}/list_uni`).then((res) => {
      let listUni = res.data.data;
      setListUni(listUni);
    });
  };
  return (
    <div className="iphone-8-112">
      <div className="mobileframe-4273196653">
        <div className="mobilei-hc-ngoi-t-parent">
          <div className="mobile-frame-parent157">
            <div className="mobile-parent1">
              <div className="mobile15">#</div>
              <div className="mobiletn-trng">Tên trường</div>
            </div>
            <div className="mobileby">By</div>
          </div>
          {/* <i className="mobileycpd-yu-cu3">*YCPD: Yêu cầu phê duyệt</i> */}
        </div>
        <div className="mobile-frame-parent158">
          {listUni.slice((page - 1) * 10, page * 10).map((item, index) => {
            return (
              <div
                onClick={() => {
                  setUni(item);
                }}
                key={index}
                className="mobile-frame-parent159"
              >
                <div className="mobile1-parent1">
                  <div className="mobile16">#{(page - 1) * 10 + index + 1}</div>
                  <div className="mobilerectangle-49-parent">
                    <img
                      style={{ width: "50px", height: "50px" }}
                      className="mobilerectangle-49-icon"
                      alt=""
                      src={item?.image || "/mobilerectangle-49@2x.png"}
                    />
                    <div className="mobilei-hc-ngoi-t-parent">
                      <div className="mobilei-hc-ngoi">
                        {item?.universityName.length > 15
                          ? item?.universityName.slice(0, 15) + "..."
                          : item?.universityName}
                      </div>
                      <div className="mobilecomplete-parent">
                        <div className="mobilecomplete">Complete</div>
                        <div className="mobilemobileellipse-3430" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mobileadmin11">Admin1</div>
              </div>
            );
          })}
        </div>
        <div className="mobile-frame-parent169">
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
                ? "mobilevuesaxlineararrow-left-parent1"
                : "mobiletip-tc-parent1"
            }
          >
            <img
              className="mobileiconoutlinedapplicatio15"
              alt=""
              src="/mobilevuesaxlineararrowleft1.svg"
            />
            <div className="mobilequay-li3">Quay lại</div>
          </div>
          <div className="mobile1103">{page}/10</div>
          <div
            onClick={() => {
              if (page < Math.ceil(listUni.length / 10)) {
                setPage(page + 1);
                //scroll to top
                window.scrollTo(0, 0);
              }
            }}
            className={
              page >= listUni.length / 10
                ? "mobilevuesaxlineararrow-left-parent1"
                : "mobiletip-tc-parent1"
            }
          >
            <div className="mobilequay-li3">Tiếp tục</div>
            <img
              className="mobileiconoutlinedapplicatio15"
              alt=""
              src="/mobilevuesaxlineararrowright2.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const QuanLyTuyenSinhMobile = () => {
  const [uni, setUni] = useState(null);
  return uni ? (
    <DetailUniversity uni={uni} setUni={setUni} />
  ) : (
    <ListUniversity setUni={setUni} />
  );
};

export default QuanLyTuyenSinhMobile;
