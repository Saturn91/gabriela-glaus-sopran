import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AgendaEventCard from './AgendaEventCard';

describe('<AgendaEventCard />', () => {
  test('it should mount', () => {
    render(<AgendaEventCard />);
    
    const agendaEventCard = screen.getByTestId('AgendaEventCard');

    expect(agendaEventCard).toBeInTheDocument();
  });
});