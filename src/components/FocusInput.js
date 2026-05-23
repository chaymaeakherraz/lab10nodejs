import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="card">
      <h3>useRef - Focus Input</h3>

      <input ref={inputRef} placeholder="Cliquez sur Focus" />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
}

export default FocusInput;