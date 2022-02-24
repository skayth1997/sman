import type { NextPage } from "next";
import * as S from "../styles/global.styled";
import Input from "../components/elements/input";
import Select from "../components/elements/select";

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <S.Title>Sman</S.Title>
        <br />
        {/* <Checkbox name="checkbox" /> */}
        {/* <Radio name="radio"/> */}

        <br />
        <br />
        <br />
        <br />
        <Select options={[]} />
        <Select options={[]} />
        <div style={{ padding: 50, width: "500px" }}>
          <Input />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius iste
            sit vero? Adipisci aspernatur debitis dignissimos dolor doloremque
            eaque est explicabo fuga iste, porro quasi, ratione sapiente,
            suscipit veniam vero!
          </p>
        </div>

        <p>
          Get started by editing <code>pages/index.tsx</code>
        </p>
      </main>
    </div>
  );
};

export default Home;
