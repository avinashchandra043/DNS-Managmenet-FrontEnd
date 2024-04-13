import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import Input from "../../../Components/Input";
import { theme } from "../../../Constants";
import { updateRecord } from "../../../Action/dnsAction";
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

const EditRecordModal = ({ isOpen, onClose, onCreate, record }) => {
  const classes = useStyles();
  const { hostedZoneId } = useParams();

  const [recordData, setRecordData] = useState({
    TTL: record.TTL,
  });

  const handleEdit = () => {
    const data = {
      hostedZoneId: `/hostedzone/${hostedZoneId}`,
      name: record.Name,
      type: record.Type,
      ttl: recordData.TTL,
      value: record.ResourceRecords[0].Value,
    };
    updateRecord(data);
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
        <h2>Edit Record</h2>
        <Input
          lable="TTL"
          type="text"
          placeholder="TTL"
          changeHandler={(val) => {
            setRecordData({ ...recordData, TTL: val });
          }}
        />
        <div className={classes.buttonGroup}>
          <div className={classes.button} onClick={handleEdit}>
            Edit
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

export default EditRecordModal;
