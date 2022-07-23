// 각종 키, 설정 모음입니다.

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { 
    server: {
        port: 4000,
    },
    keys:{
        weatherEncodingKey:"Iz8INi2kGzDF4SF1wg0rekepMPMKOQwTHoN7MOUgtfULYXTOixMWpEuMRWpEfoPy3%2Bj%2FFWuRPVLaSe5k%2B4uaTg%3D%3D",
        weatherDecodingKey:"Iz8INi2kGzDF4SF1wg0rekepMPMKOQwTHoN7MOUgtfULYXTOixMWpEuMRWpEfoPy3+j/FWuRPVLaSe5k+4uaTg==",
        kakaoRestKey: "e81fe8a8b57c8498edf0dc7040da1a84"
    },
    weatherUrl:"http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0",
    weatherUrls:"/1360000/VilageFcstInfoService_2.0",
    liveSituation: "/getUltraSrtNcst?",
    liveForcast:"/getUltraSrtFcst?",
    ShortForcast : "/getVilageFcst?",
}