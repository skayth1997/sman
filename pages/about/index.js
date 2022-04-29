import * as S from "../../styles/about.styled";
import { useEffect, useState } from "react";

const About = () => {
  const [aboutState, setAboutState] = useState(null);
  useEffect(() => {
    const fetchAbout = async () => {
      const res = await fetch("/api/about");
      const data = await res.json();
      setAboutState(data);
    };
    fetchAbout();
  }, []);

  return (
    <div>
      <S.AboutTitle role={"aboutUs"}>{aboutState?.title}</S.AboutTitle>
      <S.AboutDescription role={"description"}>
        {aboutState?.description}
      </S.AboutDescription>
    </div>
  );
};

export default About;
