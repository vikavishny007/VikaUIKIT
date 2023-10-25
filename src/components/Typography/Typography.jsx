import React from "react";
import PropTypes from "prop-types";
import "./typography.css";

export const Typography = ({
  color = "regular",
  variant = "regularMD",
  children = "",
  ...props
}) => {
  const colorClassName = `color_${color}`;

  const variantClassName = `variant_${variant}`;

  const classnames = ["typography", colorClassName, variantClassName].join(" ");

  if (variant.includes("header")) {
    const size = variant.split("header")[1];

    if (size === "LG") {
      return (
        <h1 className={classnames} {...props}>
          {children}
        </h1>
      );
    } else if (size === "SM") {
      return (
        <h3 className={classnames} {...props}>
          {children}
        </h3>
      );
    }
  }

  if (variant.includes("code")) {
    return (
      <pre className={classnames} {...props}>
        {children}
      </pre>
    );
  }

  return (
    <span className={classnames} {...props}>
      {children}
    </span>
  );
};

Typography.propTypes = {
  color: PropTypes.oneOf(["regular", "warning", "success", "error"]),
  variant: PropTypes.oneOf([
    "headerSM",
    "headerLG",
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
};
