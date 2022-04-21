/** @jest-environment jsdom */
import {
  render, screen,
  // fireEvent
} from '@testing-library/react';
import "@testing-library/jest-dom"
import Input from "../input";
import {ThemeProvider} from "styled-components";
import theme from "../../../../lib/theme";

describe("AddInput", () => {

  it('should be able to type into input', () => {
    render(<Input/>, {
      wrapper: props => <ThemeProvider theme={theme} {...props}/>
    });
    const inputElement = screen.getByPlaceholderText("write now");
    // fireEvent.click(inputElement)
    // fireEvent.change(inputElement, {target: {value: "Go Grocery Shopping"}})
    expect(inputElement).toBeDefined();

  });

  // it('should be able to type into input', () => {
  //   render(<Input/>);
  //   const inputElement = screen.getByPlaceholderText("write now");
  //   // fireEvent.click(inputElement)
  //   // fireEvent.change(inputElement, {target: {value: "Go Grocery Shopping"}})
  //   expect(inputElement).toBeInTheDocument();
  //
  // });
})