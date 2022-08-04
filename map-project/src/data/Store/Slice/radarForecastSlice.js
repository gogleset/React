import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // 일몰, 일출 데이터
    radarData: null,
    radarErr: null,
    radarStatus: null,
};

const radarForecastSlice = createSlice({
    name: 'radarForecast', //해당 모듈의 이름을 작성
    initialState, //해당 모듈의 초기값 세팅
    reducers: { // 해당 리듀서의 키 값으로 액션함수가 자동으로 생성
        changeradarForecastValue(state, action) {
            state.radarErr = action.payload.err;
            state.radarStatus = action.payload.status;
            if (action.payload.data) {
                // 배열형식으로 가공
                state.radarData = action.payload.data.slice(1, action.payload.data.lastIndexOf("]")).split(", ");
            }
        },
    }
});

export const { changeradarForecastValue } = radarForecastSlice.actions;

export default radarForecastSlice.reducer;