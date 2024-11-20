import React from "react";

import styles from "../../styles/input.module.css";

const InputWithLabel = ({
    class_name = null,
    label_text,
    input_type,
    input_ref = null,
    accept_type = null,
    change_handler = () => {},
    is_checked = false,
    value = "",
    input_name,
    is_checkbox = false,
}) => {
    const style_classes = `${styles["input-label"]} ${class_name}`;

    return (
        <label className={style_classes}>
            {!is_checkbox && <p>{label_text}</p>}
            {!is_checkbox && (
                <input
                    type={input_type}
                    onChange={change_handler}
                    accept={accept_type}
                    ref={input_ref}
                    name={input_name}
                />
            )}
            {is_checkbox && (
                <input
                    type={input_type}
                    onChange={change_handler}
                    accept={accept_type}
                    ref={input_ref}
                    name={input_name}
                    checked={is_checked}
                    value={value}
                />
            )}
            {is_checkbox && <p>{label_text}</p>}
        </label>
    );
};

export default InputWithLabel;
