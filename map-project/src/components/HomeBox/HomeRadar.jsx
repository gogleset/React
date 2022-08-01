import React from 'react';
import { useSelector } from 'react-redux';

import styles from "../../styles/home.module.scss";
import DayHelper from "../../Helper/DayHelper.js";

const Day = new DayHelper();
const hour = Day.get24Hour();
const today = Day.getDay();

const HomeRadar = () => {
    const { radarData } = useSelector((state) => state.radarForecast);
    return (
        <>
            <div className={styles.weather_title}>
                <h1>레이더 영상</h1>
                <span style={{ margin: "0px 5px" }}>|</span>
                <span >{hour}:00 기준</span>
            </div>
            {radarData && <div className={styles.weekly_weather_wrapper} onClick={() => window.open('https://www.weather.go.kr/w/image/radar.do')}>
                <img src={`http://www.kma.go.kr/repositary/image/rdr/img/RDR_CMP_WRC_${today}${hour}00.png`} alt="레이더 영상" width={335} height={340} />
            </div>}
        </>
    );
};

export default HomeRadar;