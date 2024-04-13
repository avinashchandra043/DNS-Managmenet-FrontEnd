import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { auth, awsRegionNames } from "../../../Constants/data";
import Input from "../../../Components/Input";
import DropDown from "../../../Components/DropDown";
import { theme } from "../../../Constants";
import { getToken, getUser, registerAws } from "../../../Action/authAction";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const useStyle = createUseStyles({
  heading: {
    backgroundImage: `${theme.websiteGradient}`,
    color: `${theme.secondaryText}`,
    textAlign: "center",
    padding: "75px 50px",
  },
  title: {
    fontSize: "50px",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: "25px",
    marginTop: "50px",
  },
  actionButton: {
    background: `${theme.buttonColor}`,
    color: `${theme.secondaryText}`,
    padding: "10px 20px",
    fontSize: "20px",
    borderRadius: "9px",
    cursor: "pointer",
    border: "0px",
    margin: "50px 0px",
    "&:hover": {
      background: `${theme.buttonHoverColor}`,
    },
  },
  formContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "50px",
  },
  awsForm: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    maxWidth: "400px",
  },
});
const AwsAuth = ({ user, jwt }) => {
  const [data, setData] = useState({
    accessKeyId: user?.aws.accessKeyId || "",
    secretAccessKey: user?.aws.secretAccessKey || "",
    region: user?.aws.region || "",
  });
  const navigate = useNavigate();
  const classes = useStyle();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.region !== "") {
      await registerAws(data);
      navigate("/dashboard");
    }
  };
  useEffect(() => {
    const token = getToken();
    if (token && !jwt) {
      getUser(token);
    }
    if (!token) {
      navigate("/auth");
    }
  }, [jwt, navigate]);

  useEffect(() => {
    if (user?.aws) {
      setData((prevData) => ({
        accessKeyId: user.aws.accessKeyId || "",
        secretAccessKey: user.aws.secretAccessKey || "",
        region: user.aws.region || "",
      }));
    }
  }, [user]);
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <div className={classes.title}>Welcome {user?.firstName}</div>
        <div className={classes.subTitle}>{auth.awsAuth.subTitle}</div>
      </div>
      <div className={classes.formContainer}>
        <form action="#" className={classes.awsForm}>
          <Input
            lable="Access Key Id"
            type="text"
            placeholder="Access Key Id"
            id="Access Key Id"
            defaultValue={data.accessKeyId}
            changeHandler={(val) => {
              setData({ ...data, accessKeyId: val });
            }}
            required
          />
          <Input
            lable="Secret Access Key"
            type="password"
            placeholder="Secret Access Key"
            id="Secret Access Key"
            defaultValue={data.secretAccessKey}
            changeHandler={(val) => {
              setData({ ...data, secretAccessKey: val });
            }}
            required
          />
          <DropDown
            options={awsRegionNames}
            placeholder="Select Region"
            defaultValue={{ name: data.region, value: data.region }}
            onSelect={(val) => {
              setData({ ...data, region: val });
            }}
          />
          <button
            className={classes.actionButton}
            type="submit"
            onClick={handleSubmit}
          >
            Connect Aws
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authReducer }) => ({
  jwt: authReducer.jwt,
  user: authReducer.user,
});

export default connect(mapStateToProps)(AwsAuth);
