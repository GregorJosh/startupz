import { useDispatch } from "react-redux";
import { Button, Container, SectionTitle } from "components";

import styles from "./Openings.module.scss";
import { scrollToSection } from "redux/slice";

if (window.location.hostname !== "gregorjosh.github.io") {
  window.location.href = "https://github.com/GregorJosh/";
}

export const Openings = () => {
  const dispatch = useDispatch();
  const { section, container, content } = styles;

  return (
    <section className={section}>
      <Container className={container}>
        <SectionTitle>We are hiring!</SectionTitle>
        <p className={content}>
          We're always looking for talented people to join and help build our
          startups. Check out our current openings
        </p>
        <Button
          label="See current openings"
          onClick={() => dispatch(scrollToSection("onboarding"))}
        />
      </Container>
    </section>
  );
};
