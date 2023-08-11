import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { apiUrl } from "../../constants/api";
import { listTop7Career } from "../../constants/listTop7Career";
import KhaoSatTinhCachMobile from "./KhaoSatTinhCachMobile";
import GoiYNguyenVongMobile from "./GoiYNguyenVongMobile";
import ThongTinTuyenSinhMobile from "./ThongTinTuyenSinhMobile";
import ThongTinUserMobile from "./ThongTinUserMobile";
import "./mobile-mobile-mobile-modal-dang-xua.css";
import "./mobile-mobile-mobile-modal-chat.css";
import "./mobile-mobile-mobile-admin-chat-det.css";
import ThongKe from "./ThongKe";
import socketIOClient from "socket.io-client";
import { groupBy, isEmpty } from "lodash";
import moment from "moment/moment";
import QuanLyUserMobile from "./QuanLyUserMobile";
import QuanLyNguyenVongMobile from "./QuanLyNguyenVongMobile";
import QuanLyTuyenSinhMobile from "./QuanLyTuyenSinhMobile";

const SideBar = ({
  user,
  setIsShowSideBar,
  page,
  setPage,
  setIsShowModalDangXuat,
}) => {
  return (
    <div
      style={{
        // maxHeight: "100vh",
        position: "sticky",
        position: "-webkit-sticky",
        top: 0,
        zIndex: 300,
      }}
      className="mobilegroup-37246"
    >
      <div className="mobileframe-427319073">
        <div
          onClick={() => {
            if (!!user) {
              setPage("thongTinUser");
              setIsShowSideBar(false);
            }
          }}
          className="mobilefemale15-parent"
        >
          <img
            className="mobilefemale15-icon"
            alt=""
            src={
              user
                ? user.image
                  ? user.image
                  : "./rectangle-482@2x.png"
                : "./rectangle-482@2x.png"
            }
          />
          <div className="mobilemobiletext">
            {user
              ? user.name.split(" ")[user.name.split(" ").length - 1]
              : "Guest#1111"}
          </div>
        </div>
        <div className="frame-parent109">
          <div
            onClick={() => {
              setPage("thongKe");
              setIsShowSideBar(false);
            }}
            className={
              page === "thongKe"
                ? "dashboard-icon-parent"
                : "dashboard-icon-parent_new"
            }
          >
            <div className="dashboard-icon">
              <div className="mobilemobilerectangle-5" />
              <div className="mobilemobilerectangle-7" />
              <div className="mobilemobilerectangle-6" />
              <div className="mobilemobileellipse-2" />
            </div>
            {<div className="mobilemobiletext">Thống kê</div>}
          </div>
          {!!user && (
            <div
              onClick={() => {
                setPage("quanLyNguoiDung");
                setIsShowSideBar(false);
              }}
              className={
                page === "quanLyNguoiDung"
                  ? "dashboard-icon-parent"
                  : "dashboard-icon-parent_new"
              }
            >
              <img
                className="dashboard-icon"
                alt=""
                src="/mobilevuesaxlinearprofile2user.svg"
              />
              <div className="mobilemobiletext">Quản lý người dùng</div>
            </div>
          )}
          {!!user && (
            <div
              onClick={() => {
                setPage("quanLyNguyenVong");
                setIsShowSideBar(false);
              }}
              className={
                page === "quanLyNguyenVong"
                  ? "dashboard-icon-parent"
                  : "dashboard-icon-parent_new"
              }
            >
              <img
                className="dashboard-icon"
                alt=""
                src="/mobilevuesaxlinearcardedit.svg"
              />
              <div className="mobilemobiletext">Quản lý nguyện vọng</div>
            </div>
          )}
          <div
            onClick={() => {
              setPage("quanLyTuyenSinh");
              setIsShowSideBar(false);
            }}
            className={
              page === "quanLyTuyenSinh"
                ? "dashboard-icon-parent"
                : "dashboard-icon-parent_new"
            }
          >
            <img
              className="dashboard-icon"
              alt=""
              src="/mobilevuesaxlinearinfocircle.svg"
            />
            <div className="mobilemobiletext">Quản lý tuyển sinh</div>
          </div>
          {!!user && (
            <div
              onClick={() => {
                setIsShowModalDangXuat(true);
                setIsShowSideBar(false);
              }}
              className="dashboard-icon-parent"
            >
              <img
                className="dashboard-icon"
                alt=""
                src="/mobilevuesaxlinearlogout.svg"
              />
              <div className="mobilemobiletext">Đăng xuất</div>
            </div>
          )}
        </div>
        <div
          onClick={() => {
            setIsShowSideBar(false);
          }}
          className="mobilevuesaxlinearsidebar-le-wrapper"
        >
          <img
            className="dashboard-icon"
            alt=""
            src="/mobilevuesaxlinearsidebarleft.svg"
          />
        </div>
      </div>
    </div>
  );
};

const NhomTinhCach = ({ setTab }) => {
  const [isShowMBTI, setIsShowMBTI] = useState(false);
  const [isShowNhomTinhCach, setIsShowNhomTinhCach] = useState(false);
  const [isShowDetailNhoMTinhCach, setIsShowDetailNhoMTinhCach] =
    useState(false);
  const [isShowUuDiem, setIsShowUuDiem] = useState(true);
  const [isShowNhuocDiem, setIsShowNhuocDiem] = useState(true);
  const [isShowNganhPhuHop, setIsShowNganhPhuHop] = useState(true);
  return (
    <div style={{ overflow: "visible" }} className="mobileiphone-8-1">
      <div
        onClick={() => {
          setTab("xetTuyenDaiHoc");
        }}
        className={"mobilemobileframe-4273195401"}
      >
        <div className="mobilemobilebutton-arrow1">
          <img
            className="mobilechevron-arrow-right-icon1"
            alt=""
            src="/mobilechevronarrowright.svg"
          />
        </div>
        <b className="mobilemobilemobilenhm-tnh-c">Nhóm tính cách</b>
      </div>

      <div
        style={{ marginTop: "50px" }}
        className="mobilemobileframe-4273195471"
      >
        <div className="mobileframe-4273195461">
          <div className="mobileframe-4273195431">
            <div className="mobileframe-4273195411">
              <b className="mobilemobiletext12">{`Khám phá `}</b>
              <div className="mobilemobiletext13">
                Nhóm các nhóm ngành hiện nay
              </div>
              <div className="mobilemobiletext14">
                Tìm hiểu thêm về nhóm tính cách của bản thân và tham khảo các
                nguyện vọng đăng ký phù hợp cùng chúng tôi.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobilemobileframe-4273195571">
        <div className="mobileframe-4273192921">
          <div className="mobileframe-4273192853">
            <div className="mobileframe-4273195493">
              <div className="mobilemobilembti-l-g1">MBTI là gì?</div>
              <div
                onClick={() => {
                  setIsShowMBTI(!isShowMBTI);
                }}
                className="mobilethu-gn2"
              >
                {isShowMBTI ? "Thu gọn" : "Chi tiết"}
              </div>
            </div>
            {isShowMBTI && (
              <div>
                <div className="mobileframe-4273195481">
                  <div className="mobilemobilemyers-briggs-type">
                    Myers-Briggs Type Indicator (MBTI) là một báo cáo tự đánh
                    giá được thiết kế để xác định loại tính cách, điểm mạnh,
                    điểm yếu và sở thích của một người.
                  </div>
                  <div className="mobilemobilemyers-briggs-type">
                    Công cụ MBTI được phát triển bởi Katharine Cook Briggs và
                    đứa con gái duy nhất của bà là Isabel Briggs Myers vào năm
                    1942 dựa trên các lý thuyết do bác sĩ tâm lý người Thụy Sĩ
                    Carl Jung khởi xướng trong công trình nghiên cứu
                    “Psychological Types” của ông.
                  </div>
                  <div className="mobilemobilemyers-briggs-type">
                    Về lý thuyết của Carl Jung về các loại tâm lý, ông cho rằng
                    tình cách của con người được hình thành dựa trên sự tồn tại
                    của 4 chức năng tâm lý thiết yếu: Chức năng phán đoán (suy
                    nghĩ và cảm giác) và chức năng nhận thức (cảm giác và trực
                    giác). Kế thừa điều này, Katharine Cook Briggs và Isabel
                    Briggs Myers đã phân loại tính cách dựa trên 4 tiêu chí gồm:
                  </div>
                  <div className="mobileni-bn-tp-container">
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
                        Cách bạn đối mặt với thế giới - Nguyên tắc (Judging)
                        hoặc Nhận thức (Perceiving).
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mobileframe-4273195482">
          <div className="mobileframe-4273192854">
            <div className="mobileframe-4273195494">
              <div className="mobilemobilembti-l-g1">16 nhóm tính cách</div>
              <div
                onClick={() => {
                  setIsShowNhomTinhCach(!isShowNhomTinhCach);
                }}
                className="mobilethu-gn2"
              >
                {isShowNhomTinhCach ? "Thu gọn" : "Chi tiết"}
              </div>
            </div>
            {isShowNhomTinhCach && (
              <div>
                <div
                  style={{
                    overflowX: "scroll",
                    width: "320px",
                    marginTop: "20px",
                  }}
                  className="mobileframe-4273195483"
                >
                  <div className="mobileframe-4273195582">
                    <img
                      className="mobilemobileimage-9-icon"
                      alt=""
                      src="./image-91@2x.png"
                    />
                    <div className="mobilearchitect">Architect</div>
                    <div className="mobilearchitect">INTJ</div>
                  </div>
                  <div className="mobileframe-4273195582">
                    <img
                      className="mobilemobileimage-9-icon"
                      alt=""
                      src="./image-10@2x.png"
                    />
                    <div className="mobilearchitect">Logician</div>
                    <div className="mobilearchitect">INTP</div>
                  </div>
                  <div className="mobileframe-4273195582">
                    <img
                      className="mobilemobileimage-9-icon"
                      alt=""
                      src="./image-11@2x.png"
                    />
                    <div className="mobilearchitect">Commander</div>
                    <div className="mobilearchitect">ENTJ</div>
                  </div>
                  <div className="mobileframe-4273195582">
                    <img
                      className="mobilemobileimage-9-icon"
                      alt=""
                      src="./image-12@2x.png"
                    />
                    <div className="mobilearchitect">Debater</div>
                    <div className="mobilearchitect">ENTP</div>
                  </div>
                </div>
                <div
                  style={{
                    overflowX: "scroll",
                    width: "320px",
                    marginTop: "20px",
                  }}
                  className="mobileframe-4273195483"
                >
                  <div className="mobileframe-4273195582">
                    <img
                      className="mobilemobileimage-9-icon"
                      alt=""
                      src="./image-13@2x.png"
                    />
                    <div className="mobilearchitect">Advocate</div>
                    <div className="mobilearchitect">INFJ</div>
                  </div>
                  <div className="mobileframe-4273195582">
                    <img
                      className="mobilemobileimage-9-icon"
                      alt=""
                      src="./image-14@2x.png"
                    />
                    <div className="mobilearchitect">Mediator</div>
                    <div className="mobilearchitect">INFP</div>
                  </div>
                  <div className="mobileframe-4273195582">
                    <img
                      className="mobilemobileimage-9-icon"
                      alt=""
                      src="./image-15@2x.png"
                    />
                    <div className="mobilearchitect">Protagonist</div>
                    <div className="mobilearchitect">ENFJ</div>
                  </div>
                  <div className="mobileframe-4273195582">
                    <img
                      className="mobilemobileimage-9-icon"
                      alt=""
                      src="./image-16@2x.png"
                    />
                    <div className="mobilearchitect">Campaigner</div>
                    <div className="mobilearchitect">ENFP</div>
                  </div>
                </div>
                <div
                  style={{
                    overflowX: "scroll",
                    width: "320px",
                    marginTop: "20px",
                  }}
                  className="mobileframe-4273195483"
                >
                  <div className="mobileframe-4273195582">
                    <img
                      className="mobilemobileimage-9-icon"
                      alt=""
                      src="./image-17@2x.png"
                    />
                    <div className="mobilearchitect">Logistician</div>
                    <div className="mobilearchitect">ISTJ</div>
                  </div>
                  <div className="mobileframe-4273195582">
                    <img
                      className="mobilemobileimage-9-icon"
                      alt=""
                      src="./image-18@2x.png"
                    />
                    <div className="mobilearchitect">Defender</div>
                    <div className="mobilearchitect">ISFJ</div>
                  </div>
                  <div className="mobileframe-4273195582">
                    <img
                      className="mobilemobileimage-9-icon"
                      alt=""
                      src="./image-19@2x.png"
                    />
                    <div className="mobilearchitect">Excutive</div>
                    <div className="mobilearchitect">ESTJ</div>
                  </div>
                  <div className="mobileframe-4273195582">
                    <img
                      className="mobilemobileimage-9-icon"
                      alt=""
                      src="./image-20@2x.png"
                    />
                    <div className="mobilearchitect">Consul</div>
                    <div className="mobilearchitect">ESFJ</div>
                  </div>
                </div>
                <div
                  style={{
                    overflowX: "scroll",
                    width: "320px",
                    marginTop: "20px",
                  }}
                  className="mobileframe-427319552"
                >
                  <div className="mobileframe-4273195582">
                    <img
                      className="mobilemobileimage-9-icon"
                      alt=""
                      src="./image-21@2x.png"
                    />
                    <div className="mobilearchitect">Virtuoso</div>
                    <div className="mobilearchitect">ISTP</div>
                  </div>
                  <div className="mobileframe-4273195582">
                    <img
                      className="mobilemobileimage-9-icon"
                      alt=""
                      src="./image-22@2x.png"
                    />
                    <div className="mobilearchitect">Adventurer</div>
                    <div className="mobilearchitect">ISFP</div>
                  </div>
                  <div className="mobileframe-4273195582">
                    <img
                      className="mobilemobileimage-9-icon"
                      alt=""
                      src="./image-23@2x.png"
                    />
                    <div className="mobilearchitect">Entrepreneur</div>
                    <div className="mobilearchitect">ESTP</div>
                  </div>
                  <div className="mobileframe-4273195582">
                    <img
                      className="mobilemobileimage-9-icon"
                      alt=""
                      src="./image-24@2x.png"
                    />
                    <div className="mobilearchitect">Entertainer</div>
                    <div className="mobilearchitect">ESFP</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mobileframe-4273192921">
          <div className="mobileframe-4273192853">
            <div className="mobileframe-4273195494">
              <div className="mobilemobilembti-l-g1">
                Thông tin chi tiết nhóm tính cách
              </div>
              <div
                onClick={() => {
                  setIsShowDetailNhoMTinhCach(!isShowDetailNhoMTinhCach);
                }}
                className="mobilethu-gn2"
              >
                {isShowDetailNhoMTinhCach ? "Thu gọn" : "Chi tiết"}
              </div>
            </div>
            {isShowDetailNhoMTinhCach && (
              <div className="mobileframe-427319585">
                <div className="mobileframe-427319580">
                  <div className="mobileframe-4273195493">
                    <div className="mobilemobileng-nhp">Ưu điểm</div>
                    <i
                      onClick={() => {
                        setIsShowUuDiem(!isShowUuDiem);
                      }}
                      className="mobilethu-gn5"
                    >
                      {isShowUuDiem ? "Thu gọn" : "Chi tiết"}
                    </i>
                  </div>
                  {isShowUuDiem && (
                    <div className="mobileframe-427319575">
                      <div className="mobileframe-427319573">
                        <div className="mobilemobilemobilenhm-tnh-c">
                          Sáng tạo một cách khác người
                        </div>
                        <div className="mobileframe-427319572">
                          <div className="mobilemobilemyers-briggs-type">
                            Một thế giới thiếu INTJ có thể sẽ rất nhàm chán. Họ
                            rất sáng tạo và hay nghĩ ra những ý tưởng mới lạ,
                            đôi lúc khá khác người.
                          </div>
                          <div className="mobilethc-t-intj-container">
                            {`Thực tế, INTJ là người đi đầu cho khá nhiều những phát minh lạ lẫm mà vô cùng thực tiễn của lịch sử loài người. Những người có ảnh hưởng nhất có thể kể đến Nikola Tesla, `}
                            <a
                              className="vladimir-lenin"
                              href="https://en.wikipedia.org/wiki/Vladimir_Lenin"
                              target="_blank"
                            >
                              <span className="vladimir-lenin1">
                                Vladimir Lenin
                              </span>
                            </a>
                            , Isaac Newton…
                          </div>
                        </div>
                      </div>
                      <div className="mobileframe-427319573">
                        <div className="mobilemobilemobilenhm-tnh-c">
                          Đối diện với chỉ trích
                        </div>
                        <div className="mobileframe-4273195721">
                          <div className="mobilemobilemyers-briggs-type">
                            Sáng tạo và khác người là vậy, nhóm tính cách INTJ
                            cũng không hề sợ bị chỉ trích. Họ luôn làm việc theo
                            cách riêng và không theo một khuôn phép nhất định
                            nào.
                          </div>
                        </div>
                      </div>
                      <div className="mobileframe-427319573">
                        <div className="mobilemobilemobilenhm-tnh-c">
                          Tự tin, cẩn thận
                        </div>
                        <div className="mobileframe-427319572">
                          <div className="mobilemobilemyers-briggs-type">
                            Những người thuộc nhóm tính cách INTJ là những người
                            hướng nội và thích ở một mình, ngẫm nghĩ trong thế
                            giới nội tâm của bản thân. Họ thích hợp làm việc độc
                            lập và thường không thích những công việc yêu cầu
                            tập thể.
                          </div>
                          <div className="mobilemobilemyers-briggs-type">
                            Hơn nữa, họ rất tự tin vào khả năng của mình và làm
                            mọi việc một cách cầu toàn.
                          </div>
                        </div>
                      </div>
                      <div className="mobileframe-427319573">
                        <div className="mobilemobilemobilenhm-tnh-c">
                          Lý trí, tư duy chiến lược
                        </div>
                        <div className="mobileframe-427319572">
                          <div className="mobilemobilemyers-briggs-type">
                            Các Kiến Trúc Sư rất tự tin với khả năng nhìn thấu
                            mọi thứ một cách logic. Mọi thử thách là cơ hội để
                            họ rèn luyện suy nghĩ và mở rộng kiến thức.
                          </div>
                          <div className="mobilemobilemyers-briggs-type">
                            Kết hợp với những chiến lược thông minh, họ có thể
                            đưa ra nhiều kế hoạch dự phòng trong cả công việc và
                            đời sống cá nhân. Họ thích lường trước và chuẩn bị
                            cho tất cả các khả năng và kết quả có thể xảy ra.
                          </div>
                        </div>
                      </div>
                      <div className="mobileframe-427319573">
                        <div className="mobilemobilemobilenhm-tnh-c">
                          Tham vọng
                        </div>
                        <div className="mobileframe-427319572">
                          <div className="mobilemobilemyers-briggs-type">
                            INTJ có tính cách quyết đoán và nhanh thích ứng với
                            mọi hoàn cảnh, nên họ hợp làm những nhà lãnh đạo.
                            Ngoài kỹ năng thiên bẩm để dẫn đầu, họ còn có tham
                            vọng lớn và luôn cố gắng vì mục tiêu cao cả.
                          </div>
                          <div className="mobilemobilemyers-briggs-type">
                            Vì lẽ đó, đa số INTJ đều có thể vươn lên hàng đầu và
                            chứng minh độ ảnh hưởng của mình.
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="mobileframe-427319580">
                  <div className="mobileframe-4273195493">
                    <div className="mobilemobileng-nhp">Nhược điểm</div>
                    <i
                      onClick={() => {
                        setIsShowNhuocDiem(!isShowNhuocDiem);
                      }}
                      className="mobilethu-gn5"
                    >
                      {isShowNhuocDiem ? "Thu gọn" : "Chi tiết"}
                    </i>
                  </div>
                  {isShowNhuocDiem && (
                    <div className="mobileframe-427319575">
                      <div className="mobileframe-427319573">
                        <div className="mobilemobilemobilenhm-tnh-c">
                          Đôi lúc quá phán xét
                        </div>
                        <div className="mobileframe-427319572">
                          <div className="mobilemobilemyers-briggs-type">
                            Các INTJ hay đi đến kết luận khá nhanh chóng mà
                            không cân nhắc từ những cái nhìn khác. Dù họ có xu
                            hướng cởi mở, tính cách này lại thiếu kiên nhẫn với
                            những điều họ cho là không hợp lý.
                          </div>
                          <div className="mobilemobilemyers-briggs-type">
                            INTJ hay phê phán những quyết định dựa trên tình cảm
                            và thường có ít sự tôn trọng với những người như
                            vậy.
                          </div>
                        </div>
                      </div>
                      <div className="mobileframe-427319573">
                        <div className="mobilemobilemobilenhm-tnh-c">
                          Quá cầu toàn
                        </div>
                        <div className="mobileframe-4273195721">
                          <div className="mobilemobilemyers-briggs-type">
                            Là những người theo chủ nghĩa cầu toàn, INTJ đôi lúc
                            bị nghĩ là những người quá khó tính. Một khi họ muốn
                            mọi thứ hoàn hảo, những người khác cũng phải làm mọi
                            việc thật hoàn mỹ theo ý họ muốn. Nếu không, họ sẽ
                            không ngại mà chỉ trích bạn đấy.
                          </div>
                        </div>
                      </div>
                      <div className="mobileframe-427319573">
                        <div className="mobilemobilemobilenhm-tnh-c">
                          Khó “mở lòng”
                        </div>
                        <div className="mobileframe-427319572">
                          <div className="mobilemobilemyers-briggs-type">
                            Nói về cảm xúc là một thứ không hay ho lắm với INTJ.
                            Người khác hay nhìn nhận INTJ là những người khá vô
                            cảm và lãnh đạm. Bởi vậy, muốn kết thân với INTJ có
                            vẻ khá khó ở giai đoạn đầu.
                          </div>
                          <div className="mobilemobilemyers-briggs-type">
                            Nhóm tính cách này không hứng thú với những sự kiện
                            đông người, chỉ thích tiếp xúc với số ít người thân,
                            bạn bè họ đã quen từ lâu.
                          </div>
                        </div>
                      </div>
                      <div className="mobileframe-427319573">
                        <div className="mobilemobilemobilenhm-tnh-c">
                          Thiếu nhạy cảm
                        </div>
                        <div className="mobileframe-427319572">
                          <div className="mobilemobilemyers-briggs-type">
                            INTJ có khiếu hài hước khá lạ nhưng lại dễ động
                            chạm. Thường những tính cách nhóm NT hoặc NF (như
                            INFP, ENTP) sẽ hiểu cá tính của INTJ, ngược lại với
                            nhóm người mang đặc điểm S (nhạy cảm).
                          </div>
                          <div className="mobilemobilemyers-briggs-type">
                            Cá tính “thẳng như ruột ngựa” của INTJ có thể dễ làm
                            người khác tự ái, thậm chí tổn thương long tự trọng
                            của người ta.
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="mobileframe-427319580">
                  <div className="mobileframe-4273195493">
                    <div className="mobilemobileng-nhp">Các ngành phù hợp</div>
                    <i
                      onClick={() => {
                        setIsShowNganhPhuHop(!isShowNganhPhuHop);
                      }}
                      className="mobilethu-gn5"
                    >
                      {isShowNganhPhuHop ? "Thu gọn" : "Chi tiết"}
                    </i>
                  </div>
                  {isShowNganhPhuHop && (
                    <div className="mobileframe-427319573">
                      <div className="mobilemobilemyers-briggs-type">
                        Ngành luật.
                      </div>
                      <div className="mobilemobilemyers-briggs-type">
                        Ngành Kinh tế - Quản lý.
                      </div>
                      <div className="mobilemobilemyers-briggs-type">
                        Ngành Máy tính.
                      </div>
                      <div className="mobilemobilemyers-briggs-type">
                        Ngành Y Tế.
                      </div>
                      <div className="mobilemobilemyers-briggs-type">
                        Ngành Công An - Quân Đội.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const XetTuyenDaiHoc = ({ setTab }) => {
  const [isShowDinhHuong, setIsShowDinhHuong] = useState(false);
  const [isShowTopNganh, setIsShowTopNganh] = useState(false);
  const [isShowThongTinDaiHoc, setIsShowThongTinDaiHoc] = useState(false);
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
      <div
        onClick={() => {
          setTab("nhomTinhCach");
        }}
        className="mobilemobileframe-4273195401"
      >
        <div className="mobilemobilebutton-arrow1">
          <img
            className="mobilechevron-arrow-right-icon1"
            alt=""
            src="/mobilechevronarrowright1.svg"
          />
        </div>
        <b className="mobilemobilemobilenhm-tnh-c">Xét tuyển đại học</b>
      </div>
      <div
        style={{ marginTop: "50px" }}
        className="mobilemobileframe-4273195471"
      >
        <div className="mobileframe-4273195461">
          <div className="mobileframe-4273195431">
            <div className="mobileframe-4273195411">
              <b className="mobilemobiletext12">{`Khám phá `}</b>
              <div className="mobilemobiletext13">
                Nhóm các nhóm ngành hiện nay
              </div>
              <div className="mobilemobiletext14">
                Tìm hiểu thêm về nhóm tính cách của bản thân và tham khảo các
                nguyện vọng đăng ký phù hợp cùng chúng tôi.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobilemobileframe-4273195572">
        <div className="mobileframe-4273192922">
          <div className="mobileframe-4273192856">
            <div className="mobileframe-4273195497">
              <div className="mobilemobilenh-hng-ngh">
                Định hướng nghề nghiệp là gì?
              </div>
              <div
                onClick={() => {
                  setIsShowDinhHuong(!isShowDinhHuong);
                }}
                className="mobilemobilethu-gn"
              >
                {isShowDinhHuong ? "Thu gọn" : "Chi tiết"}
              </div>
            </div>
            {isShowDinhHuong && (
              <div className="mobileframe-4273195484">
                <div className="mobilemobiletuy-nhin-nu">
                  Định hướng nghề nghiệp là một trong những điều rất quan trọng
                  đối với các bạn trẻ. Ai trong số chúng ta cũng mong muốn kiếm
                  cho mình được công việc phù hợp với đam mê, đúng chuyên ngành
                  đang học, không chỉ vậy, thu nhập cũng phải ổn định.
                </div>
                <div className="mobilemobiletuy-nhin-nu">
                  Tuy nhiên, nếu biết nắm bắt làm các ngành nghề phù hợp với xu
                  hướng hiện tại, bạn sẽ có nhiều cơ hội mở rộng hơn để phát
                  triển bản thân hơn.
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mobileframe-4273195485">
          <div className="mobileframe-4273192857">
            <div className="mobileframe-4273195498">
              <div className="mobilemobilenh-hng-ngh">
                Top 7 ngành nghề “Hot” hiện nay
              </div>
              <div
                onClick={() => {
                  setIsShowTopNganh(!isShowTopNganh);
                }}
                className="mobilemobilethu-gn"
              >
                {isShowTopNganh ? "Thu gọn" : "Chi tiết"}
              </div>
            </div>
            {isShowTopNganh && (
              <div>
                {listTop7Career.map((item, index) => {
                  return (
                    <div
                      key={index}
                      style={{
                        overflowX: "scroll",
                        width: "320px",
                        marginTop: "20px",
                      }}
                      className="mobileframe-4273195486"
                    >
                      {item.listCareer.map((item2, index2) => {
                        return (
                          <div key={index2} className="mobileframe-4273195412">
                            <img
                              style={styles.uniImage}
                              alt=""
                              src={item2.image}
                            />
                            <div className="mobilemobilecng-ngh-thng">
                              {item2.name}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
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
                {listUni?.slice(0, 6).map((item, index) => {
                  return (
                    <div key={index} className="mobileframe-4273195634">
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

const ModalDangXuat = ({ setIsShowModalDangXuat }) => {
  return (
    <div
      onClick={() => {
        console.log("click");
      }}
      className="mobileframe-427319202"
    >
      <div className="mobilemask-group-parent">
        <img
          className="mobilemask-group-icon"
          alt=""
          src="/mobilemask-group.svg"
        />
        <div className="mobilevirtuoso">Thông báo</div>
        <div className="mobileu-nu-bn">{`Ầu nâu bạn muốn đăng xuất à :<<`}</div>
      </div>
      <div className="frame-parent54">
        <div
          onClick={() => {
            localStorage.removeItem("user");
            setIsShowModalDangXuat(false);
            window.location.reload();
          }}
          className="mobileng-xut-wrapper"
        >
          <div className="mobilevirtuoso">Đăng xuất</div>
        </div>
        <div
          onClick={() => {
            setIsShowModalDangXuat(false);
          }}
          className="mobilecancel-wrapper"
        >
          <div className="mobilecancel">Cancel</div>
        </div>
      </div>
    </div>
  );
};

const ModalChatDetail = ({
  message,
  setMessage,
  setIsShowModalChatDetail,
  setIsShowModalChat,
  userMessages,
  listMessages,
  sendMessage,
  user,
}) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        console.log("click");
      }}
      style={{ overflowY: "scroll", height: "464px" }}
      className="mobileframe-427319621"
    >
      <div className="mobile-frame-parent33">
        <div className="mobile-frame-parent34">
          <div
            onClick={() => {
              setIsShowModalChatDetail(false);
              setIsShowModalChat(true);
            }}
            className="mobilevuesaxlineararrow-left-parent"
          >
            <img
              className="mobilevuesaxlineararrow-left-icon"
              alt=""
              src="/mobilevuesaxlineararrowleft_chat.svg"
            />
            <div className="mobile2-wrapper">
              <b style={{ color: "#fff" }} className="mobile21">
                2
              </b>
            </div>
          </div>
          <div className="mobile-frame-parent35">
            <div className="mobilerectangle-48-wrapper">
              <img
                className="mobilerectangle-48-icon4"
                alt=""
                src={userMessages[0]?.image || "/mobilerectangle-481@2x.png"}
              />
            </div>
            <div className="mobileadmin1-parent">
              <div className="mobilekho-st-gi">
                {userMessages[0]?.name || "Admin1"}
              </div>
              <div className="mobileactive-parent">
                <div className="mobilekho-st-mi">Active</div>
                <div className="mobilemobileellipse-34" />
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-frame-parent36">
          <div
            style={{
              height: "270px",
              overflow: "auto",
              alignSelf: "stretch",
              display: "flex",
              //   flexDirection: "column",
              justifyContent: "flex-start",
              flexDirection: "column-reverse",
            }}
            className="mobile-frame-parent37"
          >
            {listMessages.map((item, index) => {
              if (+item[0]?.id_user_send !== +user.id) {
                return (
                  <div key={index} className="mobile100-parent">
                    <div className="mobilevuesaxlineararrow-left-parent">
                      <img
                        className="mobilerectangle-48-icon5"
                        alt=""
                        src={item[0]?.image || "./rectangle-486@2x.png"}
                      />
                    </div>
                    <div className="mobile-frame-parent39">
                      {item.map((item1, index1) => {
                        return (
                          <div key={index1} className="mobilehello-parent">
                            <div className="mobilekho-st-mi">
                              {item1?.content}
                            </div>
                            <div className="mobile1245-am">
                              {moment(
                                item1?.time,
                                "hh:mm:ss DD/MM/YYYY"
                              ).format("h:mm A")}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={index} className="mobile-frame-wrapper6">
                    <div className="mobile-frame-parent39">
                      {item.map((item1, index1) => {
                        return (
                          <div key={index1} className="mobilehello-parent">
                            <div className="mobilekho-st-mi">
                              {item1?.content}
                            </div>
                            <div className="mobile1245-am">
                              {moment(
                                item1?.time,
                                "hh:mm:ss DD/MM/YYYY"
                              ).format("h:mm A")}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="mobile-frame-parent46">
            <div className="mobilevit-g-i-wrapper">
              <input
                className="mobileonline"
                style={{
                  border: "none",
                  width: "100%",
                  outline: "none",
                  backgroundColor: "#fff",
                  boxShadow: "none",
                  fontSize: "14px",
                  color: "#271E4A",
                }}
                placeholder="Viết gì đó đi..."
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></input>
            </div>
            <div
              onClick={() => {
                sendMessage();
              }}
              className="vuesaxlinearsend"
            >
              <img
                className="mobilevuesaxlineararrow-left-icon"
                alt=""
                src="/mobilesend.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const ModalChat = ({
  listUserMessage,
  listAllMessage,
  onChangeUserMessage,
}) => {
  console.log("listUserMessage: ", listUserMessage);
  console.log("listAllMessage: ", listAllMessage);
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="mobileframe-182"
    >
      <div className="mobile-frame-parent128">
        <div className="mobilekho-st-gi-parent1">
          <div className="mobiletin-nhn-frame">
            <div className="mobilekho-st-gi3">Tin nhắn</div>
          </div>
          <div className="mobileactive-parent1">
            <div className="mobilekho-st-gi3">Active</div>
            <div className="mobilemobileellipse-343" />
          </div>
        </div>
        <div
          style={{ overflowY: "scroll", height: "400px" }}
          className="mobile-frame-parent130"
        >
          {listUserMessage.map((item, index) => {
            return (
              <div
                onClick={() => {
                  onChangeUserMessage(item, listAllMessage);
                }}
                key={index}
                className="mobile-frame-parent131"
              >
                <div className="mobile-frame-parent110">
                  <img
                    className="mobilemobileellipse-35-icon10"
                    alt=""
                    src={item?.image || "/mobilemobileellipse-35@2x.png"}
                  />
                  <div className="mobile-frame-parent132">
                    <div className="mobilefavour-nwaeze-wrapper8">
                      <div className="mobilefavour-nwaeze10">
                        {item.name.split(" ")[item.name.split(" ").length - 1]}
                      </div>
                    </div>
                    <div className="mobilehello-ken-hope10">
                      {listAllMessage[item?.id][0]?.content ||
                        "Hello Ken, Hope you are doing great"}
                    </div>
                  </div>
                </div>
                <div className="mobile5min-parent8">
                  <div className="mobilext-tuyn-i4">5min</div>
                  <div className="mobile2-wrapper9">
                    <b className="mobile216">2</b>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
const AdminMobile = ({ goToLogin }) => {
  const [tab, setTab] = useState("nhomTinhCach");
  const [isShowSideBar, setIsShowSideBar] = useState(false);
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("thongKe");
  const [isShowModalDangXuat, setIsShowModalDangXuat] = useState(false);
  const [isShowModalChat, setIsShowModalChat] = useState(false);
  const [isShowModalChatDetail, setIsShowModalChatDetail] = useState(false);

  const [listUserMessage, setListUserMessage] = useState([]);
  const [listAllMessage, setListAllMessage] = useState([]);
  const [listMessage, setListMessage] = useState([]);
  const [userMessage, setUserMessage] = useState({});
  const [message, setMessage] = useState("");
  const [currentUserMessage, setCurrentUserMessage] = useState({});
  const [socketMessage, setSocketMessage] = useState({});
  const [listUser, setListUser] = useState([]);

  const socketRef = useRef();

  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user) {
      user = JSON.parse(user);
      setUser(user);
    }
  }, []);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
    axios
      .get(`${apiUrl}/list_user`)
      .then((res) => {
        setListUser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`${apiUrl}/message/${user.id}`)
      .then((res) => {
        let groupUser = groupBy(res.data.data, "id");
        let groupUserMap = Object.values(groupUser).map((item) => {
          return {
            id: item[0].id,
            name: item[0].name,
            image: item[0].image,
          };
        });
        setListUserMessage(groupUserMap);
        setListAllMessage(groupUser);
        // onChangeUserMessage(groupUserMap[0], groupUser);
      })
      .catch((err) => {
        console.log(err);
      });
    socketRef.current = socketIOClient.connect("http://127.0.0.1:7000");

    socketRef.current.on("getId", (data) => {
      console.log("data: ", data);
    });

    socketRef.current.on("sendDataServer", (dataGot) => {
      if (+dataGot.data.id_user_receive === +user.id) {
        setSocketMessage(dataGot.data);
      }
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isEmpty(socketMessage)) return;
    axios
      .get(`${apiUrl}/message/${user.id}`)
      .then((res) => {
        let groupUser = groupBy(res.data.data, "id");
        let groupUserMap = Object.values(groupUser).map((item) => {
          return {
            id: item[0].id,
            name: item[0].name,
            image: item[0].image,
          };
        });
        onChangeUserMessage({ id: currentUserMessage?.id }, groupUser);
        setListAllMessage(groupUser);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [socketMessage]);

  const fetchMessage = (currentMessage) => {
    axios
      .get(`${apiUrl}/message/${user.id}`)
      .then((res) => {
        let groupUser = groupBy(res.data.data, "id");
        let groupUserMap = Object.values(groupUser).map((item) => {
          return {
            id: item[0].id,
            name: item[0].name,
            image: item[0].image,
          };
        });
        setListUserMessage(groupUserMap);
        setListAllMessage(groupUser);
        onChangeUserMessage(currentMessage, groupUser);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChangeUserMessage = (item, listAllMessages) => {
    setCurrentUserMessage(item);
    let listMessage = listAllMessages[item.id];
    let sortMessage = listMessage
      .sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return (
          new Date(moment(a.time, "hh:mm:ss DD/MM/YYY")) -
          new Date(moment(b.time, "hh:mm:ss DD/MM/YYY"))
        );
      })
      .reverse();
    let groupSortMessage = [];
    let newGroup = [];
    for (let i = 0; i < sortMessage.length; i++) {
      if (i === 0) {
        newGroup.push(sortMessage[i]);
        if (sortMessage.length === 1) {
          groupSortMessage.push(newGroup);
        }
      } else {
        if (sortMessage[i].id_user_send === sortMessage[i - 1].id_user_send) {
          newGroup.push(sortMessage[i]);
          if (i === sortMessage.length - 1) {
            groupSortMessage.push(newGroup);
          }
        } else {
          groupSortMessage.push(newGroup);
          newGroup = [];
          newGroup.push(sortMessage[i]);
          if (i === sortMessage.length - 1) {
            groupSortMessage.push(newGroup);
          }
        }
      }
    }

    setUserMessage(sortMessage);
    let mapGroupSortMessage = groupSortMessage.map((item) => {
      return item.reverse();
    });
    setListMessage(mapGroupSortMessage);
    setIsShowModalChat(false);
    setIsShowModalChatDetail(true);
  };

  const sendMessage = () => {
    if (message === "") {
      return;
    }
    let data = {
      id_user_send: `${user.id}`,
      id_user_receive: `${userMessage[0].id}`,
      content: message,
      time: moment().format("hh:mm:ss DD/MM/YYYY"),
    };
    axios
      .post(`${apiUrl}/message`, data)
      .then((res) => {
        setMessage("");
        fetchMessage(userMessage[0]);
        socketRef.current.emit("sendDataClient", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      onClick={() => {
        if (isShowModalDangXuat) {
          setIsShowModalDangXuat(false);
        }
        if (isShowModalChat) {
          setIsShowModalChat(false);
        }
        if (isShowModalChatDetail) {
          setIsShowModalChatDetail(false);
        }
      }}
      style={{
        overflow: isShowSideBar ? "hidden" : null,
        width: "100vw",
        height: isShowSideBar ? window.innerHeight : null,
      }}
      className="mobilemobilemobilenhomtinhcach"
    >
      <div className="mobileframe-4273195581">
        <div className="mobileframe-4273195711">
          <div
            onClick={() => {
              setIsShowSideBar(!isShowSideBar);
            }}
            className="mobileframe-4273190742"
          >
            <img
              className="mobilemobilevuesaxlinearside-icon8"
              alt=""
              src="/mobilevuesaxlinearsidebarright5.svg"
            />
          </div>
          {page === "thongKe" && (
            <div className="mobilemobiletrang-ch">Thống kê</div>
          )}
          {page === "quanLyNguoiDung" && (
            <div className="mobilemobiletrang-ch">Quản lý người dùng</div>
          )}
          {page === "quanLyTuyenSinh" && (
            <div className="mobilemobiletrang-ch">Quản lý tuyển sinh</div>
          )}
          {page === "quanLyNguyenVong" && (
            <div className="mobilemobiletrang-ch">Quản lý nguyện vọng</div>
          )}
          {page === "thongTinUser" && (
            <div className="mobilemobiletrang-ch">
              {user
                ? user.name.split(" ")[user.name.split(" ").length - 1]
                : "Guest#1111"}
            </div>
          )}
        </div>
        {!!user && (
          <div className="mobileiconoutlinedapplicatio-wrapper4">
            <img
              className="mobileiconoutlinedapplicatio7"
              alt=""
              src="/mobileiconoutlinedapplicationbell.svg"
            />
          </div>
        )}
        {!user && (
          <div
            onClick={() => {
              goToLogin();
            }}
            className="mobileframe-4273194011"
          >
            <div className="mobilemobileng-nhp">Đăng nhập</div>
          </div>
        )}
      </div>
      {page === "thongKe" && <ThongKe isShowModalChat />}
      {page === "quanLyNguoiDung" && <QuanLyUserMobile />}
      {page === "quanLyNguyenVong" && <QuanLyNguyenVongMobile />}
      {page === "quanLyTuyenSinh" && <QuanLyTuyenSinhMobile />}
      {page === "thongTinUser" && (
        <ThongTinUserMobile
          editUser={user}
          setPage={setPage}
          setUserAdmin={setUser}
        />
      )}
      <div>
        {isShowSideBar && (
          <SideBar
            user={user}
            setIsShowSideBar={setIsShowSideBar}
            page={page}
            setPage={setPage}
            setIsShowModalDangXuat={setIsShowModalDangXuat}
          />
        )}
      </div>
      {isShowModalDangXuat && (
        <ModalDangXuat setIsShowModalDangXuat={setIsShowModalDangXuat} />
      )}
      {page === "thongKe" && (
        <img
          onClick={() => {
            setIsShowModalChat(true);
          }}
          className="mobileframe-427319648-icon5"
          alt=""
          src="/mobileframe-427319648.svg"
        />
      )}
      {isShowModalChat && (
        <ModalChat
          listUserMessage={listUserMessage}
          listAllMessage={listAllMessage}
          onChangeUserMessage={onChangeUserMessage}
        />
      )}
      {isShowModalChatDetail && (
        <ModalChatDetail
          message={message}
          setMessage={setMessage}
          setIsShowModalChatDetail={setIsShowModalChatDetail}
          setIsShowModalChat={setIsShowModalChat}
          userMessages={userMessage}
          listMessages={listMessage}
          sendMessage={sendMessage}
          user={user}
        />
      )}
    </div>
  );
};

const styles = {
  uniImage: {
    borderRadius: "26px",
    width: "168px",
    height: "110px",
    marginTop: "8px",
  },
};

export default AdminMobile;
