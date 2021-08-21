import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import VitaComponent from './VitaComponent';

describe('<VitaComponent />', () => {
  test('it should mount', () => {
    render(<VitaComponent />);
    
    const vitaComponent = screen.getByTestId('VitaComponent');

    expect(vitaComponent).toBeInTheDocument();
  });
});