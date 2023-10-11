import { useState } from "react";
import { Container, Navigation } from "components";
import sprite from "images/sprite.svg";
import styles from "./Header.module.scss";

export const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const { header, container, navigation } = styles;

  return (
    <header className={header}>
      <Container className={container}>
        <button
          className={styles["toggle-menu-btn"]}
          onClick={() => setIsNavVisible(!isNavVisible)}
        >
          <svg className={styles["burger-menu-icon"]}>
            <use href={sprite + "#burger-menu"} />
          </svg>
        </button>
        <a className={styles["logo-link"]} href="/">
          <svg className={styles["logo-icon"]}>
            <use href={sprite + "#logo"} />
          </svg>
        </a>
        <Navigation className={navigation} isVisible={isNavVisible} />
      </Container>
    </header>
  );
};
