import React from 'react';
import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import Terminal from "./Terminal";

afterEach(() => cleanup());

describe("Test Terminal", () => {
  render(
    <Terminal 
      user={"John Doe"} 
      isLoading={false} 
      setLoading={undefined}
    />
  );

  const terminal = screen.getByTestId("terminal-test");

  test("Terminal renders", () => {
    expect(terminal).toBeInTheDocument();
  });

  test("Login text is displayed", () => {
    const text = "Last login: ";
    expect(terminal).toHaveTextContent(text);
  });
});