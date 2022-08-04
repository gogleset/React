import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    videoErr: null,
    videoData: null,
    videoStatus: null,
};

const videoSlice = createSlice({
    name: 'video', //해당 모듈의 이름을 작성
    initialState, //해당 모듈의 초기값 세팅
    reducers: { // 해당 리듀서의 키 값으로 액션함수가 자동으로 생성
        changeVideoValue(state, action) {
            state.videoErr = action.payload.err;
            state.videoData = action.payload.data;
            state.videoStatus = action.payload.status;
        },
    }
});

export const { changeVideoValue } = videoSlice.actions;

export default videoSlice.reducer;