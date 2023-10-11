import { Container } from "components";
import styles from "./About.module.scss";

export const About = () => {
  const { section, container } = styles;

  return (
    <section id="about" className={section}>
      <Container className={container}>
        <h2>Who we are</h2>
        <p>
          We create products that have innovation and technology at their core.
          We value working with talented people that understand the
          possibilities of today.
        </p>
      </Container>
    </section>
  );
};
