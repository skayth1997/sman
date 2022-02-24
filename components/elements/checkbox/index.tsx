import { FunctionComponent } from "react";
import { CheckboxProps } from "../../../lib/types";
import * as S from "./radio.styled";

const Checkbox: FunctionComponent<CheckboxProps> = (props) => {
  const { name, checked, onChange } = props;

  return (
    <S.Label>
      <S.Checkbox name={name} checked={checked} onChange={onChange} />
      <S.Span>Scales</S.Span>
    </S.Label>
  );
};

Checkbox.defaultProps = {
  checked: false,
  onChange: () => {},
};

export default Checkbox;
