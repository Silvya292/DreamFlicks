import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import { describe, expect, it, jest } from '@jest/globals';
import React from 'react';
import CustomButton from '../../../src/components/customButton';

describe('customButton', () => {
  it('should render a CustomButton', () => {
    render(<CustomButton label="foo" />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('foo');
  });

  it('should apply the provided styles', () => {
    const styles = { backgroundColor: 'red', border: '1px solid black' };
    render(<CustomButton styles={styles} />);

    const button = screen.getByRole('button');
    expect(button).toHaveStyle('background-color: red');
    expect(button).toHaveStyle('border: 1px solid black');
  });

  it('should apply the provided text styles', () => {
    const textStyles = { textTransform: 'uppercase', fontWeight: 'bold' };
    render(<CustomButton textStyles={textStyles} />);

    const button = screen.getByRole('button');
    expect(button).toHaveStyle('text-transform: uppercase');
    expect(button).toHaveStyle('font-weight: 700');
  });

  it('should call onClick when the button is clicked', () => {
    const handleClick = jest.fn();
    render(<CustomButton onClick={handleClick} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should render an input file when file prop is true', () => {
    const handleFileChange = jest.fn();
    render(<CustomButton file onChange={handleFileChange} />);

    const input = screen.getByRole('button');
    expect(input).toBeInTheDocument();
  });

  it('should render children inside the button', () => {
    render(
      <CustomButton>
        <span>Child Element</span>
      </CustomButton>
    );
    expect(screen.getByText('Child Element')).toBeInTheDocument();
  });
});
