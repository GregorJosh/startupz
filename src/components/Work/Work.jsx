import PropTypes from "prop-types";

import { Button } from "components";
import styles from "./Work.module.scss";

export const Work = ({ titleColor, title, children, imgSrc, imgAlt, link }) => {
  const { content, button } = styles;

  return (
    <li className={styles["list-item"]}>
      <h3 className={styles.title} style={{ color: titleColor }}>
        {title}
      </h3>
      <p className={content}>{children}</p>
      <img src={imgSrc} alt={imgAlt} />
      <Button
        className={button}
        label="More"
        onClick={() => (window.location.href = link)}
      />
    </li>
  );
};

Work.propTypes = {
  titleColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};