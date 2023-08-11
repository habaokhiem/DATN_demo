import { styles } from "../../pages/TrangCh1";
import axios from "axios";
import { apiUrl } from "../../constants/api";
import { AnswerList } from "./AnswerList";
export const Question = ({
  questionID,
  onChangeAnswer,
  type,
  listAnswer,
  justPickedAnswer,
  question,
}) => {
  return (
    <div
      // className={
      //   justPickedAnswer === ""
      //     ? "kstcframe-4273193747"
      //     : "kstcframe-4273193757"
      // }
      style={{
        color: justPickedAnswer === questionID - 1 ? "#271e4a" : "#d4d4d4",
      }}
      className={
        question.length === 1 ? "kstcframe-4273193747" : "kstcframe-4273193757"
      }
    >
      {question.length === 1 ? (
        <div className="bn-thng-xuyn">{question[0]}</div>
      ) : (
        <div className="bn-thng-xuyn">
          <p className="bn-dnh-nhiu">{`${question[0]} `}</p>
          <p className="bn-dnh-nhiu">{question[1]}</p>
        </div>
      )}
      {/* kstcframe-42731936337 */}
      <div
        className={
          justPickedAnswer === questionID - 1
            ? "kstcframe-4273193629"
            : "kstcframe-42731936337"
        }
      >
        <div className="kho-st-tnh9">Đồng ý</div>
        <AnswerList
          questionID={questionID}
          onChangeAnswer={onChangeAnswer}
          type={type}
          listAnswer={listAnswer}
        />
        <div className="khng-ng48">Không đồng ý</div>
      </div>
    </div>
  );
};
