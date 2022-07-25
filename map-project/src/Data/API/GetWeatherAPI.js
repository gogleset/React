import axios from "axios";
import config from "../../config.js";
import DayHelper from "../../Helper/DayHelper.js";
import dayjs from "dayjs"
const Day = new DayHelper();
const today = Day.getDay(); //현재 날짜
const serverHour = Day.getServerHour(); //현재 시간
const minute = Day.getMinute(); //현재 
const todayForecastTime = Day.getTodayForecastTime();
console.log((Number(serverHour) + 1) === 24 || 1 ? dayjs(today).subtract(1, "day").format("YYYYMMDD") : today)

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    
    // 오늘데이터를 가져옵니다.
    getTodayForcast: async (nx, ny) => {
        try {
            const data = await axios.get('/api' + `${config.weatherUrls}${config.TodayForcast}ServiceKey=${config.keys.weatherEncodingKey}&pageNo=1&numOfRows=144&dataType=JSON&base_date=${(Number(serverHour) + 1) === 24 || 1 ? dayjs(today).subtract(1, "day").format("YYYYMMDD") : today}&base_time=${todayForecastTime}&nx=${nx}&ny=${ny}`);
            console.log(data);
            return { data: data };
        } catch (err) {
            throw new Error(err);
        }
    },
    // 오늘 초단기예보를 가져옵니다.
    getLiveForecast: async (nx, ny) => {
        let forecastMinutes = minute;
        if (Number(forecastMinutes) < 30) {
            forecastMinutes = "00";
        } else if (Number(forecastMinutes) > 60 && Number(forecastMinutes) > 30) {
            forecastMinutes = "30";
        }
        try {
            const data = await axios.get('/api' + `${config.weatherUrls}${config.liveForcast}ServiceKey=${config.keys.weatherEncodingKey}&pageNo=1&numOfRows=60&dataType=JSON&base_date=${(Number(serverHour) + 1) === 24 ? dayjs(today).subtract(1, "day").format("YYYYMMDD") : today}&base_time=${serverHour}${forecastMinutes}&nx=${nx}&ny=${ny}`);
            console.log("try");
            console.log(data);
            return { data: data };
        } catch (err) {
            throw new Error(err);
        }
    },
    // getNews: async () => {
    //     try{
    //         const data = await axios.get('/api' + `${config.breakingNewsUrls}${config.warningNews}`)
    //     }catch{

    //     }
    // }
}