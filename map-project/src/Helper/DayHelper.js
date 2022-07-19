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

        console.log(`getDay Function ${year}${month}${day}`);
        return `${year}${month}${day}`;
    },
    getHour: () => {
        let now = dayjs();
        now.format();
        return `${now.$H}00`
    },
    getMinute: () => {
        let now = dayjs();
        now.format();
        console.log(`${now.$m}`);
        return `${now.$m}`;
    }
}