import React, { useState, useEffect } from 'react';
import styles from './Stopwatch.module.css';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => setTime((prev) => prev + 1), 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className={styles.stopwatch}>
     
      <div>{new Date(time * 1000).toISOString().substr(11, 8)}</div>
      <button onClick={() => setRunning(!running)}>{running ? 'Pause' : 'Start'}</button>
      <button onClick={() => setTime(0)}>Reset</button>
    </div>
  );
};

export default Stopwatch;
