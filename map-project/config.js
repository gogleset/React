// 각종 키, 설정 모음입니다.
export default { 
    server: {
        port: 4000,
    },
    keys:{
        weatherEncodingKey:"Iz8INi2kGzDF4SF1wg0rekepMPMKOQwTHoN7MOUgtfULYXTOixMWpEuMRWpEfoPy3%2Bj%2FFWuRPVLaSe5k%2B4uaTg%3D%3D",
        weatherDecodingKey:"Iz8INi2kGzDF4SF1wg0rekepMPMKOQwTHoN7MOUgtfULYXTOixMWpEuMRWpEfoPy3+j/FWuRPVLaSe5k+4uaTg=="
    },
    weatherUrl:"http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0",
    liveSituation: "/getUltraSrtNcst?",
    liveForcast:"/getUltraSrtFcst?",
    ShortForcast : "/getVilageFcst?",

}