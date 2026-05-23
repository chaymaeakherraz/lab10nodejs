import React, { useCallback, useMemo, useState } from 'react';

function calculateFactorial(n) {
  console.log('Calcul factorielle...');
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

function ExpensiveCalculation() {
  const [number, setNumber] = useState(5);

  const factorial = useMemo(() => {
    return calculateFactorial(number);
  }, [number]);

  const increment = useCallback(() => {
    setNumber(prev => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setNumber(prev => Math.max(0, prev - 1));
  }, []);

  return (
    <div className="card">
      <h3>useMemo / useCallback</h3>
      <p>Nombre : {number}</p>
      <p>Factorielle : {factorial}</p>

      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default ExpensiveCalculation;