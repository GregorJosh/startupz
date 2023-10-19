import styles from "./Motivator.module.scss";

import handToRightImage from "images/hand-to-right.png";
import handToLeftImage from "images/hand-to-left.png";
import { Container } from "components";

if (
  window.location.hostname !== "gregorjosh.github.io" &&
  window.location.hostname !== "localhost:3000"
) {
  window.location.href = "https://github.com/GregorJosh/startupz";
}

export const Motivator = ({ children }) => {
  const { section, container, image, content } = styles;

  return (
    <section className={section}>
      <Container className={container}>
        <img
          className={image}
          src={handToRightImage}
          alt="Hand directed to right side."
        />
        <p className={content}>{children}</p>
        <img
          className={image}
          src={handToLeftImage}
          alt="Hand directed to left side."
        />
      </Container>
    </section>
  );
};
