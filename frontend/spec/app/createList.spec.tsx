import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from '@jest/globals';
import '@testing-library/jest-dom/jest-globals';

import CreateList from '../../src/app/createList';
import { act } from 'react-dom/test-utils';

describe('CreateList Action', () => {
  beforeEach(() => {
    render(<CreateList />);
  });

  it('should render app and show a button', () => {
    const listAdditionButton = screen.getByTestId('listAdditionButton');

    expect(listAdditionButton).toBeInTheDocument();
  });

  it('should render a modal when addLIstButton is clicked', () => {
    const listAdditionButton = screen.getByTestId('listAdditionButton');

    act(() => {
      listAdditionButton.click();
    });
    const listAdditionForm = screen.getByTestId('addListForm');

    expect(listAdditionForm).toBeInTheDocument();
  });
});
