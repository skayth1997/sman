import { FunctionComponent } from "react";
import Head from "next/head";
import List from "../../elements/list";

const Header: FunctionComponent = (props) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <List items={["Home", "Contact", "About"]} />
      </nav>
    </>
  );
};

export default Header;
