import React, { useState } from "react";

import AdminNav from "../../components/admin/AdminNav";
import InputWithLabel from "../../components/admin/InputWithLabel";
import DetailsFileUploader from "../../components/admin/DetailsFileUploader";

import styles from "../../styles/admin.module.css";

const AdminAddDetails = () => {
    const [numberOfDept, setNumberOfDept] = useState(0);

    return (
        <div className={styles["admin-page_wrapper"]}>
            <div className={styles["admin-page_main"]}>
                {/* Admin Page Navigation */}
                <AdminNav />

                {/* Add Details Form */}
                <div className={styles["admin-plan_exam__wrapper"]}>
                    <div
                        className={styles["add-details_form"]}
                    >
                        <InputWithLabel
                            class_name={styles["input-label"]}
                            label_text={"Number of Departments"}
                            input_type={"number"}
                            input_name={"NumberOfDept"}
                            change_handler={(e) => {
                                setNumberOfDept(parseInt(e.target.value));
                            }}
                        />
                        {numberOfDept > 0 && (
                            <div
                                className={
                                    styles["details-file_uploader_wrapper"]
                                }
                            >
                                {[...Array(numberOfDept)].map((_) => (
                                    <DetailsFileUploader key={Math.random()} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminAddDetails;
