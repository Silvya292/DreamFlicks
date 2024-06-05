import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import { describe, expect, it, jest } from '@jest/globals';
import PageTitle from '../../../src/components/pageTitle/index';

describe('PageTitle', () => {
  it('renders with correct label and styles', () => {
    const label = 'Test Page Title';
    const fontSize = '24px';
    const textAlign = 'center';
    const margin = '20px';
    const color = '#333';

    render(
      <PageTitle
        label={label}
        fontSize={fontSize}
        textAlign={textAlign}
        margin={margin}
        color={color}
      />
    );

    const pageTitle = screen.getByText(label);

    expect(pageTitle).toBeInTheDocument();
    expect(pageTitle).toHaveStyle(`font-size: ${fontSize}`);
    expect(pageTitle).toHaveStyle(`text-align: ${textAlign}`);
    expect(pageTitle).toHaveStyle(`margin: ${margin}`);
    expect(pageTitle).toHaveStyle(`color: ${color}`);
  });
});
