import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'

import { useCounter } from './useCounter'

describe('useCounter', () => {
  it('initialCounter', () => {
    const { result } = renderHook(() => useCounter(2))
    expect(result.current[0]).toBe(2)
  })

  it('increment', () => {
    const { result } = renderHook(() => useCounter(1))
    const [ count, increment ] = result.current;
    const { container } = render(
      <div>
        <p id="count">{result.current[0]}</p>
        <button id="increment" onClick={() => result.current[1](3)}>increment</button>
        <button id="decrement" onClick={() => result.current[1](-2)}>decrement</button>
      </div>
    )
    const incrementButton = container.querySelector('#increment');

    act(() => {
      fireEvent.click(incrementButton!);
    })

    expect(result.current[0]).toBe(4);
  })

  it('decrement', () => {
    const { result } = renderHook(() => useCounter(1))
    const [ count, increment ] = result.current;
    const { container } = render(
      <div>
        <p id="count">{result.current[0]}</p>
        <button id="increment" onClick={() => result.current[1](3)}>increment</button>
        <button id="decrement" onClick={() => result.current[1](-2)}>decrement</button>
      </div>
    )
    const decrementButton = container.querySelector('#decrement');

    act(() => {
      fireEvent.click(decrementButton!);
    })

    expect(result.current[0]).toBe(-1);
  })
})
