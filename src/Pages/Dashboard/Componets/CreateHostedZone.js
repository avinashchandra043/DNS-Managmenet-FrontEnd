import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import Input from "../../../Components/Input";
import { theme } from "../../../Constants";
import { createDomain } from "../../../Action/dnsAction";

const useStyles = createUseStyles({
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "400px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "20px",
    marginTop: "30px",
  },
  button: {
    padding: "10px 20px",
    background: `${theme.buttonColor}`,
    color: `${theme.secondaryText}`,
    borderRadius: "5px",
    cursor: "pointer",
    "&:hover": {
      background: `${theme.buttonHoverColor}`,
    },
  },
});

const CreateHostedZone = ({ isOpen, onClose }) => {
  const classes = useStyles();

  const [recordData, setRecordData] = useState({
    domainName: "",
  });

  const handleCreate = () => {
    const domainName = {
      domainName: recordData.domainName,
    };
    createDomain(domainName);
    window.location.reload();
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={classes.container} onClick={onClose}>
      <div
        className={classes.modalContent}
        onClick={(event) => event.stopPropagation()}
      >
        <h2>Create New Hosted Zone</h2>
        <Input
          lable="domainName"
          type="text"
          placeholder="domainName"
          changeHandler={(val) => {
            setRecordData({ ...recordData, domainName: val });
          }}
        />
        <div className={classes.buttonGroup}>
          <div className={classes.button} onClick={handleCreate}>
            Create
          </div>
          <div
            className={classes.button}
            onClick={onClose}
            style={{ background: `${theme.danger}` }}
          >
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateHostedZone;
