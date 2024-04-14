import React, { useState, useEffect, useRef } from "react";
import { createUseStyles } from "react-jss";
import { ReactComponent as DownArrow } from "../../Assets/Component/downArrow.svg";

const useStyles = createUseStyles({
  dropdown: {
    position: "relative",
    display: "inline-block",
    fontSize: "1.3rem",
    width: "100%",
  },
  dropdownToggle: {
    padding: "8px 16px",
    border: "none",
    cursor: "pointer",
    width: "100%",
    borderBottom: "2px solid #9b9b9b",
    background: "transparent",
    fontSize: "1.3rem",
    textAlign: "left",
    height: "56px",
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
  },
  dropdownMenuContainer: {
    position: "absolute",
    top: "100%",
    left: 0,
    backgroundColor: "white",
    border: "1px solid #ccc",
    zIndex: 1000,
    width: "100%",
    overflowY: "hidden",
    transition: "opacity 0.3s ease",
  },
  dropdownSearchInput: {
    padding: "8px",
    width: "100%",
    boxSizing: "border-box",
    fontSize: "1.3rem",
    border: "0px",
    borderBottom: "1px solid #9b9b9b",
    "&:focus-visible": {
      outline: "0px",
      border: "0px",
      borderBottom: "1px solid #9b9b9b",
    },
  },
  dropdownMenu: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    maxHeight: "150px",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#ccc",
      borderRadius: "3px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "#f0f0f0",
    },
  },
  dropdownItem: {
    padding: "8px 16px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f0f0f0",
    },
  },
  dropdownContainer: {
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
});

const Dropdown = ({ options, onSelect, placeholder, defaultValue = null }) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setSelectedOption(defaultValue);
  }, [defaultValue]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={classes.dropdown} ref={dropdownRef}>
      <button className={classes.dropdownToggle} onClick={toggleDropdown}>
        <div className={classes.dropdownContainer}>
          {selectedOption?.name ? (
            <div>{selectedOption.name}</div>
          ) : (
            <div style={{ color: "#9b9b9b" }}>
              {placeholder} <sup>*</sup>
            </div>
          )}
        </div>
        <div className={classes.dropdownContainer}>
          <DownArrow />
        </div>
      </button>
      {isOpen && (
        <div className={classes.dropdownMenuContainer}>
          <input
            type="text"
            className={classes.dropdownSearchInput}
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <ul className={classes.dropdownMenu}>
            {filteredOptions.map((option, index) => (
              <li
                key={index}
                className={classes.dropdownItem}
                onClick={() => handleOptionClick(option)}
              >
                {option.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
