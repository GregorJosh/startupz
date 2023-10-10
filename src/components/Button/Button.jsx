import PropTypes from "prop-types";
import styles from "./Button.module.scss";

export const Button = ({ label, className = "" }) => {
  return <button className={`${styles.button} ${className}`}>{label}</button>;
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};
