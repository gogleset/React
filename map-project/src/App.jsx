import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from "react-router-dom";

import { changeValue } from "./Data/Store/Reducer/geoLocationSlice.js";
import { getCurrentLocation } from './Helper/getGeoLocation.js';

import "./styles/App.scss";
import "./styles/home.module.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FootNav from "./components/FootNav";

function App() {
  const { err, time, latitude, longitude } = useSelector((state) => state.geoLocation);
  // console.log(err, time, latitude, longitude);
  const dispatch = useDispatch();
  useEffect(() => {
    // 위치정보를 가져오면 상태관리에 dispatch합니다.
    getCurrentLocation().then(res => dispatch(changeValue(res))).catch(rej => dispatch(changeValue(rej)));
  }, [])

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
