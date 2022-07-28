import dayjs from 'dayjs';
import "dayjs/locale/ko.js";
dayjs.locale("ko")
const today = new Date();

export default class date {
    getDay() {
        let now = dayjs();
        now.format("YYYYMMDD");
        let year = now.get("y");
        let month = parseInt(now.get("M")) + 1
        let day = parseInt(now.get("D"));

        // 한자리수 월이면 0붙이기
        if (String(month).length === 1) {
            month = "0" + month;
        }
        // 한자리수 일이면 0붙이기
        if (String(day).length === 1) {
            day = "0" + day;
        }
        return `${year}${month}${day}`;
    };
    // 요일데이터 출력
    getYoil(num = 0) {
        const adddays = dayjs(today).add(num, "day")
        let day = dayjs(adddays).get('day');
        console.log(day);
        switch (day) {
            case 0:
                day = "일"
                break;
            case 1:
                day = "월"
                break;
            case 2:
                day = "화"
                break;
            case 3:
                day = "수"
                break;
            case 4:
                day = "목"
                break;
            case 5:
                day = "금"
                break;
            case 6:
                day = "토"
                break;
            default:
                day = "날짜 데이터 조회 실패"
                break;
        }
        return day;
    };
    //서버로 요청하는 시간
    getServerHour() {
        let now = dayjs();
        now.format();
        let hour = String(now.$H - 1);
        if (hour.length === 1) {
            hour = "0" + hour;
        }
        if (hour === "-1") {
            hour = 23;
        }
        return `${hour}`
    };
    getMinute() {
        let now = dayjs();
        now.format();
        return `${now.$m}`;
    };
    //24시간형식
    get24Hour() {
        const hour = ('0' + today.getHours()).slice(-2);
        return hour;
    };
    // 00형식
    getMin() {
        const min = ('0' + today.getMinutes()).slice(-2);
        return min;
    };
    getTodayForecastTime() {
        const hour = today.getHours();
        let minute = today.getMinutes();
        if (minute < 10) {
            minute = `0${minute}`;
        }
        const time = parseInt(`${hour}${minute}`)
        console.log(time);
        return (time > 2330) ? "2300" :
            (time > 2030) ? "2000" :
                (time > 1730) ? "1700" :
                    (time > 1430) ? "1400" :
                        (time > 1130) ? "1100" :
                            (time > 830) ? "0800" :
                                (time > 530) ? "0500" :
                                    (time > 230) ? "0200" : "2300"
    };
    // 밤 낮 구분
    getEvent(hour) {
        let numHour = parseInt(hour);
        if (numHour > 19) {
            return "night"
        } else if (numHour >= 7) {
            return "morning"
        } else {
            return "night"
        }
    }
}