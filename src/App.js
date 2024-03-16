import React from 'react';
import Dashboard from './dashboard';
import './App.css';

function App() {
    return (
        <div className="app-container">
            <Header />
            <div className="main-content">
                <SideNavbar />
                <div className="content">
                    <h1>Welcome to your Electricity Monitoring System</h1>
                    <Dashboard />
                </div>
            </div>
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <div className="header">
            <h2>VoltTrace - Electricity Monitoring System</h2>
        </div>
    );
}

function SideNavbar() {
    return (
        <div className="side-navbar">
            <a href="#dashboard">Dashboard</a>
            <a href="#reports">Reports</a>
            <a href="#settings">Settings</a>
            <a href="#Profile">Profile</a>
        </div>
    );
}

function Footer() {
    return (
        <div className="footer">
            <p>© 2023 VoltTrace</p>
        </div>
    );
}

export default App;
