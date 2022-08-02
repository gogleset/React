import React from 'react';
import { useSelector } from 'react-redux';
import styles from "../../styles/home.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";


const HomeVideoBox = () => {
    //using pagenation, AutoPlay

    const { videoData } = useSelector((state) => state.video);

    React.useEffect(() => { console.log(videoData) }, [videoData]);
    return (
        <>
            <div className={styles.weather_title}>
                <h1>오늘비와?</h1>
            </div>
            < Swiper
                pagination={{ clickable: true, dynamicBullets: true, }}
                // onSlideChange={(e) => console.log(e)}
                style={{
                    height: "90px", marginBottom: "25px"
                }}
                slidesPerView={2}
                freeMode={true}
            >

                {videoData && videoData.map((item, index) => {
                    return (
                        <SwiperSlide key={index} style={{ fontSize: '12px', display: 'flex', margin: "5px 0px", alignItems: 'center' }} onClick={() => window.open(`${item.url}`)}>
                            <img src={item.thumbnail} alt={item.autor} style={{ borderRadius: "10px" }} />
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </>

    );
};

export default HomeVideoBox;