import { FunctionComponent } from "react";
import { RadioProps } from "./radio.types";
import * as S from "./radio.styled";

const Radio: FunctionComponent<RadioProps> = (props) => {
  const { name, label, tabIndex, onChange } = props;

  return (
    <S.Label
      background={label === "" ? "none" : "#f3f3f3ff"}
      boxShadow={label === "" ? "none" : "inset 0 0 0 1px #f3f3f3ff"}
      borderRadius={label === "" ? "0" : "20px"}
    >
      {typeof label === "object" && label.position === "left" && (
        <S.Span>{label.value}</S.Span>
      )}
      <S.Radio
        type="radio"
        name={name}
        tabIndex={tabIndex}
        onChange={onChange}
      />
      {(typeof label === "string" && <S.Span>{label}</S.Span>) ||
        (typeof label === "object" && label.position === "right" && (
          <S.Span>{label.value}</S.Span>
        ))}
    </S.Label>
  );
};

Radio.defaultProps = {
  label: "",
  tabIndex: 0,
};

export default Radio;
