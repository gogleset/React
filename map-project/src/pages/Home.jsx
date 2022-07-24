import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import styles from '../styles/home.module.scss';
import KakaoMap from '../components/KakaoMap';
import WeatherImage from '../components/Home/WeatherImage';
import DayHelper from "../Helper/DayHelper.js";
const Day = new DayHelper();
const today = new Date();

const Home = () => {
    const yoil = Day.getYoil();
    const hour = ('0' + today.getHours()).slice(-2);
    const min = ('0' + today.getSeconds()).slice(-2);
    // states
    const { local } = useSelector((state) => state.geoLocation);
    const { data } = useSelector((state) => state.liveForcast);

    // 기온, 습도, 하늘상황(날씨), api데이터
    const [temperature, setTemperature] = useState({}); const [humidity, setHumidity] = useState({});
    const [weather, setWeather] = useState({});


    useEffect(() => {
        // api 데이터 가공
        if (data) {
            setTemperature((prevState) => {
                return {
                    ...prevState, data:
                        data.filter(item => item.category === "T1H")
                }
            });
            setHumidity((prevState) => {
                return {
                    ...prevState, data:
                        data.filter(item => item.category === "REH")
                }
            });
            setWeather((prevState) => {
                return {
                    ...prevState, data:
                        data.filter(item => item.category === "PTY")
                }
            });
        }
    }, [data]);

    return (
        <article className={styles.article_container}>
            <div className={styles.map_wrapper}>
                <div className={styles.current_position}>
                    {/* 현재 기온 */}
                    <div style={{ display: 'flex' }}>
                        {temperature.data && <span className={styles.current_position_temperature}>
                            {temperature.data[0].fcstValue}&deg;
                        </span>}
                        {/* 이미지 추가 */}
                        {weather.data && <WeatherImage data={weather.data[0]} />}
                    </div>

                    {/* 현재 위치(동) */}
                    {local && <span className={styles.current_position_area}>
                        {local.region_3depth_name}
                    </span>}
                    {/* 현재 습도 */}
                    {temperature.data && <span className={styles.current_position_humidity}>
                        습도:  {humidity.data[0].fcstValue}%
                    </span>}
                    <span className={styles.current_position_time}>
                        {yoil},{hour}:{min}
                    </span>
                </div>
                {/* 카카오맵 */}
                <KakaoMap />
            </div>

            <div className={styles.weather_wrapper}>

            </div>
        </article>
    );
};

export default Home;