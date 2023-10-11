import { Button, Container } from "components";
import styles from "./Hero.module.scss";

export const Hero = () => {
  const { section, container, title, description } = styles;

  return (
    <section id="Hero" className={section}>
      <Container className={container}>
        <h1 className={title}>We Create Startups.</h1>
        <p className={description}>
          We are startup studio that develops and launches new companies.
        </p>
        <Button label="See our works" />
      </Container>
    </section>
  );
};
