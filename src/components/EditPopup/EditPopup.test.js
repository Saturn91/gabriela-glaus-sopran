import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EditPopup from './EditPopup';

describe('<EditPopup />', () => {
  test('it should mount', () => {
    render(<EditPopup />);
    
    const editPopup = screen.getByTestId('EditPopup');

    expect(editPopup).toBeInTheDocument();
  });
});