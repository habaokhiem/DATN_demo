import axios from "axios";
import { useEffect, useState } from "react";
import { apiUrl } from "../../constants/api";
import { styles } from "../../pages/TrangCh1";
import { makeUploadImage } from "../../utils/upload";
import { set } from "lodash";

export const QLTS = () => {
  const [listUni, setListUni] = useState([]);
  const [listUniSelected, setListUniSelected] = useState([]);
  console.log("listUniSelected: ", listUniSelected);
  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [uniDelete, setUniDelete] = useState(null);
  const [page, setPage] = useState(1);
  const [isShowModalAdd, setIsShowModalAdd] = useState(false);
  const [image, setImage] = useState("");
  const [uni, setUni] = useState("");
  const [universityPicked, setUniversityPicked] = useState(null);
  const [screen, setScreen] = useState("qlts");

  useEffect(() => {
    getListUni();
  }, []);

  const getListUni = () => {
    axios.get(`${apiUrl}/list_uni`).then((res) => {
      let listUni = res.data.data;
      setListUni(listUni);
    });
  };

  const toggleModalDelete = () => {
    if (isShowModalDelete) {
      setUniDelete(null);
    }
    setIsShowModalDelete(!isShowModalDelete);
  };

  const toggleModalAddNew = () => {
    axios
      .post(`${apiUrl}/create_uni`, {
        universityName: uni,
        image: image,
      })
      .then((res) => {
        console.log("res: ", res);
        getListUni();
        setIsShowModalAdd(false);
      })
      .catch((err) => {
        console.log("err: ", err);
        setIsShowModalAdd(false);
      });
  };

  const deleteUni = () => {
    if (!!uniDelete) {
      axios
        .post(`${apiUrl}/delete_uni`, { id: uniDelete.id })
        .then((res) => {
          getListUni();
          toggleModalDelete();
        })
        .catch((err) => {
          console.log("err: ", err);
          toggleModalDelete();
        });
    } else {
      if (listUniSelected.length > 0) {
        axios
          .post(`${apiUrl}/delete_uni`, {
            id: listUniSelected,
          })
          .then((res) => {
            getListUni();
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
    <>
      {screen === "qlts" ? (
        <div className="frame-parent1173">
          <div className="frame-parent1840">
            <div className="thng-tin-cc-trng-i-hc-parent22">
              {/* <div className="thng-tin-cc24">Thông tin các trường Đại học</div> */}
              <div className="danh-sch-nguyn20_title">
                Thông tin các trường Đại học
              </div>
              <div className="iconoutlinedapplicationbell-wrapper60">
                <img
                  className="iconoutlinedapplicationbell62"
                  alt=""
                  src="./iconoutlinedapplicationbell1.svg"
                />
              </div>
            </div>
            <div className="frame-parent1841">
              <div className="frame-parent1842">
                <div className="frame-parent1843">
                  <div className="id-user-parent14">
                    <div className="id-user16">#ID User</div>
                    <div className="tn-ngi-ng9">Tên người đăng tải</div>
                  </div>
                  <div className="tn-trng-i45">Tên trường Đại học</div>
                  <div className="trng-thi15">Trạng thái</div>
                  <div className="hnh-ng20">Hành động</div>
                </div>
                <div className="frame-parent1844">
                  <div className="hng-c-chn-parent18">
                    <div className="hng-c-chn20">
                      *{listUniSelected.length} hàng được chọn
                    </div>
                    <div
                      onClick={() => {
                        setIsShowModalAdd(true);
                      }}
                      style={styles.button}
                      className="thm-trng-parent7"
                    >
                      <div className="thng-tin-cc24">Thêm trường</div>
                      <img
                        className="iconoutlinedsuggestedplus56"
                        alt=""
                        src="./iconoutlinedsuggestedplus1.svg"
                      />
                    </div>
                  </div>
                  <div className="frame-parent1845">
                    {listUni
                      .slice((page - 1) * 10, page * 10)
                      .map((item, index) => {
                        return (
                          <div key={index} className="frame-parent1846">
                            <div className="checkmark-square-parent220">
                              <img
                                className="checkmark-square-icon222"
                                alt=""
                                onClick={() => {
                                  if (listUniSelected.includes(item.id)) {
                                    setListUniSelected(
                                      listUniSelected.filter(
                                        (i) => i !== item.id
                                      )
                                    );
                                  } else {
                                    setListUniSelected([
                                      ...listUniSelected,
                                      item.id,
                                    ]);
                                  }
                                }}
                                style={styles.button}
                                src={
                                  listUniSelected.includes(item.id)
                                    ? "./checkmark-square2.svg"
                                    : "./checkmark-square11.svg"
                                }
                              />
                              <div className="div416">
                                #{(page - 1) * 10 + index + 1}
                              </div>
                              <div className="rectangle-parent613">
                                <img
                                  className="frame-child1086"
                                  alt=""
                                  src="./rectangle-486@2x.png"
                                />
                                <div className="nguyn-vn-a190">
                                  Nguyễn Văn A
                                </div>
                              </div>
                            </div>
                            <div
                              onClick={() => {
                                setUniversityPicked(item);
                                setScreen("detail");
                              }}
                              style={styles.button}
                              className="rectangle-parent614"
                            >
                              <img
                                className="frame-child1086"
                                alt=""
                                src={item?.image || "./rectangle-48311@2x.png"}
                              />
                              <div className="i-hc-bch21">
                                {item?.universityName || ""}
                              </div>
                            </div>
                            <div className="hon-thnh63">Hoàn thành</div>
                            <div className="frame-wrapper406">
                              <div
                                onClick={() => {
                                  setUniDelete(item);
                                  toggleModalDelete();
                                }}
                                style={styles.button}
                                className="iconoutlinededitordelete-wrapper179"
                              >
                                <img
                                  className="iconoutlinededitordelete181"
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
              <div className="frame-parent1855">
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
                    page === 1
                      ? "vuesaxlineararrow-left-parent7"
                      : "tip-tc-parent16"
                  }
                >
                  <img
                    className="vuesaxlineararrow-left-icon21"
                    alt=""
                    src="./vuesaxlineararrowleft11.svg"
                  />
                  <div className="hng-c-chn20">Quay lại</div>
                </div>
                <div className="trang-1-trn21">
                  {" "}
                  Trang {page} trên {Math.ceil(listUni.length / 10)}
                </div>
                <div
                  onClick={() => {
                    if (page < listUni.length / 10) {
                      setPage(page + 1);
                      //scroll to top
                      window.scrollTo(0, 0);
                    }
                  }}
                  style={styles.button}
                  className={
                    page >= listUni.length / 10
                      ? "vuesaxlineararrow-left-parent7"
                      : "tip-tc-parent16"
                  }
                >
                  <div className="hng-c-chn20">Tiếp tục</div>
                  <img
                    className="vuesaxlineararrow-left-icon21"
                    alt=""
                    src="./vuesaxlineararrowright71.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="xc-nhn-wrapper29">
            <div className="thng-tin-cc24">Xác nhận</div>
          </div>
          {isShowModalDelete && (
            <ModalDelete
              toggleModalDelete={toggleModalDelete}
              deleteUni={deleteUni}
            />
          )}
          {isShowModalAdd && (
            <ModalAddNew
              setIsShowModalAdd={setIsShowModalAdd}
              toggleModalAddNew={toggleModalAddNew}
              image={image}
              setImage={setImage}
              uni={uni}
              setUni={setUni}
            />
          )}
        </div>
      ) : (
        <ThongTinChiTiet
          universityPicked={universityPicked}
          setScreen={setScreen}
        />
      )}
    </>
  );
};

const ModalDelete = ({ toggleModalDelete, deleteUni }) => {
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
                deleteUni();
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

const ModalAddNew = ({
  setIsShowModalAdd,
  toggleModalAddNew,
  image,
  setImage,
  uni,
  setUni,
}) => {
  return (
    <div className="frame-parent1810">
      <div className="frame-wrapper393">
        <div className="frame-parent1811">
          <div className="frame-wrapper394">
            <div className="i-hc-ngoi-thng-c-s-h-n-frame">
              {/* <i className="i-hc-ngoi56">Đại học Ngoại thương (cơ sở Hà Nội)</i> */}
              <input
                className="i-hc-ngoi56"
                style={{
                  border: "none",
                  width: "100%",
                  outline: "none",
                  backgroundColor: "#fff",
                  boxShadow: "none",
                  fontSize: "14px",
                }}
                placeholder="Đại học Ngoại thương (cơ sở Hà Nội)"
                value={uni}
                onChange={(e) => {
                  setUni(e.target.value);
                }}
              ></input>
            </div>
          </div>
          <div className="frame-wrapper395">
            <div className="image-25-wrapper19">
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
              <label htmlFor="contained-button-file">
                {/* <div
                            style={styles.button}
                            className="browe-image-wrapper5"
                          >
                            <div className="quay-li13">Browe Image</div>
                          </div> */}
                <img
                  style={styles.button}
                  className="image-25-icon21"
                  alt=""
                  src={image || "./image-256@2x.png"}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent1812">
        <div
          onClick={() => {
            toggleModalAddNew(false);
          }}
          style={styles.button}
          className="hu-b-wrapper19"
        >
          <div className="thng-tin-cc22">Huỷ bỏ</div>
        </div>
        <div
          onClick={() => {
            toggleModalAddNew();
          }}
          style={styles.button}
          className="to-mi-container"
        >
          <div className="thng-tin-cc22">Tạo mới</div>
        </div>
      </div>
    </div>
  );
};

const ThongTinChiTiet = ({ universityPicked, setScreen }) => {
  console.log("universityPicked: ", universityPicked);
  return (
    <>
      <div className="frame-wrapper130">
        <div className="frame-wrapper126">
          <div className="frame-parent586">
            <div className="thng-tin-tuyn-sinh-parent8">
              <div
                onClick={() => {
                  setScreen("qlts");
                }}
                style={styles.button}
                className="thng-tin-tuyn10"
              >
                Thông tin tuyển sinh
              </div>
              <div className="xt-tuyn-i-hc-wrapper10">
                <div className="tng-quan11">Xét tuyển Đại học</div>
              </div>
              {/* <div className="nhm-tnh-cch-wrapper10">
                <div className="i-hc-ngoi40">Nhóm tính cách</div>
              </div> */}
            </div>
            <div className="iconoutlinedapplicationbell-wrapper15">
              <img
                className="iconoutlinedapplicationbell17"
                alt=""
                src="./iconoutlinedapplicationbell.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={"frame-parent2193"}>
        <div className="frame-parent271">
          <div className="frame-parent272">
            <div className="thng-tin-cc-trng-i-hc-parent7">
              <div className="thng-tin-cc9">Thông tin các trường Đại học</div>
              {/* <div className="vuesaxlinearsearch-normal-parent2">
                <img
                  className="vuesaxlinearsearch-normal-icon4"
                  alt=""
                  src="./vuesaxlinearsearchnormal.svg"
                />
                <i className="tm-kim4">Tìm kiếm...</i>
              </div> */}
            </div>
            <div className="frame-parent273">
              <div className="image-25-wrapper8">
                <img
                  className="image-25-icon10"
                  alt=""
                  src={
                    universityPicked?.image ||
                    "https://res.cloudinary.com/dw5j6ht9n/image/upload/v1690759386/Screenshot_38_pozegj.png"
                  }
                />
              </div>
              <div className="i-hc-ngoi-thng-c-s-h-n-parent2">
                <div className="i-hc-ngoi16">
                  {universityPicked?.universityName || "Đại học Bách Khoa"}
                </div>
                <div className="frame-parent274">
                  <div className="vuesaxlineartimer-parent7">
                    <img
                      className="vuesaxlinearsearch-normal-icon4"
                      alt=""
                      src="./vuesaxlineartimer.svg"
                    />
                    <div className="thng-mi-hai5">Tháng Mười Hai 5, 2022</div>
                  </div>
                  <div className="by-parent7">
                    <div className="thng-mi-hai5">by</div>
                    <div className="vuesaxlineartimer-parent7">
                      <img
                        className="vuesaxlinearsearch-normal-icon4"
                        alt=""
                        src="./vuesaxlinearprofile1.svg"
                      />
                      <div className="i-hc-ngoi16">User1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="thng-tin-cc-trng-i-hc-parent7">
              {universityPicked?.content.slice(0, -1).map((item, index) => {
                return (
                  <div key={index} className="thng-tin-cc-trng-i-hc-parent7">
                    <div className="thng-tin-cc9">{item.title}</div>
                    {item.content.map((item2, index2) => {
                      return (
                        <div key={index2} className="s-mng-ca3">
                          {item2}
                        </div>
                      );
                    })}
                  </div>
                );
              }) || null}
            </div>
          </div>
          <div className="frame-wrapper76">
            <div className="thng-tin-cc-trng-i-hc-parent7">
              <div className="thng-tin-cc9">
                {universityPicked?.content.slice(-1)[0].title ||
                  "Cơ sở vật chất"}
              </div>
              <div className="n-nm-2030-trng-i-hc-ngo-parent1">
                {universityPicked?.content
                  .slice(-1)[0]
                  .content.map((item, index) => {
                    return (
                      <div key={index} className="n-nm-20306">
                        {item}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="frame-parent272">
            <div className="thng-tin-cc9">Đào tạo</div>
            <div className="frame-parent276">
              <div className="nhm-ngnh-ngn-ng-vn-ho-parent1">
                <div className="nhm-ngnh-ngn4">
                  Nhóm ngành Ngôn ngữ - Vặn hoá - Tôn giáo:
                </div>
                <div className="nhm-ngnh-ngn-ng-vn-ho-parent1">
                  <div className="m-ngnh-parent10">
                    <div className="m-ngnh12">Mã ngành</div>
                    <div className="tn-ngnh12">Tên ngành</div>
                    <div className="khi-thi12">Khối thi</div>
                  </div>
                  <div className="frame-parent278">
                    <div className="nth04-parent1">
                      <div className="nth043">NTH04</div>
                      <div className="ngn-ng-anh4">Ngôn ngữ Anh</div>
                      <div className="d016">D01</div>
                    </div>
                    <div className="nth04-parent1">
                      <div className="nth043">NTH05</div>
                      <div className="ngn-ng-anh4">Ngôn ngữ Pháp</div>
                      <div className="d016">D01, D03</div>
                    </div>
                    <div className="nth04-parent1">
                      <div className="nth043">NTH06</div>
                      <div className="ngn-ng-anh4">Ngôn ngữ Trung Quốc</div>
                      <div className="d016">D01, D04</div>
                    </div>
                    <div className="nth04-parent1">
                      <div className="nth043">NTH07</div>
                      <div className="ngn-ng-anh4">Ngôn ngữ Nhật</div>
                      <div className="d016">D01, D06</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nhm-ngnh-ngn-ng-vn-ho-parent1">
                <div className="nhm-ngnh-ngn4">
                  Nhóm ngành Kinh tế - Quản lý:
                </div>
                <div className="nhm-ngnh-ngn-ng-vn-ho-parent1">
                  <div className="m-ngnh-parent10">
                    <div className="m-ngnh12">Mã ngành</div>
                    <div className="tn-ngnh12">Tên ngành</div>
                    <div className="khi-thi12">Khối thi</div>
                  </div>
                  <div className="frame-parent278">
                    <div className="nth04-parent1">
                      <div className="nth043">NTH01-02</div>
                      <div className="ngn-ng-anh4">Kinh tế quốc tế</div>
                      <div className="d016">{`A00, A01, D01, D03, D05, D06, D07 `}</div>
                    </div>
                    <div className="nth04-parent1">
                      <div className="nth043">NTH01-02</div>
                      <div className="ngn-ng-anh4">Kinh tế</div>
                      <div className="d016">
                        A00, A01, D01, D03, D05, D06, D07
                      </div>
                    </div>
                    <div className="nth04-parent1">
                      <div className="nth043">NTH02</div>
                      <div className="ngn-ng-anh4">Quản trị kinh doanh</div>
                      <div className="d016">
                        A00, A01, D01, D03, D05, D06, D07
                      </div>
                    </div>
                    <div className="nth04-parent1">
                      <div className="nth043">NTH02</div>
                      <div className="ngn-ng-anh4">Kinh doanh quốc tế</div>
                      <div className="d016">
                        A00, A01, D01, D03, D05, D06, D07
                      </div>
                    </div>
                    <div className="nth04-parent1">
                      <div className="nth043">NTH03</div>
                      <div className="ngn-ng-anh4">Kế toán</div>
                      <div className="d016">
                        A00, A01, D01, D03, D05, D06, D07
                      </div>
                    </div>
                    <div className="nth04-parent1">
                      <div className="nth043">NTH03</div>
                      <div className="ngn-ng-anh4">Tài chính - Ngân hàng</div>
                      <div className="d016">
                        A00, A01, D01, D03, D05, D06, D07
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nhm-ngnh-ngn-ng-vn-ho-parent1">
                <div className="nhm-ngnh-ngn4">Nhóm ngành Luật:</div>
                <div className="nhm-ngnh-ngn-ng-vn-ho-parent1">
                  <div className="m-ngnh-parent10">
                    <div className="m-ngnh12">Mã ngành</div>
                    <div className="tn-ngnh12">Tên ngành</div>
                    <div className="khi-thi12">Khối thi</div>
                  </div>
                  <div className="frame-wrapper77">
                    <div className="nth04-parent1">
                      <div className="nth043">NTH01-01</div>
                      <div className="ngn-ng-anh4">Luật</div>
                      <div className="d016">D01</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nhm-ngnh-ngn-ng-vn-ho-parent1">
                <div className="nhm-ngnh-ngn4">Nhóm ngành Du lịch</div>
                <div className="nhm-ngnh-ngn-ng-vn-ho-parent1">
                  <div className="m-ngnh-parent10">
                    <div className="m-ngnh12">Mã ngành</div>
                    <div className="tn-ngnh12">Tên ngành</div>
                    <div className="khi-thi12">Khối thi</div>
                  </div>
                  <div className="frame-wrapper77">
                    <div className="nth04-parent1">
                      <div className="nth043">NTH02</div>
                      <div className="ngn-ng-anh4">Quản trị khách sạn</div>
                      <div className="d016">
                        A00, A01, D01, D03, D05, D06, D07
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
