import styles from "./Assistant.module.scss";
import artwork from "images/artwork-72.png";

export const Assistant = () => {
  const { assistant, avatar, message } = styles;

  return (
    <div className={assistant}>
      <div className={message}>
        Hi! I am Ben, your virtual assistant. How can I make your day better?
      </div>
      <button className={styles["close-btn"]}>X</button>
      <div className={avatar}>
        <img src={artwork} alt="Assistant avatar" />
      </div>
    </div>
  );
};
