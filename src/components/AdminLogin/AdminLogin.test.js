import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AdminLogin from './AdminLogin';

describe('<AdminLogin />', () => {
  test('it should mount', () => {
    render(<AdminLogin />);
    
    const adminLogin = screen.getByTestId('AdminLogin');

    expect(adminLogin).toBeInTheDocument();
  });
});