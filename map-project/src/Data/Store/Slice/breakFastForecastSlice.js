import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // 특보
    breakErr: null,
    breakData: null,
    breakStatus: null,
    // 속보
    fastErr: null,
    fastData: null,
    fastStatus: null,
};

const geoLocationSlice = createSlice({
    name: 'breakFastForecast', //해당 모듈의 이름을 작성
    initialState, //해당 모듈의 초기값 세팅
    reducers: { // 해당 리듀서의 키 값으로 액션함수가 자동으로 생성
        changeBreakForecastValue(state, action) {
            state.breakErr = action.payload.err;
            state.breakData = action.payload.data;
            state.breakStatus = action.payload.status;
        },
        changeFastForecastValue(state, action) {
            state.fastErr = action.payload.err;
            state.fastData = action.payload.data;
            state.fastStatus = action.payload.status;
        }
    }
});

export const { changeBreakForecastValue, changeFastForecastValue } = geoLocationSlice.actions;

export default geoLocationSlice.reducer;