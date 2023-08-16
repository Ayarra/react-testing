import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("App", () => {
  it("renders headline", () => {
    render(<App />);
    const headline = screen.getByText(/It works and aaayou found me!/i);
    expect(headline).toBeInTheDocument();
  });
});

describe("App component", () => {
  it("renders correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
  });
});
