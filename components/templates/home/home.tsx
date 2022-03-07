import { FunctionComponent } from "react";
import Image from "next/image";
import * as S from "./home.styles";
import { IMAGES } from "../../../lib/consts";

const Home: FunctionComponent = () => {
  return (
    <S.Home>
      <S.LeftAside>
        <S.Menu>
          {["Lorem", "ipsum", "dolor", "sit", "amet"].map((item) => (
            <S.MenuItem key={item}>
              <span>{item}</span>
            </S.MenuItem>
          ))}
        </S.Menu>
      </S.LeftAside>

      <S.Main>
        <S.ImagesList>
          {IMAGES.map(({ path, name, alt }, index) => (
            <li key={index}>
              <Image
                src={path + name}
                alt={alt}
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="cover"
                priority={true}
              />
            </li>
          ))}
        </S.ImagesList>
      </S.Main>
    </S.Home>
  );
};

export default Home;
