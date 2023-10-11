import { Container } from "components";
import styles from "./Assistant.module.scss";

export const Assistant = () => {
  const { section, container, title, assistant } = styles;

  return (
    <section className={section}>
      <Container className={container}>
        <h4 className={title}>We love solving problems!</h4>
        <div className={assistant}></div>
      </Container>
    </section>
  );
};
