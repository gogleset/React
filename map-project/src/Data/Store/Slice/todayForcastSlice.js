import { createSlice } from "@reduxjs/toolkit";
import DayHelper from "../../../Helper/DayHelper.js";
import dayjs from "dayjs";

const Day = new DayHelper();
const today = Day.getDay();
const initialState = {
    data: null,
    status: null,
    rowTemperatures: null, // 최저기온
    highTemperatures: null, //최고기온
    todaySky: null, //하늘 상태
    todayTemperature: null, //오늘 온도
    todayPrecipitationProbability: null, //강수확률
    todayPrecipitation: null, //강수량
    todayPrecipitationForm: null,// 강수형태
    todaySnowfall: null, //강설량
    todayHumidity: null, //습도
    todayTime: null, //시간

    nowTime: null, //현재시간~ 19시간후
    nowTemperature: null, //
    nowPrecipitationForm: null,
    nowSky: null,

    tomorrowTime: null, //
    tomorrowTemperature: null, //
    tomorrowPrecipitationForm: null,
    tomorrowSky: null,
    err: null,
};

const todayForecastSlice = createSlice({
    name: 'todayForecast', //해당 모듈의 이름을 작성
    initialState, //해당 모듈의 초기값 세팅
    reducers: { // 해당 리듀서의 키 값으로 액션함수가 자동으로 생성
        changeTodayForecastValue(state, action) {
            state.data = action.payload.data;
            state.status = action.payload.status;
            state.err = action.payload.err;
            if (action.payload.data !== null) {
                let now = `${Day.get24Hour()}00`;
                state.todayTemperature = action.payload.data.filter(item => item.category === "TMP"); // 1시간 온도
                state.todaySky = action.payload.data.filter(item => item.category === "SKY"); //하늘 상태
                state.rowTemperatures = action.payload.data.filter(item => item.category === "TMN"); // 최저기온
                state.highTemperatures = action.payload.data.filter(item => item.category === "TMX"); //최고기온
                state.todayPrecipitationProbability = action.payload.data.filter(item => item.category === "POP"); //강수확룰
                state.todayHumidity = action.payload.data.filter(item => item.category === "REH"); //습도
                state.todayPrecipitation = action.payload.data.filter(item => item.category === "PCP"); //강수량
                state.todayPrecipitationForm = action.payload.data.filter(item => item.category === "PTY"); //강수형태
                state.todaySnowfall = action.payload.data.filter(item => item.category === "SNO") //강설량
                if (state.todayTemperature) {
                    state.todayTime = null; //time
                    state.todayTime = state.todayTemperature.map(item => item.fcstTime.slice(0, 2) +
                        ":" + item.fcstTime.slice(2));
                }
                console.log(dayjs(today).add(1, "day").format("YYYYMMDD"));
                state.tomorrowTemperature = action.payload.data.filter(item => item.category === "TMP" && item.fcstDate === dayjs(today).add(1, "day").format("YYYYMMDD"));
                state.tomorrowPrecipitationForm = action.payload.data.filter(item => item.category === "PTY" && item.fcstDate === dayjs(today).add(1, "day").format("YYYYMMDD"));
                state.tomorrowSky = action.payload.data.filter(item => item.category === "SKY" && item.fcstDate === dayjs(today).add(1, "day").format("YYYYMMDD"))
                if (state.tomorrowTemperature) {
                    state.tomorrowTime = null; //time
                    state.tomorrowTime = state.tomorrowTemperature.map(item => item.fcstTime.slice(0, 2) +
                        ":" + item.fcstTime.slice(2));
                }
                console.log(now)
                // temperature 객체 복사
                let temperatureArr = [...state.todayTemperature];
                // time 객체 복사
                let timeArr = [...state.todayTime];
                let precipitationFormArr = [...state.todayPrecipitationForm];
                let skyArr = [...state.todaySky]
                for (let i = 0; i < state.todayTemperature.length; i++) {
                    // 오늘날짜 나오지 않는다면 짜름
                    if (state.todayTemperature[i].fcstTime.indexOf(now) === 0) {
                        break;
                    }
                    temperatureArr.shift()
                    timeArr.shift()
                    precipitationFormArr.shift()
                    skyArr.shift()
                }
                // 19시간까지 데이터로 짜름
                state.nowTemperature = temperatureArr.slice(0, 20).map((item => item.fcstValue));
                state.nowTime = timeArr.slice(0, 20)
                state.nowPrecipitationForm = precipitationFormArr.slice(0, 20).map((item => item.fcstValue));
                state.nowSky = skyArr.slice(0, 20).map((item => item.fcstValue));
            }
        },
    }
});

export const { changeTodayForecastValue } = todayForecastSlice.actions;

export default todayForecastSlice.reducer;