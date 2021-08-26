import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import KonzertListComponent from './KonzertListComponent';

describe('<KonzertListComponent />', () => {
  test('it should mount', () => {
    render(<KonzertListComponent />);
    
    const konzertListComponent = screen.getByTestId('KonzertListComponent');

    expect(konzertListComponent).toBeInTheDocument();
  });
});