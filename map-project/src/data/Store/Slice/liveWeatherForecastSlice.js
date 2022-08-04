import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // 데이터
    uvErr: null,
    uvData: null,
    uvStatus: null,
};

const liveWeatherForecastSlice = createSlice({
    name: 'liveWeatherForecast', //해당 모듈의 이름을 작성
    initialState, //해당 모듈의 초기값 세팅
    reducers: { // 해당 리듀서의 키 값으로 액션함수가 자동으로 생성
        changeUvForecastValue(state, action) {
            state.uvErr = action.payload.err;
            state.uvData = action.payload.data;
            state.uvStatus = action.payload.status;
        },
        // changeUvForecastValue(state, action) {

        // }//체감온도
    }
});

export const { changeUvForecastValue } = liveWeatherForecastSlice.actions;

export default liveWeatherForecastSlice.reducer;