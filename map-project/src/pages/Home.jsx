import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

import styles from '../styles/home.module.scss';
import KakaoMap from '../components/KakaoMap';

const Home = () => {
    const { err, time, latitude, longitude, local } = useSelector((state) => state.geoLocation);
    const { data, status } = useSelector((state) => state.liveForcast);

    const [temperature, setTemperature] = useState({});
    console.log(temperature)
    const [humidity, setHumidity] = useState({})

    useEffect(() => {
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
        }
    }, [data]);

    useEffect(() => {
        console.log(temperature)

        // console.log(temperature.data[0].fcstValue)
        console.log(humidity)
    }, [temperature, humidity])

    return (
        <article className={styles.article_container}>
            <div className={styles.map_wrapper}>
                <div className={styles.current_position}>
                    <span>{}</span>
                    <span>{local && local.region_3depth_name}</span>
                </div>
                <KakaoMap />
            </div>

            <div className={styles.weather_wrapper}>

            </div>
        </article>
    );
};

export default Home;