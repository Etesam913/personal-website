import {
  CardContainer,
  ImgContainer,
  CardDesc,
  CardVideo,
} from './CardStyles';
import { Header3, Link } from 'components/ComponentsMaster';
import { React, motion, LazyLoadImage } from 'Dependencies';

function Card(props) {
  return (
    <CardContainer>
      {props.video === true ? (
        <ImgContainer href={props.link}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
            <CardVideo
              poster={props.poster}
              onLoadedData={(e) => {
                e.target.play();
              }}
              playsInline
              muted
              preload
              autoPlay
              loop
              src={props.src}
            />
          </motion.div>
        </ImgContainer>
      ) : (
        <ImgContainer href={props.link}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
            <LazyLoadImage
              alt={`project-${props.num}`}
              src={props.src}
              height='auto'
              width='100%'
            />
          </motion.div>
        </ImgContainer>
      )}

      <CardDesc>
        <Link
          href={props.link}
          underline
          color={props.color}
          underlineColor={props.color}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
        >
          {props.title}
        </Link>

        <Header3 padding='0 0.35rem' textAlign='center'>
          {props.desc}
        </Header3>
      </CardDesc>
    </CardContainer>
  );
}

export default Card;
