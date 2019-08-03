import React from 'react';
import styled from 'styled-components';

let NiceDiv = styled.div`
    max-width: 200px;
`;

export default function CharComp({props}){
    return (
        <NiceDiv>
            <h3>Name: {props}</h3>
        </NiceDiv>
    )
}