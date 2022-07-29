import axios from "axios";
import config from "../../config.js";
import DayHelper from "../../Helper/DayHelper.js";
import dayjs from "dayjs";
import { getWeeklyLandCode, getWeeklyTemperatureForecastCode } from "../../Helper/GeolocationHelper.js";
const Day = new DayHelper();
const today = Day.getDay(); //현재 날짜
const serverHour = Day.getServerHour(); //현재 시간
const hour = Day.get24Hour();
const minute = Day.getMinute(); //현재 

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    // 오늘데이터를 가져옵니다.
    getTodayForcast: async (nx, ny) => {
        try {
            const data = await axios.get('/api' + `${config.weatherUrls}${config.todayForecast}ServiceKey=${config.keys.encodingKey}&pageNo=1&numOfRows=865&dataType=JSON&base_date=${Number(hour) < 3 ? dayjs(today).subtract(1, "day").format("YYYYMMDD") : today}&base_time=${Number(hour) < 3 ? "2300" : "0200"}&nx=${nx}&ny=${ny}`);
            // console.log(data);
            return { data: data };
        } catch (err) {
            throw new Error(err);
        }
    },
    // 오늘 초단기예보를 가져옵니다.
    getLiveForecast: async (nx, ny) => {
        let forecastMinutes = Number(minute);
        if (forecastMinutes < 30) {
            forecastMinutes = "00";
        } else {
            forecastMinutes = "30";
        }
        // console.log(forecastMinutes);
        try {
            const data = await axios.get('/api' + `${config.weatherUrls}${config.liveForecast}ServiceKey=${config.keys.encodingKey}&pageNo=1&numOfRows=60&dataType=JSON&base_date=${(Number(hour)) === 24 ? dayjs(today).subtract(1, "day").format("YYYYMMDD") : today}&base_time=${serverHour}${forecastMinutes}&nx=${nx}&ny=${ny}`);
            // console.log("try");
            // console.log(data);
            return { data: data };
        } catch (err) {
            throw new Error(err);
        }
    },
    // 중기 육상(강수확률, 날씨)
    getWeeklyLandForecast: async (local) => {
        // console.log(local);
        const weeklyLandCode = getWeeklyLandCode(local)
        //local은 지역명이 들어있어야한다.
        try {
            console.log('/api' + `${config.weeklyLandUrl}${config.weeklyLandForecast}serviceKey=${config.keys.encodingKey}&pageNo=1&numOfRows=10&dataType=JSON&regId=${weeklyLandCode}&tmFc=${Number(hour) < 8 ? dayjs(today).subtract(1, "day").format("YYYYMMDD") : today}0600`);
            const data = await axios.get('/api' + `${config.weeklyLandUrl}${config.weeklyLandForecast}serviceKey=${config.keys.encodingKey}&pageNo=1&numOfRows=10&dataType=JSON&regId=${weeklyLandCode}&tmFc=${Number(hour) < 8 ? dayjs(today).subtract(1, "day").format("YYYYMMDD") : today}0600`);
            return { data: data };
        } catch (err) {
            throw new Error(err);
        }
    },

    getWeeklyTemperatureForecast: async (local) => {
        console.log(local);
        // 지역code 가져오기
        const weeklyTemperatureCode = getWeeklyTemperatureForecastCode(local)
        //local은 지역명이 들어있어야한다.
        try {
            // console.log('/api' + `${config.weeklyTemperatureUrl}${config.weeklyTemperatureForecast}serviceKey=${config.keys.encodingKey}&pageNo=1&numOfRows=10&dataType=JSON&regId=${weeklyTemperatureCode}&tmFc=${Number(hour) < 8 ? dayjs(today).subtract(1, "day").format("YYYYMMDD") : today}0600`);
            const data = await axios.get('/api' + `${config.weeklyTemperatureUrl}${config.weeklyTemperatureForecast}serviceKey=${config.keys.encodingKey}&pageNo=1&numOfRows=10&dataType=JSON&regId=${weeklyTemperatureCode}&tmFc=${Number(hour) < 8 ? dayjs(today).subtract(1, "day").format("YYYYMMDD") : today}0600`);
            // console.log(data);
            return { data: data };
        } catch (err) {
            throw new Error(err);
        }
    },
    // 일출, 일몰정보
    getSunriseForecast: async (nx, ny) => {
        console.log(`getSunriseForecast :::  ${nx} ,${ny}`)
        try {
            const data = await axios.get('/api' + `${config.sunriseUrl}longitude=${ny}&latitude=${nx}&locdate=${today}&dnYn=y&ServiceKey=${config.keys.encodingKey}`);
            return { data: data };
        } catch (err) {
            throw new Error(err);
        }
    },
    getRadarForecast: async () => {
        try {
            const data = await axios.get('/api' + `${config.radarUrl}serviceKey=${config.keys.encodingKey}&numOfRows=10&pageNo=1&dataType=JSON&data=CMP_WRC&time=${today}`);
            return { data: data };
        } catch (err) {
            throw new Error(err);
        }
    },

    // 현재위치 기반 동네 주소 가져오기
    getAddress: async (latitude, longitude) => {
        // console.log(latitude, longitude);
        try {
            const result = await axios.get(`https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${longitude}&y=${latitude}&input_coord=WGS84`, {
                headers: { 'Authorization': `KakaoAK ${config.keys.kakaoRestKey}` }
            });

            return {
                status: result.status,
                statusText: result.statusText,
                data: result.data.documents[0].address,
            }
        } catch (err) {
            return err;
        }
    }

    // getNews: async () => {
    //     try{
    //         const data = await axios.get('/api' + `${config.breakingNewsUrls}${config.warningNews}`)
    //     }catch{

    //     }
    // }
}