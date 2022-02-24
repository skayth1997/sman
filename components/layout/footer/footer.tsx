import { FunctionComponent } from "react";
import Image from "next/image";
import * as S from "./footer.styles";

const Footer: FunctionComponent = ({ children }) => {
  return (
    <S.Footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <span>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </S.Footer>
  );
};

export default Footer;
