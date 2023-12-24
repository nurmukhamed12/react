import { useState, useEffect } from 'react';

const App = () => {
  const [clicks, setClicks] = useState(0);
  const [time, setTime] = useState(10);
  const [intervalId, setIntervalId] = useState(null);
  const [customTime, setCustomTime] = useState(10);

  const Click = () => {
    setClicks(clicks + 1);
    if (intervalId === null) {
      const id = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  const Reset = () => {
    setClicks(0);
    setTime(customTime);
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const CustomTimeChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 5 && value <= 15) {
      setCustomTime(value);
      if (intervalId === null) {
        setTime(value);
      }
    }
  };

  useEffect(() => {
    if (time === 0) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }, [time, intervalId]);

  return (
    <div>
      <p>{clicks}</p>
      <button onClick={Click}>Click me!</button>
      <button onClick={Reset}>Reset</button>
      <div>
        <p>{time}</p>
        <input
          type="number"
          value={customTime}
          onChange={CustomTimeChange}
        />
      </div>
    </div>
  );
};

export default App;





