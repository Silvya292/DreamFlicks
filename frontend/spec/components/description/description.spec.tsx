import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import { describe, expect, it } from '@jest/globals';
import Description from '../../../src/components/description';
import React from 'react';

describe('Description', () => {
  const descriptionText = 'Foo';

  it('should render the description text', () => {
    render(<Description descriptionText={descriptionText} />);
    const descriptionElement = screen.getByText(descriptionText);

    expect(descriptionElement).toBeInTheDocument();
  });

  it('should apply correct styles to the description text', () => {
    render(<Description descriptionText={descriptionText} />);
    const descriptionElement = screen.getByText(descriptionText);

    expect(descriptionElement).toHaveStyle({
      fontFamily: 'Roboto, sans-serif',
      fontSize: '1rem',
      textAlign: 'center',
      padding: '1rem',
      width: '100%',
      color: '#4d4f4d',
    });
  });
});
