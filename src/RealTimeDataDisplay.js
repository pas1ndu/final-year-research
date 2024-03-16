import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, off } from 'firebase/database';
import { firebaseConfig } from './firebaseConfig';

// Initialize Firebase
initializeApp(firebaseConfig);

function RealTimeDataDisplay() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const db = getDatabase();
        const dbRef = ref(db);

        // Listen for changes in the data
        const handleDataChange = (snapshot) => {
            const results = {
                cumulativeUnits: snapshot.child('cumulativeUnits').val(),
                current: snapshot.child('current').val(),
                unitsConsumed: snapshot.child('unitsConsumed').val(),
                voltage: snapshot.child('voltage').val(),
            };

            setData([results]);
        };

        // Attach the listener
        onValue(dbRef, handleDataChange);

        // Cleanup listener on component unmount
        return () => {
            off(dbRef, handleDataChange);
        };
    }, []);

    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>
                    <p><strong>Consumed Units:</strong> {item.unitsConsumed}</p>
                    <p><strong>Current:</strong> {item.current}</p>
                    <p><strong>Voltage:</strong> {item.voltage}</p>
                    <p><strong>Cumulative Units:</strong> {item.cumulativeUnits}</p>
                </div>
            ))}
        </div>
    );
}

export default RealTimeDataDisplay;
