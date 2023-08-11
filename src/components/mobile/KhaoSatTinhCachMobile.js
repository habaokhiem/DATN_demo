import { useEffect, useState } from "react";
import { listQuestion } from "../../constants/listQuestion";
import "./khao-sat-tinh-cach-mobile.css";
import "./mobile-mobile-mobile-khao-sat-tinh-c.css";
import { apiUrl } from "../../constants/api";
import axios from "axios";
import { list16Personality } from "../../constants/list16Personality";

const AnswerList = ({ questionID, onChangeAnswer, type, listAnswer }) => {
  let curValue = listAnswer.find((item) => item.questionID === questionID);
  if (curValue) {
    curValue = curValue.value;
  } else {
    curValue = null;
  }
  return (
    <div className="mobilemobilemobileellipse-138-parent">
      {curValue === -3 ? (
        <div
          //  onClick={() => {
          //    onChangeAnswer(questionID, -3, type);
          //  }}
          className="mobilemobilemobileellipse-1381_Picked"
        />
      ) : (
        <div
          onClick={() => {
            onChangeAnswer(questionID, -3, type);
          }}
          className="mobilemobilemobileellipse-1381"
        />
      )}
      {curValue === -2 ? (
        <div className="mobilemobilemobileellipse-140_Picked" />
      ) : (
        <div
          onClick={() => {
            onChangeAnswer(questionID, -2, type);
          }}
          className="mobilemobilemobileellipse-140"
        />
      )}
      {curValue === -1 ? (
        <div className="mobilemobilemobileellipse-141_Picked" />
      ) : (
        <div
          onClick={() => {
            onChangeAnswer(questionID, -1, type);
          }}
          className="mobilemobilemobileellipse-141"
        />
      )}
      {curValue === 0 ? (
        <div className="mobilemobilemobileellipse-142_Picked" />
      ) : (
        <div
          onClick={() => {
            onChangeAnswer(questionID, 0, type);
          }}
          className="mobilemobilemobileellipse-142"
        />
      )}
      {curValue === 1 ? (
        <div className="mobilemobilemobileellipse-143_Picked" />
      ) : (
        <div
          onClick={() => {
            onChangeAnswer(questionID, 1, type);
          }}
          className="mobilemobilemobileellipse-143"
        />
      )}
      {curValue === 2 ? (
        <div className="mobilemobilemobileellipse-139_Picked" />
      ) : (
        <div
          onClick={() => {
            onChangeAnswer(questionID, 2, type);
          }}
          className="mobilemobilemobileellipse-139"
        />
      )}
      {curValue === 3 ? (
        <div className="mobilemobilemobileellipse-145_Picked" />
      ) : (
        <div
          onClick={() => {
            onChangeAnswer(questionID, 3, type);
          }}
          className="mobilemobilemobileellipse-145"
        />
      )}
    </div>
  );
};
const Question = ({
  questionID,
  onChangeAnswer,
  type,
  listAnswer,
  justPickedAnswer,
  question,
}) => {
  let finalQuestion = question?.join(" ");
  console.log("finalQuestion: ", finalQuestion);
  return justPickedAnswer === questionID - 1 ? (
    <div className={"mobilebn-thng-xuyn-kt-bn-parent"}>
      <div className="mobilebn-thng-xuyn">{finalQuestion}</div>
      <div className="frame-parent298">
        <AnswerList
          questionID={questionID}
          onChangeAnswer={onChangeAnswer}
          type={type}
          listAnswer={listAnswer}
        />
        <div className="mobileng-parent">
          <div className="mobilebn-thng-xuyn">Đồng ý</div>
          <div className="mobilekhng-ng">Không đồng ý</div>
        </div>
      </div>
    </div>
  ) : (
    <div className="mobilebn-dnh-nhiu-thi-gian-parent">
      <div className="mobilebn-dnh-nhiu">{finalQuestion}</div>
      <div className="frame-parent299">
        <AnswerList
          questionID={questionID}
          onChangeAnswer={onChangeAnswer}
          type={type}
          listAnswer={listAnswer}
        />
        <div className="mobileng-parent">
          <div className="mobilebn-thng-xuyn">Đồng ý</div>
          <div className="mobilekhng-ng">Không đồng ý</div>
        </div>
      </div>
    </div>
  );
};

const PageKSTCMobile = ({
  nextPage,
  prevPage,
  onChangeAnswer,
  listAnswer,
  justPickedAnswer,
  curPage,
}) => {
  let listQuestionOnPage = listQuestion.filter((item) => item.page === curPage);
  return (
    <div className="iphone-8-121">
      <div className="mobileframe-427319593">
        <div className="mobile09-parent">
          <div className="mobile09">{curPage}/9</div>
          <div className="mobilemobilemobilerectangle-34" />
          <div className="mobilemobilemobilerectangle-34" />
          <div className="mobilemobilemobilerectangle-34" />
          <div className="mobilemobilemobilerectangle-34" />
          <div className="mobilemobilemobilerectangle-34" />
          <div className="mobilemobilemobilerectangle-34" />
          <div className="mobilemobilemobilerectangle-34" />
          <div className="mobilemobilemobilerectangle-34" />
          <div className="mobilemobilemobilerectangle-34" />
        </div>
      </div>
      <div className="mobileframe-427319597">
        <div className="mobileframe-427319597-inner">
          <div className="frame-parent297">
            {listQuestionOnPage.map((question, index) => {
              console.log("question: ", question);
              return (
                <Question
                  key={index}
                  questionID={question.id}
                  onChangeAnswer={onChangeAnswer}
                  type={question.type}
                  listAnswer={listAnswer}
                  justPickedAnswer={justPickedAnswer}
                  question={question.question}
                />
              );
            })}
          </div>
        </div>
        <div className="frame-parent304">
          <div
            onClick={() => {
              prevPage();
            }}
            className="mobilemobileiconoutlineddire-parent"
          >
            <img
              className="mobilemobileiconoutlineddire"
              alt=""
              src="/mobilemobileiconoutlineddirectionalswapleft.svg"
            />
            <div className="mobilequay-li5">Quay lại</div>
          </div>
          {curPage === 8 ? (
            <div
              onClick={() => {
                nextPage();
              }}
              className="mobiletip-tc-parent3"
            >
              <div className="mobiletip-tc5">Gửi</div>
              <img
                className="mobilemobileiconoutlineddire"
                alt=""
                src="/kstc1starfourr.svg"
              />
            </div>
          ) : (
            <div
              onClick={() => {
                nextPage();
              }}
              className="mobiletip-tc-parent3"
            >
              <div className="mobiletip-tc5">Tiếp tục</div>
              <img
                className="mobilemobileiconoutlineddire"
                alt=""
                src="/mobilemobileiconoutlineddirectionalswapright.svg"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const PageKSTCResult = ({ setCurPage, prevPage, personality }) => {
  let first = personality?.fullResult[0] || "";
  let second = personality?.fullResult[1] || "";
  let third = personality?.fullResult[2] || "";
  let fourth = personality?.fullResult[3] || "";
  let fifth = personality?.fullResult[5] || "";
  return (
    <div className="iphone-8-120">
      <div className="mobileframe-427319391">
        <div className="mobilemobileimage-21-parent1">
          <img
            className="mobilemobileimage-21-icon3"
            alt=""
            src={personality?.image || "/mobilemobileimage-21@2x.png"}
          />
          <div className="mobilevirtuoso-parent7">
            <div className="mobilevirtuoso9"> {personality?.name || ""}</div>
            <div className="mobileistp-t9">{`${personality?.fullResult.slice(
              0,
              4
            )} - ${personality?.fullResult.slice(5, 6)}`}</div>
          </div>
        </div>
        <div className="frame-parent289">
          <div className="frame-parent290">
            <div className="frame-parent291">
              <div className="mobileintroverted-parent8">
                <div className="mobileintroverted10">
                  <span className="i11">{first}</span>
                  <span>{first === "I" ? "ntroverted" : "xtrovert"}</span>
                </div>
                <div className="mobileintroverted10">
                  {first === "I" ? "(Hướng nội)" : "(Hướng ngoại)"}
                </div>
                <div className="mobile549">
                  {personality?.percentType1 || "51"}%
                </div>
              </div>
              <div className="mobilethch-cc-ni10">
                {first === "I"
                  ? "Thích các nơi yên tĩnh, không thích tiếp xúc với người lạ."
                  : "Luôn giàu năng lượng và được thúc đẩy bởi đám đông."}
              </div>
            </div>
            <div className="frame-parent291">
              <div className="mobileintroverted-parent8">
                <div className="mobileintroverted10">
                  <span className="i11">{third}</span>
                  <span>{third === "F" ? "eeling" : "hinking"}</span>
                </div>
                <div className="mobileintroverted10">
                  {third === "F" ? "(Cảm xúc)" : "(Lý trí)"}
                </div>
                <div className="mobile549">
                  {personality?.percentType3 || "51"}%
                </div>
              </div>
              <div className="mobilethch-cc-ni10">
                {third === "F"
                  ? "Luôn xử lý các hành động theo cảm xúc."
                  : "Luôn giữ được “cái đầu lạnh” cùng hạnh động hợp lý."}
              </div>
            </div>
          </div>
          <div className="frame-parent293">
            <div className="frame-parent291">
              <div className="mobileintroverted-parent8">
                <div className="mobileintroverted10">
                  <span>{second === "S" ? "" : "i"}</span>
                  <span className="i11">{second}</span>
                  <span>{second === "S" ? "ensing" : "tuition"}</span>
                </div>
                <div className="mobileintroverted10">
                  {second === "S" ? "(Cảm nhận)" : "(Trực giác)"}
                </div>
                <div className="mobile549">
                  {personality?.percentType2 || "51"}%
                </div>
              </div>
              <div className="mobilethch-cc-ni10">
                {second === "S"
                  ? "Thường đi sâu vào chi tiết nhỏ hơn là nhìn vào bức tranh toàn cảnh."
                  : "Sử dụng trực giác và tập trung nhìn vào bức tranh toàn cảnh hơn là những chi tiết nhỏ nhặt."}
              </div>
            </div>
            <div className="frame-parent291">
              <div className="mobileintroverted-parent8">
                <div className="mobileintroverted10">
                  <span className="i11">{fourth}</span>
                  <span>{fourth === "P" ? "erceiving" : "udgement"}</span>
                </div>
                <div className="mobileintroverted10">
                  {fourth === "P" ? "(Nhận thức)" : "(Nguyên tắc)"}
                </div>
                <div className="mobile549">
                  {personality?.percentType4 || "51"}%
                </div>
              </div>
              <div className="mobilethch-cc-ni10">
                {fourth === "P"
                  ? "Luôn dành thời gian quan sát, nhìn sự việc đa chiều theo từng hoàn cảnh và môi trường."
                  : "Thích lập các kế hoạch sớm và tuân thủ các nguyên tắc."}
              </div>
            </div>
            <div className="frame-parent291">
              <div className="mobileintroverted-parent8">
                <div className="mobileintroverted10">
                  <span className="i11">{fifth}</span>
                  <span>{fifth === "A" ? "ssertive" : "urbulent"}</span>
                </div>
                <div className="mobileintroverted10">
                  {fifth === "A" ? "(Hỗn loạn)" : "(Quyết đoán)"}
                </div>
                <div className="mobile549">
                  {personality?.percentType5 || "51"}%
                </div>
              </div>
              <div className="mobilethch-cc-ni10">
                {fifth === "A"
                  ? "Nhận thức sâu sắc về mọi thứ, thường hay lo lắng về sự khó đoán và hay suy nghĩ về những sự thất bại."
                  : "Bình tĩnh và tự tin vào khả năng của bản thân để giải quyết vấn đề trong cuộc sống."}
              </div>
            </div>
            <div
              style={{ marginTop: "20px" }}
              onClick={() => {
                setCurPage(0);
              }}
              className="mobileng-xut-wrapper"
            >
              <div style={{color: '#fff'}} className="mobilevirtuoso">
                Làm lại khảo sát tính cách
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const KhaoSatTinhCachMobile = () => {
  const [curPage, setCurPage] = useState(0);
  const [listAnswer, setListAnswer] = useState([]);
  const [justPickedAnswer, setJustPickedAnswer] = useState(-1);
  const [personality, setPersonality] = useState({});

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (!!user) {
      //get personality
      axios
        .get(`${apiUrl}/personality/${user.id}`)
        .then((res) => {
          let userUpdate = user;
          if (res.data.data[0].personality) {
            userUpdate.personality = res.data.data[0]?.personality;
            // `${res.data.data[0]?.personality.slice(
            //   0,
            //   4
            // )} - ${res.data.data[0]?.personality.slice(5, 6)}` || null;
            userUpdate.percentType1 = res.data.data[0]?.percentType1 || null;
            userUpdate.percentType2 = res.data.data[0]?.percentType2 || null;
            userUpdate.percentType3 = res.data.data[0]?.percentType3 || null;
            userUpdate.percentType4 = res.data.data[0]?.percentType4 || null;
            userUpdate.percentType5 = res.data.data[0]?.percentType5 || null;
            localStorage.setItem("user", JSON.stringify(userUpdate));
            if (userUpdate?.personality) {
              setCurPage(9);
              setPersonality(userUpdate?.personality);
              let personality = list16Personality.find(
                (item) => item.code === userUpdate.personality.slice(0, 4)
              );
              setPersonality({
                ...personality,

                fullResult: userUpdate.personality,
                percentType1: userUpdate.percentType1,
                percentType2: userUpdate.percentType2,
                percentType3: userUpdate.percentType3,
                percentType4: userUpdate.percentType4,
                percentType5: userUpdate.percentType5,
              });
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  const nextPage = () => {
    setCurPage(curPage + 1);
    if (curPage === 8) {
      let listType1 = listAnswer.filter((item) => item.type === 1);
      let listType2 = listAnswer.filter((item) => item.type === 2);
      let listType3 = listAnswer.filter((item) => item.type === 3);
      let listType4 = listAnswer.filter((item) => item.type === 4);
      let listType5 = listAnswer.filter((item) => item.type === 5);

      let totalListType1 = listType1.reduce((a, b) => a + b.value, 0);
      let totalListType2 = listType2.reduce((a, b) => a + b.value, 0);
      let totalListType3 = listType3.reduce((a, b) => a + b.value, 0);
      let totalListType4 = listType4.reduce((a, b) => a + b.value, 0);
      let totalListType5 = listType5.reduce((a, b) => a + b.value, 0);

      let listNegativeType1 = listType1.filter((item) => item.value < 0);
      let listNegativeType2 = listType2.filter((item) => item.value < 0);
      let listNegativeType3 = listType3.filter((item) => item.value < 0);
      let listNegativeType4 = listType4.filter((item) => item.value < 0);
      let listNegativeType5 = listType5.filter((item) => item.value < 0);

      let listPositiveType1 = listType1.filter((item) => item.value > 0);
      let listPositiveType2 = listType2.filter((item) => item.value >= 0);
      let listPositiveType3 = listType3.filter((item) => item.value >= 0);
      let listPositiveType4 = listType4.filter((item) => item.value >= 0);
      let listPositiveType5 = listType5.filter((item) => item.value >= 0);

      let totalListNegativeType1 = listNegativeType1.reduce(
        (a, b) => a + b.value,
        0
      );
      let totalListNegativeType2 = listNegativeType2.reduce(
        (a, b) => a + b.value,
        0
      );
      let totalListNegativeType3 = listNegativeType3.reduce(
        (a, b) => a + b.value,
        0
      );
      let totalListNegativeType4 = listNegativeType4.reduce(
        (a, b) => a + b.value,
        0
      );
      let totalListNegativeType5 = listNegativeType5.reduce(
        (a, b) => a + b.value,
        0
      );

      let totalListPositiveType1 = listPositiveType1.reduce(
        (a, b) => a + b.value,
        0
      );
      let totalListPositiveType2 = listPositiveType2.reduce(
        (a, b) => a + b.value,
        0
      );
      let totalListPositiveType3 = listPositiveType3.reduce(
        (a, b) => a + b.value,
        0
      );
      let totalListPositiveType4 = listPositiveType4.reduce(
        (a, b) => a + b.value,
        0
      );
      let totalListPositiveType5 = listPositiveType5.reduce(
        (a, b) => a + b.value,
        0
      );

      let percentType1 =
        totalListPositiveType1 + totalListNegativeType1 === 0
          ? 51
          : Math.round(
              ((totalListPositiveType1 + totalListNegativeType1 >= 0
                ? totalListPositiveType1
                : -totalListNegativeType1) /
                (totalListPositiveType1 - totalListNegativeType1)) *
                100
            );
      let percentType2 =
        totalListPositiveType2 + totalListNegativeType2 === 0
          ? 51
          : Math.round(
              ((totalListPositiveType2 + totalListNegativeType2 >= 0
                ? totalListPositiveType2
                : -totalListNegativeType2) /
                (totalListPositiveType2 - totalListNegativeType2)) *
                100
            );
      let percentType3 =
        totalListPositiveType3 + totalListNegativeType3 === 0
          ? 51
          : Math.round(
              ((totalListPositiveType3 + totalListNegativeType3 >= 0
                ? totalListPositiveType3
                : -totalListNegativeType3) /
                (totalListPositiveType3 - totalListNegativeType3)) *
                100
            );
      let percentType4 =
        totalListPositiveType4 + totalListNegativeType4 === 0
          ? 51
          : Math.round(
              ((totalListPositiveType4 + totalListNegativeType4 >= 0
                ? totalListPositiveType4
                : -totalListNegativeType4) /
                (totalListPositiveType4 - totalListNegativeType4)) *
                100
            );
      let percentType5 =
        totalListPositiveType5 + totalListNegativeType5 === 0
          ? 51
          : Math.round(
              ((totalListPositiveType5 + totalListNegativeType5 >= 0
                ? totalListPositiveType5
                : -totalListNegativeType5) /
                (totalListPositiveType5 - totalListNegativeType5)) *
                100
            );
      let result = "";
      let fullResult = "";

      if (totalListType1 >= 0) {
        result += "E";
        fullResult += "E";
      } else {
        result += "I";
        fullResult += "I";
      }
      if (totalListType2 >= 0) {
        result += "N";
        fullResult += "N";
      } else {
        result += "S";
        fullResult += "S";
      }
      if (totalListType3 >= 0) {
        result += "T";
        fullResult += "T";
      } else {
        result += "F";
        fullResult += "F";
      }
      if (totalListType4 >= 0) {
        result += "J";
        fullResult += "J";
      } else {
        result += "P";
        fullResult += "P";
      }
      if (totalListType5 >= 0) {
        fullResult += "-A";
      } else {
        fullResult += "-T";
      }

      let personality = list16Personality.find((item) => item.code === result);
      setPersonality({
        ...personality,
        fullResult,
        percentType1,
        percentType2,
        percentType3,
        percentType4,
        percentType5,
      });
      let user = JSON.parse(localStorage.getItem("user"));
      const body = {
        user,
        info_person: {
          hovaten: user?.name || "test",
          hocluc: "",
          tinhcach: fullResult,
        },
        // nv: [
        //   {
        //     uni: "Học viện Âm nhạc Quốc gia Việt Nam",
        //     major: "Âm nhạc học",
        //     block: "N",
        //     islike: "Rất thích",
        //   },
        // ],
        nv: [],
        percentType1,
        percentType2,
        percentType3,
        percentType4,
        percentType5,
      };
      axios
        .post(`${apiUrl}/predict`, {
          data: body,
        })
        .then((res) => {
          // setPersonality(res.data);
          // setPage("dsnv");
          //scroll to top

          window.scrollTo(0, 0);
        })
        .catch((err) => {
          alert("Có lỗi xảy ra, vui lòng thử lại sau");
          console.log("err: ", err);
        });

      // setPersonality(result);
      setListAnswer([]);
    }
    //scroll to top
    window.scrollTo(0, 0, { behavior: "smooth" });
  };
  const prevPage = () => {
    setCurPage(curPage - 1);
    //scroll to top
    window.scrollTo(0, 0, { behavior: "smooth" });
  };
  const onChangeAnswer = (questionID, value, type) => {
    let newListAnswer = [...listAnswer];
    let index = newListAnswer.findIndex(
      (item) => item.questionID === questionID
    );
    if (index !== -1) {
      newListAnswer[index] = { ...newListAnswer[index], value };
    } else {
      newListAnswer.push({ questionID, value, type });
    }
    // start smooth scroll
    let scrollDuration = 200; // scroll duration in milliseconds
    let scrollHeight = 150; // scroll down for 200 pixels
    let oldTimestamp = performance.now();
    let totalScroll = 0; // keep track of the total scroll amount
    let scrollFrame = (newTimestamp) => {
      let scrollAmount = Math.min(
        1,
        (newTimestamp - oldTimestamp) / scrollDuration
      );
      let deltaY = scrollAmount * scrollHeight;
      totalScroll += deltaY;
      if (totalScroll < scrollHeight) {
        window.scrollBy(0, deltaY);
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(scrollFrame);
      }
    };
    window.requestAnimationFrame(scrollFrame);
    setListAnswer(newListAnswer);
    setJustPickedAnswer(questionID);
  };
  console.log("curPage: ", curPage);
  return curPage < 9 ? (
    <PageKSTCMobile
      nextPage={nextPage}
      prevPage={prevPage}
      onChangeAnswer={onChangeAnswer}
      listAnswer={listAnswer}
      justPickedAnswer={justPickedAnswer}
      curPage={curPage}
    />
  ) : (
    <PageKSTCResult
      setCurPage={setCurPage}
      prevPage={prevPage}
      personality={personality}
    />
  );
};

export default KhaoSatTinhCachMobile;
