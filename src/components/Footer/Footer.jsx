import { Container } from "components";
import styles from "./Footer.module.scss";
import sprite from "images/sprite.svg";

if (
  window.location.hostname !== "gregorjosh.github.io" &&
  window.location.hostname !== "localhost"
) {
  window.location.href = "https://github.com/GregorJosh/startupz";
}

export const Footer = () => {
  const { container, title, links, link, address, logo, image, icons, icon } =
    styles;

  return (
    <footer>
      <Container className={container}>
        <div className={logo}>
          <a href="#hero">
            <svg className={image}>
              <use href={sprite + "#logo"} />
            </svg>
          </a>
          <p>© 2020 Startupz. All rights reserved. </p>
        </div>
        <div>
          <h4 className={title}>Companies</h4>
          <ul className={links}>
            <li>
              <a className={link} href="https://tolq.com">
                Tolq
              </a>
            </li>
            <li>
              <a className={link} href="https://legalsite.co/">
                LegalSite
              </a>
            </li>
            <li>
              <a className={link} href="https://codekeeper.co/">
                Codekeeper
              </a>
            </li>
            <li>
              <a className={link} href="https://www.feedbacklabs.com/">
                Feedback Labs
              </a>
            </li>
          </ul>
        </div>
        <div id="contact">
          <h4 className={title}>Contact</h4>
          <address className={address}>
            World Trade Center - The Hague
            <br />
            Prinses Margrietplantsoen 33
            <br />
            2595 AM The Hague
            <br />
            The Netherlands
          </address>
          <a className={link} href="#email">
            Send us an email
          </a>
        </div>
        <div>
          <h4 className={title}>Follow us</h4>
          <div className={icons}>
            <a className={link} href="#twitter">
              <svg className={icon}>
                <use href={sprite + "#twitter"} />
              </svg>
            </a>
            <a className={link} href="#linkedin">
              <svg className={icon}>
                <use href={sprite + "#linkedin"} />
              </svg>
            </a>
            <a className={link} href="#instagram">
              <svg className={icon}>
                <use href={sprite + "#instagram"} />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
