import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

// data, apis
import { changeLocationValue, changeLocalValue } from "./data/Store/Slice/geoLocationSlice.js";
import { changeLiveForecastValue } from "./data/Store/Slice/liveForecastSlice.js"
import { changeTodayForecastValue } from "./data/Store/Slice/todayForecastSlice";
import { changeWeeklyLandForecastValue, changeWeeklyTemperatureForecastValue } from "./data/Store/Slice/weeklyForecastSlice";

import { changeSunriseForecastValue } from "./data/Store/Slice/sunriseForecastSlice.js"
import {
  changeradarForecastValue
} from "./data/Store/Slice/radarForecastSlice.js";
import { changeDustForecastValue } from './data/Store/Slice/dustForecast.js';
import { changeBreakForecastValue, changeFastForecastValue } from './data/Store/Slice/breakFastForecastSlice.js';
import { changeUvForecastValue } from './data/Store/Slice/liveWeatherForecastSlice.js';
import { changeVideoValue } from './data/Store/Slice/videoSlice.js';
import { getCurrentLocation, dfs_xy_conv } from './helper/GeolocationHelper.js';
import { getWeatherApi } from "./data/API/GetWeatherAPI";
import { getKaKaoApi } from "./data/API/GetKakaoApi";

// styles
import "./styles/App.scss";
import "./styles/home.module.scss";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  // store states
  const { err, latitude, longitude, local } = useSelector((state) => state.geoLocation);
  const dispatch = useDispatch();

  function dispatchWeatherNxApiData(nx, ny, latitude, longitude) {
    if (nx === null || ny === null || latitude === null || longitude === null) {
      // console.log(`nx ::: ${nx} ny ::: ${ny} latitude ::: ${latitude} longitude ::: ${longitude}`)
      return alert("파라미터를 확인해주세요")
    }
    getWeatherApi.getTodayForecast(nx, ny).then(res => {
      dispatch(changeTodayForecastValue({ data: res.data.data.response.body.items.item, status: res.data.status, err: res.data.statusText }));
    }).catch((rej) => {
      dispatch(changeTodayForecastValue({ data: null, status: 400, err: "NO" }));
    });
    // 초단기예보
    getWeatherApi.getLiveForecast(nx, ny).then((res) => {
      // console.log(res)
      dispatch(changeLiveForecastValue({ data: res.data.data.response.body.items.item, status: res.data.status, err: res.data.statusText }));
    }).catch((rej) => {
      dispatch(changeLiveForecastValue({ data: null, status: 400, err: "NO" }));
    });
    // 주소값 구하기
    getKaKaoApi.getAddress(latitude, longitude).then((res) => {
      // console.log(res);
      dispatch(changeLocalValue({ err: res.statusText, data: res.data, status: res.status }))
    }).catch((rej) => {
      dispatch(changeLocalValue({ err: rej.statusText, data: null, status: rej.status }))
      alert("주소값을 가져오지 못했습니다.")
    });
    // 오늘 날씨 비디오 가져오기 changeVideoValue
    getKaKaoApi.getVideo(latitude, longitude).then(res => {
      // console.log(res.data.data.documents)
      dispatch(changeVideoValue({ data: res.data.data.documents, status: res.data.status, err: res.data.statusText }))
    })
    // .then(res => dispatch(changeVideoValue(res)))
    // .catch(rej => alert("주소값을 가져오지 못했습니다."));
    // 일출, 일몰
    getWeatherApi.getSunriseForecast(latitude, longitude).then((res) => {
      // console.log(res);
      dispatch(changeSunriseForecastValue({ data: res.data.data.response.body.items.item, status: res.data.status, err: res.data.statusText }));
    }).catch((rej) => {
      dispatch(changeSunriseForecastValue({ data: null, status: 400, err: "NO" }));
    });
    // 레이더
    getWeatherApi.getRadarForecast().then((res) => {
      // console.log(res);
      dispatch(changeradarForecastValue({ data: res.data.data.response.body.items.item[0]["rdr-img-file"], status: res.data.status, err: res.data.statusText }));
    }).catch((rej) => {
      dispatch(changeradarForecastValue({ data: null, status: 400, err: "NO" }));
    });
  }

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
      dispatchWeatherNxApiData(nx, ny, latitude, longitude);
    } else if (err === -1) {
      dispatchWeatherNxApiData(60, 127, 37.565717, 126.977794);
    }
  }, [err]);

  useEffect(() => {
    if (local) {
      // 주간 날씨 데이터 dispatch
      getWeatherApi.getWeeklyLandForecast(local.address_name).then((res) => {
        dispatch(changeWeeklyLandForecastValue({ data: res.data.data.response.body.items.item, status: res.data.status, err: res.data.statusText }));
      }).catch((rej) => {
        dispatch(changeLiveForecastValue({ data: null, status: 400, err: "NO" }));
      });
      // 주간 날씨 데이터 dispatch
      getWeatherApi.getWeeklyTemperatureForecast(local.address_name).then((res) => {
        dispatch(changeWeeklyTemperatureForecastValue({ data: res.data.data.response.body.items.item, status: res.data.status, err: res.data.statusText }));
      }).catch((rej) => {
        dispatch(changeWeeklyTemperatureForecastValue({ data: null, status: 400, err: "NO" }));
      });
      // 미세먼지
      // changeDustForecastValue
      getWeatherApi.getSidoDustForecast(local.region_1depth_name).then((res) => {
        // console.log(res)
        dispatch(changeDustForecastValue({ data: res.data.data.response.body.items, status: res.data.status, err: res.data.statusText }));
      }).catch((rej) => {
        dispatch(changeDustForecastValue({ data: null, status: 400, err: "NO" }));
      });

      // 특보
      getWeatherApi.getBreakForecast(local.region_1depth_name).then((res) => {
        dispatch(changeBreakForecastValue({ data: res.data.data.response.body.items.item, status: res.data.status, err: res.data.statusText }));
      }).catch((rej) => {
        dispatch(changeBreakForecastValue({ data: null, status: 400, err: "NO" }));
      });
      // 속보
      getWeatherApi.getFastForecast(local.region_1depth_name).then((res) => {
        // console.log(res);
        dispatch(changeFastForecastValue({ data: res.data.data.response.body.items.item, status: res.data.status, err: res.data.statusText }));
      }).catch((rej) => {
        dispatch(changeFastForecastValue({ data: null, status: 400, err: "NO" }));
      });
      //자외선지수
      getWeatherApi.getLiveWeatherForecast(local.region_1depth_name, local.region_2depth_name, local.region_3depth_name).then((res) => {
        dispatch(changeUvForecastValue({ data: res.data.data.response.body.items.item, status: res.data.status, err: res.data.statusText }));
      }).catch((rej) => {
        dispatch(changeUvForecastValue({ data: null, status: 400, err: "NO" }));
      });
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
