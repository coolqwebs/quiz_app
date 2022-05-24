import React from "react";
import styles from "./BackDrop.module.css";

const BackDrop = (props) => (
    <div className={styles.BackDrop} onClick={props.onClick}></div>
);
export default BackDrop;
