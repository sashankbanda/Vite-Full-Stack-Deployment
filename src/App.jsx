import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://your-backend-url.onrender.com/api") // Replace with backend URL
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div>
      <h1>Hello from Vite + React!</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
