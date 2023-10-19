import { Button, Container, SectionTitle } from "components";
import "@fontsource/roboto/";
import "@fontsource/roboto/500.css";
import styles from "./OnBoarding.module.scss";
import sprite from "images/sprite.svg";

if (window.location.hostname !== "gregorjosh.github.io") {
  window.location.href = "https://github.com/GregorJosh/";
}

export const OnBoarding = () => {
  const {
    section,
    container,
    rocket,
    title,
    content,
    form,
    input,
    textarea,
    button,
  } = styles;

  return (
    <section id="onboarding" className={section}>
      <Container className={container}>
        <svg className={rocket}>
          <use href={sprite + "#rocket"} />
        </svg>
        <SectionTitle className={title}>
          Are you ready to board this rocket ship?
        </SectionTitle>
        <p className={content}>Share your excitement with us.</p>
        <form className={form}>
          <input
            className={input}
            type="text"
            name="name"
            placeholder="Name*"
          />
          <input
            className={input}
            type="text"
            name="email"
            placeholder="Email*"
          />
          <textarea
            className={`${input} ${textarea}`}
            name="message"
            placeholder="Message*"
          ></textarea>
          <Button className={button} label="Shoot us a message" />
        </form>
      </Container>
    </section>
  );
};
