import React from 'react';
import { useSelector } from 'react-redux';

import DayHelper from "../../Helper/DayHelper.js";

import styles from "../../styles/home.module.scss";
import WeatherImage from '../../components/Home/WeatherImage';
import rainImage from "../../asset/images/icon_rain.gif";
const Day = new DayHelper();

const HomeWeekBox = () => {
    const { weeklyLandData, weeklyTemperatureData } = useSelector((state) => state.weeklyForecast)
    return (
        <>
            {/* 주간 예보 */}
            <div className={styles.weather_title}>
                <h1>주간 날씨</h1>
            </div>

            {weeklyLandData && weeklyTemperatureData && <div className={styles.weekly_weather_wrapper}>
                {[...Array(5)].map((item, index) => {

                    return (
                        <div className={styles.weekly_weather_box} key={index}>
                            <span style={{ marginRight: "10px" }}>{Day.getYoil(index + 3)}요일</span>
                            <div className={styles.weekly_weather_item}>
                                <img src={rainImage} alt="오전 강수확률" width={20} height={20} />
                                <span style={{ fontSize: "13px" }}>
                                    {weeklyLandData[0][`rnSt${index + 3}Am`]}%
                                </span>
                            </div>
                            <div className={styles.weekly_weather_item}>
                                <img src={rainImage} alt="오후 강수확률" width={20} height={20} />
                                <span style={{ fontSize: "13px" }}>
                                    {weeklyLandData[0][`rnSt${index + 3}Pm`]}%
                                </span>

                            </div>
                            <div className={styles.weekly_weather_item}>
                                <div style={{ marginRight: "5px" }}>
                                    <WeatherImage data={{ weeklySky: weeklyLandData[0][`wf${index + 3}Am`] }} width={25} height={25} />
                                </div>
                                <div style={{ marginRight: "13px" }}>
                                    <WeatherImage data={{ weeklySky: weeklyLandData[0][`wf${index + 3}Am`] }} width={25} height={25} />
                                </div>
                                <span style={{ marginRight: "1px" }}>{weeklyTemperatureData[0][`taMax${index + 3}`]}&deg;/</span>
                                <span>{weeklyTemperatureData[0][`taMin${index + 3}`]}&deg;</span>
                            </div>
                        </div>
                    )
                })}
                {[...Array(3)].map((item, index) => {

                    return (
                        <div className={styles.weekly_weather_box} key={index}>
                            <div className={styles.weekly_weather_item}>
                                <span style={{ marginRight: "55px" }}>{Day.getYoil(index + 8)}요일</span>
                                <img src={rainImage} alt="강수 확률" width={20} height={20} />
                                <span style={{ fontSize: "13px" }}>
                                    {weeklyLandData[0][`rnSt${index + 8}`]}%
                                </span>
                            </div>
                            <div className={styles.weekly_weather_item}>
                                <div style={{ marginRight: "25px" }}>
                                    <WeatherImage data={{ weeklySky: weeklyLandData[0][`wf${index + 8}`] }} width={25} height={25} />
                                </div>
                                <span style={{ marginRight: "1px" }}>{weeklyTemperatureData[0][`taMax${index + 8}`]}&deg;/</span>
                                <span>{weeklyTemperatureData[0][`taMin${index + 8}`]}&deg;</span>
                            </div>
                        </div>
                    )
                })}
            </div>}
        </>
    );
};

export default HomeWeekBox;