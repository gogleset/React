import axios from "axios";
import config from "../../config.js";
import DayHelper from "../../Helper/DayHelper.js";
const Day = new DayHelper();
const today = Day.getDay(); //현재 날짜
const hour = Day.getHour(); //현재 시간
const minute = Day.getMinute(); //현재 

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    // 실황데이터를 가져옵니다.
    getLiveSitualtion: async (nx, ny) => {
        try {
            const data = await axios.get('/api/weather/liveSituation', {
                params: {
                    nx: nx, ny: ny
                }
            });
            return {data: data}
        } catch (err) {
            console.log(err);
        }
    },
    getLiveForecast: async (nx, ny) => {
        let forecastMinutes = minute;
        if (Number(forecastMinutes) < 30) {
            forecastMinutes = "00";
        } else if (Number(forecastMinutes) > 60 && Number(forecastMinutes) > 30) {
            forecastMinutes = "30";
        }
        try {
            console.log('/api' + `${config.weatherUrls}${config.liveForcast}ServiceKey=${config.keys.weatherEncodingKey}&pageNo=1&numOfRows=60&dataType=JSON&base_date=${today}&base_time=${hour}${forecastMinutes}&nx=${nx}&ny=${ny}`)
            const data = await axios.get('/api' + `${config.weatherUrls}${config.liveForcast}ServiceKey=${config.keys.weatherEncodingKey}&pageNo=1&numOfRows=60&dataType=JSON&base_date=${today}&base_time=${hour}${forecastMinutes}&nx=${nx}&ny=${ny}`);
            console.log("try");
            return { data: data };
        } catch (err) {
            return err;
        }
    },
}