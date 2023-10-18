import { useDispatch } from "react-redux";
import { Button, Container } from "components";

import styles from "./Hero.module.scss";
import { scrollToSection } from "redux/slice";

export const Hero = () => {
  const dispatch = useDispatch();
  const { section, container, title, description } = styles;

  return (
    <section id="hero" className={section}>
      <Container className={container}>
        <h1 className={title}>We Create Startups.</h1>
        <p className={description}>
          We are startup studio that develops and launches new companies.
        </p>
        <Button
          label="See our works"
          onClick={(e) => dispatch(scrollToSection("startups"))}
        />
      </Container>
    </section>
  );
};
