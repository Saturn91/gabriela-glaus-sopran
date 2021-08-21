import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactComponent from './ContactComponent';

describe('<ContactComponent />', () => {
  test('it should mount', () => {
    render(<ContactComponent />);
    
    const contactComponent = screen.getByTestId('ContactComponent');

    expect(contactComponent).toBeInTheDocument();
  });
});