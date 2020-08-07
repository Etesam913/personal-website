import React from 'react';
import {
  CardContainer,
  ImgContainer,
  CardImg,
  CardDesc,
  CardLink
} from './CardStyles';
import { Header2, Header3 } from '../styled/Titles';
import { Link } from '../styled/Link';

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
        <Link
          href={props.link}
          underline
          underlineColor={props.color}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
        >
          <Header2
            textAlign='center'
            color={props.color}
          >
            {props.title}
          </Header2>
        </Link>

        <Header3 textAlign='center'>{props.desc}</Header3>
      </CardDesc>
    </CardContainer>
  );
}

export default Card;
