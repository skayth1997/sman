import styled from "styled-components";
import { DEVICE_SIZES } from "../../../lib/consts";

const Home = styled.div`
  display: grid;
  grid-template-columns: 350px 2fr 1fr;
  grid-gap: 0 30px;
  min-height: calc(100vh - 100px);

  @media screen and (max-width: ${DEVICE_SIZES.LAPTOP_L}px) {
    grid-template-columns: 350px 1fr 30px;
  }

  @media screen and (max-width: ${DEVICE_SIZES.LAPTOP}px) {
    grid-template-columns: 1fr;
    grid-template-rows: 60px auto;
  }
`;

const LeftAside = styled.aside`
  border-right: 1px solid #d8dee4;
  background: #ffffff;

  @media screen and (max-width: ${DEVICE_SIZES.LAPTOP_L}px) {
    border-right: none;
    border-bottom: 1px solid #d8dee4;
  }
`;

const RightAside = styled.aside`
  border-left: 1px solid #d8dee4;
  background: #ffffff;

  & > div {
    margin: 30px 30px 0;
  }
`;

const Menu = styled.ul`
  padding: 0;
  margin: 30px 30px 0;
  display: grid;

  @media screen and (max-width: ${DEVICE_SIZES.LAPTOP}px) {
    grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
    text-align: center;
    margin: 10px 0;
  }
`;

const MenuItem = styled.li`
  list-style: none;
  padding: 10px 0;

  & > span {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Main = styled.main`
  margin: 30px 0 30px;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;

    li {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        padding: 10px;
        border: 1px #d8dee4 solid;
        border-radius: 3px;
      }
    }

    @media screen and (max-width: ${DEVICE_SIZES.LAPTOP}px) {
      margin: 0 30px;
    }
  }
`;

export { Home, LeftAside, RightAside, Menu, MenuItem, Main };
