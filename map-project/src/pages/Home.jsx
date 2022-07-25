import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

//styles
import styles from '../styles/home.module.scss';

//components
import KakaoMap from '../components/KakaoMap';
import WeatherImage from '../components/Home/WeatherImage';
import TodayWeatherGraph from '../components/Home/TodayWeatherGraph';

// data
import DayHelper from "../Helper/DayHelper.js";
const Day = new DayHelper();

const Home = () => {
    const yoil = Day.getYoil();
    const hour = Day.get24Hour();
    const min = Day.getMin()

    // states
    const { local } = useSelector((state) => state.geoLocation);
    // 기온, 습도, 하늘상황(날씨), api데이터
    const { temperature, humidity, sky, precipitation } = useSelector((state) => state.liveForecast);


    const [times, setTimes] = useState([]);

    // 날씨 api받아오면 시간 추출
    useEffect(() => {
        if (temperature) {
            let ti = temperature.map(item => item.fcstTime.slice(0, 2) +
                ":" + item.fcstTime.slice(2))
            console.log(ti)
            setTimes(ti);
        }
    }, [temperature]);

    return (
        <article className={styles.article_container}>
            <div className={styles.map_wrapper}>
                <div className={styles.current_position}>
                    {/* 현재 기온 */}
                    <div style={{ display: 'flex' }}>
                        {temperature && <span className={styles.current_position_temperature}>
                            {temperature[0].fcstValue}&deg;
                        </span>}
                        {/* 이미지 추가 */}
                        {precipitation && <WeatherImage data={{ precipitation: precipitation[0].fcstValue, sky: sky[0].fcstValue }} />}
                    </div>

                    {/* 현재 위치(동) */}
                    {local && <span className={styles.current_position_area}>
                        {local.region_3depth_name}
                    </span>}
                    {/* 현재 습도 */}
                    {temperature && <span className={styles.current_position_humidity}>
                        습도:  {humidity[0].fcstValue}%
                    </span>}
                    <span className={styles.current_position_time}>
                        {yoil},{hour}:{min}
                    </span>
                </div>
                {/* 카카오맵 */}
                <KakaoMap />
            </div>


            <div className={styles.weather_wrapper}>
                {/* 초단기 예보 */}
                <div className={styles.weather_title}>
                    <h1>기온 및 날씨</h1>
                    {times && <span>
                        ({times[0]}~{times[5]})
                    </span>}
                </div>

                {temperature && <TodayWeatherGraph data={{ temperature: temperature, humidity: humidity, precipitation: precipitation, time: times }} />}

                <div className={styles.weather_title}>
                    <h1>속보·특보</h1>
                </div>
            </div>
        </article>
    );
};

export default Home;