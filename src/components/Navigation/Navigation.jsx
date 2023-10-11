import PropTypes from "prop-types";
import { Button } from "components";
import styles from "./Navigation.module.scss";

export const Navigation = ({ isVisible = false, className = "" }) => {
  const { navigation, button } = styles;

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
      <Button className={button} label="Work with us!" />
    </nav>
  );
};

Navigation.propTypes = {
  isVisible: PropTypes.bool,
  className: PropTypes.string,
};
