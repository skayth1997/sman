import { FunctionComponent } from "react";
import * as S from "./footer.styles";

const Footer: FunctionComponent = ({ children }) => {
  return (
    <S.Footer>
      Powered by{" "}
      <S.Link href="#">
        <S.Image src="/skayth-logo-white.png" alt="Skayth Logo" />
      </S.Link>
    </S.Footer>
  );
};

export default Footer;
