import * as S from "../../styles/about.styled";

export default function About({ aboutState }) {
  return (
    <div>
      <S.AboutTitle role={"aboutUs"}>{aboutState.title}</S.AboutTitle>
      <S.AboutDescription role={"description"}>
        {aboutState.description}
      </S.AboutDescription>
    </div>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch(`${process.env.BACKEND_DOMAIN}about`);
  const aboutState = await response.json();

  return {
    props: { aboutState },
  };
};
