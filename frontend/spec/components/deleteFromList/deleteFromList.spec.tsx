import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, afterEach } from '@jest/globals';
import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import DeleteFromList from '../../../src/components/deleteFromList';

describe('DeleteFromList', () => {
  const mockAxios = new MockAdapter(axios);

  afterEach(() => {
    mockAxios.reset();
  });

  it('should call api endpoint on button click', async () => {
    mockAxios
      .onPatch('http://localhost:3000/api/list/deleteItem/1')
      .reply(200, {});
    render(<DeleteFromList data={{ listId: '1', itemId: 12 }} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    await waitFor(() => expect(mockAxios.history.patch.length).toBe(1));
  });
});
