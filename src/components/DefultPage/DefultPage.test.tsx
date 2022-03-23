import React from 'react';
import { DefultPage, textP } from './DefultPage'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('App', () => {
  it('test quantity of hr at DOM', () => {
    const { container } = render(<App />);
    const classAllHr = container.querySelectorAll('.hr');
    expect(classAllHr.length).toBe(3);
  })

  it('test App components', () => {
    render(<App />);

    expect(screen.getByText('Click on me')).toBeInTheDocument();
    expect(screen.getByText('Some text in h1 element')).toBeInTheDocument();
    expect(screen.getByText('Выберите тег "h"')).toBeInTheDocument();
    expect(screen.getByText('h1')).toBeInTheDocument();
    expect(screen.getByText(textP)).toBeInTheDocument();

    const { container } = render(<App />);
    const classImage = container.querySelector(".image");
    expect(classImage).toBeInTheDocument();
  })
})


