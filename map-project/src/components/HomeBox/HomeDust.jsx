import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import styles from "../../styles/home.module.scss";
import infoImage from "../../asset/images/icon_info.png";
import dustImage from "../../asset/images/icon_dust.png";
import ultraDustImage from "../../asset/images/icon_ultra_dust.png";

const HomeDust = () => {
    const [isInfoOpen, setIsInfoOpen] = useState(false)

    const { local } = useSelector((state) => state.geoLocation);
    return (
        <>
            <div className={styles.weather_title}>
                <h1>미세먼지·초미세먼지</h1>
                <span style={{ margin: "0px 5px" }}>|</span>
                <span style={{ marginRight: "10px" }}>{local ? local.region_1depth_name : "-"} 기준</span>
                <img onClick={() => {
                    setIsInfoOpen(!isInfoOpen)
                }} src={infoImage} alt="미세먼지 안내" width={20} height={20} />
            </div>
            <div onClick={() => {
                setIsInfoOpen(!isInfoOpen)
            }}>
                {isInfoOpen && <div className={styles.weekly_weather_wrapper} style={{ fontSize: "15px" }}>
                    ※ 데이터 오류 가능성: "데이터는 실시간 관측된 자료이며 측정소 현지 사정이나 데이터의 수신상태에 따라 미수신 될 수 있음
                    <br />
                    ※ 출처: "환경부/한국환경공단"
                </div>}
            </div>
            <div className={styles.weekly_weather_wrapper} style={{ display: "flex", flexDirection: "row", }}>
                <div style={{ display: "flex", width: "50%", justifyContent: "center", alignItems: "center", flexDirection: "column", }}>
                    <img src={dustImage} alt="초미세먼지" width={55} height={55} />
                    <span>19㎍/㎥</span>
                    <span>좋음</span>
                </div>
                <div style={{ border: "1px solid #dddddd" }}></div>
                <div style={{ display: "flex", width: "50%", justifyContent: "center", alignItems: "center", flexDirection: "column", }}>
                    <img src={ultraDustImage} alt="초미세먼지" width={60} height={60} />
                    <span>19㎍/㎥</span>
                    <span>좋음</span>
                </div>
            </div>
        </>
    );
};

export default HomeDust;