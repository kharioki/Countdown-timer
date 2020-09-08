import React from 'react';
import { render } from '@testing-library/react';
import CountdownTimer from '../CountdownTimer';

describe('CountdownTimer', () => {
  test('renders CountdownTimer component', () => {
    render(<CountdownTimer />);
  });
});
