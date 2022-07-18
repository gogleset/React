import React from 'react';

import styles from "../styles/foot_nav.module.scss"

const footNav = () => {
    return (
        <nav className={styles.container}>
            <ul className={styles.list_wrapper}>
                <li>우리동네</li>
                <li>다른동네</li>
                <li>주간예보</li>
            </ul>
        </nav>
    );
};

export default footNav;