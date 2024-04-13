import React from "react";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";
import { theme } from "../../Constants";
const useStyle = createUseStyles({
  container: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "100px",
    height: "100svh",
    backgroundImage: `${theme.websiteGradient}`,
    padding: "200px 50px 0px",
    color: `${theme.secondaryText}`,
    "& div": {
      "& u": {
        cursor: "pointer",
      },
    },
  },
});
const NotFound = () => {
  const classes = useStyle();
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };
  return (
    <div className={classes.container}>
      <h1>Sorry, the page you are looking for does not exist</h1>
      <div>
        Return to <u onClick={handleHomeClick}>Home</u>
      </div>
    </div>
  );
};

export default NotFound;
