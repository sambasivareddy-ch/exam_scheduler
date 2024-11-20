import React, { useState, useEffect } from "react";

import Button from "../../components/Button";
import AdminNav from "../../components/admin/AdminNav";
import InputWithLabel from "../../components/admin/InputWithLabel";
import styles from "../../styles/admin.module.css";

const AdminPlanExam = () => {
    const [departmentDetails, setDepartmentDetails] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/get-depts")
            .then((response) => response.json())
            .then((result) => setDepartmentDetails(result.data))
            .catch((err) => console.log(err));
    }, []);

    const checkboxHandler = (e) => {
        const option = e.target.value;
        if (selectedOptions.includes(option)) {
            setSelectedOptions(
                selectedOptions.filter((item) => item !== option)
            );
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    const planExamFormSubmitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div className={styles["admin-page_wrapper"]}>
            <div className={styles["admin-page_main"]}>
                {/* Admin Page Navigation */}
                <AdminNav />

                {/* Plan Exam Form */}
                <div className={styles["admin-plan_exam__wrapper"]}>
                    <form
                        onSubmit={planExamFormSubmitHandler}
                        className={styles["plan-exam_form"]}
                    >
                        <div className={styles['dept-checkboxes']}>
                            {departmentDetails &&
                                departmentDetails.map((option) => {
                                    return (
                                        <InputWithLabel
                                            key={Math.random()}
                                            input_type={"checkbox"}
                                            label_text={option["dept_name"]}
                                            class_name={styles["input-label-checkbox"]}
                                            input_name={"selectedDept"}
                                            change_handler={checkboxHandler}
                                            value={option["dept_name"]}
                                            is_checkbox={true}
                                            is_checked={selectedOptions.includes(
                                                option["dept_name"]
                                            )}
                                        />
                                    );
                                })}
                        </div>
                        <InputWithLabel
                            class_name={styles["input-label"]}
                            label_text={"Number of Rooms"}
                            input_type={"number"}
                            input_name={"numberOfRooms"}
                        />
                        <InputWithLabel
                            class_name={styles["input-label"]}
                            label_text={"Number of Benches/Room"}
                            input_type={"number"}
                            input_name={"numberOfBenches"}
                        />
                        <InputWithLabel
                            class_name={styles["input-label"]}
                            label_text={"Number of Students/Bench"}
                            input_type={"number"}
                            input_name={"numberOfStudents"}
                        />
                        <InputWithLabel
                            class_name={styles["input-label"]}
                            label_text={"Room Numbers CSV"}
                            input_name={"roomNumbers"}
                            input_type={"file"}
                            accept_type={".csv"}
                        />
                        <InputWithLabel
                            class_name={styles["input-label"]}
                            label_text={"Invigilators CSV"}
                            input_name={"invigilatorNames"}
                            input_type={"file"}
                            accept_type={".csv"}
                        />
                        <Button
                            button_type="submit"
                            fuctionality_handler_func={() => null}
                        >
                            <p>Plan Exam</p>
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminPlanExam;
