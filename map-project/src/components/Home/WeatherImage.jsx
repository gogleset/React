import React from 'react';
import sunImage from "../../asset/images/icon_sun.gif";
import cloudImage from "../../asset/images/icon_cloud.png";
import manyCloudImage from "../../asset/images/icon_cloud_many.png";
import rainImage from "../../asset/images/icon_rain.gif";
import snowImage from "../../asset/images/icon_snow.gif";
import nightImage from "../../asset/images/icon_night.gif";
import DayHelper from "../../helper/DayHelper.js";

const WeatherImage = ({ data, width, height }) => {

    const { sky, precipitation, time, weeklySky } = data;


    // useEffect(() => {
    //     console.log(weeklySky);
    // }, [weeklySky])

    return (
        <div>
            {weeklySky ? printWeeklyWeather(weeklySky, width, height) : printClassificationWeather(sky, precipitation, parseInt(time), width, height)}
        </div>
    );
};
function printWeeklyWeather(sky, width, height) {
    switch (sky.trim()) {
        case "맑음":
            return (<img src={sunImage} alt="날씨 맑음" width={width} height={height} />);
        case "흐림":
            return (<img src={cloudImage} alt="날씨 흐림" width={width} height={height} />);
        case "흐리고 비":
            return (<img src={rainImage} alt="날씨 흐리고 비" width={width} height={height} />)
        case "흐리고 눈":
            return (<img src={snowImage} alt="날씨 흐리고 눈" width={width} height={height} />)
        case "흐리고 비/눈":
            return (<img src={snowImage} alt="날씨 흐리고 비/눈" width={width} height={height} />)
        case "흐리고 소나기":
            return (<img src={rainImage} alt="날씨 흐리고 소나기" width={width} height={height} />)
        case "구름많음":
            return (<img src={manyCloudImage} alt="날씨 구름 많음" width={width} height={height} />);
        case "구름많고 눈":
            return (<img src={snowImage} alt="날씨 구름많고 눈" width={width} height={height} />);
        case "구름많고 비/눈":
            return (<img src={snowImage} alt="날씨 구름많고 비/눈" width={width} height={height} />);
        case "구름많고 소나기":
            return (<img src={rainImage} alt="날씨 구름많고 소나기" width={width} height={height} />);
        default:
            alert("주간 날씨 데이터가 없습니다.")
            break;
    }

}



// 값을 분류하여 Image리턴
function printClassificationWeather(sky, precipitation, time, width, height) {
    const Day = new DayHelper();
    let times = parseInt(time);
    // 저녁, 아침 구하기
    const hour = Day.getEvent(times);
    // 하늘상태 코드
    const skyCode = parseInt(sky);
    // 날씨 코드
    const precipitationCode = parseInt(precipitation);
    // console.log(`printClassificationWeather hour ::: ${hour} ${skyCode} ${precipitationCode}`)
    // 날씨 맑음일때는 sky값으로 출력
    if (precipitationCode === 0 && hour === "morning") {
        // console.log("skyCode === 1 && hour === morning")
        switch (skyCode) {
            case 1:
                return (<img src={sunImage} alt="날씨 맑음" width={width} height={height} />);
            case 3:
                return (<img src={cloudImage} alt="날씨 흐림" width={width} height={height} />);
            case 4:
                return (<img src={manyCloudImage} alt="구름 많음" width={width} height={height} />);
            default:
                alert('날씨 값이 들어오지 않았습니다.')
                break;
        }
    } else if (precipitationCode !== 0 && hour === "morning") {
        // console.log("skyCode !== 1 hour === morning")
        switch (precipitationCode) {
            case 0:
                return (<img src={sunImage} alt="날씨 맑음" width={width} height={height} />);
            case 1:
                return (<img src={rainImage} alt="날씨 비" width={width} height={height} />)
            case 2:
                return (<img src={snowImage} alt="날씨 비와 눈" width={width} height={height} />)
            case 3:
                return (<img src={snowImage} alt="날씨 눈" width={width} height={height} />)
            case 4:
                return (<img src={rainImage} alt="날씨 소나기" width={width} height={height} />);
            case 5:
                return (<img src={rainImage} alt="날씨 빗방울" width={width} height={height} />)
            case 6:
                return (<img src={snowImage} alt="날씨 빗방울눈날림" width={width} height={height} />)
            case 7:
                return (<img src={snowImage} alt="날씨 눈날림" width={width} height={height} />)
            default:
                return;
        }
        // 저녁일때
    } else if (precipitationCode === 0 && hour === "night") {
        // console.log("skyCode === 1 hour === night");
        switch (skyCode) {
            case 1:
                return (<img src={nightImage} alt="밤 날씨 맑음" width={width} height={height} />);
            case 3:
                return (<img src={cloudImage} alt="밤 날씨 흐림" width={width} height={height} />);
            case 4:
                return (<img src={manyCloudImage} alt="밤 구름 많음" width={width} height={height} />);
            default:
                alert('날씨 값이 들어오지 않았습니다.')
                break;
        }
    } else if (precipitationCode !== 0 && hour === "night") {
        // console.log("skyCode !== 1 && hour === night");
        switch (precipitationCode) {
            case 0:
                return (<img src={nightImage} alt="밤 날씨 맑음" width={width} height={height} />);
            case 1:
                return (<img src={rainImage} alt="밤 날씨 비" width={width} height={height} />)
            case 2:
                return (<img src={snowImage} alt="밤 날씨 비와 눈" width={width} height={height} />)
            case 3:
                return (<img src={snowImage} alt="밤 날씨 눈" width={width} height={height} />)
            case 5:
                return (<img src={rainImage} alt="밤 날씨 빗방울" width={width} height={height} />)
            case 6:
                return (<img src={snowImage} alt="밤 날씨 빗방울눈날림" width={width} height={height} />)
            case 7:
                return (<img src={snowImage} alt="밤 날씨 눈날림" width={width} height={height} />)
            default:
                return;
        }
    }
}


WeatherImage.defaultProps = {
    width: "50",
    height: "50",
}


export default WeatherImage;