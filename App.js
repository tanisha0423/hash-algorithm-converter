import React, { useEffect } from "react";
import ReactDOM from "react-dom";

function App() {
    useEffect(() => {
        window.generateHash();
    }, []);

    return (
        <div>
            <h1>Hash Algorithm Visualizer (React)</h1>
            <p>Most logic is handled in HTML & JavaScript.</p>
        </div>
    );
}

// Render the React app inside "root"
ReactDOM.render(<App />, document.getElementById("root"));
