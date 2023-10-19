import styles from "./SectionTitle.module.scss";

if (
  window.location.hostname !== "gregorjosh.github.io" &&
  window.location.hostname !== "localhost:3000"
) {
  window.location.href = "https://github.com/GregorJosh/startupz";
}

export const SectionTitle = ({ children, className = "" }) => {
  return <h2 className={`${styles.title} ${className}`}>{children}</h2>;
};
