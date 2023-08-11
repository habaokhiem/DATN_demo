import { listQuestion } from "../../constants/listQuestion";
import { Question } from "./Question";
import { styles } from "../../pages/TrangCh1";
import axios from "axios";
import { apiUrl } from "../../constants/api";
export const PageKSTC = ({
  nextPage,
  prevPage,
  onChangeAnswer,
  listAnswer,
  justPickedAnswer,
  curPage,
}) => {
  let listQuestionOnPage = listQuestion.filter((item) => item.page === curPage);
  return (
    <div className="kstcframe-4273193768">
      <div className="kstcframe-427319284">
        <div className="kstcrectangle-346240788" />
        <div
          className={
            curPage >= 1 ? "kstcrectangle-346240796" : "kstcrectangle-346240797"
          }
        />
        <div
          className={
            curPage >= 2 ? "kstcrectangle-346240795" : "kstcrectangle-346240797"
          }
        />
        <div
          className={
            curPage >= 3 ? "kstcrectangle-346240795" : "kstcrectangle-346240797"
          }
        />
        <div
          className={
            curPage >= 4 ? "kstcrectangle-346240794" : "kstcrectangle-346240797"
          }
        />
        <div
          className={
            curPage >= 5 ? "kstcrectangle-346240793" : "kstcrectangle-346240797"
          }
        />
        <div
          className={
            curPage >= 6 ? "kstcrectangle-346240792" : "kstcrectangle-346240797"
          }
        />
        <div
          className={
            curPage >= 7 ? "kstcrectangle-346240791" : "kstcrectangle-346240797"
          }
        />
        <div
          className={
            curPage >= 8 ? "kstcrectangle-34624079" : "kstcrectangle-346240797"
          }
        />
      </div>
      <div className="kstcframe-4273193788">
        {listQuestionOnPage.map((question, index) => {
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
        <div className="kstcframe-42731937323">
          {curPage !== 0 && (
            <div className="kstcframe-4273191598">
              <div
                onClick={() => {
                  prevPage();
                }}
                style={styles.button}
                className="kstcframe-42731937324"
              >
                <img
                  className="kstciconoutlineddirectional15"
                  alt=""
                  src="/kstciconoutlineddirectionalswapleft.svg"
                />
                <div className="quay-li8">Quay lại</div>
              </div>
            </div>
          )}
          {curPage === 8 ? (
            <div
              onClick={() => {
                nextPage();
              }}
              style={styles.button}
              className="kstcframe-427319161"
            >
              <div className="gi-parent">
                <div className="quay-li">Gửi</div>
                <img
                  className="starfour-r-icon"
                  alt=""
                  src="/kstc1starfourr.svg"
                />
              </div>
            </div>
          ) : (
            <div
              onClick={() => {
                nextPage();
              }}
              style={styles.button}
              className="kstcframe-4273191618"
            >
              <div className="kstcframe-42731937324">
                <div className="quay-li8">Tiếp tục</div>
                <img
                  className="kstciconoutlineddirectional15"
                  alt=""
                  src="/kstciconoutlineddirectionalswapright.svg"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
