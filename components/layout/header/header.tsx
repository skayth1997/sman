import { FunctionComponent, useState } from "react";
import Head from "next/head";
import * as S from "./header.styles";
import HamburgerMenu from "./hamburger-menu";
import { HeaderProps } from "./header.types";

const Header: FunctionComponent = () => {
  const [state, setState] = useState<HeaderProps>({
    checked: false,
  });

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setState({
      [name]: value,
    });
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.Nav>
        <span>
          <HamburgerMenu
            handleChange={handleChange}
            active={state.checked ?? false}
          />
          <S.Logo active={state.checked ?? false}>Sman</S.Logo>
        </span>

        <S.List active={state.checked ?? false}>
          {["Home", "Contact", "About"].map((item) => (
            <S.ListItem active={state.checked ?? false} key={item}>
              <span>{item}</span>
            </S.ListItem>
          ))}
        </S.List>
      </S.Nav>
    </>
  );
};

export default Header;
