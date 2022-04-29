import { FunctionComponent } from "react";
import Image from "next/image";
import * as S from "./home.styles";
import { useSelector } from "react-redux";
import { RootModel } from "../../../store/index.types";
// import { RematchDispatch } from "@rematch/core";

const Home: FunctionComponent = () => {
  const images = useSelector((state: RootModel) => state.images);
  // const dispatch = useDispatch<RematchDispatch<RootModel>>();
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const images = await dispatch.images.fetch("hello 1");
  //       dispatch.images.add(images);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   })();
  // }, [dispatch.images]);

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
          {JSON.parse(JSON.stringify(images)).map((image, index) => {
            return (
              <li key={index}>
                <Image
                  src={image.path + image.name}
                  alt={image.alt}
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="cover"
                  priority={true}
                />
              </li>
            );
          })}
        </S.ImagesList>
      </S.Main>
    </S.Home>
  );
};

export default Home;
