import { CardContainer, ImgContainer, CardDesc, CardVideo } from './CardStyles';
import { Header2, Header3, Link } from '../ComponentsMaster';
import { React, motion, LazyLoadImage } from '../../Dependencies';

function Card(props) {
  return (
    <CardContainer>
      {props.video === true ? (
        <ImgContainer href={props.link}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
          >
            <CardVideo
              poster={props.poster}
              onLoadedData={e => {
                e.target.play();
              }}
              playsInline
              muted
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
