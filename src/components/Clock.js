import React, { useEffect, useState } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="card">
      <h3>useEffect - Horloge</h3>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default Clock;