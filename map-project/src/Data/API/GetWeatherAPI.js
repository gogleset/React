import axios from "axios";

export default {
    // 실황데이터를 가져옵니다.
    getLiveSitualtion: async (nx, ny) => {
        try {
            const data = await axios.get('/api/weather/liveSituation', {
                params: {
                    nx: nx, ny: ny
                }
            });
        } catch (err) {
            console.log(err);
        }
    },
    getLiveForecast: async (nx, ny) => {
        try {
            const data = await axios.get('/api/weather/liveForecast', {
                params: {
                    nx: nx, ny: ny
                }
            });
            console.log("try");
            return { data: data };
        } catch (err) {
            return err;
        }
    },
}