import { useState } from 'react';

export const useCounter = (initialValue: number): [number, (value: number) => void] => {
  const [ counter, setCount ] = useState(initialValue);
  const increment = (value: number) => {
    setCount(counter + value);
  }
  return [ counter, increment ]
}
