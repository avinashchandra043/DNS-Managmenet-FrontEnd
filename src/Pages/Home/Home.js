import React, { useEffect } from "react";
import { createUseStyles } from "react-jss";
import { theme } from "../../Constants";
import { useNavigate } from "react-router-dom";
import { getToken, getUser } from "../../Action/authAction";
import { connect } from "react-redux";
const useStyle = createUseStyles({
  title: {
    padding: "150px 0px",
    backgroundImage: `${theme.websiteGradient}`,
    textAlign: "center",
    color: `${theme.secondaryText}`,
    fontSize: "75px",
    fontWeight: "bold",
    "@media (max-width: 500px)": {
      fontSize: "50px",
      padding: "100px 0px",
    },
  },
  getStarted: {
    width: "100%",
    display: "grid",
    placeContent: "center",
  },
  getStartedButton: {
    marginTop: "100px",
    padding: "20px 40px",
    background: `${theme.buttonColor}`,
    color: `${theme.secondaryText}`,
    fontSize: "30px",
    borderRadius: "9px",
    cursor: "pointer",
    "@media (max-height: 700px)": {
      padding: "10px 20px",
      fontSize: "20px",
    },
    "&:hover": {
      background: `${theme.buttonHoverColor}`,
    },
  },
});
const Home = ({ user, jwt }) => {
  const classes = useStyle();
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/auth");
  };
  useEffect(() => {
    const token = getToken();
    if (token && !jwt) {
      getUser(token);
    }
  }, [jwt]);

  useEffect(() => {
    const token = getToken();
    if (token && jwt) {
      if (user?.aws) {
        navigate("/dashboard");
      } else {
        navigate("/auth/aws");
      }
    }
  }, [user, jwt, navigate]);

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <div>DNS Management</div>
        <div>Application</div>
      </div>
      <div className={classes.getStarted}>
        <div className={classes.getStartedButton} onClick={handleGetStarted}>
          Get Started
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authReducer }) => ({
  user: authReducer.user,
  jwt: authReducer.jwt,
});

export default connect(mapStateToProps)(Home);
