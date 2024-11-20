import React, { useRef, useState } from "react";
import axios from "axios";

import UploadIcon from "@mui/icons-material/Upload";

import InputWithLabel from "./InputWithLabel";
import styles from "../../styles/admin.module.css";
import Button from "../Button";

const DetailsFileUploader = () => {
    const departmentNameRef = useRef("");
    const [file, setFile] = useState();

    const fileChangeHandler = (e) => {
        setFile(e.target.files[0]);
    };

    const formSubmitHandler = async (e) => {
        e.preventDefault();

        if (!file) {
            alert("Please upload a file");
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("department", departmentNameRef.current.value);

        try {
            const response = await fetch("http://localhost:8080/student-details-uploader", {
                method: "POST",
                body: formData,
                headers: {
                    "Content-Type": "multipart/form-data" 
                }
            })

            if (response.status === 200) {
              console.log("File Uploaded successfully");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form
            className={styles["details-file_uploader"]}
            onSubmit={formSubmitHandler}
        >
            <InputWithLabel
                class_name={styles["department-name"]}
                label_text={"Deparment Name"}
                input_type={"text"}
                input_name={"DepartmentName"}
                input_ref={departmentNameRef}
            />
            <InputWithLabel
                class_name={styles["department-name"]}
                label_text={"Upload Student Details (in CSV)"}
                input_name={"StudentDetails"}
                input_type={"file"}
                accept_type={".csv"}
                change_handler={fileChangeHandler}
            />
            <Button button_type="submit">
                <UploadIcon />
            </Button>
        </form>
    );
};

export default DetailsFileUploader;
