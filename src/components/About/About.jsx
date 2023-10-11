import { Container } from "components";
import styles from "./About.module.scss";

export const About = () => {
  const { section, container, title, description, stages, stage } = styles;

  return (
    <section id="about" className={section}>
      <Container className={container}>
        <h2 className={title}>Who we are</h2>
        <p className={description}>
          We create products that have innovation and technology at their core.
          We value working with talented people that understand the
          possibilities of today.
        </p>
        <ul className={stages}>
          <li className={stage}>
            <h3>01</h3>
            <p>We develop innovative products, systems and services</p>
          </li>
          <li className={stage}>
            <h3>02</h3>
            <p>Next we build teams to scale them into companies</p>
          </li>
          <li className={stage}>
            <h3>03</h3>
            <p>Each startup solving one problem at a time</p>
          </li>
        </ul>
      </Container>
    </section>
  );
};
