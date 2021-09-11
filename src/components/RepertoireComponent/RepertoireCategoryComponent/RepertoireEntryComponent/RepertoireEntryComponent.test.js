import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RepertoireEntryComponent from './RepertoireEntryComponent';

describe('<RepertoireEntryComponent />', () => {
  test('it should mount', () => {
    render(<RepertoireEntryComponent />);
    
    const repertoireEntryComponent = screen.getByTestId('RepertoireEntryComponent');

    expect(repertoireEntryComponent).toBeInTheDocument();
  });
});