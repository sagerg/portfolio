import React from 'react';
import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import Grid from "./Grid";

afterEach(() => cleanup());

describe("Test Grid", () => {
  render(
    <Grid
      data={
        [
          [
            <div>{"test"}</div>,
            <div>{"test"}</div>
          ]
        ]
      }
    />
  );

  const grid = screen.getByTestId("grid-test");

  test("grid renders", () => {
    expect(grid).toBeInTheDocument();
  });

  test("grid renders data", () => {
    const text = "test";
    expect(grid).toHaveTextContent(text);
  });
});