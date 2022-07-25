import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null,
    status: null, 
    rowTemperatures: null, // 최저기온
    highTemperatures: null, //최고기온
    todaySky: null, //하늘 상태
    todayTemperature: null, //오늘 날씨
    todayPrecipitation: null, //강수확률
    todayHumidity: null, //습도
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
                state.todayTemperature = action.payload.data.filter(item => item.category === "TMP");
                state.todaySky = action.payload.data.filter(item => item.category === "SKY");
                state.rowTemperatures = action.payload.data.filter(item => item.category === "TMN");
                state.highTemperatures = action.payload.data.filter(item => item.category === "TMX");
                state.todayPrecipitation = action.payload.data.filter(item => item.category === "POP");
                state.todayHumidity = action.payload.data.filter(item => item.category === "REH");
            }
        },
    }
});

export const { changeTodayForecastValue } = todayForecastSlice.actions;

export default todayForecastSlice.reducer;