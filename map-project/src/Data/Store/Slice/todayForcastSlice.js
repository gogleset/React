import { createSlice } from "@reduxjs/toolkit";

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
    todayTime:null, //시간
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
                    state.todayTime = null;
                    state.todayTime = state.todayTemperature.map(item => item.fcstTime.slice(0, 2) +
                        ":" + item.fcstTime.slice(2));
                }
            }
        },
    }
});

export const { changeTodayForecastValue } = todayForecastSlice.actions;

export default todayForecastSlice.reducer;