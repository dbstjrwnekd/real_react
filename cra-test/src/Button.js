import React from "react";
import styled from "styled-components";

const ButtonCommon = styled.div`
  height: 50px;
  background-color: #aaaaaa;
`;

const ButtonBig = styled(ButtonCommon)`
  width: 100px;
`;

const ButtonSmall = styled(ButtonCommon)`
  width: 50px;
`;

export default function Box({ size }) {
  if (size === "big") return <ButtonBig>큰 버튼</ButtonBig>;
  return <ButtonSmall>작은 버튼</ButtonSmall>;
}
