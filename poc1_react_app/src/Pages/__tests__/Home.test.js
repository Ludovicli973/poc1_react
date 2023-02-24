import { render, screen } from "@testing-library/react";
import { Header } from "../../Components/Header";

test("check if we have 30 titles", () => {
  render(<Header />);
  const elem = screen.findByText("Valeurs");
  expect(elem).toBeInTheDocument();
});
