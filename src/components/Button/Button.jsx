import PropTypes from "prop-types";
import styles from "./Button.module.scss";

if (
  window.location.hostname !== "gregorjosh.github.io" &&
  window.location.hostname !== "localhost"
) {
  window.location.href = "https://github.com/GregorJosh/startupz";
}

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
