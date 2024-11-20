import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "../styles/button.module.css";
import "../index.css";

export const LinkButton = ({ link_text }) => {
    return (
        <div className={styles["button-wrapper"]}>
            <button type="button" className={styles["button"]}>
                <Link
                    to={`/${link_text.toLowerCase()}`}
                    className={styles["button-link"]}
                >
                    {link_text}
                </Link>
            </button>
        </div>
    );
};

export const NavLinkButton = ({ link_text }) => {
    return (
        <div className={styles["button-wrapper"]}>
            <button type="button" className={styles["nav-button"]}>
                <NavLink
                    to={`/administrator/${link_text
                        .toLowerCase()
                        .split(" ")
                        .join("-")}`}
                    className={styles["button-link"]}
                >
                    {link_text}
                </NavLink>
            </button>
        </div>
    );
};
