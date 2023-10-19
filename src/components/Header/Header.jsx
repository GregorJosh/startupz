import { useDispatch } from "react-redux";
import { Container, Navigation } from "components";
import { toggleNavigationVisible } from "redux/slice";

import sprite from "images/sprite.svg";
import styles from "./Header.module.scss";

if (
  window.location.hostname !== "gregorjosh.github.io" &&
  window.location.hostname !== "localhost"
) {
  window.location.href = "https://github.com/GregorJosh/startupz";
}

export const Header = () => {
  const dispatch = useDispatch();
  const { header, container, navigation } = styles;

  return (
    <header className={header}>
      <Container className={container}>
        <button
          className={styles["toggle-menu-btn"]}
          onClick={() => dispatch(toggleNavigationVisible())}
        >
          <svg className={styles["burger-menu-icon"]}>
            <use href={sprite + "#burger-menu"} />
          </svg>
        </button>
        <a className={styles["logo-link"]} href="#hero">
          <svg className={styles["logo-icon"]}>
            <use href={sprite + "#logo"} />
          </svg>
        </a>
        <Navigation className={navigation} />
      </Container>
    </header>
  );
};
