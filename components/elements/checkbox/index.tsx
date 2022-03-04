import { FunctionComponent } from "react";
import { CheckboxProps } from "../../../lib/types";
import * as S from "./checkbox.styled";

const Checkbox: FunctionComponent<CheckboxProps> = (props) => {
  const { name, checked, onChange, hidden, label } = props;

  return (
    <S.Label>
      <S.Checkbox
        hidden={hidden}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <S.Span>{label}</S.Span>
    </S.Label>
  );
};

Checkbox.defaultProps = {
  checked: false,
  onChange: () => {},
  hidden: false,
  label: "",
};

export default Checkbox;
