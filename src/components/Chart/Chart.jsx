import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';


function Chart({ data: { confirmed, critical, recovered, deaths }, country }) {
    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        const fetchMyAPI = async () => {
            const initialDailyData = await fetchDailyData();

            setDailyData(initialDailyData);
        };

        setTimeout(fetchMyAPI, 1500);
    }, []);

    const barChart = (
        confirmed ? (
            <Bar
                data={{
                    labels: ['Confirmed', 'Recovered', 'Critical', 'Deaths'],
                    datasets: [
                        {
                            label: 'People',
                            backgroundColor: ['rgba(255, 193, 7, 0.5)', 'rgba(33, 136, 56, 0.5)', 'rgba(200, 35, 51, 0.5)', 'rgba(90, 98, 104, 0.5)'],
                            data: [confirmed, recovered, critical, deaths],
                        },
                    ],
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${country}` },
                }}
            />
        ) : null
    );

    const lineChart = (
        dailyData[0] ? (
            <Line
                data={{
                    labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
                    datasets: [
                        {
                            data: dailyData.map((data) => data.confirmed),
                            label: 'Confirmed',
                            borderColor: 'rgba(255, 193, 7, 1)',
                            backgroundColor:'rgba(255, 193, 7, 0.5)',
                            fill: true,
                            borderWidth: 0.5
                        },
                        {
                            data: dailyData.map((data) => data.deaths),
                            label: 'Deaths',
                            borderColor: 'rgba(90, 98, 104, 1)',
                            backgroundColor: 'rgba(90, 98, 104, 0.5)',
                            fill: true,
                            borderWidth: 1
                        },
                        {
                            data: dailyData.map((data) => data.recovered),
                            label: 'Recovered',
                            borderColor: 'rgba(33, 136, 56, 1)',
                            backgroundColor: 'rgba(33, 136, 56, 0.5)',
                            fill: true,
                            borderWidth: 1
                        },
                        {
                            data: dailyData.map((data) => data.critical),
                            label: 'Critical',
                            borderColor: 'rgba(200, 35, 51, 1)',
                            backgroundColor: 'rgba(200, 35, 51, 0.5)',
                            fill: true,
                            borderWidth: 1
                        }
                    ],
                }}
            />
        ) : null
    );

    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    );
}

export default Chart
