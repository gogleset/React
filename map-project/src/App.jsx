import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

// data, apis
import { changeLocationValue, changeLocalValue } from "./Data/Store/Slice/geoLocationSlice.js";
import { changeLiveForecastValue } from "./Data/Store/Slice/liveForecastSlice.js"
import { changeTodayForecastValue } from "./Data/Store/Slice/todayForecastSlice";
import { changeWeeklyLandForecastValue, changeWeeklyTemperatureForecastValue } from "./Data/Store/Slice/weeklyForcastSlice"
import { getCurrentLocation, dfs_xy_conv } from './Helper/GeolocationHelper.js';
import GetWeatherAPI from "./Data/API/GetWeatherAPI.js";

// styles
import "./styles/App.scss";
import "./styles/home.module.scss";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FootNav from "./components/FootNav";

function App() {
  // store states
  const { err, latitude, longitude, local } = useSelector((state) => state.geoLocation);
  const dispatch = useDispatch();

  useEffect(() => {
    // local값이 없다면 위치정보를 가져옵니다.
    if (local === null) {
      // 위치정보를 가져오면 상태관리에 dispatch합니다.
      getCurrentLocation()
        .then(res => dispatch(changeLocationValue(res)))
        .catch(rej => dispatch(changeLocationValue(rej)));
    }
    if (err === 0) {
      const { nx, ny } = dfs_xy_conv("toXY", latitude, longitude);
      // 오늘 기상
      GetWeatherAPI.getTodayForcast(nx, ny).then(res => {
        dispatch(changeTodayForecastValue({ data: res.data.data.response.body.items.item, status: res.data.status, err: res.data.statusText }));
      }).catch((rej) => {
        dispatch(changeTodayForecastValue({ data: null, status: 400, err: "NO" }));
      });
      // 초단기예보
      GetWeatherAPI.getLiveForecast(nx, ny).then((res) => {
        dispatch(changeLiveForecastValue({ data: res.data.data.response.body.items.item, status: res.data.status, err: res.data.statusText }));
      }).catch((rej) => {
        dispatch(changeLiveForecastValue({ data: null, status: 400, err: "NO" }));
      });
      // 주소값 구하기
      GetWeatherAPI.getAddress(latitude, longitude)
        .then(res => dispatch(changeLocalValue(res)))
        .catch(rej => alert("주소값을 가져오지 못했습니다."));
    }
  }, [err]);
  useEffect(() => {
    if (local) {
      GetWeatherAPI.getWeeklyLandForecast(local.address_name).then((res) => {
        dispatch(changeWeeklyLandForecastValue({ data: res.data.data.response.body.items.item, status: res.data.status, err: res.data.statusText }));
      }).catch((rej) => {
        dispatch(changeLiveForecastValue({ data: null, status: 400, err: "NO" }));
      });
      GetWeatherAPI.getWeeklyTemperatureForecast(local.address_name).then((res) => console.log(res))
    }

  }, [local])

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      {/* <FootNav /> */}
    </div>
  );
}

export default App;
