import React from 'react';
import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import Loader from './Loader';

afterEach(() => cleanup());

describe("Test Loader", () => {
  render(
    <Loader 
      user={"John Doe"} 
      isLoading={true} 
      setLoading={undefined}
    />
  );

  const loader = screen.getByTestId("loader-test");

  test("Loader renders", () => {
    expect(loader).toBeInTheDocument();
  });

  // test("Boot text is displayed", () => {
  //   const text = "Boot_Sequence status=started...";
  //   expect(loader).toHaveTextContent(text);
  // });
});