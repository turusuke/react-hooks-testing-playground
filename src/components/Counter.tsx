import React from 'react';
import {useCounter} from '../hooks/useCounter';

export const Counter: React.FC<{ initialValue: number }> = ({initialValue}: { initialValue: number }) => {
  const [counter, increment] = useCounter(initialValue);

  return (<div>
    <p>{counter}</p>
    <button onClick={() => increment(1)}>+</button>
    <button onClick={() => increment(-1)}>-</button>
  </div>);
};
