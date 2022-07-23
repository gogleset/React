import React, { useState, useEffect } from 'react';
import sunImage from "../../styles/images/icon_sun.gif";
import rainImage from "../../styles/images/icon_rain.gif";
import snowImage from "../../styles/images/icon_snow.gif";

const WeatherImage = ({ data, width, height }) => {
    const [weather, setWeather] = useState(data);

    useEffect(() => {
        console.log(weather.fcstValue);
    }, [weather])

    return (
        <div>
            {weather && printClassificationWeather(weather.fcstValue, width, height)}
        </div>
    );
};
// 값을 분류하여 Image리턴
function printClassificationWeather(weather, width, height) {
    switch (weather) {
        case "0":
            return (<img src={sunImage} alt="날씨 맑음" width={width} height={height} />);
        case "1":
            return (<img src={rainImage} alt="날씨 비" width={width} height={height} />)
        case "2":
            return (<img src={snowImage} alt="날씨 비와 눈" width={width} height={height} />)
        case "3":
            return (<img src={snowImage} alt="날씨 눈" width={width} height={height} />)
        case "5":
            return (<img src={rainImage} alt="날씨 빗방울" width={width} height={height} />)
        case "6":
            return (<img src={snowImage} alt="날씨 빗방울눈날림" width={width} height={height} />)
        case "7":
            return (<img src={snowImage} alt="날씨 눈날림" width={width} height={height} />)
        default:
            return;
    }
}

WeatherImage.defaultProps = {
    width: "50",
    height: "50",
}


export default WeatherImage;