import React, { useRef, useState } from "react";

import InputWithLabel from "../components/admin/InputWithLabel";
import styles from "../styles/detailsform.module.css";
import Button from "../components/Button";

const Student = (props) => {
    const rollNumberRef = useRef("");
    const [roomIdentifier, setRoomIdentifier] = useState("");
    const [benchNumber, setBenchNumber] = useState(0);

    const formSubmitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div className={styles['details-wrapper']}>
            <div className={styles["details-form_wrapper"]}>
                <form
                    className={styles["details-form"]}
                    onSubmit={formSubmitHandler}
                >
                    <InputWithLabel
                        label_text={"Student Roll Number"}
                        input_type={"text"}
                        input_name={"StudentRollNumber"}
                        input_ref={rollNumberRef}
                    />
                    <Button button_type={"submit"}>
                        <p>Get Details</p>
                    </Button>
                </form>
            </div>
            <div className={styles['details']}>
                <p>Room Number: {roomIdentifier === "" ? "Not Yet Assigned": roomIdentifier}</p>
                <p>Bench Number: {benchNumber === 0? "Not Yet Assigned": benchNumber}</p>
            </div>
        </div>
    );
};

export default Student;
