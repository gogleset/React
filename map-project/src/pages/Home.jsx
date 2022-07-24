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
    const { data } = useSelector((state) => state.liveForcast);

    // 기온, 습도, 하늘상황(날씨), api데이터
    const [temperature, setTemperature] = useState({}); const [humidity, setHumidity] = useState({});
    const [sky, setSky] = useState({});
    const [precipitation, setPrecipitation] = useState({});
    const [times, setTimes] = useState([]);


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
            setPrecipitation((prevState) => {
                return {
                    ...prevState, data:
                        data.filter(item => item.category === "PTY")
                }
            });
            setSky((prevState) => {
                return {
                    ...prevState, data:
                        data.filter(item => item.category === "SKY")
                }
            });
        }
    }, [data]);

    // 날씨 api받아오면 시간 추출
    useEffect(() => {
        if (temperature.data) {
            let ti = temperature.data.map(item => item.fcstTime.slice(0, 2) +
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
                        {temperature.data && <span className={styles.current_position_temperature}>
                            {temperature.data[0].fcstValue}&deg;
                        </span>}
                        {/* 이미지 추가 */}
                        {precipitation.data && <WeatherImage data={{ precipitation: precipitation.data[0].fcstValue, sky: sky.data[0].fcstValue }} />}
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
                {/* 초단기 예보 */}
                <div className={styles.weather_title}>
                    <h1>기온 및 날씨</h1>
                    {times && <span>
                        ({times[0]}~{times[5]})
                    </span>}
                </div>

                {temperature.data && <TodayWeatherGraph data={{ temperature: temperature.data, humidity: humidity.data, precipitation: precipitation.data, time: times }} />}

                <div className={styles.weather_title}>
                    <h1>속보·특보</h1>
                    
                </div>

            </div>
        </article>
    );
};

export default Home;