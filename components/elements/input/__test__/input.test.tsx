/** @jest-environment jsdom */
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "../input";
import { ThemeProvider } from "styled-components";
import theme from "../../../../lib/theme";

const renderForInput = (label, placeholder) => {
  return render(<Input />, {
    wrapper: () => (
      <ThemeProvider
        theme={theme}
        children={<Input label={label} placeholder={placeholder} />}
      />
    ),
  });
};

let inputElement;

describe("input", () => {
  renderForInput("label", "placeholder");
  it("should be able to pass input through placeholder", () => {
    inputElement = screen.getByPlaceholderText("placeholder");
    expect(inputElement).toBeInTheDocument();
  });

  it("should be able to type into input", () => {
    renderForInput("label", "placeholder");
    inputElement = screen.getByPlaceholderText("placeholder");
    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });
    expect(inputElement).toHaveDisplayValue("Go Grocery Shopping");
  });

  it("should be able to pass input through label", () => {
    renderForInput("label", "placeholder");
    inputElement = screen.getByLabelText("label");
    expect(inputElement).toBeInTheDocument();
  });
});
