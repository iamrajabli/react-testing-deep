import { render, screen } from '@testing-library/react';
import App from './App';

describe("App", () => {
  it("renders App component", () => {
    render(<App />);
    expect(screen.getByText(/search:/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByAltText('react')).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('search...')).toBeInTheDocument();
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  })
})