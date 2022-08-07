import axios from "axios";
import config from "../../config.js";
import DayHelper from "../../helper/DayHelper.js";
import dayjs from "dayjs";
import { getWeeklyLandCode, getWeeklyTemperatureForecastCode, getBreakFastForecastCode, getLifeWeatherCode } from "../../helper/GeolocationHelper.js";
const Day = new DayHelper();
const today = Day.getDay(); //현재 날짜
const serverHour = Day.getServerHour(); //현재 시간
const hour = Day.get24Hour();
const minute = Day.getMinute(); //현재 

// eslint-disable-next-line import/no-anonymous-default-export
export const getWeatherApi = {
    // 오늘데이터를 가져옵니다.
    getTodayForecast: async (nx, ny) => {
        const time = Day.getTodayForecastTime();
        // console.log('/api' + `${config.weatherUrls}${config.todayForecast}ServiceKey=${config.keys.encodingKey}&pageNo=1&numOfRows=865&dataType=JSON&base_date=${Number(hour) < 3 ? dayjs(today).subtract(1, "day").format("YYYYMMDD") : today}&base_time=${Number(hour) < 3 ? "2300" : "0200"}&nx=${nx}&ny=${ny}`)
        try {
            const data = await axios.get('/api' + `${config.weatherUrls}${config.todayForecast}ServiceKey=${config.keys.encodingKey}&pageNo=1&numOfRows=865&dataType=JSON&base_date=${Number(hour) < 4 ? dayjs(today).subtract(1, "day").format("YYYYMMDD") : today}&base_time=${time}&nx=${nx}&ny=${ny}`);
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
        try {
            // console.log(`/api${config.weatherUrls}${config.liveForecast}ServiceKey=${config.keys.encodingKey}&pageNo=1&numOfRows=60&dataType=JSON&base_date=${(Number(hour)) === 24 ? dayjs(today).subtract(1, "day").format("YYYYMMDD") : today}&base_time=${(Number(hour)) === 24 ? "23" : serverHour}${forecastMinutes}&nx=${nx}&ny=${ny}`);
            const data = await axios.get(`/api${config.weatherUrls}${config.liveForecast}ServiceKey=${config.keys.encodingKey}&pageNo=1&numOfRows=60&dataType=JSON&base_date=${(Number(hour)) === 24 ? dayjs(today).subtract(1, "day").format("YYYYMMDD") : today}&base_time=${(Number(hour)) === 24 ? "23" : serverHour}${forecastMinutes}&nx=${nx}&ny=${ny}`);
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
            // console.log('/api' + `${config.weeklyLandUrl}${config.weeklyLandForecast}serviceKey=${config.keys.encodingKey}&pageNo=1&numOfRows=10&dataType=JSON&regId=${weeklyLandCode}&tmFc=${Number(hour) < 8 ? dayjs(today).subtract(1, "day").format("YYYYMMDD") : today}0600`);
            const data = await axios.get(`/api${config.weeklyLandUrl}${config.weeklyLandForecast}serviceKey=${config.keys.encodingKey}&pageNo=1&numOfRows=10&dataType=JSON&regId=${weeklyLandCode}&tmFc=${Number(hour) < 8 ? dayjs(today).subtract(1, "day").format("YYYYMMDD") : today}0600`);
            return { data: data };
        } catch (err) {
            throw new Error(err);
        }
    },
    // 주간 날씨예보 기온
    getWeeklyTemperatureForecast: async (local) => {
        // console.log(local);
        // 지역code 가져오기
        const weeklyTemperatureCode = getWeeklyTemperatureForecastCode(local)
        // console.log(weeklyTemperatureCode)
        //local은 지역명이 들어있어야한다.
        try {
            // console.log('/api' + `${config.weeklyTemperatureUrl}${config.weeklyTemperatureForecast}serviceKey=${config.keys.encodingKey}&pageNo=1&numOfRows=10&dataType=JSON&regId=${weeklyTemperatureCode}&tmFc=${Number(hour) < 8 ? dayjs(today).subtract(1, "day").format("YYYYMMDD") : today}0600`);
            const data = await axios.get(`/api${config.weeklyTemperatureUrl}${config.weeklyTemperatureForecast}serviceKey=${config.keys.encodingKey}&pageNo=1&numOfRows=10&dataType=JSON&regId=${weeklyTemperatureCode}&tmFc=${Number(hour) < 8 ? dayjs(today).subtract(1, "day").format("YYYYMMDD") : today}0600`);
            // console.log(data);
            return { data: data };
        } catch (err) {
            throw new Error(err);
        }
    },
    // 일출, 일몰정보
    getSunriseForecast: async (nx, ny) => {
        // console.log(`getSunriseForecast :::  ${nx} ,${ny}`)
        try {
            const data = await axios.get(`/api${config.sunriseUrl}longitude=${ny}&latitude=${nx}&locdate=${today}&dnYn=y&ServiceKey=${config.keys.encodingKey}`);
            return { data: data };
        } catch (err) {
            throw new Error(err);
        }
    },
    // 레이더 정보
    getRadarForecast: async () => {
        try {
            const data = await axios.get(`/api${config.radarUrl}serviceKey=${config.keys.encodingKey}&numOfRows=10&pageNo=1&dataType=JSON&data=CMP_WRC&time=${today}`);
            return { data: data };
        } catch (err) {
            throw new Error(err);
        }
    },
    // 시도별 미세먼지 데이터 정보
    getSidoDustForecast: async (local) => {
        let locals = local.trim();
        if (locals === "제주특별자치도") {
            locals = "제주"
        } else if (locals === "세종특별자치시") {
            locals = "세종"
        }
        try {
            // console.log(`${config.dustUrl}${config.sidoDustForecast}sidoName=${locals}&pageNo=1&numOfRows=100&returnType=xml&serviceKey=${config.keys.encodingKey}&ver=1.3`)
            const data = await axios.get('/api' + `${config.dustUrl}${config.sidoDustForecast}sidoName=${locals}&pageNo=1&numOfRows=100&returnType=json&serviceKey=${config.keys.encodingKey}&ver=1.3`)
            // console.log(data)
            return { data: data };
        } catch (err) {
            throw new Error(err);
        }
    },
    // 특보 데이터 정보
    getBreakForecast: async (local) => {
        const brackCode = getBreakFastForecastCode(local)
        try {
            const data = await axios.get(`/api${config.breakingNewsUrl}${config.breakingNewsForecast}serviceKey=${config.keys.encodingKey}&dataType=JSON&numOfRows=10&pageNo=1&fromTmFc=${dayjs(today).subtract(1, "day").format("YYYYMMDD")}&toTmFc=${today}&stnId=${brackCode}`)
            return { data: data };
        } catch (err) {
            throw new Error(err);
        }
    },
    //속보 데이터 정보
    getFastForecast: async (local) => {
        const fastCode = getBreakFastForecastCode(local)
        try {
            const data = await axios.get(`/api${config.breakingNewsUrl}${config.fastNewsForecast}serviceKey=${config.keys.encodingKey}&dataType=JSON&numOfRows=10&pageNo=1&stnId=${fastCode}&fromTmFc=${today}&toTmFc=${today}`)
            return { data: data };
        } catch (err) {
            throw new Error(err);
        }
    },
    // http://apis.data.go.kr/1360000/WthrWrnInfoService/getWthrBrkNews?serviceKey=인증키&numOfRows=10&pageNo=1&stnId=108&fromTmFc=20170607&toTmFc=20170607


    // 생활 자외선 지수 정보
    getLiveWeatherForecast: async (addres) => {
        let { code } = getLifeWeatherCode(addres);
        if (code === null || code === undefined) {
            code = 1100000000;
        }
        try {
            // http://apis.data.go.kr/1360000/LivingWthrIdxServiceV2/getUVIdxV2?serviceKey=인증키&areaNo=1100000000&time=2021070618
            const data = await axios.get('/api' + `${config.liveWeatherUrl}${config.uvForecast}serviceKey=${config.keys.encodingKey}&dataType=JSON&areaNo=${code}&time=${dayjs(today).subtract(1, "day").format("YYYYMMDD")}06`)
            // console.log(data);
            return { data: data };
        } catch (err) {
            throw new Error(err);
        }
    }
}