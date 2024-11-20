import React from "react";

import styles from "../styles/button.module.css";

const Button = ({
    children,
    button_click_handler = null,
    class_name,
    button_type = "button",
}) => {
    const custom_classes = `${class_name} ${styles["button"]}`;

    return (
        <button
            type={button_type}
            className={custom_classes}
            onClick={button_click_handler}
        >
            {children}
        </button>
    );
};

export default Button;
