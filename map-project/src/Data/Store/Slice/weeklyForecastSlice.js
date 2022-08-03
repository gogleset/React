import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // 중기 육상 (강수확률, 날씨예보)
    weeklyLandForecastErr: null,
    weeklyLandForecastStatus: null,
    weeklyLandData: null,

    // 중기 기온(최고, 최저기온)
    weeklyTemperatureForecastErr: null,
    weeklyTemperatureData: null,
    weeklyTemperatureForecastStatus: null
};

const weeklyLandForecastSlice = createSlice({
    name: 'weeklyLandForecast', //해당 모듈의 이름을 작성
    initialState, //해당 모듈의 초기값 세팅
    reducers: { // 해당 리듀서의 키 값으로 액션함수가 자동으로 생성
        changeWeeklyLandForecastValue(state, action) {
            state.LandForecastErr = action.payload.err;
            state.LandForecastStatus = action.payload.status;
            state.weeklyLandData = action.payload.data;
        },
        changeWeeklyTemperatureForecastValue(state, action) {
            state.weeklyTemperatureForecastErr = action.payload.err;
            state.weeklyTemperatureForecastStatus = action.payload.status;
            state.weeklyTemperatureData = action.payload.data;
        }
    }
});

export const { changeWeeklyLandForecastValue, changeWeeklyTemperatureForecastValue } = weeklyLandForecastSlice.actions;

export default weeklyLandForecastSlice.reducer;