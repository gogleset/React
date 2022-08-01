import React, { Fragment, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from 'swiper';
import { useSelector } from 'react-redux';

import styles from "../../styles/home.module.scss";

import TodayWeatherGraph from '../../components/Home/TodayWeatherGraph';
import WeatherImage from '../../components/Home/WeatherImage';


const HomeDayBox = () => {
    SwiperCore.use([Pagination])
    const temperatureAndWeatherSubtitle = useRef();
    const swiperSwitch = useRef();

    const { nowPrecipitationForm, nowTemperature, nowTime, nowSky, tomorrowPrecipitationForm, tomorrowTime, tomorrowTemperature, tomorrowSky, dayAfterTomorrowTime, dayAfterTomorrowTemperature, dayAfterTomorrowPrecipitationForm, dayAfterTomorrowSky } = useSelector((state) => state.todayForecast);

    return (
        <Fragment>
            <div className={styles.weather_title}>
                <h1>기온 및 날씨</h1>
                <div ref={temperatureAndWeatherSubtitle}>
                    <span style={{ margin: "0px 5px" }}>|</span>
                    <span style={{ color: "black" }} onClick={() => {
                        return swiperSwitch.current.swiper.slideTo(0)
                    }}>오늘</span>
                    <span>·</span>
                    <span onClick={() => {
                        return swiperSwitch.current.swiper.slideTo(1)
                    }}>내일</span>
                    <span>·</span>
                    <span onClick={() => {
                        return swiperSwitch.current.swiper.slideTo(2)
                    }}>모레</span>
                    <span></span>
                </div>
            </div>
            <Swiper
                ref={swiperSwitch}
                direction={"vertical"}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                onSlideChange={(e) => {
                    if (e.activeIndex === 0) {
                        temperatureAndWeatherSubtitle.current.children[1].style.color = "black"
                        temperatureAndWeatherSubtitle.current.children[3].style.color = "rgb(182, 182, 182)"
                        temperatureAndWeatherSubtitle.current.children[5].style.color = "rgb(182, 182, 182)"
                    } else if (e.activeIndex === 1) {
                        temperatureAndWeatherSubtitle.current.children[1].style.color = "rgb(182, 182, 182)"
                        temperatureAndWeatherSubtitle.current.children[3].style.color = "black"
                        temperatureAndWeatherSubtitle.current.children[5].style.color = "rgb(182, 182, 182)"
                    } else {
                        temperatureAndWeatherSubtitle.current.children[1].style.color = "rgb(182, 182, 182)"
                        temperatureAndWeatherSubtitle.current.children[3].style.color = "rgb(182, 182, 182)"
                        temperatureAndWeatherSubtitle.current.children[5].style.color = "black"
                    }
                }}
            >
                <SwiperSlide>
                    {nowPrecipitationForm && <div className={styles.weather_today_graph_wrapper}>
                        {/*  */}
                        <div className={styles.weather_today_graph_article_wrapper}>
                            {/* 하늘 상태로 반복 */}
                            {nowPrecipitationForm.map((item, index) => {
                                return (
                                    <div className={styles.weather_today_graph_article_box} key={index}>
                                        <span>{nowTemperature[index]}&deg;</span>
                                        <WeatherImage data={{ precipitation: item, sky: nowSky[index], time: nowTime[index].slice(0, 2) }} width={25} height={25} />
                                    </div>
                                )
                            })}
                        </div>
                        {/* 그래프 */}
                        <TodayWeatherGraph data={{ temperature: nowTemperature, time: nowTime }} />
                    </div>}
                </SwiperSlide>
                <SwiperSlide>
                    {tomorrowPrecipitationForm && <div className={styles.weather_today_graph_wrapper}>
                        {/*  */}
                        <div className={styles.weather_today_graph_article_wrapper}>
                            {/* 하늘 상태로 반복 */}
                            {tomorrowPrecipitationForm.map((item, index) => {
                                return (
                                    <div className={styles.weather_today_graph_article_box} key={index}>
                                        <span>{tomorrowTemperature[index]}&deg;</span>
                                        <WeatherImage data={{ precipitation: item, sky: tomorrowSky[index], time: tomorrowTime[index].slice(0, 2) }} width={25} height={25} />
                                    </div>
                                )
                            })}
                        </div>
                        {/* 그래프 */}
                        <TodayWeatherGraph data={{ temperature: tomorrowTemperature, time: tomorrowTime }} />
                    </div>}
                </SwiperSlide>
                <SwiperSlide>
                    {dayAfterTomorrowPrecipitationForm && <div className={styles.weather_today_graph_wrapper}>
                        {/*  */}
                        <div className={styles.weather_today_graph_article_wrapper}>
                            {/* 하늘 상태로 반복 */}
                            {dayAfterTomorrowPrecipitationForm.map((item, index) => {
                                return (
                                    <div className={styles.weather_today_graph_article_box} key={index}>
                                        <span>{dayAfterTomorrowTemperature[index]}&deg;</span>
                                        <WeatherImage data={{ precipitation: item, sky: dayAfterTomorrowSky[index], time: dayAfterTomorrowTime[index].slice(0, 2) }} width={25} height={25} />
                                    </div>
                                )
                            })}
                        </div>
                        {/* 그래프 */}
                        <TodayWeatherGraph data={{ temperature: dayAfterTomorrowTemperature, time: dayAfterTomorrowTime }} />
                    </div>}
                </SwiperSlide>
            </Swiper>
        </Fragment>
    );
};

export default HomeDayBox;