import React from 'react';
import { render, screen } from '@testing-library/react';
import { Play } from '../Play';

describe('Play component', () => {
  test('renders Play component', () => {
    // mock props
    const props = {
      onPause: jest.fn(),
      isActive: true
    };
    render(<Play {...props} />);
  });

  test('icon tags', () => {
    expect(screen.queryByText(/&#xe036;/)).toBeNull();
    expect(screen.queryByText(/&#xe039;/)).toBeNull();
  });
});
