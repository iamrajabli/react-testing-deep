import { render, screen, fireEvent, getAllByTestId } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe("App", () => {
  it("renders App component", () => {
    render(<App />);
    expect(screen.queryByText(/Searches for React/i)).toBeNull();

    // fireEvent.change(screen.getByRole('textbox'), {
    //   target: { value: 'React' }
    // });

    userEvent.type(screen.getByRole('textbox'), "React")

    expect(screen.getByText(/Searches for React/i)).toBeInTheDocument();
  });

});

describe("Events", () => {
  it("checkbox click", () => {
    const handleChange = jest.fn();
    const { container } = render(<input type="checkbox" onChange={handleChange} />)
    const checkbox = container.firstChild;

    expect(checkbox).not.toBeChecked()
    // fireEvent.click(checkbox);
    userEvent.click(checkbox)
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

  it("double click", () => {
    const handleChange = jest.fn();
    const { container } = render(<input type="checkbox" onChange={handleChange} />);
    const checkbox = container.firstChild;

    expect(checkbox).not.toBeChecked();
    userEvent.dblClick(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(handleChange).toHaveBeenCalledTimes(2);

  })


  it("focus inputs", () => {
    const { getAllByTestId } = render(
      <div>
        <input type="checkbox" data-testid="element" />
        <input type="number" data-testid="element" />
        <input type="radio" data-testid="element" />
      </div>
    );

    const [checkbox, radio, number] = getAllByTestId("element");

    userEvent.tab()
    expect(checkbox).toHaveFocus()

    userEvent.tab()
    expect(radio).toHaveFocus()
    
    userEvent.tab()
    expect(number).toHaveFocus()

  })
})