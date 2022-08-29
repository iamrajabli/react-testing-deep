import Posts from "./Posts";
import { render } from '@testing-library/react';
import axios from 'axios';
import userEvent from "@testing-library/user-event";

jest.mock('axios');

const data = [
    {
        id: "1", title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    },
    {
        id: "2", title: "qui est esse"
    },
]


describe("Posts", () => {
    it("fetches posts from Json Placeholder API", async () => {
        const promise = Promise.resolve({ data });
        axios.get.mockImplementation(() => promise);
        const { getByRole, findAllByRole } = render(<Posts />);
        userEvent.click(getByRole("button"));
        const items = await findAllByRole('listitem');
        expect(items).toHaveLength(2)
    })
})

