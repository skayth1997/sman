import styled from "styled-components";

const List = styled.ul`
  padding: 0;
  margin: 0;
  background: #ededed;
  height: 50px;
  line-height: 50px;
`;

const ListItem = styled.li`
  list-style: none;
  display: inline-block;
  cursor: pointer;

  &:not(:first-child) {
    padding-left: 10px;
    padding-right: 10px;
  }

  &:first-child {
    padding-right: 10px;
  }

  &:hover {
    color: blue;
  }
`;

export { List, ListItem };
