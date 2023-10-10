import { Container, Navigation } from "components";
import { ReactComponent as Logo } from "images/logo.svg";
import styles from "./Header.module.scss";

export const Header = () => {
  const { container, navigation } = styles;

  return (
    <header>
      <Container className={container}>
        <a className={styles['logo-link']} href="/"><Logo /></a>
        <Navigation className={navigation} />   
      </Container>
    </header>
  );
};
