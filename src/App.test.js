import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe("App", () => {
  it("renders App component", () => {
    render(<App />);
    expect(screen.queryByText(/Searches for React/i)).toBeNull();

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'React' }
    });

    expect(screen.getByText(/Searches for React/i)).toBeInTheDocument();
  });

});

describe("Events", () => {
  it("checkbox click", () => {
    const handleChange = jest.fn();
    const { container } = render(<input type="checkbox" onChange={handleChange} />)
    const checkbox = container.firstChild;

    expect(checkbox).not.toBeChecked()
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked()
    expect(handleChange).toHaveBeenCalledTimes(1)

  })

  it("input focus", () => {

    render(<input type="text" data-testid="simple-input" />)
    const input = screen.getByTestId("simple-input");
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  })
})