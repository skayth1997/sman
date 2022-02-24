import styled from "styled-components";

const Footer = styled.div`
  margin-top: auto;
  height: 40px;
  line-height: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  background: #24292e;
  color: #ffffff;
  overflow: hidden;
`;

const Link = styled.a`
  position: relative;
  width: 90px;
`;

const Image = styled.img`
  width: 90px;
  height: 90px;
  position: absolute;
  top: -25px;
  left: 0;
`;

export { Footer, Link, Image };
