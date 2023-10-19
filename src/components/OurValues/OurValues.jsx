import { Container, SectionTitle } from "components";
import styles from "./OurValues.module.scss";

if (
  window.location.hostname !== "gregorjosh.github.io" &&
  window.location.hostname !== "localhost:3000"
) {
  window.location.href = "https://github.com/GregorJosh/startupz";
}

export const OurValues = () => {
  const { section, container, values, value } = styles;

  return (
    <section className={section}>
      <Container className={container}>
        <SectionTitle>Our core values</SectionTitle>
        <ul className={values}>
          <li className={value}>
            <h3>01. Innovation</h3>
            <p>
              Startupz operates where entrepreneurship and technology intersect.
              We design solutions and turn them into businesses models.
            </p>
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
