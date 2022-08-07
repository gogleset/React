import { createSlice } from "@reduxjs/toolkit";
import DayHelper from "../../../helper/DayHelper.js";
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
    nowTemperature: null,
    nowPrecipitationForm: null,
    nowSky: null,

    tomorrowTime: null, //내일
    tomorrowTemperature: null,
    tomorrowPrecipitationForm: null,
    tomorrowSky: null,

    dayAfterTomorrowTime: null, //내일모레
    dayAfterTomorrowTemperature: null,
    dayAfterTomorrowPrecipitationForm: null,
    dayAfterTomorrowSky: null,
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
                // 오늘 데이터
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
                // 내일 데이터 
                state.tomorrowTemperature = action.payload.data.filter(item => item.category === "TMP" && item.fcstDate === dayjs(today).add(1, "day").format("YYYYMMDD"))
                let tommorowTimeArr = [...state.tomorrowTemperature];
                state.tomorrowTemperature = state.tomorrowTemperature.map(item => item.fcstValue)
                state.tomorrowPrecipitationForm = action.payload.data.filter(item => item.category === "PTY" && item.fcstDate === dayjs(today).add(1, "day").format("YYYYMMDD")).map(item => item.fcstValue);
                state.tomorrowSky = action.payload.data.filter(item => item.category === "SKY" && item.fcstDate === dayjs(today).add(1, "day").format("YYYYMMDD")).map(item => item.fcstValue)
                if (tommorowTimeArr) {
                    state.tomorrowTime = null; //time
                    state.tomorrowTime = tommorowTimeArr.map(item => item.fcstTime.slice(0, 2) +
                        ":" + item.fcstTime.slice(2));
                }

                //내일 모레 데이터
                state.dayAfterTomorrowTemperature = action.payload.data.filter(item => item.category === "TMP" && item.fcstDate === dayjs(today).add(2, "day").format("YYYYMMDD"))
                let dayTommorowAfterTimeArr = [...state.dayAfterTomorrowTemperature];
                // map함수로 값만 추출
                state.dayAfterTomorrowTemperature = state.dayAfterTomorrowTemperature.map(item => item.fcstValue)
                state.dayAfterTomorrowPrecipitationForm = action.payload.data.filter(item => item.category === "PTY" && item.fcstDate === dayjs(today).add(2, "day").format("YYYYMMDD")).map(item => item.fcstValue);
                state.dayAfterTomorrowSky = action.payload.data.filter(item => item.category === "SKY" && item.fcstDate === dayjs(today).add(2, "day").format("YYYYMMDD")).map(item => item.fcstValue)
                if (dayTommorowAfterTimeArr) {
                    state.dayAfterTomorrowTime = null; //time
                    state.dayAfterTomorrowTime = dayTommorowAfterTimeArr.map(item => item.fcstTime.slice(0, 2) +
                        ":" + item.fcstTime.slice(2));
                }



                // 지금 ~ 19시간 후 까지
                // temperature 객체 복사
                if (state.todayTemperature) {
                    let temperatureArr = [...state.todayTemperature];
                    // console.log(temperatureArr);
                    // time 객체 복사
                    let timeArr = [...state.todayTime];
                    let precipitationFormArr = [...state.todayPrecipitationForm];
                    let skyArr = [...state.todaySky];
                    // console.log(temperatureArr, timeArr, precipitationFormArr, skyArr)
                    for (let i = 0; i < state.todayTemperature.length; i++) {
                        // 오늘날짜 나오지 않는다면 짜름
                        // console.log(state.todayTemperature[i])
                        // console.log(now);
                        // console.log(state.todayTemperature[i].fcstTime)
                        // console.log(state.todayTemperature[i].fcstTime.indexOf(now))
                        // console.log(state.todayTemperature[i].fcstDate === today)
                        if (state.todayTemperature[i].fcstTime.indexOf(now) > -1 && state.todayTemperature[i].fcstDate === today) {
                            break;
                        }
                        temperatureArr.shift()
                        timeArr.shift()
                        precipitationFormArr.shift()
                        skyArr.shift()
                    }

                    // console.log(temperatureArr, timeArr, precipitationFormArr, skyArr)
                    // 19시간까지 데이터로 짜름
                    state.nowTemperature = temperatureArr.slice(1, 21).map((item => item.fcstValue));
                    state.nowTime = timeArr.slice(1, 21)
                    state.nowPrecipitationForm = precipitationFormArr.slice(1, 21).map((item => item.fcstValue));
                    state.nowSky = skyArr.slice(1, 21).map((item => item.fcstValue));
                }
            }
        },
    }
});

export const { changeTodayForecastValue } = todayForecastSlice.actions;

export default todayForecastSlice.reducer;