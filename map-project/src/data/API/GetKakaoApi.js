import axios from "axios";
import config from "../../config";

export const getKaKaoApi = {

    getVideo: async () => {
        // console.log(latitude, longitude);
        try {
            const result = await axios.get(`https://dapi.kakao.com/v2/search/vclip?sort=recency&size=5&query=오늘비와?날씨`, {
                headers: { 'Authorization': `KakaoAK ${config.keys.kakaoRestKey}` }
            });
            return { data: result }
        } catch (err) {
            throw new Error(err)
        }
    },


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
            throw new Error(err)
        }
    },



}