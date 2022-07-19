import express from 'express';
import axios from "axios";
import config from "./config.js";
import Day from "./src/Helper/DayHelper.js";
const app = express();
const today = Day.getDay(); //현재 날짜
const hour = Day.getHour(); //현재 시간
let minute = Day.getMinute(); //현재 

// 초단기 예보 데이터들 모음입니다.
app.get('/api/weather/:id', async (req, res) => {
    const id = req.params.id;
    const { nx, ny } = req.query;
    console.log(id)
    console.log(nx, ny);

    switch (id) {
        case 'liveSituation':
            try {
                const { data } = await axios.get(`${config.weatherUrl}${config.liveSituation}ServiceKey=${config.keys.weatherEncodingKey}&pageNo=1&numOfRows=8&dataType=JSON&base_date=${today}&base_time=${hour}00&nx=${nx}&ny=${ny}`)
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
            break;
        case 'liveForecast':
            if (Number(minute) < 30) {
                minute = "00";
            } else if (Number(minute) > 60 && Number(minute) > 30) {
                minute = "30";
            }
            try {
                const { data } = await axios.get(`${config.weatherUrl}${config.liveForcast}ServiceKey=${config.keys.weatherEncodingKey}&pageNo=1&numOfRows=10&dataType=JSON&base_date=${today}&base_time=${hour}${minute}&nx=${nx}&ny=${ny}`)
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
            break;

    }

})

app.listen(config.server.port, () => {
    console.log(`express start ::: listening at http://localhost:${config.server.port}`);
})
