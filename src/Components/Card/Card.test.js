import { render, screen } from "@testing-library/react";
import Card from "./Card";
import { BrowserRouter as Router } from "react-router-dom";

test("for a given anime, it should return the correct title and image", () => {
  render(
    <Router>
      <Card
        anime={{
          image: "https://cdn.myanimelist.net/images/anime/1764/126627.jpg",
          title: "Bleach: Sennen Kessen-hen",
          Type: "Type",
        }}
      />
    </Router>
  );
  const title = screen.getByText(/Bleach: Sennen Kessen-hen/i);
  expect(title).toBeInTheDocument();
  const image = screen.getByRole("img");
  expect(image).toHaveAttribute(
    "src",
    "https://cdn.myanimelist.net/images/anime/1764/126627.jpg"
  );
});
