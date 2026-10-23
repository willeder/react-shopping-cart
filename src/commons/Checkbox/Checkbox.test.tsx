import { render, fireEvent, screen } from '@testing-library/react';

import Checkbox from '.';

const mockLabel = 'XL';
const mockHandleOnChange = jest.fn();

describe('[commons] - Checkbox', () => {
  const setup = () => {
    return render(
      <Checkbox label={mockLabel} handleOnChange={mockHandleOnChange} />
    );
  };

  test('should render correctly with label and a checkmark', () => {
    const { container } = setup();

    expect(screen.getByText(mockLabel)).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector('.checkmark')).toBeTruthy();
  });

  test('should toggle checked when clicked', () => {
    setup();
    const checkbox = screen.getByTestId('checkbox');

    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();

    expect(mockHandleOnChange).toBeCalledTimes(2);
  });
});
