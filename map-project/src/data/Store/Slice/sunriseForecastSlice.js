import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // 일몰, 일출 데이터
    sunriseData: null,
    sunriseErr: null,
    sunriseStatus: null,
};

const sunriseForecastSlice = createSlice({
    name: 'sunriseForecast', //해당 모듈의 이름을 작성
    initialState, //해당 모듈의 초기값 세팅
    reducers: { // 해당 리듀서의 키 값으로 액션함수가 자동으로 생성
        changeSunriseForecastValue(state, action) {
            state.sunriseErr = action.payload.err;
            state.sunriseStatus = action.payload.status;
            state.sunriseData = action.payload.data;
        },
    }
});

export const { changeSunriseForecastValue } = sunriseForecastSlice.actions;

export default sunriseForecastSlice.reducer;