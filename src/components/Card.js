import React from "react";
import styled from "styled-components";
import { Header2, Header3 } from "./Titles";


function Card(props){
  return(
    <CardContainer>
      <CardImg src={props.src}/>
      <CardDesc>
        <Header2 padding=".7rem 0 0 0" textAlign="center">{props.title}</Header2>
        <Header3>{props.desc}</Header3>
      </CardDesc>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  width: 23rem;
  height: 26rem;
  border-radius: 1rem;
  background: ${props => props.theme.colors.mainWhite};
  box-shadow: 10px 10px 49px -22px rgba(0, 0, 0, 0.35);
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const CardImg = styled.img`
  height: auto;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  width: inherit;
`;

const CardDesc = styled.div`
  height: auto;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  width: inherit;
`;

export default Card


