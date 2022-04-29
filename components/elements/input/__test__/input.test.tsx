/** @jest-environment jsdom */
// noinspection TypeScriptValidateTypes

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "../input";
import { ThemeProvider } from "styled-components";
import theme from "../../../../lib/theme";

const renderInput = (label, placeholder) => {
  return render(<Input label={label} placeholder={placeholder} />, {
    wrapper: () => (
      <ThemeProvider theme={theme}>
        <Input label={label} placeholder={placeholder} />
      </ThemeProvider>
    ),
  });
};

describe("Input", () => {
  it("should be input", async () => {
    renderInput("label", "placeholder");
    const inputElement = screen.getByPlaceholderText("placeholder");
    expect(inputElement).toBeInTheDocument();
  });

  it("should be label", async () => {
    renderInput("label", "placeholder");
    const inputElement = screen.getByLabelText("label");
    expect(inputElement).toBeInTheDocument();
  });

  // it("focus on the input when label is clicked", async () => {
  //   renderInput("label", "placeholder");
  //   const labelElement = screen.getByLabelText("label");
  //   const inputElement = screen.getByPlaceholderText("placeholder");
  //   fireEvent.click(labelElement);
  //   await (() => {
  //     expect(document.activeElement).toBe(inputElement);
  //   });
  // });
  //
  // it("should be able to type into input", () => {
  //   renderInput("label", "placeholder");
  //   const inputElement = screen.getByPlaceholderText("placeholder");
  //   fireEvent.change(inputElement, {
  //     target: { value: "Go Grocery Shopping" },
  //   });
  //   expect(inputElement).toHaveDisplayValue("Go Grocery Shopping");
  // });
});
