import React, { useRef } from "react";

import InputWithLabel from "../../components/admin/InputWithLabel";
import Button from "../../components/Button";
import styles from "../../styles/admin.module.css";

const AdminLoginForm = (props) => {
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const adminFormSubmitHandler = (e) => {
        console.log("Admin form submitted");
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
        e.preventDefault();
    };

    return (
        <div className={styles["admin-login_form"]}>
            <form onSubmit={adminFormSubmitHandler}>
                <InputWithLabel
                    label_text={"Email Address"}
                    input_type={"email"}
                    input_ref={emailRef}
                    input_name={"email"}
                    class_name={styles["admin-form_input_tag"]}
                />
                <InputWithLabel
                    label_text={"Password"}
                    input_type={"password"}
                    input_ref={passwordRef}
                    input_name={"password"}
                    class_name={styles["admin-form_input_tag"]}
                />
                <Button button_type={"submit"} >
                    <p>Login</p>
                </Button>
            </form>
        </div>
    );
};

export default AdminLoginForm;
