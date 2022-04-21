import {FunctionComponent} from "react";
import * as S from "./input.styled";
import { InputProps } from "./input.types";

const Input: FunctionComponent<InputProps> = () => {
  return (
    <S.InputWrapper>
      <input id={"input"} type="text" placeholder={"write now"} required />
      <label htmlFor={"input"}>Full name</label>
    </S.InputWrapper>
  );
};

export default Input;
