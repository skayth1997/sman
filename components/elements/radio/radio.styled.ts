import styled from "styled-components";

interface LabelProps {
  background: string;
  boxShadow: string;
  borderRadius: string;
}

const Label = styled.label<LabelProps>`
  padding: 6px;

  &:hover,
  &:focus-within {
    box-shadow: ${({ boxShadow }) => boxShadow};
    border-radius: ${({ borderRadius }) => borderRadius};
    background: ${({ background }) => background};
  }
`;

const Radio = styled.input.attrs({ type: "radio" })`
  &:after {
    width: 11px;
    height: 11px;
    border-radius: 15px;
    position: relative;
    background-color: #ffffff;
    content: "";
    display: inline-block;
    visibility: visible;
    border: 1px solid #797979;
  }

  &:checked:after {
    width: 11px;
    height: 11px;
    border-radius: 15px;
    position: relative;
    background-color: #0175ff;
    box-shadow: inset 0 0 0 1.7px #ffffff;
    content: "";
    display: inline-block;
    visibility: visible;
    border: 1px solid #0175ff;
  }
`;

const Span = styled.span`
  margin-top: -6px;
  vertical-align: middle;
  display: inline-block;
  line-height: 20px;
  padding: 0 8px;
`;

export { Label, Radio, Span };
