import React from 'react';

import styles from '../styles/home.module.scss';

import KakaoMap from '../components/KakaoMap';

const home = () => {
    return (
        <div className={styles.container}>
            <article className={styles.article_container}>
                <KakaoMap />
            </article>
        </div>
    );
};

export default home;