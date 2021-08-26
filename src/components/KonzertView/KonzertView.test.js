import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import KonzertView from './KonzertView';

describe('<KonzertView />', () => {
  test('it should mount', () => {
    render(<KonzertView />);
    
    const konzertView = screen.getByTestId('KonzertView');

    expect(konzertView).toBeInTheDocument();
  });
});