import React from "react";
import styles from "./MenuToggle.module.css";

const MenuToggle = (props) => {
    const cls = [styles.MenuToggle, "fa"];

    if (props.isOpen) {
        cls.push("fa-times");
        cls.push(styles.open);
    } else {
        cls.push("fa-bars");
    }
    return <i className={cls.join(" ")} onClick={props.onToggle} />;
};

export default MenuToggle;
