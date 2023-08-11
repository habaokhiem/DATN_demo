import { useEffect, useState } from "react";
import { styles } from "../../pages/TrangCh1";
import axios from "axios";
import { apiUrl } from "../../constants/api";
import { listUniversityInformation } from "../../constants/listUniversity";
import { listTop7Career } from "../../constants/listTop7Career";
export const Home = ({
  goToDetailUniversity,
  goToNhomTinhCach,
  goToLoginScreen,
  user,
}) => {
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

  const pickUniversity = (universityID, image) => {
    const university = listUniversityInformation.find(
      (university) => university.id === universityID
    );
    setUniversityPicked(university);
    setImage(image);
    window.scrollTo(0, 0);
    setTabActive(2);
  };

  useEffect(() => {
    if (!!user) {
      //get personality
      axios
        .get(`${apiUrl}/personality/${user.id}`)
        .then((res) => {
          let userUpdate = user;
          if (res.data.data[0].personality) {
            userUpdate.personality = res.data.data[0]?.personality || null;
            userUpdate.percentType1 = res.data.data[0]?.percentType1 || null;
            userUpdate.percentType2 = res.data.data[0]?.percentType2 || null;
            userUpdate.percentType3 = res.data.data[0]?.percentType3 || null;
            userUpdate.percentType4 = res.data.data[0]?.percentType4 || null;
            userUpdate.percentType5 = res.data.data[0]?.percentType5 || null;
            localStorage.setItem("user", JSON.stringify(userUpdate));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  useEffect(() => {
    if (!!user) {
      //get list tinh_cach
      axios.get(`${apiUrl}/tinh_cach`).then((res) => {
        const { data } = res.data;
        //find list tinh cach

        const userTinhCach = data.find(
          (tinhCach) =>
            tinhCach.tinh_cach === user.personality?.slice(0, 4) || null
        );
        setAdvantage(userTinhCach?.advantages || "");
        setDisadvantage(userTinhCach?.disadvantages || "");
        setProfession(userTinhCach?.profession || "");
      });
    }
  }, [user]);

  return (
    <div style={{ position: "absolute" }}>
      <div className="frame-parent2193">
        <div className="byewind-parent404">
          <div className="frame-parent2194">
            <div className="trang-ch-parent4">
              <div className="trang-ch6">Trang chủ</div>
              {tabActive !== 1 ? (
                <div style={styles.button} className="xt-tuyn-i-hc-wrapper22">
                  <div className="xt-tuyn-i24">Xét tuyển Đại học</div>
                </div>
              ) : (
                <div
                  style={styles.button}
                  onClick={() => {
                    setTabActive(0);
                  }}
                  className="xt-tuyn-i-hc-wrapper21"
                >
                  <div className="khm-ph">Xét tuyển Đại học</div>
                </div>
              )}
              {tabActive === 1 ? (
                <div className="nhm-tnh-cch-wrapper21">
                  <div className="lm-kho-st">Nhóm tính cách</div>
                </div>
              ) : (
                <div
                  onClick={() => {
                    // goToNhomTinhCach();
                    setTabActive(1);
                  }}
                  style={styles.button}
                  className="nhm-tnh-cch-wrapper22"
                >
                  <div className="nhm-tnh-cch29">Nhóm tính cách</div>
                </div>
              )}
            </div>
            <div
              style={styles.button}
              className="iconoutlinedapplicationbell-wrapper70"
            >
              <img
                className="vuesaxlinearhome-icon25"
                alt=""
                src="./iconoutlinedapplicationbell.svg"
              />
            </div>
          </div>
        </div>
        {tabActive === 0 && (
          <div
            style={
              {
                // overFlowY: "scroll",
                // height: "560px",
                // backgroundColor: "red",
              }
            }
            className="frame-parent2195"
          >
            <div className="frame-parent2196">
              <div className="tm-hiu-group">
                <b className="nhm-tnh-cch29">{`Tìm hiểu `}</b>
                <div className="nhm-tnh-cch29">
                  Nhóm các nhóm ngành hiện nay
                </div>
              </div>
              <div className="tm-hiu-thm-container2">
                <p className="tm-hiu-thm3">{`Tìm hiểu thêm về nhóm tính cách của bản thân và tham khảo `}</p>
                <p className="tm-hiu-thm3">
                  các nguyện vọng đăng ký phù hợp cùng chúng tôi.
                </p>
              </div>
            </div>
            {!user && (
              <div className="frame-parent2197">
                <div
                  onClick={() => {
                    goToLoginScreen();
                  }}
                  style={styles.button}
                  className="ng-nhp-wrapper6"
                >
                  <div className="xt-tuyn-i24">Đăng nhập</div>
                </div>
                <div style={styles.button} className="tm-hiu-thm-frame">
                  <div className="xt-tuyn-i24">Tìm hiểu thêm</div>
                </div>
              </div>
            )}
          </div>
        )}{" "}
        {tabActive === 1 && (
          <div className="frame-parent2152">
            <div className="frame-parent2153">
              <div className="khm-ph-parent">
                <b className="khm-ph">{`Khám phá `}</b>
                <div className="khm-ph">Nhóm tính cách của bản thân</div>
              </div>
              <div className="tm-hiu-thm-container1">
                <p className="tm-hiu-thm2">{`Tìm hiểu thêm về nhóm tính cách của bản thân và tham khảo `}</p>
                <p className="tm-hiu-thm2">
                  các nguyện vọng đăng ký phù hợp cùng chúng tôi.
                </p>
              </div>
            </div>
            {!user && (
              <div className="frame-parent2154">
                <div
                  onClick={() => {
                    goToLoginScreen();
                  }}
                  style={styles.button}
                  className="ng-nhp-wrapper5"
                >
                  <div className="lm-kho-st">Đăng nhập</div>
                </div>
                <div className="lm-kho-st-wrapper">
                  <div className="lm-kho-st">Làm khảo sát</div>
                </div>
              </div>
            )}
          </div>
        )}
        {tabActive === 2 && (
          <div className="frame-parent271">
            <div className="frame-parent272">
              <div className="thng-tin-cc-trng-i-hc-parent7">
                <div className="thng-tin-cc9">Thông tin các trường Đại học</div>
                <div className="vuesaxlinearsearch-normal-parent2">
                  <img
                    className="vuesaxlinearsearch-normal-icon4"
                    alt=""
                    src="./vuesaxlinearsearchnormal.svg"
                  />
                  <i className="tm-kim4">Tìm kiếm...</i>
                </div>
              </div>
              <div className="frame-parent273">
                <div className="image-25-wrapper8">
                  <img className="image-25-icon10" alt="" src={image} />
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
        )}
      </div>
      {tabActive === 0 && (
        <div className="frame-parent2198">
          <div className="frame-parent2199">
            <div className="nh-hng-ngh-nghip-l-g-group">
              <div className="xt-tuyn-i24">Định hướng nghề nghiệp là gì?</div>
              <div
                style={styles.button}
                onClick={() => {
                  setIsShowDinhHuong(!isShowDinhHuong);
                }}
                className="xem-chi-tit1"
              >
                {isShowDinhHuong ? "Thu gọn" : "Xem chi tiết"}
              </div>
            </div>

            {isShowDinhHuong && (
              <div className="nh-hng-ngh-nghip-l-mt-tr-group">
                <div className="nh-hng-ngh3">
                  Định hướng nghề nghiệp là một trong những điều rất quan trọng
                  đối với các bạn trẻ. Ai trong số chúng ta cũng mong muốn kiếm
                  cho mình được công việc phù hợp với đam mê, đúng chuyên ngành
                  đang học, không chỉ vậy, thu nhập cũng phải ổn định.
                </div>
                <div className="nh-hng-ngh3">
                  Tuy nhiên, nếu biết nắm bắt làm các ngành nghề phù hợp với xu
                  hướng hiện tại, bạn sẽ có nhiều cơ hội mở rộng hơn để phát
                  triển bản thân hơn.
                </div>
              </div>
            )}
          </div>
          <div className="frame-parent2200">
            <div className="nh-hng-ngh-nghip-l-g-group">
              <div className="xt-tuyn-i24">Top 7 ngành nghề “Hot” hiện nay</div>
              <div
                style={styles.button}
                onClick={() => {
                  setIsShowNganhNgheHot(!isShowNganhNgheHot);
                }}
                className="xem-chi-tit2"
              >
                {isShowNganhNgheHot ? "Thu gọn" : "Xem chi tiết"}
              </div>
            </div>
            {isShowNganhNgheHot && (
              <div className="frame-parent2201">
                {listTop7Career.map((item, index) => {
                  return (
                    <div key={index} className="nhm-ngnh-my-tnh-group">
                      <div className="xt-tuyn-i24">{item.nameCareer}</div>
                      <div className="frame-parent2202">
                        <div className="frame-parent2203">
                          <img
                            className="frame-child1306"
                            alt=""
                            src={item.listCareer[0].image}
                          />
                          <div className="text433">
                            {item.listCareer[0].name}
                          </div>
                        </div>
                        <div className="frame-parent2204">
                          {item.listCareer.slice(1).map((item2, index2) => {
                            return (
                              <div key={index2} className="frame-parent2203">
                                <img
                                  className="frame-child1307"
                                  alt=""
                                  src={item2.image}
                                />
                                <div className="text433">{item2.name}</div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="frame-parent2242">
            <div className="nhm-ngnh-my-tnh-group">
              <div className="thng-tin-cc-trng-i-hc-parent31">
                <div className="xt-tuyn-i24">Thông tin các trường Đại học</div>
                <div
                  style={styles.button}
                  onClick={() => {
                    setIsShowUniversity(!isShowUniversity);
                  }}
                  className="xem-chi-tit2"
                >
                  {isShowUniversity ? "Thu gọn" : "Xem chi tiết"}
                </div>
              </div>
              {isShowUniversity && (
                <div className="vuesaxlinearsearch-normal-parent23">
                  <img
                    className="vuesaxlineararrow-right-icon95"
                    alt=""
                    src="./vuesaxlinearsearchnormal.svg"
                  />
                  <i className="tm-kim26">Tìm kiếm...</i>
                </div>
              )}
            </div>
            {isShowUniversity && (
              <div className="frame-parent2244">
                <div className="nhm-ngnh-my-tnh-group">
                  <div
                    onClick={() => {
                      pickUniversity(0, "./image-25@2x.png");
                    }}
                    className="frame-parent2246"
                  >
                    <div className="image-25-wrapper28">
                      <img
                        className="image-25-icon30"
                        alt=""
                        src="./image-25@2x.png"
                      />
                    </div>
                    <div className="i-hc-cng-nghip-h-ni-group">
                      <div className="i-hc-bch22">Đại học Bách Khoa Hà Nội</div>
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
                        TỔNG QUAN Đại học Bách khoa Hà Nội là trường đại học đa
                        ngành về kỹ thuật được thành lập ở Hà Nội ngày 15 tháng
                        10 năm 1956. Trường luôn là một trong những trường đại
                        học kỹ thuật hàng đầu của nền giáo dục Việt Nam với bề
                        dày lịch sử. Với nhiều đóng góp cho công cuộc xây dựng
                        và bảo vệ Tổ quốc, Trường đã được Đảng và Nhà nước tặng
                        nhiều danh hiệu và phần thưởng quý giá cho các cá nhân
                        [...]
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      pickUniversity(2, "./image-251@2x.png");
                    }}
                    className="frame-parent2246"
                  >
                    <div className="image-25-wrapper28">
                      <img
                        className="image-25-icon30"
                        alt=""
                        src="./image-251@2x.png"
                      />
                    </div>
                    <div className="i-hc-cng-nghip-h-ni-group">
                      <div className="i-hc-bch22">
                        Đại học Ngoại thương (cơ sở Hà Nội)
                      </div>
                      <div className="frame-parent2247">
                        <div className="vuesaxlineartimer-parent26">
                          <img
                            className="vuesaxlineararrow-right-icon95"
                            alt=""
                            src="./vuesaxlineartimer.svg"
                          />
                          <div className="tt-c41">Tháng Mười Hai 5, 2022</div>
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
                        TỔNG QUAN Trường Đại học Kinh tế Tài chính Thành phố Hồ
                        Chí Minh (University of Economics and Finance – UEF)
                        thành lập ngày 24 tháng 9 năm 2007 theo quyết định số
                        1272/QĐ-TTg của Thủ tướng chính phủ. UEF theo đuổi mục
                        tiêu là đại học hàng đầu Việt Nam và hướng tới chuẩn […]
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      pickUniversity(1, "./image-252@2x.png");
                    }}
                    className="frame-parent2246"
                  >
                    <div className="image-25-wrapper28">
                      <img
                        className="image-25-icon30"
                        alt=""
                        src="./image-252@2x.png"
                      />
                    </div>
                    <div className="i-hc-cng-nghip-h-ni-group">
                      <div className="i-hc-bch22">Đại học Kinh tế Quốc dân</div>
                      <div className="frame-parent2247">
                        <div className="vuesaxlineartimer-parent26">
                          <img
                            className="vuesaxlineararrow-right-icon95"
                            alt=""
                            src="./vuesaxlineartimer.svg"
                          />
                          <div className="tt-c41">Tháng Mười Một 28, 2022</div>
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
                        TỔNG QUAN Trường Đại học Kinh tế Quốc dân được thành lập
                        theo Nghị định số 678-TTg ngày 25 tháng 1 năm 1956 với
                        tên gọi ban đầu là Trường Kinh tế Tài chính. Lúc đó,
                        Trường được đặt trong hệ thống Đại học nhân dân Việt Nam
                        trực thuộc Thủ tướng Chính phủ. […]
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      pickUniversity(20, "./image-253@2x.png");
                    }}
                    className="frame-parent2246"
                  >
                    <div className="image-25-wrapper28">
                      <img
                        className="image-25-icon30"
                        alt=""
                        src="./image-253@2x.png"
                      />
                    </div>
                    <div className="i-hc-cng-nghip-h-ni-group">
                      <div className="i-hc-bch22">
                        Đại học Công nghiệp Hà Nội
                      </div>
                      <div className="frame-parent2247">
                        <div className="vuesaxlineartimer-parent26">
                          <img
                            className="vuesaxlineararrow-right-icon95"
                            alt=""
                            src="./vuesaxlineartimer.svg"
                          />
                          <div className="tt-c41">Tháng Mười Một 28, 2022</div>
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
                        TỔNG QUAN Trường Đại học Công nghiệp Hà Nội là trường
                        đại học trực thuộc Bộ Công Thương được thành lập ngày 2
                        tháng 12 năm 2005 trên cơ sở nâng cấp trường Cao đẳng
                        Công nghiệp Hà Nội. Trường Cao đẳng Công nghiệp Hà Nội
                        được thành lập năm 1999 trên cơ sở nâng […]
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      pickUniversity(22, "./image-254@2x.png");
                    }}
                    className="frame-parent2246"
                  >
                    <div className="image-25-wrapper28">
                      <img
                        className="image-25-icon30"
                        alt=""
                        src="./image-254@2x.png"
                      />
                    </div>
                    <div className="i-hc-cng-nghip-h-ni-group">
                      <div className="i-hc-bch22">Đại học Công đoàn</div>
                      <div className="frame-parent2247">
                        <div className="vuesaxlineartimer-parent26">
                          <img
                            className="vuesaxlineararrow-right-icon95"
                            alt=""
                            src="./vuesaxlineartimer.svg"
                          />
                          <div className="tt-c41">Tháng Mười Một 28, 2022</div>
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
                        TỔNG QUAN Ngày 19/05/1992, Trường Cao cấp Công đoàn được
                        đổi tên thành Trường Đại học Công đoàn. Trường Đại học
                        Công đoàn là trường đại học đa ngành, đa cấp trực thuộc
                        Tổng Liên đoàn Lao động Việt Nam và chịu sự quản lý về
                        chuyên môn của Bộ Giáo dục – Đào tạo. […]
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      pickUniversity(14, "./image-255@2x.png");
                    }}
                    className="frame-parent2246"
                  >
                    <div className="image-25-wrapper28">
                      <img
                        className="image-25-icon30"
                        alt=""
                        src="./image-255@2x.png"
                      />
                    </div>
                    <div className="i-hc-cng-nghip-h-ni-group">
                      <div className="i-hc-bch22">
                        Đại học Tài chính Ngân hàng Hà Nội
                      </div>
                      <div className="frame-parent2247">
                        <div className="vuesaxlineartimer-parent26">
                          <img
                            className="vuesaxlineararrow-right-icon95"
                            alt=""
                            src="./vuesaxlineartimer.svg"
                          />
                          <div className="tt-c41">Tháng Mười Một 23, 2022</div>
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
                        TỔNG QUAN Trường Đại học Tài chính – Ngân hàng Hà Nội;
                        hoạt động theo quy chế trường đại học tư thục, được
                        thành lập theoQuyết định số 2336/2010/QĐ-TTg ngày 21
                        tháng 12 năm 2010 của Thủ tướng Chính phủ. Trường Đại
                        học Tài chính-Ngân hàng Hà Nội đã chính thức đi vào hoạt
                        động […]
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-parent2258">
                  <div
                    style={styles.button}
                    className="vuesaxlineararrow-left-parent20"
                  >
                    <img
                      className="vuesaxlineararrow-left-icon22"
                      alt=""
                      src="./vuesaxlineararrowleft.svg"
                    />
                    <div className="tt-c41">Quay lại</div>
                  </div>
                  <div className="trang-1-trn22">Trang 1 trên 10</div>
                  <div style={styles.button} className="tip-tc-parent29">
                    <div className="tt-c41">Tiếp tục</div>
                    <img
                      className="vuesaxlineararrow-left-icon22"
                      alt=""
                      src="/arrow-right.svg"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}{" "}
      {tabActive === 1 && (
        <div className="frame-parent2155">
          <div className="frame-parent2156">
            <div className="mbti-l-g-parent">
              <div className="lm-kho-st">MBTI là gì?</div>
              <div
                style={styles.button}
                onClick={() => {
                  setIsShowMBTI(!isShowMBTI);
                }}
                className="bn-phi-thc"
              >
                {isShowMBTI ? "Thu gọn" : "Xem chi tiết"}
              </div>
            </div>
            {isShowMBTI && (
              <div className="myers-briggs-type-indicator-m-parent">
                <div className="myers-briggs-type-indicator">
                  Myers-Briggs Type Indicator (MBTI) là một báo cáo tự đánh giá
                  được thiết kế để xác định loại tính cách, điểm mạnh, điểm yếu
                  và sở thích của một người.
                </div>
                <div className="myers-briggs-type-indicator">
                  Công cụ MBTI được phát triển bởi Katharine Cook Briggs và đứa
                  con gái duy nhất của bà là Isabel Briggs Myers vào năm 1942
                  dựa trên các lý thuyết do bác sĩ tâm lý người Thụy Sĩ Carl
                  Jung khởi xướng trong công trình nghiên cứu “Psychological
                  Types” của ông.
                </div>
                <div className="myers-briggs-type-indicator">
                  Về lý thuyết của Carl Jung về các loại tâm lý, ông cho rằng
                  tình cách của con người được hình thành dựa trên sự tồn tại
                  của 4 chức năng tâm lý thiết yếu: Chức năng phán đoán (suy
                  nghĩ và cảm giác) và chức năng nhận thức (cảm giác và trực
                  giác). Kế thừa điều này, Katharine Cook Briggs và Isabel
                  Briggs Myers đã phân loại tính cách dựa trên 4 tiêu chí gồm:
                </div>
                <div className="ni-bn-tp-container">
                  <ul className="ni-bn-tp-trung-s-ch-h">
                    <li className="ni-bn-tp">
                      Nơi bạn tập trung sự chú ý - Hướng ngoại (Extraversion)
                      hoặc Hướng nội (Introversion);
                    </li>
                    <li className="ni-bn-tp">
                      Cách bạn tiếp nhận thông tin - Cảm giác (Sensing) hoặc
                      Trực giác (iNtuition);
                    </li>
                    <li className="ni-bn-tp">
                      Cách bạn đưa ra quyết định - Lý trí (Thinking) hoặc Cảm
                      xúc (Feeling);
                    </li>
                    <li>
                      Cách bạn đối mặt với thế giới - Nguyên tắc (Judging) hoặc
                      Nhận thức (Perceiving).
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className="frame-parent2157">
            <div className="mbti-l-g-parent">
              <div className="lm-kho-st">16 nhóm tính cách</div>
              <div
                style={styles.button}
                onClick={() => {
                  setIsShowCharacters(!isShowCharacters);
                }}
                className="bn-phi-thc"
              >
                {isShowCharacters ? "Thu gọn" : "Xem chi tiết"}
              </div>
            </div>
            {isShowCharacters && (
              <div className="frame-parent2158">
                <div className="frame-parent2159">
                  <div className="image-9-container">
                    <img
                      className="image-10-icon"
                      alt=""
                      src="./image-91@2x.png"
                    />
                    <div className="architect">Architect</div>
                    <div className="architect">INTJ</div>
                  </div>
                  <div className="image-9-container">
                    <img
                      className="image-10-icon"
                      alt=""
                      src="./image-10@2x.png"
                    />
                    <div className="architect">Logician</div>
                    <div className="architect">INTP</div>
                  </div>
                  <div className="image-9-container">
                    <img
                      className="image-10-icon"
                      alt=""
                      src="./image-11@2x.png"
                    />
                    <div className="architect">Commander</div>
                    <div className="architect">ENTJ</div>
                  </div>
                  <div className="image-9-container">
                    <img
                      className="image-10-icon"
                      alt=""
                      src="./image-12@2x.png"
                    />
                    <div className="architect">Debater</div>
                    <div className="architect">ENTP</div>
                  </div>
                </div>
                <div className="frame-parent2159">
                  <div className="image-9-container">
                    <img
                      className="image-10-icon"
                      alt=""
                      src="./image-13@2x.png"
                    />
                    <div className="architect">Advocate</div>
                    <div className="architect">INFJ</div>
                  </div>
                  <div className="image-9-container">
                    <img
                      className="image-10-icon"
                      alt=""
                      src="./image-14@2x.png"
                    />
                    <div className="architect">Mediator</div>
                    <div className="architect">INFP</div>
                  </div>
                  <div className="image-9-container">
                    <img
                      className="image-10-icon"
                      alt=""
                      src="./image-15@2x.png"
                    />
                    <div className="architect">Protagonist</div>
                    <div className="architect">ENFJ</div>
                  </div>
                  <div className="image-9-container">
                    <img
                      className="image-10-icon"
                      alt=""
                      src="./image-16@2x.png"
                    />
                    <div className="architect">Campaigner</div>
                    <div className="architect">ENFP</div>
                  </div>
                </div>
                <div className="frame-parent2159">
                  <div className="image-9-container">
                    <img
                      className="image-10-icon"
                      alt=""
                      src="./image-17@2x.png"
                    />
                    <div className="architect">Logistician</div>
                    <div className="architect">ISTJ</div>
                  </div>
                  <div className="image-9-container">
                    <img
                      className="image-10-icon"
                      alt=""
                      src="./image-18@2x.png"
                    />
                    <div className="architect">Defender</div>
                    <div className="architect">ISFJ</div>
                  </div>
                  <div className="image-9-container">
                    <img
                      className="image-10-icon"
                      alt=""
                      src="./image-19@2x.png"
                    />
                    <div className="architect">Excutive</div>
                    <div className="architect">ESTJ</div>
                  </div>
                  <div className="image-9-container">
                    <img
                      className="image-20-icon"
                      alt=""
                      src="./image-20@2x.png"
                    />
                    <div className="architect">Consul</div>
                    <div className="architect">ESFJ</div>
                  </div>
                </div>
                <div className="frame-parent2162">
                  <div className="image-9-container">
                    <img
                      className="image-10-icon"
                      alt=""
                      src="./image-21@2x.png"
                    />
                    <div className="architect">Virtuoso</div>
                    <div className="architect">ISTP</div>
                  </div>
                  <div className="image-9-container">
                    <img
                      className="image-10-icon"
                      alt=""
                      src="./image-22@2x.png"
                    />
                    <div className="architect">Adventurer</div>
                    <div className="architect">ISFP</div>
                  </div>
                  <div className="image-9-container">
                    <img
                      className="image-10-icon"
                      alt=""
                      src="./image-23@2x.png"
                    />
                    <div className="architect">Entrepreneur</div>
                    <div className="architect">ESTP</div>
                  </div>
                  <div className="image-9-container">
                    <img
                      className="image-10-icon"
                      alt=""
                      src="./image-24@2x.png"
                    />
                    <div className="architect">Entertainer</div>
                    <div className="architect">ESFP</div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {user?.personality ? (
            <div className="thng-tin-chi-tit-nhm-tnh-c-parent">
              <div className="lm-kho-st">Thông tin chi tiết nhóm tính cách</div>
              <div className="frame-parent2163">
                <div className={"myers-briggs-type-indicator"}>
                  <div className="lm-kho-st">Ưu điểm</div>

                  <div style={{ fontSize: 24, marginRight: 12, width: "95%" }}>
                    {advantage}
                  </div>
                </div>
              </div>
              <div className="frame-parent2163">
                <div className={"myers-briggs-type-indicator"}>
                  <div className="lm-kho-st">Nhược điểm</div>

                  <div style={{ fontSize: 24, marginRight: 12, width: "95%" }}>
                    {disadvantage}
                  </div>
                </div>
              </div>
              <div className="frame-parent2163">
                <div className={"myers-briggs-type-indicator"}>
                  <div className="lm-kho-st">Các ngành phù hợp</div>

                  <div style={{ fontSize: 24, marginRight: 12 }}>
                    {profession
                      .split(",")
                      .join(".")
                      .split(".")
                      .map((item, index) => (
                        <div key={index} className="ngnh-lut2">
                          {item}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="thng-tin-chi-tit-nhm-tnh-c-parent">
              <div className="lm-kho-st">Thông tin chi tiết nhóm tính cách</div>
              <div className="frame-parent2163">
                <div className="mbti-l-g-parent">
                  <div className="lm-kho-st">Ưu điểm</div>

                  <i className="bn-phi-thc">
                    Bạn phải thực hiện khảo sát tính cách.
                  </i>
                </div>
              </div>
              <div className="frame-parent2163">
                <div className="mbti-l-g-parent">
                  <div className="lm-kho-st">Nhược điểm</div>

                  <i className="bn-phi-thc">
                    Bạn phải thực hiện khảo sát tính cách.
                  </i>
                </div>
              </div>
              <div className="frame-parent2163">
                <div className="mbti-l-g-parent">
                  <div className="lm-kho-st">Các ngành phù hợp</div>

                  <i className="bn-phi-thc">
                    Bạn phải thực hiện khảo sát tính cách.
                  </i>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
