import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    position: "fixed",
    bottom: "10px",
    right: "10px",
    padding: "10px",
    backgroundColor: "red",
    border: "1px solid black",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
    transition: "transform 0.5s ease-in-out",
    transform: (props) =>
      props.visible ? "translateX(0)" : "translateX(20px)",
  },
  closeButton: {
    cursor: "pointer",
    marginLeft: "10px",
  },
});

const FloatingMessage = ({ message }) => {
  const [visible, setVisible] = useState(false);
  const classes = useStyles({ visible });
  useEffect(() => {
    setVisible(true);
    const timeoutId = setTimeout(() => {
      setVisible(false);
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className={classes.container}>
      <div>{message}</div>
      <div className={classes.closeButton} onClick={() => setVisible(false)}>
        x
      </div>
    </div>
  );
};

export default FloatingMessage;
