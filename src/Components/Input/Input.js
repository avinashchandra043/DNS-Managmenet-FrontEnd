import React, { useEffect, useRef, useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  formGroup: {
    position: "relative",
    padding: "15px 0 0",
    marginTop: "10px",
    width: "100%",
  },
  formField: {
    fontFamily: "inherit",
    width: "100%",
    border: "0",
    borderBottom: "2px solid #9b9b9b",
    outline: "0",
    fontSize: "1.3rem",
    padding: "7px 10px 7px 10px",
    background: "transparent",
    transition: "border-color 0.2s",
    "&:focus": {
      fontWeight: "700",
      borderWidth: "3px",
      borderImage: "linear-gradient(to right, #11998e, #38ef7d)",
      borderImageSlice: "1",
      "& ~ $formLabel": {
        position: "absolute",
        top: "0",
        display: "block",
        transition: "0.2s",
        fontSize: "1rem",
        color: "#11998e",
        fontWeight: "700",
      },
    },
    "&::placeholder": {
      color: "transparent",
    },
    "&:placeholder-shown + $formLabel": {
      fontSize: "1.3rem",
      cursor: "text",
      top: "10px",
    },
  },
  formLabel: {
    position: "absolute",
    top: "0",
    display: "block",
    transition: "0.2s",
    fontSize: "1rem",
    color: "#9b9b9b",
    paddingLeft: "10px",
    "&:focus": {
      position: "absolute",
      top: "0",
      display: "block",
      transition: "0.2s",
      fontSize: "1rem",
      color: "#11998e",
      fontWeight: "700",
    },
  },
});
const Input = ({
  label,
  type,
  placeholder,
  id,
  required = true,
  changeHandler,
  defaultValue = "",
}) => {
  const [val, setVal] = useState(defaultValue);
  const classes = useStyles();
  const inputRef = useRef(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  useEffect(() => {
    setVal(defaultValue);
  }, [defaultValue]);

  return (
    <div
      className={`${classes.formGroup} ${classes.field}`}
      onClick={handleClick}
    >
      <input
        ref={inputRef}
        type={type}
        className={classes.formField}
        placeholder={placeholder}
        name={label}
        id={id}
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
          changeHandler(e.target.value);
        }}
        required
      />
      <label htmlFor={id} className={classes.formLabel}>
        {placeholder} {required && <sup>*</sup>}
      </label>
    </div>
  );
};

export default Input;
