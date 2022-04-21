/** @jest-environment jsdom */
import {render, screen, fireEvent} from '@testing-library/react';
import "@testing-library/jest-dom"
import Input from "../input";
import {ThemeProvider} from "styled-components";
import theme from "../../../../lib/theme";


describe("input", () => {

  it('input placeholder test', () => {
    render(<Input/>, {
      wrapper: () => <ThemeProvider theme={theme} children={<Input/>}/>
    });
    const inputElement = screen.getByPlaceholderText("write now");
    expect(inputElement).toBeInTheDocument();
  });

  it('input change text', () => {
    render(<Input/>, {
      wrapper: () => <ThemeProvider theme={theme} children={<Input/>}/>
    });
    const inputElement = screen.getByPlaceholderText("write now");
    fireEvent.change(inputElement, {target: {value: "Go Grocery Shopping"}})
    expect(inputElement).toHaveDisplayValue("Go Grocery Shopping");
  });

  it('input label test',  () => {
    render(<Input/>, {
      wrapper:() =><ThemeProvider theme={theme} children={<Input/>}/>
    })
    const inputElement = screen.getByLabelText("Full name")
    expect(inputElement).toBeInTheDocument()
  });
})