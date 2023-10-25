import React from "react";
import PropTypes from "prop-types";
import "./button.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ color, size, label, disabled, ...props }) => {

  
  
    const disabledClass=disabled ? "storybook-button--disabled" : "";
    const buttonColor=`storybook-button--${color}`;
    const buttonSize=`storybook-button--${size}`;

  return (
    <button
      type="button"
      disabled={disabled}
      className={["storybook-button", buttonSize, disabledClass, buttonColor].join(
        " "
      )}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
 color: PropTypes.oneOf(["basic", "primary", "danger", "outline","ghost"]),
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,

  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  disabled: false,
  size: "medium",
  onClick: undefined,
  color: "basic",
};
