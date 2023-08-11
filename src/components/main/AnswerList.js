import { styles } from "../../pages/TrangCh1";
import axios from "axios";
import { apiUrl } from "../../constants/api";
export const AnswerList = ({
  questionID,
  onChangeAnswer,
  type,
  listAnswer,
}) => {
  let curValue = listAnswer.find((item) => item.questionID === questionID);
  if (curValue) {
    curValue = curValue.value;
  } else {
    curValue = null;
  }
  return (
    <div className="kstcframe-42731935336">
      {curValue === -3 ? (
        <div
          //  onClick={() => {
          //    onChangeAnswer(questionID, -3, type);
          //  }}
          style={styles.button}
          className="kstcellipse-13837Picked"
        />
      ) : (
        <div
          onClick={() => {
            onChangeAnswer(questionID, -3, type);
          }}
          style={styles.button}
          className="kstcellipse-13837"
        />
      )}
      {curValue === -2 ? (
        <div style={styles.button} className="kstcellipse-14036Picked" />
      ) : (
        <div
          onClick={() => {
            onChangeAnswer(questionID, -2, type);
          }}
          style={styles.button}
          className="kstcellipse-14036"
        />
      )}
      {curValue === -1 ? (
        <div style={styles.button} className="kstcellipse-14134Picked" />
      ) : (
        <div
          onClick={() => {
            onChangeAnswer(questionID, -1, type);
          }}
          style={styles.button}
          className="kstcellipse-14134"
        />
      )}
      {curValue === 0 ? (
        <div style={styles.button} className="kstcellipse-14235Picked" />
      ) : (
        <div
          onClick={() => {
            onChangeAnswer(questionID, 0, type);
          }}
          style={styles.button}
          className="kstcellipse-14235"
        />
      )}
      {curValue === 1 ? (
        <div style={styles.button} className="kstcellipse-14334Picked" />
      ) : (
        <div
          onClick={() => {
            onChangeAnswer(questionID, 1, type);
          }}
          style={styles.button}
          className="kstcellipse-14334"
        />
      )}
      {curValue === 2 ? (
        <div style={styles.button} className="kstcellipse-13936Picked" />
      ) : (
        <div
          onClick={() => {
            onChangeAnswer(questionID, 2, type);
          }}
          style={styles.button}
          className="kstcellipse-13936"
        />
      )}
      {curValue === 3 ? (
        <div style={styles.button} className="kstcellipse-14536Picked" />
      ) : (
        <div
          onClick={() => {
            onChangeAnswer(questionID, 3, type);
          }}
          style={styles.button}
          className="kstcellipse-14536"
        />
      )}
    </div>
  );
};
