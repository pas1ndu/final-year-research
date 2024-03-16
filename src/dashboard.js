import React from 'react';
import RealTimeDataDisplay from './RealTimeDataDisplay';
import './dashboard.css'; 
import Preds from "./predictions";
import RealTimeCharts from './RealTimeCharts';


function Dashboard() {
    return (
        <>
        <div className="dashboard-container">
            <h2>Real-Time Electricity Data</h2>
            <RealTimeDataDisplay />
        </div><div className="dashboard-container">
            <h2>Your Current Electricity Consumption Level</h2>
            <Preds />
        </div>
        <div className="dashboard-container">
            <h2> Real Time Usage Charts</h2>
            <RealTimeCharts />
        </div>
        </>
    );
}

export default Dashboard;
