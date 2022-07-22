import React, { useState, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useSelector, useDispatch } from "react-redux";

import Loding from "../components/Loading";

const KakaoMap = () => {
    const dispatch = useDispatch();
    // stores data
    const { err, time, latitude, longitude } = useSelector((state) => state.geoLocation);
    const { data, status } = useSelector((state) => state.liveForcast);



    useEffect(() => {
        if (status === 200) {
            console.log(data)
        }
        console.log(status)
    }, [status])

    return (
        <div>
            {err === 0 ? <Map
                //위도 경도
                center={{ lat: latitude, lng: longitude }}
                style={{ width: "120px", height: "120px", border: "1px solid black", borderRadius: "50%" }}
                level={6}
            >
                <MapMarker position={{ lat: latitude, lng: longitude }}>
                    {/* <div style={{ color: "#000" }}>
                        현 위치!
                    </div> */}
                </MapMarker>
            </Map> : <Loding />}
        </div>
    );
};

export default KakaoMap;