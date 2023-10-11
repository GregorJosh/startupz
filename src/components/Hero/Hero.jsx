import { Button, Container } from "components";
import styles from "./Hero.module.scss";

export const Hero = () => {
  const { section, container } = styles;

  return (
    <section className={section}>
      <Container className={container}>
        <h1>We Create Startups.</h1>
        <p>We are startup studio that develops and launches new companies.</p>
        <Button label="See our works" />
      </Container>
    </section>
  );
};
