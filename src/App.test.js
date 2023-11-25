import React from 'react';
import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "./App";

afterEach(() => cleanup());

describe("Test App", () => {
  render(<App />);
  
  const home = screen.getByTestId("home-test");

  test("App renders", () => {
    expect(home).toBeInTheDocument();
  });
});