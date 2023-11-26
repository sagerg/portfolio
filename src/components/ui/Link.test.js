import React from 'react';
import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import Link from "./Link";

afterEach(() => cleanup());

describe("Test Link", () => {
  render(
    <Link>{"This is a test"}</Link>
  );

  const link = screen.getByTestId("link-test");

  test("Link renders", () => {
    expect(link).toBeInTheDocument();
  });

  test("Link renders children", () => {
    const text = "This is a test";
    expect(link).toHaveTextContent(text);
  });
});