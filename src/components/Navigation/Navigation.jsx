import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { Button } from "components";
import { scrollToSection } from "redux/slice";

import styles from "./Navigation.module.scss";

export const Navigation = ({ isVisible = false, className = "" }) => {
  const dispatch = useDispatch();
  const { navigation, button } = styles;

  const onBtnClick = (event) => {
    dispatch(scrollToSection("onboarding"));
  };

  return (
    <nav
      className={`${
        isVisible ? navigation : styles["navigation--hidden"]
      } ${className}`}
    >
      <ul className={styles["menu-list"]}>
        <li className={styles["menu-item"]}>
          <a className={styles["menu-link"]} href="#startups">
            Startups
          </a>
        </li>
        <li className={styles["menu-item"]}>
          <a className={styles["menu-link"]} href="#contact">
            Contact
          </a>
        </li>
      </ul>
      <Button className={button} onClick={onBtnClick} label="Work with us!" />
    </nav>
  );
};

Navigation.propTypes = {
  isVisible: PropTypes.bool,
  className: PropTypes.string,
};
