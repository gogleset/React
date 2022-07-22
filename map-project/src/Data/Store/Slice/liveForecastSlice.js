import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null,
    status: null,
    err: null,
};

const liveForcastSlice = createSlice({
    name: 'liveForcast', //해당 모듈의 이름을 작성
    initialState, //해당 모듈의 초기값 세팅
    reducers: { // 해당 리듀서의 키 값으로 액션함수가 자동으로 생성
        changeForecastValue(state, action) {
            state.data = action.payload.data;
            state.status = action.payload.status;
            state.err = action.payload.err;
        },
    }
});

export const { changeForecastValue } = liveForcastSlice.actions;

export default liveForcastSlice.reducer;