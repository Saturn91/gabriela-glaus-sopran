import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EventsEditor from './EventsEditor';

describe('<EventsEditor />', () => {
  test('it should mount', () => {
    render(<EventsEditor />);
    
    const eventsEditor = screen.getByTestId('EventsEditor');

    expect(eventsEditor).toBeInTheDocument();
  });
});