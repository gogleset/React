import React, { useState, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useSelector } from "react-redux";

import Loding from "../components/Loading";

const KakaoMap = () => {
    // stores data
    const { err, latitude, longitude } = useSelector((state) => state.geoLocation);
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