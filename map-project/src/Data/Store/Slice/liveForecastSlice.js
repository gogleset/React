import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null,
    temperature: null, //온도
    humidity: null, //습도
    sky: null, //하늘상태
    precipitation: null, //강수확률
    time: null, // 시간
    status: null,
    err: null,
};

const liveForcastSlice = createSlice({
    name: 'liveForecast', //해당 모듈의 이름을 작성
    initialState, //해당 모듈의 초기값 세팅
    reducers: { // 해당 리듀서의 키 값으로 액션함수가 자동으로 생성
        changeLiveForecastValue(state, action) {
            state.data = action.payload.data;
            state.status = action.payload.status;
            state.err = action.payload.err;
            if (action.payload.data !== null) {
                state.temperature = action.payload.data.filter(item => item.category === "T1H");
                state.humidity = action.payload.data.filter(item => item.category === "REH");
                state.sky = action.payload.data.filter(item => item.category === "SKY");
                state.precipitation = action.payload.data.filter(item => item.category === "PTY")
                if (state.temperature) {
                    state.time = null;
                    state.time = state.temperature.map(item => item.fcstTime.slice(0, 2) +
                        ":" + item.fcstTime.slice(2));
                }
            }
        },
    }
});

export const { changeLiveForecastValue } = liveForcastSlice.actions;

export default liveForcastSlice.reducer;