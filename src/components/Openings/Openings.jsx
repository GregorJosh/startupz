import { Button, Container, SectionTitle } from "components";
import styles from "./Openings.module.scss";

export const Openings = () => {
  const { section, container, content } = styles;

  return (
    <section className={section}>
      <Container className={container}>
        <SectionTitle>We are hiring!</SectionTitle>
        <p className={content}>
          We're always looking for talented people to join and help build our
          startups. Check out our current openings
        </p>
        <Button label="See current openings" />
      </Container>
    </section>
  );
};