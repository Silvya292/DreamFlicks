import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import { describe, expect, it, jest } from '@jest/globals';
import ItemList from '../../../src/components/itemList';
import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('ItemList', () => {
  const items = [
    {
      id: 1,
      title: 'Item 1',
      overview: 'Overview of item 1',
      poster: 'poster1.jpg',
      releaseDate: '2024-01-01',
      type: 'movie',
    },
  ];

  it('should render list items correctly', () => {
    render(
      <MemoryRouter initialEntries={['/list/123']}>
        <Routes>
          <Route
            path="/list/:listId"
            element={<ItemList items={items} type="list" />}
          />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Overview of item 1')).toBeInTheDocument();
    expect(screen.getByText('2024-01-01')).toBeInTheDocument();
  });
});
