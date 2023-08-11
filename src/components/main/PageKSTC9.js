import { styles } from "../../pages/TrangCh1";
import axios from "axios";
import { apiUrl } from "../../constants/api";
export const PageKSTC9 = ({ prevPage, personality, setCurPage }) => {
  let first = personality?.fullResult[0] || "";
  let second = personality?.fullResult[1] || "";
  let third = personality?.fullResult[2] || "";
  let fourth = personality?.fullResult[3] || "";
  let fifth = personality?.fullResult[5] || "";
  return (
    <div className="kstcframe-427319381">
      <div className="kstcframe-427319396">
        <div className="kstcframe-427319380">
          <div
            onClick={() => {
              prevPage();
            }}
            className="virtuoso"
          >
            {personality?.name || ""}
          </div>
          <div className="istp-t">{`${personality?.fullResult.slice(
            0,
            4
          )} - ${personality?.fullResult.slice(5, 6)}`}</div>
        </div>
        <div className="kstcframe-427319382">
          <img
            className="kstcimage-21-icon"
            alt=""
            src={personality?.image || "/kstcimage-21@2x.png"}
          />
        </div>
      </div>
      <div className="kstcframe-427319395">
        <div className="kstcframe-427319391">
          <div className="kstcframe-427319386">
            <div className="kstcframe-427319383">
              <div className="kstcframe-427319384">
                <div className="introverted">
                  <span className="i">{first}</span>
                  <span>{first === "I" ? "ntroverted" : "xtrovert"}</span>
                </div>
                <div className="hng-ni">
                  {first === "I" ? "(Hướng nội)" : "(Hướng ngoại)"}
                </div>
                <div className="div">{personality?.percentType1 || "51"}%</div>
              </div>
              <div className="thch-cc-ni">
                {first === "I"
                  ? "Thích các nơi yên tĩnh, không thích tiếp xúc với người lạ."
                  : "Luôn giàu năng lượng và được thúc đẩy bởi đám đông."}
              </div>
            </div>
            <div className="kstcframe-427319385">
              <div className="kstcframe-427319384">
                <div className="introverted">
                  <span className="i">{third}</span>
                  <span>{third === "F" ? "eeling" : "hinking"}</span>
                </div>
                <div className="hng-ni">
                  {third === "F" ? "(Cảm xúc)" : "(Lý trí)"}
                </div>
                <div className="div">{personality?.percentType3 || "51"}%</div>
              </div>
              <div className="thch-cc-ni">
                {third === "F"
                  ? "Luôn xử lý các hành động theo cảm xúc."
                  : "Luôn giữ được “cái đầu lạnh” cùng hạnh động hợp lý."}
              </div>
            </div>
          </div>
          <div className="kstcframe-427319387">
            <div style={{ maxWidth: "640px" }} className="kstcframe-427319383">
              <div className="kstcframe-4273193843">
                <div className="introverted">
                  <span>{second === "S" ? "" : "i"}</span>
                  <span className="i">{second}</span>
                  <span>{second === "S" ? "ensing" : "tuition"}</span>
                </div>
                <div className="hng-ni">
                  {second === "S" ? "(Cảm nhận)" : "(Trực giác)"}
                </div>
                <div className="div">{personality?.percentType2 || "51"}%</div>
              </div>
              <div className="thch-cc-ni">
                {second === "S"
                  ? "Thường đi sâu vào chi tiết nhỏ hơn là nhìn vào bức tranh toàn cảnh."
                  : "Sử dụng trực giác và tập trung nhìn vào bức tranh toàn cảnh hơn là những chi tiết nhỏ nhặt."}
              </div>
            </div>
            <div className="kstcframe-427319385">
              <div className="kstcframe-4273193843">
                <div className="introverted">
                  <span className="i">{fourth}</span>
                  <span>{fourth === "P" ? "erceiving" : "udgement"}</span>
                </div>
                <div className="hng-ni">
                  {fourth === "P" ? "(Nhận thức)" : "(Nguyên tắc)"}
                </div>
                <div className="div">{personality?.percentType4 || "51"}%</div>
              </div>
              <div className="thch-cc-ni">
                {fourth === "P"
                  ? "Luôn dành thời gian quan sát, nhìn sự việc đa chiều theo từng hoàn cảnh và môi trường."
                  : "Thích lập các kế hoạch sớm và tuân thủ các nguyên tắc."}
              </div>
            </div>
          </div>
        </div>
        <div className="kstcframe-4273193831">
          <div className="kstcframe-4273193843">
            <div className="introverted">
              <span className="i">{fifth}</span>
              <span>{fifth === "A" ? "ssertive" : "urbulent"}</span>
            </div>
            <div className="hng-ni">
              {fifth === "A" ? "(Hỗn loạn)" : "(Quyết đoán)"}
            </div>
            <div className="div">{personality?.percentType5 || "51"}%</div>
          </div>
          <div className="nhn-thc-su">
            {fifth === "A"
              ? "Nhận thức sâu sắc về mọi thứ, thường hay lo lắng về sự khó đoán và hay suy nghĩ về những sự thất bại."
              : "Bình tĩnh và tự tin vào khả năng của bản thân để giải quyết vấn đề trong cuộc sống."}
          </div>
        </div>
      </div>
      <div className="frame-parent762">
        <div
          onClick={() => {
            setCurPage(0);
            //scroll to top
            window.scrollTo(0, 0);
          }}
          style={styles.button}
          className="xem-kt-qu-xut-wrapper2"
        >
          <div className="gi-nguyn6">Thực hiện lại khảo sát</div>
        </div>
      </div>
    </div>
  );
};
