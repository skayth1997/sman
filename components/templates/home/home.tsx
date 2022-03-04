import * as S from "./home.styles";
import { FunctionComponent } from "react";

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
        <ul>
          <li>
            <img src="https://i.imgur.com/2DhmtJ4.jpg" alt="" />
          </li>
          <li>
            <img src="https://i.imgur.com/oYiTqum.jpg" alt="" />
          </li>
          <li>
            <img src="https://i.imgur.com/2DhmtJ4.jpg" alt="" />
          </li>
          <li>
            <img src="https://i.imgur.com/2DhmtJ4.jpg" alt="" />
          </li>
        </ul>
      </S.Main>
    </S.Home>
  );
};

export default Home;
