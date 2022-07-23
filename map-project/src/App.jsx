import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from "react-router-dom";

// data, apis
import { changeLocationValue, changeLocalValue } from "./Data/Store/Slice/geoLocationSlice.js";
import { changeForecastValue } from "./Data/Store/Slice/liveForecastSlice.js"
import { getCurrentLocation, getAddress } from './Helper/GeolocationHelper.js';
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
      let nx = parseInt(latitude);
      let ny = parseInt(longitude);
      // GetWeatherAPI.getLiveSitualtion(nx, ny);
      GetWeatherAPI.getLiveForecast(nx, ny).then((res) => {
        dispatch(changeForecastValue({ data: res.data.data.data.response.body.items.item, status: res.data.status, err: res.data.statusText }));
      }).catch((rej) => {
        console.log(rej)
        dispatch(changeForecastValue({ data: null, status: 400, err: "NO" }));
      });
      // 주소값 구하기
      getAddress(latitude, longitude)
        .then(res => dispatch(changeLocalValue(res)))
        .catch(rej => alert("주소값을 가져오지 못했습니다."));
    }
    console.log(local)
  }, [err])

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
