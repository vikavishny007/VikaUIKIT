import React from "react";
import PropTypes from "prop-types";
import "./button.css";

export const Button = ({ color, size, label, disabled, ...props }) => {
  const disabledClass = disabled ? "storybook-button--disabled" : "";
  const buttonColor = `storybook-button--${color}`;
  const buttonSize = `storybook-button--${size}`;

  return (
    <button
      type="button"
      disabled={disabled}
      className={[
        "storybook-button",
        buttonSize,
        disabledClass,
        buttonColor,
      ].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(["basic", "primary", "danger", "outline", "ghost"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  disabled: false,
  size: "medium",
  color: "basic",
  onClick: () => {},
};
