import { Container, Work } from "components";
import styles from "./OurWorks.module.scss";

import tolqImage from "images/works/tolq.png";
import feedbackLabsImage from "images/works/feedback-labs.png";
import codeKeeperImage from "images/works/codekeeper.png";
import legalSiteImage from "images/works/legalsite.png";

export const OurWorks = () => {
  const { container, title, works } = styles;

  return (
    <section>
      <Container className={container}>
        <h2 className={title}>Our works</h2>
        <ul className={works}>
          <Work
            title="Tolq"
            titleColor="#A9BC87"
            imgSrc={tolqImage}
            imgAlt="Macbook pro 15 with touch bar front view."
          >
            Tolq is the translation solution built for e-commerce. It provides
            all pieces of the localization puzzle in one single integrated
            solution.
          </Work>
          <Work
            title="Feedback Labs"
            titleColor="#8BB5C9"
            imgSrc={feedbackLabsImage}
            imgAlt="iPad Pro."
          >
            Feedback Labs turns feedback into actionable insights for your team.
          </Work>
          <Work
            title="Codekeeper"
            titleColor="#00A0B6"
            imgSrc={codeKeeperImage}
            imgAlt="iPad Pro."
          >
            Codekeeper is an all-in-one solution for software developers and
            publishers to provide source code escrow as part of service level
            and license agreements.
          </Work>
          <Work
            title="legalSite"
            titleColor="#8B60D3"
            imgSrc={legalSiteImage}
            imgAlt="Macbook pro 15 with touch bar front view."
          >
            Protected against legal risks, privacy compliant and always
            up-to-date with the latest regulatory developments.
          </Work>
        </ul>
      </Container>
    </section>
  );
};
