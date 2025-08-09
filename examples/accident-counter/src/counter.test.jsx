import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Counter } from './counter';

import '@testing-library/jest-dom/vitest';

describe('Counter ', () => {
  beforeEach(() => {
    render(<Counter />);
  });

  it('renders with an initial count of 0', () => {
    const counterCount = screen.getByTestId('counter-count');
    expect(counterCount).toHaveTextContent('0');
  });

  it('disables the "Decrement" and "Reset" buttons when the count is 0', () => {
    const decrementButton = screen.getByRole('button', { name: 'Decrement' });
    const resetButton = screen.getByRole('button', { name: 'Reset' });

    expect(decrementButton).toBeDisabled();
    expect(resetButton).toBeDisabled();
  });

  it('displays "days" when the count is 0', () => {
    const counterUnit = screen.getByTestId('counter-unit');
    expect(counterUnit).toHaveTextContent('days');
  });

  it('increments the count when the "Increment" button is clicked', async () => {
    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    const counterCount = screen.getByTestId('counter-count');
    await userEvent.click(incrementButton);
    expect(counterCount).toHaveTextContent('1');
  });

  it('displays "day" when the count is 1', async () => {
    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    const counterCount = screen.getByTestId('counter-count');
    await userEvent.click(incrementButton);
    expect(counterCount).toHaveTextContent('1');
    const counterUnit = screen.getByTestId('counter-unit');
    expect(counterUnit).toHaveTextContent('day');
  });

  it('decrements the count when the "Decrement" button is clicked', async () => {
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    });
    await userEvent.click(incrementButton);
    await userEvent.click(incrementButton);
    const decrementButton = screen.getByRole('button', { name: 'Decrement' });
    const counterCount = screen.getByTestId('counter-count');
    await userEvent.click(decrementButton);
    expect(counterCount).toHaveTextContent('1');
  });

  it('does not allow decrementing below 0', async () => {
    const decrementButton = screen.getByRole('button', { name: 'Decrement' });
    const counterCount = screen.getByTestId('counter-count');
    await userEvent.click(decrementButton);
    expect(counterCount).toHaveTextContent('0');
  });

  it('resets the count when the "Reset" button is clicked', async () => {
    const resetButton = screen.getByRole('button', {
      name: 'Reset',
    });
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    });
    const counterCount = screen.getByTestId('counter-count');
    await userEvent.click(incrementButton);
    await userEvent.click(resetButton);
    expect(counterCount).toHaveTextContent('0');
  });

  it('updates the document title based on the count', async () => {
  const incrementButton = screen.getByText('Increment');
    await userEvent.click(incrementButton);

    expect(document.title).toBe('1 day — Accident Counter');

    await userEvent.click(incrementButton);
    expect(document.title).toBe('2 days — Accident Counter');
  });
});
