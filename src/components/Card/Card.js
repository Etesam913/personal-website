import React from 'react';
import {
  CardContainer,
  ImgContainer,
  CardImg,
  CardDesc,
  CardLink
} from './CardStyles';
import {motion} from 'framer-motion'
import { Header2, Header3 } from '../styled/Titles';
import { Link } from '../styled/Link';
import { LazyLoadImage } from 'react-lazy-load-image-component';
function Card(props) {
  return (
    <CardContainer>
      <ImgContainer href={props.link}>
        <motion.div whileHover={{scale: 1.1}}>
          <LazyLoadImage
            alt={`project-${props.num}`}
            beforeLoad={() => {
              console.log('bob');
            }}
            src={props.src}
            height='auto'
            width='100%'
          />
        </motion.div>
      </ImgContainer>

      <CardDesc>
        <Link
          href={props.link}
          underline
          underlineColor={props.color}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
        >
          <Header2 textAlign='center' color={props.color}>
            {props.title}
          </Header2>
        </Link>

        <Header3 textAlign='center'>{props.desc}</Header3>
      </CardDesc>
    </CardContainer>
  );
}

export default Card;
