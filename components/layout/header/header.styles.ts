import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  background: #24292e;
  color: #ffffff;
  align-items: center;
  height: 60px;
  line-height: 50px;
`;

const Logo = styled.span`
  margin: 0 20px;
  font-weight: 800;
  font-size: 18px;
  cursor: pointer;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  list-style: none;
  display: inline-block;
  cursor: pointer;
  margin: 0 5px;
  padding: 0 5px;
  font-weight: 500;

  &:hover, &:focus, &.active {
    color: #999b9d;
  }
`;

export { Nav, Logo, List, ListItem };
