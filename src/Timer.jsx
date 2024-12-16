import React, { useState, useEffect } from 'react';
import styles from './Timer.module.css';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const increaseTime = (amount) => {
    if (!running) setTime((prev) => prev + amount);
  };

  useEffect(() => {
    let interval;
    if (running && time > 0) {
      interval = setInterval(() => setTime((prev) => prev - 1), 1000);
    } else if (time === 0) {
      clearInterval(interval);
      if (running) {
        alert('Time is up!');
        setRunning(false);
      }
    }
    return () => clearInterval(interval);
  }, [running, time]);

  return (
    <div className={styles.timer}>
      <div>{new Date(time * 1000).toISOString().substr(11, 8)}</div>
      {!running && (
        <div className={styles.controls}>
          <button onClick={() => increaseTime(3600)}>+1 Hour</button>
          <button onClick={() => increaseTime(60)}>+1 Minute</button>
          <button onClick={() => increaseTime(1)}>+1 Second</button>
        </div>
      )}
      <button onClick={() => setRunning(!running)}>{running ? 'Pause' : 'Start'}</button>
    </div>
  );
};

export default Timer;
