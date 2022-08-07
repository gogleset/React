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

    function getDustStep(level) {
        if (level === undefined || level === null) {
            console.log("no level data")
            return "-";
        }
        let result;
        switch (parseInt(level)) {
            case 1:
                result = "좋음"
                break
            case 2:
                result = "보통"
                break
            case 3:
                result = "나쁨"
                break
            case 4:
                result = "매우나쁨"
                break
            default:
                result = "자료 없음"
                break
        }
        return result;
    }

    useEffect(() => {
        if (dustData) {

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
        // console.log(regionDepth2);
        // console.log(regionDepth3);
    }, [regionDepth2, regionDepth3, dustData])

    // useEffect(() => { console.log(filterData) }, [filterData])
    return (
        <>
            <div className={styles.weather_title}>
                <h1>미세먼지·초미세먼지</h1>
                <span style={{ margin: "0px 5px" }}>|</span>
                {/* {console.log(filterData.data)}
                {console.log(JSON.stringify(filterData.data) === '{}')}
                {console.log(Array.isArray(filterData.data))} */}
                {filterData.data === undefined ?
                    // 필터데이터가 없을때
                    <span style={{ marginRight: "10px" }}> - 기준</span> :
                    // 필터 데이터가 있을때 
                    <span style={{ marginRight: "10px" }}>{Array.isArray(filterData.data) ? filterData.data[0].stationName : filterData.data.stationName} 기준</span>}
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
                    {filterData.data === undefined ?
                        <span> - ㎍/㎥</span> :
                        <span>{Array.isArray(filterData.data) ?
                            filterData.data[0].pm10Value :
                            filterData.data.pm10Value}㎍/㎥</span>}
                    {filterData.data === undefined ?
                        "-" : <span style={{ fontSize: "12px", margin: "2px 0px" }}>{Array.isArray(filterData.data) ?
                            getDustStep(filterData.data[0].pm10Grade)
                            : getDustStep(filterData.data.pm10Grade)}</span>}
                </div>
                <div style={{ border: "1px solid #dddddd", backgroundColor: "#dddddd" }}></div>
                <div style={{ display: "flex", width: "50%", justifyContent: "center", alignItems: "center", flexDirection: "column", }}>
                    <img src={ultraDustImage} alt="초미세먼지" width={60} height={60} />
                    {filterData.data === undefined ?
                        <span> - ㎍/㎥</span> :
                        <span>{Array.isArray(filterData.data) ?
                            filterData.data[0].pm25Value :
                            filterData.data.pm25Value}㎍/㎥</span>}

                    {filterData.data === undefined ?
                        "-" : <span style={{ fontSize: "12px", margin: "2px 0px" }}>{Array.isArray(filterData.data) ?
                            getDustStep(filterData.data[0].pm25Grade)
                            : getDustStep(filterData.data.pm25Grade)}</span>}
                </div>
            </div>
        </>
    );
};

export default HomeDust;