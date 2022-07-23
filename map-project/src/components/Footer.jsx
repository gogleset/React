import React from 'react';
import styles from '../styles/footer.module.scss';
const footer = () => {
    return (
        <footer className={styles.container}>
            <span>Copyright &copy; gogleset / 기상청 동네예보</span>
        </footer>
    );
};

export default footer;