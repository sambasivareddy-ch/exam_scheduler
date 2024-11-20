import React from "react";

import { LinkButton } from "../components/link-buttons";
import styles from "../styles/home.module.css";

const Home = () => {
    return (
        <div className={styles["home-wrapper"]}>
            <div className={styles["home-buttons_group"]}>
                <LinkButton link_text={"Administrator"} />
                <LinkButton link_text={"Invigilator"} />
                <LinkButton link_text={"Student"} />
            </div>
        </div>
    );
};

export default Home;
