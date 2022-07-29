// 각종 키, 설정 모음입니다.

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { 
    server: {
        port: 4000,
    },
    keys:{
        encodingKey:"Iz8INi2kGzDF4SF1wg0rekepMPMKOQwTHoN7MOUgtfULYXTOixMWpEuMRWpEfoPy3%2Bj%2FFWuRPVLaSe5k%2B4uaTg%3D%3D",
        kakaoRestKey: "e81fe8a8b57c8498edf0dc7040da1a84"
    },
    url:"http://apis.data.go.kr",
    weatherUrls:"/1360000/VilageFcstInfoService_2.0",
    breakingNewsUrls:"/1360000/WthrWrnInfoService", 
    warningNews:"/getWthrWrnList",//news 특보
    weeklyLandUrl:"/1360000/MidFcstInfoService",
    weeklyTemperatureUrl: "/1360000/MidFcstInfoService",
    sunriseUrl:"/B090041/openapi/service/RiseSetInfoService/getLCRiseSetInfo?",
    radarUrl :"/1360000/RadarImgInfoService/getCmpImg?",
    liveSituation: "/getUltraSrtNcst?",
    liveForecast:"/getUltraSrtFcst?",
    todayForecast : "/getVilageFcst?",
    weeklyLandForecast: "/getMidLandFcst?",
    weeklyTemperatureForecast: "/getMidTa?"
}

// http://apis.data.go.kr/B090041/openapi/service/RiseSetInfoService/getLCRiseSetInfo?longitude=12800&latitude=3613&locdate=20150101&dnYn=y&ServiceKey=서비스키