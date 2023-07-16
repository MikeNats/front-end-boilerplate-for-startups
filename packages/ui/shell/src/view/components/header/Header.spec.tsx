import React from 'react';
import '@testing-library/jest-dom';
import Header from './Header';
import { render } from '@testing-library/react';

test('Header with value', () => {
  const { getByText } = render(<Header />);
  expect(getByText('Hello, world!')).toBeInTheDocument();
});
