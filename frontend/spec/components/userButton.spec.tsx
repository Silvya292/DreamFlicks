import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import { describe, expect, it } from '@jest/globals';
import UserButton from '../../src/components/userButton';

describe('CustomButton', () => {
  it('should render a button', () => {
    render(<UserButton />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render a button with a label', () => {
    render(<UserButton label="Label" />);
    const button = screen.getByRole('button', { name: 'Label' });

    expect(button).toBeInTheDocument();
  });

  it('should render a button with a default icon', () => {
    render(<UserButton label="Label" registered={false} />);
    const defaultIcon = screen.getByTestId('AccountCircleIcon');

    expect(defaultIcon).toBeInTheDocument();
  });

  it('should render a button with a registered icon', () => {
    render(<UserButton label="Label" registered={true} />);
    const registeredIcon = screen.getByTestId('EmojiEmotionsIcon');

    expect(registeredIcon).toBeInTheDocument();
  });
});
