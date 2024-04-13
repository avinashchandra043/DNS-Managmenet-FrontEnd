import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import DomainTab from "./Componets/DomainTab";
import MetricsTab from "./Componets/MetricsTab";
import { createUseStyles } from "react-jss";
import { theme } from "../../Constants";
import CreateHostedZone from "./Componets/CreateHostedZone";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getToken, getUser } from "../../Action/authAction";
import { listDomain } from "../../Action/dnsAction";

const useStyle = createUseStyles({
  container: {
    padding: "0px 50px",
  },
  tabContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "50px",
  },
  tabButtonContainer: {
    display: "flex",
    "& div": {
      borderBottom: "2px solid transparent",
      padding: "10px 30px 0px",
      cursor: "pointer",
    },
  },
  buttonContainer: {
    display: "flex",
    gap: "50px",
    "& div": {
      padding: "10px 20px",
      background: `${theme.buttonColor}`,
      color: `${theme.secondaryText}`,
      cursor: "pointer",
      "&:hover": {
        background: `${theme.buttonHoverColor}`,
      },
    },
  },
});

const Dashboard = ({ jwt, user }) => {
  const [activeTab, setActiveTab] = useState("domain");
  const [isModalOpen, setIsModalOpen] = useState({
    createDomain: false,
  });
  const navigate = useNavigate();
  const classes = useStyle();
  const handleTabSwitch = (tabName) => {
    setActiveTab(tabName);
  };

  const openModal = () => {
    setIsModalOpen((prevState) => ({
      ...prevState,
      createDomain: true,
    }));
  };

  const closeModal = (modalType) => {
    setIsModalOpen((prevState) => ({
      ...prevState,
      [modalType]: false,
    }));
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
    if (user) {
      if (!user.aws) {
        navigate("/auth/aws");
      } else {
        listDomain();
      }
    }
  }, [user, navigate]);

  return (
    <div className={classes.headContainer}>
      <Header />
      <div className={classes.container}>
        <div className={classes.tabContainer}>
          <div className={classes.tabButtonContainer}>
            <div
              onClick={() => handleTabSwitch("domain")}
              style={{
                borderBottomColor: `${
                  activeTab === "domain" ? theme.buttonColor : ""
                }`,
              }}
            >
              Domain
            </div>
            <div
              onClick={() => handleTabSwitch("metrics")}
              style={{
                borderBottomColor: `${
                  activeTab !== "domain" ? theme.buttonColor : ""
                }`,
              }}
            >
              Metrics
            </div>
          </div>
          <div className={classes.buttonContainer}>
            <div onClick={openModal}>Create Domain</div>
            <div>Bulk Import</div>
          </div>
        </div>
        <div>{activeTab === "domain" ? <DomainTab /> : <MetricsTab />}</div>
      </div>
      <CreateHostedZone
        isOpen={isModalOpen.createDomain}
        onClose={() => closeModal("createDomain")}
      />
    </div>
  );
};

const mapStateToProps = ({ authReducer }) => ({
  jwt: authReducer.jwt,
  user: authReducer.user,
});

export default connect(mapStateToProps)(Dashboard);
