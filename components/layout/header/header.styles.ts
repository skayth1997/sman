import styled, { css } from "styled-components";
import { DEVICE_SIZES } from "../../../lib/consts";
import {
  HamburgerMenuLineInterface,
  ListInterface,
  ListItemInterface,
} from "./header.types";

const Nav = styled.nav`
  display: grid;
  grid-template-columns: auto auto 1fr;
  background: #24292e;
  color: #ffffff;
  align-items: center;
  padding: 20px 0;

  @media screen and (max-width: ${DEVICE_SIZES.LAPTOP}px) {
    padding: 0;
    grid-template-columns: auto;
    grid-template-rows: 50px auto;
  }
`;

const Logo = styled.span`
  margin: 0 20px;
  font-weight: 800;
  font-size: 18px;
  cursor: pointer;
  background: #ffffff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block;

  @media screen and (max-width: ${DEVICE_SIZES.LAPTOP}px) {
    display: none;
  }
`;

const List = styled.ul<ListInterface>`
  padding: 0;
  margin: 0;

  @media screen and (max-width: ${DEVICE_SIZES.LAPTOP}px) {
    position: absolute;
    transform: translate(-150%);
    margin-bottom: 10px;

    ${({ active }) =>
      active &&
      css`
        position: static;
        transform: inherit;
        transition: transform 0.1s ease-in-out;
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
    padding: 5px;
    margin: 0 10px;
    cursor: pointer;

    &:hover,
    &:focus,
    &.active {
      color: #999b9d;
    }

    &:not(:first-child) {
      border-top: 1px solid #FFFFFF26;
    }

    ${({ active }) =>
      active &&
      css`
        display: block;
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
  height: 18px;
  width: 22px;
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
  transition: transform 0.1s ease;
  background: #ffffff;

  ${({ active }) =>
    active &&
    css`
    &:nth-child(1) {
      transform-origin: 0 0;
      transition: transform 0.1s ease-in-out;
      transform: rotate(45deg);
    }

    &:nth-child(2) {
      transition: transform 0.1s ease-in-out;
      transform: scaleY(0);
    }

    &:nth-child(3) {
      transform-origin: 0 100%;
      transition: transform 0.1s ease-in-out;
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
