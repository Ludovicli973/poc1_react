import { cleanup, render, screen } from "@testing-library/react";
import Card from "./Card";
import { BrowserRouter as Router } from "react-router-dom";

// MOCK : of an anime object

const anime_mock = {
  image: "https://cdn.myanimelist.net/images/anime/1764/126627.jpg",
  title: "Bleach: Sennen Kessen-hen",
  type: "TV",
  _id: "41467",
};

// TESTS

test("for a given anime, it should return the correct title and image", () => {
  render(
    <Router>
      <Card anime={anime_mock} />
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
