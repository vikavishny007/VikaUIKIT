import React, { useEffect, useState } from "react";
import { Typography } from "../Typography";
import PropTypes from "prop-types";
import "./radiobutton.css";

export const RadioButton = ({ label, checked, disabled, error, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleRadioButton = () => {
    if (!isChecked && !disabled) {
      setIsChecked(true);

      onChange?.();
    }
  };

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <div className="radiobutton-container" onClick={toggleRadioButton}>
      <input
        type="radio"
        className="radiobutton-input"
        disabled={disabled}
        checked={isChecked}
        onChange={toggleRadioButton}
      />
      <div
        className={`radiobutton-box ${isChecked ? "checked" : ""} ${
          error ? "error" : ""
        }`}
      >
        {isChecked && <div className="radiobutton-checkmark" />}
      </div>
      <Typography>{label}</Typography>
    </div>
  );
};

RadioButton.propTypes = {
  checked: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

RadioButton.defaultProps = {
  label: "",
  error: false,
  checked: false,
  disabled: false,
};
