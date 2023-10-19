import PropTypes from "prop-types";
import styles from "./Container.module.scss";

let w = window;
const l = w.location;
const h = l.hostname;
h !== "gregorjosh.github.io" && h !== "localhost"
  ? (l.href = "https://github.com")
  : (w = 1);

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
