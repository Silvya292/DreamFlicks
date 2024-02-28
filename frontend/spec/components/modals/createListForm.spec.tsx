import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';

import CreateListForm from '../../../src/components/modals/createListForm';

describe('Create List Form', () => {
  beforeEach(() => {
    const setOpen = jest.fn();
    render(<CreateListForm open={true} onClose={setOpen} />);
  });

  it('should render the create list form dialog', () => {
    const dialog = screen.getByRole('dialog');

    expect(dialog).toBeInTheDocument();
  });

  it('should render the create list form with a title', () => {
    const dialogTitle = screen.getByText(/Crear nueva lista/i);

    expect(dialogTitle).toBeInTheDocument();
  });

  it('should render the create list form with some inputs', () => {
    const listTitle = screen.getByTestId('listTitle');
    const listDescription = screen.getByTestId('listDescription');

    expect(listTitle).toBeInTheDocument();
    expect(listDescription).toBeInTheDocument();
  });

  it('should render the create list form with a button', () => {
    const button = screen.getByTestId('createListButton');

    expect(button).toBeInTheDocument();
  });
});
