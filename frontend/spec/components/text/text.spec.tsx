import React from 'react';
import { render } from '@testing-library/react';
import CustomText from '../../../src/components/text/index';
import '@testing-library/jest-dom/jest-globals';
import { describe, expect, it, jest } from '@jest/globals';

describe('CustomText component', () => {
  it('renders correctly with provided label', () => {
    const labelText = 'Test Label';

    const { getByText } = render(<CustomText label={labelText} />);

    expect(getByText(labelText)).toBeInTheDocument();
  });

  it('renders with the correct styles', () => {
    const labelText = 'Test Label';

    const { getByText } = render(<CustomText label={labelText} />);

    const textElement = getByText(labelText);
    expect(textElement).toHaveStyle({
      fontFamily: 'Roboto, sans-serif',
      fontSize: '1.2rem',
      paddingRight: '2rem',
      margin: '1rem 0',
    });
  });
});
