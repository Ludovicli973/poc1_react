import userEvent from "@testing-library/user-event";
import SearchBar from "./SearchBar";
import { render, screen } from "@testing-library/react";

test("when you click on the clear button after typing something, the search bar should be empty", async () => {
  render(<SearchBar initialData={{}} setData={() => {}} />);

  const input = await screen.findByPlaceholderText("Search...");
  userEvent.type(input, "fullmetal");
  const button = await screen.findByRole("clear_button");
  userEvent.click(button);
  expect(input.value).toEqual("");
});
