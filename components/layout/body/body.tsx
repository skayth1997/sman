import { FunctionComponent } from "react";
import * as S from "./body.styles";
import { useRouter } from "next/router";

const Body: FunctionComponent = ({ children }) => {
  const router = useRouter();

  return (
    <S.Body>
      {["/"].includes(router.pathname) ? (
        children
      ) : (
        <S.Section>{children}</S.Section>
      )}
    </S.Body>
  );
};

export default Body;
