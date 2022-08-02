import React from 'react';
import styles from "../styles/header.module.scss";

const header = () => {
    return (
        <header className={styles.container}>
            <h1>날씨어때?</h1>
        </header>
    );
};

export default header;