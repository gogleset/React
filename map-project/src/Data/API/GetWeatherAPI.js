import axios from "axios";

export default {
    // 실황데이터를 가져옵니다.
    getLiveSitualtion: async (nx, ny) => {
        console.log(`nx::: ${nx} ny:::  ${ny} `);
        try {
            const data = await axios.get('/api/weather/liveSituation', {
                params: {
                    nx: nx, ny: ny
                }
            });
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    },
    getLiveForecast: async (nx, ny) => {
        console.log(`nx::: ${nx} ny:::  ${ny} `);
        try {
            const data = await axios.get('/api/weather/liveForecast', {
                params: {
                    nx: nx, ny: ny
                }
            });
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    },
}