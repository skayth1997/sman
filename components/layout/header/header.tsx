import { FunctionComponent } from "react";
import Head from "next/head";
import * as S from './header.styles';

const Header: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.Nav>
        <S.Logo>Sman</S.Logo>
        <S.List>
          {["Home", "Contact", "About"].map((item) => (
            <S.ListItem key={item}>{item}</S.ListItem>
          ))}
        </S.List>
      </S.Nav>
    </>
  );
};

export default Header;
