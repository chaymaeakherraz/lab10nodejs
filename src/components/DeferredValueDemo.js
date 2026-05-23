import React, { useDeferredValue, useMemo, useState } from 'react';

function DeferredValueDemo() {
  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text);

  const letters = useMemo(() => {
    return deferredText.split('');
  }, [deferredText]);

  return (
    <div className="card">
      <h3>useDeferredValue</h3>

      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Tapez du texte"
      />

      <p>Texte normal : {text}</p>
      <p>Texte différé : {deferredText}</p>

      <div>
        {letters.map((letter, index) => (
          <span className="letter" key={index}>
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}

export default DeferredValueDemo;