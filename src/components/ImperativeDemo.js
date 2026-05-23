import React, { useRef } from 'react';
import CustomInput from './CustomInput';

function ImperativeDemo() {
  const inputRef = useRef(null);

  return (
    <div className="card">
      <h3>useImperativeHandle</h3>

      <CustomInput ref={inputRef} placeholder="Input personnalisé" />

      <button onClick={() => inputRef.current.focus()}>Focus</button>
      <button onClick={() => inputRef.current.clear()}>Effacer</button>
      <button onClick={() => inputRef.current.setValue('Valeur test')}>
        Définir valeur
      </button>
    </div>
  );
}

export default ImperativeDemo;