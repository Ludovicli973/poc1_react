import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("Footer render", () => {
  render(<Footer />);
  const element = screen.getByText(/Instagram/i);

  expect(element).toBeInTheDocument();
});
