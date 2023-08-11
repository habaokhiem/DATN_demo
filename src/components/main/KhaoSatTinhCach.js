import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select, { components } from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { PageKSTC } from "./PageKSTC";
import { PageKSTC9 } from "./PageKSTC9";
import { styles } from "../../pages/TrangCh1";
import axios from "axios";
import { apiUrl } from "../../constants/api";
import { list16Personality } from "../../constants/list16Personality";
export const KSTC = ({ user }) => {
  const [curPage, setCurPage] = useState(0);
  const [listAnswer, setListAnswer] = useState([]);
  const [justPickedAnswer, setJustPickedAnswer] = useState(-1);
  const [personality, setPersonality] = useState({});

  useEffect(() => {
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
          setPage("dsnv");
          //scroll to top
          window.scrollTo(0, 0);
        })
        .catch((err) => {
          alert("Có lỗi xảy ra, vui lòng thử lại sau");
          console.log("err: ", err);
        });

      // setPersonality(result);
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
    let scrollHeight = 240; // scroll down for 200 pixels
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
  return (
    <div className="kstcframe-42731937916">
      <div className="kstcframe-4273191489">
        <div
          onClick={() => {
            setCurPage(9);
            setPersonality({
              code: "ESTP",
              name: "Entrepreneur",
              image: "./image-23@2x.png",
              fullResult: "ESTP-T",
              percentType1: 51,
              percentType2: 51,
              percentType3: 51,
              percentType4: 51,
              percentType5: 51,
            });
          }}
          className="kho-st-tnh9"
        >
          Khảo sát tính cách
        </div>
        <div className="kstcframe-4273191479">
          <img
            className="kstcvuesaxlinearhome-icon7"
            alt=""
            src="/kstciconoutlinedapplicationbell.svg"
          />
        </div>
      </div>
      {curPage < 9 ? (
        <PageKSTC
          nextPage={nextPage}
          prevPage={prevPage}
          onChangeAnswer={onChangeAnswer}
          listAnswer={listAnswer}
          justPickedAnswer={justPickedAnswer}
          curPage={curPage}
        />
      ) : (
        <PageKSTC9
          setCurPage={setCurPage}
          prevPage={prevPage}
          personality={personality}
        />
      )}
    </div>
  );
};
