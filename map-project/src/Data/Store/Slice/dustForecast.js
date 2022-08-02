import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // 데이터
    dustErr: null,
    dustData: null,
    dustStatus: null,
    // 미세먼지
    dust: null,
    littleDust: null,
};

const dustSlice = createSlice({
    name: 'dustForecast', //해당 모듈의 이름을 작성
    initialState, //해당 모듈의 초기값 세팅
    reducers: { // 해당 리듀서의 키 값으로 액션함수가 자동으로 생성
        changeDustForecastValue(state, action) {
            state.dustErr = action.payload.err;
            state.dustData = action.payload.data;
            state.dustStatus = action.payload.status;
            if (action.payload.data) {
                console.log("!!")
            }
        }
    }
});

export const { changeDustForecastValue } = dustSlice.actions;

export default dustSlice.reducer;