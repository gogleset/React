import { weeklyTemperatureCodeData } from "../asset/data/weeklyTemperatureCode.js";
import { lifeWeatherCodeData } from "../asset/data/lifeWeatherCode.js";
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

// 중기육상지역코드를 리턴하는 함수
function getWeeklyLandCode(local) {
    // console.log("getWeeklyLandCode ::: " + local)
    let localString = local;
    return ((/(서울|인천|경기)/).test(localString)) ? `11B00000` :
        ((/(대전|세종|충남|충청남도|세종특별자치시)/).test(localString)) ? `11C20000` :
            ((/(충북|충청북도)/).test(localString)) ? `11C10000` :
                ((/(광주|전라남도|전남)/).test(localString)) ? `11F20000` :
                    ((/(전북|전라북도)/).test(localString)) ? `11F10000` :
                        ((/(경북|경상북도|대구)/).test(localString)) ? `11H10000` :
                            ((/(경남|경상남도|울산|부산)/).test(localString)) ? `11H20000` :
                                ((/(제주|제주도|제주특별자치도|서귀포시)/).test(localString)) ? `11G00000` : ((/(강릉|동해|속초|삼척|태백|고성|양양)/).test(localString)) ? `11D20000` : '11B00000'
}

// 중기기온코드를 리턴하는 함수
function getWeeklyTemperatureForecastCode(local) {
    // depth1 추출(시군구)
    // console.log("getWeeklyTemperatureForecastCode :::" + local);
    let depth1 = local.slice(0, local.indexOf(" ")).trim();
    // console.log(depth1);
    if (depth1 === "세종특별자치시") {
        depth1 = "세종"
    }
    // console.log(depth1);
    // 도시명 찾기
    const filtering = weeklyTemperatureCodeData.filter((v) => {
        return depth1.indexOf(v.city) > -1
    })
    let filters = null;
    filtering.forEach((v) => {
        if (v.city === "독도") {
            return filters = filtering.filter(v => v.city === "독도")
        } else if (v.city === "광주") {
            return filters = filtering.filter(v => v.region.indexOf(depth1) > -1);
        } else {
            return filters = v;
        }
    });
    return filters.code;
}

// 생활기상지수 조회서비스 지역별 코드번호를 리턴하는 함수
function getLifeWeatherCode(depth1, depth2, depth3) {
    if (depth1 === undefined || depth2 === undefined || depth3 === undefined) {
        console.log("getLifeWeather::: no data");
        return null;
    }
    const region_1depth_name = depth1.trim();
    const region_2depth_name = depth2.trim();
    const region_3depth_name = depth3.trim();
    let arr = lifeWeatherCodeData.filter((item, index) => {
        return item.depth3.trim() === region_3depth_name;
    });

    if (arr.length < 1) {
        arr = lifeWeatherCodeData.filter((item, index) => {
            return item.depth2.trim() === region_2depth_name;
        });
        // 검색결과가 하나 이상일때
        if (arr.length > 0) {
            arr = { ...arr[0] }
        } else {
            arr = lifeWeatherCodeData.filter((item, index) => {
                return item.depth1.trim() === region_1depth_name;
            })
            arr = { ...arr[0] }
        }
    }
    return arr;
}

// 기상특보속보 지점코드를 반환하는 함수
function getBreakFastForecastCode(local) {
    // console.log(local)
    if (local) {
        switch (local) {
            case "서울":
            case "인천":
            case "경기":
                return 109;
            case "부산":
            case "울산":
            case "경남":
                return 159;
            case "대구":
            case "경북":
                return 143;
            case "광주":
            case "전남":
                return 156;
            case "전북":
                return 146;
            case "대전":
            case "세종특별자치시":
            case "세종":
            case "충남":
                return 133;
            case "충북":
                return 131;
            case "강원":
                return 105;
            case "제주특별자치도":
                return 184;
            default:
                return 108;
        }
    } else {
        throw new Error("데이터 없음")
    }
}


// LCC DFS 좌표변환 ( code : "toXY"(위경도->좌표, v1:위도, v2:경도), "toLL"(좌표->위경도,v1:x, v2:y) ) - 기상청 제공
function dfs_xy_conv(code, v1, v2) {
    var RE = 6371.00877; // 지구 반경(km)
    var GRID = 5.0; // 격자 간격(km)
    var SLAT1 = 30.0; // 투영 위도1(degree)
    var SLAT2 = 60.0; // 투영 위도2(degree)
    var OLON = 126.0; // 기준점 경도(degree)
    var OLAT = 38.0; // 기준점 위도(degree)
    var XO = 43; // 기준점 X좌표(GRID)
    var YO = 136; // 기1준점 Y좌표(GRID)
    var DEGRAD = Math.PI / 180.0;
    var RADDEG = 180.0 / Math.PI;

    var re = RE / GRID;
    var slat1 = SLAT1 * DEGRAD;
    var slat2 = SLAT2 * DEGRAD;
    var olon = OLON * DEGRAD;
    var olat = OLAT * DEGRAD;

    var sn = Math.tan(Math.PI * 0.25 + slat2 * 0.5) / Math.tan(Math.PI * 0.25 + slat1 * 0.5);
    sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn);
    var sf = Math.tan(Math.PI * 0.25 + slat1 * 0.5);
    sf = Math.pow(sf, sn) * Math.cos(slat1) / sn;
    var ro = Math.tan(Math.PI * 0.25 + olat * 0.5);
    ro = re * sf / Math.pow(ro, sn);
    var rs = {};
    if (code === "toXY") {
        rs['lat'] = v1;
        rs['lng'] = v2;
        var ra = Math.tan(Math.PI * 0.25 + (v1) * DEGRAD * 0.5);
        ra = re * sf / Math.pow(ra, sn);
        var theta = v2 * DEGRAD - olon;
        if (theta > Math.PI) theta -= 2.0 * Math.PI;
        if (theta < -Math.PI) theta += 2.0 * Math.PI;
        theta *= sn;
        rs['nx'] = Math.floor(ra * Math.sin(theta) + XO + 0.5);
        rs['ny'] = Math.floor(ro - ra * Math.cos(theta) + YO + 0.5);
    }
    else {
        rs['nx'] = v1;
        rs['ny'] = v2;
        var xn = v1 - XO;
        var yn = ro - v2 + YO;
        ra = Math.sqrt(xn * xn + yn * yn);
        if (sn < 0.0) {
            sn = sn - ra;
        }
        var alat = Math.pow((re * sf / ra), (1.0 / sn));
        alat = 2.0 * Math.atan(alat) - Math.PI * 0.5;

        if (Math.abs(xn) <= 0.0) {
            theta = 0.0;
        }
        else {
            if (Math.abs(yn) <= 0.0) {
                theta = Math.PI * 0.5;
                if (xn < 0.0) {
                    theta = xn - theta;
                }
            }
            else theta = Math.atan2(xn, yn);
        }
        var alon = theta / sn + olon;
        rs['lat'] = alat * RADDEG;
        rs['lng'] = alon * RADDEG;
    }
    return rs;
}



export { getCurrentLocation, getWeeklyLandCode, dfs_xy_conv, getWeeklyTemperatureForecastCode, getBreakFastForecastCode, getLifeWeatherCode };