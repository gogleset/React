import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

import styles from "../../styles/graph.module.scss"


const options = {
    // responsive 속성을 false로 지정한다.
    responsive: false,
    plugins: {
        legend: {
            display: false //라벨 안보이게하기
        }
    },
    scales: {
        yAxis: {
            ticks: {
                stepSize: 1, //y축 숫자 소수점 제거
            }
        }
    }
}



const TodayWeatherGraph = ({ data }) => {


    let { temperature, precipitation, humidity, time
    } = data;

    let temperatureValue = temperature.map((item => item.fcstValue));


    const printDataOption = {
        labels: time,
        datasets: [
            {
                type: 'line',
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 1,
                data: temperatureValue,
                yAxisID: 'yAxis'
            },
        ],
    };

    return (
        <div className={`${styles.container} chart-container`}>
            <Line type="line" data={printDataOption} options={options} style={{ height: "150px", margin: "0 auto" }} />
        </div>
    );
};

TodayWeatherGraph.defaultProps = {
    data: null,
}

export default TodayWeatherGraph;