import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import Input from "../../../Components/Input";
import { theme } from "../../../Constants";
import { recordType } from "../../../Constants/data";
import DropDown from "../../../Components/DropDown";
import { createRecord } from "../../../Action/dnsAction";
import { useParams } from "react-router-dom";

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

const CreateRecordModal = ({ isOpen, onClose }) => {
  const classes = useStyles();
  const { hostedZoneId } = useParams();

  const [recordData, setRecordData] = useState({
    Name: "",
    Type: "",
    TTL: "",
    Value: "",
  });

  const handleCreate = () => {
    const data = {
      hostedZoneId: `/hostedzone/${hostedZoneId}`,
      name: recordData.Name,
      type: recordData.Type,
      ttl: recordData.TTL,
      value: recordData.Value,
    };
    createRecord(data);
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
        <h2>Create Record</h2>
        <Input
          lable="Name"
          type="text"
          placeholder="Name"
          changeHandler={(val) => {
            setRecordData({ ...recordData, Name: val });
          }}
        />
        <DropDown
          options={recordType}
          placeholder="Select Record Type"
          onSelect={(val) => {
            setRecordData({ ...recordData, Type: val });
          }}
        />
        <Input
          lable="TTL"
          type="text"
          placeholder="TTL"
          changeHandler={(val) => {
            setRecordData({ ...recordData, TTL: val });
          }}
        />
        <Input
          lable="Value"
          type="text"
          placeholder="Value"
          changeHandler={(val) => {
            setRecordData({ ...recordData, Value: val });
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

export default CreateRecordModal;
