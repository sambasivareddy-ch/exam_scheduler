import React from "react";

import { NavLinkButton } from "../link-buttons";
import styles from "../../styles/admin.module.css";

const AdminNav = () => {
    return (
        <div className={styles["admin-page_nav"]}>
            <NavLinkButton link_text="Add Details" />
            <NavLinkButton link_text="Plan Exam" />
            <NavLinkButton link_text="Edit Plan" />
        </div>
    );
};

export default AdminNav;
