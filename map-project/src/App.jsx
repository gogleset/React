import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from "react-router-dom";

// data, apis
import { changeLocationValue } from "./Data/Store/Slice/geoLocationSlice.js";
import { changeForecastValue } from "./Data/Store/Slice/liveForecastSlice.js"
import { getCurrentLocation } from './Helper/GeolocationHelper.js';
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
  // store datas
  const { err, time, latitude, longitude } = useSelector((state) => state.geoLocation);
  // console.log(err, time, latitude, longitude);
  const dispatch = useDispatch();

  useEffect(() => {
    // 위치정보를 가져오면 상태관리에 dispatch합니다.
    getCurrentLocation()
      .then(res => dispatch(changeLocationValue(res)))
      .catch(rej => dispatch(changeLocationValue(rej)));
  }, [])

  useEffect(() => {
    // if (err === 0) {
    //   let nx = parseInt(latitude);
    //   let ny = parseInt(longitude);
    //   // GetWeatherAPI.getLiveSitualtion(nx, ny);
    //   GetWeatherAPI.getLiveForecast(nx, ny).then((res) => {
    //     dispatch(changeForecastValue({ data: res.data.data.data.response.body.items.item, status: res.data.status, err: res.data.statusText }));
    //   }).catch((rej) => {
    //     console.log(rej)
    //     dispatch(changeForecastValue({ data: null, status: 400, err: "NO" }));
    //   });
    // }
  }, [err])

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <FootNav />
    </div>
  );
}

export default App;
