import { useState } from "react";
import { styles } from "../../pages/TrangCh1";
import { listUniversityInformation } from "../../constants/listUniversity";

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
  const pickUniversity = (universityID, image) => {
    const university = listUniversityInformation.find(
      (university) => university.id === universityID
    );
    setUniversityPicked(university);
    setImage(image);
    window.scrollTo(0, 0);
    setTabActive(2);
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
                    ngành về kỹ thuật được thành lập ở Hà Nội ngày 15 tháng 10
                    năm 1956. Trường luôn là một trong những trường đại học kỹ
                    thuật hàng đầu của nền giáo dục Việt Nam với bề dày lịch sử.
                    Với nhiều đóng góp cho công cuộc xây dựng và bảo vệ Tổ quốc,
                    Trường đã được Đảng và Nhà nước tặng nhiều danh hiệu và phần
                    thưởng quý giá cho các cá nhân [...]
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
                    TỔNG QUAN Trường Đại học Kinh tế Tài chính Thành phố Hồ Chí
                    Minh (University of Economics and Finance – UEF) thành lập
                    ngày 24 tháng 9 năm 2007 theo quyết định số 1272/QĐ-TTg của
                    Thủ tướng chính phủ. UEF theo đuổi mục tiêu là đại học hàng
                    đầu Việt Nam và hướng tới chuẩn […]
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
                    theo Nghị định số 678-TTg ngày 25 tháng 1 năm 1956 với tên
                    gọi ban đầu là Trường Kinh tế Tài chính. Lúc đó, Trường được
                    đặt trong hệ thống Đại học nhân dân Việt Nam trực thuộc Thủ
                    tướng Chính phủ. […]
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
                  <div className="i-hc-bch22">Đại học Công nghiệp Hà Nội</div>
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
                    TỔNG QUAN Trường Đại học Công nghiệp Hà Nội là trường đại
                    học trực thuộc Bộ Công Thương được thành lập ngày 2 tháng 12
                    năm 2005 trên cơ sở nâng cấp trường Cao đẳng Công nghiệp Hà
                    Nội. Trường Cao đẳng Công nghiệp Hà Nội được thành lập năm
                    1999 trên cơ sở nâng […]
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
                    TỔNG QUAN Ngày 19/05/1992, Trường Cao cấp Công đoàn được đổi
                    tên thành Trường Đại học Công đoàn. Trường Đại học Công đoàn
                    là trường đại học đa ngành, đa cấp trực thuộc Tổng Liên đoàn
                    Lao động Việt Nam và chịu sự quản lý về chuyên môn của Bộ
                    Giáo dục – Đào tạo. […]
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
                    TỔNG QUAN Trường Đại học Tài chính – Ngân hàng Hà Nội; hoạt
                    động theo quy chế trường đại học tư thục, được thành lập
                    theoQuyết định số 2336/2010/QĐ-TTg ngày 21 tháng 12 năm 2010
                    của Thủ tướng Chính phủ. Trường Đại học Tài chính-Ngân hàng
                    Hà Nội đã chính thức đi vào hoạt động […]
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
        </div>
      )}
      {tabActive === 2 && (
        <div className={"frame-parent2193"}>
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
        </div>
      )}
    </div>
  );
};
