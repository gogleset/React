import React from 'react';
import { useSelector } from 'react-redux';

import styles from "../../styles/home.module.scss";
import sunriseImage from "../../asset/images/icon_sunrise.png";
import sunsetImage from "../../asset/images/icon_sunset.png";

const HomeSunRiseSet = () => {

    const { sunriseData } = useSelector((state) => state.sunriseForecast);

    return (
        <>
            {/* 일출일몰 */}
            <div className={styles.weather_title}>
                <h1>일출·일몰</h1>
            </div>

            {sunriseData && <div className={styles.weekly_weather_wrapper} style={{ display: 'flex', flexDirection: "row", justifyContent: "center" }}>
                <div style={{ display: 'flex', flexDirection: "column", width: "49%", alignItems: "center", }}>
                    <img src={sunriseImage} alt="일출" width={60} height={60} />
                    <span style={{ marginTop: "10px" }}>
                        {sunriseData.sunrise.slice(0, 2)}:{sunriseData.sunrise.slice(2)}
                    </span>
                </div>
                <div style={{ border: "1px solid #dddddd" }}>
                </div>
                <div style={{ display: 'flex', flexDirection: "column", width: "49%", alignItems: "center" }}>
                    <img src={sunsetImage} alt="일몰" width={60} height={60} />
                    <span style={{ marginTop: "10px" }}>
                        {sunriseData.sunset.slice(0, 2)}:{sunriseData.sunset.slice(2)}
                    </span>
                </div>
            </div>}
        </>
    );
};

export default HomeSunRiseSet;