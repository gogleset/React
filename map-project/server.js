import express from 'express';
import axios from "axios";
import config from "./config.js";
import Day from "./src/Helper/DayHelper.js";
const app = express();
const now = Day.getday();

// 초단기 실황 예보입니다.
app.get('/api/weather/liveSituation', async (req, res) => {
    try {
        const { data } = await axios.get(`${config.weatherUrl}${config.liveSituation}ServiceKey=${config.keys.weatherEncodingKey}&pageNo=1&numOfRows=8&dataType=JSON&base_date=${now}&base_time=0600&nx=55&ny=127`)
        return res.send({
            status: 200,
            data: data,
            err: 0,
        })
    } catch (err) {
        return res.send({
            status: 400,
            data: err,
            err: -1,
        })
    }
})

app.listen(config.server.port, () => {
    console.log(`express start ::: listening at http://localhost:${config.server.port}`);
})
