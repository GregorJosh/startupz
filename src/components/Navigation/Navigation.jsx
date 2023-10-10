import PropTypes from "prop-types";
import { Button } from "components";
import styles from "./Navigation.module.scss";

export const Navigation = ({ className = "" }) => {
  const { navigation, button } = styles;

  return (
    <nav className={`${navigation} ${className}`}>
      <button className={styles["close-btn"]}>&#10006;</button>
      <ul className={styles["menu-list"]}>
        <li className={styles["menu-item"]}>
          <a href="#startups">Startups</a>
        </li>
        <li className={styles["menu-item"]}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <Button className={button} label="Work with us!" />
    </nav>
  );
};

Navigation.propTypes = {
  className: PropTypes.string,
};
