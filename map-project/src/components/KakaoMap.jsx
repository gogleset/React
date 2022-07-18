import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useSelector, useDispatch } from "react-redux";

import Loding from "../components/Loading";

const KakaoMap = () => {
    const dispatch = useDispatch();
    const { err, time, latitude, longitude } = useSelector((state) => state.geoLocation);

    return (

        <div>
            {err === 0 ? <Map
                center={{ lat: latitude, lng: longitude }}
                style={{ width: "100%", height: "300px" }}
            >
                <MapMarker position={{ lat: latitude, lng: longitude }}>
                    <div style={{ color: "#000" }}>현 위치!</div>
                </MapMarker>
            </Map> : <Loding />}
        </div>
    );
};

export default KakaoMap;