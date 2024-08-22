import React, { useState, useEffect } from 'react';

const SumCalculator = () => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  const handleNumberInput = (event) => {
    setNumbers([...numbers, parseInt(event.target.value)]);
  };

  useEffect(() => {
    let newSum = 0;
    for (let num of numbers) {
      newSum += num;
    }
    setSum(newSum);
  }, [numbers]);

  return (
    <div>
        <h1>Sum Calculator</h1>
      <input type="number" onChange={handleNumberInput} />
      <p>Sum: {sum}</p>
    </div>
  );
};

export default SumCalculator;