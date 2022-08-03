import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import styles from "../../styles/home.module.scss";
import infoImage from "../../asset/images/icon_info.png";
import dustImage from "../../asset/images/icon_dust.png";
import ultraDustImage from "../../asset/images/icon_ultra_dust.png";

const HomeDust = () => {
    // 안내문 표시
    const [isInfoOpen, setIsInfoOpen] = useState(false)

    const { local } = useSelector((state) => state.geoLocation);
    const { dustData } = useSelector((state) => state.dustForecast);
    // states
    const [regionDepth2, setRegionDepth2] = useState();
    const [regionDepth3, setRegionDepth3] = useState();
    const [filterData, setFilterData] = useState({});

    useEffect(() => {
        if (local) {
            setRegionDepth2(local.region_2depth_name)
            setRegionDepth3(local.region_3depth_name)
        }
    }, [local])

    useEffect(() => {
        if (dustData) {
            // console.log(regionDepth2);
            // console.log(regionDepth3);
            setFilterData((prevState) => {
                let filterData = dustData.filter((v, i) => regionDepth2.indexOf(v.stationName) > -1);
                if (filterData.length < 1) {
                    filterData = dustData.filter((v, i) => regionDepth3.indexOf(v.stationName) > -1);
                    if (filterData.length < 1) {
                        filterData = { ...dustData[0] }
                    }
                }
                return { ...prevState, data: filterData }
            })
        }
    }, [regionDepth2, regionDepth3, dustData])

    // useEffect(() => { console.log(filterData) }, [filterData])
    return (
        <>
            <div className={styles.weather_title}>
                <h1>미세먼지·초미세먼지</h1>
                <span style={{ margin: "0px 5px" }}>|</span>
                {filterData.data && <span style={{ marginRight: "10px" }}>{filterData.data[0].stationName ? filterData.data[0].stationName : "-"} 기준</span>}
                <img onClick={() => {
                    setIsInfoOpen(!isInfoOpen)
                }} src={infoImage} alt="미세먼지 안내" width={20} height={20} />
            </div>
            <div onClick={() => {
                setIsInfoOpen(!isInfoOpen)
            }}>
                {isInfoOpen && <div className={styles.weekly_weather_wrapper} style={{ fontSize: "15px", marginBottom: "10px" }}>
                    ※ 데이터 오류 가능성: 데이터는 실시간 관측된 자료이며 측정소 현지 사정이나 데이터의 수신상태에 따라 미수신 될 수 있음
                    <br />
                    ※ 출처: 환경부/한국환경공단
                </div>}
            </div>
            <div className={styles.weekly_weather_wrapper} style={{ display: "flex", flexDirection: "row", }}>
                <div style={{ display: "flex", width: "50%", justifyContent: "center", alignItems: "center", flexDirection: "column", }}>
                    <img src={dustImage} alt="미세먼지" width={55} height={55} />
                    {/* 미세먼지 Pm10데이터 */}
                    {filterData.data && <span>{filterData.data[0].pm10Value ? filterData.data[0].pm10Value : "-"}㎍/㎥</span>}
                    {filterData.data && <span style={{ fontSize: "12px", margin: "2px 0px" }}>{filterData.data[0].pm10Grade === "1" ?
                        "좋음" : filterData.data[0].pm10Grade === "2" ? "보통" : filterData.data[0].pm10Grade === "3" ? "나쁨" : filterData.data[0].pm25Grade === "4" ? "매우나쁨" : "자료없음"
                    }</span>}
                </div>
                <div style={{ border: "1px solid #dddddd", backgroundColor: "#dddddd"}}></div>
                <div style={{ display: "flex", width: "50%", justifyContent: "center", alignItems: "center", flexDirection: "column", }}>
                    <img src={ultraDustImage} alt="초미세먼지" width={60} height={60} />
                    {filterData.data && <span>{filterData.data[0].pm25Value ? filterData.data[0].pm25Value : "-"}㎍/㎥</span>}
                    {filterData.data && <span style={{ fontSize: "12px", margin: "2px 0px" }}>{filterData.data[0].pm25Grade === "1" ?
                        "좋음" : filterData.data[0].pm25Grade === "2" ? "보통" : filterData.data[0].pm25Grade === "3" ? "나쁨" : filterData.data[0].pm25Grade === "4" ? "매우나쁨" : "-"
                    }</span>}
                </div>
            </div>
        </>
    );
};

export default HomeDust;