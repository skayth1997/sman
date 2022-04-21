import styled from "styled-components";
import { DEVICE_SIZES } from "../../../lib/consts";

const Body = styled.div`
  min-height: calc(100% - 100px);
  background: #f5f8fa;

  @media screen and (max-width: ${DEVICE_SIZES.LAPTOP}px) {
    min-height: calc(100% - 90px);
  }
`;

const Section = styled.section`
  flex: 0 1 100%;
  margin-left: 30px;
`;

export { Body, Section };
