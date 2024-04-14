import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import { createUseStyles } from "react-jss";
import { theme } from "../../Constants";
import { ReactComponent as ThreeDots } from "../../Assets/threeDots.svg";
import CreateRecordModal from "./Components/CreateRecord";
import EditRecordModal from "./Components/EditRecord";
import { getToken, getUser } from "../../Action/authAction";
import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import {
  bulkRecordCreate,
  deleteRecord,
  listRecord,
} from "../../Action/dnsAction";
import Loader from "../../Components/Loader/Loader";

const useStyles = createUseStyles({
  container: {
    padding: "0px 50px",
  },
  tabContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "50px",
  },
  tabButtonContainer: {
    fontSize: "30px",
    fontWeight: "bold",
    cursor: "pointer",
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
  tableContainer: {
    textAlign: "center",
    padding: "0px 50px",
    marginTop: "50px",
  },
  headRow: {
    display: "flex",
    fontWeight: "bold",
    background: "#f8f8f8",
    borderBottom: "1px solid #ccc",
    padding: "10px 0px",
  },
  row: {
    borderBottom: "1px solid #ccc",
    padding: "10px 0px",
    display: "flex",
    cursor: "pointer",
    position: "relative",
  },
  col1: {
    width: "10%",
  },
  col2: {
    width: "40%",
  },
  col3: {
    width: "20%",
  },
  col4: {
    width: "20%",
  },
  col5: {
    width: "10%",
    position: "relative",
  },
  threeDots: {
    padding: "0px 5px",
    maxWidth: "40px",
    borderRadius: "20px",
    "&:hover": {
      background: "#e0e0e0",
    },
  },
  dropdownMenu: {
    position: "absolute",
    top: "100%",
    left: "30px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
    zIndex: 1000,
    display: "none",
    "&.active": {
      display: "block",
    },
  },
  dropdownOption: {
    padding: "5px 10px",
    cursor: "pointer",
    textAlign: "left",
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },
  rowScroll: {
    maxHeight: "400px",
    overflowY: "scroll",
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
});

const SubDomain = ({ jwt, recordList }) => {
  const classes = useStyles();
  const [activeDropdownIndex, setActiveDropdownIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState({
    createRecord: false,
    editRecord: false,
  });
  const [currentRecord, setCurrentRecord] = useState(null);
  const [loading, setLoading] = useState(true); // New loading state
  const { hostedZoneId } = useParams();
  const navigate = useNavigate();

  const handleThreeDotsClick = (index) => {
    setActiveDropdownIndex(activeDropdownIndex === index ? null : index);
  };

  const handleDropdownOptionClick = (option, item) => {
    if (option === "edit") {
      setCurrentRecord(item);
      setIsModalOpen((prevState) => ({
        ...prevState,
        editRecord: true,
      }));
    } else if (option === "delete") {
      const data = {
        hostedZoneId: `/hostedzone/${hostedZoneId}`,
        name: item.Name,
        type: item.Type,
        ttl: item.TTL,
        value: item.ResourceRecords,
      };
      deleteRecord(data);
    }
    setActiveDropdownIndex(null);
  };

  const openModal = () => {
    setIsModalOpen((prevState) => ({
      ...prevState,
      createRecord: true,
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
      const id = { HostedZoneId: `/hostedzone/${hostedZoneId}` };
      listRecord(id);
    }
    if (!token) {
      navigate("/auth");
    }
    setLoading(true);
    const fetchData = async () => {
      try {
        const id = { HostedZoneId: `/hostedzone/${hostedZoneId}` };
        await listRecord(id);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => {
      setActiveDropdownIndex(null);
      setIsModalOpen({
        createRecord: false,
        editRecord: false,
      });
      setCurrentRecord(null);
    };
  }, [hostedZoneId, jwt, navigate]);

  const handleBack = () => {
    navigate("/dashboard");
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      bulkRecordCreate(file);
    }
  };

  return (
    <div className={classes.headContainer}>
      <Header />
      <div className={classes.container}>
        <div className={classes.tabContainer}>
          <div className={classes.tabButtonContainer} onClick={handleBack}>
            Domain Record
          </div>
          <div className={classes.buttonContainer}>
            <div onClick={openModal}>Create Record</div>
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
      </div>
      <div className={classes.tableContainer}>
        <div className={classes.headRow}>
          <div className={classes.col1}>Sr. No.</div>
          <div className={classes.col2}>Name</div>
          <div className={classes.col3}>Type</div>
          <div className={classes.col4}>TTL</div>
          <div className={classes.col5}></div>
        </div>
        {loading ? (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "grid",
              placeContent: "center",
            }}
          >
            <Loader />
          </div>
        ) : (
          <div className={classes.rowScroll}>
            {recordList?.map((item, index) => (
              <div className={classes.row} key={index}>
                <div className={classes.col1}>{index + 1}</div>
                <div className={classes.col2}>{item.Name}</div>
                <div className={classes.col3}>{item.Type}</div>
                <div className={classes.col4}>{item.TTL}</div>
                <div className={classes.col5}>
                  <div
                    onClick={() => handleThreeDotsClick(index)}
                    className={classes.threeDots}
                  >
                    <ThreeDots />
                  </div>
                  <div
                    className={`${classes.dropdownMenu} ${
                      activeDropdownIndex === index ? "active" : ""
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div
                      className={classes.dropdownOption}
                      onClick={() => handleDropdownOptionClick("edit", item)}
                    >
                      Edit
                    </div>
                    <div
                      className={classes.dropdownOption}
                      onClick={() => handleDropdownOptionClick("delete", item)}
                      style={{ background: `${theme.danger}` }}
                    >
                      Delete
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <CreateRecordModal
        isOpen={isModalOpen.createRecord}
        onClose={() => closeModal("createRecord")}
      />
      {isModalOpen.editRecord && (
        <EditRecordModal
          isOpen={isModalOpen.editRecord}
          onClose={() => closeModal("editRecord")}
          record={currentRecord}
        />
      )}
    </div>
  );
};

const mapStateToProps = ({ authReducer, dnsReducer }) => ({
  jwt: authReducer.jwt,
  recordList: dnsReducer.recordList,
});

export default connect(mapStateToProps)(SubDomain);
