import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

//styles
import styles from '../styles/home.module.scss';
import localImage from "../styles/images/icon_location.gif";

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
    const { temperature, humidity, sky, precipitation, time } = useSelector((state) => state.liveForecast);
    const { todayTemperature, todaySky, todayPrecipitationForm, todayTime, todayHumidity } = useSelector((state) => state.todayForecast);

    console.log(todayTemperature, todaySky, todayPrecipitationForm, todayTime)


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
                    {local && <div>
                        <span className={styles.current_position_area}>
                            {local.region_3depth_name}
                        </span>
                        <img src={localImage} alt="장소" width={13} height={13} />
                    </div>}


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
                {/* 단기 예보 */}
                <div className={styles.weather_title}>
                    <h1>기온 및 날씨</h1>
                    {todayTime && <span>
                        ({todayTime[0]}~{todayTime[11]})
                    </span>}
                </div>
                {/* 그래프 */}
                {todayTemperature && <div className={styles.weather_today_graph_wrapper}>
                    {/*  */}
                    <div className={styles.weather_today_graph_article_wrapper}>
                        {/* 하늘 상태로 반복 */}
                        {todayPrecipitationForm.map((item, index) => {
                            return (
                                <div className={styles.weather_today_graph_article_box}>
                                    <span>{todayTemperature[index].fcstValue}&deg;</span>
                                    <WeatherImage data={{ precipitation: item.fcstValue, sky: todaySky[index].fcstValue }} width={25} height={25} />
                                </div>
                            )
                        })}
                    </div>
                    {/* 그래프 */}
                    <TodayWeatherGraph data={{ temperature: todayTemperature, humidity: todayHumidity, precipitation: todayPrecipitationForm, time: todayTime }} />
                    {/*  */}
                    <div className={styles.weather_today_graph_article_wrapper} style={{ height: "0px", marginLeft: "-15px" }}>
                        {/* 시간 상태로 반복 */}
                        {todayTime.map((item, index) => {
                            return (
                                <div className={styles.weather_today_graph_article_box} style={{ marginTop: "10px" }}>
                                    <span style={{ textAlign: "center", fontSize: "13px" }}>{item}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
                }

                {/* 초단기 예보 */}
                {/* <div className={styles.weather_title}>
                    <h1>기온 및 날씨</h1>
                    {time && <span>
                        ({time[0]}~{time[5]})-초단기 데이터
                    </span>}
                </div> */}

                {/* {temperature && <TodayWeatherGraph data={{ temperature: temperature, humidity: humidity, precipitation: precipitation, time: time }} />} */}

                <div className={styles.weather_title}>
                    <h1>속보·특보</h1>
                </div>
            </div>
        </article >
    );
};

export default Home;