import { FunctionComponent } from "react";
import * as S from "./input.styled";
import { InputProps } from "./input.types";

const Input: FunctionComponent<InputProps> = ({ placeholder, label }) => {
  return (
    <S.InputWrapper>
      <input
        aria-label={label}
        type="text"
        placeholder={placeholder}
        required
      />
    </S.InputWrapper>
  );
};

export default Input;
