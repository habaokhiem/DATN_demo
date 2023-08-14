import { useEffect, useState } from "react";
import { styles } from "../../pages/TrangCh1";
import { listUniversityInformation } from "../../constants/listUniversity";
import axios from "axios";
import { apiUrl } from "../../constants/api";

export const ThongTinTuyenSinh = () => {
  const [isShowDinhHuong, setIsShowDinhHuong] = useState(false);
  const [isShowUniversity, setIsShowUniversity] = useState(false);
  const [isShowNganhNgheHot, setIsShowNganhNgheHot] = useState(false);
  const [tabActive, setTabActive] = useState(0);
  const [isShowMBTI, setIsShowMBTI] = useState(false);
  const [isShowCharacters, setIsShowCharacters] = useState(false);
  const [universityPicked, setUniversityPicked] = useState({});
  const [image, setImage] = useState("");
  const [listTinhCach, setListTinhCach] = useState([]);
  const [advantage, setAdvantage] = useState("");
  const [disadvantage, setDisadvantage] = useState("");
  const [profession, setProfession] = useState("");
  const [listUni, setListUni] = useState([]);
  const [page, setPage] = useState(1);
  console.log("listUni: ", listUni);
  const pickUniversity = (item) => {
    // const university = listUniversityInformation.find(
    //   (university) => university.id === universityID
    // );
    setUniversityPicked(item);
    setImage(image);
    window.scrollTo(0, 0);
    setTabActive(2);
  };

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
    <div>
      <div className="frame-wrapper173">
        <div className="frame-wrapper174">
          <div className="frame-parent777">
            <div className="gi-nguyn-vng-wrapper5">
              <div
                onClick={() => {
                  setTabActive(0);
                }}
                style={styles.button}
                className="gi-nguyn7"
              >
                Thông tin tuyển sinh
              </div>
            </div>
            <div className="iconoutlinedapplicationbell-wrapper23">
              <img
                className="vuesaxlinearhome-icon12"
                alt=""
                src="./iconoutlinedapplicationbell.svg"
              />
            </div>
          </div>
        </div>
      </div>
      {tabActive === 0 && (
        <div className={"frame-parent778"}>
          <div className="frame-parent2244">
            <div className="nhm-ngnh-my-tnh-group">
              {listUni.slice((page - 1) * 10, page * 10).map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      pickUniversity(item);
                    }}
                    className="frame-parent2246"
                  >
                    <div className="image-25-wrapper28">
                      <img
                        className="image-25-icon30"
                        alt=""
                        src={item?.image || "./rectangle-48311@2x.png"}
                      />
                    </div>
                    <div className="i-hc-cng-nghip-h-ni-group">
                      <div className="i-hc-bch22">
                        {item?.universityName || ""}
                      </div>
                      <div className="frame-parent2247">
                        <div className="vuesaxlineartimer-parent26">
                          <img
                            className="vuesaxlineararrow-right-icon95"
                            alt=""
                            src="./vuesaxlineartimer.svg"
                          />
                          <div className="tt-c41">Tháng Mười Hai 9, 2022</div>
                        </div>
                        <div className="by-parent26">
                          <div className="tt-c41">by</div>
                          <div className="vuesaxlineartimer-parent26">
                            <img
                              className="vuesaxlineararrow-right-icon95"
                              alt=""
                              src="./vuesaxlinearprofile.svg"
                            />
                            <div className="nhm-tnh-cch29">User1</div>
                          </div>
                        </div>
                      </div>
                      <div className="tng-quan-i1">
                        TỔNG QUAN {item?.content[0]?.content[0] || ""}
                      </div>
                    </div>
                  </div>
                );
              })}
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
      )}
      {tabActive === 2 && (
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
                    {universityPicked?.universityName || ""}
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
                {universityPicked?.content.map((item, index) => {
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
            {/* <div className="frame-wrapper76">
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
            </div> */}
            <div
              style={{ overflow: "scroll", height: "3500px" }}
              className="frame-parent272"
            >
              <div className="thng-tin-cc9">Đào tạo</div>
              <div className="frame-parent276">
                {universityPicked?.daoTao?.map((item, index) => {
                  return (
                    <div key={index} className="nhm-ngnh-ngn-ng-vn-ho-parent1">
                      <div className="nhm-ngnh-ngn4">
                        {item?.nhomNganh || ""}
                      </div>
                      <div className="nhm-ngnh-ngn-ng-vn-ho-parent1">
                        <div className="m-ngnh-parent10">
                          <div className="m-ngnh12">Mã ngành</div>
                          <div className="tn-ngnh12">Tên ngành</div>
                          <div className="khi-thi12">Khối thi</div>
                        </div>
                        <div className="frame-parent278">
                          {item?.listNganh?.map((item2, index2) => {
                            return (
                              <div key={index2} className="nth04-parent1">
                                <div className="nth043">
                                  {item2?.maNganh || ""}
                                </div>
                                <div className="ngn-ng-anh4">
                                  {item2?.tenNganh || ""}
                                </div>
                                <div className="d016">
                                  {item2?.khoiThi || ""}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
