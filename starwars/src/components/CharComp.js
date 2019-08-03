import React from 'react';
import styled from 'styled-components';

let BorderedDiv = styled.div`
    border: 1px dotted black;
    display: flex;
    justify-content: center;
    margin: 20px;
    color: white;
`;

export default function CharComp({props}){
    return (
        <BorderedDiv>
            Name: {props.name}
        </BorderedDiv>
    )
}