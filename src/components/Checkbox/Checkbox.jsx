import React, { useState } from "react";
import { Typography } from "../Typography";
import PropTypes from "prop-types";
import "./checkbox.css";

export const Checkbox = ({ label, checked, disabled }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        alignItems: "center",
        gap: "10px",
        cursor: "pointer"
      }}
      onClick={toggleCheckbox}
    >
      <input
        disabled={disabled}
        type="checkbox"
        style={{ opacity: 0, position: "absolute", top: 0, left: 0 }}
        checked={isChecked}
        onChange={toggleCheckbox}
      />
      <div
        style={{
          width: "20px",
          height: "20px",
          border: "1px solid #000",
          borderRadius: "3px",
          backgroundColor: isChecked ? "#007bff" : "#fff",
          cursor: "pointer",
        }}
      >
        {isChecked && ( 
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ position: "absolute", top: "2px", left: "2px" }} xmlns="http://www.w3.org/2000/svg">
          <path d="M1.01465 3.5L3.01465 5.5L8.01465 0.5" stroke="white" stroke-width="1.25"/>
          </svg>
          // <svg
          //   xmlns="http://www.w3.org/2000/svg"
          //   width="16"
          //   height="16"
          //   fill="white"
          //   className="bi bi-check"
          //   viewBox="0 0 16 16"
          //   style={{ position: "absolute", top: "2px", left: "2px" }}
          // >
          //   <path d="M13.293 4.293a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L7 10.586l5.293-5.293a1 1 0 0 1 1.414 0z" />
          // </svg>
        )}
      </div>
      <Typography>{label}</Typography>
    </div>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
};

Typography.defaultProps = {
  label: "",
  checked: false,
  disabled: false,
};
