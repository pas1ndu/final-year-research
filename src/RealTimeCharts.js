import React from 'react';
import { useFetchRealTimeData } from './useFetchRealTimeData';
import { Line } from 'react-chartjs-2';
import { Chart, LinearScale } from 'chart.js';
import { CategoryScale, TimeScale } from 'chart.js';
import { PointElement } from 'chart.js';
import { LineElement } from 'chart.js';

import 'moment';
import 'chartjs-adapter-moment';
// import './RealTieCharts.css'

Chart.register(LineElement);
Chart.register(PointElement);
Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(TimeScale);

function RealTimeCharts() {
    const dataReadings = useFetchRealTimeData();

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,  // Add this line to allow custom sizing
        scales: {
            x: {
                type: 'time',
                title: {
                    display: true,
                    text: 'Timestamp'
                }
            },
            y: {
                beginAtZero: true,
                type: 'linear'
            }
        }
    };

    const labels = dataReadings.map(item => new Date(item.timestamp));

    return (
        <div className="container">
            <div className="chart-row">
                <div className="chart-container">
                    <Line 
                        data={{
                            labels: labels,
                            datasets: [{
                                label: 'Consumed Units',
                                data: dataReadings.map(item => item.unitsConsumed),
                                borderColor: 'rgba(75,192,192,1)',
                                borderWidth: 2,
                                fill: false
                            }]
                        }}
                        options={chartOptions}
                    />
                </div>
                <div className="chart-container">
                    <Line 
                        data={{
                            labels: labels,
                            datasets: [{
                                label: 'Current',
                                data: dataReadings.map(item => item.current),
                                borderColor: 'rgba(255,0,0,1)',
                                borderWidth: 2,
                                fill: false
                            }]
                        }}
                        options={chartOptions}
                    />
                </div>
            </div>
            <div className="chart-row">
                <div className="chart-container">
                    <Line 
                        data={{
                            labels: labels,
                            datasets: [{
                                label: 'Voltage',
                                data: dataReadings.map(item => item.voltage),
                                borderColor: 'rgba(0,0,255,1)',
                                borderWidth: 2,
                                fill: false
                            }]
                        }}
                        options={chartOptions}
                    />
                </div>
                <div className="chart-container">
                    <Line 
                        data={{
                            labels: labels,
                            datasets: [{
                                label: 'Cumulative Units',
                                data: dataReadings.map(item => item.cumulativeUnits),
                                borderColor: 'rgba(0,255,0,1)',
                                borderWidth: 2,
                                fill: false
                            }]
                        }}
                        options={chartOptions}
                    />
                </div>
            </div>
        </div>
    );
}

export default RealTimeCharts;
