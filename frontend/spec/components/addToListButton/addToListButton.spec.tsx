import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import { describe, expect, it, jest } from '@jest/globals';
import AddToListButton from '../../../src/components/addToListButton';
import React from 'react';

interface AddItemToListFormProps {
  open: boolean;
  onClose: (value: boolean) => void;
}

jest.mock('../../../src/components/modals/addItemToListForm', () => ({
  __esModule: true,
  default: ({ open, onClose }: AddItemToListFormProps) =>
    open ? (
      <div role="dialog" data-testid="addItemToListForm">
        Form is open
      </div>
    ) : null,
}));

describe('addToListButton', () => {
  it('should render a CustomButton', () => {
    render(<AddToListButton />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Añadir a lista');
  });

  it('should open the AddItemToListForm when the button is clicked', () => {
    render(<AddToListButton />);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    const form = screen.getByRole('dialog');
    expect(form).toBeInTheDocument();
    expect(form).toHaveTextContent('Form is open');
  });
});
