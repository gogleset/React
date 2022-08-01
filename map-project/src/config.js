// 각종 키, 설정 모음입니다.

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    server: {
        port: 4000,
    },
    keys: {
        encodingKey: "Iz8INi2kGzDF4SF1wg0rekepMPMKOQwTHoN7MOUgtfULYXTOixMWpEuMRWpEfoPy3%2Bj%2FFWuRPVLaSe5k%2B4uaTg%3D%3D",
        kakaoRestKey: "e81fe8a8b57c8498edf0dc7040da1a84"
    },
    url: "http://apis.data.go.kr",
    weatherUrls: "/1360000/VilageFcstInfoService_2.0",
    breakingNewsUrl: "/1360000/WthrWrnInfoService",
    weeklyLandUrl: "/1360000/MidFcstInfoService",
    weeklyTemperatureUrl: "/1360000/MidFcstInfoService",
    sunriseUrl: "/B090041/openapi/service/RiseSetInfoService/getLCRiseSetInfo?",
    radarUrl: "/1360000/RadarImgInfoService/getCmpImg?",
    dustUrl: "/B552584/ArpltnInforInqireSvc",


    liveSituation: "/getUltraSrtNcst?",
    liveForecast: "/getUltraSrtFcst?",
    todayForecast: "/getVilageFcst?",
    weeklyLandForecast: "/getMidLandFcst?",
    weeklyTemperatureForecast: "/getMidTa?",
    sidoDustForecast: "/getCtprvnRltmMesureDnsty?",
    breakingNewsForecast: "/getWthrWrnMsg?",
    fastNewsForecast: "/getWthrBrkNews?"
}

// http://apis.data.go.kr/1360000/WthrWrnInfoService/getWthrBrkNews?serviceKey=인증키&numOfRows=10&pageNo=1&stnId=108&fromTmFc=20170607&toTmFc=20170607
