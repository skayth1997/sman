import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  padding-top: 1.5rem;

  & label {
    color: #8597a3;
    position: absolute;
    top: 1.5rem;
    transition: 0.25s ease;
  }

  & input {
    border: 0;
    z-index: 1;
    background-color: transparent;
    border-bottom: 2px solid ${({ theme }) => theme.input.borderColor.normal};
    font: inherit;
    font-size: 1rem;
    padding: 0.25rem 0;

    &:focus,
    &:valid {
      outline: 0;
      border-bottom-color: ${({ theme }) => theme.input.borderColor.focus};

      & + label {
        color: ${({ theme }) => theme.input.label.color};
        transform: translateY(-1rem);
      }
    }
  }
`;

export { InputWrapper };
