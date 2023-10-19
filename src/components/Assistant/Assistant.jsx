import { useDispatch } from "react-redux";
import { toggleAssistantVisible } from "redux/slice";
import styles from "./Assistant.module.scss";
import artwork from "images/artwork-72.png";

if (window.location.hostname !== "gregorjosh.github.io") {
  window.location.href = "https://github.com/GregorJosh/";
}

export const Assistant = () => {
  const dispatch = useDispatch();
  const { assistant, avatar, message } = styles;

  const close = () => {
    dispatch(toggleAssistantVisible());
  };

  return (
    <div className={assistant}>
      <div className={message}>
        Hi! I am Ben, your virtual assistant. How can I make your day better?
      </div>
      <button className={styles["close-btn"]} onClick={close}>
        X
      </button>
      <div className={avatar}>
        <img src={artwork} alt="Assistant avatar" />
      </div>
    </div>
  );
};
