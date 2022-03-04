import { FunctionComponent, memo } from "react";
import Checkbox from "../../elements/checkbox";
import * as S from "./header.styles";
import { HamburgerMenuProps } from "./header.types";

const HamburgerMenu: FunctionComponent<HamburgerMenuProps> = (props) => {
  const { active, handleChange } = props;

  return (
    <S.HamburgerMenu>
      <Checkbox name="checked" checked={active} onChange={handleChange} />

      <S.HamburgerMenuLines>
        {[1, 2, 3].map((index) => (
          <S.HamburgerMenuLine key={index} active={active} />
        ))}
      </S.HamburgerMenuLines>
    </S.HamburgerMenu>
  );
};

export default memo(HamburgerMenu);
