import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AgendaProjectCard from './AgendaProjectCard';

describe('<AgendaProjectCard />', () => {
  test('it should mount', () => {
    render(<AgendaProjectCard />);
    
    const agendaProjectCard = screen.getByTestId('AgendaProjectCard');

    expect(agendaProjectCard).toBeInTheDocument();
  });
});