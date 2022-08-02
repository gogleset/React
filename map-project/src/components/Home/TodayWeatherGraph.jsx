import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

import styles from "../../styles/graph.module.scss"


const options = {
    // responsive 속성을 false로 지정한다.
    responsive: true,
    maintainAspectRatio: false, //부모에 height 지정
    plugins: {
        legend: {
            display: false //라벨 안보이게하기
        }
    },
    scales: {
        y: {
            display: false, //안보이게하기
            ticks: {
                stepSize: 1, //y축 숫자 소수점 제거
            }
        },
        x: {
            pointStyle: 'cross',
            grid: {
                display: false
            },
            ticks: {
                color: '#000000',
                font: {
                    size: 11,
                    weight: "bold",
                    family: "'Jua', sans-serif"
                }
            },
        },

    }
}



const TodayWeatherGraph = ({ data }) => {
    let { temperature, time } = data;
   
    const printDataOption = {
        labels: time,
        datasets: [
            {
                type: 'line',
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 1,
                data: temperature,
                tension: 0.2,

            },
        ],
    };

    return (
        <div className={styles.container}>
            <Line type="line" data={printDataOption} options={options} />
        </div>
    );
};

TodayWeatherGraph.defaultProps = {
    data: null,
}

export default TodayWeatherGraph;