import React, { useEffect, useState } from "react";
import { Typography } from "../Typography";
import PropTypes from "prop-types";
import "./switch.css";

export const Switch = ({ label, checked, disabled, error, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    if (!disabled) {
      setIsChecked(!isChecked);

      onChange?.(!isChecked);
    }
  };

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <div className="switch-container" onClick={toggleSwitch}>
      <input
        type="checkbox"
        className="switch-input"
        disabled={disabled}
        checked={isChecked}
        onChange={toggleSwitch}
      />
      <div
        className={`switch-box ${isChecked ? "checked" : ""} ${
          error ? "error" : ""
        }`}
      >
        <div className="switch-checkmark" />
      </div>
      <Typography>{label}</Typography>
    </div>
  );
};

Switch.propTypes = {
  checked: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

Switch.defaultProps = {
  label: "",
  error: false,
  indeterminate: false,
  checked: false,
  disabled: false,
};
