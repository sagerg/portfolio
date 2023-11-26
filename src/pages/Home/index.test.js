import React from 'react';
import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import Home from ".";

afterEach(() => cleanup());

describe("Test Home", () => {
  render(<Home />);

  const home = screen.getByTestId("home-test");

  test("Home renders", () => {
    expect(home).toBeInTheDocument();
  });
});