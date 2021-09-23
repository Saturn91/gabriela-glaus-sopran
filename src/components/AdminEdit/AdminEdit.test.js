import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AdminEdit from './AdminEdit';

describe('<AdminEdit />', () => {
  test('it should mount', () => {
    render(<AdminEdit />);
    
    const adminEdit = screen.getByTestId('AdminEdit');

    expect(adminEdit).toBeInTheDocument();
  });
});