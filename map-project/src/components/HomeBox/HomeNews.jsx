import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { useSelector } from 'react-redux';

import styles from "../../styles/home.module.scss";
import "../../styles/home_news.scss";
import infoImage from "../../asset/images/icon_info.png";


const HomeNews = () => {
    SwiperCore.use([Pagination, Autoplay]); //using pagenation, AutoPlay
    const { local } = useSelector((state) => state.geoLocation);
    const { breakData, fastData } = useSelector((state) => state.breakFastForecast)
    return (
        <div style={{ marginTop: "25px" }}>
            {/* 특보 */}
            {breakData && <>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "10px" }}>
                    <img src={infoImage} alt="전국 특보 속보 알림" width={16} height={16} />
                    {local && <span style={{ fontSize: "15px" }}>{`${local.region_1depth_name} 지역 특보 현황`}</span>}
                </div>
                < Swiper
                    direction={"vertical"}
                    pagination={{ clickable: true, dynamicBullets: true, }}
                    modules={[Pagination, Autoplay]}
                    // onSlideChange={(e) => console.log(e)}
                    style={{
                        height: "90px", marginBottom: "25px"
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                >
                    {breakData.map((item, index) => {
                        return (
                            <SwiperSlide style={{ height: "auto", display: 'flex', flexDirection: "column", textAlign: "center" }} key={index}>
                                {/* 특보현황 box */}
                                <span style={{ color: "rgb(209 106 158)" }}>{item.t1}</span>
                                <span style={{ fontSize: "14px", margin: "10px 0px" }}>{item.t2.slice(4).trim()}</span>
                                <span style={{ fontSize: "9px" }}>{item.t3.slice(item.t3.indexOf("년") + 1).trim()}</span>
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            </>
            }
            {/* 속보 */}
            {fastData &&
                <>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "10px" }}>
                        <img src={infoImage} alt="전국 특보 속보 알림" width={16} height={16} />
                        {local && <span style={{ fontSize: "15px" }}>{`${local.region_1depth_name} 지역 속보 현황`}</span>}
                    </div>
                    <div className={styles.weekly_weather_wrapper}>

                    </div>
                </>
            }
        </div>
    );
};

export default HomeNews;