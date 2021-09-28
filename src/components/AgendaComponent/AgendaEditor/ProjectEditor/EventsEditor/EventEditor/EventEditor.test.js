import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EventEditor from './EventEditor';

describe('<EventEditor />', () => {
  test('it should mount', () => {
    render(<EventEditor />);
    
    const eventEditor = screen.getByTestId('EventEditor');

    expect(eventEditor).toBeInTheDocument();
  });
});