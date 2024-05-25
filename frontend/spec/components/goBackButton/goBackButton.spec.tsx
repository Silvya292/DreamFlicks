import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import { describe, expect, it, jest } from '@jest/globals';
import GoBackButton from '../../../src/components/goBackButton';
import React from 'react';

describe('GoBackButton', () => {
  it('should render the button with correct label and icon', () => {
    render(<GoBackButton />);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Volver');
    expect(button).toContainElement(
      screen.getByTestId('KeyboardArrowLeftIcon')
    );
  });

  it('should apply correct styles to the button', () => {
    render(<GoBackButton />);
    const button = screen.getByRole('button');

    expect(button).toHaveStyle({
      backgroundColor: '#f8f398',
      textTransform: 'none',
    });
  });

  it('should call window.history.back() when clicked', () => {
    const spyHistoryBack = jest
      .spyOn(window.history, 'back')
      .mockImplementation(() => {});
    render(<GoBackButton />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(spyHistoryBack).toHaveBeenCalledTimes(1);
    spyHistoryBack.mockRestore();
  });
});
