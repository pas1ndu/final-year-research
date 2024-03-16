import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, off } from 'firebase/database';

export function useFetchRealTimeData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const db = getDatabase();
        const dbRef = ref(db);

        const handleDataChange = (snapshot) => {
            const currentTime = new Date().toISOString();  // Capture the current timestamp in ISO format

            const results = {
                cumulativeUnits: snapshot.child('cumulativeUnits').val(),
                current: snapshot.child('current').val(),
                unitsConsumed: snapshot.child('unitsConsumed').val(),
                voltage: snapshot.child('voltage').val(),
                timestamp: currentTime  // Add the captured timestamp to the results object
            };

            setData([results]);
        };

        onValue(dbRef, handleDataChange);

        return () => {
            off(dbRef, handleDataChange);
        };
    }, []);

    return data;
}

