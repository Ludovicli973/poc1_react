import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

test("render header", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const limkElement = screen.getByText(/Offres/i);
  expect(limkElement).toBeInTheDocument();
});
