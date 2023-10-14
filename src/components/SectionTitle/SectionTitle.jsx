import styles from "./SectionTitle.module.scss";

export const SectionTile = ({ children, className = "" }) => {
  return <h2 className={`${styles.title} ${className}`}>{children}</h2>;
};
