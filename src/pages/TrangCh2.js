import { useState } from "react";
import "./TrangCh2.css";
const TrangCh2 = ({ goToXetTuyenDaiHoc }) => {
  const [isShowMBTI, setIsShowMBTI] = useState(false);
  const [isShowCharacters, setIsShowCharacters] = useState(false);
  return (
    <div className="trang-ch-2">
      <div className="group-parent22">
        <div className="frame-parent2147">
          <div className="frame-parent2148">
            <div className="rectangle-parent711">
              <img
                className="frame-child1264"
                alt=""
                src="./rectangle-4851@2x.png"
              />
              <div className="architect">Guest#1111</div>
            </div>
            <div className="frame-parent2149">
              <div className="vuesaxlinearhome-parent22">
                <img
                  className="vuesaxlinearhome-icon24"
                  alt=""
                  src="./vuesaxlinearhome3.svg"
                />
                <div className="text429">Trang chủ</div>
              </div>
              <div className="vuesaxlinearreceipt-edit-parent21">
                <img
                  className="vuesaxlinearhome-icon24"
                  alt=""
                  src="./vuesaxlinearreceiptedit.svg"
                />
                <div className="text429">Khảo sát</div>
              </div>
              <div className="vuesaxlinearreceipt-edit-parent21">
                <img
                  className="iconoutlinedapplicationbulb30"
                  alt=""
                  src="./iconoutlinedapplicationbulb.svg"
                />
                <div className="text429">Gợi ý nguyện vọng</div>
              </div>
              <div className="vuesaxlinearinfo-circle-parent69">
                <img
                  className="vuesaxlinearhome-icon24"
                  alt=""
                  src="./vuesaxlinearinfocircle.svg"
                />
                <div className="text429">Thông tin tuyển sinh</div>
              </div>
            </div>
          </div>
          <div className="vuesaxlineararrow-right-wrapper70">
            <img
              className="vuesaxlineararrow-right-icon94"
              alt=""
              src="./vuesaxlineararrowright511.svg"
            />
          </div>
        </div>
        <div className="frame-parent2150">
          <div className="frame-wrapper464">
            <div className="frame-parent2151">
              <div className="trang-ch-parent3">
                <div className="trang-ch5">Trang chủ</div>
                <div
                  style={styles.button}
                  onClick={() => {
                    goToXetTuyenDaiHoc();
                  }}
                  className="xt-tuyn-i-hc-wrapper21"
                >
                  <div className="khm-ph">Xét tuyển Đại học</div>
                </div>
                <div className="nhm-tnh-cch-wrapper21">
                  <div className="lm-kho-st">Nhóm tính cách</div>
                </div>
              </div>
              <div className="iconoutlinedapplicationbell-wrapper69">
                <img
                  className="vuesaxlinearhome-icon24"
                  alt=""
                  src="./iconoutlinedapplicationbell.svg"
                />
              </div>
            </div>
          </div>
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
            <div className="frame-parent2154">
              <div style={styles.button} className="ng-nhp-wrapper5">
                <div className="lm-kho-st">Đăng nhập</div>
              </div>
              <div className="lm-kho-st-wrapper">
                <div className="lm-kho-st">Làm khảo sát</div>
              </div>
            </div>
          </div>
        </div>
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
                    <div className="architect">ADventurer</div>
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
          <div className="thng-tin-chi-tit-nhm-tnh-c-parent">
            <div className="lm-kho-st">Thông tin chi tiết nhóm tính cách</div>
            <div className="frame-parent2163">
              <div className="mbti-l-g-parent">
                <div className="lm-kho-st">Ưu điểm</div>
                <i className="bn-phi-thc">
                  Bạn phải thực hiện khảo sát tính cách.
                </i>
              </div>
              <div className="frame-parent2164">
                <div className="sng-to-mt-cch-khc-ngi-container">
                  <div className="lm-kho-st">Sáng tạo một cách khác người</div>
                  <div className="myers-briggs-type-indicator-m-parent">
                    <div className="myers-briggs-type-indicator">
                      Một thế giới thiếu INTJ có thể sẽ rất nhàm chán. Họ rất
                      sáng tạo và hay nghĩ ra những ý tưởng mới lạ, đôi lúc khá
                      khác người.
                    </div>
                    <div className="thc-t-intj-container2">
                      {`Thực tế, INTJ là người đi đầu cho khá nhiều những phát minh lạ lẫm mà vô cùng thực tiễn của lịch sử loài người. Những người có ảnh hưởng nhất có thể kể đến Nikola Tesla, `}
                      <a
                        className="vladimir-lenin4"
                        href="https://en.wikipedia.org/wiki/Vladimir_Lenin"
                        target="_blank"
                      >
                        <span className="vladimir-lenin5">Vladimir Lenin</span>
                      </a>
                      , Isaac Newton…
                    </div>
                  </div>
                </div>
                <div className="sng-to-mt-cch-khc-ngi-container">
                  <div className="lm-kho-st">Đối diện với chỉ trích</div>
                  <div className="sng-to-v-khc-ngi-l-vy-frame">
                    <div className="myers-briggs-type-indicator">
                      Sáng tạo và khác người là vậy, nhóm tính cách INTJ cũng
                      không hề sợ bị chỉ trích. Họ luôn làm việc theo cách riêng
                      và không theo một khuôn phép nhất định nào.
                    </div>
                  </div>
                </div>
                <div className="sng-to-mt-cch-khc-ngi-container">
                  <div className="lm-kho-st">Tự tin, cẩn thận</div>
                  <div className="myers-briggs-type-indicator-m-parent">
                    <div className="myers-briggs-type-indicator">
                      Những người thuộc nhóm tính cách INTJ là những người hướng
                      nội và thích ở một mình, ngẫm nghĩ trong thế giới nội tâm
                      của bản thân. Họ thích hợp làm việc độc lập và thường
                      không thích những công việc yêu cầu tập thể.
                    </div>
                    <div className="myers-briggs-type-indicator">
                      Hơn nữa, họ rất tự tin vào khả năng của mình và làm mọi
                      việc một cách cầu toàn.
                    </div>
                  </div>
                </div>
                <div className="sng-to-mt-cch-khc-ngi-container">
                  <div className="lm-kho-st">Lý trí, tư duy chiến lược</div>
                  <div className="myers-briggs-type-indicator-m-parent">
                    <div className="myers-briggs-type-indicator">
                      Các Kiến Trúc Sư rất tự tin với khả năng nhìn thấu mọi thứ
                      một cách logic. Mọi thử thách là cơ hội để họ rèn luyện
                      suy nghĩ và mở rộng kiến thức.
                    </div>
                    <div className="myers-briggs-type-indicator">
                      Kết hợp với những chiến lược thông minh, họ có thể đưa ra
                      nhiều kế hoạch dự phòng trong cả công việc và đời sống cá
                      nhân. Họ thích lường trước và chuẩn bị cho tất cả các khả
                      năng và kết quả có thể xảy ra.
                    </div>
                  </div>
                </div>
                <div className="sng-to-mt-cch-khc-ngi-container">
                  <div className="lm-kho-st">Tham vọng</div>
                  <div className="myers-briggs-type-indicator-m-parent">
                    <div className="myers-briggs-type-indicator">
                      INTJ có tính cách quyết đoán và nhanh thích ứng với mọi
                      hoàn cảnh, nên họ hợp làm những nhà lãnh đạo. Ngoài kỹ
                      năng thiên bẩm để dẫn đầu, họ còn có tham vọng lớn và luôn
                      cố gắng vì mục tiêu cao cả.
                    </div>
                    <div className="myers-briggs-type-indicator">
                      Vì lẽ đó, đa số INTJ đều có thể vươn lên hàng đầu và chứng
                      minh độ ảnh hưởng của mình.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-parent2163">
              <div className="mbti-l-g-parent">
                <div className="lm-kho-st">Nhược điểm</div>
                <i className="bn-phi-thc">
                  Bạn phải thực hiện khảo sát tính cách.
                </i>
              </div>
              <div className="frame-parent2164">
                <div className="sng-to-mt-cch-khc-ngi-container">
                  <div className="lm-kho-st">Đôi lúc quá phán xét</div>
                  <div className="myers-briggs-type-indicator-m-parent">
                    <div className="myers-briggs-type-indicator">
                      Các INTJ hay đi đến kết luận khá nhanh chóng mà không cân
                      nhắc từ những cái nhìn khác. Dù họ có xu hướng cởi mở,
                      tính cách này lại thiếu kiên nhẫn với những điều họ cho là
                      không hợp lý.
                    </div>
                    <div className="myers-briggs-type-indicator">
                      INTJ hay phê phán những quyết định dựa trên tình cảm và
                      thường có ít sự tôn trọng với những người như vậy.
                    </div>
                  </div>
                </div>
                <div className="sng-to-mt-cch-khc-ngi-container">
                  <div className="lm-kho-st">Quá cầu toàn</div>
                  <div className="sng-to-v-khc-ngi-l-vy-frame">
                    <div className="myers-briggs-type-indicator">
                      Là những người theo chủ nghĩa cầu toàn, INTJ đôi lúc bị
                      nghĩ là những người quá khó tính. Một khi họ muốn mọi thứ
                      hoàn hảo, những người khác cũng phải làm mọi việc thật
                      hoàn mỹ theo ý họ muốn. Nếu không, họ sẽ không ngại mà chỉ
                      trích bạn đấy.
                    </div>
                  </div>
                </div>
                <div className="sng-to-mt-cch-khc-ngi-container">
                  <div className="lm-kho-st">Khó “mở lòng”</div>
                  <div className="myers-briggs-type-indicator-m-parent">
                    <div className="myers-briggs-type-indicator">
                      Nói về cảm xúc là một thứ không hay ho lắm với INTJ. Người
                      khác hay nhìn nhận INTJ là những người khá vô cảm và lãnh
                      đạm. Bởi vậy, muốn kết thân với INTJ có vẻ khá khó ở giai
                      đoạn đầu.
                    </div>
                    <div className="myers-briggs-type-indicator">
                      Nhóm tính cách này không hứng thú với những sự kiện đông
                      người, chỉ thích tiếp xúc với số ít người thân, bạn bè họ
                      đã quen từ lâu.
                    </div>
                  </div>
                </div>
                <div className="sng-to-mt-cch-khc-ngi-container">
                  <div className="lm-kho-st">Thiếu nhạy cảm</div>
                  <div className="myers-briggs-type-indicator-m-parent">
                    <div className="myers-briggs-type-indicator">
                      INTJ có khiếu hài hước khá lạ nhưng lại dễ động chạm.
                      Thường những tính cách nhóm NT hoặc NF (như INFP, ENTP) sẽ
                      hiểu cá tính của INTJ, ngược lại với nhóm người mang đặc
                      điểm S (nhạy cảm).
                    </div>
                    <div className="myers-briggs-type-indicator">
                      Cá tính “thẳng như ruột ngựa” của INTJ có thể dễ làm người
                      khác tự ái, thậm chí tổn thương long tự trọng của người
                      ta.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-parent2163">
              <div className="mbti-l-g-parent">
                <div className="lm-kho-st">Các ngành phù hợp</div>
                <i className="bn-phi-thc">
                  Bạn phải thực hiện khảo sát tính cách.
                </i>
              </div>
              <div className="ngnh-lut-container">
                <div className="ngnh-lut2">Ngành luật.</div>
                <div className="ngnh-lut2">Ngành Kinh tế - Quản lý.</div>
                <div className="ngnh-lut2">Ngành Máy tính.</div>
                <div className="ngnh-lut2">Ngành Y Tế.</div>
                <div className="ngnh-lut2">Ngành Công An - Quân Đội.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="notifications40">
          <div className="title40">
            <div className="architect">Thông báo</div>
          </div>
          <div className="frame-parent2168">
            <div className="tt-c-wrapper38">
              <div className="tt-c40">Tất cả</div>
            </div>
            <div className="cha-c-wrapper38">
              <div className="tt-c40">Chưa đọc</div>
            </div>
          </div>
          <div className="frame-parent2169">
            <div className="rectangle-parent712">
              <img
                className="frame-child1265"
                alt=""
                src="./rectangle-481@2x.png"
              />
              <div className="frame-wrapper464">
                <div className="byewind396">Người dùng mới đăng ký</div>
                <div className="emailgmailcom40">59 phút trước</div>
              </div>
            </div>
            <div className="frame-child1266" />
          </div>
          <div className="frame-parent2170">
            <div className="rectangle-parent712">
              <img
                className="frame-child1265"
                alt=""
                src="./rectangle-481@2x.png"
              />
              <div className="frame-wrapper464">
                <div className="byewind396">Người dùng mới đăng ký</div>
                <div className="emailgmailcom40">1 Giờ trước</div>
              </div>
            </div>
            <div className="frame-child1268" />
          </div>
          <div className="frame-parent2171">
            <div className="rectangle-parent712">
              <img
                className="frame-child1265"
                alt=""
                src="./rectangle-481@2x.png"
              />
              <div className="frame-wrapper464">
                <div className="byewind396">Người dùng mới đăng ký</div>
                <div className="emailgmailcom40">Hôm nay, 11:59 AM</div>
              </div>
            </div>
            <div className="frame-child1266" />
          </div>
          <div className="frame-parent2172">
            <div className="rectangle-parent712">
              <img
                className="frame-child1265"
                alt=""
                src="./rectangle-481@2x.png"
              />
              <div className="frame-wrapper464">
                <div className="byewind396">Người dùng mới đăng ký</div>
                <div className="emailgmailcom40">Hôm nay, 11:59 AM</div>
              </div>
            </div>
            <div className="frame-child1268" />
          </div>
          <div className="frame-parent2173">
            <div className="rectangle-parent712">
              <img
                className="frame-child1265"
                alt=""
                src="./rectangle-481@2x.png"
              />
              <div className="frame-wrapper464">
                <div className="byewind396">Người dùng mới đăng ký</div>
                <div className="emailgmailcom40">Hôm nay, 11:59 AM</div>
              </div>
            </div>
            <div className="frame-child1266" />
          </div>
          <div className="frame-parent2174">
            <div className="rectangle-parent712">
              <img
                className="frame-child1265"
                alt=""
                src="./rectangle-481@2x.png"
              />
              <div className="frame-wrapper464">
                <div className="byewind396">Người dùng mới đăng ký</div>
                <div className="emailgmailcom40">Hôm nay, 11:59 AM</div>
              </div>
            </div>
            <div className="frame-child1268" />
          </div>
          <div className="frame-parent2175">
            <div className="rectangle-parent712">
              <img
                className="frame-child1265"
                alt=""
                src="./rectangle-481@2x.png"
              />
              <div className="frame-wrapper464">
                <div className="byewind396">Người dùng mới đăng ký</div>
                <div className="emailgmailcom40">Hôm nay, 11:59 AM</div>
              </div>
            </div>
            <div className="frame-child1268" />
          </div>
          <div className="frame-parent2176">
            <div className="rectangle-parent712">
              <img
                className="frame-child1265"
                alt=""
                src="./rectangle-481@2x.png"
              />
              <div className="frame-wrapper464">
                <div className="byewind396">Người dùng mới đăng ký</div>
                <div className="emailgmailcom40">Hôm nay, 11:59 AM</div>
              </div>
            </div>
            <div className="frame-child1268" />
          </div>
          <div className="frame-parent2177">
            <div className="rectangle-parent712">
              <img
                className="frame-child1265"
                alt=""
                src="./rectangle-481@2x.png"
              />
              <div className="frame-wrapper464">
                <div className="byewind396">Người dùng mới đăng ký</div>
                <div className="emailgmailcom40">Hôm nay, 11:59 AM</div>
              </div>
            </div>
            <div className="frame-child1266" />
          </div>
          <div className="frame-parent2178">
            <div className="rectangle-parent712">
              <img
                className="frame-child1265"
                alt=""
                src="./rectangle-481@2x.png"
              />
              <div className="frame-wrapper464">
                <div className="byewind396">Người dùng mới đăng ký</div>
                <div className="emailgmailcom40">Hôm nay, 11:59 AM</div>
              </div>
            </div>
            <div className="frame-child1266" />
          </div>
          <div className="button40">
            <img
              className="dotsthreeoutlinevertical-s-icon40"
              alt=""
              src="./dotsthreeoutlineverticals.svg"
            />
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

export default TrangCh2;
