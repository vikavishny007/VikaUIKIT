import React from "react";
import PropTypes from "prop-types";
import "./typography.css";

export const Typography = ({ children, color, view, variant }) => {
  const colorClassName = `color_${color}`;
  const viewClassName = `view_${view}`;
  const variantClassName = `variant_${variant}`;

  const classnames = [
    "typography",
    colorClassName,
    viewClassName,
    variantClassName,
  ].join(" ");

  return <span className={classnames}>{children}</span>;
};

Typography.propTypes = {
  view: PropTypes.oneOf(["span", "block", "inline-block"]),
  color: PropTypes.oneOf(["regular", "warning", "success", "error"]),
  variant: PropTypes.oneOf([
    "regularSM",
    "mediumSM",
    "regularMD",
    "mediumMD",
    "code",
  ]),
  children: PropTypes.node,
};

Typography.defaultProps = {
  variant: "regularSM",
  color: "regular",
  view: "span",
};
