import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FotoAlbumComponent from './FotoAlbumComponent';

describe('<FotoAlbumComponent />', () => {
  test('it should mount', () => {
    render(<FotoAlbumComponent />);
    
    const fotoAlbumComponent = screen.getByTestId('FotoAlbumComponent');

    expect(fotoAlbumComponent).toBeInTheDocument();
  });
});