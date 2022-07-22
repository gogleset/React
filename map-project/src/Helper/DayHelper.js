import dayjs from 'dayjs';

export default {
    getDay: () => {
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
    },
    getHour: () => {
        let now = dayjs();
        now.format();
        let hour = String(now.$H - 1);
        if (hour.length === 1) {
            hour = "0" + hour;
        }

        return `${hour}`
    },
    getMinute: () => {
        let now = dayjs();
        now.format();
        return `${now.$m}`;
    }
}