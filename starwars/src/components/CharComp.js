import React from "react";
import styled from "styled-components";

let BorderedDiv = styled.div`
  border: 1px dotted black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  color: white;
  width: 200px;
`;

export default function CharComp({ props }) {
  return (
    <BorderedDiv>
      <p>Name: {props.name},</p>
      <p>Height: {props.height},</p>
      <p>Hair color: {props.hair_color}</p>
    </BorderedDiv>
  );
}
