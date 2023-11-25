import React from 'react';
import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import { 
  Prompt,
  IntroText,
  LoginText,
  NotFoundText,
  HelpText,
  AboutText,
  ProjectsText,
  SocialMediaText
} from "./CommandOutputs";

afterEach(() => cleanup());

describe("Test Prompt", () => {
  render(
    <Prompt 
      user={"John Doe"} 
      input={"test"}
    />
  );

  const prompt = screen.getByTestId("prompt-test");

  test("Prompt renders", () => {
    expect(prompt).toBeInTheDocument();
  });

  test("Prompt shows user", () => {
    const user = "John Doe";
    expect(prompt).toHaveTextContent(user);
  });
});

describe("Test LoginText", () => {
  render(
    <LoginText />
  );

  const lastDate = screen.getByTestId("login-date-test");
  
  test("Correct date shows", () => {
    const date = (new Date()).toUTCString();
    expect(lastDate).toHaveTextContent(date);
  });
});