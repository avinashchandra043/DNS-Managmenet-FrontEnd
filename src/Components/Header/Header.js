import React, { useState, useRef, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { theme } from "../../Constants";
import { logout } from "../../Action/authAction";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const useStyles = createUseStyles({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundImage: `${theme.websiteGradient}`,
    color: `${theme.secondaryText}`,
    borderBottom: "1px solid #ccc",
  },
  profileSection: {
    position: "relative",
    cursor: "pointer",
  },
  profileIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#3b82f6",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
  },
  dropdownMenu: {
    position: "absolute",
    top: "100%",
    right: 0,
    backgroundColor: "white",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
    zIndex: 1000,
    width: "150px",
    padding: "10px 0",
    listStyle: "none",
    display: ({ isOpen }) => (isOpen ? "block" : "none"),
  },
  dropdownItem: {
    padding: "8px 16px",
    cursor: "pointer",
    color: `${theme.primaryText}`,
    "&:hover": {
      backgroundColor: "#f0f0f0",
    },
  },
});

const Header = ({ user }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const classes = useStyles({ isOpen: isDropdownOpen });

  const profileSectionRef = useRef(null);

  const handleProfileClick = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleItemClick = (option) => {
    if (option === "Logout") {
      logout();
      navigate("/auth");
    } else if (option === "AWS") {
      navigate("/auth/aws");
    }
    setIsDropdownOpen(false);
  };
  const handleClickOutside = (event) => {
    if (
      profileSectionRef.current &&
      !profileSectionRef.current.contains(event.target)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={classes.header}>
      <div>
        <h1>DNS Management Application</h1>
      </div>
      <div
        className={classes.profileSection}
        onClick={handleProfileClick}
        ref={profileSectionRef}
      >
        <div className={classes.profileIcon}>
          {user?.firstName?.charAt(0).toUpperCase()}
        </div>
        <ul className={classes.dropdownMenu}>
          <li
            className={classes.dropdownItem}
            onClick={() => handleItemClick("Account")}
          >
            Account
          </li>
          <li
            className={classes.dropdownItem}
            onClick={() => handleItemClick("Logout")}
          >
            Logout
          </li>
          <li
            className={classes.dropdownItem}
            onClick={() => handleItemClick("AWS")}
          >
            AWS
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authReducer }) => ({
  user: authReducer.user,
});

export default connect(mapStateToProps)(Header);
