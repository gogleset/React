import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from 'swiper';

//styles
import styles from '../styles/home.module.scss';
import localImage from "../asset/images/icon_location.gif";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import "../styles/swiperStyle.scss";

//components
import KakaoMap from '../components/KakaoMap';
import WeatherImage from '../components/Home/WeatherImage';
import TodayWeatherGraph from '../components/Home/TodayWeatherGraph';

// data
import DayHelper from "../Helper/DayHelper.js";
const Day = new DayHelper();

const Home = () => {
    const [currentDay, setCurrentDay] = useState("오늘");
    // pagination use
    SwiperCore.use([Pagination])
    const yoil = Day.getYoil();
    const hour = Day.get24Hour();
    const min = Day.getMin()

    // states
    const { local } = useSelector((state) => state.geoLocation);
    // 기온, 습도, 하늘상황(날씨), api데이터
    const { temperature, humidity, sky, precipitation, time } = useSelector((state) => state.liveForecast);
    // 오늘 단기데이터, 내일, 내일 모레 api데이터
    const { todayTemperature, highTemperatures, nowPrecipitationForm, rowTemperatures, nowTemperature, nowTime, nowSky, tomorrowPrecipitationForm, tomorrowTime, tomorrowTemperature, tomorrowSky, dayAfterTomorrowTime, dayAfterTomorrowTemperature, dayAfterTomorrowPrecipitationForm, dayAfterTomorrowSky } = useSelector((state) => state.todayForecast);



    // console.log(todayTemperature, todaySky, todayPrecipitationForm, todayTime)


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
                    <span>({currentDay})</span>
                </div>

                {/* 그래프 */}
                <Swiper
                    direction={"vertical"}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    onSlideChange={(e) => {
                        console.log(e.activeIndex)
                        if (e.activeIndex === 0) {
                            setCurrentDay("오늘")
                        } else if (e.activeIndex === 1) {
                            setCurrentDay("내일")
                        } else {
                            setCurrentDay("모레")
                        }
                    }}
                >
                    <SwiperSlide>
                        {todayTemperature && <div className={styles.weather_today_graph_wrapper}>
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




                {/* 주간 예보 */}
                <div className={styles.weather_title}>
                    <h1>주간 기온 및 날씨</h1>
                </div>

                <div style={{ maxWidth: "350px", height: "300px", boxShadow: "0 0 10px rgb(228, 228, 228)", borderRadius: "15px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <span>{Day.getYoil(1)}요일</span>
                        <span>60%</span>
                        {precipitation && <WeatherImage data={{ precipitation: precipitation[0].fcstValue, sky: sky[0].fcstValue, time: time[0] }} width={20} height={20} />}
                        {precipitation && <WeatherImage data={{ precipitation: precipitation[0].fcstValue, sky: sky[0].fcstValue, time: time[0] }} width={20} height={20} />}
                        {highTemperatures && <span>
                            {parseInt(highTemperatures[0].fcstValue)}&deg;/ {parseInt(rowTemperatures[0].fcstValue)}&deg;
                        </span>}
                    </div>

                </div>

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