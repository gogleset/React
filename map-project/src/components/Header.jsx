import React from 'react';
import styles from "../styles/header.module.scss";

const header = () => {
    return (
        <header className={styles.container}>
            <h1>지금 우리 날씨는?</h1>
        </header>
    );
};

export default header;