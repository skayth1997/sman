import { FunctionComponent, memo } from "react";
import { ListProps } from "./list.types";
import * as S from "./list.styled";

const List: FunctionComponent<ListProps> = ({ items }) => {
  return (
    <S.List>
      {items.map((item) => (
        <S.ListItem key={item}>{item}</S.ListItem>
      ))}
    </S.List>
  );
};

export default memo(List);
