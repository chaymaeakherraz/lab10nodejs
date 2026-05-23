import React, { useLayoutEffect, useRef, useState } from 'react';

function MeasureBox() {
  const boxRef = useRef(null);
  const [width, setWidth] = useState(50);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (boxRef.current) {
      const rect = boxRef.current.getBoundingClientRect();

      setDimensions({
        width: rect.width,
        height: rect.height
      });
    }
  }, [width]);

  return (
    <div className="card">
      <h3>useLayoutEffect</h3>

      <input
        type="range"
        min="20"
        max="100"
        value={width}
        onChange={e => setWidth(e.target.value)}
      />

      <div
        ref={boxRef}
        style={{
          width: `${width}%`,
          padding: '20px',
          backgroundColor: '#dff6ff',
          margin: '10px auto',
          borderRadius: '8px'
        }}
      >
        Boîte mesurée
      </div>

      <p>
        Dimensions : {Math.round(dimensions.width)}px ×{' '}
        {Math.round(dimensions.height)}px
      </p>
    </div>
  );
}

export default MeasureBox;