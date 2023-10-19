import PropTypes from "prop-types";
import styles from "./Container.module.scss";

if (window.location.hostname !== "gregorjosh.github.io") {
  window.location.href = "https://github.com/GregorJosh/startupz";
}

export const Container = ({ children, className = "" }) => {
  const { container } = styles;

  return <div className={`${container} ${className}`}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  className: PropTypes.string,
};
