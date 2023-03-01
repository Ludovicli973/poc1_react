import { fireEvent, render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

const mockedSetData = jest.fn();
const initialData = [];
describe("SearchBar", () => {
  test("when you click on the clear button after typing something, the search bar should be empty", () => {
    //Given
    render(<SearchBar initialData={initialData} setData={mockedSetData} />);

    //When
    const input = screen.getByPlaceholderText(/Search.../i);
    fireEvent.change(input, { target: { value: "fullmetal" } });
    const clearButton = screen.getByRole("clear_button");
    fireEvent.click(clearButton);

    //Then
    expect(input.value).toBe("");
  });
  test("when search input is empty, clear button should be invisible", () => {
    //Given
    render(<SearchBar initialData={initialData} setData={mockedSetData} />);

    //When
    const clearButton = screen.queryByRole("clear_button");

    //Then
    expect(clearButton).toBeNull();
  });

  test("when search input is not empty, clear button should be visible", () => {
    //Given
    render(<SearchBar initialData={initialData} setData={mockedSetData} />);

    //When
    const input = screen.getByPlaceholderText(/Search.../i);
    fireEvent.change(input, { target: { value: "fullmetal" } });
    const clearButton = screen.queryByRole("clear_button");

    //Then
    expect(clearButton).not.toBeNull();
  });
});
