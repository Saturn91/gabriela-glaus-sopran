import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AgendaComponent from './AgendaComponent';

describe('<AgendaComponent />', () => {
  test('it should mount', () => {
    render(<AgendaComponent />);
    
    const agendaComponent = screen.getByTestId('AgendaComponent');

    expect(agendaComponent).toBeInTheDocument();
  });
});