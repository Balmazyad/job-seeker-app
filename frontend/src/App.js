import React, { useState, useEffect } from "react";

function App() {
    const [message, setMessage] = useState("Loading...");

    useEffect(() => {
        fetch("http://job-seeker-api.us-east-2.elasticbeanstalk.com/your-endpoint") 
            .then((response) => response.json()) // Convert response to JSON
            .then((data) => setMessage(data.message)) // Set message from backend
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Job-Seeker App</h1>
            <h2>Backend Response:</h2>
            <p>{message}</p>
        </div>
    );
}

export default App;