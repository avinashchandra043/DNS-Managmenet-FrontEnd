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
import { bulkDomainCreate, listDomain } from "../../Action/dnsAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    if (token && !(jwt && user?.email)) {
      getUser(token);
    }
    if (!token) {
      navigate("/auth");
    }
  }, [jwt, navigate, user]);

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        if (!user.aws) {
          navigate("/auth/aws");
        } else {
          const res = await listDomain();
          if (!res) {
            toast("Failed to Load Record", { type: "error" });
          }
        }
      }
    };
    fetchData();
  }, [user, navigate]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      bulkDomainCreate(file);
    }
  };

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
            <div>
              <label htmlFor="bulk-import-file" style={{ cursor: "pointer" }}>
                Bulk Import
              </label>
              <input
                id="bulk-import-file"
                type="file"
                style={{ display: "none" }}
                accept=".csv,application/json"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>
        <div>{activeTab === "domain" ? <DomainTab /> : <MetricsTab />}</div>
      </div>
      <CreateHostedZone
        isOpen={isModalOpen.createDomain}
        onClose={() => closeModal("createDomain")}
      />
      <ToastContainer position="bottom-left" autoClose={5000} closeOnClick />
    </div>
  );
};

const mapStateToProps = ({ authReducer }) => ({
  jwt: authReducer.jwt,
  user: authReducer.user,
});

export default connect(mapStateToProps)(Dashboard);
