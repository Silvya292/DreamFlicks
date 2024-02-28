import { describe, expect, it } from '@jest/globals';
import '@testing-library/jest-dom/jest-globals';
import { fireEvent, render, screen } from '@testing-library/react';

import AddList from '../../../src/pages/addList';

describe('addList Action', () => {
  it('should render a modal when a button is clicked', () => {
    render(<AddList />);
    const button = screen.getByTestId('addListButton');

    fireEvent.click(button);

    const listForm = screen.getByTestId('createListForm');
    expect(listForm).toBeInTheDocument();
  });
});
