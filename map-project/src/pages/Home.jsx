import React from 'react';

import styles from '../styles/home.module.scss';
import KakaoMap from '../components/KakaoMap';

const home = () => {
    return (
        <article className={styles.article_container}>
            <div className={styles.map_wrapper}>
                <div className={styles.current_position}>

                </div>
                <KakaoMap />
            </div>

            <div className={styles.weather_wrapper}>
                
            </div>
        </article>
    );
};

export default home;