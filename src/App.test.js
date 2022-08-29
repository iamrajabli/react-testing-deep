import { render, screen } from '@testing-library/react';
import App from './App';
import axios from 'axios';
import userEvent from '@testing-library/user-event';


jest.mock("axios");


const hits = [
  {
    objectID: "1", title: "Angular"
  },
  {
    objectID: "2", title: "React"
  },
]

describe("App", () => {
  it("fetches news from an Api (resolve)", async () => {
    const promise = Promise.resolve({ data: { hits } });
    axios.get.mockImplementation(() => promise);
    const { getByRole, findAllByRole } = render(<App />);
    userEvent.click(getByRole("button"));
    const items = await findAllByRole("listitem");
    expect(items).toHaveLength(2);

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenLastCalledWith('http://hn.algolia.com/api/v1/search?query=React')
  })

  it("fetches news from an Api (reject)", async () => {
    axios.get.mockImplementation(() => Promise.reject(new Error()));
    const { getByRole, findByText } = render(<App />);
    userEvent.click(getByRole("button"));

    const errorText = await findByText(/Something went wrong/i);
    expect(errorText).toBeInTheDocument()
  })
})