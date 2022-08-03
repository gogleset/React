import React, { useState, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useSelector } from "react-redux";

import Loding from "../components/Loading";

const KakaoMap = () => {
    // stores data
    const { err, latitude, longitude } = useSelector((state) => state.geoLocation);
    // console.log({ lat: latitude === -1 ? 37.565717 : latitude, lng: longitude === -1 ? 126.977794 : longitude });
    return (
        <div>
            <Map
                //위도 경도
                center={{ lat: latitude === -1 ? 37.565717 : latitude, lng: longitude === -1 ? 126.977794 : longitude }}
                style={{ width: "135px", height: "135px", border: "1px solid rgb(207, 207, 207", borderRadius: "50%", marginTop: "20px", boxShadow: "0px 0px 13px rgb(207, 207, 207)" }}
                level={6}
            >
                <MapMarker position={{ lat: latitude === -1 ? 37.565717 : latitude, lng: longitude === -1 ? 126.977794 : longitude }}>
                    {/* <div style={{ color: "#000" }}>
                        현 위치!
                    </div> */}
                </MapMarker>
            </Map>
        </div>
    );
};

export default KakaoMap;