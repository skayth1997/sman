import {FunctionComponent} from "react";
import * as S from "./input.styled";
import { InputProps } from "./input.types";

const Input: FunctionComponent<InputProps> = () => {
  return (
    <S.InputWrapper>
      <input type="text" placeholder={"write now"} required />
      <label>Full name</label>
    </S.InputWrapper>
  );
};

export default Input;
