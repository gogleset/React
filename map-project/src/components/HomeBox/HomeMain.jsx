import React from 'react';
import { useSelector } from 'react-redux';

import DayHelper from "../../helper/DayHelper";

import styles from "../../styles/home.module.scss";
import KakaoMap from '../../components/KakaoMap';
import WeatherImage from '../../components/Home/WeatherImage';
import localImage from "../../asset/images/icon_location.gif";

const Day = new DayHelper();
const yoil = Day.getYoil();
const hour = Day.get24Hour();
const min = Day.getMin();

const HomeMain = () => {

    const { temperature, humidity, sky, precipitation, time } = useSelector((state) => state.liveForecast);
    // 오늘 단기데이터, 내일, 내일 모레 api데이터
    const { highTemperatures, rowTemperatures, nowTemperature } = useSelector((state) => state.todayForecast);
    const { local } = useSelector((state) => state.geoLocation);
    const { uvData } = useSelector((state) => state.liveWeather)
    return (
        <div className={styles.map_wrapper}>
            <div className={styles.current_position}>
                {/* 현재 기온 */}
                <div style={{ display: 'flex' }}>
                    {temperature ? <span className={styles.current_position_temperature}>
                        {temperature === null ? nowTemperature[0] : temperature[0].fcstValue}&deg;
                    </span> : <span className={styles.current_position_temperature}>
                        {nowTemperature && nowTemperature[0]}&deg;
                    </span>}
                    {/* 이미지 추가 */}
                    {precipitation && <WeatherImage data={{ precipitation: precipitation[0].fcstValue, sky: sky[0].fcstValue, time: time[0] }} />}
                </div>
                {highTemperatures && <span style={{ marginBottom: "10px" }}>
                    {parseInt(highTemperatures[0].fcstValue)}&deg;/ {parseInt(rowTemperatures[0].fcstValue)}&deg;
                </span>}
                {/* 현재 위치(동) */}
                {local && <div>
                    <span className={styles.current_position_area}>
                        {local.region_3depth_name}
                    </span>
                    <img src={localImage} alt="장소" width={13} height={13} />
                </div>}


                {/* 현재 습도 */}
                <div style={{ margin: "5px 0px" }}>
                    {temperature && <span className={styles.current_position_humidity}>
                        습도:  {humidity[0].fcstValue}%
                    </span>}
                    {uvData && <span style={{ fontSize: "14px" }}>
                        자외선:
                        {parseInt(uvData[0].tomorrow) > 10 ? "위험" : parseInt(uvData[0].tomorrow) > 7 ? "매우 높음" : parseInt(uvData[0].tomorrow) > 5 ? "높음" : parseInt(uvData[0].tomorrow) > 2 ? "보통" : "낮음"}
                    </span>}
                </div>

                <span className={styles.current_position_time}>
                    {yoil},{hour}:{min}
                </span>

            </div>
            {/* 카카오맵 */}
            <KakaoMap />
        </div>
    );
};

export default HomeMain;