import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TimeInput from '../TimeInput';

describe('TimeInput', () => {
  test('renders TimeInput component ', () => {
    // mock props
    const props = {
      start: jest.fn(),
      setTotalTime: jest.fn(),
      isActive: true
    };
    render(<TimeInput {...props} />);
  });

  test('calls the onChange function on input', () => {
    const handleChange = jest.fn();

    render(<input onChange={handleChange} />);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 4 }
    });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('calls handleStart on button click', () => {
    const handleStart = jest.fn();
    render(<button onClick={handleStart}>Start</button>);
    const node = screen.getByText('Start');
    fireEvent.click(node);

    expect(handleStart).toHaveBeenCalledTimes(1);
  });
});
