import React from 'react';
import { App, textP } from './App'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';


describe('App', () => {
  it('test quantity of hr at DOM', () => {
    const container = render(<App />);
    screen.debug();
    const classHr = container.queryAllByRole('hr');
    // const classAllHr = container.querySelectorAll('.hr');
    expect(classHr).toBeInTheDocument();
    expect(classAllHr.length).toBe(3);
  })

  it('test App components', () => {
    render(<App disabled />);

    expect(screen.getByText('Click on me')).toBeInTheDocument();
    expect(screen.getByText('Some text in h1 element')).toBeInTheDocument();
    expect(screen.getByText('Выберите тег "h"')).toBeInTheDocument();
    expect(screen.getByText('h1')).toBeInTheDocument();
    expect(screen.getByText(textP)).toBeInTheDocument();
  })
})


