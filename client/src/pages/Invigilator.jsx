import React, { useRef, useState } from "react";

import InputWithLabel from "../components/admin/InputWithLabel";
import styles from "../styles/detailsform.module.css";
import Button from "../components/Button";

const Invigilator = (props) => {
    const emailRef = useRef("");
    const [roomIdentifier, setRoomIdentifier] = useState("");

    const formSubmitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div className={styles["details-wrapper"]}>
            <div className={styles["details-form_wrapper"]}>
                <form
                    className={styles["details-form"]}
                    onSubmit={formSubmitHandler}
                >
                    <InputWithLabel
                        label_text={"Invigilator Email Address"}
                        input_type={"email"}
                        input_ref={emailRef}
                        input_name={"email"}
                    />
                    <Button button_type={"submit"}>
                        <p>Get Details</p>
                    </Button>
                </form>
            </div>
            <div className={styles["details"]}>
                <p>
                    Invigilation Room Number:{" "}
                    {roomIdentifier === ""
                        ? "Not Yet Assigned"
                        : roomIdentifier}
                </p>
            </div>
        </div>
    );
};

export default Invigilator;
