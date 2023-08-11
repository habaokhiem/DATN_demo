import { useEffect, useRef, useState } from "react";
import "./TrangCh1.css";
import "./TrangCh13.css";
import { listUniversityInformation } from "../constants/listUniversity";
import axios from "axios";
import { listAcademic } from "../constants/listAcademic";
import { listPersonality } from "../constants/listPersonaliy";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select, { components } from "react-select";
import { apiUrl } from "../constants/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { listQuestion } from "../constants/listQuestion";
import { list16Personality } from "../constants/list16Personality";
import { Admin } from "../components/main/Admin";
import { User } from "../components/main/User";
const DropdownIndicator = (props) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <FontAwesomeIcon
          icon={props.selectProps.menuIsOpen ? faCaretUp : faCaretDown}
          style={{ color: "#271E4A" }}
        />
      </components.DropdownIndicator>
    )
  );
};

const TrangCh1 = ({
  goToDetailUniversity,
  goToNhomTinhCach,
  goToLoginScreen,
}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, []);

  return user?.permission ? (
    <Admin
      user={user}
      goToLoginScreen={goToLoginScreen}
      goToDetailUniversity={goToDetailUniversity}
      goToNhomTinhCach={goToNhomTinhCach}
    />
  ) : (
    <User
      user={user}
      goToLoginScreen={goToLoginScreen}
      goToDetailUniversity={goToDetailUniversity}
      goToNhomTinhCach={goToNhomTinhCach}
    />
  );
};

export const styles = {
  button: {
    cursor: "pointer",
    userSelect: "none",
  },
};

export default TrangCh1;
