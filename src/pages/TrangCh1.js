import { useState } from "react";
import "./TrangCh1.css";
import "./TrangCh13.css";
const TrangCh1 = ({ goToDetailUniversity, goToNhomTinhCach }) => {
  const [isHide, setIsHide] = useState(true);
  const [isShowDinhHuong, setIsShowDinhHuong] = useState(false);
  const [isShowUniversity, setIsShowUniversity] = useState(false);
  const [isShowNganhNgheHot, setIsShowNganhNgheHot] = useState(false);
  return (
    <div
      style={
        {
          // overflowY: "scroll"
        }
      }
      className="trang-ch-1"
    >
      <div className="group-parent23">
        {isHide && (
          <div
            style={
              {
                // maxHeight: "1000px"
              }
            }
            className="frame-parent2179"
          >
            <div className="frame-parent2180">
              <div style={styles.button} className="rectangle-parent722">
                <img
                  className="frame-child1285"
                  alt=""
                  src="./rectangle-482@2x.png"
                />
                <div className="text433">Guest#1111</div>
              </div>
              <div style={styles.button} className="frame-parent2181">
                <div className="vuesaxlinearhome-parent23">
                  <img
                    className="vuesaxlinearhome-icon25"
                    alt=""
                    src="./vuesaxlinearhome211.svg"
                  />
                  <div className="text434">Trang chủ</div>
                </div>
                <div
                  style={styles.button}
                  className="vuesaxlinearreceipt-edit-parent22"
                >
                  <img
                    className="vuesaxlinearhome-icon25"
                    alt=""
                    src="./vuesaxlinearreceiptedit.svg"
                  />
                  <div className="text434">Khảo sát</div>
                </div>
                <div
                  style={styles.button}
                  className="vuesaxlinearreceipt-edit-parent22"
                >
                  <img
                    className="iconoutlinedapplicationbulb31"
                    alt=""
                    src="./iconoutlinedapplicationbulb.svg"
                  />
                  <div className="text434">Gợi ý nguyện vọng</div>
                </div>
                <div
                  style={styles.button}
                  className="vuesaxlinearreceipt-edit-parent22"
                >
                  <img
                    className="vuesaxlinearhome-icon25"
                    alt=""
                    src="./vuesaxlinearinfocircle.svg"
                  />
                  <div className="text434">Thông tin tuyển sinh</div>
                </div>
              </div>
            </div>
            <div
              style={styles.button}
              onClick={() => {
                setIsHide(!isHide);
              }}
              className="vuesaxlineararrow-right-wrapper71"
            >
              <img
                className="vuesaxlineararrow-right-icon95"
                alt=""
                src="./vuesaxlineararrowright311.svg"
              />
            </div>
          </div>
        )}
        {!isHide && (
          <div
            style={{
              zIndex: 3,
              // maxHeight: "1000px"
            }}
            className="frame-parent1266"
          >
            <div className="frame-parent1267">
              <div className="rectangle-parent722">
                <img
                  className="frame-child1285"
                  alt=""
                  src="./rectangle-482@2x.png"
                />
                <div className="thng-bo35">Guest#1111</div>
              </div>
              {/* <div style={styles.button} className="rectangle-parent722">
                <img
                  className="frame-child1285"
                  alt=""
                  src="./rectangle-482@2x.png"
                />
                <div className="text433">Guest#1111</div>
              </div> */}
              <div className="frame-parent1268">
                <div
                  style={styles.button}
                  className="vuesaxlinearhome-parent11"
                >
                  <img
                    className="iconoutlinedapplicationbell47"
                    alt=""
                    src="./vuesaxlinearhome.svg"
                  />
                  <div className="thng-bo35">Trang chủ</div>
                </div>
                <div
                  style={styles.button}
                  className="vuesaxlinearreceipt-edit-parent11"
                >
                  <img
                    className="iconoutlinedapplicationbell47"
                    alt=""
                    src="./vuesaxlinearreceiptedit1.svg"
                  />
                  <div className="thng-bo35">Khảo sát tính cách</div>
                </div>
                <div
                  style={styles.button}
                  className="vuesaxlinearreceipt-edit-parent11"
                >
                  <img
                    className="iconoutlinedapplicationbulb13"
                    alt=""
                    src="./iconoutlinedapplicationbulb.svg"
                  />
                  <div className="thng-bo35">Gợi ý nguyện vọng</div>
                </div>
                <div
                  style={styles.button}
                  className="vuesaxlinearreceipt-edit-parent11"
                >
                  <img
                    className="iconoutlinedapplicationbell47"
                    alt=""
                    src="./vuesaxlinearinfocircle1.svg"
                  />
                  <div className="thng-bo35">Thông tin tuyển sinh</div>
                </div>
                {/* <div className="vuesaxlinearreceipt-edit-parent11">
                  <img
                    className="iconoutlinedapplicationbell47"
                    alt=""
                    src="./vuesaxlinearlogout11.svg"
                  />
                  <div className="thng-bo35">Sign Out</div>
                </div> */}
              </div>
            </div>
            <div className="vuesaxlineararrow-right-wrapper46">
              <img
                className="vuesaxlineararrow-right-icon65"
                alt=""
                src="./vuesaxlineararrowright.svg"
              />
            </div>
            <div
              // style={styles.button}
              style={{ zIndex: 3, ...styles.button }}
              onClick={() => {
                setIsHide(!isHide);
              }}
              className="vuesaxlineararrow-right-wrapper46"
            >
              <img
                className="vuesaxlineararrow-right-icon65"
                alt=""
                src="./arrow-right.png"
              />
            </div>
          </div>
        )}
        {/* <div className="notifications41">
          <div className="title41">
            <div className="text433">Thông báo</div>
          </div>
          <div className="frame-parent2182">
            <div className="tt-c-wrapper39">
              <div className="tt-c41">Tất cả</div>
            </div>
            <div className="cha-c-wrapper39">
              <div className="tt-c41">Chưa đọc</div>
            </div>
          </div>
          <div className="frame-parent2183">
            <div className="rectangle-parent723">
              <img
                className="frame-child1286"
                alt=""
                src="./rectangle-481@2x.png"
              />
              <div className="byewind-parent404">
                <div className="byewind406">Người dùng mới đăng ký</div>
                <div className="emailgmailcom41">59 phút trước</div>
              </div>
            </div>
            <div className="frame-child1287" />
          </div>
          <div className="frame-parent2184">
            <div className="rectangle-parent723">
              <img
                className="frame-child1286"
                alt=""
                src="./rectangle-481@2x.png"
              />
              <div className="byewind-parent404">
                <div className="byewind406">Người dùng mới đăng ký</div>
                <div className="emailgmailcom41">1 Giờ trước</div>
              </div>
            </div>
            <div className="frame-child1289" />
          </div>
          <div className="frame-parent2185">
            <div className="rectangle-parent723">
              <img
                className="frame-child1286"
                alt=""
                src="./rectangle-481@2x.png"
              />
              <div className="byewind-parent404">
                <div className="byewind406">Người dùng mới đăng ký</div>
                <div className="emailgmailcom41">Hôm nay, 11:59 AM</div>
              </div>
            </div>
            <div className="frame-child1287" />
          </div>
          <div className="frame-parent2186">
            <div className="rectangle-parent723">
              <img
                className="frame-child1286"
                alt=""
                src="./rectangle-481@2x.png"
              />
              <div className="byewind-parent404">
                <div className="byewind406">Người dùng mới đăng ký</div>
                <div className="emailgmailcom41">Hôm nay, 11:59 AM</div>
              </div>
            </div>
            <div className="frame-child1289" />
          </div>
          <div className="frame-parent2187">
            <div className="rectangle-parent723">
              <img
                className="frame-child1286"
                alt=""
                src="./rectangle-481@2x.png"
              />
              <div className="byewind-parent404">
                <div className="byewind406">Người dùng mới đăng ký</div>
                <div className="emailgmailcom41">Hôm nay, 11:59 AM</div>
              </div>
            </div>
            <div className="frame-child1287" />
          </div>
          <div className="frame-parent2188">
            <div className="rectangle-parent723">
              <img
                className="frame-child1286"
                alt=""
                src="./rectangle-481@2x.png"
              />
              <div className="byewind-parent404">
                <div className="byewind406">Người dùng mới đăng ký</div>
                <div className="emailgmailcom41">Hôm nay, 11:59 AM</div>
              </div>
            </div>
            <div className="frame-child1289" />
          </div>
          <div className="frame-parent2189">
            <div className="rectangle-parent723">
              <img
                className="frame-child1286"
                alt=""
                src="./rectangle-481@2x.png"
              />
              <div className="byewind-parent404">
                <div className="byewind406">Người dùng mới đăng ký</div>
                <div className="emailgmailcom41">Hôm nay, 11:59 AM</div>
              </div>
            </div>
            <div className="frame-child1289" />
          </div>
          <div className="frame-parent2190">
            <div className="rectangle-parent723">
              <img
                className="frame-child1286"
                alt=""
                src="./rectangle-481@2x.png"
              />
              <div className="byewind-parent404">
                <div className="byewind406">Người dùng mới đăng ký</div>
                <div className="emailgmailcom41">Hôm nay, 11:59 AM</div>
              </div>
            </div>
            <div className="frame-child1289" />
          </div>
          <div className="frame-parent2191">
            <div className="rectangle-parent723">
              <img
                className="frame-child1286"
                alt=""
                src="./rectangle-481@2x.png"
              />
              <div className="byewind-parent404">
                <div className="byewind406">Người dùng mới đăng ký</div>
                <div className="emailgmailcom41">Hôm nay, 11:59 AM</div>
              </div>
            </div>
            <div className="frame-child1287" />
          </div>
          <div className="frame-parent2192">
            <div className="rectangle-parent723">
              <img
                className="frame-child1286"
                alt=""
                src="./rectangle-481@2x.png"
              />
              <div className="byewind-parent404">
                <div className="byewind406">Người dùng mới đăng ký</div>
                <div className="emailgmailcom41">Hôm nay, 11:59 AM</div>
              </div>
            </div>
            <div className="frame-child1287" />
          </div>
          <div className="button41">
            <img
              className="dotsthreeoutlinevertical-s-icon41"
              alt=""
              src="./dotsthreeoutlineverticals.svg"
            />
          </div>
        </div> */}
        <div>
          <div className="frame-parent2193">
            <div className="byewind-parent404">
              <div className="frame-parent2194">
                <div className="trang-ch-parent4">
                  <div className="trang-ch6">Trang chủ</div>
                  <div style={styles.button} className="xt-tuyn-i-hc-wrapper22">
                    <div className="xt-tuyn-i24">Xét tuyển Đại học</div>
                  </div>
                  <div
                    style={styles.button}
                    onClick={() => {
                      goToNhomTinhCach();
                    }}
                    className="nhm-tnh-cch-wrapper22"
                  >
                    <div className="nhm-tnh-cch29">Nhóm tính cách</div>
                  </div>
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
              <div className="frame-parent2197">
                <div style={styles.button} className="ng-nhp-wrapper6">
                  <div className="xt-tuyn-i24">Đăng nhập</div>
                </div>
                <div style={styles.button} className="tm-hiu-thm-frame">
                  <div className="xt-tuyn-i24">Tìm hiểu thêm</div>
                </div>
              </div>
            </div>
          </div>
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
                    Định hướng nghề nghiệp là một trong những điều rất quan
                    trọng đối với các bạn trẻ. Ai trong số chúng ta cũng mong
                    muốn kiếm cho mình được công việc phù hợp với đam mê, đúng
                    chuyên ngành đang học, không chỉ vậy, thu nhập cũng phải ổn
                    định.
                  </div>
                  <div className="nh-hng-ngh3">
                    Tuy nhiên, nếu biết nắm bắt làm các ngành nghề phù hợp với
                    xu hướng hiện tại, bạn sẽ có nhiều cơ hội mở rộng hơn để
                    phát triển bản thân hơn.
                  </div>
                </div>
              )}
            </div>
            <div className="frame-parent2200">
              <div className="nh-hng-ngh-nghip-l-g-group">
                <div className="xt-tuyn-i24">
                  Top 7 ngành nghề “Hot” hiện nay
                </div>
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
                  <div className="nhm-ngnh-my-tnh-group">
                    <div className="xt-tuyn-i24">Nhóm ngành Máy tính</div>
                    <div className="frame-parent2202">
                      <div className="frame-parent2203">
                        <img
                          className="frame-child1306"
                          alt=""
                          src="./frame-427319409@2x.png"
                        />
                        <div className="text433">Công nghệ thống tin</div>
                      </div>
                      <div className="frame-parent2204">
                        <div className="frame-parent2203">
                          <img
                            className="frame-child1307"
                            alt=""
                            src="./frame-4273194091@2x.png"
                          />
                          <div className="text433">Trí tuệ nhân tạo</div>
                        </div>
                        <div className="frame-parent2203">
                          <img
                            className="frame-child1307"
                            alt=""
                            src="./frame-4273194092@2x.png"
                          />
                          <div className="text433">Khoa học dữ liệu</div>
                        </div>
                        <div className="frame-parent2203">
                          <img
                            className="frame-child1307"
                            alt=""
                            src="./frame-4273194093@2x.png"
                          />
                          <div className="text433">Phát triển phần mềm</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="nhm-ngnh-my-tnh-group">
                    <div className="xt-tuyn-i24">Nhóm ngành Truyền thông</div>
                    <div className="frame-parent2202">
                      <div className="frame-parent2203">
                        <img
                          className="frame-child1306"
                          alt=""
                          src="./frame-4273194094@2x.png"
                        />
                        <div className="text433">Báo chí</div>
                      </div>
                      <div className="frame-parent2204">
                        <div className="frame-parent2203">
                          <img
                            className="frame-child1307"
                            alt=""
                            src="./frame-4273194095@2x.png"
                          />
                          <div className="text433">
                            Truyền thông kỹ thuật số
                          </div>
                        </div>
                        <div className="frame-parent2203">
                          <img
                            className="frame-child1307"
                            alt=""
                            src="./frame-4273194096@2x.png"
                          />
                          <div className="text433">Báo điện tử</div>
                        </div>
                        <div className="frame-parent2203">
                          <img
                            className="frame-child1307"
                            alt=""
                            src="./frame-4273194097@2x.png"
                          />
                          <div className="text433">Báo truyền hình</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="nhm-ngnh-my-tnh-group">
                    <div className="xt-tuyn-i24">Nhóm ngành Năng khiếu</div>
                    <div className="frame-parent2202">
                      <div className="frame-parent2203">
                        <img
                          className="frame-child1306"
                          alt=""
                          src="./frame-4273194098@2x.png"
                        />
                        <div className="text433">Sáng tác âm nhạc</div>
                      </div>
                      <div className="frame-parent2204">
                        <div className="frame-parent2203">
                          <img
                            className="frame-child1307"
                            alt=""
                            src="./frame-4273194099@2x.png"
                          />
                          <div className="text433">Thiết kế đồ hoạ</div>
                        </div>
                        <div className="frame-parent2203">
                          <img
                            className="frame-child1307"
                            alt=""
                            src="./frame-42731940910@2x.png"
                          />
                          <div className="text433">Nghệ sĩ biểu diễn</div>
                        </div>
                        <div className="frame-parent2203">
                          <img
                            className="frame-child1307"
                            alt=""
                            src="./frame-42731940911@2x.png"
                          />
                          <div className="text433">Hội hoạ</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="nhm-ngnh-my-tnh-group">
                    <div className="xt-tuyn-i24">Nhóm ngành Du lịch</div>
                    <div className="frame-parent2202">
                      <div className="frame-parent2203">
                        <img
                          className="frame-child1306"
                          alt=""
                          src="./frame-42731940912@2x.png"
                        />
                        <div className="text433">Quản trị khách sạn</div>
                      </div>
                      <div className="nhm-tnh-cch-wrapper22">
                        <div className="frame-parent2203">
                          <img
                            className="frame-child1307"
                            alt=""
                            src="./frame-42731940913@2x.png"
                          />
                          <div className="text433">Dịch vụ du lịch</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="xt-tuyn-i24">
                    Nhóm ngành Ngôn ngữ - Văn hoá - Tôn giáo
                  </div>
                  <div className="frame-parent2223">
                    <div className="frame-parent2203">
                      <img
                        className="frame-child1306"
                        alt=""
                        src="./frame-42731940914@2x.png"
                      />
                      <div className="text433">Ngôn ngữ Anh</div>
                    </div>
                    <div className="frame-parent2204">
                      <div className="frame-parent2203">
                        <img
                          className="frame-child1307"
                          alt=""
                          src="./frame-42731940915@2x.png"
                        />
                        <div className="text433">Ngôn ngữ Trung Quốc</div>
                      </div>
                      <div className="frame-parent2203">
                        <img
                          className="frame-child1307"
                          alt=""
                          src="./frame-42731940916@2x.png"
                        />
                        <div className="text433">Xã hội học</div>
                      </div>
                      <div className="frame-parent2203">
                        <img
                          className="frame-child1307"
                          alt=""
                          src="./frame-42731940917@2x.png"
                        />
                        <div className="text433">Lịch sử</div>
                      </div>
                    </div>
                  </div>
                  <div className="xt-tuyn-i24">
                    Nhóm ngành Xây dựng - Kiến trúc
                  </div>
                  <div className="frame-parent2223">
                    <div className="frame-parent2203">
                      <img
                        className="frame-child1306"
                        alt=""
                        src="./frame-42731940918@2x.png"
                      />
                      <div className="text433">Kỹ thuật xây dựng</div>
                    </div>
                    <div className="frame-parent2204">
                      <div className="frame-parent2203">
                        <img
                          className="frame-child1307"
                          alt=""
                          src="./frame-42731940919@2x.png"
                        />
                        <div className="text433">Kỹ thuật công trình</div>
                      </div>
                      <div className="frame-parent2203">
                        <img
                          className="frame-child1307"
                          alt=""
                          src="./frame-42731940920@2x.png"
                        />
                        <div className="text433">Kiến trúc</div>
                      </div>
                      <div className="frame-parent2203">
                        <img
                          className="frame-child1307"
                          alt=""
                          src="./frame-42731940921@2x.png"
                        />
                        <div className="text433">Thiết kế nội thất</div>
                      </div>
                    </div>
                  </div>
                  <div className="nhm-ngnh-my-tnh-group">
                    <div className="xt-tuyn-i24">
                      Nhóm ngành Kinh tế - Quản lý
                    </div>
                    <div className="frame-parent2235">
                      <div className="frame-parent2203">
                        <img
                          className="frame-child1306"
                          alt=""
                          src="./frame-42731940922@2x.png"
                        />
                        <div className="text433">Quản trị kinh doanh</div>
                      </div>
                      <div className="frame-parent2204">
                        <div className="frame-parent2203">
                          <img
                            className="frame-child1307"
                            alt=""
                            src="./frame-42731940923@2x.png"
                          />
                          <div className="text433">Tài chính - Ngân hàng</div>
                        </div>
                        <div className="frame-parent2203">
                          <img
                            className="frame-child1307"
                            alt=""
                            src="./frame-42731940924@2x.png"
                          />
                          <div className="text433">Kinh doanh quốc tế</div>
                        </div>
                        <div className="frame-parent2203">
                          <img
                            className="frame-child1307"
                            alt=""
                            src="./frame-42731940925@2x.png"
                          />
                          <div className="text433">Kế toán</div>
                        </div>
                        <div className="frame-parent2203">
                          <img
                            className="frame-child1307"
                            alt=""
                            src="./frame-42731940925@2x.png"
                          />
                          <div className="text433">Logistc</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="frame-parent2242">
              <div className="nhm-ngnh-my-tnh-group">
                <div className="thng-tin-cc-trng-i-hc-parent31">
                  <div className="xt-tuyn-i24">
                    Thông tin các trường Đại học
                  </div>
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
                    <div className="frame-parent2246">
                      <div className="image-25-wrapper28">
                        <img
                          className="image-25-icon30"
                          alt=""
                          src="./image-25@2x.png"
                        />
                      </div>
                      <div className="i-hc-cng-nghip-h-ni-group">
                        <div className="i-hc-bch22">
                          Đại học Bách Khoa Hà Nội
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
                          TỔNG QUAN Đại học Bách khoa Hà Nội là trường đại học
                          đa ngành về kỹ thuật được thành lập ở Hà Nội ngày 15
                          tháng 10 năm 1956. Trường luôn là một trong những
                          trường đại học kỹ thuật hàng đầu của nền giáo dục Việt
                          Nam với bề dày lịch sử. Với nhiều đóng góp cho công
                          cuộc xây dựng và bảo vệ Tổ quốc, Trường đã được Đảng
                          và Nhà nước tặng nhiều danh hiệu và phần thưởng quý
                          giá cho các cá nhân [...]
                        </div>
                      </div>
                    </div>
                    <div
                      onClick={() => {
                        goToDetailUniversity();
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
                          TỔNG QUAN Trường Đại học Kinh tế Tài chính Thành phố
                          Hồ Chí Minh (University of Economics and Finance –
                          UEF) thành lập ngày 24 tháng 9 năm 2007 theo quyết
                          định số 1272/QĐ-TTg của Thủ tướng chính phủ. UEF theo
                          đuổi mục tiêu là đại học hàng đầu Việt Nam và hướng
                          tới chuẩn […]
                        </div>
                      </div>
                    </div>
                    <div className="frame-parent2246">
                      <div className="image-25-wrapper28">
                        <img
                          className="image-25-icon30"
                          alt=""
                          src="./image-252@2x.png"
                        />
                      </div>
                      <div className="i-hc-cng-nghip-h-ni-group">
                        <div className="i-hc-bch22">
                          Đại học Kinh tế Quốc dân
                        </div>
                        <div className="frame-parent2247">
                          <div className="vuesaxlineartimer-parent26">
                            <img
                              className="vuesaxlineararrow-right-icon95"
                              alt=""
                              src="./vuesaxlineartimer.svg"
                            />
                            <div className="tt-c41">
                              Tháng Mười Một 28, 2022
                            </div>
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
                          TỔNG QUAN Trường Đại học Kinh tế Quốc dân được thành
                          lập theo Nghị định số 678-TTg ngày 25 tháng 1 năm 1956
                          với tên gọi ban đầu là Trường Kinh tế Tài chính. Lúc
                          đó, Trường được đặt trong hệ thống Đại học nhân dân
                          Việt Nam trực thuộc Thủ tướng Chính phủ. […]
                        </div>
                      </div>
                    </div>
                    <div className="frame-parent2246">
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
                            <div className="tt-c41">
                              Tháng Mười Một 28, 2022
                            </div>
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
                          đại học trực thuộc Bộ Công Thương được thành lập ngày
                          2 tháng 12 năm 2005 trên cơ sở nâng cấp trường Cao
                          đẳng Công nghiệp Hà Nội. Trường Cao đẳng Công nghiệp
                          Hà Nội được thành lập năm 1999 trên cơ sở nâng […]
                        </div>
                      </div>
                    </div>
                    <div className="frame-parent2246">
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
                            <div className="tt-c41">
                              Tháng Mười Một 28, 2022
                            </div>
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
                          TỔNG QUAN Ngày 19/05/1992, Trường Cao cấp Công đoàn
                          được đổi tên thành Trường Đại học Công đoàn. Trường
                          Đại học Công đoàn là trường đại học đa ngành, đa cấp
                          trực thuộc Tổng Liên đoàn Lao động Việt Nam và chịu sự
                          quản lý về chuyên môn của Bộ Giáo dục – Đào tạo. […]
                        </div>
                      </div>
                    </div>
                    <div className="frame-parent2246">
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
                            <div className="tt-c41">
                              Tháng Mười Một 23, 2022
                            </div>
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
                          học Tài chính-Ngân hàng Hà Nội đã chính thức đi vào
                          hoạt động […]
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
                        src="./vuesaxlineararrowright1.svg"
                      />
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

const styles = {
  button: {
    cursor: "pointer",
    userSelect: "none",
  },
};

export default TrangCh1;
