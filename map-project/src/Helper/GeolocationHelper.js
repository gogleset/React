import axios from "axios";
import config from "../../src/config.js";
// 현재 위치를 담은 에러, 시간, 위도, 경도 객체를 리턴합니다.
async function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            const now = new Date();
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve({
                        err: 0,
                        time: now.toLocaleTimeString(),
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (err) => {
                    resolve({
                        err: -1,
                        time: now.toLocaleTimeString(),
                        latitude: -1,
                        longitude: -1,
                    });
                },
                { enableHighAccuracy: true, maximumAge: 2000, timeout: 5000 }
            );
        } else {
            reject({ error: -2, latitude: -1, longitude: -1 });
        }
    });
}

// 현재위치 기반 동네 주소 가져오기
async function getAddress(latitude, longitude) {
    console.log(latitude, longitude);
    try {
        const result = await axios.get(`https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${longitude}&y=${latitude}&input_coord=WGS84`,{
            headers: { 'Authorization': `KakaoAK ${config.keys.kakaoRestKey}`}
        });

        return {
            status: result.status,
            statusText: result.statusText,
            data : result.data.documents[0].address,
        }
    } catch(err) {
        return err;
    }
}


export { getCurrentLocation, getAddress };