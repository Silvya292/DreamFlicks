import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import { describe, expect, it, jest } from '@jest/globals';

import CustomButton from '../../src/components/customButton';

describe('CustomButton', () => {
  it('should render a button', () => {
    render(<CustomButton />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render a button with a label', () => {
    render(<CustomButton label="Label" />);
    const button = screen.getByRole('button', { name: 'Label' });

    expect(button).toBeInTheDocument();
  });

  it('should render a button with a label and a background color', () => {
    render(
      <CustomButton label="Label" styles={{ backgroundColor: 'white' }} />
    );
    const button = screen.getByRole('button', { name: 'Label' });

    expect(button).toHaveStyle('background-color: white');
    expect(button).toHaveStyle('color: rgb(0, 0, 0)');
  });

  it('should render a button with an onClick function', () => {
    const onClick = jest.fn();
    render(<CustomButton label="Label" onClick={onClick} />);
    const button = screen.getByRole('button', { name: 'Label' });

    button.click();

    expect(onClick).toHaveBeenCalled();
  });

  it('should render a button with a testId', () => {
    render(<CustomButton label="Label" testId="test-id" />);
    const button = screen.getByTestId('test-id');

    expect(button).toBeInTheDocument();
  });
});
