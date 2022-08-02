import React from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import styles from "../../styles/home.module.scss";
import DayHelper from "../../helper/DayHelper.js";

const Day = new DayHelper();
const hour = Day.get24Hour();
const serverHour = Day.getServerHour();
const minute = Day.getMin();
const today = Day.getDay();

const HomeRadar = () => {
    console.log(minute, hour)
    const { radarData } = useSelector((state) => state.radarForecast);
    return (
        <>
            <div className={styles.weather_title}>
                <h1>레이더 영상</h1>
                <span style={{ margin: "0px 5px" }}>|</span>
                <span >{minute < 25 ? serverHour : hour}:00 기준</span>
            </div>
            {radarData && <div className={styles.weekly_weather_wrapper} onClick={() => window.open('https://www.weather.go.kr/w/image/radar.do')}>
                {/* 시간이 21분 이상이면 오늘날짜에 오늘시간*/}
                {minute < 25 ?
                    <img src={`http://www.kma.go.kr/repositary/image/rdr/img/RDR_CMP_WRC_${hour === 24 ? dayjs(today).subtract(1, 'days').format("YYYYMMDD") : today}${hour === 24 ? "23" : serverHour}00.png`} alt="레이더 영상" width={335} height={340} /> :
                    <img src={`http://www.kma.go.kr/repositary/image/rdr/img/RDR_CMP_WRC_${today}${hour}00.png`} alt="레이더 영상" width={335} height={340} />}
            </div>}
        </>
    );
};

export default HomeRadar;