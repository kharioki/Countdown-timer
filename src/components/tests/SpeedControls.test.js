import React from 'react';
import { render, screen } from '@testing-library/react';
import SpeedControls from '../SpeedControls';

describe('SpeedControls', () => {
  test('renders SpeedControls component ', () => {
    const props = {
      updateSpeed: jest.fn(),
      activeSpeed: 1
    };
    render(<SpeedControls {...props} />);
  });
  test('renders 1X, 1.5X, 2X button', () => {
    const { getByText } = render(<SpeedControls />);
    expect(getByText('1X')).toBeInTheDocument();
    expect(getByText('1.5X')).toBeInTheDocument();
    expect(getByText('2X')).toBeInTheDocument();
  });
});
