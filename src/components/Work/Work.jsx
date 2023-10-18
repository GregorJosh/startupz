import { Button } from "components";
import styles from "./Work.module.scss";

export const Work = ({ titleColor, title, children, imgSrc, imgAlt }) => {
  const { content, button } = styles;

  return (
    <li className={styles["list-item"]}>
      <h3 className={styles.title} style={{ color: titleColor }}>
        {title}
      </h3>
      <p className={content}>{children}</p>
      <img src={imgSrc} alt={imgAlt} />
      <Button className={button} label="More" onClick={() => {}} />
    </li>
  );
};