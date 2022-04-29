import { FunctionComponent, useState } from "react";
import Head from "next/head";
import * as S from "./header.styles";
import HamburgerMenu from "./hamburger-menu";
import { HeaderProps } from "./header.types";
import A from "../../elements/A";

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
  const lists = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Contact", path: "/" },
    { id: 3, name: "About", path: "/about" },
  ];
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.Nav>
        <HamburgerMenu
          handleChange={handleChange}
          active={state.checked ?? false}
        />
        <S.Logo>Sman</S.Logo>

        <S.List active={state.checked ?? false}>
          {lists.map((list) => (
            <S.ListItem active={state.checked ?? false} key={list.id}>
              <span>
                <A href={list.path} text={list.name} />
              </span>
            </S.ListItem>
          ))}
        </S.List>
      </S.Nav>
    </>
  );
};

export default Header;
