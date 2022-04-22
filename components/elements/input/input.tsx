import { FunctionComponent } from "react";
import * as S from "./input.styled";
import { InputProps } from "./input.types";
const Input: FunctionComponent<InputProps> = ({ placeholder, label }) => {
  return (
    <S.InputWrapper>
      {label ? (
        <label>
          {label}
          <input type="text" required placeholder={placeholder} />
        </label>
      ) : (
        <input type="text" required placeholder={placeholder} />
      )}
    </S.InputWrapper>
  );
};

export default Input;
