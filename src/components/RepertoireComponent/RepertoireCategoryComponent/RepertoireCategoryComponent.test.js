import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RepertoireCategoryComponent from './RepertoireCategoryComponent';

describe('<RepertoireCategoryComponent />', () => {
  test('it should mount', () => {
    render(<RepertoireCategoryComponent />);
    
    const repertoireCategoryComponent = screen.getByTestId('RepertoireCategoryComponent');

    expect(repertoireCategoryComponent).toBeInTheDocument();
  });
});