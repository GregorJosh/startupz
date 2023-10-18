import PropTypes from "prop-types";
import styles from "./Button.module.scss";

export const Button = ({ label, onClick, className = "" }) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
