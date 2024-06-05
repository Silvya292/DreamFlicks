import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import TrailerButton from '../../../src/components/trailerButton/index';
import '@testing-library/jest-dom/jest-globals';
import { describe, expect, it } from '@jest/globals';

describe('TrailerButton component', () => {
  it('opens modal when button is clicked', async () => {
    const { getByTestId, getByRole } = render(
      <TrailerButton video="https://example.com/trailer.mp4" />
    );
    const button = getByTestId('watchTrailerButton');

    fireEvent.click(button);

    await waitFor(() => {
      expect(getByRole('presentation')).toBeInTheDocument();
    });
  });
});
