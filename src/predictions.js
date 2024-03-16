import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Preds() {
    const [prediction, setPrediction] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/get_prediction'); 
                setPrediction(response.data.prediction);
            } catch (error) {
                console.error("Error fetching prediction:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="App" >
            <header className="App-header">
                {prediction ? <p><strong>Prediction According to Usage Pattern:</strong> {prediction}</p> : <p>Loading...</p>}
            </header>
        </div>
    );
}

export default Preds;
