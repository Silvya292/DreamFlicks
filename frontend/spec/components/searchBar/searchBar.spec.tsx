import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import { describe, expect, it, jest } from '@jest/globals';
import SearchBar from '../../../src/components/searchBar/index';
import { MemoryRouter } from 'react-router-dom';

describe('SearchBar', () => {
  it('renders correctly with initial values', () => {
    render(
      <MemoryRouter>
        <SearchBar initialType="film" initialQuery="Avatar" />
      </MemoryRouter>
    );

    const inputElement = screen.getByPlaceholderText('Buscar títulos...');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('Avatar');
  });

  it('updates query state on input change', () => {
    render(
      <MemoryRouter>
        <SearchBar />
      </MemoryRouter>
    );

    const inputElement = screen.getByPlaceholderText('Buscar títulos...');
    fireEvent.change(inputElement, { target: { value: 'Harry Potter' } });

    expect(inputElement).toHaveValue('Harry Potter');
  });
});
