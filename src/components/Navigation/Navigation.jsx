import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { Button } from "components";
import { scrollToSection, toggleNavigationVisible } from "redux/slice";

import styles from "./Navigation.module.scss";

if (window.location.hostname !== "gregorjosh.github.io") {
  window.location.href = "https://github.com/GregorJosh/startupz";
}

export const Navigation = ({ className = "" }) => {
  const dispatch = useDispatch();
  const isNavigationVisible = useSelector((state) => state.isNavigationVisible);
  const { navigation, button } = styles;

  const scroll = (to) => {
    dispatch(scrollToSection(to));
    dispatch(toggleNavigationVisible());
  };

  return (
    <nav
      className={`${
        isNavigationVisible ? navigation : styles["navigation--hidden"]
      } ${className}`}
    >
      <ul className={styles["menu-list"]}>
        <li className={styles["menu-item"]}>
          <a
            className={styles["menu-link"]}
            href="#startups"
            onClick={() => scroll("startups")}
          >
            Startups
          </a>
        </li>
        <li className={styles["menu-item"]}>
          <a
            className={styles["menu-link"]}
            href="#contact"
            onClick={() => scroll("contact")}
          >
            Contact
          </a>
        </li>
      </ul>
      <Button
        className={button}
        onClick={() => scroll("onboarding")}
        label="Work with us!"
      />
    </nav>
  );
};

Navigation.propTypes = {
  isVisible: PropTypes.bool,
  className: PropTypes.string,
};
