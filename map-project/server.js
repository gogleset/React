import express from 'express';
import axios from "axios";
import config from "./config.js";
import Day from "./src/Helper/DayHelper.js";
const app = express();
const today = Day.getDay();
const hour = Day.getHour();
const minute = Day.getMinute();

// 초단기 예보 데이터들 모음입니다.
app.get('/api/weather/:id', async (req, res) => {
    const id = req.params.id;
    const { nx, ny } = req.query;
    console.log(nx, ny);

    switch (id) {
        case 'liveSituation':
            try {
                const { data } = await axios.get(`${config.weatherUrl}${config.liveSituation}ServiceKey=${config.keys.weatherEncodingKey}&pageNo=1&numOfRows=8&dataType=JSON&base_date=${today}&base_time=0900&nx=${nx}&ny=${ny}`)
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
        case 'liveForcast':
            try {
                const { data } = await axios.get(`${config.weatherUrl}${config.liveForcast}ServiceKey=${config.keys.weatherEncodingKey}&pageNo=1&numOfRows=10&dataType=JSON&base_date=${today}&base_time=0600&nx=${nx}&ny=${ny}`)
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
