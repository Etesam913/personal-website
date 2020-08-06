import React from "react";
import {
  CardContainer,
  ImgContainer,
  CardImg,
  CardDesc,
  CardLink
} from "./CardStyles";
import { Header2, Header3 } from "../Titles";

function Card(props) {
  return (
    <CardContainer>
      <ImgContainer href={props.link}>
        <CardImg
          src={props.src}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
        />
      </ImgContainer>

      <CardDesc>
        <CardLink href={props.link} underlineColor={props.color}>
          <Header2
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            textAlign='center'
            color={props.color}
          >
            {props.title}
          </Header2>
        </CardLink>

        <Header3 textAlign='center'>{props.desc}</Header3>
      </CardDesc>
    </CardContainer>
  );
}

export default Card;
