import { Container } from "components";
import styles from "./OurValues.module.scss";

export const OurValues = () => {
  const { section, container, title, values, value } = styles;

  return (
    <section className={section}>
      <Container className={container}>
        <h2 className={title}>Our Values</h2>
        <ul className={values}>
          <li className={value}>
            <h3>01. Innovation</h3>
            <p>Startupz operates where entrepreneurship and technology intersect. 
              We design solutions and turn them into businesses models.</p>
          </li>
          <li className={value}>
            <h3>02. People</h3>
            <p>Talent is what enable us to create great companies.</p>
          </li>
        </ul>
      </Container>
    </section>
  );
};
