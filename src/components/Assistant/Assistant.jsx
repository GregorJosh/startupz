import { Container } from "components";
import styles from "./Assistant.module.scss";
import artwork from "images/artwork-72.png";

export const Assistant = () => {
  const { section, container, title, assistant, avatar, message } = styles;

  return (
    <section className={section}>
      <Container className={container}>
        <h4 className={title}>We love solving problems!</h4>
        <div className={assistant}>
          <div className={message}>
            Hi! I am Ben, your virtual assistant. How can I make your day
            better?
          </div>
          <button className={styles["close-btn"]}>X</button>
          <div className={avatar}>
            <img src={artwork} alt="Assistant avatar" />
          </div>
        </div>
      </Container>
    </section>
  );
};
