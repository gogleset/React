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
    }
    // 요일데이터 출력
    getYoil(){
        let now = dayjs().get('day');
        switch (now){
            case 0:
                now = "일"
                break;
            case 1:
                now = "월"
                break;
            case 2:
                now = "화"
                break;
            case 3:
                now = "수"
                break;
            case 4:
                now = "목"
                break;
                case 5:
                now = "금"
                break;
                case 6:
                now = "토"
                break;
            default: 
            now = "날짜 데이터 조회 실패"
                break;
        }
        return now;
    }
    //서버로 요청하는 시간
    getServerHour() {
        let now = dayjs();
        now.format();
        let hour = String(now.$H - 1);
        if (hour.length === 1) {
            hour = "0" + hour;
        }
        return `${hour}`
    }
    getMinute(){
        let now = dayjs();
        now.format();
        return `${now.$m}`;
    }
    //24시간형식
    get24Hour(){
        const hour = ('0' + today.getHours()).slice(-2);
        return hour;
    }
    // 00형식
    getMin() {
        const min = ('0' + today.getMinutes()).slice(-2);
        return min;
    }
}