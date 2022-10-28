import React from "react";

const Modal = ({ open, onClose, detail }) => {
  return (
    open && (
      <div onClick={onClose} style={styles.overlays}>
        <div style={styles.content}>
          <p style={styles.title}>{detail.title}</p>
          <p>{detail.body}</p>
          <div style={{ textAlign: "right" }}>
            <button style={styles.button}>Close</button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;

const styles = {
  /* The Modal (background) */
  overlays: {
    position: "fixed" /* Stay in place */,
    zIndex: 1 /* Sit on top */,
    left: 0,
    top: 0,
    width: "100%" /* Full width */,
    height: "100%" /* Full height */,
    overflow: "auto" /* Enable scroll if needed */,
    backgroundColor: "rgb(0, 0, 0)" /* Fallback color */,
    backgroundColor: "rgba(0, 0, 0, 0.75)" /* Black w/ opacity */,
  },
  content: {
    position: "relative",
    backgroundColor: "#fefefe",
    margin: "15% auto" /* 15% from the top and centered */,
    padding: "20px",
    border: "1px solid #888",
    width: "50%" /* Could be more or less, depending on screen size */,
    borderRadius: "5px",
  },
  title: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  button: {
    padding: "8px 15px",
    fontSize: "15px",
    backgroundColor: "gray",
    color: "white",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
};
