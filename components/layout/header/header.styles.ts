import styled, { css } from "styled-components";
import { DEVICE_SIZES } from "../../../lib/consts";

interface HamburgerMenuLineInterface {
  active: boolean;
}

interface ListInterface {
  active: boolean;
}

interface ListItemInterface {
  active: boolean;
}

interface LogoInterface {
  active: boolean;
}

const Nav = styled.nav`
  display: grid;
  grid-template-columns: auto auto 1fr;
  background: #24292e;
  color: #ffffff;
  align-items: center;
  height: 60px;

  @media screen and (max-width: ${DEVICE_SIZES.LAPTOP}px) {
    grid-template-columns: auto 4fr auto;
  }
`;

const Logo = styled.span<LogoInterface>`
  margin: 0 20px;
  font-weight: 800;
  font-size: 18px;
  cursor: pointer;
  background: -webkit-linear-gradient(45deg, #f07715, #df3113);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${({ active }) =>
    active &&
    css`
      visibility: hidden;
    `};

  @media screen and (max-width: ${DEVICE_SIZES.LAPTOP}px) {
    visibility: hidden;
  }
`;

const List = styled.ul<ListInterface>`
  padding: 0;
  margin: 0;

  @media screen and (max-width: ${DEVICE_SIZES.LAPTOP}px) {
    transform: translate(-150%);

    ${({ active }) =>
      active &&
      css`
        padding-top: 60px;
        height: calc(100vh - 40px);
        background: #24292e;
        max-width: 300px;
        transform: inherit;
        z-index: 1;
        margin-left: -91px;
        transition: transform 0.5s ease-in-out;
        overflow: scroll;
      `}
  }
`;

const ListItem = styled.li<ListItemInterface>`
  list-style: none;
  display: inline-block;
  margin: 0 5px;
  padding: 0 5px;
  font-weight: 500;

  & span {
    cursor: pointer;

    &:hover,
    &:focus,
    &.active {
      color: #999b9d;
    }
  }

  @media screen and (max-width: ${DEVICE_SIZES.LAPTOP}px) {
    ${({ active }) =>
      active &&
      css`
        display: block;
        padding: 20px;
      `}
  }
`;

const HamburgerMenu = styled.div`
  input[type="checkbox"] {
    position: absolute;
    display: block;
    height: 32px;
    width: 30px;
    top: 16px;
    left: 20px;
    z-index: 5;
    opacity: 0;
    cursor: pointer;
  }

  @media screen and (min-width: ${DEVICE_SIZES.LAPTOP}px) {
    visibility: hidden;
  }
`;

const HamburgerMenuLines = styled.div`
  height: 28px;
  width: 35px;
  position: absolute;
  top: 16px;
  left: 20px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const HamburgerMenuLine = styled.div<HamburgerMenuLineInterface>`
  display: block;
  height: 4px;
  width: 100%;
  border-radius: 10px;
  transition: transform 0.5s ease;
  background: linear-gradient(45deg, #f07715, #df3113);

  ${({ active }) =>
    active &&
    css`
    &:nth-child(1) {
      transform-origin: 0 0;
      transition: transform 0.3s ease-in-out;
      transform: rotate(45deg);
    }

    &:nth-child(2) {
      transition: transform 0.1s ease-in-out;
      transform: scaleY(0);
    }

    &:nth-child(3) {
      transform-origin: 0 100%;
      transition: transform 0.3s ease-in-out;
      transform: rotate(-45deg);
  `}
`;

export {
  Nav,
  Logo,
  List,
  ListItem,
  HamburgerMenu,
  HamburgerMenuLines,
  HamburgerMenuLine,
};
