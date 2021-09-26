import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MarkDownEditor from './MarkDownEditor';

describe('<MarkDownEditor />', () => {
  test('it should mount', () => {
    render(<MarkDownEditor />);
    
    const markDownEditor = screen.getByTestId('MarkDownEditor');

    expect(markDownEditor).toBeInTheDocument();
  });
});