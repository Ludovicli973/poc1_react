import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "./SearchBar";

const mockedSetAnimeList = jest.fn();
const initialAnimeList = [];

describe("When the searchbar is empty", () => {
  test("The clear button should be invisible", async () => {
    render(
      <SearchBar
        initialAnimeList={initialAnimeList}
        setData={mockedSetAnimeList}
      />
    );

    const clear_button = await screen.queryByRole("button", {
      name: "Clear",
    });
    expect(clear_button).not.toBeInTheDocument();
  });
});

describe("When the searchbar is not empty", () => {
  test("The clear button should be visible", async () => {
    render(
      <SearchBar
        initialAnimeList={initialAnimeList}
        setData={mockedSetAnimeList}
      />
    );

    const input = await screen.findByPlaceholderText("Search");
    userEvent.type(input, "fullmetal");
    const clear_button = await screen.findByRole("button", {
      name: "Clear",
    });
    expect(clear_button).toBeVisible();
  });
});

describe("When you have some text in the searchbar and you click on the clear button", () => {
  test("The searchbar should become empty", async () => {
    render(
      <SearchBar
        initialAnimeList={initialAnimeList}
        setAnimeList={mockedSetAnimeList}
      />
    );

    const input = await screen.findByPlaceholderText("Search");
    userEvent.type(input, "fullmetal");
    const clear_button = await screen.findByRole("button", {
      name: "Clear",
    });
    userEvent.click(clear_button);
    expect(input).toHaveValue("");
  });
});
