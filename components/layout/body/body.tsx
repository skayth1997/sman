import { FunctionComponent } from "react";
import * as S from "./body.styles";

const Body: FunctionComponent = ({ children }) => {
  return <S.Body>{children}</S.Body>;
};

export default Body;
