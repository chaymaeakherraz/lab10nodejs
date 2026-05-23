import React, { useEffect, useRef, useState } from 'react';

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const intervalRef = useRef(null);
  const startTimeRef = useRef(0);
  const previousTimeRef = useRef(0);

  const toggle = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      previousTimeRef.current = elapsedTime;
    } else {
      startTimeRef.current = Date.now() - previousTimeRef.current;

      intervalRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    setIsRunning(prev => !prev);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setElapsedTime(0);
    previousTimeRef.current = 0;
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const formatTime = time => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const ms = Math.floor((time % 1000) / 10);

    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}:${ms.toString().padStart(2, '0')}`;
  };

  return (
    <div className="card">
      <h3>useRef - Chronomètre</h3>
      <p className="timer">{formatTime(elapsedTime)}</p>

      <button onClick={toggle}>{isRunning ? 'Arrêter' : 'Démarrer'}</button>
      <button onClick={reset}>Réinitialiser</button>
    </div>
  );
}

export default Stopwatch;