import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FotosComponent from './FotosComponent';

describe('<FotosComponent />', () => {
  test('it should mount', () => {
    render(<FotosComponent />);
    
    const fotosComponent = screen.getByTestId('FotosComponent');

    expect(fotosComponent).toBeInTheDocument();
  });
});